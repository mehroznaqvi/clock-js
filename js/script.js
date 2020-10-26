const secondHand = document.querySelector('.hand-sec');
const minsHand = document.querySelector('.hand-min');
const hoursHand = document.querySelector('.hand-hour');


function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();
  
  
  const secondsDegree  = seconds * ( 360 / 60 ) + 90;
  const minsDegree = mins * ( 360 / 60 ) + 90;
  const hoursDegree = hours * ( 360 / 12 ) + 90;;
  
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minsHand.style.transform = `rotate(${minsDegree}deg)`;
  hoursHand.style.transform  = `rotate(${hoursDegree}deg)`;
  
  
};



setInterval(setDate, 1000);