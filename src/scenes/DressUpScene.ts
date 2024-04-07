import Phaser from 'phaser'
import { accessoriesOnNiki, bottomsOnNiki, characters, hatsOnNiki, overallsOnNiki, shoesOnNiki, topsOnNiki, closetImage } from '../games/DressUpGame/DressUpGameAssets'

let curHat = 0
let hats: Phaser.GameObjects.Image[] = []

let curTop = 0
let tops: Phaser.GameObjects.Image[] = []

let curBottom = 0
let bottoms: Phaser.GameObjects.Image[] = []

let curShoes = 0
let shoes: Phaser.GameObjects.Image[] = []

let curAccessory = 0
let accessories: Phaser.GameObjects.Image[] = []

let curOverall = 0
let overalls: Phaser.GameObjects.Image[] = []

let hatBtns: Phaser.GameObjects.Image[] = [];
let topBtns: Phaser.GameObjects.Image[] = [];
let bottomBtns: Phaser.GameObjects.Image[] = [];
let overallsBtns: Phaser.GameObjects.Image[] = [];
let accessoriesBtns: Phaser.GameObjects.Image[] = [];
let shoesBtns: Phaser.GameObjects.Image[] = [];

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super('helloworld')
  }


  preload() {
    characters.forEach(image => {
      this.load.image(image.name, image.file);
  });

    hatsOnNiki.forEach(image => {
      this.load.image(image.name, image.file);
    });

    shoesOnNiki.forEach(image => {
      this.load.image(image.name, image.file);
  });

    topsOnNiki.forEach(image => {
      this.load.image(image.name, image.file);
  });

  bottomsOnNiki.forEach(image => {
    this.load.image(image.name, image.file);
  });

  accessoriesOnNiki.forEach(image => {
    this.load.image(image.name, image.file);
  });

  this.load.image(closetImage.name, closetImage.file);
  }

  create() {
    const niki = this.add.image(window.innerWidth*0.75, window.innerHeight/2, 'niki')
    niki.setScale(0.1)

    const closet = this.add.image(window.innerWidth*0.25, window.innerHeight/2, 'closet')
    closet.setScale(0.5)

    hatsOnNiki.forEach(hat => {
      const hatBtn = this.add.image(200,400, hat.name)
      hatBtn.setInteractive({ useHandCursor: true })
      hatBtn.setScale(0.1)
      hatBtn.on('pointerdown', nextHat)
      hatBtn.setVisible(false);
      hatBtns.push(hatBtn);
    })

    hatBtns[0].setVisible(true);

    topsOnNiki.forEach(top => {
      const topBtn = this.add.image(350,350, top.name)
      topBtn.setInteractive({ useHandCursor: true })
      topBtn.setScale(0.1)
      topBtn.on('pointerdown', nextTop)
      topBtn.setVisible(false);
      topBtns.push(topBtn);
    })

    topBtns[0].setVisible(true);

    bottomsOnNiki.forEach(bottom => {
      const bottomBtn = this.add.image(500,300, bottom.name)
      bottomBtn.setInteractive({ useHandCursor: true })
      bottomBtn.setScale(0.1)
      bottomBtn.on('pointerdown', nextBottom)
      bottomBtn.setVisible(false);
      bottomBtns.push(bottomBtn);
    })

    bottomBtns[0].setVisible(true);

    shoesOnNiki.forEach(shoe => {
      const shoeBtn = this.add.image(350,450, shoe.name)
      shoeBtn.setInteractive({ useHandCursor: true })
      shoeBtn.setScale(0.1)
      shoeBtn.on('pointerdown', nextBottom)
      shoeBtn.setVisible(false);
      shoesBtns.push(shoeBtn);
    })

    shoesBtns[0].setVisible(true);

    accessoriesOnNiki.forEach(accessory => {
      const accessoryBtn = this.add.image(350,350, accessory.name)
      accessoryBtn.setInteractive({ useHandCursor: true })
      accessoryBtn.setScale(0.1)
      accessoryBtn.on('pointerdown', nextBottom)
      accessoryBtn.setVisible(false);
      accessoriesBtns.push(accessoryBtn);
    })

    accessoriesBtns[0].setVisible(true);

    overallsOnNiki.forEach(overall => {
      const overallBtn = this.add.image(250,250, overall.name)
      overallBtn.setInteractive({ useHandCursor: true })
      overallBtn.setScale(0.1)
      overallBtn.on('pointerdown', nextBottom)
      overallBtn.setVisible(false);
      overallsBtns.push(overallBtn);
    })

    overallsBtns[0].setVisible(true);


    // HATS
    hatsOnNiki.forEach(obj => {
      const hat = this.add.image(window.innerWidth*0.75, window.innerHeight/2, obj.name)
      hat.setScale(0.1)
      hat.setVisible(false)
      hats.push(hat)
    });
    curHat = 0

    // TOPS
    topsOnNiki.forEach(obj => {
      const top = this.add.image(window.innerWidth*0.75, window.innerHeight/2, obj.name)
      top.setScale(0.1)
      top.setVisible(false)
      tops.push(top)
    });
    curTop = 0

    // BOTTOMS
    bottomsOnNiki.forEach(obj => {
      const bottom = this.add.image(window.innerWidth*0.75, window.innerHeight/2, obj.name)
      bottom.setScale(0.1)
      bottom.setVisible(false)
      bottoms.push(bottom)
    });
    curBottom = 0

    // SHOES
    shoesOnNiki.forEach(obj => {
      const shoe = this.add.image(window.innerWidth*0.75, window.innerHeight/2, obj.name)
      shoe.setScale(0.1)
      shoe.setVisible(false)
      shoes.push(shoe)
    });
    curShoes = 0

    // ACCESSORIES
    accessoriesOnNiki.forEach(obj => {
      const accessory = this.add.image(window.innerWidth*0.75, window.innerHeight/2, obj.name)
      accessory.setScale(0.1)
      accessory.setVisible(false)
      accessories.push(accessory)
    });
    curAccessory = 0

    // OVERALLS
    overallsOnNiki.forEach(obj => {
      const overall = this.add.image(window.innerWidth*0.75, window.innerHeight/2, obj.name)
      overall.setScale(0.1)
      overall.setVisible(false)
      overalls.push(overall)
    });
    curOverall = 0
  }
  
}
function nextHat() {
  let oldHat = curHat
  curHat ++
  if(curHat > hats.length){
    curHat = 0
  }
  hatBtns[curHat].setVisible(true);
  hatBtns[oldHat].setVisible(false);
  setObjVisible(hats, curHat, oldHat)
}

