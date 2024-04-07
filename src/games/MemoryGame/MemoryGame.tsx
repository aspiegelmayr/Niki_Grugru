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

const MemoryGame: React.FunctionComponent = () => {
    const [shuffledImages, setShuffledImages] = React.useState<string[]>([]);
    const [ingredients, setIngredients] = React.useState<string[]>([]);
    const [foundItems, setFoundItems] = React.useState<string[]>([]);
    const [clickedCard, setClickedCard] = React.useState<string>('');

    React.useEffect(() => {
        shuffleImages();
      }, []); 

      React.useEffect(() => {
        generateRecipe();
      }, [shuffledImages]); 

      
    function shuffleImages(){
        console.log('shuffle')
        let availableItems = [chef, chef, chemist, chemist, firefighter, firefighter, gardener, gardener, librarian, librarian, mechanic, mechanic, musician, musician, painter, painter, teacher, teacher, vet, vet]
      
        for (let i = availableItems.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [availableItems[i], availableItems[j]] = [availableItems[j], availableItems[i]];
        }
        setShuffledImages(availableItems);
    }

    function generateRecipe() {
        console.log('recipe');
        const ingredientNames: string[] = [];
      
        for (let i = 0; i < 3; i++) {
          const randomNumber = Math.floor(Math.random() * shuffledImages.length); // Generates a random number between 0 and 5
          ingredientNames.push(shuffledImages[randomNumber]);
        }
      
        setIngredients(ingredientNames);
      }

      function selectItem(id: string){
        if(clickedCard){
          if(clickedCard === id){
            setFoundItems(prevState => [...prevState, id, clickedCard]);
          }
        }
        setClickedCard(id);
      }

      function restartGame(){
        setIngredients([]);
        setFoundItems([]);
        setShuffledImages([]);
        shuffleImages();
        generateRecipe();
      }

    return (
          <div style={{top: "100px", position:"absolute", left:"25%"}}>
            <div style={{display: "flex", flexDirection: "row", alignContent: "space-between"}}>
            <img className={`card ${foundItems.includes(shuffledImages[0]) ? 'found' : ''}`} src={shuffledImages[0]} onClick={() => selectItem(shuffledImages[0])}></img>
            <img className={`card ${foundItems.includes(shuffledImages[1]) ? 'found' : ''}`} src={shuffledImages[1]} onClick={() => selectItem(shuffledImages[1])}></img>
            <img className={`card ${foundItems.includes(shuffledImages[2]) ? 'found' : ''}`} src={shuffledImages[2]} onClick={() => selectItem(shuffledImages[2])}></img>
            <img className={`card ${foundItems.includes(shuffledImages[3]) ? 'found' : ''}`} src={shuffledImages[3]} onClick={() => selectItem(shuffledImages[3])}></img>
            <img className={`card ${foundItems.includes(shuffledImages[4]) ? 'found' : ''}`} src={shuffledImages[4]} onClick={() => selectItem(shuffledImages[4])}></img>
            </div>

            <div style={{display: "flex", flexDirection: "row"}}>
            <img className={`card ${foundItems.includes(shuffledImages[5]) ? 'found' : ''}`} src={shuffledImages[5]} onClick={() => selectItem(shuffledImages[5])}></img>
            <img className={`card ${foundItems.includes(shuffledImages[6]) ? 'found' : ''}`} src={shuffledImages[6]} onClick={() => selectItem(shuffledImages[6])}></img>
            <img className={`card ${foundItems.includes(shuffledImages[7]) ? 'found' : ''}`} src={shuffledImages[7]} onClick={() => selectItem(shuffledImages[7])}></img>
            <img className={`card ${foundItems.includes(shuffledImages[8]) ? 'found' : ''}`} src={shuffledImages[8]} onClick={() => selectItem(shuffledImages[8])}></img>
            <img className={`card ${foundItems.includes(shuffledImages[9]) ? 'found' : ''}`} src={shuffledImages[9]} onClick={() => selectItem(shuffledImages[9])}></img>
           </div>

            <div style={{display: "flex", flexDirection: "row"}}>
             <img className={`card ${foundItems.includes(shuffledImages[10]) ? 'found' : ''}`} src={shuffledImages[10]} onClick={() => selectItem(shuffledImages[10])}></img>
            <img className={`card ${foundItems.includes(shuffledImages[11]) ? 'found' : ''}`} src={shuffledImages[11]} onClick={() => selectItem(shuffledImages[11])}></img>
            <img className={`card ${foundItems.includes(shuffledImages[12]) ? 'found' : ''}`} src={shuffledImages[12]} onClick={() => selectItem(shuffledImages[12])}></img>
            <img className={`card ${foundItems.includes(shuffledImages[13]) ? 'found' : ''}`} src={shuffledImages[13]} onClick={() => selectItem(shuffledImages[13])}></img>
            <img className={`card ${foundItems.includes(shuffledImages[14]) ? 'found' : ''}`} src={shuffledImages[14]} onClick={() => selectItem(shuffledImages[14])}></img>
            </div>

            <div style={{display: "flex", flexDirection: "row"}}>
            <img className={`card ${foundItems.includes(shuffledImages[15]) ? 'found' : ''}`} src={shuffledImages[15]} onClick={() => selectItem(shuffledImages[15])}></img>
            <img className={`card ${foundItems.includes(shuffledImages[16]) ? 'found' : ''}`} src={shuffledImages[16]} onClick={() => selectItem(shuffledImages[16])}></img>
            <img className={`card ${foundItems.includes(shuffledImages[17]) ? 'found' : ''}`} src={shuffledImages[17]} onClick={() => selectItem(shuffledImages[17])}></img>
            <img className={`card ${foundItems.includes(shuffledImages[18]) ? 'found' : ''}`} src={shuffledImages[18]} onClick={() => selectItem(shuffledImages[18])}></img>
            <img className={`card ${foundItems.includes(shuffledImages[19]) ? 'found' : ''}`} src={shuffledImages[19]} onClick={() => selectItem(shuffledImages[19])}></img>
            </div>

            <button style={{top:"90%", left:"30px", position: "fixed"}} onClick={restartGame}>Neues Spiel</button>
            
          </div>
  );
  }

export default MemoryGame;
