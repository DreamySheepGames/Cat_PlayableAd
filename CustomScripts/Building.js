class Building extends Phaser.GameObjects.Container {
    constructor(scene, x, y, scale, level = 1, mode = 1) {
        super(scene, x, y);

        this.x = x;
        this.y = y;
        this.scene = scene;
        this.level = level;
        this.scale = scale;
        this.mode = mode;                   // 1: dryer, 2: resting area, 3: shredder

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
            "Dryer_upgrades1/Dryer_upgrades1_00", // Sprite key for level 1
            "Dryer_upgrades2/Dryer_upgrades2_00"  // Sprite key for level 2
        ];

        this.levelRestingAreaSprites = [
            "RestingArea_upgrades1/RestingArea_upgrades1_00", // Sprite key for level 1
            "RestingArea_upgrades2/RestingArea_upgrades2_00"  // Sprite key for level 2
        ];

        this.levelShredderSprites = [
            "Shredder_upgrades2/Shredder_upgrades2_00", // Sprite key for level 1
            "Shredder_upgrades2/Shredder_upgrades2_00"  // Sprite key for level 2
        ];


        // create animations
        if (this.scene && this.scene.anims) {
            // DRYER
            // Create the initial animation (frames 0 to 29)
            this.scene.anims.create({
                key: 'dryerNormal',
                frames: this.scene.anims.generateFrameNames('dryer', {
                    prefix: 'Dryer_upgrades1/Dryer_upgrades1_',
                    suffix: ".png",
                    start: 0,
                    end: 43,
                    zeroPad: 2
                }),
                frameRate: 24, // Adjust as needed
                repeat: -1    // Do not repeat
            });

            // Create the initial upgrade animation (frames 0 to 29)
            this.scene.anims.create({
                key: 'dryerUpgraded',
                frames: this.scene.anims.generateFrameNames('dryer', {
                    prefix: 'Dryer_upgrades2/Dryer_upgrades2_',
                    suffix: ".png",
                    start: 0,
                    end: 29,
                    zeroPad: 2
                }),
                frameRate: 24, // Adjust as needed
                repeat: 0    // Repeat indefinitely
            });

            // Create the upgrade loop animation (frames 30 to 75)
            this.scene.anims.create({
                key: 'dryerUpgradedLoop',
                frames: this.scene.anims.generateFrameNames('dryer', {
                    prefix: 'Dryer_upgrades2/Dryer_upgrades2_',
                    suffix: ".png",
                    start: 30,
                    end: 75,
                    zeroPad: 2
                }),
                frameRate: 24, // Adjust as needed
                repeat: -1    // Repeat indefinitely
            });

            // RESTING AREA
            this.scene.anims.create({
                key: 'restingAreaNormal',
                frames: this.scene.anims.generateFrameNames('restingArea', {
                    prefix: 'RestingArea_upgrades1/RestingArea_upgrades1_',
                    suffix: ".png",
                    start: 0,
                    end: 99,
                    zeroPad: 2
                }),
                frameRate: 24, // Adjust as needed
                repeat: -1    // Do not repeat
            });

            // Create the upgrade loop animation (frames 30 to 75)
            this.scene.anims.create({
                key: 'restingAreaUpgradedLoop',
                frames: this.scene.anims.generateFrameNames('restingArea', {
                    prefix: 'RestingArea_upgrades2/RestingArea_upgrades2_',
                    suffix: ".png",
                    start: 0,
                    end: 99,
                    zeroPad: 2
                }),
                frameRate: 24, // Adjust as needed
                repeat: -1    // Repeat indefinitely
            });

            // SHREDDER
            // Create the initial animation (frames 0 to 29)
            this.scene.anims.create({
                key: 'shredderNormal',
                frames: this.scene.anims.generateFrameNames('shredder', {
                    prefix: 'Shredder_upgrades1/Shredder_upgrades1_',
                    suffix: ".png",
                    start: 0,
                    end: 59,
                    zeroPad: 2
                }),
                frameRate: 24, // Adjust as needed
                repeat: -1    // Do not repeat
            });

            // Create the initial upgrade animation (frames 0 to 29)
            this.scene.anims.create({
                key: 'shredderUpgraded',
                frames: this.scene.anims.generateFrameNames('shredder', {
                    prefix: 'Shredder_upgrades2/Shredder_upgrades2_',
                    suffix: ".png",
                    start: 0,
                    end: 35,
                    zeroPad: 2
                }),
                frameRate: 24, // Adjust as needed
                repeat: 0    // Repeat indefinitely
            });

            // Create the upgrade loop animation (frames 30 to 75)
            this.scene.anims.create({
                key: 'shredderUpgradedLoop',
                frames: this.scene.anims.generateFrameNames('shredder', {
                    prefix: 'Shredder_upgrades2/Shredder_upgrades2_',
                    suffix: ".png",
                    start: 36,
                    end: 139,
                    zeroPad: 2
                }),
                frameRate: 24, // Adjust as needed
                repeat: -1    // Repeat indefinitely
            });
        } else {
            console.error('Scene context or animations are not available.');
        }

        // Create the building sprite based on the initial level
        switch (this.mode)
        {
            case 1:
                this.buildingSprite = scene.add.sprite(0, 0, 'dryer', this.levelSprites[this.level - 1]).setScale(1).setOrigin(0.65, 0.6);
                break;

            case 2:
                this.buildingSprite = scene.add.sprite(0, 0, 'restingArea', this.levelRestingAreaSprites[this.level - 1]).setScale(1).setOrigin(0.35, 0.6);
                break;

            case 3:
                this.buildingSprite = scene.add.sprite(0, 0, 'shredder', this.levelShredderSprites[this.level - 1]).setScale(1).setOrigin(0.4, 0.8);
                break;
        }

        this.add(this.buildingSprite);
        this.scene.tweens.add({
            targets: this.buildingSprite,
            scale: this.scale,
            duration: 300,
            ease: "Back.easeOut",
        });

        // Play animation based on the level of the buildings
        switch (this.mode)
        {
            case 1:
                this.buildingSprite.play('dryerNormal');
                break;

            case 2:
                this.buildingSprite.play('restingAreaNormal');
                //this.buildingSprite = scene.add.sprite(0, 0, 'restingArea1', "RestingArea_upgrades1_00").setScale(1).setOrigin(0.65, 0.6);
                break;

            case 3:
                this.buildingSprite.play('shredderNormal');
                break;
        }

        // listener to change from the upgrade anim to loop anim
        this.buildingSprite.on('animationcomplete-dryerUpgraded', () => {
            this.buildingSprite.play('dryerUpgradedLoop');
        });
        this.buildingSprite.on('animationcomplete-shredderUpgraded', () => {
            this.buildingSprite.play('shredderUpgradedLoop');
        });

        // PARTICLE FX
        this.starEmitter = this.scene.add.particles(x, y - 400, "star", {
            lifespan: 800,
            speed: { min: 450, max: 650 },
            scale: { start: 0.1, end: 0.4 },
            alpha: { start: 1, end: 0.2 },
            blendMode: Phaser.BlendModes.NORMAL,
            duration: 470,
            emitting: false
        });

        this.moneyEmitter = this.scene.add.particles(x, y - 400, "singleDollar", {
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
            switch (this.mode)
            {
                case 1:
                    this.buildingSprite.setTexture(this.levelSprites[this.level - 1]).setScale(0.1);
                    this.buildingSprite.play("dryerUpgraded");
                    break;

                case 2:
                    this.buildingSprite.setTexture(this.levelRestingAreaSprites[this.level - 1]).setScale(0.1);
                    this.buildingSprite.play("restingAreaUpgradedLoop");
                    break;

                case 3:
                    this.buildingSprite.setTexture(this.levelRestingAreaSprites[this.level - 1]).setScale(0.1);
                    this.buildingSprite.play("shredderUpgraded");
                    break;
            }
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
            scale: this.scale + this.scale * 0.1,
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
            scale: this.scale,
            duration: this.buildingBounceTweenDuration,
            ease: this.buildingBounceTween,
        });
    }
}
