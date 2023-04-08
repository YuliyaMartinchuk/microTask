import React, {ChangeEvent} from 'react';

type InputPropsType = {
    SetTitle: (title:string)=>void
    title:string
}


export const Input = (props:InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.SetTitle(event.currentTarget.value)
    }
    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    )
    }