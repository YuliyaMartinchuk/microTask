import React, {ChangeEvent, useState} from 'react';

type addMessagePropsType = {
    addMessage: (title:string) => void
}


export const FullInput = (props:addMessagePropsType) => {
    let [title, SetTitle] = useState('')
    console.log(title)
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        SetTitle(event.currentTarget.value)
    }
    const onClickInputHandler = () => {
        props.addMessage (title)
        SetTitle("")

    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickInputHandler}>+
            </button>
        </div>
    )
}