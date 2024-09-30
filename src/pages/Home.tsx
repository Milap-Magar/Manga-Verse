import { Feature, Footer, Main, Navbar } from "../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Feature />
      {/* 
      Slider bug fixes and error to be fixed in there
      <Hero /> 
       */}

      <Main />
      <Footer />
    </>
  );
};

export default Home;
