import {mainTypes} from './actionTypes'

export const saveCurrentCharacterAC = (character) => ({
    type: mainTypes.SAVE_CURRENT_CHARACTER,
    payload: character,
});

export const addRightAnswerAC = (character) => ({
    type: mainTypes.ADD_RIGHT_ANSWER,
    payload: character,
});

export const addWrongAnswerAC = (character) => ({
    type: mainTypes.ADD_WRONG_ANSWER,
    payload: character,
});

export const deleteResultsAC = () => ({
    type: mainTypes.DELETE_RESULTS,
});

export const addRandomCharacter  = () => (dispatch) => (
    fetch(`https://rickandmortyapi.com/api/character/${Math.ceil(Math.random() * 826)}`)
      .then(data => data.json())
      .then(res => dispatch(saveCurrentCharacterAC(res)))
)