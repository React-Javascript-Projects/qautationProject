import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h2 className={classes.title}>Great Qautaion</h2>
      <div className={classes.link}>
        <Link to="/Qautaions" className={classes.link}>
          All Quataion
        </Link>
        <Link to="/Add" className={classes.link}>
          Add New Qautaion
        </Link>
        <Link to="/Relode" className={classes.link}>
          Relode
        </Link>
      </div>
    </header>
  );
};

export default Header;
