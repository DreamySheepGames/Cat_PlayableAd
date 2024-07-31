class Building extends Phaser.GameObjects.Container {
    constructor(scene, x, y, scale, level = 1) {
        super(scene, x, y);

        this.scene = scene;
        this.level = level;
        this.scale = scale;

        // config parameter
        this.buildingBounceTween = "Cubic.easeOut";
        this.buildingBounceTweenDuration = 150;

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

        // Add this container to the scene
        scene.add.existing(this);
    }

    levelUp() {
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
