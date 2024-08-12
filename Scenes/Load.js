class Load extends Phaser.Scene
{
    constructor()
    {
        super("bootGame");
    }

    preload()
    {
        // dir prefixes
        this.audioDirPrefix = "assets/Audio/";
        this.uiDirPrefix = "assets/UI/";
        this.configDirPrefix = "LevelConfig/";

        // atlas dir prefixed
        this.dryerAtlasDirPrefix = "assets/Packed/Dryer/Dryer_upgrades.";
        this.restingAreaAtlasDirPrefix = "assets/Packed/RestingArea_upgrades/RestingArea_upgrades.";
        this.shredderAtlasDirPrefix = "assets/Packed/Shredder_upgrades/Shredder_upgrades.";

        // UI
        this.load.image("button", this.uiDirPrefix + "button.png");
        this.load.image("buttonPressed", this.uiDirPrefix + "button pressed.png");
        this.load.image("gameLogo", this.uiDirPrefix + "gameLogo.png");
        this.load.image("cat", "assets/Characters/cat.png");
        this.load.image("pointer", this.uiDirPrefix + "pointer.png");

        // background
        this.load.image("background", "assets/background/BG.png");

        // bubble speech
        this.load.image("speechBubble1", this.uiDirPrefix + "speech_bubble_1.png");
        this.load.image("speechBubble2", this.uiDirPrefix + "speech_bubble_2.png");
        //this.load.image("speechBubbleCircle", this.uiDirPrefix + "speechBubbleCircle.png");
        this.load.image("speechBubbleMoney", this.uiDirPrefix + "bubbleMoney.png");

        // money
        this.load.image("moneySingle", this.uiDirPrefix + "moneySingle.png");
        this.load.image("moneyPlural", this.uiDirPrefix + "moneyPlural.png");
        this.load.image("glow", this.uiDirPrefix + "glow.png");
        this.load.image("moneyPanel", this.uiDirPrefix + "moneyPanel.png");

        // level up
        this.load.image("levelUpArrow", this.uiDirPrefix + "levelUpArrow.png");
        this.load.image("hammer", this.uiDirPrefix + "hammer.png");

        // particle
        this.load.image("star", this.uiDirPrefix + "star.png");
        this.load.image("dust", this.uiDirPrefix + "dust.png");
        this.load.image("party1", this.uiDirPrefix + "party1.png");
        this.load.image("party2", this.uiDirPrefix + "party2.png");
        this.load.image("lightColumn", this.uiDirPrefix + "lightColumn.png");
        this.load.image("singleDollar", this.uiDirPrefix + "singleDollar.png");

        // sound
        this.load.audio("audio_bgTheme", this.audioDirPrefix + "BGTheme.ogg");
        this.load.audio("audio_autoCollectMoney", this.audioDirPrefix + "autoCollectMoney.ogg");
        this.load.audio("audio_building", this.audioDirPrefix + "building.ogg");
        this.load.audio("audio_moneyCollect", this.audioDirPrefix + "moneyCollect.ogg");
        this.load.audio("audio_upgrade", this.audioDirPrefix + "upgrade.ogg");
        this.load.audio("audio_winning", this.audioDirPrefix + "winning.ogg");
        this.load.audio("audio_pop", this.audioDirPrefix + "pop.ogg");

        // json
        this.load.json("levelMakerConfig", this.configDirPrefix + "LevelMakerConfig.json");
        this.load.json("moneyConfig", this.configDirPrefix + "MoneyConfig.json");

        // atlas
        // this.load.atlas("dryer", this.dryerAtlasDirPrefix + "png", this.dryerAtlasDirPrefix + "json");
        // this.load.atlas("restingArea", this.restingAreaAtlasDirPrefix + "png", this.restingAreaAtlasDirPrefix + "json");
        // this.load.atlas("shredder", this.shredderAtlasDirPrefix + "png", this.shredderAtlasDirPrefix + "json");
        this.load.atlas("dryer1", "assets/Pack_v2/Dryer_upgrades/Dryer_upgrades1.png", "assets/Pack_v2/Dryer_upgrades/Dryer_upgrades1.json");
        this.load.atlas("dryer2", "assets/Pack_v2/Dryer_upgrades/Dryer_upgrades2.png", "assets/Pack_v2/Dryer_upgrades/Dryer_upgrades2.json");

        //this.load.atlas("restingArea1_0", "assets/Pack_v2/RestingArea_upgrades/RestingArea_upgrades1-0.png", "assets/Pack_v2/RestingArea_upgrades/RestingArea_upgrades1.json");
        //this.load.atlas("restingArea1_1", "assets/Pack_v2/RestingArea_upgrades/RestingArea_upgrades1-1.png", "assets/Pack_v2/RestingArea_upgrades/RestingArea_upgrades1.json");

        this.load.multiatlas('restingArea1', 'assets/Pack_v2/RestingArea_upgrades/RestingArea_upgrades1.json', 'assets/Pack_v2/RestingArea_upgrades');

        //this.load.atlas("restingArea2_0", "assets/Pack_v2/RestingArea_upgrades/RestingArea_upgrades2-0.png", "assets/Pack_v2/RestingArea_upgrades/RestingArea_upgrades2.json");
        //this.load.atlas("restingArea2_1", "assets/Pack_v2/RestingArea_upgrades/RestingArea_upgrades2-1.png", "assets/Pack_v2/RestingArea_upgrades/RestingArea_upgrades2.json");

        this.load.multiatlas('restingArea2', 'assets/Pack_v2/RestingArea_upgrades/RestingArea_upgrades2.json', 'assets/Pack_v2/RestingArea_upgrades');

        this.load.atlas("shredder1", "assets/Pack_v2/Shredder_upgrades/Shredder_upgrades1.png", "assets/Pack_v2/Shredder_upgrades/Shredder_upgrades1.json");

        //this.load.atlas("shredder_Upgrades2_0", "assets/Pack_v2/Shredder_upgrades/Shredder_upgrades2_0.png", "assets/Pack_v2/Shredder_upgrades/Shredder_upgrades2.json");
        //this.load.atlas("shredder_Upgrades2_1", "assets/Pack_v2/Shredder_upgrades/Shredder_upgrades2_1.png", "assets/Pack_v2/Shredder_upgrades/Shredder_upgrades2.json");

        this.load.multiatlas('shredder2', 'assets/Pack_v2/Shredder_upgrades/Shredder_upgrades2.json', 'assets/Pack_v2/Shredder_upgrades');

    }

    create()
    {
        this.add.text(20, 20, "Loading...");
        this.scene.start("levelSelect");
    }
}