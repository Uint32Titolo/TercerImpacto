import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [
  "https://http2.mlstatic.com/planta-suculenta-o-crasa-miniatura-surtidas-D_NQ_NP_988169-MCO26922842260_022018-F.jpg",
  "https://ae01.alicdn.com/kf/HTB1WjWhkVmWBuNjSspdq6zugXXaZ/Planta-suculenta-multicapa-Artificial-Bonsai-simulaci-n-planta-suculenta-plantas-verdes-flor-hogar-Sala-ocio-decoraci.jpg",
  "https://i0.wp.com/ae01.alicdn.com/kf/HTB1w0k5XuL2gK0jSZPhq6yhvXXap/2-25-pulgadas-cerámica-estilo-nieve-suculenta-planta-maceta-Cactus-maceta-contenedor-maceta-bandejas-de-bambú.jpg",
  "https://www.flordeplanta.com.ar/wp-content/uploads/2012/09/cactus-cuidados4.jpg",
  "https://images.casashops.com/square1168/41347/cement-planta-crasa-cactus-verde-a-9-cm%3B-ø-11-cm.jpg"
];

function App() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 4) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  return (
      <Gallery
        style={{
          background: "black",
          height: "100vh",
          width: "100vw"
        }}
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map(image => (
          <GalleryImage objectFit="contain" key={image} src={image} />
        ))}
      </Gallery>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App