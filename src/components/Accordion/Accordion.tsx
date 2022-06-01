import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
   // collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    let [isCollapsed, setCollapsed] = useState<boolean>(true)
    const onClickHandler = () => {
        (isCollapsed === true) ? setCollapsed(false) : setCollapsed(true)
    }
    let divStyle = {
        cursor:'pointer'
    }

    return(
        <div style={divStyle} onClick={onClickHandler}>
            <AccordionTitle title={props.titleValue}/>
            { isCollapsed == true && <AccordionBody />}
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
