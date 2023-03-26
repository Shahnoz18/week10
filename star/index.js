const getLeapYear = year => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

function getLeap(e)

{
 if(getLeapYear(e)===true) return "Високосный";

 else return "Не високосный";
}
document.write(getLeap(2023));