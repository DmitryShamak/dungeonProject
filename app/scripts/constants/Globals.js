angular.module("app")
	.constant("LobbyParams", [{
		uiType: "boolean",
		name: "public",
		title: "Public",
		description: "Allow anyone to connect your lobby."
	}, {
		uiType: "dropdown",
		name: "difficulty",
		title: "Difficulty",
		description: "Monsters level and events number.",
		values: [0,1,2,3,4]
	}, {
		uiType: "dropdown",
		name: "mapSize",
		title: "Map Size",
		description: "Ну ты понял!",
		values: [5,7,10]
	}, {
		uiType: "number",
		name: "playersLimit",
		title: "Players Limit",
		description: "Max players count."
	}, {
		uiType: "text",
		name: "lobbyPassword",
		title: "Lobby Password",
		description: "Password to connect this lobby (it will make lobby protected)."
	}, {
		uiType: "dropdown",
		name: "victoryCondition",
		title: "Victory Condition",
		description: "What playesrs must do to win.",
		values: ["Kill them all", "Pass max tasks"]
	}])
	.constant("HeroParams", {
		name: "",
		strength: 0,
		magic: 0,
		agility: 0,
		actionPoint: 0,
		hp: 0,
		energy: 0,
		risk: 0,
		effects: [],
		inventory: [],
		activeItems: [],
		level: 0,
		sex: ""
	})
	.constant("LocationsList", [{
		name: "location_1",
		title: "Location 1",
		description: "Location",
		dors: [],
		traps: [],
		mosters: [],
		items: []
	}, {
		name: "location_2",
		title: "Location 2",
		description: "Location",
		dors: [],
		traps: [],
		mosters: [],
		items: []
	}, {
		name: "location_3",
		title: "Location 3",
		description: "Location",
		dors: [],
		traps: [],
		mosters: [],
		items: []
	}, {
		name: "location_4",
		title: "Location 4",
		description: "Location",
		dors: [],
		traps: [],
		mosters: [],
		items: []
	}]);