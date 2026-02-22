import { Shield, Zap, Users, Heart, Code, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Dedikeret Staff',
    description: 'Professionelt staff-team der sikrer fair play og hjælper med alle spørgsmål døgnet rundt.',
  },
  {
    icon: Zap,
    title: 'Kraftfuldt Hardware',
    description: 'Vi kører på det mest kraftfulde hardware, hvilket sikrer stabil 24/7 oppetid.',
  },
  {
    icon: Users,
    title: 'Aktivt Community',
    description: 'Et engageret dansk fællesskab med aktive spillere døgnet rundt. Der er altid nogen at spille med!',
  },
  {
    icon: Heart,
    title: '100% Dansk',
    description: 'Dansk server med danske admins og spillere. Ingen sprogbarrierer - bare ren dansk hygge!',
  },
  {
    icon: Code,
    title: 'Unikke Scripts',
    description: 'Custom scripts og features udviklet specifikt til vores server. Konstant udvikling!',
  },
  {
    icon: Clock,
    title: 'Siden 2025',
    description: 'En ny server bygget på erfaring og dedikation til at levere den bedste RP-oplevelse.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hvorfor Vælge Os?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Vi tilbyder mere end bare en server - vi tilbyder et fællesskab bygget på respekt og fede oplevelser
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-cyan-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <feature.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
