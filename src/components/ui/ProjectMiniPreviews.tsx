import React from 'react';
import { 
  Sparkles, CheckCircle2, ShieldCheck, Video, MessageSquare, 
  Terminal, BarChart3, Database, Send, Play, Users, Cpu, FileText
} from 'lucide-react';

export const CollabDeskPreview: React.FC = () => (
  <div className="w-full h-full bg-[#090e1a] p-3 text-xs flex flex-col justify-between font-sans select-none">
    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
      <div className="flex items-center gap-1.5 font-bold text-white">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>CollabDesk Workspace</span>
      </div>
      <span className="px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 font-mono text-[9px] border border-violet-500/30">
        Gemini AI Integrated
      </span>
    </div>

    {/* Kanban Columns */}
    <div className="grid grid-cols-3 gap-2 my-2">
      {/* Column 1 */}
      <div className="bg-slate-900/90 rounded-lg p-1.5 border border-white/5">
        <span className="text-[9px] font-mono text-slate-400 block mb-1">TO DO (2)</span>
        <div className="bg-slate-800/90 rounded p-1.5 border border-white/5 mb-1 text-[10px] text-slate-200">
          Setup EC2 PM2 Cluster
        </div>
        <div className="bg-slate-800/90 rounded p-1.5 border border-white/5 text-[10px] text-slate-200">
          Razorpay Webhook
        </div>
      </div>

      {/* Column 2 */}
      <div className="bg-slate-900/90 rounded-lg p-1.5 border border-cyan-500/30">
        <span className="text-[9px] font-mono text-cyan-400 font-bold block mb-1">LIVE SYNC (1)</span>
        <div className="bg-cyan-950/40 rounded p-1.5 border border-cyan-500/40 text-[10px] text-cyan-200">
          <div className="flex items-center gap-1 font-bold text-[10px] mb-0.5">
            <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
            <span>AI Subtask Generation</span>
          </div>
          <span className="text-[8px] text-slate-300 block">Socket.io Room Active</span>
        </div>
      </div>

      {/* Column 3 */}
      <div className="bg-slate-900/90 rounded-lg p-1.5 border border-white/5">
        <span className="text-[9px] font-mono text-emerald-400 block mb-1">DONE (3)</span>
        <div className="bg-emerald-950/30 rounded p-1.5 border border-emerald-500/30 text-[10px] text-emerald-200">
          AWS S3 Upload Pipe
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-white/5 font-mono">
      <span>Latency: &lt;50ms</span>
      <span className="text-cyan-400 font-bold">● WebSocket Connected</span>
    </div>
  </div>
);

export const EmailSchedulerPreview: React.FC = () => (
  <div className="w-full h-full bg-[#080d1a] p-3 text-xs flex flex-col justify-between font-sans select-none">
    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
      <div className="flex items-center gap-1.5 font-bold text-white">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>BullMQ Async Queue Stream</span>
      </div>
      <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-mono text-[9px] border border-red-500/30">
        Atomic Redis Lua
      </span>
    </div>

    <div className="grid grid-cols-3 gap-2 my-2 text-center">
      <div className="p-1.5 rounded-lg bg-slate-900/90 border border-white/5">
        <span className="text-[8px] font-mono text-slate-400 block">THROUGHPUT</span>
        <span className="text-xs font-bold text-cyan-400 font-mono">10,000 / Req</span>
      </div>
      <div className="p-1.5 rounded-lg bg-slate-900/90 border border-white/5">
        <span className="text-[8px] font-mono text-slate-400 block">WORKERS</span>
        <span className="text-xs font-bold text-emerald-400 font-mono">4 Nodes Idle</span>
      </div>
      <div className="p-1.5 rounded-lg bg-slate-900/90 border border-white/5">
        <span className="text-[8px] font-mono text-slate-400 block">RECOVERY</span>
        <span className="text-xs font-bold text-violet-400 font-mono">Idempotent</span>
      </div>
    </div>

    <div className="space-y-1 bg-slate-950/80 p-1.5 rounded-lg border border-white/5 font-mono text-[9px]">
      <div className="flex justify-between text-slate-300">
        <span className="text-cyan-400">JOB #9421</span>
        <span>Bulk Auth Dispatch (3,200 emails)</span>
        <span className="text-emerald-400">SUCCESS (0.6s)</span>
      </div>
      <div className="flex justify-between text-slate-300">
        <span className="text-cyan-400">JOB #9422</span>
        <span>Delayed Newsletter Campaign</span>
        <span className="text-amber-400">PROCESSING (Lua 50/s)</span>
      </div>
    </div>
  </div>
);

export const EdutomPreview: React.FC = () => (
  <div className="w-full h-full bg-[#061220] p-3 text-xs flex flex-col justify-between font-sans select-none">
    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
      <div className="flex items-center gap-1.5 font-bold text-white">
        <span className="w-2 h-2 rounded-full bg-blue-400" />
        <span>Edutom Learning Portal</span>
      </div>
      <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[9px]">
        Full-Stack LMS
      </span>
    </div>

    <div className="grid grid-cols-2 gap-2 my-2">
      <div className="bg-slate-900/90 p-2 rounded-lg border border-blue-500/20">
        <span className="text-[10px] font-bold text-white block mb-0.5">Full Stack Web Architecture</span>
        <span className="text-[8px] text-slate-400 block mb-1.5">MERN, Redis, S3 & Docker</span>
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div className="w-3/4 h-full bg-blue-400 rounded-full" />
        </div>
        <span className="text-[8px] font-mono text-blue-300 mt-1 block">75% Completed</span>
      </div>

      <div className="bg-slate-900/90 p-2 rounded-lg border border-violet-500/20">
        <span className="text-[10px] font-bold text-white block mb-0.5">C++ & Algorithmic DSA</span>
        <span className="text-[8px] text-slate-400 block mb-1.5">250+ Practice Problems</span>
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div className="w-[90%] h-full bg-violet-400 rounded-full" />
        </div>
        <span className="text-[8px] font-mono text-violet-300 mt-1 block">90% Completed</span>
      </div>
    </div>

    <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pt-1 border-t border-white/5">
      <span>Interactive Video Lectures & Quizzes</span>
      <span className="text-emerald-400">Live on Vercel</span>
    </div>
  </div>
);

