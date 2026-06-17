function Benefits() {
  try {
    const benefits = [
      { icon: 'icon-file-minus', title: 'Reduce Paperwork by 90%', desc: 'Go digital and eliminate manual processes.' },
      { icon: 'icon-zap', title: 'Faster Loan Approvals', desc: 'Automated workflows speed up decisions.' },
      { icon: 'icon-activity', title: 'Real-time SACCO Insights', desc: 'Live dashboards for instant visibility.' },
      { icon: 'icon-calculator', title: 'Automated Accounting', desc: 'Financial records always up to date.' },
      { icon: 'icon-cloud', title: 'Secure Cloud Infrastructure', desc: 'Enterprise-grade security and reliability.' },
      { icon: 'icon-building', title: 'Multi-branch Support', desc: 'Manage multiple locations seamlessly.' }
    ];
    return (
      <section className="py-20 px-4 relative" data-name="benefits" data-file="components/Benefits.js">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary-color)] to-transparent opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why SACCOs<br /><span className="gradient-text">Choose Omix</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--primary-color)] transition-all">
                  <div className={`${b.icon} text-2xl text-[var(--primary-color)]`}></div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{b.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) { console.error('Benefits error:', error); return null; }
}

window.Benefits = Benefits;
