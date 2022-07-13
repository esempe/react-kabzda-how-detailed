import {reducer, stateType, TOGGLE_COLLAPSED} from "./reducer";

test("collapsed should be true ", ()=>{
    const state: stateType = {
        collapsed:false
    }
    const newState = reducer(state,{type:TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)
})