export const CuriBlogPreview: React.FC = () => (
  <div className="w-full h-full bg-[#0a0a14] p-3 text-xs flex flex-col justify-between font-sans select-none">
    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
      <div className="flex items-center gap-1.5 font-bold text-white">
        <span className="w-2 h-2 rounded-full bg-purple-400" />
        <span>CuriBlog Publishing</span>
      </div>
      <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-[9px]">
        Markdown CMS
      </span>
    </div>

    <div className="my-1.5 bg-slate-950 p-2 rounded-lg border border-white/5">
      <span className="text-[8px] font-mono text-purple-400 uppercase block mb-0.5">#DISTRIBUTED SYSTEMS</span>
      <span className="text-[11px] font-bold text-white block mb-1">Scaling Message Queues with BullMQ & Redis</span>
      <div className="bg-slate-900 p-1.5 rounded font-mono text-[8px] text-cyan-300">
        const queue = new Queue(&apos;emailPipeline&apos;, &#123; connection: redis &#125;);
      </div>
    </div>

    <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pt-1 border-t border-white/5">
      <span>Rich Markdown + Code Parser</span>
      <span className="text-purple-300">420 Claps • 6m read</span>
    </div>
  </div>
);

export const TinglPreview: React.FC = () => (
  <div className="w-full h-full bg-[#0e0717] p-3 text-xs flex flex-col justify-between font-sans select-none">
    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
      <div className="flex items-center gap-1.5 font-bold text-white">
        <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
        <span>Tingl Real-Time Chat</span>
      </div>
      <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 font-mono text-[9px]">
        Socket.io Rooms
      </span>
    </div>

    <div className="space-y-1.5 my-1.5 text-[9px]">
      <div className="bg-slate-900/90 p-1.5 rounded-lg text-slate-300 w-4/5">
        Hey team! Are the WebRTC video feeds synced?
      </div>
      <div className="bg-pink-600 p-1.5 rounded-lg text-white font-medium ml-auto w-4/5 text-right">
        Yes, sub-50ms latency with WebSocket rooms!
      </div>
    </div>

    <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pt-1 border-t border-white/5">
      <span>Active Users: 12 Online</span>
      <span className="text-pink-400">● Live Chat</span>
    </div>
  </div>
);

export const MeetOnGoPreview: React.FC = () => (
  <div className="w-full h-full bg-[#041219] p-3 text-xs flex flex-col justify-between font-sans select-none">
    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
      <div className="flex items-center gap-1.5 font-bold text-white">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>MeetOnGo Video Room</span>
      </div>
      <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[9px]">
        WebRTC P2P
      </span>
    </div>

    <div className="grid grid-cols-2 gap-1.5 my-1.5">
      <div className="bg-slate-900 rounded p-2 border border-cyan-400/40 relative text-center">
        <Video className="w-4 h-4 text-cyan-400 mx-auto mb-0.5" />
        <span className="text-[9px] font-bold text-white">Ritik (Host)</span>
      </div>
      <div className="bg-slate-900 rounded p-2 border border-white/5 text-center">
        <Users className="w-4 h-4 text-slate-400 mx-auto mb-0.5" />
        <span className="text-[9px] text-slate-300">Sarah (Remote)</span>
      </div>
    </div>

    <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pt-1 border-t border-white/5">
      <span>Screen Share: Active</span>
      <span className="text-cyan-400 font-bold">● P2P Stream</span>
    </div>
  </div>
);

export const LeafEnhancerPreview: React.FC = () => (
  <div className="w-full h-full bg-[#041a0f] p-3 text-xs flex flex-col justify-between font-sans select-none">
    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
      <div className="flex items-center gap-1.5 font-bold text-white">
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span>LeafEnhancer AI AgroTech</span>
      </div>
      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[9px]">
        Computer Vision
      </span>
    </div>

    <div className="my-1.5 bg-slate-900 p-2 rounded-lg border border-emerald-500/30 text-[9px]">
      <div className="flex justify-between text-slate-300 mb-1">
        <span className="font-bold text-white">Condition: Early Blight</span>
        <span className="text-emerald-400 font-bold">96.8% Confidence</span>
      </div>
      <span className="text-[8px] text-slate-400 block">
        Treatment: Apply organic copper-based spray & drip irrigation
      </span>
    </div>

    <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono pt-1 border-t border-white/5">
      <span>Visual Pathology Engine</span>
      <span className="text-emerald-400">● 4K Enhanced</span>
    </div>
  </div>
);

export const PROJECT_PREVIEWS: Record<string, React.ReactNode> = {
  collabdesk: <CollabDeskPreview />,
  'email-job-scheduler': <EmailSchedulerPreview />,
  edutom: <EdutomPreview />,
  curiblog: <CuriBlogPreview />,
  tingl: <TinglPreview />,
  meetongo: <MeetOnGoPreview />,
  leafenhancer: <LeafEnhancerPreview />,
};
