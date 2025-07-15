import React from 'react'

export const ContainerChar = () => {

    <div className="d-flex flex-row row row-cols-5">
                {
                    //preguntando si characters tiene valores (si No es null)
                    characters &&
                        characters.map((char)=>(
                            <div >
                                <div key={char.id}>
                                    <li>{char.name}</li>
                                    <img src={formatImageUrl(char)} style={{width: '8rem'}}/>
                                </div>
                            </div>
                    ))
                }
            </div>
            
  return (
    <div>ContainerChar</div>
  )
}
