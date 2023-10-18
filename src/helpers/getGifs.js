export const getGifs = async( category ) => {
    // const gifs = [];
    const apiKey = 'aJmqvGkt0ZnhsxBdVMDj0BP9263NYZBo';
    const limit=10;
    const apiSearchUrl = 'https://api.giphy.com/v1/gifs/search';
    const apiSearchQuery = `${ apiSearchUrl }?api_key=${ apiKey }&q=${ category }&limit=${ limit }`;
    // 
    const apiSearchResponse = await fetch( apiSearchQuery );
    const { data } = await apiSearchResponse.json();
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    // console.log(gifs);
    return gifs;
}