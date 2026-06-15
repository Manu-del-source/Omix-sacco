function Features() {
  try {
    const features = [
      { icon: 'icon-users', title: 'Member Management', desc: 'Onboard, track, and manage all SACCO members with ease.' },
      { icon: 'icon-piggy-bank', title: 'Savings Accounts', desc: 'Flexible savings products with automated interest calculations.' },
      { icon: 'icon-banknote', title: 'Loan Processing', desc: 'End-to-end loan lifecycle from application to disbursement.' },
      { icon: 'icon-shield-check', title: 'Guarantor Tracking', desc: 'Manage loan guarantors and their commitments seamlessly.' },
      { icon: 'icon-smartphone', title: 'M-Pesa Integration', desc: 'Real-time M-Pesa deposits, withdrawals, and loan repayments.' },
      { icon: 'icon-chart-bar', title: 'Financial Reports', desc: 'Comprehensive reports for informed decision making.' },
      { icon: 'icon-bell', title: 'Automated Notifications', desc: 'SMS and email alerts for transactions and reminders.' },
      { icon: 'icon-lock', title: 'Role-Based Access', desc: 'Secure access control for different user roles.' }
    ];
    return (
      <section id="features" className="py-20 px-4" data-name="features" data-file="components/Features.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features for<br /><span className="gradient-text">Modern SACCOs</span></h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">Everything you need to run a successful SACCO in one platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-container">
            {features.map((f, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 hover:border-[var(--primary-color)] transition-all duration-300 group card-3d preserve-3d" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-color)] bg-opacity-10 flex items-center justify-center mb-4 group-hover:bg-opacity-20 transition-all" style={{transform: 'translateZ(20px)'}}>
                  <div className={`${f.icon} text-xl text-[var(--primary-color)]`}></div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{transform: 'translateZ(15px)'}}>{f.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]" style={{transform: 'translateZ(10px)'}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) { console.error('Features error:', error); return null; }
}