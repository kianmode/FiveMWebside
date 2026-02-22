import { Download, MessageCircle, Play } from 'lucide-react';

export default function JoinSection() {
  return (
    <section id="join" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(/image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Klar til at Starte?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Følg disse simple trin for at komme i gang med dit roleplay eventyr
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-cyan-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-cyan-500">
              <span className="text-3xl font-bold text-cyan-400">1</span>
            </div>
            <Download className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Download FiveM</h3>
            <p className="text-gray-400">
              Download og installer FiveM klienten fra deres officielle hjemmeside
            </p>
            <a
              href="https://fivem.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 font-medium"
            >
              Download FiveM →
            </a>
          </div>

          <div className="text-center">
            <div className="bg-cyan-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-cyan-500">
              <span className="text-3xl font-bold text-cyan-400">2</span>
            </div>
            <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Join Discord</h3>
            <p className="text-gray-400">
              Tilmeld dig vores Discord server for at få adgang og læse reglerne
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 font-medium"
            >
              Join Discord →
            </a>
          </div>

          <div className="text-center">
            <div className="bg-cyan-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-cyan-500">
              <span className="text-3xl font-bold text-cyan-400">3</span>
            </div>
            <Play className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Connect & Play</h3>
            <p className="text-gray-400">
              Søg efter Nordhavn RP i FiveM serverlisten og connect
            </p>
            <button className="inline-block mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-all">
              Copy IP
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Server Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-black/30 p-4 rounded-lg">
              <p className="text-gray-400 text-sm mb-1">Server IP</p>
              <p className="text-white font-mono text-lg">connect nordhavnrp.dk</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <p className="text-gray-400 text-sm mb-1">Status</p>
              <p className="text-green-400 font-semibold text-lg flex items-center justify-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                ONLINE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
