class TimerCircle extends Phaser.GameObjects.Container {
    constructor(scene, x, y, duration, spriteKey, onCompleteSpriteKey, onCompleteSpriteScale = 1, onCompleteGlowKey) {
        super(scene, x, y);

        this.scene = scene;
        this.duration = duration;
        this.elapsed = 0;
        this.spriteKey = spriteKey;
        this.onCompleteSpriteKey = onCompleteSpriteKey;
        this.onCompleteSpriteScale = onCompleteSpriteScale;
        this.onCompleteGlowKey = onCompleteGlowKey;

        // Create the sprite
        this.sprite = scene.add.sprite(0, 0, spriteKey);
        this.add(this.sprite);

        // Create the graphics object for the timer circle
        this.timerGraphics = scene.add.graphics();
        this.add(this.timerGraphics);

        // Start the timer
        this.timerEvent = scene.time.addEvent({
            delay: 1000 / 60, // 60 times per second
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });

        // Add this container to the scene
        scene.add.existing(this);
    }

    updateTimer() {
        // Increment the elapsed time
        this.elapsed += 1 / 60;

        // Clear the graphics
        this.timerGraphics.clear();

        // Calculate the angle of the arc
        let angle = Phaser.Math.DegToRad((this.elapsed / this.duration) * 360);

        // Draw the timer arc
        this.timerGraphics.lineStyle(16, 0xfcd703); // Line thickness and color
        this.timerGraphics.beginPath();
        this.timerGraphics.arc(0, -15, 110, -Phaser.Math.PI2 / 4, angle - Phaser.Math.PI2 / 4, false);
        this.timerGraphics.strokePath();

        // Check if the timer has completed
        if (this.elapsed >= this.duration) {
            // Add the onComplete sprite
            //let money = this.scene.add.sprite(this.x, this.y, this.onCompleteSpriteKey).setScale(0.1);
            let money = new Money(this.scene, this.x, this.y, this.onCompleteSpriteKey, this.onCompleteGlowKey, 0.1, 0.3, 0.1, 1);
            // this.scene.tweens.add({
            //     targets: money,
            //     scale: this.onCompleteSpriteScale,
            //     duration: 300,
            //     ease: "Back.easeOut",
            //     onComplete: () => {
            //         // Optionally, add any other logic here after the tween completes
            //     }
            // });

            // Destroy the timer circle and its sprite
            this.timerEvent.remove(false);
            this.destroy();
        }
    }
}