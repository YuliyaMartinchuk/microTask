import React from 'react';
import s from "./task2.module.css"
export type FilterType = "all" | "RUBLS" | "Dollars"


export type FilterComponentPropsType = {
    currentMoney:  Array<MoneyPropsType>;

    onClickFilterHandler:(nameButton: FilterType) => void
}

export type MoneyPropsType ={
    banknots: string
    value: number
    number: string
}
export const FilterComponent = (props:FilterComponentPropsType) => {
    return (
        <div >
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>

            <button className={s.buttonAll} onClick={() =>props.onClickFilterHandler("all")}>all</button>
            <button  className={s.buttonRUBLS} onClick={() =>props.onClickFilterHandler("RUBLS")}>RUBLS</button>
            <button className={s.buttonDollars} onClick={() => props.onClickFilterHandler("Dollars")}>Dollars</button>
        </div>
    )
}