import React from 'react';
import ReactDOM from 'react-dom/client';


/*
import { ReactDOM } from 'react-dom'
<div id="parent">
    <div id="child">
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
    </div>
    <div id="child2">
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
    </div>
</div>
 */



// const parent = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},['Hello, world!','Hello, world!']),
//     React.createElement("div",{id:"child2"},['Hello, world!','Hello, world!'])
// )
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);




// const heading = React.createElement('h1', {id:"heading"}, 'Hello, world!');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img className='logo' src="https://cdn2.f-cdn.com/contestentries/2426851/74260034/6689bc27dfb41_thumb900.jpg" alt="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const ResturantCard = () => {
    return (
        <div className='res-card'>
            <img className='img' src="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg" width={250} height={150} alt="Resturant" />
            <h3>Meghana Foods</h3>
            <h4>Burger, North Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
            </div>
        </div>

    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);