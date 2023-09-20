import React from 'react';

const Card = (props) => {

  return (
    <div className="recipe-card">
    <nav>
      <ul className="card-content">
        <li><a href="#"></a></li>
        <div className="card-img">
          <img src={props.imageSrc} alt="Receta" />
        </div>
        <div className="card-info">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <div className="more-info-icons">
        <div className="icon">
          <img src={props.iconPath1}  />
          <span>{props.iconText1}</span>
        </div>
        <div className="icon">
          <img src={props.iconPath2}  />
          <span>{props.iconText2}</span>
        </div>
        <div className="icon">
          <img src={props.iconPath3}  />
          <span>{props.iconText3}</span>
        </div>
        <div className="icon">
          <img src={props.iconPath4} />
          <span>{props.iconText4}</span>
        </div>
</div>
      </ul>
    </nav>
  </div>
  
  );
  }  
export default Card;


