var Parkour = Parkour || {};

// setting game config and loading the assets for the loading screen.
Parkour.BootState ={
	init: function(){
		this.game.stage.backgroundColor = "#fff";
		// this.game.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		//this.game.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		// this.scale.pageAlignHorizontally = true;
		// this.scale.pageAlignVertically = true;
	    this.scale.pageAlignVertically = true;
	    this.scale.pageAlignHorizontally = true;
	    this.scale.setShowAll();
	    this.scale.refresh();

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

	},
	preload: function (){
		this.load.image("loadingBar", "assets/sprites/loading.png");
	},
	create: function(){
		this.state.start("Preload");

	}

};
