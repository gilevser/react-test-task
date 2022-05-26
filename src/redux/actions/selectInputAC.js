export const selectInputSize = (data) => {
    return {type: 'USER_SELECT', payload: data}
}

export const selectInputClear = () => {
    return {type: 'USER_SELECT', payload: "Выберите..."}
}