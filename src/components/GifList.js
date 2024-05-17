import React from "react";

function GifList({ images, searchImage }) {

  const displayImages = images.map(image =>{ 
    return (
      <li key={image.id} style={{margin: '5px'}}>
        <img src={image.images.original.url} alt={searchImage}/>
      </li>
    )    
  })

  return (
    <ul style={{marginBottom: '30px'}}>
      {displayImages}
    </ul>
  )
}

export default GifList;