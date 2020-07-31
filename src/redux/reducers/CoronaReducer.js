const initialState = {
    coronaIndonesia: {},
    globalPositive: "",
    globalDeath: "",
    globalRecover: ""
};
 
const CoronaReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DATA_CORONA_INDONESIA":
            return {
                ...state,
                coronaIndonesia: action.coronaIndonesia,
            }
        case "GET_DATA_GLOBAL_POSITIVE":
            return {
                ...state,
                globalPositive: action.globalPositive,
            }
        case "GET_DATA_GLOBAL_DEATH":
            return {
                ...state,
                globalDeath: action.globalDeath,
            }
        case "GET_DATA_GLOBAL_RECOVER":
            return {
                ...state,
                globalRecover: action.globalRecover,
            }
        default:
            return state
    }
};

export default CoronaReducer