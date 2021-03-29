import React, {useState} from "react";


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
    <span style={{"float": "right", "paddingTop": "3px"}}>
      {date}
    </span>
  )
};

export default TodaysDate;
