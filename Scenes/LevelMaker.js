class LevelMaker extends Phaser.Scene
{
    constructor() {
        super('levelMaker');
    }

    create()
    {
        //game.resizeGame();

        // json reader
        this.levelMakerData = this.cache.json.get('levelMakerConfig');

        // config parameters
        this.linkGame = this.levelMakerData.linkGame;

        var gameLogoXFactor = this.levelMakerData.gameLogo.xFactor;
        this.gameLogoX = this.scale.width / 2 + gameLogoXFactor;
        this.gameLogoY = this.levelMakerData.gameLogo.y;

        var downloadBtnXFactor = this.levelMakerData.downloadBtn.xFactor;
        this.downloadBtnX = this.scale.width / 2 + downloadBtnXFactor;
        this.downloadBtnY = this.levelMakerData.downloadBtn.y;
        this.downloadBtnText = this.levelMakerData.downloadBtn.text;
        this.downloadBtnFontSize = this.levelMakerData.downloadBtn.fontSize;
        this.downloadBtnTextYOffset = this.levelMakerData.downloadBtn.textYOffset;
        var downloadBtnScaleFactor = this.levelMakerData.downloadBtn.scaleFactor;
        this.downloadBtnScale = this.scale.height / downloadBtnScaleFactor;

        this.catX = this.levelMakerData.cat.x;
        var catTweenToXFactor = this.levelMakerData.cat.tweenToXFactor;
        this.catTweenToX = this.scale.width / 2 + catTweenToXFactor;
        var catYFactor = this.levelMakerData.cat.yFactor;
        this.catY = this.scale.height / catYFactor;
        this.catScale = this.levelMakerData.cat.scale;
        this.tweenCatEase = this.levelMakerData.cat.tweenCatEase;
        this.tweenCatDuration = this.levelMakerData.cat.tweenCatDuration;

        this.speechBubble1X = this.levelMakerData.speechBubble1.x;
        var speechBubble1YFactor = this.levelMakerData.speechBubble1.yFactor;
        this.speechBubble1Y = this.scale.height / speechBubble1YFactor - 450;
        this.speechBubble1ScaleFrom = this.levelMakerData.speechBubble1.scaleFrom;
        this.speechBubble1ScaleTo = this.levelMakerData.speechBubble1.scaleTo;
        this.speechBubble1ScaleDuration = this.levelMakerData.speechBubble1.scaleDuration;
        this.speechBubbleSizeTweenEase = this.levelMakerData.speechBubble1.speechBubbleSizeTweenEase;

        this.speechBubble2X = this.levelMakerData.speechBubble2.x;
        var speechBubble2YFactor = this.levelMakerData.speechBubble2.yFactor;
        this.speechBubble2Y = this.scale.height / speechBubble2YFactor - 450;
        this.speechBubble2ScaleFrom = this.levelMakerData.speechBubble2.scaleFrom;
        this.speechBubble2ScaleTo = this.levelMakerData.speechBubble2.scaleTo;
        this.speechBubble2ScaleDuration = this.levelMakerData.speechBubble2.scaleDuration;
        this.speechBubble2SizeTweenEase = this.levelMakerData.speechBubble1.speechBubbleSizeTweenEase;

        this.bubbleMoneyX = this.levelMakerData.bubbleMoney.x;
        this.bubbleMoneyY = this.levelMakerData.bubbleMoney.y;
        this.bubbleMoney2X = this.levelMakerData.bubbleMoney.x2;
        this.bubbleMoney2Y = this.levelMakerData.bubbleMoney.y2;
        this.bubbleMoney3X = this.levelMakerData.bubbleMoney.x3;
        this.bubbleMoney3Y = this.levelMakerData.bubbleMoney.y3;
        this.bubbleTimerDuration = this.levelMakerData.bubbleMoney.timerDuration;
        this.moneyScale = this.levelMakerData.bubbleMoney.moneyScale;

        var pointerXFactor = this.levelMakerData.pointer.xFactor;
        this.pointerX = this.speechBubble1X + pointerXFactor;
        // var pointerYFactor = this.levelMakerData.pointer.yFactor;
        // this.pointerY = this.scale.height / pointerYFactor;
        this.pointerY = this.levelMakerData.pointer.y;
        this.pointerScaleStart = this.levelMakerData.pointer.scaleStart;
        this.pointerScaleStartDuration = this.levelMakerData.pointer.scaleStartDuration;
        this.pointerScaleTo = this.levelMakerData.pointer.scaleTo;
        this.pointerScaleBackTo = this.levelMakerData.pointer.scaleBackTo;
        this.pointerScaleDuration = this.levelMakerData.pointer.scaleDuration;
        this.pointerSizeTweenEase = this.levelMakerData.pointer.sizeTweenEase;
        this.pointerBubbleOffsetX = this.levelMakerData.pointer.bubbleOffsetX;
        this.pointerBubbleOffsetY = this.levelMakerData.pointer.bubbleOffsetY;
        this.pointerDownloadBtnOffsetX = this.levelMakerData.pointer.downloadBtnOffsetX;
        this.pointerDownloadBtnOffsetY = this.levelMakerData.pointer.downloadBtnOffsetY;

        // money panel config
        var moneyPanelXFactor = this.levelMakerData.moneyPanel.moneyPanelXFactor;
        this.moneyPanelX = this.scale.width / moneyPanelXFactor;
        this.moneyPanelY = this.levelMakerData.moneyPanel.moneyPanelY;
        this.moneyPanelScaleX = this.levelMakerData.moneyPanel.moneyPanelScaleX;
        this.moneyPanelScaleY = this.levelMakerData.moneyPanel.moneyPanelScaleY;

        // the icon in the panel
        this.moneyIconX = this.moneyPanelX + this.levelMakerData.moneyPanel.moneyIconXFactor;
        var moneyIconYFactor = this.levelMakerData.moneyPanel.moneyIconYFactor;
        this.moneyIconY = this.moneyPanelY - moneyIconYFactor;
        this.moneyIconScale = this.levelMakerData.moneyPanel.moneyIconScale;

        // the $
        var moneyUnitXFactor = this.levelMakerData.moneyPanel.moneyUnitXFactor;
        this.moneyUnitX = this.moneyPanelX - moneyUnitXFactor;
        var moneyUnitYFactor = this.levelMakerData.moneyPanel.moneyUnitYFactor;
        this.moneyUnitY = this.moneyPanelY - moneyUnitYFactor;

        // the money player got
        var moneyLabelXFactor = this.levelMakerData.moneyPanel.moneyLabelXFactor;
        this.moneyLabelX = this.moneyPanelX + moneyLabelXFactor;
        var moneyLabelYFactor = this.levelMakerData.moneyPanel.moneyLabelYFactor;
        this.moneyLabelY = this.moneyPanelY - moneyLabelYFactor;

        this.moneyFont = this.levelMakerData.moneyPanel.moneyFont;
        this.moneyFontColor = this.levelMakerData.moneyPanel.moneyFontColor;

        // interactable buildings
        this.hammerX = this.levelMakerData.hammer.x;
        this.hammerY = this.levelMakerData.hammer.y;
        this.hammer2X = this.levelMakerData.hammer.x2;
        this.hammer2Y = this.levelMakerData.hammer.y2;
        this.hammerScale = this.levelMakerData.hammer.scale;
        this.tweenHitAngle = this.levelMakerData.hammer.tweenHitAngle;
        this.tweenHitDuration = this.levelMakerData.hammer.tweenHitDuration;
        this.tweenHammerEase = this.levelMakerData.hammer.tweenHammerEase;
        this.vanishDuration = this.levelMakerData.hammer.vanishDuration;

        this.housePrice = this.levelMakerData.interBuildings.housePrice;

        this.interBuilding1X = this.levelMakerData.interBuildings.interBuilding1X;
        this.interBuilding1Y = this.levelMakerData.interBuildings.interBuilding1Y;
        this.interBuilding1Scale = this.levelMakerData.interBuildings.interBuilding1Scale;

        this.interBuilding2X = this.levelMakerData.interBuildings.interBuilding2X;
        this.interBuilding2Y = this.levelMakerData.interBuildings.interBuilding2Y;
        this.interBuilding2Scale = this.levelMakerData.interBuildings.interBuilding2Scale;

        this.interBuilding3X = this.levelMakerData.interBuildings.interBuilding3X;
        this.interBuilding3Y = this.levelMakerData.interBuildings.interBuilding3Y;
        this.interBuilding3Scale = this.levelMakerData.interBuildings.interBuilding3Scale;

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

        // Background
        this.background = this.add.image(this.scale.width / 2 + 45, this.scale.height / 2, "background");
        this.background.setScale(1.38);

        // interactable buildings
        // Buliding(scene, x, y, scale, level = 1, mode = 1)
        this.interBuilding1 = new Building(this, this.interBuilding1X, this.interBuilding1Y, this.interBuilding1Scale, 1, 1);

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
        Align.scaleToGameW(this.gameLogo, 0.15)
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

        // anchor


    }

    update()
    {
        //game.scale.pageAlignHorizontally = true;
        //game.scale.pageAlignVertically = true;
        
        game.resizeGame();
        //game.scale.refresh();

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

                // Building(scene, x, y, scale, level = 1, mode = 1)
                this.interBuilding2 = new Building(this, this.interBuilding2X, this.interBuilding2Y, this.interBuilding2Scale, 1, 2);
                // TimerCircle(scene, x, y, duration, spriteKey, onCompleteSpriteKey, onCompleteSpriteScale = 1, onCompleteGlowKey, mode = 1, building)
                this.timerCircle2 = new TimerCircle(this, this.bubbleMoney2X, this.bubbleMoney2Y, 
                                                1, "speechBubbleMoney", "moneySingle", this.moneyScale, "glow",
                                                2,
                                                this.interBuilding2
                                                );

                // pointer
                this.pointer.x = this.bubbleMoney2X + this.pointerBubbleOffsetX;
                this.pointer.y = this.bubbleMoney2Y + this.pointerBubbleOffsetY;
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

                // Building(scene, x, y, scale, level = 1, mode = 1)
                this.interBuilding3 = new Building(this, this.interBuilding3X, this.interBuilding3Y, this.interBuilding3Scale, 1, 3);
                // TimerCircle(scene, x, y, duration, spriteKey, onCompleteSpriteKey, onCompleteSpriteScale = 1, onCompleteGlowKey, mode = 1, building)
                this.timerCircle3 = new TimerCircle(this, this.bubbleMoney3X, this.bubbleMoney3Y, 
                                                1, "speechBubbleMoney", "moneySingle", this.moneyScale, "glow",
                                                4,
                                                this.interBuilding3
                                                );
                
                // pointer
                this.pointer.x = this.bubbleMoney3X + this.pointerBubbleOffsetX;
                this.pointer.y = this.bubbleMoney3Y + this.pointerBubbleOffsetY;
                this.pointer.setVisible(true);
            });
            
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
        this.pointer.x = this.bubbleMoneyX + this.pointerBubbleOffsetX;
        this.pointer.y = this.bubbleMoneyY + this.pointerBubbleOffsetY;
        this.pointer.setDepth(1);
    }

    createMoneyPanel()
    {
        this.moneyTotal = 0;

        this.moneyPanelSet = this.add.container(0, 0);

        // the panel sprite
        this.moneyPanel = this.add.image(this.moneyPanelX, this.moneyPanelY, "moneyPanel");
        this.moneyPanel.setScale(this.moneyPanelScaleX, this.moneyPanelScaleY);
        this.moneyPanelSet.add(this.moneyPanel);

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
        this.gameLogo.y = this.gameLogo.y + 100;
        Align.scaleToGameW(this.gameLogo, 0.25)

        this.downloadBtn.x = this.scale.width / 2;
        this.downloadBtn.y = this.scale.height - this.downloadBtnY;
        this.downloadBtn.setScale(1.3);

        this.pointer.setVisible(true);
        this.pointer.x = this.downloadBtn.x + this.pointerDownloadBtnOffsetX;
        this.pointer.y = this.downloadBtn.y + this.pointerDownloadBtnOffsetY;
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

