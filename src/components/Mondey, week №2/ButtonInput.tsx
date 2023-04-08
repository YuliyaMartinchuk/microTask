import React from 'react';

type ButtonInputPropsType = {
    name:string,
    callBack: () => void
}


export const ButtonInput = (props: ButtonInputPropsType) => {
    const onClickButtonInputHandler = () => {
        props.callBack()
    }
    return (
            <button onClick={onClickButtonInputHandler}>{props.name}</button>

    )
}