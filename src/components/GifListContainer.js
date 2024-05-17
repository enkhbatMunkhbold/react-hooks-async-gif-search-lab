import React, { useState } from "react";
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

function GifListContainer() {

  const [ images, setImages ] = useState([])
  const [ searchImage, setSearchImage ] = useState('')

  const myKey = '08Wiz2SOhJefs4ClySPLaEG6mcmprJkk'

  function handleSubmitImage() {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchImage}&api_key=${myKey}&rating=g`)
    .then(res => res.json())
    .then(imageData => { 
      const giphies = imageData.data.slice(0, 3)
      setImages(giphies)
    })
    setSearchImage('')
  }

  return (
    <div>
      <GifSearch 
        onSubmitImage={handleSubmitImage} 
        searchImage={searchImage} 
        setSearchImage={setSearchImage}
      />
      <GifList images={images} searchImage={searchImage}/>
    </div>    
  )
}

export default GifListContainer