"use strict";
var Novel;
(function (Novel) {
    async function Drachenhort() {
        console.log("Szene: Drachenhort");
        //test
        //ƒS.Inventory.add(items.staff);
        //ƒS.Inventory.add(items.cloak);
        //ƒS.Inventory.add(items.sword);
        //ƒS.Inventory.add(items.stone);
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
        let howToDealWithDragons;
        /* --> alle Auswahlmöglichkeiten
        howToDealWithDragons = {
            iChooseStaff: "Stab",
            iChooseCloak: "Umhang",
            iChooseSword: "Schwert",
            iChooseStone: "Stein",
            iChooseRun: "Weglaufen!!!"
        };*/
        if (Novel.ƒS.Inventory.getAmount(Novel.items.staff)) {
            howToDealWithDragons = {
                iChooseStaff: "Stab",
                iChooseRun: "Weglaufen!!!"
            };
        }
        if (Novel.ƒS.Inventory.getAmount(Novel.items.staff) && Novel.ƒS.Inventory.getAmount(Novel.items.stone)) {
            howToDealWithDragons = {
                iChooseStaff: "Stab",
                iChooseStone: "Stein",
                iChooseRun: "Weglaufen!!!"
            };
        }
        if (Novel.ƒS.Inventory.getAmount(Novel.items.cloak)) {
            howToDealWithDragons = {
                iChooseCloak: "Umhang",
                iChooseRun: "Weglaufen!!!"
            };
        }
        if (Novel.ƒS.Inventory.getAmount(Novel.items.cloak) && Novel.ƒS.Inventory.getAmount(Novel.items.stone)) {
            howToDealWithDragons = {
                iChooseCloak: "Umhang",
                iChooseStone: "Stein",
                iChooseRun: "Weglaufen!!!"
            };
        }
        if (Novel.ƒS.Inventory.getAmount(Novel.items.sword)) {
            howToDealWithDragons = {
                iChooseSword: "Schwert",
                iChooseRun: "Weglaufen!!!"
            };
        }
        if (Novel.ƒS.Inventory.getAmount(Novel.items.sword) && Novel.ƒS.Inventory.getAmount(Novel.items.stone)) {
            howToDealWithDragons = {
                iChooseSword: "Schwert",
                iChooseStone: "Stein",
                iChooseRun: "Weglaufen!!!"
            };
        }
        //P und F betreten Höhle
        await Novel.ƒS.Location.show(Novel.location.blackscreen);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Es ist dunkel");
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du läufst weiter und es wird heller");
        await Novel.ƒS.Location.show(Novel.location.drachenHoehleGang);
        await Novel.ƒS.update(Novel.transition.transitionThree.duration, Novel.transition.transitionThree.alpha, Novel.transition.transitionThree.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "gelangst ans Ende der Höhle");
        //sie entdecken schlafenden Drachen
        await Novel.ƒS.Location.show(Novel.location.drachenHoehle);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Entdeckst Drache");
        await Novel.ƒS.Character.show(Novel.character.dragon, Novel.character.dragon.pose.sleeping, Novel.ƒS.positionPercent(55, 80));
        await Novel.ƒS.update(1);
        //await ƒS.Character.show(roomInventory.sonnenstrahlen, roomInventory.sonnenstrahlen.pose.standard, ƒS.positionPercent(50, 100));
        //await ƒS.update(1);
        //Drache wird geweckt
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Fee erschrickt; stößt Stein um -> lautes Geräusch!!!");
        await Novel.ƒS.Character.show(Novel.character.fairy, Novel.character.fairy.pose.afraid, Novel.ƒS.positionPercent(20, 70));
        await Novel.ƒS.update(0.5);
        await Novel.ƒS.Speech.tell(Novel.character.fairy, "Glaubst du er hat das bemerkt?");
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Drache wird geweckt");
        await Novel.ƒS.Character.hide(Novel.roomInventory.sonnenstrahlen);
        await Novel.ƒS.Character.hide(Novel.character.dragon);
        await Novel.ƒS.update();
        await Novel.ƒS.Character.show(Novel.character.dragon, Novel.character.dragon.pose.angry, Novel.ƒS.positionPercent(50, 100));
        await Novel.ƒS.update(1);
        //F schlägt vor ins Inventar zu schauen
        await Novel.ƒS.Speech.tell(Novel.character.fairy, "Möchtest du in dein Inventar schauen?");
        //Möglichkeit Ratschlag der Fee zu befolgen
        let dialogRatschlagBefolgen = await Novel.ƒS.Menu.getInput(ratschlagBefolgen, "DialogBoxRatschlagBefolgen");
        switch (dialogRatschlagBefolgen) {
            case ratschlagBefolgen.iCHooseNo:
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Angrif!!!!!!");
                await Novel.ƒS.Character.hide(Novel.character.dragon);
                await Novel.ƒS.Character.hide(Novel.character.fairy);
                Novel.dataForSave.badDragonEndingNo = 0;
                return "EndingBadDragon";
            case ratschlagBefolgen.iChooseYes:
                break;
        }
        //Ratschlag der Fee befolgt --> Blick ins Inventar
        await Novel.ƒS.Inventory.open();
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Was möchtest du tun?");
        let dialogHowToDealWithDragons = await Novel.ƒS.Menu.getInput(howToDealWithDragons, "DialogBoxhowToDealWithDragons");
        switch (dialogHowToDealWithDragons) {
            case howToDealWithDragons.iChooseStaff:
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Staff Attack!");
                await Novel.ƒS.Character.hide(Novel.character.dragon);
                await Novel.ƒS.Character.hide(Novel.character.fairy);
                Novel.dataForSave.badDragonEndingNo = 1;
                return "EndingBadDragon";
            case howToDealWithDragons.iChooseCloak:
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Here's my cloak :)");
                await Novel.ƒS.Character.hide(Novel.character.dragon);
                await Novel.ƒS.Character.hide(Novel.character.fairy);
                Novel.dataForSave.badDragonEndingNo = 2;
                return "EndingBadDragon";
            case howToDealWithDragons.iChooseSword:
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "My sword will kill you!");
                await Novel.ƒS.Character.hide(Novel.character.dragon);
                await Novel.ƒS.Character.hide(Novel.character.fairy);
                return "EndingSadDragon";
            case howToDealWithDragons.iChooseStone:
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "I give you my stone :)");
                await Novel.ƒS.Character.hide(Novel.character.dragon);
                await Novel.ƒS.Character.hide(Novel.character.fairy);
                return "EndingHappyDragon";
            case howToDealWithDragons.iChooseRun:
                await Novel.ƒS.Speech.tell(Novel.character.narrator, "Run Forrest Run");
                await Novel.ƒS.Character.hide(Novel.character.dragon);
                await Novel.ƒS.Character.hide(Novel.character.fairy);
                Novel.dataForSave.badDragonEndingNo = 3;
                return "EndingBadDragon";
        }
    }
    Novel.Drachenhort = Drachenhort;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function EndingBadDragon() {
        console.log("This is the bad End");
        await Novel.ƒS.Location.show(Novel.location.blackscreen);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "This is the bad end");
        /*
        0: Ending Attack
        1: Ending Staff
        2: Ending Cloak
        3: Ending Run
        */
        if (Novel.dataForSave.badDragonEndingNo === 0) {
            await Novel.ƒS.Speech.tell(Novel.character.narrator, "Attack");
        }
        if (Novel.dataForSave.badDragonEndingNo === 1) {
            await Novel.ƒS.Speech.tell(Novel.character.narrator, "Staff");
        }
        if (Novel.dataForSave.badDragonEndingNo === 2) {
            await Novel.ƒS.Speech.tell(Novel.character.narrator, "Cloak");
        }
        if (Novel.dataForSave.badDragonEndingNo === 3) {
            await Novel.ƒS.Speech.tell(Novel.character.narrator, "Run");
        }
        return "Epilog";
    }
    Novel.EndingBadDragon = EndingBadDragon;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function EndingBadGoblins() {
        console.log("This is the bad Goblin End");
        await Novel.ƒS.Location.show(Novel.location.blackscreen);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "This is the bad goblin end");
        return "Epilog";
    }
    Novel.EndingBadGoblins = EndingBadGoblins;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function EndingHappyDragon() {
        console.log("This is the Happy End");
        await Novel.ƒS.Location.show(Novel.location.blackscreen);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "This is the happy end");
        return "Epilog";
    }
    Novel.EndingHappyDragon = EndingHappyDragon;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function EndingSadDragon() {
        console.log("This is the sad End");
        await Novel.ƒS.Location.show(Novel.location.blackscreen);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "This is the sad end");
        return "Epilog";
    }
    Novel.EndingSadDragon = EndingSadDragon;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function Epilog() {
        console.log("Szene: Prolog");
        await Novel.ƒS.Location.show(Novel.location.blackscreen);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        // Novel Page
        Novel.ƒS.Text.setClass("Epilog");
        Novel.ƒS.Text.print("Ich bin ein Epilog :)");
    }
    Novel.Epilog = Epilog;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function Gasthaus() {
        console.log("Szene: Gasthaus");
        let text = {
            narrator: {
                N000: "Du betrittst das Gasthaus.",
                N001: "Es ist nicht gerade viel los und die Stimmung wirkt betrübt.",
                N002: "Aber da du nur Essen und ein Quartier für die Nacht suchst, stört dich das nicht weiter und du begibst dich zum Bartresen.",
                N003: "Als du dich setzt, erscheint auch schon der Gastwirt.",
                N004: "Er begrüßt dich herzlich. Jedoch ist ihm anzumerken, dass ihm etwas Sorgen bereitet.",
                N005: "Du bestellst etwas zu essen.",
                N006: "Du übernachtest also im Gasthaus und machst dich am nächsten morgen auf den Weg zu Rubys Laden.",
                N007: "Plötzlich ruft ein Mitarbeiter den Gastwirt zu sich.",
                N008: "Beide sind in eine aufgeregte Diskussion vertieft und verschwinden in einem Nebenraum. Bis der Wirt schließlich wieder an den Tresen zurückkehrt.",
                N009: "Du beschließt nun doch dem Dorf zu helfen.",
                N010: "Schließlich war das ein sehr guter Met und es wäre doch schade, wenn du nie wieder davon trinken könntest … Außerdem könntest du so deiner Familie beweisen, dass du auch ein Abenteurer bist!",
                N011: "Als du dem Wirt von deinem Beschluss erzählst, ist er überglücklich."
            },
            dwarf: {
                D000: "Willkommen im besten Gasthaus weit und breit! :)",
                D001: "Das tut mir aber leid. Bedauerlicherweise kann ich dir nichts zu essen anbieten.",
                D002: "Kein Gasthaus hier in der Gegend kann das!",
                D003: "Nicht seitdem wir von dem Drachen heimgesucht werden. Er hat all unsere Felder zerstört und unsere Vorräte sind fast aufgebraucht. Es reicht gerade einmal noch für uns selbst.",
                D004: "Ohne jemand mutigen der den Drachen besiegt weiß ich nicht wie es weiter gehen soll.",
                D005: "Aber gut. Du siehst müde aus und ich will dich nicht mit unseren Problemen belästigen.",
                D006: "Ich kann dir zwar kein Essen anbieten, aber dafür einen Krug des besten Mets, den es gibt!",
                D007: "Hier, bitte sehr! Lass es dir schmecken!",
                D008: "Diesen Met gibt es exklusiv nur in diesem Dorf. Haben wir alles unserem Geheimrezept zu verdanken :)",
                D009: "Wir können ihn nur noch anbieten, da die Zutaten importiert werden. ",
                D010: "Mal sehen, wie lange die Händler sich noch hierher trauen. Nicht, dass sie fürchten von dem Drachen gefressen zu werden.",
                D011: "Wirklich?! Das wäre wirklich wunderbar!",
                D012: "Am besten du gehst zu Ruby.",
                D013: "Sie weiß über alles Bescheid. Sie kann dir bestimmt sagen wo die Drachenhöhle liegt.",
                D014: "Du kannst Ruby morgen früh in ihrem Laden finden. Am besten schläfst du jetzt erstmal eine Runde. Ich lasse dir sofort ein Zimmer herrichten!",
                D015: "Genieße ihn! Solange wir noch welchen haben.",
                D016: "Es freut mich immer wieder zu sehen, dass es meinen Gästen schmeckt.",
                D017: "Wie gefällt dir sonst so unser kleines Dorf?",
                D018: "Ich weiß momentan macht es nicht viel her. Aber bevor der Drache da war … eine wahre Pracht!",
                D019: "Du verträgst aber ganz schön viel…",
                D020: "Habe ich dir schon gesagt, dass es diesen Met auch nur in unserem Dorf gibt?",
                D021: "Wir einheimischen nennen ihn auch Drachenblut…",
                D022: "…wie ironisch, dass das momentan das Einzige ist, was wir verkaufen können.",
                D023: "Jetzt sind auch unsere Met Vorräte aufgebraucht und kein Händler traut sich mehr in unser Dorf.",
                D024: "Hoffentlich findet bald jemand eine Lösung für dieses Drachenproblem!"
            }
        };
        let helfenOderTrinkenRoundOne = {
            iChooseHelp: "Ich werde euch helfen!",
            iChooseDrink: "Ich hätte gerne einen Krug Met."
        };
        let helfenOderTrinkenRoundTwo = {
            iChooseHelp: "Vielleicht sollte ich euch doch helfen.",
            iChooseDrink: "Noch ein Krug Met bitte!"
        };
        let helfenOderTrinkenRoundThree = {
            iChooseHelp: "Ich besiege den Drachen!!!",
            iChooseDrink: "Mehr Meeeeeeeet!!!"
        };
        //Eintritt Gasthaus
        await Novel.ƒS.Location.show(Novel.location.gasthausHauptraum);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N000);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N001);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N002);
        //Am Bartresen
        await Novel.ƒS.Location.show(Novel.location.gasthausBar);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Character.show(Novel.roomInventory.gasthausBarCounter, Novel.roomInventory.gasthausBarCounter.pose.standard, Novel.ƒS.positionPercent(50, 100));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N003);
        await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.standard, Novel.ƒS.positionPercent(30, 96.5));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D000);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N004);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N005);
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D001);
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D002);
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D003);
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D004);
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D005);
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D006);
        let dialogHelfenOderTrinken1 = await Novel.ƒS.Menu.getInput(helfenOderTrinkenRoundOne, "DialogBoxHelfenOderTrinken");
        switch (dialogHelfenOderTrinken1) {
            case helfenOderTrinkenRoundOne.iChooseHelp:
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D011);
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.thinking, Novel.ƒS.positionPercent(30, 96.5));
                await Novel.ƒS.update();
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D012);
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D013);
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.standard, Novel.ƒS.positionPercent(30, 96.5));
                await Novel.ƒS.update();
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D014);
                await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N006);
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Character.hide(Novel.roomInventory.gasthausBarCounter);
                return "Laden";
            case helfenOderTrinkenRoundOne.iChooseDrink:
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D007);
                await Novel.ƒS.Character.show(Novel.roomInventory.metKrug, Novel.roomInventory.metKrug.pose.standard, Novel.ƒS.positionPercent(50, 83));
                //Krug auf Theke stellen
                await Novel.ƒS.Character.hide(Novel.roomInventory.gasthausBarCounter);
                await Novel.ƒS.Character.show(Novel.roomInventory.gasthausBarCounter, Novel.roomInventory.gasthausBarCounter.pose.standard, Novel.ƒS.positionPercent(50, 100));
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.standard, Novel.ƒS.positionPercent(30, 96.5));
                await Novel.ƒS.update();
                //
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D008);
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D009);
                Novel.addDrunknessLevel();
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.thinking, Novel.ƒS.positionPercent(30, 96.5));
                await Novel.ƒS.update();
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D010);
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.standard, Novel.ƒS.positionPercent(30, 96.5));
                await Novel.ƒS.update();
                break;
        }
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D015);
        let dialogHelfenOderTrinken2 = await Novel.ƒS.Menu.getInput(helfenOderTrinkenRoundTwo, "DialogBoxHelfenOderTrinken");
        switch (dialogHelfenOderTrinken2) {
            case helfenOderTrinkenRoundTwo.iChooseHelp:
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D011);
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.thinking, Novel.ƒS.positionPercent(30, 96.5));
                await Novel.ƒS.update();
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D012);
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D013);
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.standard, Novel.ƒS.positionPercent(30, 96.5));
                await Novel.ƒS.update();
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D014);
                await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N006);
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
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
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D016);
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D017);
                Novel.addDrunknessLevel();
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D018);
                break;
        }
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D019);
        let dialogHelfenOderTrinken3 = await Novel.ƒS.Menu.getInput(helfenOderTrinkenRoundThree, "DialogBoxHelfenOderTrinken");
        switch (dialogHelfenOderTrinken3) {
            case helfenOderTrinkenRoundThree.iChooseHelp:
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D011);
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.thinking, Novel.ƒS.positionPercent(30, 96.5));
                await Novel.ƒS.update();
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D012);
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D013);
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
                await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.standard, Novel.ƒS.positionPercent(30, 96.5));
                await Novel.ƒS.update();
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D014);
                await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N006);
                await Novel.ƒS.Character.hide(Novel.character.dwarf);
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
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D020);
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D021);
                Novel.addDrunknessLevel();
                await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D022);
                break;
        }
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N007);
        await Novel.ƒS.Character.hide(Novel.character.dwarf);
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N008);
        await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.thinking, Novel.ƒS.positionPercent(30, 96.5));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D023);
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D024);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N009);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N010);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N011);
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D011);
        await Novel.ƒS.Character.hide(Novel.character.dwarf);
        await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.thinking, Novel.ƒS.positionPercent(30, 96.5));
        await Novel.ƒS.update();
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D012);
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D013);
        await Novel.ƒS.Character.hide(Novel.character.dwarf);
        await Novel.ƒS.Character.show(Novel.character.dwarf, Novel.character.dwarf.pose.standard, Novel.ƒS.positionPercent(30, 96.5));
        await Novel.ƒS.update();
        await Novel.ƒS.Speech.tell(Novel.character.dwarf, text.dwarf.D014);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N006);
        await Novel.ƒS.Character.hide(Novel.character.dwarf);
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
                N000: "Am nächsten Morgen machst du dich auf den Weg zu Rubys Laden.",
                N001: "Der Met war wohl ein bisschen stärker als gedacht und so ist es erst Mittag als du dich zu Rubys Laden begibst.",
                N002: "Du betrittst den Laden und willst dich gerade ein bisschen umschauen, als eine junge Tieflingdame aus einem Nebenzimmer kommt und dich begrüßt.",
                N003: "Du erzählst ihr, von Gestern Abend und, dass der Gastwirt dich geschickt hat.",
                N004: "Du bedankst und verabschiedest dich bei Ruby, bevor du dich schließlich auf den in die Berge machst."
            },
            tiefling: {
                T000: "Hallo, Ich bin Ruby.",
                T001: "Willkommen in meinem Laden! Wie kann ich dir helfen?",
                T002: "Ach ja, zu Andvari geh ich immer gerne. In seinem Gasthaus ist normalerweise immer so viel los :)",
                T003: "Natürlich helfe ich dir gerne! Das Drachenproblem betrifft mich ja genauso sehr wie alle anderen in unserem Dorf auch.",
                T004: "Man munkelt, dass der Drache seine Höhle in den Bergen hat und sich dort meistens versteckt.",
                T005: "Es wäre wirklich schön, wenn er aufhören würde uns heimzusuchen.",
                T006: "Einige denken ihn zu töten wäre die einzige Lösung… Ich denke nicht, dass man das tun sollte. Es wird schon einen Grund haben, wieso der Drache jetzt erst aufgetaucht ist…",
                T007: "Vielleicht lässt sich die Sache ja friedlich klären? Denke doch an meine Worte, wenn du ihm begegnest.",
                T008: "Aber genug, ich schweife ab. Du musst los!",
                T009: "Aber davor würde ich dir gerne etwas mitgeben, was dir auf deiner Reise vielleicht helfen könnte.",
                T010: "Was möchtest du mitnehmen?",
                T011: "Leider habe ich mein letztes Schwert heute Morgen verkauft, aber vielleicht findest du ja etwas anderes. Was möchtest du mitnehmen?",
                T012: "Ich hoffe mein Geschenk wird dir auf deiner Reise behilflich sein. Viel Glück!"
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
        await Novel.ƒS.Character.show(Novel.roomInventory.ladenTheke, Novel.roomInventory.ladenTheke.pose.standard, Novel.ƒS.positionPercent(50, 100));
        await Novel.ƒS.update(0.3);
        if (Novel.dataForSave.neededLongSleep === false) {
            await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N000);
        }
        else {
            await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N001);
        }
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N002);
        //mit Ruby reden
        await Novel.ƒS.Character.show(Novel.character.tiefling, Novel.character.tiefling.pose.standard, Novel.ƒS.positionPercent(35, 95));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.character.tiefling, text.tiefling.T000);
        await Novel.ƒS.Speech.tell(Novel.character.tiefling, text.tiefling.T001);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N003);
        await Novel.ƒS.Speech.tell(Novel.character.tiefling, text.tiefling.T002);
        await Novel.ƒS.Speech.tell(Novel.character.tiefling, text.tiefling.T003);
        await Novel.ƒS.Character.hide(Novel.character.tiefling);
        await Novel.ƒS.Character.show(Novel.character.tiefling, Novel.character.tiefling.pose.thinking, Novel.ƒS.positionPercent(35, 95));
        await Novel.ƒS.update();
        await Novel.ƒS.Speech.tell(Novel.character.tiefling, text.tiefling.T004);
        await Novel.ƒS.Speech.tell(Novel.character.tiefling, text.tiefling.T005);
        await Novel.ƒS.Speech.tell(Novel.character.tiefling, text.tiefling.T006);
        await Novel.ƒS.Speech.tell(Novel.character.tiefling, text.tiefling.T007);
        await Novel.ƒS.Character.hide(Novel.character.tiefling);
        await Novel.ƒS.Character.show(Novel.character.tiefling, Novel.character.tiefling.pose.standard, Novel.ƒS.positionPercent(35, 95));
        await Novel.ƒS.update();
        await Novel.ƒS.Speech.tell(Novel.character.tiefling, text.tiefling.T008);
        //Ruby bietet Geschenk an
        if (Novel.dataForSave.neededLongSleep === false) {
            await Novel.ƒS.Speech.tell(Novel.character.tiefling, text.tiefling.T009);
            await Novel.ƒS.Speech.tell(Novel.character.tiefling, text.tiefling.T010);
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
            await Novel.ƒS.Speech.tell(Novel.character.tiefling, text.tiefling.T011);
            let dialogPresentNoon = await Novel.ƒS.Menu.getInput(presentsNoon, "DialogBoxPresents");
            switch (dialogPresentNoon) {
                case presentsNoon.iChooseCloak:
                    Novel.ƒS.Inventory.add(Novel.items.cloak);
                    await Novel.ƒS.Inventory.open();
                    Novel.dataForSave.ownsPlayerWaepon = false;
                    break;
                case presentsNoon.iChooseStaff:
                    Novel.ƒS.Inventory.add(Novel.items.staff);
                    await Novel.ƒS.Inventory.open();
                    Novel.dataForSave.ownsPlayerWaepon = true;
                    break;
            }
        }
        await Novel.ƒS.Speech.tell(Novel.character.tiefling, text.tiefling.T012);
        //Protagonist macht sich auf den Weg
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.narrator.N004);
        await Novel.ƒS.Character.hide(Novel.character.tiefling);
        await Novel.ƒS.Character.hide(Novel.roomInventory.ladenTheke);
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
        blackscreen: {
            name: "blackscreen",
            background: "Images/Locations/blackscreen.png"
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
        },
        drachenHoehleEingang: {
            name: "drachenHoehleEingang",
            background: "Images/DragonCave/CaveEntrance1.png"
        },
        talGutesWetter: {
            name: "talGutesWetter",
            background: "Images/OnTheRoad/ValleyGoodWeather1.png"
        },
        talSchlechtesWetter: {
            name: "talSchlechtesWetter",
            background: "Images/OnTheRoad/ValleyBadWeather1.png"
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
        filterLicht: {
            name: "filterLicht",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "Images/Filter/LightFilter1.png"
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
        blitze: {
            name: "blitze",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                standard: "Images/OnTheRoad/Lightning1.png",
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
                afraid: "Images/Fairy/Fairy_P2_2.png"
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
            description: "„Er schützt dich vor nichts (abgesehen von dem Wetter vielleicht), er hilft dir nicht im Kampf, aber du siehst einfach fabelhaft aus!“",
            image: "Images/Items/Item_Cloak1.png"
        },
        staff: {
            name: "Stab",
            description: "„Macht nicht viel her, kann aber durchaus effektiv sein, wenn es in die richtigen Hände fällt“",
            image: "Images/Items/Item_Staff1.png"
        },
        sword: {
            name: "Schwert",
            description: "„Eine schmuckvoll verzierte Waffe, die schon viele Besitzer und noch mehr Kämpfe erlebt hat“",
            image: "Images/Items/Item_Sword1.png"
        },
        stone: {
            name: "Stone",
            description: "Mysteriöser Stein",
            image: "Images/Items/Item_DragonEgg1.png"
        }
    };
    Novel.dataForSave = {
        drunknessLevel: 0,
        neededLongSleep: false,
        ownsPlayerWaepon: true,
        longTimeWithGoblins: true,
        badDragonEndingNo: 0
    };
    //Menü
    let inGameMenu = {
        //buttons, die man angezeigt haben möchte & strings dienen zur css-gestaltung
        credits: "Credits",
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
            case inGameMenu.credits:
                showCredits();
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
                break;
            case Novel.ƒ.KEYBOARD_CODE.C:
                showCredits();
                break;
        }
    }
    function showCredits() {
        Novel.ƒS.Text.addClass("credits");
        Novel.ƒS.Text.print("Hier könnten jetzt Credits stehen.");
    }
    Novel.showCredits = showCredits;
    function addDrunknessLevel() {
        console.log("Old DrunknessLevel " + Novel.dataForSave.drunknessLevel);
        Novel.dataForSave.drunknessLevel = Novel.dataForSave.drunknessLevel + 1;
        console.log("New DrunknessLevel " + Novel.dataForSave.drunknessLevel);
        SetDrunknessSight();
        if (Novel.dataForSave.drunknessLevel == 3) {
            Novel.dataForSave.neededLongSleep = true;
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
            { scene: Novel.Drachenhort, name: "Drachenhort" },
            { id: "EndingHappyDragon", scene: Novel.EndingHappyDragon, name: "EndingHappyDragon" },
            { id: "EndingSadDragon", scene: Novel.EndingSadDragon, name: "EndingSadDragon" },
            { id: "EndingBadDragon", scene: Novel.EndingBadDragon, name: "EndingBadDragon" },
            { id: "EndingBadGoblins", scene: Novel.EndingBadGoblins, name: "EndingBadGoblins" },
            { id: "Epilog", scene: Novel.Epilog, name: "Epilog" }
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
                T000: "&nbsp;",
                T001: "198 n.D.",
                T002: "Die Drachenkriege sind seit fast 200 Jahren vorbei. ",
                T003: "Obwohl mit den letzten verbleibenden Drachen Frieden geschlossen wurde, halten diese sich nun überwiegend im Verborgenen auf.",
                T004: "Nur selten bekommt man einen von Ihnen zu sehen.",
                T005: "Nach einer längeren Reise kommst du gerade in einem kleinen Dorf an.",
                T006: "Du stammst aus einer, in deiner Heimat, angesehenen Familie von Abenteurern.",
                T007: "Da du jedoch der Jüngste in deiner Familie bist, steht dir das große Glück zu jegliche Botengänge zu erledigen. Von solch einem Botengang kommst du gerade.",
                T008: "Du bist hungrig und sehnst dich nach einem Bett als du am Ende der Straße ein Gasthaus entdeckst."
            },
            novelPage: {
                N000: "<h1> Shortcuts </h1><b> F8: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Save <br><b> F9: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Load <br><b> M: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Open/Close Menu<br><b> C: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; show Credits<br>"
            }
        };
        await Novel.ƒS.Location.show(Novel.location.blackscreen);
        await Novel.ƒS.update(Novel.transition.transitionTwo.duration, Novel.transition.transitionTwo.alpha, Novel.transition.transitionTwo.edge);
        //Anzeige Shortcuts
        Novel.ƒS.Text.addClass("menuShortcuts");
        await Novel.ƒS.Text.print(text.novelPage.N000);
        //Prolog
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.prologText.T001);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.prologText.T002);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.prologText.T003);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.prologText.T004);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.prologText.T005);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.prologText.T006);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.prologText.T007);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, text.prologText.T008);
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
                Novel.dataForSave.longTimeWithGoblins = false;
                return "Unterwegs1GoblinsAttack";
            case howToTalkWithGoblins.iChooseTalk:
                Novel.dataForSave.longTimeWithGoblins = true;
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
                await Novel.ƒS.Character.hide(Novel.character.goblinGroup);
                await Novel.ƒS.Character.hide(Novel.roomInventory.filterNacht);
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
            return "EndingBadGoblins";
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
        await Novel.ƒS.Character.hide(Novel.character.fairy);
        await Novel.ƒS.Location.show(Novel.location.drachenHoehleEingang);
        await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Euer Weg endet an einem Felsvorsprung. Ihr habt den Eingang der Höhle erreicht");
        await Novel.ƒS.Character.show(Novel.character.fairy, Novel.character.fairy.pose.standard, Novel.ƒS.positionPercent(25, 55));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.character.fairy, "Wir sind da");
        //Ausblick über Tal  --> je nachdem wie viel Zeit mit den Goblins verbracht wurde
        if (Novel.dataForSave.longTimeWithGoblins) {
            //es wurde viel Zeit mit den Goblins verschwendet -> schlechtes Wetter
            await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du drehst dich um und erhälst einen Ausblick über das Tal. Jedoch verleiht ihm das schlechte Wetter einen erschreckendes Aussehen");
            await Novel.ƒS.Location.show(Novel.location.talSchlechtesWetter);
            await Novel.ƒS.Character.hide(Novel.character.fairy);
            await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
            await Novel.ƒS.Character.show(Novel.roomInventory.blitze, Novel.roomInventory.blitze.pose.standard, Novel.ƒS.positionPercent(50, 100));
            await Novel.ƒS.update();
            await Novel.ƒS.Character.hide(Novel.roomInventory.blitze);
            //await ƒS.update(0.5);
            await Novel.ƒS.Character.show(Novel.roomInventory.filterLicht, Novel.roomInventory.filterLicht.pose.standard, Novel.ƒS.positionPercent(50, 100));
            await Novel.ƒS.update(1);
            await Novel.ƒS.Character.hide(Novel.roomInventory.filterLicht);
            await Novel.ƒS.update(2);
        }
        else {
            //wenig Zeit verschwendet -> gutes Wetter
            await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du drehst dich um und erhälst einen wunderschönen Ausblick über das Tal. Du vergisst fast wieso du hier bist.");
            await Novel.ƒS.Location.show(Novel.location.talGutesWetter);
            await Novel.ƒS.Character.hide(Novel.character.fairy);
            await Novel.ƒS.update(Novel.transition.transitionOne.duration, Novel.transition.transitionOne.alpha, Novel.transition.transitionOne.edge);
            await Novel.ƒS.Speech.tell(Novel.character.narrator, "Du vergisst fast wieso du hier bist.");
        }
        await Novel.ƒS.Speech.tell(Novel.character.fairy, "Lass uns weiter gehen!");
        await Novel.ƒS.Speech.tell(Novel.character.narrator, "Ihr geht zusammen in die Höhle");
        await Novel.ƒS.Character.hide(Novel.character.fairy);
    }
    Novel.Unterwegs2Fee = Unterwegs2Fee;
})(Novel || (Novel = {}));
//# sourceMappingURL=Template.js.map