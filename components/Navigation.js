function Navigation({ onAuthClick, user }) {
  try {
    const [isOpen, setIsOpen] = React.useState(false);
    const navLinks = ['Features', 'Solutions', 'Pricing', 'Security', 'Contact'];

    const handleSignOut = async () => {
      await window.supabase.auth.signOut();
    };

    return (
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card" data-name="navigation" data-file="components/Navigation.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--primary-color)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="text-xl font-bold text-white">Omix SACCO</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm">{link}</a>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[var(--text-secondary)]">{user.email}</span>
                  <button onClick={handleSignOut} className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm">Sign Out</button>
                </div>
              ) : (
                <>
                  <button onClick={onAuthClick} className="text-[var(--text-secondary)] hover:text-white transition-colors text-sm">Login</button>
                  <button onClick={onAuthClick} className="btn-primary text-sm py-2">Start Free Trial</button>
                </>
              )}
            </div>
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              <div className={`icon-${isOpen ? 'x' : 'menu'} text-xl`}></div>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden glass-card border-t border-[var(--border-color)] p-4">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="block py-2 text-[var(--text-secondary)]">{link}</a>
            ))}
            {user ? (
              <button onClick={handleSignOut} className="btn-primary w-full mt-4 text-sm py-2">Sign Out</button>
            ) : (
              <button onClick={onAuthClick} className="btn-primary w-full mt-4 text-sm py-2">Get Started</button>
            )}
          </div>
        )}
      </nav>
    );
  } catch (error) { console.error('Navigation error:', error); return null; }
}