import React, {useReducer, useState} from "react";
import {reducer} from "./reducer";

type AccordionPropsType = {
    titleValue: string,
   // collapsed: boolean
}


function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')


    //let [isCollapsed, setCollapsed] = useState<boolean>(true)
    let [state, dispatch] = useReducer(reducer,{collapsed:false});
    const onClickHandler = () => {
        //(isCollapsed === true) ? setCollapsed(false) : setCollapsed(true)
        dispatch({type:"TOGGLE-COLLAPSED"})
    }
    let divStyle = {
        cursor:'pointer'
    }

    return(
        <div style={divStyle} onClick={onClickHandler}>
            <AccordionTitle title={props.titleValue}/>
            { !state.collapsed == true && <AccordionBody />}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;
