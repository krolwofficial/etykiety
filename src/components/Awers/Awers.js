import "./App.css";
import Barrel from "./img/barrel.png";
import fruit from "./img/blueberry.png";
import Crown from "./img/crown.png";
import GoldLine from "./img/goldLine.png";

function App() {
  return (
    <div className="App">
      <img src={GoldLine} alt="gold line" className="goldLine goldLineOne" />
      <div className="content">
        <div className="content__line">
          <>
            <div className="imgParent">
              <img src={Crown} alt="logo" className="crown" />
            </div>
            <div className="content__name">
              <p className="gold h1">KRÓLEWSKA</p>
              <p className="h3">
                ALKOHOLOWY WYCIĄG <br />Z OWOCÓW
              </p>
            </div>
            <div className="content__flavour">
              <div className="imgParent">
                <img src={fruit} alt="fruit" className="fruit" />
              </div>
              <p className="h5 content__flavour__title">JAGODOWA</p>
            </div>
            <div className="content__numbers">
              <div className="content__numbers__number" />
              <p className="p mb">NUMER BUTELKI / ILOŚĆ W PARTII </p>
            </div>
            <div className="content__addon">
              <dv className="content__addon__imgs">
                <img src={Barrel} alt="barrel" className="barrel" />
                <img src={Barrel} alt="barrel" className="barrel" />
              </dv>
              <p className="h3 gold mb">PODWÓJNIE MASEROWANA</p>
              <p className="p">
                DZIĘKI ZASTOSOWANIU UNIKALNEGO PROCESU 'PODWÓJNEJ MASERACJI',
                SMAK NALEWKI KRÓLEWSKIEJ, WZBOGACONY ZOSTAŁ GŁĘBOKIMI AROMATAMI
                I DOSKONAŁĄ HARMONIĄ SMAKOWĄ.
              </p>
            </div>
          </>
        </div>
      </div>
      <img src={GoldLine} alt="gold line" className="goldLine goldLineTwo" />
      <div className="footer gold">
        <div className="footer__text">
          <p className="p">WYPRODUKOWANO W ROKU</p>
          <p className="h4">2022</p>
          <p className="p">NA ZLECENIE</p>
          <p className="h6">FABRYKA TRADYCYJNYCH ALKOHOLI "W&T"</p>
        </div>
        <div className="footer__info">
          <p className="h6">
            <span className="h4">500</span> ml
          </p>
          <p className="p footer__info__p">PRODUKT POLSKI</p>
          <p className="h6">
            alk. <span className="h4">45%</span> obj.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
