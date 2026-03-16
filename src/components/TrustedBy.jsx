const brands = [
  { name: 'grüns', color: '#2D7A2D', bg: 'white' },
  { name: 'Lume', color: '#1a1a1a', bg: 'white' },
  { name: 'Legends', color: '#1a1a1a', bg: 'white' },
  { name: 'OLIPOP', color: '#e67e22', bg: 'white' },
  { name: 'Hexclad', color: '#111', bg: 'white' },
  { name: 'True Classic', color: '#111', bg: 'white' },
  { name: 'Vuori', color: '#111', bg: 'white' },
  { name: 'Caden Lane', color: '#c0392b', bg: 'white' },
  { name: 'Javy', color: '#3d1a0a', bg: 'white' },
  { name: 'Wunder', color: '#111', bg: 'white' },
]

function BrandCard({ name, color, size = 'large' }) {
  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl flex items-center justify-center flex-shrink-0"
      style={{
        width: size === 'large' ? 220 : 180,
        height: size === 'large' ? 160 : 130,
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      }}
    >
      <span
        className="font-playfair font-bold"
        style={{
          color,
          fontSize: size === 'large' ? '1.8rem' : '1.4rem',
          letterSpacing: '-0.5px',
        }}
      >
        {name}
      </span>
    </div>
  )
}

export default function TrustedBy() {
  const row1 = [...brands, ...brands, ...brands]
  const row2 = [...brands.slice(3), ...brands, ...brands.slice(0, 3), ...brands]

  return (
    <section className="bg-cream py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2
          className="font-playfair font-bold text-black"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Trusted by
        </h2>
      </div>

      {/* Row 1 - left scroll */}
      <div className="mb-4 overflow-hidden">
        <div className="flex gap-4 animate-marquee" style={{ width: 'max-content' }}>
          {row1.map((brand, i) => (
            <BrandCard key={i} name={brand.name} color={brand.color} size="large" />
          ))}
        </div>
      </div>

      {/* Row 2 - right scroll */}
      <div className="overflow-hidden">
        <div className="flex gap-4 animate-marquee-reverse" style={{ width: 'max-content' }}>
          {row2.map((brand, i) => (
            <BrandCard key={i} name={brand.name} color={brand.color} size="large" />
          ))}
        </div>
      </div>
    </section>
  )
}
