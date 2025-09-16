import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return <HeroSection onScrollDown={() => console.log('Scroll down triggered')} />;
}