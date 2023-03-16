import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import firestore from '@react-native-firebase/firestore';

export const Collection = ({children}: {children?: ReactNode}) => {
  const [coord, setCoord] = useState({});

  const addCollection = async () => {
    await firestore()
      .collection('location')
      .add({
        coord: {
          latitude: coord.latitude,
          longitude: coord.longitude,
        },
      })
      .then(() => {
        console.log('User added!');
      });
  };

  useEffect(() => {
    coord.latitude === undefined
      ? console.log(coord.latitude)
      : addCollection();
  }, [coord]);
  return (
    <CoordCollection.Provider value={{coord, setCoord}}>
      {children}
    </CoordCollection.Provider>
  );
};
export const CoordCollection = createContext<{
  coord: {latitude: number; longitude: number} | {};
  setCoord: Dispatch<SetStateAction<object>>;
  // bagNumber: number;
  // setBagNumber: Dispatch<SetStateAction<number>>;
  // detail: ListsType[] | never[];
  // setDetail: Dispatch<SetStateAction<ListsType[] | never[]>>;
  // favourite: ListsType[] | never[];
  // setFavourite: Dispatch<SetStateAction<ListsType[] | never[]>>;
  // bag: ListsType[] | never[];
  // setBag: Dispatch<SetStateAction<ListsType[] | never[]>>;
  // buttomTab: number;
  // setButtomTab: Dispatch<SetStateAction<number>>;
} | null>(null);

export const useCollection = () => useContext(CoordCollection);