function nextTop() {
  let oldTop = curTop
  curTop ++
  if(curTop > tops.length){
    curTop = 0
  }
  setObjVisible(tops, curTop, oldTop)
}

function nextBottom() {
  let oldBottom = curBottom
  curBottom ++
  if(curBottom > bottoms.length){
    curBottom = 0
  }
  bottomBtns[curBottom].setVisible(true);
  bottomBtns[oldBottom].setVisible(false);
  setObjVisible(bottoms, curBottom, oldBottom)
}

function nextShoes() {
  let oldShoes = curShoes
  curShoes ++
  if(curShoes > shoes.length){
    curShoes = 0
  }
  shoesBtns[curShoes].setVisible(true);
  shoesBtns[oldShoes].setVisible(false);
  setObjVisible(shoes, curShoes, oldShoes)
}

function nextAccessory() {
  let oldAccessory = curAccessory
  curAccessory ++
  if(curAccessory > accessories.length){
    curAccessory = 0
  }
  accessoriesBtns[curAccessory].setVisible(true);
  accessoriesBtns[oldAccessory].setVisible(false);
  setObjVisible(accessories, curAccessory, oldAccessory)
}

function nextOverall() {
  let oldOverall = curOverall
  curOverall ++
  if(curOverall > overalls.length){
    curOverall = 0
  }
  overallsBtns[curOverall].setVisible(true);
  overallsBtns[oldOverall].setVisible(false);
  setObjVisible(overalls, curOverall, oldOverall)
}

function setObjVisible(category: Phaser.GameObjects.Image[], currentObjIndex: number, oldObjIndex: number){
  if(currentObjIndex === 0){
    category[category.length-1].setVisible(false)
  } else {
    category[currentObjIndex-1].setVisible(true)
    if(oldObjIndex > 0 && oldObjIndex < category.length)
    category[oldObjIndex-1].setVisible(false)
  }
}

