import * as React from 'react';
import chef from './assets/Memory/cards/chef.png';
import chemist from './assets/Memory/cards/chemist.png';
import firefighter from './assets/Memory/cards/firefighter.png';
import gardener from './assets/Memory/cards/gardener.png';
import librarian from './assets/Memory/cards/librarian.png';
import mechanic from './assets/Memory/cards/mechanic.png';
import musician from './assets/Memory/cards/musician.png';
import painter from './assets/Memory/cards/painter.png';
import teacher from './assets/Memory/cards/teacher.png';
import vet from './assets/Memory/cards/vet.png';
import cardBase from './assets/Memory/cards/card_base.png';

interface Props {
    difficulty: string;
  }

const MemoryCardArea: React.FunctionComponent<Props> = (props) => {

    let images: any[] = [];
    let clickedCardIndex = -1;
    const [alreadyMatchedCards, setAlreadyMatchedCards] = React.useState([-1]);
    let shuffled = false;


    function randomizeImageOrder(): void {
        images = [chef, chemist, firefighter, gardener, librarian, mechanic, musician, painter, teacher, vet,
            vet, gardener, librarian, mechanic, firefighter, musician, painter, chef, teacher, chemist]
        //const firstArray = shuffleArray(allImages);
        //const secondArray = shuffleArray(allImages);
        //images = [...firstArray, ...secondArray];
        //shuffled = true;
    }

    function shuffleArray<T>(array: T[]): T[] {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    };

    function cardClicked(index: number){
        console.log('clicked', index)
        console.log('clickedcard', clickedCardIndex)
        if(clickedCardIndex !== -1){
            if(index !== clickedCardIndex && images[index] === images[clickedCardIndex]){
                setAlreadyMatchedCards([...alreadyMatchedCards, clickedCardIndex, index])
                clickedCardIndex = -1;
                console.log('MATCG');
            }
        } else {
            clickedCardIndex = index
        }
    }

    function isImageHidden(index: number): boolean {
        console.log('alreadymatched: ',alreadyMatchedCards)
        if (alreadyMatchedCards.find(i => i === index)){
            return true;
        }
        return false;
    }

    
    randomizeImageOrder();

    return (
          <div style={{position: 'absolute', top: '100px'}}>
            {images.map((image, index) => {     
           return (<span style={{margin: '5px', marginBottom: '10px'}}>
            <img style={{height: 150, maxWidth: 150, margin: '10px'}} src={isImageHidden(index) ? cardBase : image} onClick={() => cardClicked(index)}></img>
            </span>) 
        })}
          </div>
  );
  }
export default MemoryCardArea;
