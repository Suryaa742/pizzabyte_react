import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
     Welcome to **Reactizza**, where technology meets flavor! 🍕✨  

At Reactizza, we believe in delivering more than just delicious pizzas—we craft an experience. Our innovative platform combines the speed of modern web technologies with the warmth of your favorite pizza place. Whether you're craving a classic Margherita or a bold BBQ Chicken, Reactizza is your one-stop solution for satisfying hunger with style.
With real-time updates and a user-friendly interface, we make ordering pizzas as seamless as taking the first bite. Built with passion (and a lot of ReactJS), Reactizza is here to revolutionize how you enjoy your favorite food.
Your perfect pizza is just a click away. React. Order. Relish. 🍕❤️ Let me know if you’d like adjustments or additional details!
        </p>
      </div>
    </div>
  );
}

export default About;
