import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import classes from "./QautaionDetailes.module.css";
import Card from "../componants/Card";
import QautaionsContext from "../context/QautaionContext";

const QautaionDetailes = (props) => {
  const qautaionId = useParams().qautaionId;
  const qautaionsList = useContext(QautaionsContext).qautaions;

  const qautaion = qautaionsList.find((x) => x.id == qautaionId);

  return (
    <Card className={classes.input}>
      <header className={classes.header}>
        <h2>{qautaion.author}</h2>
      </header>
      <div className={classes.content}>
        <h3>" {qautaion.text} "</h3>
      </div>
    </Card>
  );
};

export default QautaionDetailes;
