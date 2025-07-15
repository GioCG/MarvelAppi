
export const SearchChar = ({handleGetCharacter}) => {
    const [characters, setCharacters] = useState('')

    return (
        <>
            <div className='d-flex flex-row justify-content-center align-items-center mt-3'>
                <form className='d-flex' onSubmit={(e) => { handleGetCharacter(e,characters) }}>
                    <input
                        type='text'
                        placeholder="Buscar Pokémon"
                        className='form-control me-2'
                        onChange={(e) => { setCharacters(e.target.value.toLowerCase()) }}
                    />
                    <input type='submit' value={'Buscar'} className='btn btn-outline-secondary' />
                </form>
            </div>
        </>
    )
}
