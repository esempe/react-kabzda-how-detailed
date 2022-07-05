import React, {useState} from "react";

type RatingPropsType = {
    value?: 0 | 1 | 2 | 3 | 4 | 5
}

export function RatingV2(props: RatingPropsType) {
    console.log('Rating rendering')
    const [value,setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(1)
    const onClickValue = (value:0 | 1 | 2 | 3 | 4 | 5) => {
        setValue(value)
    }
    return (
        <div>
            <Star value={1}  onClickValue={()=>onClickValue(1)} selected={value > 0} />
            <Star value={2} onClickValue={()=>onClickValue(2)} selected={value > 1}/>
            <Star value={3} onClickValue={()=>onClickValue(3)} selected={value > 2}/>
            <Star value={4} onClickValue={()=>onClickValue(4)} selected={value > 3}/>
            <Star value={5} onClickValue={()=>onClickValue(5)} selected={value > 4}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    value: 0 | 1 | 2 | 3 | 4 | 5
    onClickValue:(value:0 | 1 | 2 | 3 | 4 | 5)=>void
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

  return(
        <span onClick={()=> props.onClickValue(props.value)}>{props.selected ? <b>star </b> : " star"}</span>
  )
}