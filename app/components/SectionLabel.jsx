// Yellow divider with a centred label, used between homepage sections
export default function SectionLabel({ children, id }) {
  return (
    <div id={id} className="flex items-center justify-center py-8 px-4 scroll-mt-20">
      <div className="flex-grow border-t border-yellow-400/30"></div>
      <span className="mx-4 text-yellow-400 text-sm font-bold uppercase tracking-widest">{children}</span>
      <div className="flex-grow border-t border-yellow-400/30"></div>
    </div>
  );
}
