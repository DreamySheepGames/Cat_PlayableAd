class Load extends Phaser.Scene
{
    constructor()
    {
        super("bootGame");
    }

    preload()
    {
        // UI
        this.load.image("button", "assets/UI/button.png");
        this.load.image("buttonPressed", "assets/UI/button pressed.png");
        this.load.image("gameLogo", "assets/UI/gameLogo.png");
        this.load.image("cat", "assets/Characters/cat.png");
        this.load.image("pointer", "assets/UI/pointer.png");

        // background
        this.load.image("background", "assets/background/BG.png");

        // ground tiles
        this.load.image("ground_grass", "assets/IsometricSprites/Grounds_Roads/ground_grass.png");
        this.load.image("ground_grass_damaged", "assets/IsometricSprites/Grounds_Roads/ground_grass_damaged.png");

        // road tiles
        //this.load.image("road_end_a", "assets/IsometricSprites/Grounds_Roads/road_end_a.png");

        // buildings
        this.load.image("houseSmallBlueA", "assets/IsometricSprites/Buildings/house_small_blue_a.png");
        this.load.image("houseSmallYellowA", "assets/IsometricSprites/Buildings/house_small_yellow_a.png");
        this.load.image("policeStationB", "assets/IsometricSprites/Buildings/police_station_b.png");
        this.load.image("waterTowerA", "assets/IsometricSprites/Buildings/water_tower_a.png");
        this.load.image("autoShopA", "assets/IsometricSprites/Buildings/auto_shop_a.png");
        this.load.image("churchA", "assets/IsometricSprites/Buildings/church_a.png");

        // interactive building
        this.load.image("buildingLevel1", "assets/IsometricSprites/Buildings/building_small_gray_a.png");
        this.load.image("buildingLevel2", "assets/IsometricSprites/Buildings/building_tall_blue_a.png");

        // vegetation
        this.load.image("treeCommon01", "assets/IsometricSprites/Vegetation/tree_common_01.png");

        // vehicles
        this.load.image("carWhiteA", "assets/IsometricSprites/Vehicles/car_white_a.png");
        this.load.image("carYellowB", "assets/IsometricSprites/Vehicles/car_yellow_b.png");
        this.load.image("schoolBusB", "assets/IsometricSprites/Vehicles/school_bus_b.png");

        // bubble speech
        this.load.image("speechBubble1", "assets/UI/speech_bubble_1.png");
        this.load.image("speechBubble2", "assets/UI/speech_bubble_2.png");
        this.load.image("speechBubbleCircle", "assets/UI/speechBubbleCircle.png");
        this.load.image("speechBubbleMoney", "assets/UI/bubbleMoney.png");

        // money
        this.load.image("moneySingle", "assets/UI/moneySingle.png");
        this.load.image("moneyPlural", "assets/UI/moneyPlural.png");
        this.load.image("glow", "assets/UI/glow.png");
        this.load.image("moneyPanel", "assets/UI/moneyPanel.png");

        // level up
        this.load.image("levelUpArrow", "assets/UI/levelUpArrow.png");
        this.load.image("hammer", "assets/UI/hammer.png");

        // particle
        this.load.image("star", "assets/UI/star.png");
        this.load.image("dust", "assets/UI/dust.png");
        this.load.image("party1", "assets/UI/party1.png");
        this.load.image("party2", "assets/UI/party2.png");
        this.load.image("lightColumn", "assets/UI/lightColumn.png");
        this.load.image("singleDollar", "assets/UI/singleDollar.png");

        // sound
        this.load.audio("audio_bgTheme", "assets/Audio/BGTheme.ogg");
        this.load.audio("audio_autoCollectMoney", "assets/Audio/autoCollectMoney.ogg");
        this.load.audio("audio_building", "assets/Audio/building.ogg");
        this.load.audio("audio_moneyCollect", "assets/Audio/moneyCollect.ogg");
        this.load.audio("audio_upgrade", "assets/Audio/upgrade.ogg");
        this.load.audio("audio_winning", "assets/Audio/winning.ogg");
        this.load.audio("audio_pop", "assets/Audio/pop.ogg");

        // json
        this.load.json("levelMakerConfig", "LevelConfig/LevelMakerConfig.json");
        this.load.json("moneyConfig", "LevelConfig/MoneyConfig.json");

        // sprite sheets
        // dryer
        this.load.atlas("dryer1", "assets/Render_upgrades/Dryer_upgrades/Dryer_upgrades1/Dryer_upgrades1.png", "assets/Render_upgrades/Dryer_upgrades/Dryer_upgrades1/Dryer_upgrades1.json");
        this.load.atlas("dryer2", "assets/Render_upgrades/Dryer_upgrades/Dryer_upgrades2/Dryer_upgrades2.png", "assets/Render_upgrades/Dryer_upgrades/Dryer_upgrades2/Dryer_upgrades2.json");
        this.load.atlas("restingArea1", "assets/Render_upgrades/RestingArea_upgrades/RestingArea_upgrades1/RestingArea_upgrades1.png", "assets/Render_upgrades/RestingArea_upgrades/RestingArea_upgrades1/RestingArea_upgrades1.json");
        this.load.atlas("restingArea2", "assets/Render_upgrades/RestingArea_upgrades/RestingArea_upgrades2/RestingArea_upgrades2.png", "assets/Render_upgrades/RestingArea_upgrades/RestingArea_upgrades2/RestingArea_upgrades2.json");
        this.load.atlas("shredder1", "assets/Render_upgrades/Shredder_upgrades/Shredder_upgrades1/Shredder_upgrades1.png", "assets/Render_upgrades/Shredder_upgrades/Shredder_upgrades1/Shredder_upgrades1.json");
        this.load.atlas("shredder2", "assets/Render_upgrades/Shredder_upgrades/Shredder_upgrades2/Shredder_upgrades2.png", "assets/Render_upgrades/Shredder_upgrades/Shredder_upgrades2/Shredder_upgrades2.json");
    }

    create()
    {
        this.add.text(20, 20, "Loading...");
        this.scene.start("levelSelect");
    }
}