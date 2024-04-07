import * as React from 'react';
import shelf from "../../assets/MagicGame/shelf.png";
import niki from "../../assets/MagicGame/niki_cauldron_yellow.png";
import paper from "../../assets/MagicGame/paper.png";
import apple from "../../assets/MagicGame/apple.png";
import blueberry from "../../assets/MagicGame/blueberry.png";
import blueberry2 from "../../assets/MagicGame/blueberry2.png";
import bone from "../../assets/MagicGame/bone.png";
import branch from "../../assets/MagicGame/branch.png";
import bug1 from "../../assets/MagicGame/bug1.png";
import bug2 from "../../assets/MagicGame/bug2.png";
import butterfly from "../../assets/MagicGame/butterfly.png";
import chili from "../../assets/MagicGame/chili.png";
import eye from "../../assets/MagicGame/eye.png";
import feather from "../../assets/MagicGame/feather.png";
import flower from "../../assets/MagicGame/flower.png";
import gem1 from "../../assets/MagicGame/gem1.png";
import gem2 from "../../assets/MagicGame/gem2.png";
import leaf from "../../assets/MagicGame/leaf.png";
import mushroom from "../../assets/MagicGame/mushroom.png";
import nail from "../../assets/MagicGame/nail.png";
import raspberry from "../../assets/MagicGame/raspberry.png";
import tooth from "../../assets/MagicGame/tooth.png";
import worm from "../../assets/MagicGame/worm.png";
import './MagicGame.css'

