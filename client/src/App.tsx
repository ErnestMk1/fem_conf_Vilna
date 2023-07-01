import './App.css';
import Dialog from './components/Dialog/Dialog';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import Footer from './components/Footer/Footer';
import Info from './components/Info/Info';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Dialog />
      <Info />
      <Registration />
      <Footer />
    </div>
  );
};

export default App;
