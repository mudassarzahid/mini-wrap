import React from "react";
import './TodaysDate.css';
import {pure} from 'recompose';

const getDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();

  return (mm + '/' + dd + '/' + yyyy)
};

const TodaysDate = props => {
  return (
    <span className="date-textfield">
      {getDate()}
    </span>
  )
};

export default pure(TodaysDate);
