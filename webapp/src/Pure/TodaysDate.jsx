import React, {useState} from "react";
import './TodaysDate.css';

const getDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();

  return (mm + '/' + dd + '/' + yyyy)
};

const TodaysDate = () => {
  const [date] = useState(getDate);
  return (
    <span className="date-textfield">
      {date}
    </span>
  )
};

export default TodaysDate;
