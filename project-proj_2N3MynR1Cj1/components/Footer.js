function Footer() {
  try {
    const links = {
      Product: ['Features', 'Pricing', 'Integrations', 'API Docs'],
      Company: ['About Us', 'Careers', 'Blog', 'Press'],
      Resources: ['Help Center', 'Community', 'Webinars', 'Partners'],
      Legal: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance']
    };
    return (
      <footer className="py-16 px-4 border-t border-[var(--border-color)]" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[var(--primary-color)] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">O</span>
                </div>
                <span className="text-lg font-bold text-white">Omix SACCO</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-4">Modern SACCO management for Africa's financial future.</p>
              <div className="flex gap-3">
                {['twitter', 'linkedin', 'facebook'].map(s => (
                  <a key={s} href="#" className="w-8 h-8 rounded-lg glass-card flex items-center justify-center hover:border-[var(--primary-color)] transition-all">
                    <div className={`icon-${s} text-sm text-[var(--text-secondary)]`}></div>
                  </a>
                ))}
              </div>
            </div>
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h4 className="font-semibold text-white mb-4 text-sm">{title}</h4>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item}><a href="#" className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--text-secondary)]">© 2026 Omix SACCO. All rights reserved.</p>
            <p className="text-sm text-[var(--text-secondary)]">Made with <span className="text-[var(--primary-color)]">♥</span> in Nairobi, Kenya</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) { console.error('Footer error:', error); return null; }
}