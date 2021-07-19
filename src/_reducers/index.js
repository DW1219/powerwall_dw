import { combineReducers } from 'redux';
import root_energy from './reducer';
// 여기서 짓는 이름이 redux 트리구조 최상단 이름으로 보여짐

const rootReducer = combineReducers({
    root_energy,
});

export default rootReducer;