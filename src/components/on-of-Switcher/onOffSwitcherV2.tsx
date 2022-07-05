import React, {useState} from 'react';

type onOfPropsType = {
    isOn?: boolean;
}

export const OnOffSwitcherV2 = (props: onOfPropsType) => {

    let [swi4, setSwi4] = useState<boolean>(false)
    const onClickHandler = () => {
        (swi4 === true) ? setSwi4(false) : setSwi4(true)
    }
    let ONstyle = {
        display: "flex",
        justifyContent: "center",
        border: "1px solid green",
        color: "black",
        backgroundColor: (swi4 === true) ? 'red': 'green',
        height: "25px",
        width: "150px",
        cursor: 'pointer',
    }
    const OFFstyle = {
        display: "flex",
        justifyContent: "center",
        border: "1px solid green",
        color: "black",
        height: "25px",
        width: "150px",
        cursor: 'pointer',
        backgroundColor: (swi4 === true) ? 'green': 'red ',
    }
    const indicatorStyle = {
        height: "24px",
        width: "24px",
        border: "1px solid black",
        borderRadius: "50% ",

        backgroundColor: (swi4 === true) ? 'green': 'red ',
    }
    console.log(swi4)
    return (
        <div className="switcherWrapper">
            <div onClick={onClickHandler} style={ONstyle}>ON</div>
            <div onClick={onClickHandler} style={OFFstyle}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

