// const getImagenPromesa = () =>  new Promise( resolve => resolve("https://asdasd.com"));

// getImagenPromesa().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.warn(err)
// });

const getImagen = async () => {

    try{
        const apiKey = "SYDHEEPc7YjeQimYIn520tX4kB3CdEGa";
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    } catch(error){
        console.log("Error", error);
    }
}

getImagen();
