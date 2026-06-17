function Testimonials() {
  try {
    const testimonials = [
      { name: 'James Mwangi', role: 'CEO, Ukulima SACCO', text: 'Omix transformed how we manage our 15,000 members. Loan processing time dropped from 5 days to just 4 hours.', rating: 5 },
      { name: 'Grace Wanjiku', role: 'Manager, Hazina SACCO', text: 'The M-Pesa integration is seamless. Our members can now deposit and repay loans instantly from their phones.', rating: 5 },
      { name: 'Peter Ochieng', role: 'Chairman, Boresha SACCO', text: 'We reduced operational costs by 60% in the first year. The ROI has been incredible for our cooperative.', rating: 5 }
    ];
    return (
      <section className="py-20 px-4" data-name="testimonials" data-file="components/Testimonials.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by<br /><span className="gradient-text">SACCO Leaders</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-container">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 card-3d">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <div key={j} className="icon-star text-[var(--primary-color)] text-sm"></div>
                  ))}
                </div>
                <p className="text-[var(--text-secondary)] mb-6 text-sm leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center text-white font-bold text-sm">{t.name.charAt(0)}</div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-[var(--text-secondary)]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) { console.error('Testimonials error:', error); return null; }
}

window.Testimonials = Testimonials;
