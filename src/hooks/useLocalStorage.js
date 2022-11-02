import { useEffect, useReducer } from "react";

const useLocalStorage = (itemName, initialValue = "") => {
  const [state, dispatch] = useReducer(reducer, initialState(initialValue));

  const { item, error, errorMessage, sicronizedItem } = state;

  const onSuccess = (parsedItem) =>
    dispatch({
      type: actionTypes.item,
      payload: parsedItem,
    });

  const onError = (error) =>
    dispatch({
      type: actionTypes.error,
      payload: error,
    });

  const onSincronize = (bool) =>
    dispatch({
      type: actionTypes.sincronize,
      payload: bool,
    });

  const saveNewItem = (itemName, itemValue) => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem = JSON.stringify(itemValue);

      if (!localStorageItem) {
        localStorage.setItem(itemName, parsedItem);
      } else {
        localStorage.setItem(itemName, parsedItem);
        parsedItem = itemValue;
      }

      onSuccess(parsedItem);
      onSincronize(true);
    } catch (error) {
      onError(error);
    }
  };

  const sincronizeItemFunc = () => onSincronize(false);

  useEffect(() => {}, [sicronizedItem]);

  return {
    item,
    error,
    errorMessage,
    sincronizeItemFunc,
    sicronizedItem,
    saveNewItem,
  };
};

// Reducer ==============================================================================================>
const initialState = (initialValue) => ({
  item: initialValue,
  error: false,
  errorMessage: "",
  sicronizedItem: false,
});

const actionTypes = {
  item: "ITEM",
  error: "ERROR",
  sincronize: "SINCRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.item]: {
    item: payload,
    error: false,
    errorMessage: "",
    sicronizedItem: true,
  },
  [actionTypes.error]: {
    ...state,
    error: true,
    errorMessage: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    sicronizedItem: payload,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
