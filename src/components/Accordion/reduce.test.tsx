import {reducer, TOGGLE_COLLAPSED} from "./reducer"

export type stateType = {
    collapsed: boolean
}

test('collapsed should be true', () => {
    //data
    const state: stateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    //data
    const state: stateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(newState.collapsed).toBe(false)
})

test('reducer should throw error because action type is incorrect', () => {
    //data
    const state: stateType = {
        collapsed: true
    }

    //action
    //expectation
    expect(()=> {reducer(state, {type: "FAKE"})}).toThrowError()
})