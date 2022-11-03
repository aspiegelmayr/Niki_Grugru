import Phaser from 'phaser'
import { accessoriesOnNiki, bottomsOnNiki, characters, hatsOnNiki, overallsOnNiki, shoesOnNiki, topsOnNiki } from '../GameAssets'

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

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super('helloworld')
  }


  preload() {

    this.load.image('logo', 'assets/sprites/phaser3-logo.png')
    this.load.image('red', 'assets/particles/red.png')

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
  }

  create() {
    const niki = this.add.image(window.innerWidth*0.75, window.innerHeight/2, 'niki')
    niki.setScale(0.1)

    const hatBtn = this.add.text(window.innerWidth*0.25, window.innerHeight/2, 'next hat')
    hatBtn.setInteractive({ useHandCursor: true })
    hatBtn.on('pointerdown', nextHat)

    const topBtn = this.add.text(window.innerWidth*0.25, window.innerHeight/2 + 20, 'next top')
    topBtn.setInteractive({ useHandCursor: true })
    topBtn.on('pointerdown', nextTop)

    const bottomBtn = this.add.text(window.innerWidth*0.25, window.innerHeight/2 + 40, 'next bottom')
    bottomBtn.setInteractive({ useHandCursor: true })
    bottomBtn.on('pointerdown', nextBottom)

    const shoesBtn = this.add.text(window.innerWidth*0.25, window.innerHeight/2 +60, 'next shoes')
    shoesBtn.setInteractive({ useHandCursor: true })
    shoesBtn.on('pointerdown', nextShoes)

    const accessoryBtn = this.add.text(window.innerWidth*0.25, window.innerHeight/2 +80, 'next accessory')
    accessoryBtn.setInteractive({ useHandCursor: true })
    accessoryBtn.on('pointerdown', nextAccessory)

    const overallBtn = this.add.text(window.innerWidth*0.25, window.innerHeight/2 - 20, 'next overall')
    overallBtn.setInteractive({ useHandCursor: true })
    overallBtn.on('pointerdown', nextOverall)


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
  setObjVisible(bottoms, curBottom, oldBottom)
}

function nextShoes() {
  let oldShoes = curShoes
  curShoes ++
  if(curShoes > shoes.length){
    curShoes = 0
  }
  setObjVisible(shoes, curShoes, oldShoes)
}

function nextAccessory() {
  let oldAccessory = curAccessory
  curAccessory ++
  if(curAccessory > accessories.length){
    curAccessory = 0
  }
  setObjVisible(accessories, curAccessory, oldAccessory)
}

function nextOverall() {
  let oldOverall = curOverall
  curOverall ++
  if(curOverall > overalls.length){
    curOverall = 0
  }
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

