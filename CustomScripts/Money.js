class Money extends Phaser.GameObjects.Container {
    constructor(scene, x, y, spriteKey, glowKey, scale = 1, scaleTo = 1, glowScale = 1, glowScaleTo = 1) {
        super(scene, x, y);

        this.scene = scene;

        // Create the glow sprite and set it to spin
        this.glow = scene.add.sprite(0, 0, glowKey);
        this.glow.setScale(glowScale);
        this.scene.tweens.add({
            targets: this.glow,
            angle: 360,
            duration: 2000,
            ease: 'Linear',
            repeat: -1
        });

        // Create the money sprite
        this.money = scene.add.sprite(0, 0, spriteKey);
        this.money.setScale(scale);

        // Add sprites to the container
        this.add(this.glow);
        this.add(this.money);

        this.scene.tweens.add({
            targets: this.money,
            scale: scaleTo,
            duration: 300,
            ease: "Back.easeOut",
            onComplete: () => {
                // Optionally, add any other logic here after the tween completes
            }
        });

        this.scene.tweens.add({
            targets: this.glow,
            scale: glowScaleTo,
            duration: 300,
            ease: "Back.easeOut",
            onComplete: () => {
                // Optionally, add any other logic here after the tween completes
            }
        });

        // Make the money sprite interactive
        this.money.setInteractive();
        this.money.on('pointerdown', () => {
            // Placeholder for the action when the money sprite is tapped
            console.log("Money tapped!");
        });

        // Add this container to the scene
        scene.add.existing(this);
    }
}
