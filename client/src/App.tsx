import './App.css';
import Dialog from './components/Dialog/Dialog';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SpeakersNew from './components/SpeakersNew/SpeakersNew';
import BuyNew from './components/BuyNew/BuyNew';
import Content from './components/Content/Content';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Dialog />
      <Content />
      <SpeakersNew />
      <BuyNew />
      <Footer />
    </div>
  );
};

export default App;
