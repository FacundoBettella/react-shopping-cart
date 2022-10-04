import { useEffect, useState } from "react";

const useLocalStorage = (itemName, initialValue) => {
  // const [sincronizedItem, setSincronizedItem] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(
            itemName,
            JSON.stringify(initialValue ? initialValue : "")
          );
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        // setSincronizedItem(true); /* Si hay cambios en local storage en otra ventana, sale un mensaje y un button, hacemos click => cambio la dependencia sincronizedItem y con ello ejectuto el useEffect. */
      } catch (error) {
        setError(error);
      }
    }, 3000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  // const sincronizeItem = () => {
  //   setLoading(true);
  //   setSincronizedItem(false);
  // }

  return {
    item,
    saveItem,
    loading,
    error,
    // sincronizeItem
  };
};

export { useLocalStorage };
