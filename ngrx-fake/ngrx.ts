//Creamos la primera accion
//Acciones: Son interfaces
export interface Action {
    type: string;
    payload?: any
}

export interface Reducer<T> {
    (state: T, action: Action): T
}
