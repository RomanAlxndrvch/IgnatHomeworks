import {UserType} from "../HW8";

type sortUpActionCreatorType = {
    type: 'sort',
    payload: 'up' | 'down'
}
type checkActionCreatorType = {
    type: 'check',
    payload: number
}

type ActionCreator = sortUpActionCreatorType | checkActionCreatorType

export const homeWorkReducer = (state: Array<UserType>, action: ActionCreator): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === "up") {
                return [...state.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    else return 0;
                })]
            }
            if (action.payload === "down") {
                return [...state.sort(function (a, b) {
                    if (a.name < b.name) {
                        return 1
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    else return 0;
                })]
            }
            else return state
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}

export const sortUpActionCreator = (): sortUpActionCreatorType => {
    return {
        type: 'sort',
        payload: 'up'
    }
}

export const sortDownActionCreator = (): sortUpActionCreatorType => {
    return {
        type: 'sort',
        payload: 'down'
    }
}

export const checkActionCreator = (age: number): checkActionCreatorType => {
    return {
        type: "check",
        payload: age
    }
}