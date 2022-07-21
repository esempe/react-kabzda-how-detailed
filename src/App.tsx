import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingContainer, ratingValueType} from "./components/Rating/Rating";
import {OnOffSwitcher} from "./components/on-of-Switcher/onOffSwitcher";
import {OnOffSwitcherV2} from "./components/on-of-Switcher/onOffSwitcherV2";


function App() {
    const [rating,setRating] = useState<ratingValueType>(2)
    return (
        <div className="App">
            <Accordion titleValue={'Menu'} />
            <Accordion titleValue={'Users'} />
            <OnOffSwitcher isOn={false}/>
            <OnOffSwitcherV2/>
            <OnOffSwitcherV2/>
            <OnOffSwitcherV2/>
            <OnOffSwitcherV2/>
            <OnOffSwitcherV2/>

            <RatingContainer setRatingValue={setRating} value={rating}/>
            <RatingContainer setRatingValue={setRating} value={rating}/>
            <RatingContainer setRatingValue={setRating} value={rating}/>
            <RatingContainer setRatingValue={setRating} value={rating}/>

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
