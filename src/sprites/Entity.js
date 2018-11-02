import Phaser from 'phaser'
import { rgbToHex} from '../utils'

export default class extends Phaser.Sprite {
  constructor (game, x, y, asset) {
    super(game, x, y, asset)
    this.health = 100
    this.maxHealth = 100
    this.toughness = 1
    this.speed = 2
    this.accuracy = 2
    this.attack = 1
    this.abilities = []
    this.level = 1
    this.magic = 2
    this.strength = 2
  }

  dying () {
    if (this.health <= 0) {
      Destroyd
    }
  }

  damageAmount () {
    
  }

  takeDamage (damageAmount) {
    this.health -= damageAmount
    this.updateHealthBar()
    console.log("taking damage: health is " + this.health)
  }

  getMaxHealth() {
    return this.maxHealth * this.level
  }

  getToughness() {
    return this.toughness * this.level
  }

  getSpeed() {
    return this.speed * this.level
  }

  getAccuracy() {
    return this.accuracy * this.level
  }

  getAttack() {
    return this.attack * this.level
  }

  getMagic() {
    return this.magic * this.level
  }

  getStrength() {
    return this.strength * this.level
  }

  getDefences() {
    if (this.magic > this.strength) {
      return this.magic + this.toughness
    } else {
        return this.strength + this.toughness
    }
  }

}
