import React, {ChangeEvent, useState, MouseEvent, useRef} from 'react';

export const Lesson12 = () => {

    return (
        <div>
            <TrackValueUncotrolledInput/>
            <GetValueUncotrolledInput/>
        </div>
    );
};

const TrackValueUncotrolledInput = () => {
    const [value,setValue] = useState('')
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <>

            <input onChange={onChangeHandler} value={value}/> - {value}

        </>

    )
}
const GetValueUncotrolledInput = () => {
    const [value,setValue] = useState('')
/*    const onChangeHandler  = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }*/
    const inputRef = useRef<HTMLInputElement>(null)
    const onClickHandler= (e:MouseEvent<HTMLButtonElement>) =>{

        const el = inputRef.current as  HTMLInputElement
        setValue(el.value)
    }
    return (
        <>

            <input ref={inputRef} /> <button onClick={onClickHandler}>ctn</button> - {value}

        </>

    )
}