import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Info } from 'lucide-react';

const diseaseData = {
  'breast-cancer': {
    title: 'Breast Cancer Prediction',
    url: 'https://breastcancerapp-kyrmhw9boh3y7rqdppwmup.streamlit.app?embed=true',
    fallbackUrl: 'https://breastcancerapp-kyrmhw9boh3y7rqdppwmup.streamlit.app',
    matter: {
      about: 'Breast cancer occurs when cells in the breast grow out of control. It is one of the most common cancers diagnosed in women worldwide.',
      symptoms: ['A breast lump or thickening', 'Change in the size, shape or appearance of a breast', 'Changes to the skin over the breast', 'A newly inverted nipple'],
      prevention: 'Regular screenings, maintaining a healthy weight, being physically active, and limiting alcohol can help reduce risk.'
    }
  },
  'malaria': {
    title: 'Malaria Prediction',
    url: 'https://breastcancerapp-sbikt9fqb7e786qbmeox56.streamlit.app?embed=true',
    fallbackUrl: 'https://breastcancerapp-sbikt9fqb7e786qbmeox56.streamlit.app',
    matter: {
      about: 'Malaria is a life-threatening disease caused by parasites that are transmitted to people through the bites of infected female Anopheles mosquitoes.',
      symptoms: ['Fever and chills', 'General feeling of discomfort', 'Headache', 'Nausea and vomiting', 'Diarrhea', 'Abdominal pain'],
      prevention: 'Use of insecticide-treated mosquito nets, indoor residual spraying, and antimalarial medications for travelers.'
    }
  }
};

const PredictionView = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const data = diseaseData[type];

  if (!data) return <div className="container" style={{paddingTop: '4rem'}}>Disease not found</div>;

  return (
    <div className="container min-h-screen animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <button 
        className="btn btn-outline" 
        onClick={() => navigate('/dashboard')}
        style={{ marginBottom: '2rem', padding: '0.5rem 1rem' }}
      >
        <ArrowLeft size={18} /> Back to Dashboard
      </button>

      <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
        
        {/* Prediction App Iframe section */}
        <div className="glass-panel" style={{ padding: '1.5rem', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="gradient-text" style={{ fontSize: '1.8rem', margin: 0 }}>{data.title} Interface</h2>
            <a href={data.fallbackUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
              Open in New Tab <ExternalLink size={16} style={{ marginLeft: '0.5rem' }} />
            </a>
          </div>
          
          <div style={{ width: '100%', height: '70vh', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-color)', background: '#ffffff' }}>
            <iframe 
              src={data.url} 
              width="100%" 
              height="100%" 
              frameBorder="0"
              title={data.title}
              style={{ backgroundColor: '#ffffff' }}
            ></iframe>
          </div>
        </div>

        {/* Educational Matter Section */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Info size={24} color="var(--accent-primary)" /> About {data.title.replace(' Prediction', '')}
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Overview</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{data.matter.about}</p>
            </div>
            
            <div>
              <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Common Symptoms</h4>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.2rem' }}>
                {data.matter.symptoms.map((sym, idx) => (
                  <li key={idx} style={{ marginBottom: '0.25rem' }}>{sym}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Prevention</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{data.matter.prevention}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PredictionView;
