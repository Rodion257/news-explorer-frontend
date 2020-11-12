import './Main.css';
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import About from '../About/About';
import Footer from '../Footer/Footer';


function Main() {
    return (
        <div className="page">
            <Header theme={'main'} />
            <SearchForm />
            <NewsCardList theme={'main'}/>
            <Preloader />
            <About />
            <Footer />
        </div>
    )
}

export default Main;