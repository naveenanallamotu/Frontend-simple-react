import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import year from './components/year';
import Counter from './components/counter'

function App() {
  return (
    <div >
      <Header/>
      <Counter/>
      <Footer year = {year}/>
     
    </div>
  );
}

export default App;
