import React from "react";
import ReactDOM from "react-dom/client"
import Search from "./search";
import Component from "./component";
import One from "./Assets/1.png"
import Two from "./Assets/2.png"
import Three from "./Assets/3.png"
import Four from "./Assets/4.png"
import Five from "./Assets/5.png"

const root = ReactDOM.createRoot(document.getElementById("root"))

let data = [{
    name: "Sandy",
    desc: "Hey, I am Full Stack Develper",
    rate: 11,
    img: One
},
{
    name: "Candy",
    desc: "Hey, I am Mern Stack Develper",
    rate: 10,
    img: Two
},
{
    name: "Mandy",
    desc: "Hey, I am Software develper",
    rate: 11,
    img: Three
},
{
    name: "Justina",
    desc: "Hey, I am Frontend develper",
    rate: 11,
    img: Four
},
{
    name: "Cris",
    desc: "Hey, I am Full stack develper",
    rate: 11,
    img: Five
}]

root.render(<div>
    <Search></Search>
    {
        data.map(function (item) {
            return (
                <div>
                    <Component name={item.name} desc={item.desc} rate={item.rate} img={item.img}></Component>
                </div>
            )
        })
    }
</div>)