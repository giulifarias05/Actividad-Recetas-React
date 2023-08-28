import React from 'react';

const Card = (props) => {
  const { imageSrc, title, description } = props;

  return (
    <div className="recipe-card">
      <div className="card-img">
        <img src={imageSrc} alt="Receta" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="more-info-icon">
          {/* Ícono de "+" sin fondo */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm2 11h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
