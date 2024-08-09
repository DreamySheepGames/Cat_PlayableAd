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

        this.load.atlas("dryer", "assets/Packed/Dryer/Dryer_upgrades.png", "assets/Packed/Dryer/Dryer_upgrades.json")
        this.load.atlas("restingArea", "assets/Packed/RestingArea_upgrades/RestingArea_upgrades.png", "assets/Packed/RestingArea_upgrades/RestingArea_upgrades.json")
        this.load.atlas("shredder", "assets/Packed/Shredder_upgrades/Shredder_upgrades.png", "assets/Packed/Shredder_upgrades/Shredder_upgrades.json")

    }

    create()
    {
        this.add.text(20, 20, "Loading...");
        this.scene.start("levelSelect");
    }
}