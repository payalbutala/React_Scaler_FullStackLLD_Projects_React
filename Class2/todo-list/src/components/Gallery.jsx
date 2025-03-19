import { useState } from "react";
import { sculptureList } from "../../data.js";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

 function handlePreviousClick(){
    if(index == 0){
        return;
    }
    setIndex(index-1);
 }

  function handleNextClick() {
    if(index == sculptureList.length-1){
        return;
    }
      setIndex(index + 1);
    
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <div style={{backgroundColor:"gray", display:"flex", flexDirection:"column"}}>
      <button disabled={index==0 ? "disabled" : false} onClick={handlePreviousClick}>Previous</button>
      <button disabled={index==sculptureList.length-1 ? "disabled" : false} onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
}
