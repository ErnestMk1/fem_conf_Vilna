import './App.css';
import Dialog from './components/Dialog/Dialog';
import Header from './components/Header/Header';
import FAQs from './components/FAQs/FAQs';
import Registration from './components/Registration/Registration';
import Speakers from './components/Speakers/Speakers';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Dialog />
      <FAQs />
      <Speakers />
      <Registration />
      <Footer />
    </div>
  );
};

export default App;
