import { Server, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/image.png)',
          filter: 'brightness(0.4)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <img
            src="/NordhavnFINISH2.png"
            alt="Nordhavn RP"
            className="w-full max-w-3xl mx-auto drop-shadow-2xl animate-bob"
          />
        </div>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 font-light animate-slide-up">
          Velkommen til Danmarks Næste Store
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-slide-up-delay">
          ROLEPLAY SERVER
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-delay">
          Oplev autentisk dansk roleplay med et dedikeret community og unikke features
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <a
            href="https://cfx.re/join/6av4a7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
          >
            Tiltræd Server Nu
          </a>
          <a
            href="https://discord.gg/KGp7PwWhM5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm border border-white/20"
          >
            Discord Server
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in-delay-3">
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-all">
            <Users className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-4xl font-bold text-white mb-2">10+</div>
            <div className="text-gray-300">Dedikerede Medlemmer</div>
          </div>

          <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-all">
            <Server className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Server Oppetid</div>
          </div>

          <div className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500 transition-all">
            <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300">Dansk RP</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}
