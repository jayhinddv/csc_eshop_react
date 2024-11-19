import Header from '../components/header.jsx';
import Sweeper from '../components/sweeper.jsx';
import Search from '../components/search.jsx';
import Services from '../components/services.jsx';
import Update from '../components/update.jsx';
import ContactUs from '../components/contactUs.jsx';

function Home() {
  return (
    <>
      <Sweeper></Sweeper>
      <Search></Search>
      <Services></Services>
      <Update></Update>
      <ContactUs></ContactUs>
    </>
  );
}

export default Home;
