class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, errorInfo) { console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <button onClick={() => window.location.reload()} className="btn-primary">Reload Page</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [user, setUser] = React.useState(null);
  const [showAuth, setShowAuth] = React.useState(false);

  React.useEffect(() => {
    // Check active sessions and subscribe to auth changes
    window.supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = window.supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session) setShowAuth(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  try {
    return (
      <div className="gradient-bg min-h-screen grid-overlay" data-name="app" data-file="app.js">
        <Navigation onAuthClick={() => setShowAuth(true)} user={user} />
        
        {showAuth && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-md">
              <button 
                onClick={() => setShowAuth(false)}
                className="absolute -top-12 right-0 text-white hover:text-[var(--primary-color)]"
              >
                Close
              </button>
              <Auth onAuthSuccess={() => setShowAuth(false)} />
            </div>
          </div>
        )}

        <Hero />
        <Features />
        <Dashboard user={user} />
        <Benefits />
        <Stats />
        <Pricing />
        <Testimonials />
        <Security />
        <Footer />
      </div>
    );
  } catch (error) { console.error('App component error:', error); return null; }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><App /></ErrorBoundary>);