import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/nhFINISH2.png"
              alt="Nordhavn RP"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 mb-4">
              Danmarks næste store FiveM roleplay server.
              Oplev autentisk dansk RP med et dedikeret community.
            </p>
            <div className="flex items-center text-gray-400">
              <span>Lavet med</span>
              <Heart className="w-4 h-4 mx-2 text-red-500 fill-current" />
              <span>til det danske RP community</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Forside
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#rules" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Regler
                </a>
              </li>
              <li>
                <a href="#join" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Join Server
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Ansøg som Staff
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Nordhavn RP. Alle rettigheder forbeholdes.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              Privatlivspolitik
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              Vilkår & Betingelser
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
