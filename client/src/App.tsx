import './App.css';
import Dialog from './components/Dialog/Dialog';
import Header from './components/Header/Header';
import FAQs from './components/FAQs/FAQs';
import Registration from './components/Registration/Registration';

const App = () => {
  return (
    <div className="app">
       <Header />
       <Dialog />
       <Registration />
       <FAQs />
    </div>
  );
};

export default App;
