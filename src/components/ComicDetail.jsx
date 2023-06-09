import React from "react";
import "../styles/ComicDetail.css";

export const ComicDetail = ({ comic }) => {

  if (!comic){
    return null;
  }

  const { title, imageUrl, description} = comic;

  return (
    <div>
      
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default ComicDetail;