import React from "react";

export type ratingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: ratingValueType
    setRatingValue:(value:ratingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')
    return (
        <div>
            <Star setRatingValue={props.setRatingValue} selected={props.value > 0} value={1}/>
            <Star setRatingValue={props.setRatingValue} selected={props.value > 1} value={2}/>
            <Star setRatingValue={props.setRatingValue} selected={props.value > 2} value={3}/>
            <Star setRatingValue={props.setRatingValue} selected={props.value > 3} value={4}/>
            <Star setRatingValue={props.setRatingValue} selected={props.value > 4} value={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    value:ratingValueType
    setRatingValue:(value:ratingValueType) => void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

    return (
        <span onClick={()=>props.setRatingValue(props.value)}>
            {props.selected ? <b>star </b> : 'star'}
        </span>
    )

}

export const RatingContainer = React.memo(Rating)