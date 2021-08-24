import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
// import images from './prop/images/elite.jpg'
import App from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <>

 <h1 className="heading_style">List of Top 12 Netflix Series </h1>


 <Card
 imgsrc="https://wallpapercave.com/wp/wp7862483.png"
 title="A Netflix Original Series"
 sname="Elite Movie"
 link="https://www.netflix.com/in/title/80200942?source=35"

 />
 <Card
 imgsrc="https://wallpapercave.com/wp/wp8377991.jpg"
 title="A Netflix Original Series"
 sname="Hit & RunOutside"
 link="https://www.netflix.com/in/title/81074110?source=35"
 />

<Card 
 imgsrc="https://wallpapercave.com/wp/wp8822243.jpg"
 title="A Netflix Original Series"
 sname="Sweet Home"
 link="https://www.netflix.com/in/title/81061734?source=35"
   
 />

 <Card 
 imgsrc="https://wallpapercave.com/wp/wp9182937.jpg"
 title="A Netflix Original Series"
 sname="Oxygen"
 link="https://www.netflix.com/in/title/81277610?source=35"
   
 />
 <Card 

 imgsrc="https://wallpapercave.com/wp/wp4423032.jpg"
 title="A Netflix Original Series"
 sname="Witcher "
 link="https://www.netflix.com/in/title/80189685?source=35"
   
 />
 <Card
 imgsrc="https://wallpapercave.com/wp/wp6201564.jpg"
 title="A Netflix Original Series"
 sname="Money Heist "
 link="https://www.netflix.com/in/title/80192098?source=35"
 />


<Card 

imgsrc="https://wallpapercave.com/wp/wp9452298.jpg"
 title="A Netflix Original Series"
 sname="Resident Evil Infinite Darkness"
 link="https://www.netflix.com/in/title/80987064?source=35"
   
   />


 <Card 

 imgsrc="https://wallpapercave.com/wp/wp5158215.jpg"
 title="A Netflix Original Series"
 sname="Messiah"
 link="https://www.netflix.com/in/title/80117557?source=35"
   
 />


<Card 
imgsrc="https://wallpapercave.com/wp/wp5701757.jpg"
 title="A Netflix Original Series"
 sname="Daredevil"
 link="https://www.netflix.com/in/title/80018294?source=35"
   
   />


<Card 
imgsrc="https://wallpapercave.com/wp/wp6409478.jpg"
 title="A Netflix Original Series"
 sname="The Order"
 link="https://www.netflix.com/in/title/80238357?source=35"
   
/>


<Card 
imgsrc="https://wallpapercave.com/wp/wp5246009.jpg"
 title="A Netflix Original Series"
 sname="Dracula"
 link="https://www.netflix.com/in/title/80997687?source=35"
   
   />


<Card 
imgsrc="https://wallpapercave.com/wp/wp5313328.jpg"
 title="A Netflix Original Series"
 sname="October Faction"
 link="https://www.netflix.com/in/title/80221644?source=35"
   
   />
 </>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
