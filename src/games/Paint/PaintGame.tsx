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
    const [strokeSize, setStrokeSize] = useState<number>(1);
    const [bgColor, setBgColor] = useState<string>('white');
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
        context.lineWidth = strokeSize;

        const startDrawing = (event: MouseEvent) => {
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
        setStrokeColor(color);
    }

    function deleteStrokes() {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        context.clearRect(0, 0, canvas.width, canvas.height);
    };

    function renderBgButtons() {
        const backgroundColors: string[] = [];
        for (let i = 1; i <= 24; i++) {
            backgroundColors.push(`var(--paint-game-bg-${i})`);
        }
        const buttons = [];
        for (let i = 0; i < 24; i++) {
            buttons.push(
                <button key={i} className='ingame-menu-area__background-pick__color-button' style={{ backgroundColor: backgroundColors[i] }} onClick={() => setBgColor(backgroundColors[i])}></button>
            );
            if (i === 11) {
                buttons.push(<br key="br" />);
            }
        }
        return buttons;
    }    

    return (
        <div>
            {selectedImage ?
                <div className='painting-area'>
                    <div className='canvas-container'>
                        <canvas
                            ref={canvasRef}
                            width={selectedImage.indexOf(picture5) ? 600 : 700}
                            height={selectedImage.indexOf(picture5) ? 500 : 320}
                            className='canvas'
                            style={{backgroundColor: bgColor}}
                        />
                        <img
                            src={selectedImage}
                            alt="Overlay Image"
                            className='image-overlay'
                            width={selectedImage.indexOf(picture5) ? 500 : 600}
                        />

                    </div>
                    <div className='ingame-menu-area'>
                        <div className='ingame-menu-area__background-pick'>
                            <h3 className='greenHeaderText'>{PaintGameText.BACKGROUND_COLOR_SELECT}</h3>
                            <div className='ingame-menu-area__background-pick__color-select'>
                                {renderBgButtons()}
                            </div>
                            <br/>
                            <br/>
                            <div>
      <h3 className='greenHeaderText'>{PaintGameText.STROKE_COLOR_SELECT}</h3>
      <div className='ingame-menu-area__stroke-pick-container'>
        <ColorPicker 
          color={strokeColor} 
          onChange={color => setColor(color.hex)} 
          hideAlpha 
          hideInputs 
        />
        <div className='paintGame__strokeButtons'>
          <button 
            className={`paintGame__strokeWidthBtn paintGame__strokeWidthBtnS ${strokeSize === 1 ? 'paintGame__button-selected' : ''}`} 
            onClick={() => setStrokeSize(1)}
          ></button>
          <button 
            className={`paintGame__strokeWidthBtn paintGame__strokeWidthBtnM ${strokeSize === 4 ? 'paintGame__button-selected' : ''}`} 
            onClick={() => setStrokeSize(4)}
          ></button>
          <button 
            className={`paintGame__strokeWidthBtn paintGame__strokeWidthBtnL ${strokeSize === 10 ? 'paintGame__button-selected' : ''}`} 
            onClick={() => setStrokeSize(10)}
          ></button>
          <button 
            className={`paintGame__strokeWidthBtn paintGame__strokeWidthBtnXL ${strokeSize === 12 ? 'paintGame__button-selected' : ''}`} 
            onClick={() => setStrokeSize(12)}
          ></button>
        </div>
      </div>
      <button className='paintGame__ingameMenuButton' onClick={() => deleteStrokes()}>Alles löschen</button>
      <button className='paintGame__ingameMenuButton' onClick={() => setSelectedImage('')}>Anderes Bild wählen</button>
    </div>
                        </div>   
                    </div>
                </div>
                :
                <div className='paint-game'>
                    <h1 className='greenHeaderText' style={{marginLeft: '10px'}}>{PaintGameText.MENU_TITLE}</h1>
                    <h3 style={{marginLeft: '10px'}}>{PaintGameText.MENU_SUBTITLE}</h3>
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
