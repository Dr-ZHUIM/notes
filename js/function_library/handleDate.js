function handleHourMinuteSecond(value){
  return (Array(2).join(0) + value).slice(-2);
}

function handleDateFrom(type, date) {
  if(!type)throw "you must give a type !"
  if(!date)throw "you must give a date !"
  if (typeof type != 'string')throw "the first argument is not String type";
  if (!(date instanceof Date)) throw "the second argument is not Date type";
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = handleHourMinuteSecond(date.getHours());
  let minute = handleHourMinuteSecond(date.getMinutes());
  let second = handleHourMinuteSecond(date.getSeconds());
  switch (type) {
    case "yyyy-mm-dd hh-mm-mm":
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    case "yyyy-mm-dd hh-mm":
      return `${year}-${month}-${day} ${hour}:${minute}`;
    case "yyyy-mm-dd":
      return `${year}-${month}-${day}`;
    case "yyyy-mm":
      return `${year}-${month}`
    default:
      throw "there is no matched type as you pass";
  }
}
