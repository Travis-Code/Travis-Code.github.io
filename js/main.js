//game will have only 1 state
var GameState = {
    //initiate game settings
    init: function() {
        //adapt to screen size, fit all the game
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.game.world.setBounds(0, 0, 600, 375);
    },

    preload: function() {
        this.load.image("ricFlair", "assets/images/ricFlair.jpg");
        this.game.load.audio("woo", ["assets/sounds/woo.mp3", "assets/sounds/woo.ogg"]);
    },

    create: function() {
        this.woo();
        
        //Earthquake effect
        //we needto add margin tot he world, so the camera can move
        var margin = 50;
        //and set the world's bounds according to the given margin
        var x = -margin;
        var y = -margin;
        var w = game.world.width + margin * 2;
        var h = game.world.height + margin * 2;
        //it's not necessary to increase height, we do it to keep uniformity
        game.world.setBounds(x, y, w, h);
        //we make sure camera is at position(0,0)
        game.world.camera.position.set(0);


    },

    fadeOut: function() {
        if (this.wooButton.input.enabled === true) {
            this.wooButton.input.enabled = false;
            this.wooButton.alpha = 0.1;
            var cheer = game.add.audio("woo");
            this.addQuake();
            cheer.play();
            console.log("WOOOO");
            game.time.events.add(Phaser.Timer.SECOND * 0.2, function(randomText, wooButton){
                this.wooButton.destroy();
                this.woo(cheer);
                this.wooButton.input.enable = true;
            }, this);
        }
    },

    woo: function() {
        this.wooButton = game.add.button(game.width / 2, game.height/2+5, "ricFlair", this.fadeOut, this);
        this.wooButton.anchor.set(0.5);
        this.wooButton.scale.setTo(1, 0.98);
    },

    addQuake: function() {
        // define the camera offset for the quake
        var rumbleOffset = 10;
        // move according to the camera's current position
        var properties = {
            x: game.camera.x - rumbleOffset
        };
        // make it a relly fast movement
        var duration = 100;
        // because it will repeat
        var repeat = 4;
        // use bounce in-out to soften it a little bit
        var ease = Phaser.Easing.Bounce.InOut;
        var autoStart = false;
        // a little delay because we will run it indefinitely
        var delay = 0;
        // go back to the original position
        var yoyo = true;
        var quake = game.add.tween(game.camera)
            .to(properties, duration, ease, autoStart, delay, 4, yoyo);
        // we're using this line for the example to run indefinitely
        //quake.onComplete.addOnce(addQuake);
        // let the earthquake begins
        quake.start();
    },


};

var game = new Phaser.Game(600, 375, Phaser.AUTO);
game.state.add('GameState', GameState);
game.state.start('GameState');