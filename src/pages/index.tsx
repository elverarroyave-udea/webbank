import Button from '@/components/atoms/Button';
import NavTitle from '@/components/atoms/NavTitle';
import Nav from '@/components/organisms/Nav';
import NavMobile from '@/components/molecules/Navmobile';
import Hero from '@/components/organisms/Hero';
import Icon from '@/components/atoms/Icon';

export default function Home() {
  return (
    <div className='flex flex-col items-center  w-full min-h-screen '>
      <Hero />
      <Icon icon='material-symbols:add-card-outline' />
    </div>
  );
}
