import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';


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