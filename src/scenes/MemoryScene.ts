import Phaser from 'phaser'
import { characters } from '../games/DressUpGame/DressUpGameAssets'
import { jobImages, cardBack } from '../games/MemoryGame/MemoryGameAssets';

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super('helloworld')
  }

  public cardBases: Phaser.GameObjects.Image[] = []
  public jobImages: Phaser.GameObjects.Image[] = []
  public cardPositionsX = [
    window.innerWidth*0.75, 
    window.innerWidth*0.65,
    window.innerWidth*0.55,
    window.innerWidth*0.45,
    window.innerWidth*0.35,
    window.innerWidth*0.25,
  
    window.innerWidth*0.75, 
    window.innerWidth*0.65,
    window.innerWidth*0.55,
    window.innerWidth*0.45,
    window.innerWidth*0.35,
    window.innerWidth*0.25,

    window.innerWidth*0.75, 
    window.innerWidth*0.65,
    window.innerWidth*0.55,
    window.innerWidth*0.45,
    window.innerWidth*0.35,
    window.innerWidth*0.25,
  
    window.innerWidth*0.85,
    window.innerWidth*0.15,
  ]
  public cardPositionsY = [
    window.innerHeight/4, 
  window.innerHeight/4,
  window.innerHeight/4,
  window.innerHeight/4,
  window.innerHeight/4,
  window.innerHeight/4,
  
  window.innerHeight/2, 
  window.innerHeight/2,
  window.innerHeight/2,
  window.innerHeight/2,
  window.innerHeight/2,
  window.innerHeight/2,

  window.innerHeight*0.75, 
  window.innerHeight*0.75,
  window.innerHeight*0.75,
  window.innerHeight*0.75,
  window.innerHeight*0.75,
  window.innerHeight*0.75,

  window.innerHeight/2,
  window.innerHeight/2
]

  preload() {
      this.load.image(cardBack.name, cardBack.file);

      jobImages.forEach(img =>{
        this.load.image(img.name, img.file);
      })

 }

  create() {
    this.createCardBases();
    const card1 = this.add.image(window.innerWidth*0.75, window.innerHeight/2, jobImages[0].name)
    card1.setScale(0.2);
    this.shuffleCards();
}

shuffleCards(){
  for (let i = jobImages.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [jobImages[i], jobImages[j]] = [jobImages[j], jobImages[i]]; 
  }
}

createCardBases(){
  for(let i = 0; i < this.cardPositionsX.length; i++){
    const cardBase = this.add.image(this.cardPositionsX[i], this.cardPositionsY[i], cardBack.name)
    cardBase.setScale(0.22);
    this.cardBases.push(cardBase);
  }
}

fillCards(){
  for(let i = 0; i < jobImages.length; i++){
    const jobImage = this.add.image(this.cardPositionsX[i], this.cardPositionsY[i], jobImages[i].name)
    jobImage.setScale(0.22);
    this.jobImages.push(jobImage);
  }
}
}