import React, { useRef, useEffect, useState } from 'react';
import './PaintGame.css';
import { PaintGameText } from '../../text-constants';
import picture1 from '../../assets/PaintingGame/picture1_paintable.png'
import picture2 from '../../assets/PaintingGame/picture2_paintable.png'
import picture3 from '../../assets/PaintingGame/picture3_paintable.png'
import picture4 from '../../assets/PaintingGame/picture4_paintable.png'
import picture5 from '../../assets/PaintingGame/picture5_paintable.png'
import picture6 from '../../assets/PaintingGame/picture6_paintable.png'
import ColorPicker from 'react-pick-color';

const PaintGame: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
    const [strokeColor, setStrokeColor] = useState<string>('red');
    const [selectedImage, setSelectedImage] = useState<string>('');

    useEffect(() => {
        initializeCanvas();
    }, [selectedImage]); // Run useEffect again when selectedImage changes

    const initializeCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.strokeStyle = strokeColor;
        context.lineWidth = 3;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');

        if (!context) return;
        context.strokeStyle = strokeColor;

        const startDrawing = (event: MouseEvent) => {
            console.log(strokeColor);
            setIsDrawing(true);
            const canvas = canvasRef.current;
            if (!canvas) return;
        
            const rect = canvas.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;
        
            const context = canvas.getContext('2d');
            if (!context) return;
        
            context.beginPath();
            context.moveTo(offsetX, offsetY);
        };
        
        const draw = (event: MouseEvent) => {
            if (!isDrawing) return;
            const canvas = canvasRef.current;
            if (!canvas) return;
        
            const rect = canvas.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;
        
            const context = canvas.getContext('2d');
            if (!context) return;
        
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
    }, [isDrawing, strokeColor, selectedImage]); // Include selectedImage in the dependencies array

    function setColor(color: string) {
        console.log("strokecolor changer");
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
        <div>
            {selectedImage ?
                <div className='painting-area'>
                    <div className='canvas-container'>
                        <canvas
                            ref={canvasRef}
                            width={600}
                            height={500}
                            className='canvas'
                        />
                         <img
                            src={selectedImage}
                            alt="Overlay Image"
                            className='image-overlay'
                            width={500}
                        />

                    </div>
                    <div className='ingame-menu-area'>
                    <ColorPicker color={strokeColor} onChange={color => setColor(color.hex)} />
                        <button style={{ fontSize: "50px", color: 'red', background: "none", border: "none" }} onClick={() => setColor('red')}>•</button>
                        <button style={{ fontSize: "50px", color: 'orange', background: "none", border: "none" }} onClick={() => setColor('orange')}>•</button>
                        <button style={{ fontSize: "50px", color: 'yellow', background: "none", border: "none" }} onClick={() => setColor('yellow')}>•</button>
                        <button style={{ fontSize: "50px", color: 'green', background: "none", border: "none" }} onClick={() => setColor('green')}>•</button>
                        <button style={{ fontSize: "50px", color: 'blue', background: "none", border: "none" }} onClick={() => setColor('blue')}>•</button>
                        <button style={{ fontSize: "50px", color: 'purple', background: "none", border: "none" }} onClick={() => setColor('purple')}>•</button>
                        <button style={{ fontSize: "50px", color: 'pink', background: "none", border: "none" }} onClick={() => setColor('pink')}>•</button>
                        <button style={{ fontSize: "50px", color: 'black', background: "none", border: "none" }} onClick={() => setColor('black')}>•</button>

                        <button onClick={() => deleteStrokes()}>Alles löschen</button>
                        <button onClick={() => setSelectedImage('')}>Anderes Bild wählen</button>
                    </div>
                </div>
                :
                <div className='paint-game'>
                    <h1>{PaintGameText.MENU_TITLE}</h1>
                    <h3>{PaintGameText.MENU_SUBTITLE}</h3>
                    <div className='menu-area'>
                       <button className='paint-select-button' onClick={() => setSelectedImage(picture1)}>
                            <img className='paint-menu-img' src={picture1}></img>
                        </button>
                        <button className='paint-select-button' onClick={() => setSelectedImage(picture2)}>
                            <img className='paint-menu-img' src={picture2}></img>
                        </button>
                        <button className='paint-select-button' onClick={() => setSelectedImage(picture3)}>
                            <img className='paint-menu-img' src={picture3}></img>
                        </button>
                        <button className='paint-select-button' onClick={() => setSelectedImage(picture4)}>
                            <img className='paint-menu-img' src={picture4}></img>
                        </button>
                        <button className='paint-select-button' onClick={() => setSelectedImage(picture5)}>
                            <img className='paint-menu-img' src={picture5}></img>
                        </button>
                        <button className='paint-select-button' onClick={() => setSelectedImage(picture6)}>
                            <img className='paint-menu-img' src={picture6}></img>
                        </button>

                    </div>
                </div>
            }
        </div>
    );
};

export default PaintGame;
