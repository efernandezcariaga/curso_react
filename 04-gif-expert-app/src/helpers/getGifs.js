
export const getGifs = async (category) => {
    const api_key = 'PqTjzcChTcReM2DNrcp6GHpOr0PyYqNn';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${ category }&limit=10`
    const resp = await fetch(url);
    const {data=[]} = await resp.json();

    console.log(url);

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
}
