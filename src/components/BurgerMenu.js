import React, { useState } from "react";
import Menu from "./Menu";
import BurgerMenuButton from "./BurgerMenuButton";

function BurgerMenu() {
  const [pressed, setPressed] = useState(false);

  function handleBurgerButtonClick() {
    setPressed(!pressed);
  }

  return (
    <div className="burger-menu">
      <div className="nav">
        {pressed ? (
          <Menu handleCloseClick={handleBurgerButtonClick} />
        ) : (
          <BurgerMenuButton handleClick={handleBurgerButtonClick} />
        )}
      </div>
    </div>
  );
}

export default BurgerMenu;
