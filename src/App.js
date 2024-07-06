import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Discover from './components/Discover/Discover';
import Reviews from './components/Reviews/Reviews';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<main className='page'>
			<Header />
			<Hero />
			<Discover />
			<Reviews />
			<Gallery />
			<Footer />
		</main>
	);
};

export default App;
