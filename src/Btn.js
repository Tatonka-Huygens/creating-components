// function Btn() {
//     const clickHandler =
//         () => console.log('clicked')
//     return (
//         <button onClick={clickHandler}>
//             Click me
//         </button>
//     );

// }

// export default Btn;


// function Btn() {
//     const clickHandler =
//         () => console.log('mouse over')
//     return (
//         <button onMouseOver={clickHandler}>
//             Click me
//         </button>
//     );

// }

// export default Btn;


// function Btn() {
//     return (
//         <button onClick={function() {console.log('first example')}}>
//             An inline anonymous ES5 function event handler
//         </button>
//     );

// }

// export default Btn;


// function Btn() {
//     return (
//         <button onClick={() => console.log('second example')}>
//             An inline anonymous ES6 function event handler
//         </button>
//     );

// }

// export default Btn;


function Btn() {
    return (
        <button onClick={() => console.log('second example')}>
            An inline anonymous ES6 function event handler
        </button>
    );

}

export default Btn;


