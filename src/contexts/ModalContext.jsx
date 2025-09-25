import { useContext, createContext, useState } from "react";

const ModalContext = createContext({ data: null });

export function ModalProvider({ children }) {

    // Removal Confirmation Modal States
    const [isRemModActive, setIsRemModActive] = useState(false);
    const [indexToRemove, setIndexToRemove] = useState(null);

    // Log-In Modal
    const [isLogInActive, setIsLogInActive] = useState(false);

    // Shows Confirm to Remove Modal
    const showRemMod = (index) => {
        setIsRemModActive(true);
        setIndexToRemove(index);
    };

    // Resets States and Removes Confirm Modal
    const cancelRemMod = () => {
        setIsRemModActive(false);
        setIndexToRemove(null);
    }

    return (
        <ModalContext.Provider value={{
            isRemModActive,
            indexToRemove,
            isLogInActive,
            showRemMod,
            cancelRemMod,
            setIndexToRemove,
            setIsLogInActive
        }}>
            {children}
        </ModalContext.Provider>
    )
} 

export const useModal = () => useContext(ModalContext);