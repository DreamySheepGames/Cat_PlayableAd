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

        this.pointerX = this.speechBubble1X + 500;
        this.pointerY = this.scale.height / 2;
        this.pointerScaleStart = 0.1;
        this.pointerScaleStartDuration = 300;
        this.pointerScaleTo = 1;
        this.pointerScaleBackTo = 0.8;
        this.pointerScaleDuration = 600;
        this.pointerSizeTweenEase = "Back.easeOut";

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
        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass", "treeCommon01", 0, 0, 0.5, this.isometricTileInteractiveScale)
        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass_damaged", "treeCommon01", 0, -10, 0.5, this.isometricTileInteractiveScale)
        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass_damaged", "treeCommon01", 0, -10, 0.5, this.isometricTileInteractiveScale)
        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass_damaged", "treeCommon01", 0, -10, 0.5, this.isometricTileInteractiveScale)
        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass", "treeCommon01", 0, 0, 0.5, this.isometricTileInteractiveScale)

        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass", "treeCommon01", 0, 0, 0.5, this.isometricTileInteractiveScale)
        this.createIsometricTile(this.isometricTilesGroupInteractive, "ground_grass", "treeCommon01", 0, 0, 0.5, this.isometricTileInteractiveScale)
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

        // vehicles
        this.add.image(140, 850, "carWhiteA").setScale(4);
        this.add.image(900, 2040, "carYellowB").setScale(4);
        this.add.image(620, 750, "schoolBusB").setScale(4);

        // Create a semi black rectangle that covers the entire game screen
        this.createDarkLayer();

        // UI
        this.cat;
        this.bubbleSpeech1;
        this.pointer;

        // Create a UI layer
        this.uiLayer = this.add.container(0, 0);

        // Add UI elements to the UI layer
        // Game logo
        let gameLogo = this.add.image(this.gameLogoX, this.gameLogoY, "gameLogo");
        gameLogo.setScale(this.gameLogoScale);
        Align.scaleToGameW(gameLogo, 0.2)
        this.uiLayer.add(gameLogo);

        // buttons
        const downloadBtn = new CustomButton(this, this.downloadBtnX, this.downloadBtnY, "button", "buttonPressed", 
                                            this.downloadBtnText, this.downloadBtnFontSize, this.downloadBtnTextYOffset, this.downloadBtnScale);

        downloadBtn.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            window.open(this.linkGame, "_blank"); ;
        })
        this.uiLayer.add(downloadBtn);

        // character
        this.createCat();
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
                        this.input.on('pointerdown', () => {
                            this.darkOverlay.setVisible(false);
                            this.cat.setVisible(false);
                            this.speechBubble1.setVisible(false);
                            this.pointer.setVisible(false);  // Disable pointer interactions
                        });
                    }
                });
            }
        });
    }

    createPointer()
    {
        this.pointer = this.add.image(this.pointerX, this.pointerY, "pointer").setScale(this.pointerScaleStart);
        this.uiLayer.add(this.pointer);

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
}