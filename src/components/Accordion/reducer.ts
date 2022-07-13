

export  type ActionType ={
    type:string
}

export  type stateType ={
    collapsed:boolean;
}
export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED";
export const reducer = (state:stateType, action:ActionType) => {

    switch (action.type) {

        case TOGGLE_COLLAPSED:{
            console.log('работает редусер')

            return {...state,collapsed:!state.collapsed};
        }
        default:return state;
    }
}