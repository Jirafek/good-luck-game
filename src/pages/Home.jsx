import About from '../components/About';
import Header from '../components/Header';
import WhoAreWe from '../components/WhoAreWe';
import Numi from '../components/Numi';
import Rates from '../components/Rates';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main className="flex flex-col items-center">
            <div className="1920:w-[120rem] w-full relative">
                <Header />
                <About />
                <WhoAreWe />
                <Numi />
            </div>
            <Rates />
            <Footer />
        </main>
    );
}

export default Home;
