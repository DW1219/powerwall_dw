import {
    Receive_Energy
} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case Receive_Energy:
            //console.log(action.payload)
            return { ...state, energyGroup: action.payload }
        default:
            return state;
    }
}