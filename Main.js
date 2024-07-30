// var config = {
//     type: Phaser.AUTO,
//     backgroundColor: 0xb3c3d3,
//     scene: [Load, LevelSelect, LevelMaker],
//     scale: {
//         mode: Phaser.Scale.RESIZE,
//         autoCenter: Phaser.Scale.CENTER_BOTH
//     }
// };

var config = {
    type: Phaser.AUTO,
    backgroundColor: 0xb3c3d3,
    scene: [Load, LevelSelect, LevelMaker],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    width: 1440,
    height: 3200,
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

window.addEventListener('resize', function () {
    game.scale.resize(window.innerWidth, window.innerHeight);
});

