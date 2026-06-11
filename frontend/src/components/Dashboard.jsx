import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Bug, ArrowRight, LogOut } from 'lucide-react';

const Dashboard = ({ handleLogout }) => {
  const navigate = useNavigate();

  const options = [
    {
      id: 'breast-cancer',
      title: 'Breast Cancer Detection',
      description: 'Analyze medical data to predict the likelihood of benign or malignant breast cancer.',
      icon: <Activity size={32} color="#ec4899" />,
      gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05))',
      borderColor: 'rgba(236, 72, 153, 0.3)',
      path: '/predict/breast-cancer'
    },
    {
      id: 'malaria',
      title: 'Malaria Detection',
      description: 'Upload cell images to detect the presence of malaria using advanced AI models.',
      icon: <Bug size={32} color="#10b981" />,
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05))',
      borderColor: 'rgba(16, 185, 129, 0.3)',
      path: '/predict/malaria'
    }
  ];

  return (
    <div className="container min-h-screen animate-fade-in" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Select Diagnosis</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Choose a prediction model to begin analysis.</p>
        </div>
        <button className="btn btn-outline" onClick={handleLogout}>
          <LogOut size={18} />
          Logout
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {options.map((option) => (
          <div 
            key={option.id} 
            className="glass-panel" 
            style={{ 
              padding: '2rem', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'var(--transition)',
              border: `1px solid ${option.borderColor}`,
              background: option.gradient
            }}
            onClick={() => navigate(option.path)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = `0 10px 30px -10px ${option.borderColor}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
          >
            <div>
              <div style={{ marginBottom: '1.5rem', display: 'inline-flex', padding: '1rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-md)' }}>
                {option.icon}
              </div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{option.title}</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{option.description}</p>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', color: 'var(--text-primary)', fontWeight: 500 }}>
              Launch Predictor <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
