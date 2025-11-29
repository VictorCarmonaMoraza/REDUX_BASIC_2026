
//Creamos la primera accion
//Acciones
interface Action {
    type: string;
    payload?: any
}

// const incrementadorAction: Action = {
//     type: 'INCREMENTAR'
// };


//REDUCER
function reducer(state = 10, action: Action) {

    if (action.type === 'INCREMENTAR') {
        return state += 1;
    }

    return state;
}

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};

console.log(reducer(10, incrementadorAction));