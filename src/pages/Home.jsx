import About from '../components/About';
import Header from '../components/Header';
import WhoAreWe from '../components/WhoAreWe';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main className="flex flex-col items-center">
            <div className="1920:w-[120rem] w-full relative">
                <Header />
                <About />
                <WhoAreWe />
            </div>
            <Footer />
        </main>
    );
}

export default Home;
