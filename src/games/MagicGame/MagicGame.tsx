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
import potion1 from "../../assets/MagicGame/potions/potion1.png";
import potion2 from "../../assets/MagicGame/potions/potion2.png";
import potion3 from "../../assets/MagicGame/potions/potion3.png";
import potion4 from "../../assets/MagicGame/potions/potion4.png";
import potion5 from "../../assets/MagicGame/potions/potion5.png";
import potion6 from "../../assets/MagicGame/potions/potion6.png";
import potion7 from "../../assets/MagicGame/potions/potion7.png";
import potion8 from "../../assets/MagicGame/potions/potion8.png";
import potion9 from "../../assets/MagicGame/potions/potion9.png";
import potion10 from "../../assets/MagicGame/potions/potion10.png";
import './MagicGame.css';
import { MagicGameText } from '../../text-constants';

const MagicGame: React.FunctionComponent = () => {
    const [shuffledImages, setShuffledImages] = React.useState<string[]>([]);
    const [ingredients, setIngredients] = React.useState<string[]>([]);
    const [foundItems, setFoundItems] = React.useState<string[]>([]);
    const [difficulty, setDifficulty] = React.useState<string>('');
    const [preselectedDifficulty, setPreselectedDifficulty] = React.useState<string>('');
    const [potion, setPotion] = React.useState<string>('');

    React.useEffect(() => {
        shuffleImages();
      }, []); 

      React.useEffect(() => {
        generateRecipe();
      }, [shuffledImages]); 

      React.useEffect(() => {
        getPotionImage();
      }, []); 

      
    function shuffleImages(){
        let availableItems = [apple, blueberry, blueberry2, bone, branch, bug1, bug2, butterfly, chili, eye, feather,
        flower, gem2, gem1, leaf, mushroom, nail, raspberry, tooth, worm]
      
        for (let i = availableItems.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [availableItems[i], availableItems[j]] = [availableItems[j], availableItems[i]];
        }
        setShuffledImages(availableItems);
    }

    function setGameDifficulty(selectedDifficulty: string){
        setDifficulty(selectedDifficulty);
    }

    function generateRecipe() {
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

      function getPotionImage(){
        const availablePotions = [potion1, potion2, potion3, potion4, potion5, potion6, potion7, potion8, potion9, potion10];
        setPotion(availablePotions[Math.floor(Math.random() * 10)]);
      }

      function restartGame(){
        setIngredients([]);
        setFoundItems([]);
        setShuffledImages([]);
        shuffleImages();
        generateRecipe();
        getPotionImage();
        setGameDifficulty('');
      }

    return (
        <div>
      {difficulty ? (
        <div className='magicGame__container'>
          <div className='magicGame__line'></div>

          <img className='paper' src={paper}></img>
          <img className='potion-image' src={potion}></img>
          <p className='magicGame__instructions'>{MagicGameText.INSTRUCTIONS}</p>


        <img className={`ingredient ${foundItems.includes(ingredients[0]) ? 'found' : ''}`} src={ingredients[0]} style={{left: "82%", top: "59%"}}></img>
        <img className={`ingredient ${foundItems.includes(ingredients[1]) ? 'found' : ''}`} src={ingredients[1]} style={{left: "82%", top: "70%"}}></img>
        <img className={`ingredient ${foundItems.includes(ingredients[2]) ? 'found' : ''}`} src={difficulty === 'easy' ? ingredients[2] : ''} alt='?' style={{left: "82%", top: "83%"}}></img>

        <img className='shelf shelf1' src={shelf}></img>
        <img className='shelf shelf2' src={shelf}></img>
        <img className='shelf shelf3' src={shelf}></img>
        <img className='shelf shelf4' src={shelf}></img>
        <img className='shelf shelf5' src={shelf}></img>
        <img className='shelf shelf6' src={shelf}></img>
        <img className='shelf shelf7' src={shelf}></img>
        <img className='shelf shelf8' src={shelf}></img>
        <img className='shelf shelf9' src={shelf}></img>
        <img className='shelf shelf10' src={shelf}></img>

        <img className={`item item1 ${foundItems.includes(shuffledImages[0]) ? 'found' : ''}`} src={shuffledImages[0]} onClick={() => selectItem(shuffledImages[0])}></img>
        <img className={`item item2 ${foundItems.includes(shuffledImages[1]) ? 'found' : ''}`} src={shuffledImages[1]} onClick={() => selectItem(shuffledImages[1])}></img>
        <img className={`item item3 ${foundItems.includes(shuffledImages[2]) ? 'found' : ''}`} src={shuffledImages[2]} onClick={() => selectItem(shuffledImages[2])}></img>

        <img className={`item item4 ${foundItems.includes(shuffledImages[3]) ? 'found' : ''}`} src={shuffledImages[3]} onClick={() => selectItem(shuffledImages[3])}></img>
        <img className={`item item5 ${foundItems.includes(shuffledImages[4]) ? 'found' : ''}`} src={shuffledImages[4]} onClick={() => selectItem(shuffledImages[4])}></img>
        <img className={`item item6 ${foundItems.includes(shuffledImages[5]) ? 'found' : ''}`} src={shuffledImages[5]} onClick={() => selectItem(shuffledImages[5])}></img>

        <img className={`item item7 ${foundItems.includes(shuffledImages[6]) ? 'found' : ''}`} src={shuffledImages[6]} onClick={() => selectItem(shuffledImages[6])}></img>
        <img className={`item item8 ${foundItems.includes(shuffledImages[7]) ? 'found' : ''}`} src={shuffledImages[7]} onClick={() => selectItem(shuffledImages[7])}></img>
        <img className={`item item9 ${foundItems.includes(shuffledImages[8]) ? 'found' : ''}`} src={shuffledImages[8]} onClick={() => selectItem(shuffledImages[8])}></img>

        <img className={`item item10 ${foundItems.includes(shuffledImages[9]) ? 'found' : ''}`} src={shuffledImages[9]} onClick={() => selectItem(shuffledImages[9])}></img>
        <img className={`item item11 ${foundItems.includes(shuffledImages[10]) ? 'found' : ''}`} src={shuffledImages[10]} onClick={() => selectItem(shuffledImages[10])}></img>
        <img className={`item item12 ${foundItems.includes(shuffledImages[11]) ? 'found' : ''}`} src={shuffledImages[11]} onClick={() => selectItem(shuffledImages[11])}></img>

        <img className={`item item13 ${foundItems.includes(shuffledImages[12]) ? 'found' : ''}`} src={shuffledImages[12]} onClick={() => selectItem(shuffledImages[12])}></img>
        <img className={`item item14 ${foundItems.includes(shuffledImages[13]) ? 'found' : ''}`} src={shuffledImages[13]} onClick={() => selectItem(shuffledImages[13])}></img>
        <img className={`item item15 ${foundItems.includes(shuffledImages[14]) ? 'found' : ''}`} src={shuffledImages[14]} onClick={() => selectItem(shuffledImages[14])}></img>

        <img className={`item item16 ${foundItems.includes(shuffledImages[15]) ? 'found' : ''}`} src={shuffledImages[15]} onClick={() => selectItem(shuffledImages[15])}></img>
        <img className={`item item17 ${foundItems.includes(shuffledImages[16]) ? 'found' : ''}`} src={shuffledImages[16]} onClick={() => selectItem(shuffledImages[16])}></img>
        <img className={`item item18 ${foundItems.includes(shuffledImages[17]) ? 'found' : ''}`} src={shuffledImages[17]} onClick={() => selectItem(shuffledImages[17])}></img>

        <img className={`item item19 ${foundItems.includes(shuffledImages[18]) ? 'found' : ''}`} src={shuffledImages[18]} onClick={() => selectItem(shuffledImages[18])}></img>
        <img className={`item item20 ${foundItems.includes(shuffledImages[19]) ? 'found' : ''}`} src={shuffledImages[19]} onClick={() => selectItem(shuffledImages[19])}></img>

        <img src={niki} className='niki'></img>
        <button style={{top:"90%", left:"30px", position: "fixed"}} onClick={restartGame}>Neues Spiel</button>
      </div>
      ) : (
        <div className='header'>
            <img src={niki} style={{height: "80%"}}></img>
            <div>
                <h1 className='header-text'>{MagicGameText.TITLE}</h1>
                <div>
                    <button className={preselectedDifficulty === 'easy' ? 'button selected' : 'button'} onClick={() => setPreselectedDifficulty('easy')}>{MagicGameText.LEVEL_1}</button>
                    <button className={preselectedDifficulty === 'hard' ? 'button selected' : 'button'} onClick={() => setPreselectedDifficulty('hard')}>{MagicGameText.LEVEL_2}</button>
                </div>
                <button className='button start' onClick={() => setDifficulty(preselectedDifficulty)}>{MagicGameText.START}</button>
            </div>
        </div>
      )}
    </div>
  );
  }

export default MagicGame;
