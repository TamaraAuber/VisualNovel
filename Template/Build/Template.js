"use strict";
var Novel;
(function (Novel) {
    async function Drachenhort() {
        console.log("Szene: Drachenhort");
    }
    Novel.Drachenhort = Drachenhort;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function Gasthaus() {
        console.log("Szene: Gasthaus");
        let text = {
            narrator: {
                T000: "Willkommen im Gasthaus"
            }
        };
        await Novel.ƒS.Location.show(Novel.location.gasthausHauptraum);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.T000);
    }
    Novel.Gasthaus = Gasthaus;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function Laden() {
        console.log("Szene: Laden");
    }
    Novel.Laden = Laden;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    Novel.ƒ = FudgeCore;
    Novel.ƒS = FudgeStory;
    console.log("FudgeStory Main.ts starting");
    Novel.transition = {
        transitionOne: {
            duration: 1,
            alpha: "Transitions/04.png",
            edge: 0.4
        },
        transitionTwo: {
            duration: 1,
            alpha: "Transitions/05.png",
            edge: 1
        }
    };
    Novel.location = {
        //ToDo: schauen ob überhaupt benötigt wird
        blackscreen: {
            name: "blackscreen",
            background: "Images/Locations/blackscreen.png"
        },
        menuErklaerung: {
            name: "menuErklaerung",
            background: "Images/Locations/TestLocation1.png"
        },
        gasthausHauptraum: {
            name: "gasthausHauptraum",
            background: "Images/Locations/TestLocation2.png"
        }
    };
    Novel.character = {
        narrator: {
            name: ""
        }
    };
    //ToDO:item
    //ToDO:sound
    Novel.dataForSave = {
        nameProtagonist: ""
    };
    //Menü
    let inGameMenu = {
        //buttons, die man angezeigt haben möchte & strings dienen zur css-gestaltung
        save: "Save",
        load: "Load",
        close: "Close"
    };
    let gameMenu;
    //gibt an, ob menü offen ist oder geschlossen
    let menu = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenu.save:
                await Novel.ƒS.Progress.save();
                break;
            case inGameMenu.load:
                await Novel.ƒS.Progress.load();
                break;
            case inGameMenu.close:
                gameMenu.close();
                menu = false;
                break;
        }
    }
    //Shortcuts für's Menü
    document.addEventListener("keydown", handleKeyPress);
    async function handleKeyPress(_event) {
        //_event.code gibt an, welche Taste gedrückt wurde
        switch (_event.code) {
            //kann sein, dass x und y vertauscht, weil englische Tastatur
            case Novel.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Novel.ƒS.Progress.save();
                break;
            case Novel.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Novel.ƒS.Progress.load();
            case Novel.ƒ.KEYBOARD_CODE.M:
                console.log("Open/Close");
                if (menu) {
                    console.log("Close");
                    await gameMenu.close();
                    menu = false;
                }
                else {
                    console.log("Open");
                    await gameMenu.open();
                    menu = true;
                }
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        //Menü
        gameMenu = Novel.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        let scenes = [
            { scene: Novel.Prolog, name: "Prolog" },
            { scene: Novel.Gasthaus, name: "Gasthaus" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Novel.dataForSave = Novel.ƒS.Progress.setData(Novel.dataForSave, uiElement);
        // start the sequence
        Novel.ƒS.Progress.go(scenes);
    }
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function Prolog() {
        console.log("Szene: Prolog");
        let text = {
            prologText: {
                T000: "Hier könnte ihr Prolog stehen"
            }
        };
        //kurze Zwischensequenz, in der shortcuts für menü gezeigt werden
        await Novel.ƒS.Location.show(Novel.location.menuErklaerung);
        await Novel.ƒS.update();
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Menü Shortcuts");
        //evtl. Transition raus
        await Novel.ƒS.Location.show(Novel.location.blackscreen);
        await Novel.ƒS.update(Novel.transition.transitionTwo.duration, Novel.transition.transitionTwo.alpha, Novel.transition.transitionTwo.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.prologText.T000);
    }
    Novel.Prolog = Prolog;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Novel.Scene = Scene;
})(Novel || (Novel = {}));
//kann glaube ich weg
var Novel;
(function (Novel) {
    async function Unterwegs1Goblins() {
        console.log("Szene: Unterwegs1Goblins");
    }
    Novel.Unterwegs1Goblins = Unterwegs1Goblins;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function Unterwegs2Fee() {
        console.log("Szene: Unterwegs2Fee");
    }
    Novel.Unterwegs2Fee = Unterwegs2Fee;
})(Novel || (Novel = {}));
//# sourceMappingURL=Template.js.map