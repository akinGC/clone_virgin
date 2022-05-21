
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useEffect, useState } from 'react';
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Menu from './components/Menu';
import Close from './components/Close';


function App() {
  const [menu,setMenu] = useState(true);
 
    function toggle(){
    setMenu(!menu);
      const tar = document.getElementById('virgin_nav_menu');
      menu?tar.style.display='none':tar.style.display='block';
    }
  return (
    <Fragment>
      <nav className='virgin_navbar'>
   
        <div className='virgin_nav_menu'id='virgin_nav_menu'onClick={toggle} ><FontAwesomeIcon className='virgin_nav_menu_icon' icon={faBars}></FontAwesomeIcon>
        <span className='virgin_nav_menu_txt'>menu</span>
        </div>
        <div className='virgin_nav_close'onClick={toggle}><FontAwesomeIcon className='virgin_nav_close_icon' icon={faXmark}></FontAwesomeIcon>
        <span className='virgin_nav_close_txt'>close</span>
        </div>
        <div className='virgin_nav_title'></div>
      </nav>
     {
       menu?<Menu/>:<Close/>
     }
     
    </Fragment>
  );
}

export default App;
