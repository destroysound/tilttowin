import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    game.physics.p2.enable(this);
    game.camera.follow(this);
    this.cursors = game.input.keyboard.createCursorKeys()
  }

  update () {
    this.body.setZeroVelocity();

    if (this.cursors.left.isDown) {
      this.body.moveLeft(300);
    }
    else if (this.cursors.right.isDown) {
      this.body.moveRight(300);
    }
  }
}
