const apiKey = "SYDHEEPc7YjeQimYIn520tX4kB3CdEGa";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

console.log(peticion);

peticion
.then( (resp) => resp.json())
.then( ({data}) => {
    const {url} = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img)
})
.catch(console.warn)