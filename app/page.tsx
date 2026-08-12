import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';
import { ImmersiveHero } from '@/components/ImmersiveHero';
import { AboutMe } from '@/components/AboutMe';
import { HorizontalProjects } from '@/components/HorizontalProjects';
import { TimelineDemo } from '@/components/TimelineWork';
import { Footer } from '@/components/Footer';
import { SubtleAurora } from '@/components/SubtleAurora';

export default function Home() {
  return (
    <main className="relative bg-black-100 min-h-screen text-white-100 overflow-clip">
      <FloatingNav navItems={navItems} />
      
      <ImmersiveHero />
      
      <div className="relative z-10">
        <SubtleAurora />
        
        <AboutMe />
        <HorizontalProjects />
        <TimelineDemo />
        <Footer />
      </div>
    </main>
  );
}
