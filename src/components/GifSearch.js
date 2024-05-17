import React from "react";

function GifSearch({ onSubmitImage, searchImage, setSearchImage}) {

  function handleSubmitClick(e) {
    e.preventDefault()
    onSubmitImage()
  }

  function handleChange(e) {
    setSearchImage(e.target.value)    
  }

  return (
    <div className="search-container" style={{textAlign: 'center'}}>
      <form onSubmit={handleSubmitClick}>
        <h3>Search Giphy</h3>
        <input
          type="text"
          name="image"
          placeholder="Enter a gif type..."
          value={searchImage}
          onChange={handleChange}
        />
        <input 
          type="submit"
          name="submit"
          value="Search Image"
          className="submit"
        />
      </form>
    </div>
  )
}

export default GifSearch;