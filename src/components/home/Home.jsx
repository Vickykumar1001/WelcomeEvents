import IntroVideo from "./IntroVideo";
import HeroText from "./HeroText";
import MapImages from "./MapImages";
import TaglineComponent from "./Tagline";

function Home() {
  return (
    <div id="home">
      <HeroText />
      <MapImages />
      <IntroVideo />
    </div>
  );
}

export default Home;
