"use strict";
var Template;
(function (Template) {
    async function Introduction() {
        console.log("Intro");
        let text = {
            narrator: {
                //mit ` schrägen Strichen lassen sich html elemente einbinden, z.b. span, zum stylen
                T000: "",
                T001: ""
            },
            aisaka: {
                T000: "",
                T001: ""
            }
        };
        await Template.ƒS.Location.show(Template.locations.beach);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
        await Template.ƒS.Character.show(Template.characters.narrator, Template.characters.narrator.pose.standard, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        //InputField
        Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
        console.log(Template.dataForSave.nameProtagonist);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T000 + Template.dataForSave.nameProtagonist);
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Hi <p>Whatsup</p>");
        //Textgeschwindigkeit (20 = Geschwindigkeit der Buchstaben, 2 = Pause zwischen den Paragraphen/P-Tags)
        Template.ƒS.Speech.setTickerDelays(20, 2);
        //lässt den Spieler reden; mit eigener css-Klasse (letzter Eintrag)
        await Template.ƒS.Speech.tell(Template.dataForSave.nameProtagonist, "heeeeello", true, "protagonist");
        //await ƒS.Character.animate(characters.narrator, characters.narrator.pose.standard, jirkaAnimation());
        //Inventory
        Template.ƒS.Inventory.add(Template.items.pen);
        await Template.ƒS.Inventory.open();
        await Template.ƒS.Character.hide(Template.characters.narrator);
        //Musik einblenden
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0.2, 2, true);
        //Delay
        let signalDelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(1)]); //Signal definiert, aber noch nicht aufgerufen. Szene wird um duration 1 verzögert werden
        await Template.ƒS.Speech.tell(Template.characters.narrator, "Hi");
        signalDelay(); //führt Delay aus
        await Template.ƒS.Speech.tell(Template.dataForSave.nameProtagonist, "heeeeello", true, "protagonist");
        //Musik ohne fade abspielen
        Template.ƒS.Sound.play(Template.sound.backgroundTheme, 2, true);
        let firstDialogElementOptions = {
            iSayOk: "Okay",
            iSayYes: "Yes",
            iSayNo: "Nein"
        };
        let firstDialogeElement = await Template.ƒS.Menu.getInput(firstDialogElementOptions, /*CSS Klasse mit der Dialog gestaltet wird*/ "individualCssClass");
        switch (firstDialogeElement) {
            case firstDialogElementOptions.iSayOk:
                await Template.ƒS.Speech.tell(Template.characters.narrator, "Hi");
                //kann man nutzen um zu entscvheiden zu welcher nächsten Szene der Nutzer kommt
                Template.dataForSave.points += 10;
                break;
            case firstDialogElementOptions.iSayYes:
                await Template.ƒS.Character.show(Template.characters.narrator, Template.characters.narrator.pose.standard, Template.ƒS.positions.center);
                break;
            case firstDialogElementOptions.iSayNo:
                break;
        }
        if (Template.dataForSave.points === 10) {
            //return End();
            //return "Ende";
        }
    }
    Template.Introduction = Introduction;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    //define transitions
    Template.transitions = {
        clock: {
            duration: 1,
            alpha: "Transitions/testTransition.jpg",
            edge: 1 //Härtegrad der Transition
        }
    };
    Template.sound = {
        // music, am besten mp3, weil es am besten unterstützt wird, aber theorethisch egal
        backgroundTheme: "",
        mainTheme: ""
    };
    Template.locations = {
        beach: {
            name: "Beach",
            background: "Images/Strand.png"
        },
        beach2: {
            name: "Beach2",
            background: "Images/Strand2.jpg"
        },
        beach3: {
            name: "Beach3",
            background: "Images/Strand3.jpg"
        }
    };
    Template.characters = {
        narrator: {
            name: "Bob",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: ".Images/Character/...",
                happy: "",
                angry: ""
            }
        },
        Stickman: {
            name: "Stickman",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                meh: "Images/Stickman/Stickmen_Meh.png",
                happy: "Images/Stickman/Stickmen_Happy.png",
                thinking: "Images/Stickman/Stickmen_Thinking.png",
                dancing: "Images/Stickman/Stickmen_Dancing.png"
            }
        }
    };
    //Items
    Template.items = {
        pen: {
            name: "roter Buntstift",
            description: "a red pen",
            image: "./Images/Items/redPen"
        }
    };
    //alle Sachen, die gespeichert werden sollen, um evtl. später weiter zu spielen
    Template.dataForSave = {
        nameProtagonist: "",
        //kann man nutzen um zu entscvheiden zu welcher nächsten Szene der Nutzer kommt
        points: 1
    };
    //Menü
    let inGameMenu = {
        //buttons, die man angezeigt haben möchte & strings dienen zur css-gestaltung
        save: "Save",
        load: "Load",
        close: "Close",
        //open: "Open"
    };
    let gameMenu;
    //gibt an, ob menü offen ist oder geschlossen
    let menu = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            case inGameMenu.close:
                gameMenu.close();
                menu = false;
                break;
            /*case inGameMenu.open:
              gameMenu.open();
              menu = true;
              break;*/
        }
    }
    //Shortcuts für's Menü
    document.addEventListener("keydown", handleKeyPress);
    async function handleKeyPress(_event) {
        //_event.code gibt an, welche Taste gedrückt wurde
        switch (_event.code) {
            //kann sein, dass x und y vertauscht, weil englische Tastatur
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
            case Template.ƒ.KEYBOARD_CODE.M:
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
    function jirkaAnimation() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft, rotation: -20, scaling: new Template.ƒS.Position(0.5, 1.5), color: Template.ƒS.Color.CSS("white", 0) },
            end: { translation: Template.ƒS.positions.bottomright, rotation: 20, scaling: new Template.ƒS.Position(1.5, 0.5), color: Template.ƒS.Color.CSS("red", 0) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.LOOP
        };
    }
    ;
    function fromLeftToRight() {
        return {
            start: { translation: Template.ƒS.positionPercent(30, 100) },
            end: { translation: Template.ƒS.positionPercent(200, 100) },
            duration: 3,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromLeftToRight = fromLeftToRight;
    window.addEventListener("load", start);
    function start(_event) {
        //Menü
        gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenuCSSClass");
        let scenes = [
            //Szenenstruktur -> Reihenfolge hier bestimmt Ablaufreihenfolge der Szenen
            //hier: linear
            //{ scene: Scene, name: "Scene" }
            { scene: Template.Practice, name: "Practice" }
            //man kann Szenen auch ids geben und sie somit aufrufen: mit return End;
            //{id: "End", scene: End, name: "End"}
            //man kann eine Szene auch mit einer 2. id belegen; und auch direkt in der Szene die nächste angeben
            //{id: "EndNummero2", scene: End, name: "End", next: "Ende"}
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Practice() {
        console.log("Practice");
        let text = {
            Stickman: {
                T000: "Es ist ein wunderschöner Ferientag, meine Eltern haben mit mir beschlossen ans mehr zu fahren. Sie beide lieben den Strand....Dabei gibt es nur ein Problem....Ich hasse Sand! :(",
                T001: "Während die beiden sich in ihren liegen ausruhen und die Sonne genießen versuche ich irgendwie dieser sandigen Hölle zu entgehen.....",
                T0001: "Hmmm ...wie wäre es vielleicht mit einer kleinen Ablenkung?",
                T002: "Schwimmen! Das ist genau das Richtige! Ich bin zwar nicht die größte Wasserratte, aber nass zu werden ist um einiges besser als überall Sand an sich kleben zu haben!",
                T003: "Vielleicht hilft ja tanzen? Ich liebe es zu tanzen und dabei lässt sich gut der ganze Sand aus meiner Kleidung schütteln!",
                T004: "Hmm...Ich sehe hier nicht wirklich etwas interessantes. Und viele Aktivitäten bei denen man dem Sand entgehen kann ohne nass zu werden sehe ich hier auch nicht. Ich muss wohl einfach abwarten. Vielleicht passiert ja noch etwas spannendes.",
                T005: "Hey, bauen die Kinder da hinten etwa eine Sandburg?! Ich hasse Sand, aber ich liebe Burgen. Aber ist es das wirklich Wert?",
                T006: "Burgen sind etwas wunderbares. Auch wenn sie aus Sand sind. Der Tag am Strand ist wohl doch nicht so schlecht! Unsere Burg wird die Beste!",
                T007: "Nein! Ist es nicht! Dafür hasse ich Sand viel zu sehr. Da fällt mir gerade ein im Auto hab ich ein tolles Buch liegen...Ich geh einfach dorthin und lese!"
            },
        };
        let firstDialogElementOptions = {
            iChooseSwimming: "Schwimmen gehen",
            iChooseDancing: "Tanzen",
            iChooseWaiting: "Warten"
        };
        let secondDialogElementOptions = {
            iChooseGoAway: "Hier ist es zu langweilig! Vielleicht kann ich ja gehen.",
            iChooseHelp: "Vielleicht kann ich Ihnen ja helfen?"
        };
        await Template.ƒS.Location.show(Template.locations.beach);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
        await Template.ƒS.Character.show(Template.characters.Stickman, Template.characters.Stickman.pose.meh, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Stickman, text.Stickman.T000);
        await Template.ƒS.Speech.tell(Template.characters.Stickman, text.Stickman.T001);
        await Template.ƒS.Character.hide(Template.characters.Stickman);
        await Template.ƒS.Character.show(Template.characters.Stickman, Template.characters.Stickman.pose.thinking, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(3);
        await Template.ƒS.Speech.tell(Template.characters.Stickman, text.Stickman.T0001);
        let firstDialogeElement = await Template.ƒS.Menu.getInput(firstDialogElementOptions, /*CSS Klasse mit der Dialog gestaltet wird*/ "dialogBox");
        switch (firstDialogeElement) {
            case firstDialogElementOptions.iChooseSwimming:
                await Template.ƒS.Character.hide(Template.characters.Stickman);
                await Template.ƒS.Location.show(Template.locations.beach3);
                await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
                await Template.ƒS.Character.show(Template.characters.Stickman, Template.characters.Stickman.pose.happy, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Stickman, text.Stickman.T002);
                await Template.ƒS.Speech.tell(Template.characters.Stickman, text.Stickman.T005);
                await Template.ƒS.Character.hide(Template.characters.Stickman);
                await Template.ƒS.Character.show(Template.characters.Stickman, Template.characters.Stickman.pose.thinking, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update(3);
                break;
            case firstDialogElementOptions.iChooseDancing:
                await Template.ƒS.Location.show(Template.locations.beach2);
                await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
                await Template.ƒS.Speech.tell(Template.characters.Stickman, text.Stickman.T003);
                await Template.ƒS.Character.hide(Template.characters.Stickman);
                await Template.ƒS.Character.show(Template.characters.Stickman, Template.characters.Stickman.pose.dancing, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Stickman, text.Stickman.T005);
                await Template.ƒS.Character.hide(Template.characters.Stickman);
                await Template.ƒS.Character.show(Template.characters.Stickman, Template.characters.Stickman.pose.thinking, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update(3);
                break;
            case firstDialogElementOptions.iChooseWaiting:
                await Template.ƒS.Character.hide(Template.characters.Stickman);
                await Template.ƒS.Location.show(Template.locations.beach2);
                await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
                await Template.ƒS.Character.show(Template.characters.Stickman, Template.characters.Stickman.pose.meh, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Stickman, text.Stickman.T004);
                await Template.ƒS.Speech.tell(Template.characters.Stickman, text.Stickman.T005);
                await Template.ƒS.Character.hide(Template.characters.Stickman);
                await Template.ƒS.Character.show(Template.characters.Stickman, Template.characters.Stickman.pose.thinking, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update(3);
                break;
        }
        let secondDialogeElement = await Template.ƒS.Menu.getInput(secondDialogElementOptions, /*CSS Klasse mit der Dialog gestaltet wird*/ "dialogBox2");
        switch (secondDialogeElement) {
            case secondDialogElementOptions.iChooseGoAway:
                await Template.ƒS.Character.hide(Template.characters.Stickman);
                await Template.ƒS.Character.show(Template.characters.Stickman, Template.characters.Stickman.pose.meh, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update(3);
                await Template.ƒS.Speech.tell(Template.characters.Stickman, text.Stickman.T007);
                await Template.ƒS.Character.hide(Template.characters.Stickman);
                await Template.ƒS.Character.animate(Template.characters.Stickman, Template.characters.Stickman.pose.happy, Template.fromLeftToRight());
                break;
            case secondDialogElementOptions.iChooseHelp:
                await Template.ƒS.Speech.tell(Template.characters.Stickman, text.Stickman.T006);
                await Template.ƒS.Character.hide(Template.characters.Stickman);
                await Template.ƒS.Character.animate(Template.characters.Stickman, Template.characters.Stickman.pose.happy, Template.fromLeftToRight());
                break;
        }
    }
    Template.Practice = Practice;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map