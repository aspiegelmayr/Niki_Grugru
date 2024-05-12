
import * as React from 'react';
import { characters, topsOnNiki, bottomsOnNiki, shoesOnNiki, accessoriesOnNiki, hatsOnNiki, closetImage, overallsOnNiki } from './DressUpGameAssets';
import './DressUpGame.css';
import { ClothesGameText } from '../../text-constants';

const DressUpGame: React.FunctionComponent = () => {
    const [top, setTop] = React.useState<number>(-1);
    const [bottom, setBottom] = React.useState<number>(-1);
    const [shoes, setShoes] = React.useState<number>(-1);
    const [accessory, setAccessory] = React.useState<number>(-1);
    const [hat, setHat] = React.useState<number>(-1);
    const [overalls, setOveralls] = React.useState<number>(-1);

    React.useEffect(() => {
    }, []);

    function setNextItem(item: string) {
        switch (item) {
            case 'hat': {
                if (hat == hatsOnNiki.length - 1) {
                    setHat(-1);
                } else {
                    setHat(hat + 1)
                }
            }; break;
            case 'shoes': {
                if (shoes == shoesOnNiki.length - 1) {
                    setShoes(-1);
                } else {
                    setShoes(shoes + 1)
                }
            }; break;
            case 'top': {
                if (top == topsOnNiki.length - 1) {
                    setTop(-1);
                } else {
                    setTop(top + 1)
                }
            }; break;
            case 'bottom': {
                if (bottom == bottomsOnNiki.length - 1) {
                    setBottom(-1);
                } else {
                    setBottom(bottom + 1)
                }
            }; break;
            case 'overalls': {
                if (overalls == overallsOnNiki.length - 1) {
                    setOveralls(-1);
                } else {
                    setOveralls(overalls + 1)
                }
            }; break;
            case 'accessory': {
                if (accessory == accessoriesOnNiki.length - 1) {
                    setAccessory(-1);
                } else {
                    setAccessory(accessory + 1)
                }
            }; break;
            default: {
                console.log('error');
            }; break;
        }
    }

    return (
        <div className='dressup-container'>
            <h1 className='greenHeaderText dressup-title'>{ClothesGameText.TITLE}</h1>
            <h3 className='dressup-subtitle'>{ClothesGameText.INSTRUCTION}</h3>

            <div className="game-container">
                <div className='character-container'>
                    <img className='character' src={closetImage.file}></img>
                    <button className='hat-button' onClick={() => setNextItem('hat')}>
                        {hat < hatsOnNiki.length - 1 && <img className='clothes-button-img-small' src={hatsOnNiki[hat + 1].displayImage} />}
                    </button>
                    <button className='shoe-button' onClick={() => setNextItem('shoes')} style={{top: '30%'}}>
                        {shoes < shoesOnNiki.length - 1 && <img className='clothes-button-img-small' src={shoesOnNiki[shoes + 1].displayImage} />}
                    </button>
                    <button className='accessory-button' onClick={() => setNextItem('accessory')}>
                        {accessory < accessoriesOnNiki.length - 1 && <img className='clothes-button-img-small' src={accessoriesOnNiki[accessory + 1].displayImage} />}
                    </button>
                    <button className='top-button' onClick={() => setNextItem('top')}>
                        {top < topsOnNiki.length - 1 && <img className='clothes-button-img' src={topsOnNiki[top + 1].displayImage} />}
                    </button>
                    <button className='bottom-button' onClick={() => setNextItem('bottom')}>
                        {bottom < bottomsOnNiki.length - 1 && <img className='clothes-button-img' src={bottomsOnNiki[bottom + 1].displayImage} />}
                    </button>
                    <button className='overall-button' onClick={() => setNextItem('overalls')} style={{left: '15%'}}>
                        {overalls < overallsOnNiki.length - 1 && <img className='clothes-button-img' src={overallsOnNiki[overalls + 1].displayImage} />}
                    </button>
                </div>
                <div className='character-container'>
                    <img className='niki-dressup' src={characters[0].file}></img>
                    {top !== -1 && <img className='top' src={topsOnNiki[top].file} />}
                    {bottom !== -1 && <img className='bottom' src={bottomsOnNiki[bottom].file} />}
                    {shoes !== -1 && <img className='shoes' src={shoesOnNiki[shoes].file} />}
                    {overalls !== -1 && <img className='top' src={overallsOnNiki[overalls].file} />}
                    {accessory !== -1 && <img className='accessory' src={accessoriesOnNiki[accessory].file} />}
                    {hat !== -1 && <img className='hat' src={hatsOnNiki[hat].file} />}
                </div>
            </div>
        </div>
    );
}

export default DressUpGame;