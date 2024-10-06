import { FooterComponent } from '../component/Landing/footer';
import { BannerComponent } from '../component/Landing/banner';
import NavbarComponent from '../component/Landing/navbar';

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <BannerComponent />
      <FooterComponent />
    </>
  );
};

export default Home;
