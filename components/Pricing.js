function Pricing() {
  try {
    const [annual, setAnnual] = React.useState(true);
    const plans = [
      { name: 'Starter', price: annual ? 4999 : 5999, members: 'Up to 500', features: ['Member Management', 'Basic Loans', 'M-Pesa Integration', 'Email Support'] },
      { name: 'Professional', price: annual ? 14999 : 17999, members: 'Up to 5,000', features: ['Everything in Starter', 'Advanced Reports', 'Multi-branch', 'API Access', 'Priority Support'], popular: true },
      { name: 'Enterprise', price: 'Custom', members: 'Unlimited', features: ['Everything in Pro', 'Custom Integrations', 'Dedicated Manager', 'SLA Guarantee', 'On-premise Option'] }
    ];
    return (
      <section id="pricing" className="py-20 px-4" data-name="pricing" data-file="components/Pricing.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent<br /><span className="gradient-text">Pricing</span></h2>
            <div className="inline-flex items-center gap-3 glass-card rounded-full p-1 mt-6">
              <button onClick={() => setAnnual(false)} className={`px-4 py-2 rounded-full text-sm transition-all ${!annual ? 'bg-[var(--primary-color)] text-white' : 'text-[var(--text-secondary)]'}`}>Monthly</button>
              <button onClick={() => setAnnual(true)} className={`px-4 py-2 rounded-full text-sm transition-all ${annual ? 'bg-[var(--primary-color)] text-white' : 'text-[var(--text-secondary)]'}`}>Annual <span className="text-xs opacity-75">-20%</span></button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-container">
            {plans.map((p, i) => (
              <div key={i} className={`glass-card rounded-2xl p-6 card-3d ${p.popular ? 'border-[var(--primary-color)] relative' : ''}`} style={{transform: p.popular ? 'translateZ(40px) scale(1.02)' : 'translateZ(0)'}}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--primary-color)] rounded-full text-xs font-semibold">Most Popular</div>}
                <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
                <div className="text-sm text-[var(--text-secondary)] mb-4">{p.members} members</div>
                <div className="text-4xl font-bold text-white mb-6">{typeof p.price === 'number' ? `KES ${p.price.toLocaleString()}` : p.price}<span className="text-sm text-[var(--text-secondary)] font-normal">{typeof p.price === 'number' ? '/mo' : ''}</span></div>
                <ul className="space-y-3 mb-6">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <div className="icon-circle-check text-[var(--secondary-color)]"></div>{f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${p.popular ? 'btn-primary' : 'btn-glass'}`}>{p.price === 'Custom' ? 'Contact Sales' : 'Get Started'}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) { console.error('Pricing error:', error); return null; }
}

window.Pricing = Pricing;
