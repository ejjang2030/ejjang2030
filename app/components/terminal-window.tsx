export default function TerminalWindow({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-[7%] flex flex-col rounded-[22px] border border-cyan-300/45 bg-[#0b1423]/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,.28)] backdrop-blur-sm max-md:inset-5 max-md:p-5">
      {children}
    </div>
  );
}
