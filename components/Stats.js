function Stats() {
  try {
    const stats = [
      { value: '50,000+', label: 'Members Managed', icon: 'icon-users' },
      { value: 'KES 2B+', label: 'Transactions Processed', icon: 'icon-banknote' },
      { value: '98.2%', label: 'Loan Repayment Rate', icon: 'icon-trending-up' },
      { value: '99.99%', label: 'Platform Uptime', icon: 'icon-server' }
    ];
    return (
      <section className="py-20 px-4" data-name="stats" data-file="components/Stats.js">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 glow-green card-3d perspective-container" style={{transform: 'perspective(1000px) rotateX(5deg)'}}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className={`${s.icon} text-3xl text-[var(--secondary-color)] mb-3 mx-auto`}></div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-sm text-[var(--text-secondary)]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) { console.error('Stats error:', error); return null; }
}