import Button from '@/components/atoms/Button';
import NavTitle from '@/components/atoms/NavTitle';
import Nav from '@/components/organisms/Nav';
import NavMobile from '@/components/molecules/Navmobile';
import { HeroTitle, MediumTitle } from '@/components/atoms/Titles';
export default function Home() {
  return (
    <div className='flex flex-col items-center  min-h-screen '>
      <HeroTitle />
      <MediumTitle />
    </div>
  );
}
