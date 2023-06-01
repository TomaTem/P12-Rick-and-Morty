import { mainTypes } from "../actions/actionTypes";

const initialState = {
    character: {},
    listRight: [],
    listWrong: [],
  };

//   const [state, dispatch] = useLocalStorage('game', initialState);

export function mainReducer(state = initialState, action) {
    switch (action.type) {
      case mainTypes.SAVE_CURRENT_CHARACTER: {
        return {...state, character: action.payload};
      }
      case mainTypes.ADD_RIGHT_ANSWER: {
        const character = rus(action.payload);
        return {...state, listRight: [...state.listRight, character]};
    }
      case mainTypes.ADD_WRONG_ANSWER: {
        const character = rus(action.payload);
        return {...state, listWrong: [...state.listWrong, character]};
      }
      case mainTypes.DELETE_RESULTS: {
        return {...state, listWrong: [], listRight: []};
      }
      default: {
        return state;
      }
    }
  
    function rus(obj) {
        let character = { rus: {} };
        Object.assign(character, obj);
        switch (character.gender) {
          case 'Female':
            character.rus.gender = 'женский'
            break;
          case 'Male':
            character.rus.gender = 'мужской'
            break;
          case 'Genderless':
            character.rus.gender = 'бесполый'
            break;
          case 'unknown':
            character.rus.gender = 'неизвестно'
            break;
          default:
            break;
        }
        switch (character.status) {
          case 'Alive':
            character.rus.status = 'жив'
            break;
          case 'Dead':
            character.rus.status = 'мертв'
            break;
          case 'unknown':
            character.rus.status = 'неизвестно'
            break;
          default:
            break;
        }
        if (character.location.name === 'unknown') {
          character.rus.location = 'неизвестно'
        }
        if (character.origin.name === 'unknown') {
          character.rus.origin = 'неизвестно'
        }
        return character;
    }
  }
  