import Plan from './components/tarifcards';
import './App.css';
import distarif from './components/distarif.json';
import cards1 from "./assets/card1.module.css";
import cards2 from "./assets/card2.module.css";
import cards3 from "./assets/card3.module.css";
import cards4 from "./assets/card4.module.css";

function App() {
  const cards = [cards1, cards2, cards3, cards4];
  return (
    <div className="App">
      <div className="tariffs">
        {
          distarif.map((traffic, i) =>
          <Plan title={traffic.title} price={traffic.price} gigi={traffic.gigi} text ={traffic.text} card={cards[i]} button={traffic.button}></Plan>
          )
        }
      </div>
    </div>

  );
}

export default App;

