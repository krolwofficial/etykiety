import "./App.css";

import GoldLine from "./img/goldLine.png";

const Rewers = () => {
  return (
    <div className="App">
      <img src={GoldLine} alt="gold line" className="goldLine goldLineOne" />
      <div className="content">
        <div className="content__line">
          <div className="lines">
            <p className="p line">Dawno temu w magicznej krainie</p>
            <p className="p line">Gdzie spirytus rzeką płynie</p>
            <p className="p line">Rośnie drzewo co daje owoce</p>
            <p className="p line">Posiadjące baśniowe moce</p>
            <p className="p line">Pośród lasu siedzi ta kumów para</p>
            <p className="p line">Co owoce ze spirytusem scala</p>
            <p className="p line">Dwóch kumów</p>
            <p className="p line">Usta zmocząwszy,</p>
            <p className="p line">Cieniem walczący</p>
            <p className="p line">Z Duchem i Panem</p>
            <p className="p line">A hej smacznego</p>
            <p className="p line">Zasiorbnij kolego !</p>
            <p className="bosses h4 gold">SZEFOWIE</p>
          </div>
        </div>
      </div>
      <img src={GoldLine} alt="gold line" className="goldLine goldLineTwo" />
    </div>
  );
};

export default Rewers;
