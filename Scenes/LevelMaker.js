class LevelMaker extends Phaser.Scene
{
    constructor() {
        super('levelMaker');
    }

    create()
    {
        // config parameters
        this.linkGame = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

        this.gameLogoX = this.scale.width / 4;
        this.gameLogoY = 300
        this.gameLogoScale = this.scale.height / 5000;

        this.downloadBtnX = this.scale.width / 4 * 2.75;
        this.downloadBtnY = 300;
        this.downloadBtnText = "DOWNLOAD";
        this.downloadBtnFontSize = 100;
        this.downloadBtnTextYOffset = 30;
        this.downloadBtnScale = this.scale.height / 350;

        this.catX = -1000;
        this.catTweenToX = this.scale.width / 4;
        this.catY = this.scale.height / 4 * 2.5;
        this.catScale = 0.45;
        this.tweenCatEase = "Cubic.easeOut";
        this.tweenCatDuration = 800;

        this.speechBubble1X = 700;
        this.speechBubble1Y = this.scale.height / 4 * 2.5 - 450;
        this.speechBubble1ScaleFrom = 0.1;
        this.speechBubble1ScaleTo = 1.8;
        this.speechBubble1ScaleDuration = 500;
        this.speechBubbleSizeTweenEase = "Back.easeOut";

        this.speechBubble2X = 700;
        this.speechBubble2Y = this.scale.height / 4 * 2.5 - 450;
        this.speechBubble2ScaleFrom = 0.1;
        this.speechBubble2ScaleTo = 1.8;
        this.speechBubble2ScaleDuration = 500;
        this.speechBubble2SizeTweenEase = "Back.easeOut";

        this.bubbleMoneyX = 1025;
        this.bubbleMoneyY = 2050;
        this.bubbleMoney2X = 235;
        this.bubbleMoney2Y = 1550;
        this.bubbleMoney3X = 1030;
        this.bubbleMoney3Y = 1150;
        this.bubbleMoneyScaleFrom = 0.1;
        this.bubbleMoneyScaleTo = 1;
        this.bubbleMoneyScaleDuration = 500;
        this.bubbleMoneySizeTweenEase = "Back.easeOut";
        this.bubbleTimerDuration = 2;
        this.moneyScale = 0.3;

        this.pointerX = this.speechBubble1X + 500;
        this.pointerY = this.scale.height / 2;
        this.pointerScaleStart = 0.1;
        this.pointerScaleStartDuration = 300;
        this.pointerScaleTo = 1;
        this.pointerScaleBackTo = 0.8;
        this.pointerScaleDuration = 600;
        this.pointerSizeTweenEase = "Back.easeOut";

        // money panel config
        this.moneyPanelX = this.scale.width / 2;
        this.moneyPanelY = 650;

        // the icon in the panel
        this.moneyIconX = 250;
        this.moneyIconY = this.moneyPanelY - 30;
        this.moneyIconScale = 0.15;

        // the $
        this.moneyUnitX = this.moneyPanelX - 250;
        this.moneyUnitY = this.moneyPanelY - 70;

        // the money player got
        this.moneyLabelX = this.moneyPanelX + 150;
        this.moneyLabelY = this.moneyPanelY - 70;

        this.moneyFont = "150px Arial";
        this.moneyFontColor = "#278664";

        // interactable buildings
        this.housePrice = 400;

        this.hammerX = 100;
        this.hammerY = 2000;
        this.hammer2X = 800;
        this.hammer2Y = 1600;
        this.hammerScale = 0.8;
        this.tweenHitAngle = 45;
        this.tweenHitDuration = 200;
        this.tweenHammerEase = "Linear"
        this.vanishDuration = 100;

        this.interBuilding1X = 1100;
        this.interBuilding1Y = 2800;
        this.interBuilding1Scale = 2;

        this.interBuilding2X = 320;
        this.interBuilding2Y = 2300;
        this.interBuilding2Scale = 2;

        this.interBuilding3X = 1120;
        this.interBuilding3Y = 1900;
        this.interBuilding3Scale = 2;

        // audio
        this.bgTheme = this.sound.add("audio_bgTheme", {
            loop: true,
            volume: 1 // Adjust volume as needed
        });
        this.bgTheme.play();

        this.winningSound = this.sound.add("audio_winning", {
            loop: false,
            volume: 1 // Adjust volume as needed
        });

        // isometric sprites
        // Create a group for isometric tiles, this is only for decoration at the top of the screen
        this.isometricTilesGroup = this.add.group();

        this.isometricTileScale = 8;
        this.isometricTileOffsetX = 250;
        this.isometricTileOffsetY = -800;

        // custom isometric sprites (ground sprite, building sprite, buiding offset x, building offset y, buiding scale, tile scale)
        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "houseSmallBlueA", 10, -10, 1, this.isometricTileScale)
        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "houseSmallBlueA", 10, -10, 1, this.isometricTileScale)
        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "houseSmallBlueA", 10, -10, 1, this.isometricTileScale)
        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "houseSmallBlueA", 10, -10, 1, this.isometricTileScale)
        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "houseSmallBlueA", 10, -10, 1, this.isometricTileScale)
        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "houseSmallBlueA", 10, -10, 1, this.isometricTileScale)
        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "houseSmallYellowA", 10, -10, 1, this.isometricTileScale)
        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "houseSmallYellowA", 10, -10, 1, this.isometricTileScale)
        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "houseSmallBlueA", 10, -10, 1, this.isometricTileScale)
        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "houseSmallYellowA", 10, -10, 1, this.isometricTileScale)
        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "houseSmallYellowA", 10, -10, 1, this.isometricTileScale)
        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "houseSmallYellowA", 10, -10, 1, this.isometricTileScale)
        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "houseSmallBlueA", 10, -10, 1, this.isometricTileScale)
        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "houseSmallBlueA", 10, -10, 1, this.isometricTileScale)

        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "churchA", 12, -15, 0.7, this.isometricTileScale)
        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "houseSmallYellowA", 10, -10, 1, this.isometricTileScale)
        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "autoShopA", 10, -10, 0.75, this.isometricTileScale)
        this.createIsometricTile(this.isometricTilesGroup, "ground_grass", "houseSmallBlueA", 10, -10, 1, this.isometricTileScale)

        // this is only for getting the ground texture dimension
        this.groundGrassTileTexture = this.textures.get("ground_grass").getSourceImage();

        this.createIsometricGrid(this.isometricTilesGroup,                                          // group
                                 3,                                                                 // rows
                                 6,                                                                 // column
                                 this.groundGrassTileTexture.width * this.isometricTileScale,       // tile width
                                 this.groundGrassTileTexture.height * this.isometricTileScale,      // tile height
                                 this.isometricTileOffsetX, this.isometricTileOffsetY               // grid offset parameters
        );

        // INTERACTIVE TILE SPRITES (the tiles we build the 3 buildings)
        this.isometricTilesGroupInteractive = this.add.group();
        this.isometricTileInteractiveScale = 10;
        this.isometricTileInteractiveOffsetX = 250;
        this.isometricTileInteractiveOffsetY = 1200;
        this.isometricTileInteractivePadding = 250;

        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass_damaged", "treeCommon01", 0, -10, 0.5, this.isometricTileInteractiveScale)
        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass_damaged", "treeCommon01", 0, -10, 0.5, this.isometricTileInteractiveScale)
        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass_damaged", "treeCommon01", 0, -10, 0.5, this.isometricTileInteractiveScale)
        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass_damaged", "treeCommon01", 0, -10, 0.5, this.isometricTileInteractiveScale)

        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass_damaged", "treeCommon01", 0, -10, 0.5, this.isometricTileInteractiveScale)
        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass_damaged", "treeCommon01", 0, -10, 0.5, this.isometricTileInteractiveScale)
        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass_damaged", "treeCommon01", 0, -10, 0.5, this.isometricTileInteractiveScale)
        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass_damaged", "treeCommon01", 0, -10, 0.5, this.isometricTileInteractiveScale)

        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass_damaged", "treeCommon01", 0, -10, 0.5, this.isometricTileInteractiveScale)
        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass_damaged", "treeCommon01", 0, -10, 0.5, this.isometricTileInteractiveScale)
        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass", "policeStationB", 10, -10, 0.5, this.isometricTileInteractiveScale)
        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass", "waterTowerA", 10, -10, 0.5, this.isometricTileInteractiveScale)


        // this is to get the ground texture dimension
        this.groundGrassDamagedTileTexture = this.textures.get("ground_grass_damaged").getSourceImage();
        
        this.createIsometricGrid(this.isometricTilesGroupInteractive,
                                 3,                                                                                                                     // rows
                                 4,                                                                                                                     // column
                                 this.groundGrassDamagedTileTexture.width * this.isometricTileInteractiveScale + this.isometricTileInteractivePadding,  // tile width
                                 this.groundGrassDamagedTileTexture.height * this.isometricTileInteractiveScale + this.isometricTileInteractivePadding, // tile height
                                 this.isometricTileInteractiveOffsetX, this.isometricTileInteractiveOffsetY                                             // grid offset parameters
        );

        // vehicles and probs
        this.add.image(140, 850, "carWhiteA").setScale(4);
        this.add.image(900, 2040, "carYellowB").setScale(4);
        this.add.image(620, 750, "schoolBusB").setScale(4);

        // interactable buildings
        
        //Buliding(scene, x, y, scale, level = 1)
        this.interBuilding1 = new Building(this, this.interBuilding1X, this.interBuilding1Y, this.interBuilding1Scale, 1);

        // Create a semi black rectangle that covers the entire game screen
        this.createDarkLayer();

        // UI
        this.cat;
        this.bubbleSpeech1;
        this.bubbleSpeech2;
        this.bubbleMoney;
        this.pointer;

        // Create a UI layer
        this.uiLayer = this.add.container(0, 0);

        // Add UI elements to the UI layer
        // Game logo
        this.gameLogo = this.add.image(this.gameLogoX, this.gameLogoY, "gameLogo");
        //this.gameLogo.setScale(this.gameLogoScale);
        Align.scaleToGameW(this.gameLogo, 0.2)
        this.uiLayer.add(this.gameLogo);

        // buttons
        this.downloadBtn = new CustomButton(this, this.downloadBtnX, this.downloadBtnY, "button", "buttonPressed", 
                                            this.downloadBtnText, this.downloadBtnFontSize, this.downloadBtnTextYOffset, this.downloadBtnScale);

        this.downloadBtn.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            window.open(this.linkGame, "_blank"); ;
        })
        this.uiLayer.add(this.downloadBtn);

        // 3 timer bubble for 3 buildings
        this.timerCircleGroup = this.add.group();
        this.timerCircle;
        this.timerCircle2;
        this.timerCircle3;

        // character
        this.createCat();

        // money panel
        this.createMoneyPanel();
    }

    update()
    {
        this.checkBuilding2();
        this.checkBuilding3();
    }

    checkBuilding2()
    {
        if (this.isInterBuilding2 == undefined && this.moneyLabel.text >= 600)
        {
            //Hammer(scene, x, y, scale, texture, tweenHitAngle, tweenHitDuration, tweenEase, vanishDuration)
            let hammer = new Hammer(this, this.hammerX, this.hammerY, this.hammerScale, "hammer",
                                    this.tweenHitAngle, this.tweenHitDuration, this.tweenHammerEase, 
                                    this.vanishDuration);
            hammer.hit();

            this.isInterBuilding2 = true;

            // create building 2 after hammer1 hit
            this.time.delayedCall(this.tweenHitDuration * 2 + this.vanishDuration, () => {
                this.moneyTotal -= this.housePrice;
                this.moneyLabel.text = this.moneyTotal;

                // Building(scene, x, y, scale, level = 1)
                this.interBuilding2 = new Building(this, this.interBuilding2X, this.interBuilding2Y, this.interBuilding2Scale, 1);
                // TimerCircle(scene, x, y, duration, spriteKey, onCompleteSpriteKey, onCompleteSpriteScale = 1, onCompleteGlowKey, mode = 1, building)
                this.timerCircle2 = new TimerCircle(this, this.bubbleMoney2X, this.bubbleMoney2Y, 
                                                1, "speechBubbleMoney", "moneySingle", this.moneyScale, "glow",
                                                2,
                                                this.interBuilding2
                                                );

                // pointer
                this.pointer.x = this.bubbleMoney2X + 70;
                this.pointer.y = this.bubbleMoney2Y + 80;
                this.pointer.setVisible(true);
            });
            
        }
    }

    checkBuilding3()
    {
        if (this.isInterBuilding3 == undefined && this.moneyLabel.text >= 600 && this.interBuilding2 != undefined && this.interBuilding2.level == 2)
        {
            //Hammer(scene, x, y, scale, texture, tweenHitAngle, tweenHitDuration, tweenEase, vanishDuration)
            let hammer2 = new Hammer(this, this.hammer2X, this.hammer2Y, this.hammerScale, "hammer",
                                    this.tweenHitAngle, this.tweenHitDuration, this.tweenHammerEase, 
                                    this.vanishDuration);
            hammer2.hit();
            
            this.isInterBuilding3 = true;

            // create building 3 after hammer2 hit
            this.time.delayedCall(this.tweenHitDuration * 2 + this.vanishDuration, () => {
                this.moneyTotal -= this.housePrice;
                this.moneyLabel.text = this.moneyTotal;

                // Building(scene, x, y, scale, level = 1)
                this.interBuilding3 = new Building(this, this.interBuilding3X, this.interBuilding3Y, this.interBuilding3Scale, 1);
                // TimerCircle(scene, x, y, duration, spriteKey, onCompleteSpriteKey, onCompleteSpriteScale = 1, onCompleteGlowKey, mode = 1, building)
                this.timerCircle3 = new TimerCircle(this, this.bubbleMoney3X, this.bubbleMoney3Y, 
                                                1, "speechBubbleMoney", "moneySingle", this.moneyScale, "glow",
                                                4,
                                                this.interBuilding3
                                                );
                
                // pointer
                this.pointer.x = this.bubbleMoney3X + 70;
                this.pointer.y = this.bubbleMoney3Y + 80;
                this.pointer.setVisible(true);
            });
            
        }
    }

    createIsometricTile(group, ground, building, buildingOffsetX, buildingOffsetY, buildingScale, scale) {
        let isometricTile = new CustomIsometricSprite(this, ground, building, buildingOffsetX, buildingOffsetY, buildingScale, scale);
        group.add(isometricTile);
    }

    createIsometricGrid(group, rows, cols, tileWidth, tileHeight, offsetX, offsetY) 
    {
        let tiles = group.getChildren();

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                // calculate x, y of tile so we can set the tile at the end
                let x = (col - row) * tileWidth / 2 + offsetX;
                let y = (col + row) * tileHeight / 2 + offsetY;

                // Calculate the index for the tile in the tile group
                // for example: 3 row, 5 column:
                // x x x x x
                // o x x x x
                // x x x x x
                // the "o" is tile[5] because index = row * cols + col = 1 * 5 + 0

                let index = row * cols + col;
                
                if (index < tiles.length) {
                    let tile = tiles[index];
                    tile.setPosition(x, y);
                }
            }
        }
    }

    createDarkLayer()
    {
        this.darkOverlay = this.add.rectangle(
            this.cameras.main.width / 2,     // Center x position
            this.cameras.main.height / 2,    // Center y position
            this.cameras.main.width,         // Width of the rectangle
            this.cameras.main.height,        // Height of the rectangle
            0x000000                         // Fill color (black)
        );
        this.darkOverlay.setAlpha(0.5);
    }

    createCat()
    {
        // create and tween the cat
        this.cat = this.add.image(this.catX, this.catY, "cat");
        Align.scaleToGameW(this.cat, this.catScale)
        this.uiLayer.add(this.cat);

        this.tweens.add({
            targets: this.cat,
            x: this.catTweenToX,
            duration: this.tweenCatDuration,
            ease: this.tweenCatEase,
            repeat: 0,
            yoyo: false,
            // when done tweening the cat then create and tween the size of the speech bubble 1 and the pointer
            onComplete: () => {
                this.speechBubble1 = this.add.sprite(this.speechBubble1X, this.speechBubble1Y, "speechBubble1").setScale(this.speechBubble1ScaleFrom);
                this.uiLayer.add(this.speechBubble1);
                this.tweens.add({
                    targets: this.speechBubble1,
                    scale: this.speechBubble1ScaleTo,
                    duration: this.speechBubble1ScaleDuration,
                    ease: this.speechBubbleSizeTweenEase,
                    onComplete: () => {
                        this.createPointer();

                        this.speechBubble1.setInteractive();
        
                        // Event listener to hide all elements when tapped
                        //this.input.on('pointerdown', () => {
                        this.speechBubble1.on('pointerdown', () => {
                            this.darkOverlay.setVisible(false);
                            this.cat.setVisible(false);
                            this.speechBubble1.setVisible(false);
                            this.pointer.setVisible(false);  // Disable pointer interactions

                            this.moneyPanelSet.setVisible(true);

                            this.createMoneyBubble();
                        });
                    }
                });
            }
        });
    }

    createPointer()
    {
        this.pointer = this.add.image(this.pointerX, this.pointerY, "pointer").setScale(this.pointerScaleStart);

        this.tweens.add({
            targets: this.pointer,
            scale: this.pointerScaleTo,
            duration: this.pointerScaleStartDuration,
            ease: this.pointerSizeTweenEase,
            onComplete: () => {
                this.tweenPointerSizeDown(this.pointer);
            }
        });
    }

    tweenPointerSizeDown(pointer)
    {
        this.tweens.add({
            targets: pointer,
            scale: this.pointerScaleBackTo,
            duration:this.pointerScaleDuration,
            ease: "Linear",
            onComplete: () => {
                this.tweenPointerSizeUp(pointer);
            }
        });
    }

    tweenPointerSizeUp(pointer)
    {
        this.tweens.add({
            targets: pointer,
            scale: this.pointerScaleTo,
            duration:this.pointerScaleDuration,
            ease: "Linear",
            onComplete: () => {
                this.tweenPointerSizeDown(pointer);
            }
        });
    }

    createMoneyBubble()
    {
        // Create the TimerCircle
        // TimerCircle(scene, x, y, duration, spriteKey, onCompleteSpriteKey, onCompleteSpriteScale, onCompleteGlowKey, mode)
        this.timerCircle = new TimerCircle(this, this.bubbleMoneyX, this.bubbleMoneyY, 
                                        this.bubbleTimerDuration, "speechBubbleMoney", "moneySingle", this.moneyScale, "glow",
                                        1,
                                        this.interBuilding1
                                        );
        this.pointer.setVisible(true);
        this.pointer.x = this.bubbleMoneyX + 70;
        this.pointer.y = this.bubbleMoneyY + 80;
        this.pointer.setDepth(1);
    }

    createMoneyPanel()
    {
        this.moneyTotal = 0;

        this.moneyPanelSet = this.add.container(0, 0);

        // the panel sprite
        this.moneyPanel = this.add.image(this.moneyPanelX, this.moneyPanelY, "moneyPanel");
        this.moneyPanelSet.add(this.moneyPanel)      

        // add the icon
        this.moneyIcon = this.add.image(this.moneyIconX, this.moneyIconY, "moneyPlural").setScale(this.moneyIconScale);
        this.moneyPanelSet.add(this.moneyIcon);

        // add the $ text
        this.moneyUnitLabel = this.add.text(this.moneyUnitX,
                                        this.moneyUnitY, 
                                        "$", {font: this.moneyFont, fill: this.moneyFontColor});
        this.moneyUnitLabel.setOrigin(0.5, 0);
        this.moneyUnitLabel.align = 'center';
        this.moneyPanelSet.add(this.moneyUnitLabel);

        // add the text that shows the money player got
        this.moneyLabel = this.add.text(this.moneyLabelX,
                                        this.moneyLabelY, 
                                        "0", {font: this.moneyFont, fill: this.moneyFontColor});
        this.moneyLabel.setOrigin(0.5, 0);
        this.moneyLabel.align = 'center';
        this.moneyLabel.text = this.moneyTotal;
        this.moneyPanelSet.add(this.moneyLabel);

        this.moneyPanelSet.setVisible(false);
    }

    turnOffAllTimerCircle()
    {
        this.timerCircleGroup.clear(true, true);

        this.createCatAtTheEnd()
    }

    createCatAtTheEnd()
    {
        // audio
        this.winningSound.play();

        this.moneyPanelSet.setVisible(false);

        this.darkOverlay.setVisible(true);
        this.darkOverlay.setDepth(1);

        // particle rain
        this.createRain();

        this.gameLogo.x = this.scale.width / 2;
        Align.scaleToGameW(this.gameLogo, 0.3)

        this.downloadBtn.x = this.scale.width / 2;
        this.downloadBtn.y = this.scale.height - this.downloadBtnY;
        this.downloadBtn.setScale(1.3);

        this.pointer.setVisible(true);
        this.pointer.x = this.downloadBtn.x + 220;
        this.pointer.y = this.downloadBtn.y + 70;
        this.pointer.setScale(this.pointerScaleTo * 1.5)
        
        // create and tween the cat
        this.cat.x = this.catX;
        this.cat.y = this.catY;
        this.cat.setVisible(true);

        this.uiLayer.setDepth(1);

        this.tweens.add({
            targets: this.cat,
            x: this.catTweenToX,
            duration: this.tweenCatDuration,
            ease: this.tweenCatEase,
            repeat: 0,
            yoyo: false,
            // when done tweening the cat then create and tween the size of the speech bubble 1 and the pointer
            onComplete: () => {
                this.speechBubble2 = this.add.sprite(this.speechBubble2X, this.speechBubble2Y, "speechBubble2").setScale(this.speechBubble2ScaleFrom);
                this.uiLayer.add(this.speechBubble2);
                this.tweens.add({
                    targets: this.speechBubble2,
                    scale: this.speechBubble2ScaleTo,
                    duration: this.speechBubble2ScaleDuration,
                    ease: this.speechBubbleSizeTweenEase,
                });
            }
        });
    }

    createRain()
    {
        this.add.particles(0, -200, "star", {
            x: { min: 0, max: this.scale.width},
            quantity: 1,
            alpha: { start: 0.8, end: 0.1 },
            scale: { min: 0.1, max: 0.8 },
            blendMode: Phaser.BlendModes.NORMAL,
            lifespan: 3500,
            gravityY: 1000,
            frequency: 100,
        });

        this.add.particles(0, -200, "singleDollar", {
            x: { min: 0, max: this.scale.width},
            quantity: 1,
            alpha: { start: 0.8, end: 0.1 },
            scale: { min: 0.1, max: 1.5 },
            rotate: { min: 0, max: 360 },
            blendMode: Phaser.BlendModes.NORMAL,
            lifespan: 3500,
            gravityY: 1000,
            frequency: 100,
        });

        this.add.particles(0, -200, "party1", {
            x: { min: 0, max: this.scale.width},
            quantity: 1,
            alpha: { start: 0.8, end: 0.1 },
            scale: { min: 0.1, max: 3 },
            rotate: { min: 0, max: 360 },
            blendMode: Phaser.BlendModes.NORMAL,
            lifespan: 3500,
            gravityY: 1000,
            frequency: 100,
        });

        this.add.particles(0, -200, "party2", {
            x: { min: 0, max: this.scale.width},
            quantity: 1,
            alpha: { start: 0.8, end: 0.1 },
            scale: { min: 0.1, max: 3 },
            rotate: { min: 0, max: 360 },
            blendMode: Phaser.BlendModes.NORMAL,
            lifespan: 3500,
            gravityY: 1000,
            frequency: 100,
        });

    }
}