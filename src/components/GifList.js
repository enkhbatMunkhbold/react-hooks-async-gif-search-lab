import React from "react";

function GifList({ images }) {
  // console.log(images)
  const displayImages = images.map(image => <li>{image}</li>)

  return (
    <ul>
      {displayImages}
    </ul>
  )
}

export default GifList;