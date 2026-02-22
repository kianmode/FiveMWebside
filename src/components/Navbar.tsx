import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="/nhFINISH2.png"
              alt="Nordhavn RP Logo"
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-white hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">
                Forside
              </a>
              <a href="#info" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">
                Om Os
              </a>
              <a href="#features" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#rules" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">
                Regler
              </a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">
                Kontakt
              </a>
              <a href="https://cfx.re/join/6av4a7" target="_blank" rel="noopener noreferrer" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
                Join Server
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white hover:text-cyan-400 block px-3 py-2 text-base font-medium">
              Forside
            </a>
            <a href="#info" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">
              Om Os
            </a>
            <a href="#features" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">
              Features
            </a>
            <a href="#rules" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">
              Regler
            </a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium">
              Kontakt
            </a>
            <a href="https://cfx.re/join/6av4a7" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 block px-3 py-2 text-base font-medium">
              Join Server
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
