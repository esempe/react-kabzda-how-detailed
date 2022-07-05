import React, {useState} from 'react';

type onOfPropsType = {
    isOn:boolean;
}

export const OnOffSwitcher = (props:onOfPropsType) => {

    let [swi4, setSwi4] = useState<boolean>(false)
    const onClickHandler = () => {
        (swi4 === true) ? setSwi4(false) : setSwi4(true)
    }
    const isOnOnButton = (isOn:boolean) => {
        return (isOn === true) ? 'active' : 'offed';
    }
    const isIndicatorON = (isOn:boolean) => {
        return (isOn === true) ? 'indicatorON' : 'indicatorOFF';
    }
    console.log(swi4)
    return (
        <div className="switcherWrapper">
            <button onClick={onClickHandler} >switch</button>
            <div className={`on ${isOnOnButton(swi4)}`}>ON</div>
            <div className={`off ${isOnOnButton(!swi4)}`}>OFF</div>
            <div className={`indicator ${isIndicatorON(swi4)}`}></div>
        </div>
    );
};

