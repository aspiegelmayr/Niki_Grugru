import * as React from 'react';
import chef from "../../assets/Memory/jobs/chef.png";
import chemist from "../../assets/Memory/jobs/chemist.png";
import firefighter from "../../assets/Memory/jobs/firefighter.png";
import gardener from "../../assets/Memory/jobs/gardener.png";
import librarian from "../../assets/Memory/jobs/librarian.png";
import mechanic from "../../assets/Memory/jobs/mechanic.png";
import musician from "../../assets/Memory/jobs/musician.png";
import painter from "../../assets/Memory/jobs/painter.png";
import teacher from "../../assets/Memory/jobs/teacher.png";
import vet from "../../assets/Memory/jobs/vet.png";
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

    if(difficulty === 'hard'){
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
        <div style={{ top: "100px", position: "absolute", left: "25%" }}>
          <h1 className='header-text'>{MemoryGameText.TITLE}</h1>
          <h1 className='header-text'>{MemoryGameText.SUBTITLE}</h1>
          <div style={{ display: "flex", flexDirection: "row", alignContent: "space-between" }}>
            {shuffledImages.slice(0, 7).map((image, index) => (
              <img
                key={index}
                className={`card ${foundItems.includes(image) ? 'found' : ''}`}
                src={flippedCards[index] ? image : cardBack.file}
                onClick={() => selectItem(index)}
              />
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            {shuffledImages.slice(7, 14).map((image, index) => (
              <img
                key={index}
                className={`card ${foundItems.includes(image) ? 'found' : ''}`}
                src={flippedCards[index + 7] ? image : cardBack.file}
                onClick={() => selectItem(index + 7)}
              />
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            {shuffledImages.slice(14, 20).map((image, index) => (
              <img
                key={index}
                className={`card ${foundItems.includes(image) ? 'found' : ''}`}
                src={flippedCards[index + 14] ? image : cardBack.file}
                onClick={() => selectItem(index + 14)}
              />
            ))}
          </div>

          <button style={{ top: "90%", left: "30px", position: "fixed" }} onClick={restartGame}>Neues Spiel</button>
        </div>
      ) : (
        <div className='header'>
          <div>
            <h1 className='memory-header-text'>{MemoryGameText.TITLE}</h1>
            <h3 className='memory-subtitle-text'>{MemoryGameText.SUBTITLE}</h3>
            <div>
              <button className={preselectedDifficulty === 'easy' ? 'button selected' : 'button'} onClick={() => setPreselectedDifficulty('easy')}>{MemoryGameText.LEVEL_1}</button>
              <button className={preselectedDifficulty === 'hard' ? 'button selected' : 'button'} onClick={() => setPreselectedDifficulty('hard')}>{MemoryGameText.LEVEL_2}</button>
            </div>
            <button className='button start' onClick={() => setDifficulty(preselectedDifficulty)}>{MemoryGameText.START}</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MemoryGame;
