class Building extends Phaser.GameObjects.Container {
    constructor(scene, x, y, scale, level = 1) {
        super(scene, x, y);

        this.x = x;
        this.y = y;
        this.scene = scene;
        this.level = level;
        this.scale = scale;

        // config parameter
        this.buildingBounceTween = "Cubic.easeOut";
        this.buildingBounceTweenDuration = 150;

        // audio
        this.popSound = this.scene.sound.add("audio_pop", {
            loop: false,
            volume: 1 // Adjust volume as needed
        });

        this.upgradeSound = this.scene.sound.add("audio_upgrade", {
            loop: false,
            volume: 1 // Adjust volume as needed
        });

        // Define sprites for each level
        this.levelSprites = [
            "buildingLevel1", // Sprite key for level 1
            "buildingLevel2"  // Sprite key for level 2
        ];

        // Create the building sprite based on the initial level
        this.buildingSprite = scene.add.sprite(0, 0, this.levelSprites[this.level - 1]).setScale(0.1).setOrigin(0.5, 1);
        this.add(this.buildingSprite);
        this.scene.tweens.add({
            targets: this.buildingSprite,
            scale: this.scale,
            duration: 300,
            ease: "Back.easeOut",
        });

        // create particle fx
        this.starEmitter = this.scene.add.particles(x - 70, y - 400, "star", {
            lifespan: 800,
            speed: { min: 450, max: 650 },
            scale: { start: 0.1, end: 0.4 },
            alpha: { start: 1, end: 0.2 },
            blendMode: Phaser.BlendModes.NORMAL,
            duration: 470,
            emitting: false
        });

        this.moneyEmitter = this.scene.add.particles(x - 70, y - 400, "singleDollar", {
            lifespan: 800,
            speed: { min: 150, max: 650 },
            scale: { start: 0.1, end: 1 },
            alpha: { start: 1, end: 0.2 },
            blendMode: Phaser.BlendModes.NORMAL,
            rotate: { min: 0, max: 360 },
            emitting: false
        });

        this.lightEmitter = this.scene.add.particles(0, 0, "lightColumn" ,{
            x: { min: this.x - 500, max: this.x + 400 },
            y: { min: this.y - 500, max: this.y + 200 },
            quantity: 1,
            lifespan: 400,
            speedY: { min: -200, max: -600 },
            scale: { min: 0.3, max: 1 },
            alpha: { start: 0.9, end: 0.1 },
            blendMode: Phaser.BlendModes.NORMAL,
            frequency: -1 // Disable automatic emission
        });

        this.starEmitter.setDepth(1);
        this.moneyEmitter.setDepth(1);
        this.lightEmitter.setDepth(1);

        // Add this container to the scene
        scene.add.existing(this);
    }

    levelUp() {
        this.popSound.play();
        this.upgradeSound.play();

        if (this.level < this.levelSprites.length) {
            // Increment level
            this.level += 1;

            // Update sprite to match the new level
            this.buildingSprite.setTexture(this.levelSprites[this.level - 1]).setScale(0.1);
            this.scene.tweens.add({
                targets: this.buildingSprite,
                scale: this.scale,
                duration: 500,
                ease: "Back.easeOut",
            });

            this.lightEmitter.explode(10);

        } else {
            console.log("Already at max level.");
        }
    }

    bounceBuilding()
    {
        this.scene.tweens.add({
            targets: this.buildingSprite,
            scale: this.scene.interBuilding1Scale + this.scene.interBuilding1Scale * 0.1,
            duration: this.buildingBounceTweenDuration,
            ease: this.buildingBounceTween,
            onComplete: () => {
                this.tweenBuildingBack();
            }
        });

        this.starEmitter.start(45);
        this.moneyEmitter.explode(15);
    }

    tweenBuildingBack()
    {
        this.scene.tweens.add({
            targets: this.buildingSprite,
            scale: this.scene.interBuilding1Scale,
            duration: this.buildingBounceTweenDuration,
            ease: this.buildingBounceTween,
        });
    }
}
