import React from "react";
type ItemType = {
    title:string,
    id:any
}

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    setCollapsedAccordion: (value:boolean) => void
    items: ItemType[]
    onItemClick:(id:any) => void
}

export function AccordionV2(props: AccordionPropsType) {
    console.log('Accordion rendering')

    return(
        <div>
            <div onClick={()=>props.setCollapsedAccordion(!props.collapsed)}><AccordionTitle title={props.titleValue}/></div>
            { props.collapsed == false && <AccordionBody onClick={props.onItemClick} items={props.items} />}
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

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick:(id:any) => void
}

function AccordionBody(props:AccordionBodyPropsType) {
    console.log('AccordionBody rendering')


    return <ul>
        {props.items.map( el => <li onClick={()=>{props.onClick(el.id)}} key={Math.random()}>{el.title}</li>)}
    </ul>
}

