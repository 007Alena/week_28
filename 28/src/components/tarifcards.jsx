import '../assets/cradstyle.css';
import React, {useState} from 'react';

    function Cards(tarif) {
        const [chose, nochose] = useState(false)
        return (
    <div className={`tariff`}>
    <div className={`title ${tarif.card.title}`}>{tarif.title}</div>
    <div className={`price ${tarif.card.price}`}>{tarif.price}
    </div>
    <div className='card__gigi'>{tarif.gigi}</div>
    <footer className='card__value'>{tarif.text}</footer>
    <button className="button" onClick={() => nochose(!chose)}>{chose ? "Тариф выбран" : "Выбрать тариф"} </button>
        </div>
        );
    }
    
    export default Cards;