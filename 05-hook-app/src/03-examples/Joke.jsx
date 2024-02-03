import { useLayoutEffect, useReducer, useRef, useState } from "react"

export const  Joke = ({setup, punchline}) => {
    
    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({width:0, height:0} )

    useLayoutEffect(() => {
        const {width, height} = pRef.current.getBoundingClientRect();
        setBoxSize({width, height})
    }, [])
    
    return (
        <>
            <blockquote 
                className="blockquote text-end"
                style={{display:'flex'}}
            >
                <p ref={pRef} className="mb-1">{setup}</p>
                <footer className="blockquote-footer">{punchline}</footer>
            </blockquote> 
            
            <code>
                {JSON.stringify(boxSize)}
            </code>
        </>
    )
}
