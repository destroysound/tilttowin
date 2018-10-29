import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, enemyGroup, playerGroup }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    game.physics.p2.enable(this, false);
    this.body.setCircle(28)
    this.body.fixedRotation = true
    game.camera.follow(this);
    this.cursors = game.input.keyboard.createCursorKeys()
    this.body.setCollisionGroup(playerGroup)
    this.body.collides(enemyGroup, this.hitEnemy, this)
    this.body.onBeginContact.add(this.beginContact, this)
    this.body.onEndContact.add(this.endContact, this)
    this.collidingWith = null;
    this.collidingTimer = 0;
    this.healthbar = this.addChild(game.make.graphics(-32, -40))
    this.healthbar.cropEnabled = true
    this.health = 100
    this.maxHealth = 100
  }

  takeDamage (damageAmount) {

  }

  hitEnemy(body1, body2) {
    console.log("colliding with " + body2);
    this.collidingTimer = 0;
  }

  beginContact(body, bodyB, shapeA, shapeB, equation) {
    console.log("begin contact")
    this.collidingWith = body;
  }

  endContact(body, bodyB, shapeA, shapeB) {
    console.log("end contact")
    this.collidingWith = null;
  }

  update () {
    this.body.setZeroVelocity();

    if (this.cursors.left.isDown) {
      this.body.moveLeft(300);
    }
    else if (this.cursors.right.isDown) {
      this.body.moveRight(300);
    }

    if (this.collidingWith) {
      if (this.collidingTimer <= 0) {
        this.collidingTimer = 10
        this.collidingWith.sprite.takeDamage(10);
      }
      else {
        this.collidingTimer--;
      }
    }
  }
}
