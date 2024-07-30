class Load extends Phaser.Scene
{
    constructor()
    {
        super("bootGame");
    }

    preload()
    {
        // UI
        this.load.image("button", "assets/UI/blue button.png");
        this.load.image("buttonPressed", "assets/UI/blue button pressed.png");
        this.load.image("gameLogo", "assets/UI/gameLogo.png");
        this.load.image("cat", "assets/Characters/cat.png");
        this.load.image("pointer", "assets/UI/pointer.png");

        // ground tiles
        this.load.image("ground_grass", "assets/IsometricSprites/Grounds_Roads/ground_grass.png");
        this.load.image("ground_grass_damaged", "assets/IsometricSprites/Grounds_Roads/ground_grass_damaged.png");

        // road tiles
        //this.load.image("road_end_a", "assets/IsometricSprites/Grounds_Roads/road_end_a.png");

        // buildings
        this.load.image("houseSmallBlueA", "assets/IsometricSprites/Buildings/house_small_blue_a.png");
        this.load.image("houseSmallYellowA", "assets/IsometricSprites/Buildings/house_small_yellow_a.png");
        this.load.image("houseMediumWhiteA", "assets/IsometricSprites/Buildings/house_medium_white_a.png");
        this.load.image("policeStationB", "assets/IsometricSprites/Buildings/police_station_b.png");
        this.load.image("waterTowerA", "assets/IsometricSprites/Buildings/water_tower_a.png");
        this.load.image("autoShopA", "assets/IsometricSprites/Buildings/auto_shop_a.png");
        this.load.image("churchA", "assets/IsometricSprites/Buildings/church_a.png");

        // interactive building
        this.load.image("buildingSmallGrayA", "assets/IsometricSprites/Buildings/building_small_gray_a.png");

        // vegetation
        this.load.image("treeCommon01", "assets/IsometricSprites/Vegetation/tree_common_01.png");

        // vehicles
        this.load.image("carWhiteA", "assets/IsometricSprites/Vehicles/car_white_a.png");
        this.load.image("carYellowB", "assets/IsometricSprites/Vehicles/car_yellow_b.png");
        this.load.image("schoolBusB", "assets/IsometricSprites/Vehicles/school_bus_b.png");

        // bubble speech
        this.load.image("speechBubble1", "assets/UI/speech_bubble_1.png");
        this.load.image("speechBubble1", "assets/UI/speech_bubble_2.png");
        this.load.image("speechBubbleCircle", "assets/UI/speechBubbleCircle.png");
        this.load.image("speechBubbleMoney", "assets/UI/bubbleMoney.png");


        // money
        this.load.image("moneySingle", "assets/UI/moneySingle.png");
        this.load.image("moneyPlural", "assets/UI/moneyPlural.png");
        this.load.image("glow", "assets/UI/glow.png");
        this.load.image("moneyPanel", "assets/UI/moneyPanel.png");


        // json
        //this.load.json("", "");
    }

    create()
    {
        this.add.text(20, 20, "Loading...");
        this.scene.start("levelSelect");
    }
}