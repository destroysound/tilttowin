import Phaser from 'phaser'
import { rgbToHex} from '../utils'
import Entity from '../sprites/entity'

export default class extends Entity {
  constructor ({ game, x, y, asset, enemyGroup, playerGroup}) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    game.physics.p2.enable(this);
    this.body.fixedRotation = true
    this.body.setCollisionGroup(enemyGroup)
    this.body.collides([enemyGroup, playerGroup])
    this.healthbar = this.addChild(game.add.graphics(0,0))
    this.updateHealthBar()
  }

  updateHealthBar() {
    this.healthbar.clear();
    var x = (this.health / this.maxHealth) * 100;
    var colour = rgbToHex((x > 50 ? 1-2*(x-50)/100.0 : 1.0) * 255, (x > 50 ? 1.0 : 2*x/100.0) * 255, 0);
    this.healthbar.beginFill(colour);
    this.healthbar.lineStyle(5, colour, 1);
    this.healthbar.moveTo(0,-5);
    this.healthbar.lineTo(32 * this.hp / this.totalhp, -5);
    this.healthbar.endFill();
  }

  update () {
    this.body.moveLeft(100)
  }
}
