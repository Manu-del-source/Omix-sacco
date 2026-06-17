function Dashboard({ user }) {
  const [stats, setStats] = React.useState([
    { label: 'Total Deposits', value: 'KES 0', change: '0%', up: true },
    { label: 'Active Loans', value: 'KES 0', change: '0%', up: true },
    { label: 'Members', value: '...', change: '...', up: true },
    { label: 'Repayment Rate', value: '100%', change: '0%', up: true }
  ]);
  const [transactions, setTransactions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showDepositModal, setShowDepositModal] = React.useState(false);
  const [depositAmount, setDepositAmount] = React.useState('');

  const fetchData = async () => {
    if (!user) return;
    setLoading(true);
    try {
      // Fetch Savings Balance
      const { data: savings, error: savingsError } = await window.supabase
        .from('savings')
        .select('balance')
        .eq('profile_id', user.id)
        .single();

      // Fetch Recent Transactions
      const { data: txs, error: txsError } = await window.supabase
        .from('transactions')
        .select('*')
        .eq('profile_id', user.id)
        .order('created_at', { ascending: false })
        .limit(5);

      if (savings) {
        setStats(prev => {
          const newStats = [...prev];
          newStats[0].value = `KES ${parseFloat(savings.balance).toLocaleString()}`;
          return newStats;
        });
      }
      
      if (txs) setTransactions(txs);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [user]);

  const handleDeposit = async (e) => {
    e.preventDefault();
    if (!depositAmount || isNaN(depositAmount)) return;

    setLoading(true);
    try {
      const amount = parseFloat(depositAmount);
      
      // 1. Insert Transaction
      const { error: txError } = await window.supabase
        .from('transactions')
        .insert([{
          profile_id: user.id,
          amount: amount,
          type: 'deposit',
          description: 'M-Pesa Deposit'
        }]);
      if (txError) throw txError;

      // 2. Update Savings (Upsert logic)
      const { data: existingSavings } = await window.supabase
        .from('savings')
        .select('balance')
        .eq('profile_id', user.id)
        .single();

      if (existingSavings) {
        await window.supabase
          .from('savings')
          .update({ balance: parseFloat(existingSavings.balance) + amount, updated_at: new Date() })
          .eq('profile_id', user.id);
      } else {
        await window.supabase
          .from('savings')
          .insert([{ profile_id: user.id, balance: amount }]);
      }

      setDepositAmount('');
      setShowDepositModal(false);
      fetchData();
    } catch (error) {
      alert('Deposit failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <section className="py-20 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Please log in to view your dashboard</h2>
      </section>
    );
  }

  try {
    return (
      <section className="py-20 px-4" id="solutions" data-name="dashboard" data-file="components/Dashboard.js">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Your Financial<br /><span className="gradient-text">Overview</span></h2>
              <p className="text-[var(--text-secondary)] text-lg max-w-2xl">Real-time insights into your SACCO performance.</p>
            </div>
            <button 
              onClick={() => setShowDepositModal(true)}
              className="btn-primary flex items-center gap-2"
            >
              <div className="icon-plus-circle w-5 h-5"></div>
              Make a Deposit
            </button>
          </div>

          {showDepositModal && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <div className="glass-card p-8 rounded-2xl w-full max-w-sm">
                <h3 className="text-xl font-bold mb-4">Deposit Funds</h3>
                <form onSubmit={handleDeposit} className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1 text-[var(--text-secondary)]">Amount (KES)</label>
                    <input
                      type="number"
                      className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--primary-color)]"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      placeholder="e.g. 5000"
                      required
                    />
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setShowDepositModal(false)} className="btn-glass flex-1 py-2">Cancel</button>
                    <button type="submit" disabled={loading} className="btn-primary flex-1 py-2">{loading ? 'Processing...' : 'Confirm'}</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="glass-card rounded-3xl p-2 glow-orange dashboard-3d">
            <div className="bg-[var(--bg-secondary)] rounded-2xl p-6 preserve-3d">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {stats.map((m, i) => (
                  <div key={i} className="glass-card rounded-xl p-4">
                    <div className="text-sm text-[var(--text-secondary)] mb-1">{m.label}</div>
                    <div className="text-xl font-bold text-white">{m.value}</div>
                    <div className={`text-xs ${m.up ? 'text-[var(--secondary-color)]' : 'text-red-400'}`}>{m.change}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 glass-card rounded-xl p-4 h-48">
                  <div className="text-sm font-semibold mb-2">Savings & Loans Analytics</div>
                  <div className="flex items-end justify-around h-32 gap-2">
                    {[60, 80, 45, 90, 70, 85, 55, 95, 75, 88, 65, 92].map((h, i) => (
                      <div key={i} className="flex flex-col items-center gap-1 flex-1">
                        <div className="w-full bg-[var(--primary-color)] rounded-t" style={{ height: `${h}%`, opacity: 0.8 }}></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass-card rounded-xl p-4 h-48 overflow-y-auto">
                  <div className="text-sm font-semibold mb-2">Recent Transactions</div>
                  <div className="space-y-2">
                    {transactions.length > 0 ? transactions.map((t, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-[var(--text-secondary)]">{t.description || t.type}</span>
                        <span className="text-white">KES {parseFloat(t.amount).toLocaleString()}</span>
                      </div>
                    )) : (
                      <div className="text-xs text-[var(--text-secondary)]">No transactions yet</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) { console.error('Dashboard error:', error); return null; }
}

window.Dashboard = Dashboard;