const MagicGame: React.FunctionComponent = () => {
    const [shuffledImages, setShuffledImages] = React.useState<string[]>([]);
    const [ingredients, setIngredients] = React.useState<string[]>([]);
    const [foundItems, setFoundItems] = React.useState<string[]>([]);

    React.useEffect(() => {
        shuffleImages();
      }, []); 

      React.useEffect(() => {
        generateRecipe();
      }, [shuffledImages]); 

      
    function shuffleImages(){
        console.log('shuffle')
        let availableItems = [apple, blueberry, blueberry2, bone, branch, bug1, bug2, butterfly, chili, eye, feather,
        flower, gem2, gem1, leaf, mushroom, nail, raspberry, tooth, worm]
      
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
        if(ingredients.includes(id)){
            setFoundItems(prevState => [...prevState, id]);
        }
    
      }

      function restartGame(){
        setIngredients([]);
        setFoundItems([]);
        setShuffledImages([]);
        shuffleImages();
        generateRecipe();
      }

    return (
          <div style={{top: "100px"}}>
            <img className='shelf' src={shelf} style={{left: "10%", top: "20%"}}></img>
            <img className='shelf' src={shelf} style={{left: "40%", top: "20%"}}></img>
            <img className='shelf' src={shelf} style={{left: "70%", top: "20%"}}></img>

            <img className='shelf' src={shelf} style={{left: "10%", top: "40%"}}></img>
            <img className='shelf' src={shelf} style={{left: "40%", top: "40%"}}></img>
            <img className='shelf' src={shelf} style={{left: "70%", top: "40%"}}></img>

            <img className='shelf' src={shelf} style={{left: "10%", top: "60%"}}></img>

            <img className='paper' src={paper} style={{left: "70%", top: "55%"}}></img>
            <img className={`ingredient ${foundItems.includes(ingredients[0]) ? 'found' : ''}`} src={ingredients[0]} style={{left: "75%", top: "60%"}}></img>
            <img className={`ingredient ${foundItems.includes(ingredients[1]) ? 'found' : ''}`} src={ingredients[1]} style={{left: "75%", top: "70%"}}></img>
            <img className={`ingredient ${foundItems.includes(ingredients[2]) ? 'found' : ''}`} src={ingredients[2]} style={{left: "75%", top: "80%"}}></img>

            <img src={niki} className='niki' style={{left: "45%", bottom: "0%"}}></img>

            <img className={`item ${foundItems.includes(shuffledImages[0]) ? 'found' : ''}`} src={shuffledImages[0]} style={{left: "10%", top: "13%"}} onClick={() => selectItem(shuffledImages[0])}></img>
            <img className={`item ${foundItems.includes(shuffledImages[1]) ? 'found' : ''}`} src={shuffledImages[1]} style={{left: "18%", top: "13%"}} onClick={() => selectItem(shuffledImages[1])}></img>
            <img className={`item ${foundItems.includes(shuffledImages[2]) ? 'found' : ''}`} src={shuffledImages[2]} style={{left: "26%", top: "13%"}} onClick={() => selectItem(shuffledImages[2])}></img>

            <img className={`item ${foundItems.includes(shuffledImages[3]) ? 'found' : ''}`} src={shuffledImages[3]} style={{left: "40%", top: "13%"}} onClick={() => selectItem(shuffledImages[3])}></img>
            <img className={`item ${foundItems.includes(shuffledImages[4]) ? 'found' : ''}`} src={shuffledImages[4]} style={{left: "48%", top: "13%"}} onClick={() => selectItem(shuffledImages[4])}></img>
            <img className={`item ${foundItems.includes(shuffledImages[5]) ? 'found' : ''}`} src={shuffledImages[5]} style={{left: "56%", top: "13%"}} onClick={() => selectItem(shuffledImages[5])}></img>

            <img className={`item ${foundItems.includes(shuffledImages[6]) ? 'found' : ''}`} src={shuffledImages[6]} style={{left: "70%", top: "13%"}} onClick={() => selectItem(shuffledImages[6])}></img>
            <img className={`item ${foundItems.includes(shuffledImages[7]) ? 'found' : ''}`} src={shuffledImages[7]} style={{left: "78%", top: "13%"}} onClick={() => selectItem(shuffledImages[7])}></img>
            <img className={`item ${foundItems.includes(shuffledImages[8]) ? 'found' : ''}`} src={shuffledImages[8]} style={{left: "86%", top: "13%"}} onClick={() => selectItem(shuffledImages[8])}></img>

            <img className={`item ${foundItems.includes(shuffledImages[9]) ? 'found' : ''}`} src={shuffledImages[9]} style={{left: "10%", top: "33%"}} onClick={() => selectItem(shuffledImages[9])}></img>
            <img className={`item ${foundItems.includes(shuffledImages[10]) ? 'found' : ''}`} src={shuffledImages[10]} style={{left: "18%", top: "33%"}} onClick={() => selectItem(shuffledImages[10])}></img>
            <img className={`item ${foundItems.includes(shuffledImages[11]) ? 'found' : ''}`} src={shuffledImages[11]} style={{left: "26%", top: "33%"}} onClick={() => selectItem(shuffledImages[11])}></img>

            <img className={`item ${foundItems.includes(shuffledImages[12]) ? 'found' : ''}`} src={shuffledImages[12]} style={{left: "40%", top: "33%"}} onClick={() => selectItem(shuffledImages[12])}></img>
            <img className={`item ${foundItems.includes(shuffledImages[13]) ? 'found' : ''}`} src={shuffledImages[13]} style={{left: "48%", top: "33%"}} onClick={() => selectItem(shuffledImages[13])}></img>
            <img className={`item ${foundItems.includes(shuffledImages[14]) ? 'found' : ''}`} src={shuffledImages[14]} style={{left: "56%", top: "33%"}} onClick={() => selectItem(shuffledImages[14])}></img>

            <img className={`item ${foundItems.includes(shuffledImages[15]) ? 'found' : ''}`} src={shuffledImages[15]} style={{left: "70%", top: "33%"}} onClick={() => selectItem(shuffledImages[15])}></img>
            <img className={`item ${foundItems.includes(shuffledImages[16]) ? 'found' : ''}`} src={shuffledImages[16]} style={{left: "78%", top: "33%"}} onClick={() => selectItem(shuffledImages[16])}></img>
            <img className={`item ${foundItems.includes(shuffledImages[17]) ? 'found' : ''}`} src={shuffledImages[17]} style={{left: "86%", top: "33%"}} onClick={() => selectItem(shuffledImages[17])}></img>

            <img className={`item ${foundItems.includes(shuffledImages[18]) ? 'found' : ''}`} src={shuffledImages[18]} style={{left: "10%", top: "53%"}} onClick={() => selectItem(shuffledImages[18])}></img>
            <img className={`item ${foundItems.includes(shuffledImages[19]) ? 'found' : ''}`} src={shuffledImages[19]} style={{left: "18%", top: "53%"}} onClick={() => selectItem(shuffledImages[19])}></img>

            <button style={{top:"90%", left:"30px", position: "fixed"}} onClick={restartGame}>Neues Spiel</button>
          </div>
  );
  }

export default MagicGame;
