// import React, {useState} from 'react';
import './App.css';
import React, {MouseEvent, useState} from 'react';
import {TopCars} from "./task/01/NewComponent";
import {Button} from "./components/Button";
import {FilterComponent, FilterType} from "./task/02/task2";



function App() {

    // ---------------------
    // Buttons
    // ---------------------
    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => (
        console.log("I'm stupid button")
    )

    // -----------------
    // useState
    // -----------------
    let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a)
        console.log((a))
    }
    const onClickHandler0 = () => {
        setA(0)
    }


    // ----------------------
    // Micro task 1
    // ----------------------
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    // -----------------
    // filter, Micro task 2
    // -------------------

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>("all")
    let currentMoney = money

    if (filter === "Dollars") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "Dollars")
    }

    if (filter === "RUBLS") {

        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS")
    }
    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
     }

    // ------------------


    return (<div className="App">

        <TopCars Cars={topCars}/>

        {/* ---------------*/}
        {/* Micro task 2*/}
        {/*---------------*/}
        <FilterComponent currentMoney = {currentMoney} onClickFilterHandler = {onClickFilterHandler}/>



        {/*------------------*/}
        {/*Buttons*/}
        {/*-----------------*/}
        <Button name={"MyYouTubeChanel-1"}
                callBack={() => Button1Foo("I'm Tim", 21, "Minsk")}/>
        <Button name={"MyYouTubeChanel-2"} callBack={() => Button2Foo("I'm Nick")}/>
        <Button name={"MyYouTubeChanel-3"} callBack={Button3Foo}/>
        {/*-----------------*/}
        {/*useState*/}
        {/*----------------*/}

        <h1>{a}</h1>
        <button onClick={onClickHandler}>number</button>
        <button onClick={onClickHandler0}>0</button>


    </div>)

}

export default App;


// const [students, setStudents] = useState([
//         {id: 1, name: "James", age: 8},
//         {id: 2, name: "Robert", age: 18},
//         {id: 3, name: "John", age: 28},
//         {id: 4, name: "Michael", age: 38},
//         {id: 5, name: "William", age: 48},
//         {id: 6, name: "David", age: 58},
//         {id: 7, name: "Richard", age: 68},
//         {id: 8, name: "Joseph", age: 78},
//         {id: 9, name: "Thomas", age: 88},
//         {id: 10, name: "Charles", age: 98},
//         {id: 11, name: "Christopher", age: 100},
//     ]
// )
// return (
//     <NewComponent students={students}/>
// );


// <button onClick={(event)=>{console.log("g")}}>MyYouTubeChanel-1</button>

// --------------------------------------------
// const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
//     console.log("g")
// }
// const  mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
//     console.log("h")
// }
// <button onClick={onClickHandler}>MyYouTubeChanel-1</button>


// --------------------------------------------

// const onClickHandler =(name:string) => {
//     console.log(name) }

// <button onClick={(event:MouseEvent<HTMLButtonElement>) => onClickHandler("g")}>MyYouTubeChanel-1</button>
// <button onClick={(event:MouseEvent<HTMLButtonElement>) => onClickHandler("h")}>MyYouTubeChanel-2</button>

// --------------------------------------------
// const foo1 =(event:MouseEvent<HTMLButtonElement>) => {
//     console.log(100200)
// }
// const foo2 =(n:number) => {
//     console.log(n)
// }

// <button onClick={foo1}>1</button>
// <button onClick={(event:MouseEvent<HTMLButtonElement>)=>(foo2(100200))}>2</button>

// --------------------------------------------



// <ul>
//     {currentMoney.map((objFromMoneyArr, index) => {
//         return (
//             <li key={index}>
//                 <span>{objFromMoneyArr.banknots}</span>
//                 <span>{objFromMoneyArr.value}</span>
//                 <span>{objFromMoneyArr.number}</span>
//             </li>
//         )
//     })}
// </ul>
//
// <button onClick={() => onClickFilterHandler("all")}>all</button>
// <button onClick={() => onClickFilterHandler("RUBLS")}>RUBLS</button>
// <button onClick={() => onClickFilterHandler("Dollars")}>Dollars</button>