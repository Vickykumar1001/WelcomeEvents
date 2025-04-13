import IntroVideo from "./IntroVideo";
import HeroText from "./HeroText";
import MapImages from "./MapImages";
import background from '../../assets/background2.jpg'
function Home() {
  return (
    <div
      id="home"
      className="relative w-full bg-cover bg-center bg-no-repeat bg-black/60 bg-blend-overlay overflow-hidden lg:min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
        minHeight: 'auto'
      }}
    >
      <HeroText />
      <MapImages />
      {/* <IntroVideo /> */}
    </div>
  );
}

export default Home;