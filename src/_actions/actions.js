import {
    Receive_Energy
} from './types';

export function receiveEnergy(energyData) {
    //    const request = axios.post(`${USER_SERVER}/register`, dataToSubmit)
    //        .then(response => response.data);

    const request = energyData

    // 원래 여기서 뭔가 외부 서버로 보냈다가 서버로부터 데이터를 다시 받는 부분
    // const request = axios.post(`${USER_SERVER}/login`, dataToSubmit).then(response => response.data);

    // 이후 receiveEnergy() 를 dispatch 한 Page쪽에서 아래와 같이 받는 부분을 처리
    // .then(response => {
    // if (response.payload.success) {props.history.push("/login");
    // 이런식으로 
    // 이후 reducer 쪽으로 request를 전달
    // return { ...state, register: action.payload }     (reducer.js)   -> redux 트리구조에 root 아래 register 트리가 생기는 것!


    return {
        type: Receive_Energy,
        payload: request
    }
}