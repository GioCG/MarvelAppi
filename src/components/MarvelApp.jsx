import { useChar } from "../hook/useChar"
import { ContainerChar } from "./ContainerChar"
import { SearchChar } from "./SearchChar"

// Functional component
export const MarvelApp = () => {
    const { char, handleGetChar, CharName, error } = useChar()
    
    return (
        // Fragment
        <>
            { /* props: una propiedad que viaja entre componentes */}
            <SearchChar handleGetChar={handleGetChar} />
            {error && <p>{error}</p>}
            {char && <ContainerChar char={char} CharName={CharName} />}     
        </>
    )
}