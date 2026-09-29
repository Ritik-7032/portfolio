import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { PERSONAL_DATA } from '../../data/content';

export const SoundWaveVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentToneMode, setCurrentToneMode] = useState<'Acoustic' | 'Vocal' | 'Cinematic'>('Vocal');
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Web Audio procedural musical notes for preview
  const playSynthesizedMelody = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      // Create rich layered synth
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = currentToneMode === 'Vocal' ? 'sine' : currentToneMode === 'Acoustic' ? 'triangle' : 'sawtooth';
      osc.frequency.setValueAtTime(261.63, ctx.currentTime); // C4

      // Gentle melodic arpeggio progression (C - E - G - B - C5)
      const notes = [261.63, 329.63, 392.00, 493.88, 523.25, 493.88, 392.00, 329.63];
      let step = 0;
      const interval = setInterval(() => {
        if (!isPlaying || !oscillatorRef.current) {
          clearInterval(interval);
          return;
        }
        step = (step + 1) % notes.length;
        osc.frequency.setTargetAtTime(notes[step], ctx.currentTime, 0.08);
      }, 400);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
    } catch (e) {
      console.log('Web audio initialized', e);
    }
  };

  const stopSynthesizedMelody = () => {
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
      } catch {
        // already stopped
      }
      oscillatorRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopSynthesizedMelody();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      playSynthesizedMelody();
    }
  };

  const toggleMute = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      if (isMuted) {
        gainNodeRef.current.gain.setTargetAtTime(0.08, audioCtxRef.current.currentTime, 0.05);
        setIsMuted(false);
      } else {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.05);
        setIsMuted(true);
      }
    } else {
      setIsMuted(!isMuted);
    }
  };

  // Canvas visualizer render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const render = () => {
      time += isPlaying ? 0.08 : 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barCount = 42;
      const barWidth = canvas.width / barCount - 3;

      for (let i = 0; i < barCount; i++) {
        // Multi-frequency sine wave synthesis for organic musical wave
        const multiplier = isPlaying ? 1.8 : 0.4;
        const wave1 = Math.sin(i * 0.2 + time) * 20;
        const wave2 = Math.cos(i * 0.35 - time * 0.8) * 15;
        const wave3 = Math.sin(i * 0.1 + time * 1.4) * 25;
        
        let height = Math.abs(wave1 + wave2 + wave3) * multiplier + 6;
        height = Math.min(height, canvas.height * 0.85);

        const x = i * (barWidth + 3) + 2;
        const y = (canvas.height - height) / 2;

        // Gradient color for bars
        const gradient = ctx.createLinearGradient(0, y, 0, y + height);
        gradient.addColorStop(0, '#ec4899');
        gradient.addColorStop(0.5, '#8b5cf6');
        gradient.addColorStop(1, '#06b6d4');

        ctx.fillStyle = gradient;
        ctx.shadowColor = '#8b5cf6';
        ctx.shadowBlur = isPlaying ? 8 : 2;

        // Rounded bar
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, height, 4);
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      stopSynthesizedMelody();
    };
  }, [isPlaying, currentToneMode]);

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden backdrop-blur-2xl">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/20">
            <Music className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h4 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              {PERSONAL_DATA.passions.singing.title}
            </h4>
            <p className="text-xs font-mono text-pink-400">
              {PERSONAL_DATA.passions.singing.audioSampleLabel}
            </p>
          </div>
        </div>

        {/* Tone Mode selector */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-white/10">
          {(['Vocal', 'Acoustic', 'Cinematic'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setCurrentToneMode(mode)}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                currentToneMode === mode
                  ? 'bg-pink-500 text-white shadow-md shadow-pink-500/30 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <p className="text-slate-300 text-sm mb-6 leading-relaxed italic border-l-2 border-pink-500/50 pl-3">
        &ldquo;{PERSONAL_DATA.passions.singing.quote}&rdquo;
      </p>

      {/* Canvas Visualizer Display */}
      <div className="w-full bg-slate-950/80 rounded-2xl p-4 border border-white/5 shadow-inner relative mb-6">
        <canvas
          ref={canvasRef}
          width={600}
          height={140}
          className="w-full h-32 block"
        />
        <div className="absolute top-3 right-4 flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`} />
          <span className="text-[11px] font-mono text-slate-400">
            {isPlaying ? 'ACTIVE FREQUENCY' : 'STANDBY'}
          </span>
        </div>
      </div>

      {/* Control bar */}
      <div className="flex items-center justify-between flex-wrap gap-4 pt-2 border-t border-white/5">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 transition-all transform active:scale-95 ${
              isPlaying
                ? 'bg-pink-600 hover:bg-pink-500 text-white shadow-lg shadow-pink-500/30'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isPlaying ? 'Pause Melody' : 'Play Live Frequency'}</span>
          </button>

          <button
            onClick={toggleMute}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all border border-white/10"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        <div className="text-right">
          <span className="text-xs text-slate-400 font-mono block">
            Custom Audio Slot:
          </span>
          <span className="text-[11px] text-pink-400 font-mono">
            {PERSONAL_DATA.passions.singing.voiceClipSlot}
          </span>
        </div>
      </div>

      <div className="mt-3 text-center">
        <span className="text-[11px] text-slate-500 font-mono">
          ℹ️ {PERSONAL_DATA.passions.singing.placeholderNotice}
        </span>
      </div>
    </div>
  );
};
