export type ActionType = {
    type: string
}
export type stateType = {
    collapsed: boolean
}
export const TOGGLE_COLLAPSED = 'TOGGLE_CONSTANT' //создали переменную
export const reducer = (state: stateType, action: ActionType): stateType => {
    switch (action.type) { //для экшкна
        case TOGGLE_COLLAPSED: //если значение типа задиспатченной инструкции равно этой переменной
            const stateCopy = {...state, collapsed:!state.collapsed }
            return stateCopy; // то менем
        default: //иначе
            throw new Error('Bad action type')
        // return state; // не меняем
    }
}