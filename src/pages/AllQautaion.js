import React, { useContext } from "react";
import Button from "../componants/Button";
import classes from "./AllQautaion.module.css";
import { Link } from "react-router-dom";
import QautaionsContext from "../context/QautaionContext";

const AllQautaion = (props) => {
  const qautaionsList = useContext(QautaionsContext).qautaions;

  return (
    <div className={classes.qautaion}>
      <ul>
        {qautaionsList.map((qautaion) => {
          return (
            <li key={qautaion.id}>
              <div>
                <p className={classes.text}>{qautaion.text}</p>
                <p className={classes.author}>
                  <i>{qautaion.author}</i>
                </p>
              </div>

              <Link to={"/Qautaions/" + qautaion.id} className={classes.link}>
                <Button>Full Screen</Button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllQautaion;
