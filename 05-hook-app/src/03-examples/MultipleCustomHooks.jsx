import { useFetch, useCounter } from '../hooks'
import { Joke, LoadingJoke } from './';


export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://official-joke-api.appspot.com/jokes/${counter}`);
    const {setup, punchline} = !!data && data;

    return (
        <>
            <h1>Random Jokes</h1>
            <hr />

            {
                isLoading 
                    ? <LoadingJoke />
                    : <Joke setup={setup} punchline={punchline}/>
            }

            <button 
                onClick={ () => increment(1) } 
                className="btn btn-primary"
                disabled={isLoading}>
                Next joke
            </button>


        </>
    )
}
