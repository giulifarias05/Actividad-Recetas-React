import logo from './logo.svg';
import React from 'react';
import './App.css';
import './index.css'; 
import Navbar from './components/navbar'; // Importa el componente Navbar
import Footer from './components/footer'; // Importa el componente Navbar
import Card from './components/cards'; // Importa el componente cards


const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <div className="cards-container">
          <Card
            imageSrc="https://www.recetasnestle.com.ar/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/60003653fdb591dea610e9906601614b.webp?itok=r2LcWnO8"
            title="Budín de chocolate con banana"
            description="Receta para preparar un delicioso budín de chocolate con banana."
          />
          <Card
            imageSrc="https://www.recetasnestle.com.ar/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/b127f341d58fb406367f813a1eae2ee8.webp?itok=NVfT5zMt"
            title="Tarta de Coco y Dulce de Leche"
            description="Receta de tarta de coco y dulce de leche para cocinar en casa."
          />
          <Card
            imageSrc="https://www.recetasnestle.com.ar/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/efabc050b31d83ad98ca374b474f7775.webp?itok=sjW22IDF"
            title="Bizcochuelo de vainilla casero"
            description="Receta para preparar un delicioso bizcochuelo de vainilla"
          />
            <Card
            imageSrc="https://www.recetasnestle.com.ar/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/ae8634a783369f7e773a2a9ed67d4957.webp?itok=t7phrY1Q"
            title="Torta Brownie"
            description="Descubre como hacer esta deliciosa Torta Brownie."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
