import React, { useState } from "react";
import Card from "../componants/Card";
import Button from "../componants/Button";
import classes from "./AddNewQautaion.module.css";
import ErrorModel from "../componants/ErrorModel";

const AddNewQautaion = (props) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState();
  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };
  const textChangeHandler = (event) => {
    setText(event.target.value);
  };
  const addHandler = (event) => {
    event.preventDefault();
    if (author.trim().length == 0 || text.trim().length == 0) {
      setError({
        title: "Invalied Input",
        massege: "Please fill the empty feiled ",
      });
      return;
    }
    props.addQautaion(author, text);
    setAuthor("");
    setText("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          massege={error.massege}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form>
          <label>Author</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={authorChangeHandler}
          ></input>
          <label>Text</label>
          <textarea
            id="qautaion"
            rows="4"
            cols="50"
            value={text}
            onChange={textChangeHandler}
          ></textarea>
          <Button type="submit" onClick={addHandler}>
            Add Qautation
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddNewQautaion;
