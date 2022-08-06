import React, {useState, useEffect} from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(
    () => {
        window.addEventListener("scroll", () => {
          if(window.scrollY>100){
            handleShow(true);
          }
          else handleShow(false);
        });
        return () => {
          window.removeEventListener("scroll", handleShow);
        };
      }, []
    );

  return (
    <div>
        {/* if show is true, also append nax_scroll in the className */}
      <div className={`nav ${show && "nav__scroll"}`}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" className="nav__logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Account Avatar" className="nav__avatar" />
        </div>
    </div>
  )
}

export default Nav