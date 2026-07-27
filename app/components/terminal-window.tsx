export default function TerminalWindow({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-[10%] flex flex-col rounded-[20px] border border-cyan-300/45 bg-[#0b1423]/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,.28)] backdrop-blur-sm max-md:inset-7 max-md:p-4">
      {children}
    </div>
  );
}
