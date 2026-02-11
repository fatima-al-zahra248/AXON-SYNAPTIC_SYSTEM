# © 2026 FATIMA AL ZAHRA — AXON | Synaptic System Rsilience
# All Rights Reserved. Unauthorized use prohibited.
    


import React, { useState } from 'react';
import { analyzeSystemSecurity } from './services/geminiService';
import { SecurityAnalysis, Severity } from './types';
import { AnalysisCard } from './components/AnalysisCard';
import { SeverityBadge } from './components/SeverityBadge';

const EXAMPLES = [
  {
    label: "Web Architecture",
    text: "A web app with a React frontend and Node.js backend. It stores user data in MongoDB and uses AWS S3 for file uploads."
  },
  {
    label: "Suspicious Email",
    text: "From: security-admin@bank-verify.com\nSubject: Urgent: Verify Account\nPlease click here to avoid lockout: http://bank-secure-login.net/auth"
  },
  {
    label: "Verify URL",
    text: "Is this URL safe to visit? https://updates-service-win.com/installer/patch.vbs"
  }
];

const SecurityShieldIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const LandingPage = ({ onStart }: { onStart: () => void }) => (
  <div className="min-h-screen bg-[#000000] text-slate-200">
    {/* Hero Section */}
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
          <SecurityShieldIcon className="w-3 h-3" /> Synaptic System Resilience
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
          AXON
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-slate-300 mb-4">
          Predictive security intelligence powered by Gemini.
        </p>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          AXON identifies how systems break — before attackers exploit them. 
          Defensive-only analysis for modern infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <button 
            onClick={onStart}
            className="group relative px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] active:scale-[0.98]"
          >
            Start Security Analysis
          </button>
          <div className="text-slate-500 text-sm mono">
            No login. No data retention.
          </div>
        </div>
      </div>
    </section>

    {/* How AXON Thinks */}
    <section className="py-24 border-y border-slate-900 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] text-center mb-16">Intelligence Core</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Vector Analysis", desc: "Detects the top 3-5 most probable attack paths." },
            { step: "02", title: "Human Language", desc: "Explains complex vulnerabilities in plain, clear logic." },
            { step: "03", title: "Remediation", desc: "Provides concrete, actionable mitigation steps." },
            { step: "04", title: "Risk Grading", desc: "Assigns severity levels from Low to Critical." }
          ].map((item, i) => (
            <div key={i} className="group p-6 rounded-2xl border border-slate-800/50 hover:border-sky-500/30 transition-all bg-[#0a0a0c]">
              <div className="text-sky-500 mono text-sm font-bold mb-4 opacity-50 group-hover:opacity-100 transition-opacity">{item.step}</div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Visual Preview */}
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl relative">
          <div className="absolute -top-4 -left-4 px-4 py-1 bg-purple-500 text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded shadow-lg shadow-purple-500/20">
            Example Preview
          </div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Misconfigured API Gateway</h3>
              <p className="text-slate-400 text-sm">Exposure of internal endpoint documentation via unauthorized GET requests.</p>
            </div>
            <SeverityBadge severity={Severity.CRITICAL} />
          </div>
          <div className="space-y-4 pt-4 border-t border-slate-800">
             <div className="text-xs font-bold text-sky-500 uppercase tracking-widest">Prevention Protocol</div>
             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
               {["Implement OAuth2 Scopes", "Rate Limit Endpoint Access", "Sanitize Error Messages", "IP Whitelisting"].map((s, i) => (
                 <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full" /> {s}
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Why AXON */}
    <section className="py-24 bg-[#050505] border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white tracking-tight">The AXON Edge</h2>
          <div className="space-y-6">
            {[
              { t: "Predictive Intelligence", d: "Identify risks based on logic, not just signatures." },
              { t: "Explainable Security", d: "Get the 'Why' behind every vulnerability detected." },
              { t: "Defensive Only", d: "Designed for engineering resilience and ethical growth." },
              { t: "Privacy Architecture", d: "Zero data persistence. Your architecture remains yours." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1"><SecurityShieldIcon className="text-sky-500 w-5 h-5" /></div>
                <div>
                  <h4 className="text-white font-medium">{item.t}</h4>
                  <p className="text-slate-500 text-sm">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
           <button 
            onClick={onStart}
            className="w-full max-w-sm aspect-square rounded-3xl border border-slate-800 flex flex-col items-center justify-center p-8 hover:bg-sky-500/5 hover:border-sky-500/20 transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500 mb-6 group-hover:scale-110 transition-transform">
              <SecurityShieldIcon className="w-8 h-8" />
            </div>
            <span className="text-white font-bold text-lg mb-2">Enter the System</span>
            <span className="text-slate-500 text-sm text-center">Unlock Synaptic System Resilience analysis now.</span>
          </button>
        </div>
      </div>
    </section>

    <footer className="py-12 border-t border-slate-900 text-center">
       <div className="text-slate-600 text-xs uppercase tracking-widest mono">AXON | Synaptic System Resilience © 2025</div>
    </footer>
  </div>
);

const App: React.FC = () => {
  const [showApp, setShowApp] = useState(false);
  const [description, setDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<SecurityAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!description.trim()) {
      setError('Please paste a system description, email, or URL to analyze.');
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    setAnalysis(null);

    try {
      const result = await analyzeSystemSecurity(description);
      setAnalysis(result);
    } catch (err: any) {
      setError(err.message || 'Analysis failed. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (!showApp) {
    return <LandingPage onStart={() => setShowApp(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] selection:bg-sky-500/30 animate-in fade-in duration-700">
      <header className="border-b border-slate-800/50 sticky top-0 bg-[#0a0a0c]/80 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-slate-900 shadow-lg shadow-sky-500/20 cursor-pointer"
              onClick={() => setShowApp(false)}
            >
              <SecurityShieldIcon />
            </div>
            <span className="text-xl font-bold text-white mono">AXON</span>
          </div>
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Defensive Analysis</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-white leading-tight">
                Review <span className="text-sky-400">Security Risks</span>
              </h1>
              <p className="text-slate-400 text-lg">
                Paste architectures, suspicious emails, or URLs to find vulnerabilities and prevention steps.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {EXAMPLES.map((ex) => (
                    <button
                      key={ex.label}
                      onClick={() => { setDescription(ex.text); setError(null); }}
                      className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400 hover:text-sky-400 transition-all"
                    >
                      {ex.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-sky-500 rounded-xl blur opacity-10 group-focus-within:opacity-30 transition"></div>
                <textarea
                  className="relative w-full h-64 bg-slate-900/80 border border-slate-700/50 rounded-xl p-6 text-slate-200 focus:outline-none focus:border-sky-500/50 transition-all resize-none text-sm"
                  placeholder="Paste architecture, email content, or a URL..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className={`w-full py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  isAnalyzing 
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                    : 'bg-sky-500 hover:bg-sky-400 text-slate-900'
                }`}
              >
                {isAnalyzing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-slate-500 border-t-transparent rounded-full animate-spin" />
                    <span>Analyzing...</span>
                  </div>
                ) : (
                  <>
                    <SecurityShieldIcon />
                    <span>Scan for Security Risks</span>
                  </>
                )}
              </button>

              {error && (
                <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            {isAnalyzing ? (
              <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center space-y-6">
                <div className="relative w-16 h-16 border-4 border-slate-800 border-t-sky-500 rounded-full animate-spin"></div>
                <p className="text-slate-500">Checking for vulnerabilities and prevention steps...</p>
              </div>
            ) : analysis ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-slate-900/30 border-l-4 border-sky-500 p-6 rounded-r-xl">
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-sky-500 mb-2">Review Summary</h2>
                  <p className="text-slate-200 text-lg font-light leading-relaxed">
                    "{analysis.attackerPerspective}"
                  </p>
                </div>

                <div className="space-y-4">
                  {analysis.vectors.map((vector, index) => (
                    <AnalysisCard key={index} vector={vector} index={index} />
                  ))}
                </div>

                <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/20 text-xs text-slate-500 leading-relaxed">
                  <span className="font-bold text-slate-400 block mb-1 uppercase tracking-tighter">Professional Advice</span>
                  {analysis.summary}
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[500px] border-2 border-dashed border-slate-800 rounded-3xl flex flex-col items-center justify-center text-center p-12">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 text-slate-700">
                  <SecurityShieldIcon className="w-8 h-8" />
                </div>
                <h3 className="text-slate-400 font-medium">Ready for Scan</h3>
                <p className="text-slate-600 mt-2 text-sm max-w-xs">Enter technical details to identify risks and get actionable prevention steps.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="mt-20 border-t border-slate-800/50 py-10 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 grayscale opacity-40">
           <SecurityShieldIcon className="w-4 h-4" />
           <span className="text-sm font-bold text-slate-400 mono">AXON</span>
        </div>
        <p className="text-slate-600 text-[10px] uppercase tracking-widest">
          Defensive Risk Assessment • Architecture Reviews • Prevention Focused
        </p>
      </footer>
    </div>
  );
};

export default App;
