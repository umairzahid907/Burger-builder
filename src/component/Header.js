import React, {useState} from 'react';
import burger from '../assets/images/burger.png';
import Burger from './Burger.js';
import Login from './Login.js';
import './Header.css'

export default function Header() {
  const [main, setMain] = useState(true);
  const setpage = (page) =>{
    if( page ==="main"){
      setMain(main=>true);
    }
    else{
      setMain(main=>false);    }
  };

  return (
    <><nav class="navbar" >
      <div class='navbar-brand'>
        <img src={burger} alt=''></img>
      </div>
      <div class="p-2 d-flex justify-content-end ">

        <div>
          <button type="button" class="btn btn-outline-warning" onClick={()=> setpage("main")}>Burger Builder</button>
        </div>
        <div>
          <button type="button" class="btn btn-outline-info" onClick={()=> setpage("login")}>Login</button>
        </div>
      </div>
    </nav>
    {main ?
        <Burger/> : <Login/>
     }
     </>
  )
}
