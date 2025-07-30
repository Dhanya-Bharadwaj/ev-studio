export default function Marquee() {
  const items = ['RELIABILITY', 'SPEED', 'SUSTAINABILITY', 'INNOVATION', 'SCALABILITY', 'SAFETY'];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-gray-200">
      <div className="flex whitespace-nowrap marquee-content">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-6">
            <span className="text-lg font-semibold tracking-widest text-[color:var(--muted)]">{item}</span>
            <span className="mx-6 text-[color:var(--primary)] text-2xl font-light">*</span>
          </div>
        ))}
      </div>
    </div>
  );
}