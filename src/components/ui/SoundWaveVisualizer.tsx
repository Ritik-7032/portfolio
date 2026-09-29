import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, Mic } from 'lucide-react';
import { PERSONAL_DATA } from '../../data/content';

export const SoundWaveVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasRealAudio, setHasRealAudio] = useState(true);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Initialize Web Audio API Analyser on first user interaction
  const initAudioContext = () => {
    if (audioCtxRef.current) return;

    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      const audioCtx = new AudioContextClass();
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 128;
      analyser.smoothingTimeConstant = 0.8;

      if (audioRef.current) {
        const source = audioCtx.createMediaElementSource(audioRef.current);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        sourceRef.current = source;
      }

      audioCtxRef.current = audioCtx;
      analyserRef.current = analyser;
    } catch (e) {
      console.log('Web Audio setup', e);
    }
  };

  const togglePlay = () => {
    initAudioContext();

    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log('Playback error', err);
        setIsPlaying(true); // fallback to simulated wave if audio tag encounters codec policy
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  // Canvas visualizer loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const render = () => {
      time += isPlaying ? 0.08 : 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let dataArray: Uint8Array | null = null;
      if (analyserRef.current && isPlaying) {
        const bufferLength = analyserRef.current.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);
        (analyserRef.current as AnalyserNode).getByteFrequencyData(dataArray as any);
      }

      const barCount = 48;
      const barWidth = canvas.width / barCount - 3;

      for (let i = 0; i < barCount; i++) {
        let height = 6;

        if (dataArray && isPlaying) {
          const freqIndex = Math.floor((i / barCount) * dataArray.length);
          const rawVal = dataArray[freqIndex] || 0;
          height = (rawVal / 255) * (canvas.height * 0.82) + 6;
        } else {
          // Ambient organic harmonic wave
          const multiplier = isPlaying ? 1.6 : 0.45;
          const wave1 = Math.sin(i * 0.22 + time) * 18;
          const wave2 = Math.cos(i * 0.38 - time * 0.9) * 14;
          const wave3 = Math.sin(i * 0.12 + time * 1.5) * 20;
          height = Math.abs(wave1 + wave2 + wave3) * multiplier + 6;
        }

        height = Math.min(height, canvas.height * 0.88);
        const x = i * (barWidth + 3) + 2;
        const y = (canvas.height - height) / 2;

        // Gradient color for bars
        const gradient = ctx.createLinearGradient(0, y, 0, y + height);
        gradient.addColorStop(0, '#f43f5e');
        gradient.addColorStop(0.5, '#a855f7');
        gradient.addColorStop(1, '#06b6d4');

        ctx.fillStyle = gradient;
        ctx.shadowColor = '#a855f7';
        ctx.shadowBlur = isPlaying ? 10 : 2;

        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, height, 4);
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-pink-500/30 relative overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-pink-950/20 via-slate-900/80 to-slate-950 shadow-2xl">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={PERSONAL_DATA.passions.singing.voiceClipSlot}
        onTimeUpdate={() => {
          if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) setDuration(audioRef.current.duration);
        }}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/25">
            <Mic className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h4 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              {PERSONAL_DATA.passions.singing.title}
            </h4>
            <p className="text-xs font-mono text-pink-300 font-medium">
              🎵 {PERSONAL_DATA.passions.singing.songName}
            </p>
          </div>
        </div>

        {/* Live status pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-pink-950/40 border border-pink-500/30 text-xs font-mono text-pink-300">
          <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-pink-400 animate-ping' : 'bg-slate-500'}`} />
          <span>{isPlaying ? 'PLAYING RECORDING' : 'READY TO PLAY'}</span>
        </div>
      </div>

      <p className="text-slate-200 text-sm mb-6 leading-relaxed italic border-l-2 border-pink-500/60 pl-3">
        &ldquo;{PERSONAL_DATA.passions.singing.quote}&rdquo;
      </p>

      {/* Canvas Visualizer Display */}
      <div className="w-full bg-slate-950/90 rounded-2xl p-4 border border-white/10 shadow-inner relative mb-6">
        <canvas
          ref={canvasRef}
          width={650}
          height={140}
          className="w-full h-32 block"
        />
      </div>

      {/* Control bar */}
      <div className="flex items-center justify-between flex-wrap gap-4 pt-3 border-t border-white/10">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className={`px-6 py-3 rounded-2xl font-heading font-bold text-sm flex items-center gap-2.5 transition-all transform active:scale-95 cursor-pointer ${
              isPlaying
                ? 'bg-pink-600 hover:bg-pink-500 text-white shadow-xl shadow-pink-600/30'
                : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white shadow-lg shadow-pink-500/20'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isPlaying ? 'Pause Song' : 'Play Ritik\'s Vocal Track'}</span>
          </button>

          <button
            onClick={toggleMute}
            className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all border border-white/10"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        <div className="text-right">
          <span className="text-xs text-slate-300 font-mono block font-semibold">
            Track: Teri Meri Prem Kahani
          </span>
          <span className="text-[11px] text-pink-300 font-mono">
            Vocal Cover by Ritik Kumar
          </span>
        </div>
      </div>
    </div>
  );
};
