import React, {useState} from 'react';
import './Burger.css';
import Top from '../assets/images/top.jpeg';
import Bottom from '../assets/images/bottom.jpeg';
import Cheese from '../assets/images/cheese.jpeg';
import Lettuce from '../assets/images/lettuce.jpeg';
import Bacon from '../assets/images/bacon.jpeg';
import Meat from '../assets/images/meat.jpeg';


function Burger(){
  const [lettuce, setLettuce] = useState(0);
  const [bacon, setBacon] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [meat, setMeat] = useState(0);
  const [price, setPrice] = useState(3.00);

  const addIngredient = (prop) =>{
    if(prop === 'lettuce'){
      setLettuce(lettuce + 1);
      setPrice(price + 0.5);
    }
    else if(prop === 'bacon'){
      setBacon(bacon + 1);
      setPrice(price + 0.7);
    }
    else if(prop === 'cheese'){
      setCheese(cheese + 1);
      setPrice(price + 0.4);
    }
    else if(prop === 'meat'){
      setMeat(meat + 1);
      setPrice(price + 1.3);
    }
  };

  const removeIngredient = (prop) =>{
    if(prop === 'lettuce'){
      setLettuce(lettuce - 1);
      setPrice(price - 0.5);
    }
    else if(prop === 'bacon'){
      setBacon(bacon - 1);
      setPrice(price - 0.7);
    }
    else if(prop === 'cheese'){
      setCheese(cheese - 1);
      setPrice(price - 0.4);
    }
    else if(prop === 'meat'){
      setMeat(meat - 1);
      setPrice(price - 1.3);
    }
  };

  const ingredients = () => {
    let burger = [];
    for(let i = 0; i < lettuce; i++){
      burger.push(<li><img src={Lettuce} alt="burger lettuce" /></li>);
    }
    for(let i = 0; i < bacon; i++){
      burger.push(<li><img src={Bacon} alt="burger bacon" /></li>);
    }
    for(let i = 0; i < cheese; i++){
      burger.push(<li><img src={Cheese} alt="burger cheese" /></li>);
    }
    for(let i = 0; i < meat; i++){
      burger.push(<li><img src={Meat} alt="burger meat" /></li>);
    }
    return burger.length > 0 ? burger : <div>No Ingredients Added</div>;
  };

  return(
    <div class='burger'>

      <div class='images'>
        <img src={Top} alt="burger top" />
        <ul>
          {ingredients()}
        </ul>
        <img src={Bottom} alt="burger bottom" />
      </div>

      <div class='indredients-selection'>
        <div>
          Current price : ${price.toFixed(2)}
        </div>
        <p>Lettuce
          <button class='less-btn' onClick={() => removeIngredient('lettuce')} disabled={lettuce < 1}>
            Less
          </button>
          <button class='more-btn' onClick={() => addIngredient('lettuce')}>
            More
          </button>
        </p>
        <p>Bacon
          <button class='less-btn' onClick={() => removeIngredient('bacon')} disabled={bacon < 1}>
            Less
          </button>
          <button class='more-btn' onClick={() => addIngredient('bacon')}>
            More
          </button>
        </p>
        <p>Cheese
          <button class='less-btn' onClick={() => removeIngredient('cheese')} disabled={cheese < 1}>
            Less
          </button>
          <button class='more-btn' onClick={() => addIngredient('cheese')}>
            More
          </button>
        </p>
        <p>Meat
          <button class='less-btn' onClick={() => removeIngredient('meat')} disabled={meat < 1}>
            Less
          </button>
          <button class='more-btn' onClick={() => addIngredient('meat')}>
            More
          </button>
        </p>
      </div>
    </div>
  );
}

export default Burger;
