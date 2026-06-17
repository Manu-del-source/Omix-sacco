function Security() {
  try {
    const features = [
      { icon: 'icon-shield', title: 'Data Encryption', desc: 'AES-256 encryption at rest and in transit.' },
      { icon: 'icon-scroll-text', title: 'Audit Logs', desc: 'Complete activity tracking for compliance.' },
      { icon: 'icon-database', title: 'Backup & Recovery', desc: 'Automated daily backups with disaster recovery.' },
      { icon: 'icon-key', title: 'Two-Factor Auth', desc: 'Enhanced account security for all users.' },
      { icon: 'icon-file-check', title: 'Compliance', desc: 'CBK and regulatory compliant infrastructure.' },
      { icon: 'icon-eye', title: 'Access Control', desc: 'Granular permissions and role management.' }
    ];
    return (
      <section id="security" className="py-20 px-4" data-name="security" data-file="components/Security.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Enterprise-Grade<br /><span className="gradient-text">Security</span></h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">Your data is protected by industry-leading security measures.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="glass-card rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--secondary-color)] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <div className={`${f.icon} text-lg text-[var(--secondary-color)]`}></div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{f.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) { console.error('Security error:', error); return null; }
}

window.Security = Security;
