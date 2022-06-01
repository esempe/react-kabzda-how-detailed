import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOffSwitcher} from "./components/onOffSwitcher";
import {OnOffSwitcherV2} from "./components/onOffSwitcherV2";

function App() {
    return (
        <div className="App">
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <OnOffSwitcher isOn={false}/>
            <OnOffSwitcherV2/>
            <OnOffSwitcherV2/>
            <OnOffSwitcherV2/>
            <OnOffSwitcherV2/>
            <OnOffSwitcherV2/>

            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={5}/>

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
