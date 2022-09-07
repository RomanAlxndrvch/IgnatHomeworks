export type stateType = {
    isLoading: boolean
}
type rootActionType = ReturnType<typeof loadingAC>

const initState = {
    isLoading: false
}

export const loadingReducer = (state: stateType = initState, action: rootActionType): stateType => {
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {...state, isLoading: !state.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = () => {
    return {
        type: 'CHANGE-LOADING'
    }
}