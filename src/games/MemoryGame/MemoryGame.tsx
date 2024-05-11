import * as React from 'react';
import chef from "../../assets/Memory/cards/chef.png";
import chemist from "../../assets/Memory/cards/chemist.png";
import firefighter from "../../assets/Memory/cards/firefighter.png";
import gardener from "../../assets/Memory/cards/gardener.png";
import librarian from "../../assets/Memory/cards/librarian.png";
import mechanic from "../../assets/Memory/cards/mechanic.png";
import musician from "../../assets/Memory/cards/musician.png";
import painter from "../../assets/Memory/cards/painter.png";
import teacher from "../../assets/Memory/cards/teacher.png";
import vet from "../../assets/Memory/cards/vet.png";
import './MemoryGame.css'
import { MemoryGameText } from '../../text-constants';
import { cardBack } from './MemoryGameAssets';

const MemoryGame: React.FunctionComponent = () => {
  const [shuffledImages, setShuffledImages] = React.useState<string[]>([]);
  const [foundItems, setFoundItems] = React.useState<string[]>([]);
  const [clickedCardIndex, setClickedCardIndex] = React.useState<number | null>(null);
  const [difficulty, setDifficulty] = React.useState<string>('');
  const [flippedCards, setFlippedCards] = React.useState<boolean[]>(new Array(20).fill(false));
  const [preselectedDifficulty, setPreselectedDifficulty] = React.useState<string>('');

  const cardCoordinates = [
    ['43%', "33%"],
    ['80%', "53%"],
    ['80%', "31%"],
    ['25%', "12%"],
    ['13%', "15%"],
    ['57%', "52%"],
    ['68%', "13%"],
    ['80%', "8%"],
    ['1%', "21%"],
    ['69%', "34%"],
    ['36%', "14%"],
    ['17%', "34%"],
    ['32%', "35%"],
    ['47%', "11%"],
    ['18%', "54%"],
    ['30%', "55%"],
    ['5%', "46%"],
    ['45%', "53%"],
    ['69%', "55%"],
    ['57%', "27%"],
    ['27%', "4%"]
  ];

  React.useEffect(() => {
    shuffleImages();
    if (difficulty === 'easy') {
      setFlippedCards(new Array(20).fill(true)); // Flip all cards initially for easy difficulty
    } else {
      setFlippedCards(new Array(20).fill(false)); // Keep cards face-down initially for other difficulties
    }
  }, [difficulty]);

  function shuffleImages() {
    console.log('shuffle')
    let availableItems = [chef, chef, chemist, chemist, firefighter, firefighter, gardener, gardener, librarian, librarian, mechanic, mechanic, musician, musician, painter, painter, teacher, teacher, vet, vet]

    for (let i = availableItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [availableItems[i], availableItems[j]] = [availableItems[j], availableItems[i]];
    }
    setShuffledImages(availableItems);
    if (difficulty === 'easy') {
      setFlippedCards(new Array(20).fill(true)); // Flip all cards initially for easy difficulty
    }
  }

  function selectItem(index: number) {
    // If the clicked card is already found, return early
    if (foundItems.includes(shuffledImages[index])) {
      return;
    }

    // If there's a clicked card and it's not the same as the current one, check for a match
    if (clickedCardIndex !== null && clickedCardIndex !== index) {
      if (shuffledImages[clickedCardIndex] === shuffledImages[index]) {
        // Match found, add both cards to found items
        setFoundItems(prevState => [...prevState, shuffledImages[clickedCardIndex], shuffledImages[index]]);
      } else {
        if (difficulty === 'hard') {
          setTimeout(() => {
            const newFlippedCards = [...flippedCards];
            newFlippedCards[clickedCardIndex] = false;
            newFlippedCards[index] = false;
            setFlippedCards(newFlippedCards);
          }, 1000);
        }
      }
      setClickedCardIndex(null);
    } else {
      setClickedCardIndex(index);
    }

    if (difficulty === 'hard') {
      const newFlippedCards = [...flippedCards];
      newFlippedCards[index] = !newFlippedCards[index];
      setFlippedCards(newFlippedCards);
    }
  }

  function restartGame() {
    setFoundItems([]);
    setShuffledImages([]);
    shuffleImages();
    setDifficulty('');
    setFlippedCards(new Array(20).fill(false));
  }

  return (
    <div>
      {difficulty ? (
        <div className='memory-game-container'>
          <h1 className='header-text'>{MemoryGameText.TITLE}</h1>
          <h1 className='memory-subtitle-text'>{MemoryGameText.SUBTITLE}</h1>
          <div className='cards-container'>
            {shuffledImages.map((image, index) => (
              <div>
                <img
                key={index}
                className={`memory-card`}
                src={cardBack.file}
                onClick={() => selectItem(index)}
                style={{ position: 'absolute', left: cardCoordinates[index][0], top: cardCoordinates[index][1] }}
              />
              <img
                key={index}
                className={`memory-card ${foundItems.includes(image) ? 'found' : ''}`}
                src={flippedCards[index] ? image : ''}
                onClick={() => selectItem(index)}
                style={{ position: 'absolute', left: cardCoordinates[index][0], top: cardCoordinates[index][1] }}
              />
              </div>
            ))}
          </div>
          <button className='memory__newGame-button' onClick={restartGame}>Neues Spiel</button>
        </div>
      ) : (
        <div className='memory-game-container'>
          <div className='header'>
            <div>
              <h1 className='greenHeaderText'>{MemoryGameText.TITLE}</h1>
              <h3 className='memory-subtitle-text'>{MemoryGameText.SUBTITLE}</h3>
              <div>
                <button className={preselectedDifficulty === 'easy' ? 'button selected' : 'button'} onClick={() => setPreselectedDifficulty('easy')}>{MemoryGameText.LEVEL_1}</button>
                <button className={preselectedDifficulty === 'hard' ? 'button selected' : 'button'} onClick={() => setPreselectedDifficulty('hard')}>{MemoryGameText.LEVEL_2}</button>
              </div>
              <button className='button start' onClick={() => setDifficulty(preselectedDifficulty)}>{MemoryGameText.START}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MemoryGame;
