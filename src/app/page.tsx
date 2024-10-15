import HomeHero from '@/components/features/home/HomeHero';
import HomeProject from '@/components/features/home/HomeProject';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HomeHero />
      <HomeProject />
    </div>
  );
}
