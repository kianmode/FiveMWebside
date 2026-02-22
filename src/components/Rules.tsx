import { AlertCircle, CheckCircle } from 'lucide-react';

const rules = [
  'Respekter altid andre spillere - ingen chikane eller negativitet',
  'Hold dig altid In Character (IC) - minimal OOC kommunikation',
  'RDM (Random Deathmatch) og VDM (Vehicle Deathmatch) er strengt forbudt',
  'Power RP er ikke tilladt - giv altid andre en fair chance',
  'Meta Gaming er forbudt - brug kun information din karakter ved',
  'Følg dansk lovgivning i dit roleplay',
  'Respekter staff beslutninger - diskuter ikke i spillet',
  'Brug af exploits eller cheats resulterer i permanent ban',
];

const dosList = [
  'Skab meningsfuldt og engagerende roleplay',
  'Hjælp nye spillere med at komme godt i gang',
  'Rapporter regelbrud til staff via Discord',
  'Vær kreativ og bidrag til serveren',
];

export default function Rules() {
  return (
    <section id="rules" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Server Regler
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            For at sikre en god oplevelse for alle, skal følgende regler overholdes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-red-900/20 to-gray-900/50 p-8 rounded-xl border border-red-500/30">
            <div className="flex items-center mb-6">
              <AlertCircle className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Vigtige Regler</h3>
            </div>
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1 font-bold">{index + 1}.</span>
                  <p className="text-gray-300">{rule}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-gray-900/50 p-8 rounded-xl border border-green-500/30">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Gode Råd</h3>
            </div>
            <div className="space-y-4 mb-8">
              {dosList.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-cyan-500/10 p-6 rounded-lg border border-cyan-500/30">
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                Husk!
              </h4>
              <p className="text-gray-300">
                Alle regler gælder til enhver tid. Overtrædelser kan føre til advarsler,
                kicks eller permanent ban afhængigt af grovheden. Ved tvivl, spørg staff!
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-4">
            Fuld regelbog findes i vores Discord server
          </p>
          <a
            href="#join"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Læs Fuld Regelbog
          </a>
        </div>
      </div>
    </section>
  );
}
