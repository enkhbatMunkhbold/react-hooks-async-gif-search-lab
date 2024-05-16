import React, { useState } from "react";
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

function GifListContainer() {

  const [ images, setImages ] = useState([])
  const [ searchImage, setSearchImage ] = useState('')

  const myKey = 'gAiYh9cOxs6wQMLBfmkd3Vb82LRezEP2'

  function handleSubmitImage() {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchImage}&api_key=${myKey}&rating=g`)
    .then(res => res.json())
    .then(imageData => { 
      const giphies = imageData.slice(0, 3)
      setImages(giphies)
    })
    setSearchImage('')
  }

  return (
    <div>
      <GifList images={images}/>
      <GifSearch 
        onSubmitImage={handleSubmitImage} 
        searchImage={searchImage} 
        setSearchImage={setSearchImage}
      />
    </div>    
  )
}

export default GifListContainer