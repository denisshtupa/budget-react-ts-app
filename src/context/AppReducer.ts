// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any, action: any) => {
    switch(action.type) {
        // Delete action from global state
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter((x: any) => x.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default: 
            return state;
    }
}