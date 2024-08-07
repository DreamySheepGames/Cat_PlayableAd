var config = {
    type: Phaser.AUTO,
    backgroundColor: 0xb3c3d3,
    scene: [Load, LevelSelect, LevelMaker],
    scale: {
        mode: Phaser.Scale.FIT, // Adjusts to fit the width and height while maintaining aspect ratio
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1440,
        height: 3200
    },
};

// var isMobile = navigator.userAgent.indexOf("Mobile");
// if (isMobile == -1) {
//     isMobile = navigator.userAgent.indexOf("Tablet");
// }
// if (isMobile == -1) {
//     var config = {
//         type: Phaser.AUTO,
//         backgroundColor: 0xb3c3d3,
//         width: 480,
//         height: 640,
//         parent: 'phaser-game',
//         scene: [Load, LevelSelect, LevelMaker]
//     };
// } else {
//     var config = {
//         type: Phaser.AUTO,
//         backgroundColor: 0xb3c3d3,
//         width: window.innerWidth,
//         height: window.innerHeight,
//         parent: 'phaser-game',
//         scene: [Load, LevelSelect, LevelMaker]
//     };
// }

var game = new Phaser.Game(config);


// // Phaser configuration
// var config = {
//     type: Phaser.AUTO,
//     backgroundColor: 0xb3c3d3,
//     scene: [Load, LevelSelect, LevelMaker],
//     scale: {
//         mode: Phaser.Scale.NONE, // Disable Phaser's built-in scaling
//         autoCenter: Phaser.Scale.CENTER_BOTH,
//         width: 1440 * 2,
//         height: 3200
//     }
// };

// // Initialize Phaser game
// var game = new Phaser.Game(config);

// // Resize game function
// function resizeGame() {
//     const canvas = game.canvas;
//     if (canvas) {
//         const windowHeight = window.innerHeight;
//         const gameHeight = config.height;
//         const gameWidth = config.width;
//         const scaleRatio = windowHeight / gameHeight;

//         // Calculate new width for canvas
//         const scaledWidth = gameWidth * scaleRatio;

//         // Update canvas dimensions
//         canvas.style.height = `${windowHeight}px`;
//         //canvas.style.width = `${scaledWidth}px`;
//         //canvas.style.marginLeft = `${(window.innerWidth - scaledWidth) / 2}px`;
//         canvas.style.marginTop = '0px';
//     }
// }

// // Call resizeGame on game boot and window resize
// game.events.once('boot', resizeGame);
// window.addEventListener('resize', resizeGame);
