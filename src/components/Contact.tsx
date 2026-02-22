import { Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Kontakt Os</h2>
          <p className="text-xl text-gray-300">Vi svarer hurtigst muligt på dine spørgsmål</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300 mb-3">Send os en email:</p>
                  <a href="mailto:modeus@nordhavnrp.dk" className="text-cyan-400 hover:text-cyan-300 transition-colors break-all">
                    modeus@nordhavnrp.dk
                  </a>
                  <br />
                  <a href="mailto:malthezers@nordhavnrp.dk" className="text-cyan-400 hover:text-cyan-300 transition-colors break-all">
                    malthezers@nordhavnrp.dk
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <MessageSquare className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Discord</h3>
                  <p className="text-gray-300 mb-3">Skriv til os på Discord:</p>
                  <a
                    href="https://discord.gg/KGp7PwWhM5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2"
                  >
                    Bliv medlem af Discord
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-cyan-500/20 space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">Dit Navn</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Dit navn"
                required
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Din Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Din email"
                required
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Besked</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                placeholder="Din besked..."
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              {submitted ? 'Takk for din besked!' : 'Send Besked'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
