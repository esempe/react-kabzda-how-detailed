import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, ratingValueType} from "./components/Rating/Rating";
import {OnOffSwitcher} from "./components/on-of-Switcher/onOffSwitcher";
import {OnOffSwitcherV2} from "./components/on-of-Switcher/onOffSwitcherV2";
import {RatingV2} from "./components/RatingV2/RatingV2";
import {AccordionV2} from "./components/AccordionV2/AccordionV2";
import {Lesson12} from "./components/12lesson/Lesson12";
import {Select} from "./components/selectCustom/Select";
import {log} from "util";


function App() {

    let [ratingValue,setRatingValue] = useState<ratingValueType>(2)
    const [isCollapsedAccordion,setCollapsedAccordion] = useState<boolean>(false)
    const [isCollapsedAccordion2,setCollapsedAccordion2] = useState<boolean>(false)
    const [selectedItem,setSelectItem] = useState<string>('')
   //const itemsForAccordion = ['bebgra','zerebra','rebro'];
    const itemsForAccordion = [
        {title:'да',id:1},
        {title:'нет',id:2},
        {title:'мяу',id:3},
        {title:'мявк',id:4},
    ];

    return (
        <div className="App">
            <Select //noneValue={'none'}
                onItemClick={()=>{console.log('click')}}
                title={'кушац будешь????'}
                selectedItem={selectedItem}
                setSelectedItem={setSelectItem}
                items={itemsForAccordion} />
            <Accordion titleValue={'Menu V1'} />
            <AccordionV2
                onItemClick={()=>{
                    console.log('на итем нажали!!!')}}
                items={itemsForAccordion}
                setCollapsedAccordion={setCollapsedAccordion}
                titleValue={'Users V2'}
                collapsed={isCollapsedAccordion}/>
            <AccordionV2
                onItemClick={()=>{
                    console.log('на итем нажали!!!')}}
                items={itemsForAccordion}
                titleValue={'acardion'}
                collapsed={isCollapsedAccordion2}
                setCollapsedAccordion={setCollapsedAccordion2}/>
            <OnOffSwitcher isOn={false}/>
            <OnOffSwitcherV2/>

            <OnOffSwitcherV2/>
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <RatingV2/>
            <Lesson12/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('App rendering')
    return <h1>{props.title}</h1>
}



export default App;
