function Auth({ onAuthSuccess }) {
  const [isLogin, setIsLogin] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        const { error } = await window.supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      } else {
        const { data, error } = await window.supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            }
          }
        });
        if (error) throw error;
        
        // Create profile entry
        if (data.user) {
          const { error: profileError } = await window.supabase
            .from('profiles')
            .insert([
              { id: data.user.id, full_name: fullName }
            ]);
          if (profileError) console.error('Error creating profile:', profileError);
        }
      }
      onAuthSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card p-8 rounded-2xl w-full max-w-md mx-auto" data-name="auth-form">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {isLogin ? 'Welcome Back' : 'Join Omix SACCO'}
      </h2>
      
      <form onSubmit={handleAuth} className="space-y-4">
        {!isLogin && (
          <div>
            <label className="block text-sm mb-1 text-[var(--text-secondary)]">Full Name</label>
            <input
              type="text"
              className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--primary-color)]"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <label className="block text-sm mb-1 text-[var(--text-secondary)]">Email Address</label>
          <input
            type="email"
            className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--primary-color)]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-[var(--text-secondary)]">Password</label>
          <input
            type="password"
            className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--primary-color)]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary py-2 mt-4"
        >
          {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[var(--text-secondary)]">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-[var(--primary-color)] font-semibold hover:underline"
        >
          {isLogin ? 'Sign Up' : 'Log In'}
        </button>
      </p>
    </div>
  );
}

window.Auth = Auth;
