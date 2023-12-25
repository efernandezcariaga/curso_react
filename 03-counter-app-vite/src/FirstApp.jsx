import PropTypes from 'prop-types';

// const newMessage = {
//     message: "Hola mundo",
//     title: "Ezequiel",
// };

const getResult = () => {
    return "Ezequiel"
}

export const FirstApp = ( {title, subTitle, name} ) => {
    // console.log(props);
    // if(!title){
    //     throw new Error ("El titulo no existe");
    // }


    return (
        <>
            <h1>{getResult()}</h1>
            <h2>{ title }</h2>
            <p>{subTitle}</p>
            <p>{name}</p>
            {/* <code>{ JSON.stringify(newMessage) }</code> */}
            <p>Soy un subtitulo</p>
        </>
    )
}

FirstApp.propTypes = {
    subTitle: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: "Ezequiel Fernandez Cariaga",
    subTitle: "No hay subtitulo",
    title: "No hay titulo",
}