import React, { useRef, useEffect, useState } from 'react';
import picture1 from '../../assets/PaintingGame/picture1_paintable.png'

const PaintGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [strokeColor, setStrokeColor] = useState<string>('red');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');

    if (!context) return;

    const startDrawing = (event: MouseEvent) => {
      setIsDrawing(true);
      const { offsetX, offsetY } = event;
      context.beginPath();
      context.moveTo(offsetX, offsetY);
    };

    const draw = (event: MouseEvent) => {
      if (!isDrawing) return;
      context.strokeStyle = strokeColor;
      const { offsetX, offsetY } = event;
      context.lineTo(offsetX, offsetY);
      context.stroke();
    };

    const stopDrawing = () => {
      setIsDrawing(false);
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    };
  }, [isDrawing]);

  function setColor(color:string){
    setStrokeColor(color);
  }

  function deleteStrokes() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div style={{ position: 'absolute', top: "50px", left: "25%"}}>
    <canvas
      ref={canvasRef}
      width={600}
      height={500}
      style={{ border: '1px solid black', position: 'absolute', top: 100, left: "25%" }}
    />
    <img
      src={picture1}
      alt="Overlay Image"
      style={{ position: 'absolute', top: 100, left: "25%", pointerEvents: 'none' }}
      width={520}
    />

    <button style={{fontSize: "50px", color: 'red', background: "none", border: "none"}} onClick={() => setColor('red')}>•</button>
    <button style={{fontSize: "50px", color: 'orange', background: "none", border: "none"}} onClick={() => setColor('orange')}>•</button>
    <button style={{fontSize: "50px", color: 'yellow', background: "none", border: "none"}} onClick={() => setColor('yellow')}>•</button>
    <button style={{fontSize: "50px", color: 'green', background: "none", border: "none"}} onClick={() => setColor('green')}>•</button>
    <button style={{fontSize: "50px", color: 'blue', background: "none", border: "none"}} onClick={() => setColor('blue')}>•</button>
    <button style={{fontSize: "50px", color: 'purple', background: "none", border: "none"}} onClick={() => setColor('purple')}>•</button>
    <button style={{fontSize: "50px", color: 'pink', background: "none", border: "none"}} onClick={() => setColor('pink')}>•</button>
    <button style={{fontSize: "50px", color: 'black', background: "none", border: "none"}} onClick={() => setColor('black')}>•</button>
    <button onClick={() => deleteStrokes()}>Neu starten</button>
  </div>
  );
};

export default PaintGame;
