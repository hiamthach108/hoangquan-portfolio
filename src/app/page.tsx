import HomeActivities from '@/components/features/home/HomeActivities';
import HomeHero from '@/components/features/home/HomeHero';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HomeHero />
      <HomeActivities />
    </div>
  );
}
