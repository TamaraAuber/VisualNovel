"use strict";
var Novel;
(function (Novel) {
    async function Drachenhort() {
        console.log("Szene: Drachenhort");
        /*let text = {
            narrator: {
                N000: "Hier wohnt ein Drache",
                N001: "Auftritt Drache",
                N002: ":)"
            }
        };*/
        let ratschlagBefolgen = {
            iChooseYes: "Ins Inventar schauen",
            iCHooseNo: "Drache einfach bekämpfen"
        };
        //schauen wie ich checke was Protagonist im Inventar dabei hat
        let howToDealWithDragons = {
            iChooseStaff: "Stab",
            iChooseCloak: "Umhang",
            iChooseSword: "Schwert",
            iChooseStone: "Stein"
        };
        await Novel.ƒS.Location.show(Novel.location.blackscreen);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Es ist dunkel");
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du läufst weiter und es wird heller");
        await Novel.ƒS.Location.show(Novel.location.drachenHoehleGang);
        await Novel.ƒS.update(Novel.transition.transitionThree.duration, Novel.transition.transitionThree.alpha, Novel.transition.transitionThree.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "gelangst ans Ende der Höhle");
        await Novel.ƒS.Location.show(Novel.location.drachenHoehle);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Entdeckst Drache");
        await Novel.ƒS.Character.show(Novel.character.dragon, Novel.character.dragon.pose.sleeping, Novel.ƒS.positionPercent(55, 80));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Character.show(Novel.roomInventory.sonnenstrahlen, Novel.roomInventory.sonnenstrahlen.pose.standard, Novel.ƒS.positionPercent(50, 100));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Drache wacht auf");
        await Novel.ƒS.Character.hide(Novel.roomInventory.sonnenstrahlen);
        await Novel.ƒS.update();
        await Novel.ƒS.Character.hide(Novel.character.dragon);
        await Novel.ƒS.update();
        await Novel.ƒS.Character.show(Novel.character.dragon, Novel.character.dragon.pose.angry, Novel.ƒS.positionPercent(50, 100));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.character.fairy, "Möchtest du in dein Inventar schauen?");
        let dialogRatschlagBefolgen = await Novel.ƒS.Menu.getInput(ratschlagBefolgen, "DialogBoxRatschlagBefolgen");
        switch (dialogRatschlagBefolgen) {
            case ratschlagBefolgen.iCHooseNo:
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Angrif!!!!!!");
                Novel.dataForSave.givenEnding = "0";
                return "Ende";
            case ratschlagBefolgen.iChooseYes:
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Was möchtest du tun?");
                let dialogHowToDealWithDragons = await Novel.ƒS.Menu.getInput(howToDealWithDragons, "DialogBoxhowToDealWithDragons");
                switch (dialogHowToDealWithDragons) {
                    case howToDealWithDragons.iChooseStaff:
                        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Staff Attack!");
                        break;
                    case howToDealWithDragons.iChooseCloak:
                        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Here's my cloak :)");
                        break;
                    case howToDealWithDragons.iChooseSword:
                        await Novel.ƒS.Speech.tell(Novel.character.narrator, "My sword will kill you!");
                        break;
                    case howToDealWithDragons.iChooseStone:
                        await Novel.ƒS.Speech.tell(Novel.character.narrator, "I give you my stone :)");
                        break;
                }
        }
    }
    Novel.Drachenhort = Drachenhort;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function Ende() {
        console.log("This is the End");
        await Novel.ƒS.Location.show(Novel.location.blackscreen);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "This is the end");
    }
    Novel.Ende = Ende;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function Gasthaus() {
        console.log("Szene: Gasthaus");
        let text = {
            narrator: {
                N000: "Willkommen im Gasthaus",
                N001: "Auftritt Wirt",
                N002: "Abgang Wirt",
                N003: "weiter gehen"
            },
            dwarf: {
                D000: "Willkommen im Gasthaus"
            }
        };
        let helfenOderTrinkenRoundOne = {
            iChooseHelp: "Ich werde euch helfen",
            iChooseDrink: "Ich hätte gerne einen Krug Met"
        };
        let helfenOderTrinkenRoundTwo = {
            iChooseHelp: "Vielleicht sollte ich euch doch helfen",
            iChooseDrink: "Noch ein Krug Met bitte!"
        };
        let helfenOderTrinkenRoundThree = {
            iChooseHelp: "Ich helfe euch!",
            iChooseDrink: "Mehr Meeeeeeeet!!!"
        };
        //Eintritt Gasthaus
        await Novel.ƒS.Location.show(Novel.location.gasthausHauptraum);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N000);
        //Am Bartresen
        await Novel.ƒS.Location.show(Novel.location.gasthausBar);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Character.show(Novel.roomInventory.gasthausBarCounter, Novel.roomInventory.gasthausBarCounter.pose.standard, Novel.ƒS.positionPercent(50, 100));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N001);
        await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.standard, Novel.ƒS.positionPercent(30, 96.5));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D000);
        let dialogHelfenOderTrinken1 = await Novel.ƒS.Menu.getInput(helfenOderTrinkenRoundOne, "DialogBoxHelfenOderTrinken");
        switch (dialogHelfenOderTrinken1) {
            case helfenOderTrinkenRoundOne.iChooseHelp:
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du beschließt zu helfen");
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.thinking, Novel.ƒS.positionPercent(30, 96.5));
                await Novel.ƒS.update(1);
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, "gehe zu Ruby. Sie kann dir sagen wo der Drache ist");
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du übernachtest und gehst am nächsten morgen zu Ruby");
                await Novel.ƒS.Character.hide(Novel.roomInventory.gasthausBarCounter);
                return "Laden";
            case helfenOderTrinkenRoundOne.iChooseDrink:
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du bestellst ein Krug Met");
                await Novel.ƒS.Character.show(Novel.roomInventory.metKrug, Novel.roomInventory.metKrug.pose.standard, Novel.ƒS.positionPercent(50, 83));
                //Krug auf Theke stellen
                await Novel.ƒS.Character.hide(Novel.roomInventory.gasthausBarCounter);
                await Novel.ƒS.Character.show(Novel.roomInventory.gasthausBarCounter, Novel.roomInventory.gasthausBarCounter.pose.standard, Novel.ƒS.positionPercent(50, 100));
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.standard, Novel.ƒS.positionPercent(30, 96.5));
                await Novel.ƒS.update();
                //
                Novel.addDrunknessLevel();
                break;
        }
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, "genieße es. Bald sind meine Vorräte leer.");
        let dialogHelfenOderTrinken2 = await Novel.ƒS.Menu.getInput(helfenOderTrinkenRoundTwo, "DialogBoxHelfenOderTrinken");
        switch (dialogHelfenOderTrinken2) {
            case helfenOderTrinkenRoundTwo.iChooseHelp:
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du beschließt zu helfen");
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.thinking, Novel.ƒS.positionPercent(30, 96.5));
                await Novel.ƒS.update(1);
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, "gehe zu Ruby. Sie kann dir sagen wo der Drache ist");
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du übernachtest und gehst am nächsten morgen zu Ruby");
                await Novel.ƒS.Character.hide(Novel.roomInventory.metKrug);
                await Novel.ƒS.Character.hide(Novel.roomInventory.gasthausBarCounter);
                return "Laden";
            case helfenOderTrinkenRoundTwo.iChooseDrink:
                await Novel.ƒS.Character.animate(Novel.roomInventory.metKrug, Novel.roomInventory.metKrug.pose.standard, Novel.fromLeftToRight(50, 83, 70, 83));
                await Novel.ƒS.Character.show(Novel.roomInventory.metKrug2, Novel.roomInventory.metKrug2.pose.standard, Novel.ƒS.positionPercent(50, 83));
                //Krug auf Theke stellen
                await Novel.ƒS.Character.hide(Novel.roomInventory.gasthausBarCounter);
                await Novel.ƒS.Character.show(Novel.roomInventory.gasthausBarCounter, Novel.roomInventory.gasthausBarCounter.pose.standard, Novel.ƒS.positionPercent(50, 100));
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.standard, Novel.ƒS.positionPercent(30, 96.5));
                await Novel.ƒS.update();
                //
                Novel.addDrunknessLevel();
                break;
        }
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, "Du trinkst aber ganz schön viel");
        let dialogHelfenOderTrinken3 = await Novel.ƒS.Menu.getInput(helfenOderTrinkenRoundThree, "DialogBoxHelfenOderTrinken");
        switch (dialogHelfenOderTrinken3) {
            case helfenOderTrinkenRoundThree.iChooseHelp:
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du beschließt zu helfen");
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.thinking, Novel.ƒS.positionPercent(30, 96.5));
                await Novel.ƒS.update(1);
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, "gehe zu Ruby. Sie kann dir sagen wo der Drache ist");
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du übernachtest und gehst am nächsten morgen zu Ruby");
                await Novel.ƒS.Character.hide(Novel.roomInventory.metKrug);
                await Novel.ƒS.Character.hide(Novel.roomInventory.metKrug2);
                await Novel.ƒS.Character.hide(Novel.roomInventory.gasthausBarCounter);
                return "Laden";
            case helfenOderTrinkenRoundThree.iChooseDrink:
                await Novel.ƒS.Character.animate(Novel.roomInventory.metKrug2, Novel.roomInventory.metKrug2.pose.standard, Novel.fromLeftToRight(50, 83, 60, 83));
                await Novel.ƒS.Character.show(Novel.roomInventory.metKrug3, Novel.roomInventory.metKrug3.pose.standard, Novel.ƒS.positionPercent(50, 83));
                //Krug auf Theke stellen
                await Novel.ƒS.Character.hide(Novel.roomInventory.gasthausBarCounter);
                await Novel.ƒS.Character.show(Novel.roomInventory.gasthausBarCounter, Novel.roomInventory.gasthausBarCounter.pose.standard, Novel.ƒS.positionPercent(50, 100));
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.standard, Novel.ƒS.positionPercent(30, 96.5));
                await Novel.ƒS.update();
                //
                Novel.addDrunknessLevel();
                break;
        }
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, "Meine Vorräte sind aufgebraucht. Ich habe keinen Met mehr!");
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du beschließt dich zu helfen");
        await Novel.ƒS.Character.hide(Novel.character.dwarf);
        await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.thinking, Novel.ƒS.positionPercent(30, 96.5));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, "gehe zu Ruby. Sie kann dir sagen wo der Drache ist");
        await Novel.ƒS.Character.hide(Novel.character.dwarf);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du übernachtest und möchtest am nächsten morgen zu Ruby");
        await Novel.ƒS.Character.hide(Novel.roomInventory.metKrug);
        await Novel.ƒS.Character.hide(Novel.roomInventory.metKrug2);
        await Novel.ƒS.Character.hide(Novel.roomInventory.metKrug3);
        await Novel.ƒS.Character.hide(Novel.roomInventory.gasthausBarCounter);
    }
    Novel.Gasthaus = Gasthaus;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function Laden() {
        console.log("Szene: Laden");
        let text = {
            narrator: {
                N000: "Willkommen im Laden",
                N001: "Auftritt Händlerin"
            },
            tiefling: {
                T000: "Willkommen in meinem Laden"
            }
        };
        let presentsMorning = {
            iChooseCloak: "Umhang",
            iChooseStaff: "Kampfstab",
            iChooseSword: "Schwert"
        };
        let presentsNoon = {
            iChooseCloak: "Umhang",
            iChooseStaff: "Kampfstab"
        };
        Novel.removeDrunknessLevel();
        //Laden betreten
        await Novel.ƒS.Location.show(Novel.location.laden);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N000);
        await Novel.ƒS.Character.show(Novel.roomInventory.ladenTheke, Novel.roomInventory.ladenTheke.pose.standard, Novel.ƒS.positionPercent(50, 100));
        await Novel.ƒS.update(1);
        //mit Ruby reden
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N001);
        await Novel.ƒS.Character.show(Novel.character.tiefling, Novel.character.tiefling.pose.standard, Novel.ƒS.positionPercent(35, 95));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.character.tiefling, text.tiefling.T000);
        //Ruby bietet Geschenk an
        if (Novel.dataForSave.neededLongSleep === 0) {
            let dialogPresentMorning = await Novel.ƒS.Menu.getInput(presentsMorning, "DialogBoxPresents");
            switch (dialogPresentMorning) {
                case presentsMorning.iChooseCloak:
                    Novel.ƒS.Inventory.add(Novel.items.cloak);
                    await Novel.ƒS.Inventory.open();
                    Novel.dataForSave.ownsPlayerWaepon = false;
                    break;
                case presentsMorning.iChooseStaff:
                    Novel.ƒS.Inventory.add(Novel.items.staff);
                    await Novel.ƒS.Inventory.open();
                    Novel.dataForSave.ownsPlayerWaepon = true;
                    break;
                case presentsMorning.iChooseSword:
                    Novel.ƒS.Inventory.add(Novel.items.sword);
                    await Novel.ƒS.Inventory.open();
                    Novel.dataForSave.ownsPlayerWaepon = true;
                    break;
            }
        }
        else {
            let dialogPresentNoon = await Novel.ƒS.Menu.getInput(presentsNoon, "DialogBoxPresents");
            switch (dialogPresentNoon) {
                case presentsNoon.iChooseCloak:
                    Novel.dataForSave.ownsPlayerWaepon = false;
                    break;
                case presentsNoon.iChooseStaff:
                    Novel.dataForSave.ownsPlayerWaepon = true;
                    break;
            }
        }
        //Ruby erklärt den Weg zum Drachen
        await Novel.ƒS.Speech.tell(Novel.character.tiefling, "Der Drache lebt in den Bergen");
        await Novel.ƒS.Character.hide(Novel.character.tiefling);
        await Novel.ƒS.update();
        await Novel.ƒS.Character.show(Novel.character.tiefling, Novel.character.tiefling.pose.thinking, Novel.ƒS.positionPercent(35, 95));
        await Novel.ƒS.update(1);
        //Protagonist macht sich auf den Weg
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du verabschiedest dich und gehst weiter");
        await Novel.ƒS.Character.hide(Novel.character.tiefling);
        await Novel.ƒS.update();
        await Novel.ƒS.Character.show(Novel.character.tiefling, Novel.character.tiefling.pose.standard, Novel.ƒS.positionPercent(35, 95));
        await Novel.ƒS.update(1);
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
        },
        transitionThree: {
            duration: 1,
            alpha: "Transitions/02.png",
            edge: 1
        },
        transitionKnockOut: {
            duration: 0.05,
            alpha: "Transitions/01.png",
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
            background: "Images/Tavern/Tavern_Entrance1.png"
        },
        gasthausBar: {
            name: "gasthausBar",
            background: "Images/Tavern/Bar_Background.png"
        },
        laden: {
            name: "Laden",
            background: "Images/Shop/Shop_Background2.png"
        },
        feld: {
            name: "feld",
            background: "Images/OnTheRoad/Field1.png"
        },
        wald: {
            name: "wald",
            background: "Images/OnTheRoad/Forrest_Background1.png"
        },
        waldGespiegelt: {
            name: "waldGespiegelt",
            background: "Images/OnTheRoad/Forrest_Background_mirrored.png"
        },
        waldUpsideDown: {
            name: "waldUpsideDown",
            background: "Images/OnTheRoad/Forrest_Background_UpsideDown.png"
        },
        drachenHoehleGang: {
            name: "drachenhoehleGang",
            background: "Images/DragonCave/DragonCave1.1.png"
        },
        drachenHoehle: {
            name: "drachenhoehle",
            background: "Images/DragonCave/DragonCave2.1.png"
        }
    };
    Novel.roomInventory = {
        gasthausBarCounter: {
            name: "gasthausBarCounter",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "Images/Tavern/Bar_BarCounter.png"
            }
        },
        ladenTheke: {
            name: "ladenTheke",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "Images/Shop/Shop_ShopCounter2.png"
            }
        },
        waldBaeume: {
            name: "waldBaeume",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "Images/OnTheRoad/Forrest_Trees1.png"
            }
        },
        filterNacht: {
            name: "filterNacht",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "Images/Filter/Filter_Night1.png"
            }
        },
        sonnenstrahlen: {
            name: "sonnenstrahlen",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "Images/DragonCave/DragonCave_Sunlight1.png"
            }
        },
        metKrug: {
            name: "MetKrug",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "Images/Items/Item_MeadMug1.png"
            }
        },
        metKrug2: {
            name: "MetKrug2",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "Images/Items/Item_MeadMug2.png"
            }
        },
        metKrug3: {
            name: "MetKrug3",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "Images/Items/Item_MeadMug3.png"
            }
        },
        stone: {
            name: "Stein",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "Images/Items/Item_DragonEgg1.png",
            }
        },
    };
    Novel.character = {
        narrator: {
            name: ""
        },
        dwarf: {
            name: "Andvari",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "Images/Dwarf/DP1.png",
                thinking: "Images/Dwarf/DP2.png"
            }
        },
        tiefling: {
            name: "Ruby",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "Images/Tiefling/TP1.png",
                thinking: "Images/Tiefling/TP2.png"
            }
        },
        dragon: {
            name: "Drache",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                sleeping: "Images/Dragon/Dragon_Sleeping.png",
                angry: "Images/Dragon/D_Angry.png",
                happyWithBaby: "Images/Dragon/D_WithBaby.png"
            }
        },
        fairy: {
            name: "fairy",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "Images/Fairy/Fairy_P3.png",
                grateful: "Images/Fairy/Fairy_P1.png",
                afraid: "Images/Fairy/Fairy_P2.png"
            }
        },
        goblinGroup: {
            name: "goblinGroup",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "Images/Goblin/Goblin_GoblinGroup1.png",
                night: "Images/Goblin/Goblin_GoblinGroup_Night1.png",
                nightUpsideDown: "Images/Goblin/Goblin_GoblinGroup_Night_UpsideDown.png",
                sleepingNight: "Images/Goblin/Goblin_GoblinGroupSleeping_Night1.png",
                sleepingNightUpsideDown: "Images/Goblin/Goblin_GoblinGroupSleeping_Night_UpsideDown.png"
            }
        },
        goblinLeader: {
            name: "goblinLeader",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "Images/Goblin/Goblin_Leader1.png"
            }
        }
    };
    //ToDO:sound
    Novel.items = {
        cloak: {
            name: "Umhang",
            description: "Fancy Umhang",
            image: "Images/Items/Item_Cloak1.png"
        },
        staff: {
            name: "Stab",
            description: "Staff Attack",
            image: "Images/Items/Item_Staff1.png"
        },
        sword: {
            name: "Schwert",
            description: "Mighty Sword",
            image: "Images/Items/Item_Sword1.png"
        },
        stone: {
            name: "Stone",
            description: "Mysterious Stone",
            image: "Images/Items/Item_DragonEgg1.png"
        }
    };
    Novel.dataForSave = {
        nameProtagonist: "",
        drunknessLevel: 0,
        neededLongSleep: 0,
        ownsPlayerWaepon: true,
        givenEnding: ""
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
    function addDrunknessLevel() {
        console.log("Old DrunknessLevel " + Novel.dataForSave.drunknessLevel);
        Novel.dataForSave.drunknessLevel = Novel.dataForSave.drunknessLevel + 1;
        console.log("New DrunknessLevel " + Novel.dataForSave.drunknessLevel);
        SetDrunknessSight();
        if (Novel.dataForSave.drunknessLevel == 3) {
            Novel.dataForSave.neededLongSleep = 1;
        }
        console.log("did Player need long sleep? " + Novel.dataForSave.neededLongSleep);
    }
    Novel.addDrunknessLevel = addDrunknessLevel;
    function removeDrunknessLevel() {
        console.log("Old DrunknessLevel " + Novel.dataForSave.drunknessLevel);
        Novel.dataForSave.drunknessLevel = 0;
        console.log("New DrunknessLevel " + Novel.dataForSave.drunknessLevel);
        SetDrunknessSight();
    }
    Novel.removeDrunknessLevel = removeDrunknessLevel;
    function SetDrunknessSight() {
        //andere Bilder + andere Größe bei den Bildern
        switch (Novel.dataForSave.drunknessLevel) {
            case 0:
                document.getElementById("drunknessSight").setAttribute("style", "background-image: none;");
                break;
            case 1:
                document.getElementById("drunknessSight").setAttribute("style", "background-image: url('Images/Filter/DrunknessFilter1.png');");
                break;
            case 2:
                document.getElementById("drunknessSight").setAttribute("style", "background-image: url('Images/Filter/DrunknessFilter2.png');");
                break;
            case 3:
                document.getElementById("drunknessSight").setAttribute("style", "background-image: url('Images/Filter/DrunknessFilter3.png');");
                break;
        }
    }
    Novel.SetDrunknessSight = SetDrunknessSight;
    //------Animations------
    function fromLeftToRight(startX, startY, endX, endY) {
        return {
            start: { translation: Novel.ƒS.positionPercent(startX, startY) },
            end: { translation: Novel.ƒS.positionPercent(endX, endY) },
            duration: 2,
            playmode: Novel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Novel.fromLeftToRight = fromLeftToRight;
    //----------------------
    window.addEventListener("load", start);
    function start(_event) {
        //Menü
        gameMenu = Novel.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        let scenes = [
            //{ scene: Prolog, name: "Prolog" },
            //{ scene: Gasthaus, name: "Gasthaus" },
            //{id: "Laden", scene: Laden, name: "Laden"},
            { scene: Novel.Unterwegs1Goblins, name: "Unterwegs1Goblins" },
            { id: "Unterwegs1GoblinsAttack", scene: Novel.Unterwegs1GoblinsAttack, name: "Unterwegs1GoblinsAttack" },
            { id: "Unterwegs2Fee", scene: Novel.Unterwegs2Fee, name: "Unterwegs2Fee" },
            //{ scene: Drachenhort, name: "Drachenhort"},
            { id: "Ende", scene: Novel.Ende, name: "Ende" }
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
        //!!!!!!!!!!!!Startscreen durch Novel Page ersetzen?????????????
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
        let text = {
            narrator: {
                N000: "Du machst dich auf den Weg zu den Bergen. Plötzlich hörst du ein Geräusch.",
                N001: ""
            }
        };
        let howToTalkWithGoblins = {
            iChooseTalk: "die Sache friedlich regeln",
            iChooseFight: "Gegenangriff"
        };
        let sneakOrAttack = {
            iChooseSneak: "leise und vorsichtig wegrennen",
            iChooseAttack: "Angriff"
        };
        //Unterwegs -- Hilfeschreie aus der Ferne
        await Novel.ƒS.Location.show(Novel.location.feld);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N000);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du willst nachsehen");
        await Novel.ƒS.Location.show(Novel.location.wald);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Character.show(Novel.roomInventory.waldBaeume, Novel.roomInventory.waldBaeume.pose.standard, Novel.ƒS.positionPercent(50, 100));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Im Wald entdeckst du eine Gruppe Goblins");
        await Novel.ƒS.Character.show(Novel.character.goblinGroup, Novel.character.goblinGroup.pose.standard, Novel.ƒS.positionPercent(65, 65));
        await Novel.ƒS.update(1);
        //Protagonist wird von Goblins entdeckt
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du hörst ein Geräusch hinter dir, drehst dich um, entdeckst weiteren Goblin");
        await Novel.ƒS.Character.hide(Novel.character.goblinGroup);
        await Novel.ƒS.Character.hide(Novel.roomInventory.waldBaeume);
        await Novel.ƒS.update();
        await Novel.ƒS.Location.show(Novel.location.waldGespiegelt);
        await Novel.ƒS.update(0.1, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Character.show(Novel.character.goblinLeader, Novel.character.goblinLeader.pose.standard, Novel.ƒS.positionPercent(60, 90));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Er scheint wütend, macht sich bereit dich anzugreifen");
        let dialogHowToTalkWithGoblins = await Novel.ƒS.Menu.getInput(howToTalkWithGoblins, "DialogBoxGoblins");
        switch (dialogHowToTalkWithGoblins) {
            case howToTalkWithGoblins.iChooseFight:
                return "Unterwegs1GoblinsAttack";
            case howToTalkWithGoblins.iChooseTalk:
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Sie scheinen nicht an einer friedlichen Lösung interessiert zu sein");
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du wirst von den Goblins überwältigt");
                //Protagonist wird von den Goblins überwältigt und gefesselt
                await Novel.ƒS.Character.hide(Novel.character.goblinLeader);
                await Novel.ƒS.Location.show(Novel.location.blackscreen);
                await Novel.ƒS.update(Novel.transition.transitionKnockOut.duration, Novel.transition.transitionKnockOut.alpha, Novel.transition.transitionKnockOut.edge);
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Als du wieder zu die kommst ist es schon dunkel");
                await Novel.ƒS.Location.show(Novel.location.waldUpsideDown);
                await Novel.ƒS.Character.show(Novel.character.goblinGroup, Novel.character.goblinGroup.pose.nightUpsideDown, Novel.ƒS.positionPercent(40, 80));
                await Novel.ƒS.Character.show(Novel.roomInventory.filterNacht, Novel.roomInventory.filterNacht.pose.standard, Novel.ƒS.positionPercent(50, 100));
                await Novel.ƒS.update(1, Novel.transition.transitionKnockOut.alpha, Novel.transition.transitionKnockOut.edge);
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du hängst kopfüber");
                //Goblins schlafen ein
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "nach einer Weile schlafen sie ein");
                await Novel.ƒS.Character.hide(Novel.character.goblinGroup);
                await Novel.ƒS.Character.hide(Novel.roomInventory.filterNacht);
                await Novel.ƒS.Character.show(Novel.character.goblinGroup, Novel.character.goblinGroup.pose.sleepingNightUpsideDown, Novel.ƒS.positionPercent(40, 80));
                await Novel.ƒS.Character.show(Novel.roomInventory.filterNacht, Novel.roomInventory.filterNacht.pose.standard, Novel.ƒS.positionPercent(50, 100));
                await Novel.ƒS.update(1);
                //Protagonist schafft es Fesseln zu lösen
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Kurz vor Tagesanbruch: du schaffst es die Fesseln zu lösen und fällst zu Boden");
                await Novel.ƒS.Character.hide(Novel.character.goblinGroup);
                await Novel.ƒS.Character.hide(Novel.roomInventory.filterNacht);
                await Novel.ƒS.Location.show(Novel.location.blackscreen);
                await Novel.ƒS.update(Novel.transition.transitionKnockOut.duration, Novel.transition.transitionKnockOut.alpha, Novel.transition.transitionKnockOut.edge);
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "du rapelst dich auf");
                await Novel.ƒS.Location.show(Novel.location.wald);
                await Novel.ƒS.Character.show(Novel.character.goblinGroup, Novel.character.goblinGroup.pose.sleepingNight, Novel.ƒS.positionPercent(60, 70));
                await Novel.ƒS.Character.show(Novel.roomInventory.filterNacht, Novel.roomInventory.filterNacht.pose.standard, Novel.ƒS.positionPercent(50, 100));
                await Novel.ƒS.update();
                break;
        }
        let dialogSneakOrAttack = await Novel.ƒS.Menu.getInput(sneakOrAttack, "DialogBoxGoblins");
        switch (dialogSneakOrAttack) {
            case sneakOrAttack.iChooseAttack:
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Attack!!");
                return "Unterwegs1GoblinsAttack";
            case sneakOrAttack.iChooseSneak:
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "du versuchst langsam davon zu schleichen");
                await Novel.ƒS.Character.hide(Novel.character.goblinGroup);
                await Novel.ƒS.Character.hide(Novel.roomInventory.filterNacht);
                return "Unterwegs2Fee";
        }
    }
    Novel.Unterwegs1Goblins = Unterwegs1Goblins;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function Unterwegs1GoblinsAttack() {
        console.log("Szene: Unterwegs1GoblinsAttack");
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Goblins bemerken deinen Angriff");
        if (Novel.dataForSave.ownsPlayerWaepon) {
            //Protagonist hat Waffe mit der er Goblins besiegen kann
            await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du ziehst deine Waffe und besiegst Goblins");
            await Novel.ƒS.Character.hide(Novel.character.goblinLeader);
            return "Unterwegs2Fee";
        }
        else {
            //Protagonist hat keine Waffe und wird von Goblins besiegt
            await Novel.ƒS.Speech.tell(Novel.character.narrator, "You die");
            await Novel.ƒS.Character.hide(Novel.character.goblinLeader);
            return "Ende";
        }
    }
    Novel.Unterwegs1GoblinsAttack = Unterwegs1GoblinsAttack;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function Unterwegs2Fee() {
        console.log("Szene: Unterwegs2Fee");
        let text = {
            narrator: {
                N000: "Lerne die Fee kennen",
                N001: "Auftritt Fee",
                N002: ":)"
            },
            fairy: {
                F000: "Hallo, danke, dass du mich gerettet hast"
            }
        };
        let wannaFancyStone = {
            iChooseTakeIt: "Stein mitnehmen",
            iChooseLeaveIt: "Stein liegen lassen"
        };
        // P schnappt sich Fee und rennt davon
        await Novel.ƒS.Location.show(Novel.location.wald);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du schnappst die den Käfig mit der Fee und möchtest verschwinden");
        //P stolpert über Stein, Möglichkeit ihn mitzunehmen
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Stolperst über Stein, der neben Käfig liegt");
        await Novel.ƒS.Character.show(Novel.roomInventory.stone, Novel.roomInventory.stone.pose.standard, Novel.ƒS.positionPercent(75, 100));
        await Novel.ƒS.update(1);
        let dialogTakeStone = await Novel.ƒS.Menu.getInput(wannaFancyStone, "DialogBoxGoblins");
        switch (dialogTakeStone) {
            case wannaFancyStone.iChooseTakeIt:
                Novel.ƒS.Inventory.add(Novel.items.stone);
                await Novel.ƒS.Inventory.open();
                break;
            case wannaFancyStone.iChooseLeaveIt:
                break;
        }
        await Novel.ƒS.Character.hide(Novel.roomInventory.stone);
        // P und F lernen sich kennen
        await Novel.ƒS.Location.show(Novel.location.feld);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "In sicherer Entfernung befreist du Fee aus Käfig");
        await Novel.ƒS.Character.show(Novel.character.fairy, Novel.character.fairy.pose.grateful, Novel.ƒS.positionPercent(70, 65));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.character.fairy, text.fairy.F000);
        await Novel.ƒS.Character.hide(Novel.character.fairy);
        //await ƒS.update();
        await Novel.ƒS.Character.show(Novel.character.fairy, Novel.character.fairy.pose.standard, Novel.ƒS.positionPercent(55, 75));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.character.fairy, "Ich kann dir den Weg zeigen");
        //P und F rätseln über Stein -- nur möglich wenn Stein im Inventar
        if (Novel.ƒS.Inventory.getAmount(Novel.items.stone)) {
            await Novel.ƒS.Speech.tell(Novel.character.fairy, "Interessanter Stein");
        }
        //Eingang der Drachenhöhle wird erreicht
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Ihr erreicht den Eingang der Höhle");
        await Novel.ƒS.Location.show(Novel.location.blackscreen);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
    }
    Novel.Unterwegs2Fee = Unterwegs2Fee;
})(Novel || (Novel = {}));
//# sourceMappingURL=Template.js.map