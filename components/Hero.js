function Hero() {
  try {
    const kpis = [
      { label: 'Total Savings', value: 'KES 847M', icon: 'icon-wallet', color: 'var(--secondary-color)', z: 60 },
      { label: 'Active Loans', value: '12,450', icon: 'icon-banknote', color: 'var(--primary-color)', z: 40 },
      { label: 'Active Members', value: '50,234', icon: 'icon-users', color: 'var(--accent-cyan)', z: 80 },
      { label: 'Repayment Rate', value: '98.2%', icon: 'icon-trending-up', color: 'var(--secondary-color)', z: 50 }
    ];
    return (
      <section className="pt-32 pb-20 px-4 relative overflow-hidden perspective-container" data-name="hero" data-file="components/Hero.js">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[var(--primary-color)] opacity-15 rounded-full orb-3d"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[var(--accent-cyan)] opacity-10 rounded-full orb-3d" style={{animationDelay: '-5s'}}></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-[var(--secondary-color)] opacity-8 rounded-full orb-3d" style={{animationDelay: '-3s'}}></div>
        <div className="max-w-7xl mx-auto text-center relative z-10 preserve-3d">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 card-3d">
            <span className="w-2 h-2 rounded-full bg-[var(--secondary-color)] animate-pulse"></span>
            <span className="text-sm text-[var(--text-secondary)]">Trusted by 500+ SACCOs across Africa</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight preserve-3d" style={{transform: 'translateZ(30px)'}}>
            Modern SACCO Management<br /><span className="gradient-text">Built for Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10" style={{transform: 'translateZ(15px)'}}>
            Manage members, savings, loans, guarantors, and M-Pesa payments from one intelligent platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 preserve-3d">
            <button className="btn-primary btn-3d text-base px-8 py-4">Start Free Trial</button>
            <button className="btn-glass btn-3d text-base px-8 py-4 flex items-center justify-center gap-2">
              <div className="icon-circle-play text-lg"></div> Live Demo
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto preserve-3d">
            {kpis.map((kpi, i) => (
              <div key={i} className={`glass-card rounded-xl p-4 card-3d ${i % 2 === 0 ? 'float-3d' : 'float-3d-delayed'}`} style={{transform: `translateZ(${kpi.z}px)`}}>
                <div className={`${kpi.icon} text-2xl mb-2`} style={{ color: kpi.color }}></div>
                <div className="text-2xl font-bold text-white">{kpi.value}</div>
                <div className="text-sm text-[var(--text-secondary)]">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) { console.error('Hero error:', error); return null; }
}

window.Hero = Hero;
