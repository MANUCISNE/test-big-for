import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const img = new Image();
    img.src = 'https://s2.glbimg.com/WAB9bTJKsQ-W25V3RiJtRD09qrg=/0x0:913x609/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/A/M/pNNxgHQKmIhBHyhDZxzg/rua-gastronomica.jpg';
    
    img.onload = () => {
      ctx.drawImage(img, 0, 0); // Desenha a imagem no canvas
      ctx.beginPath();
      ctx.lineWidth = "6";
      ctx.strokeStyle = "red";
      ctx.rect(100, 5, 290, 140);  
      ctx.stroke();
    }
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width="400" height="400"></canvas>
    </div>
  );
}

export default App;
