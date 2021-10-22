import "./Header.scss";
import "./Header.media.scss";

import { Person, Mail, Phone, ComputerTwoTone } from "@material-ui/icons";

export const Header = ({ menuActive, setMenuActive, onClick }) => {
  return (
    <header className={menuActive ? "activeHeader" : ""}>
      <div className='logo'>
        <ComputerTwoTone className='icon' />
      </div>
      <div className='leftContainer'>
        <div className='itemContainer'>
          <Person className='icon' />
          <span>Steve Shammah</span>
        </div>
        <div className='itemContainer'>
          <Mail className='icon' />
          <span>Shammahsteve.o@gmail.com</span>
        </div>
        <div className='itemContainer'>
          <Phone className='icon' />
          <span>+254 795 058 630</span>
        </div>
      </div>
      <div className='rightContainer'>
        <div className='burgerNav' onClick={onClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};
