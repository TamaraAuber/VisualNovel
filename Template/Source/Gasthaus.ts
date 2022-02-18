namespace Novel {
    export async function Gasthaus(): ƒS.SceneReturn {
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

        document.getElementById("speech").hidden = false;

        //Eintritt Gasthaus
        await ƒS.Location.show(location.gasthausHauptraum);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Speech.tell(character.narrator, text.narrator.N000);
        await ƒS.Speech.tell(character.narrator, text.narrator.N001);
        await ƒS.Speech.tell(character.narrator, text.narrator.N002);

        //Am Bartresen
        await ƒS.Location.show(location.gasthausBar);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Character.show(roomInventory.gasthausBarCounter, roomInventory.gasthausBarCounter.pose.standard, ƒS.positionPercent(50, 100));
        await ƒS.update(1);

        await ƒS.Speech.tell(character.narrator, text.narrator.N003);

        await ƒS.Character.show(character.dwarf, character.dwarf.pose.standard, ƒS.positionPercent(30, 96.5));
        await ƒS.update(1);

        await ƒS.Speech.tell(character.dwarf, text.dwarf.D000);
        await ƒS.Speech.tell(character.narrator, text.narrator.N004);
        await ƒS.Speech.tell(character.narrator, text.narrator.N005);
        await ƒS.Speech.tell(character.dwarf, text.dwarf.D001);
        await ƒS.Speech.tell(character.dwarf, text.dwarf.D002);
        await ƒS.Speech.tell(character.dwarf, text.dwarf.D003);
        await ƒS.Speech.tell(character.dwarf, text.dwarf.D004);
        await ƒS.Speech.tell(character.dwarf, text.dwarf.D005);
        await ƒS.Speech.tell(character.dwarf, text.dwarf.D006);

        let dialogHelfenOderTrinken1 = await ƒS.Menu.getInput(helfenOderTrinkenRoundOne, "DialogBoxHelfenOderTrinken");
        switch(dialogHelfenOderTrinken1) {
            case helfenOderTrinkenRoundOne.iChooseHelp:
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D011);
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.show(character.dwarf, character.dwarf.pose.thinking, ƒS.positionPercent(30, 96.5));
                await ƒS.update();
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D012);
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D013);
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.show(character.dwarf, character.dwarf.pose.standard, ƒS.positionPercent(30, 96.5));
                await ƒS.update();
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D014);
                await ƒS.Speech.tell(character.narrator, text.narrator.N006);
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.hide(roomInventory.gasthausBarCounter);

                return "Laden";
            case helfenOderTrinkenRoundOne.iChooseDrink:
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D007);
                await ƒS.Character.show(roomInventory.metKrug, roomInventory.metKrug.pose.standard, ƒS.positionPercent(50, 83));

                //Krug auf Theke stellen
                await ƒS.Character.hide(roomInventory.gasthausBarCounter);
                await ƒS.Character.show(roomInventory.gasthausBarCounter, roomInventory.gasthausBarCounter.pose.standard, ƒS.positionPercent(50, 100));
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.show(character.dwarf, character.dwarf.pose.standard, ƒS.positionPercent(30, 96.5));
                await ƒS.update();
                //

                await ƒS.Speech.tell(character.dwarf, text.dwarf.D008);
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D009);
                addDrunknessLevel();
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.show(character.dwarf, character.dwarf.pose.thinking, ƒS.positionPercent(30, 96.5));
                await ƒS.update();
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D010);
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.show(character.dwarf, character.dwarf.pose.standard, ƒS.positionPercent(30, 96.5));
                await ƒS.update();

                break;
        }


        await ƒS.Speech.tell(character.dwarf, text.dwarf.D015);

        let dialogHelfenOderTrinken2 = await ƒS.Menu.getInput(helfenOderTrinkenRoundTwo, "DialogBoxHelfenOderTrinken");
        switch (dialogHelfenOderTrinken2) {
            case helfenOderTrinkenRoundTwo.iChooseHelp:
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D011);
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.show(character.dwarf, character.dwarf.pose.thinking, ƒS.positionPercent(30, 96.5));
                await ƒS.update();
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D012);
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D013);
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.show(character.dwarf, character.dwarf.pose.standard, ƒS.positionPercent(30, 96.5));
                await ƒS.update();
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D014);
                await ƒS.Speech.tell(character.narrator, text.narrator.N006);
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.hide(roomInventory.metKrug);
                await ƒS.Character.hide(roomInventory.gasthausBarCounter);
                
                return "Laden";
            case helfenOderTrinkenRoundTwo.iChooseDrink:
                await ƒS.Character.animate(roomInventory.metKrug, roomInventory.metKrug.pose.standard, fromLeftToRight(50, 83, 70, 83));
                await ƒS.Character.show(roomInventory.metKrug2, roomInventory.metKrug2.pose.standard, ƒS.positionPercent(50, 83));

                //Krug auf Theke stellen
                await ƒS.Character.hide(roomInventory.gasthausBarCounter);
                await ƒS.Character.show(roomInventory.gasthausBarCounter, roomInventory.gasthausBarCounter.pose.standard, ƒS.positionPercent(50, 100));
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.show(character.dwarf, character.dwarf.pose.standard, ƒS.positionPercent(30, 96.5));
                await ƒS.update();
                //

                await ƒS.Speech.tell(character.dwarf, text.dwarf.D016);
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D017);
                addDrunknessLevel();
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D018);
                break;
        }

        await ƒS.Speech.tell(character.dwarf, text.dwarf.D019);
        let dialogHelfenOderTrinken3 = await ƒS.Menu.getInput(helfenOderTrinkenRoundThree, "DialogBoxHelfenOderTrinken");
        switch (dialogHelfenOderTrinken3) {
            case helfenOderTrinkenRoundThree.iChooseHelp: 
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D011);
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.show(character.dwarf, character.dwarf.pose.thinking, ƒS.positionPercent(30, 96.5));
                await ƒS.update();
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D012);
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D013);
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.show(character.dwarf, character.dwarf.pose.standard, ƒS.positionPercent(30, 96.5));
                await ƒS.update();
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D014);
                await ƒS.Speech.tell(character.narrator, text.narrator.N006);
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.hide(roomInventory.metKrug);
                await ƒS.Character.hide(roomInventory.metKrug2);
                await ƒS.Character.hide(roomInventory.gasthausBarCounter);

                return "Laden";
            case helfenOderTrinkenRoundThree.iChooseDrink:
                await ƒS.Character.animate(roomInventory.metKrug2, roomInventory.metKrug2.pose.standard, fromLeftToRight(50, 83, 60, 83));
                await ƒS.Character.show(roomInventory.metKrug3, roomInventory.metKrug3.pose.standard, ƒS.positionPercent(50, 83));

                //Krug auf Theke stellen
                await ƒS.Character.hide(roomInventory.gasthausBarCounter);
                await ƒS.Character.show(roomInventory.gasthausBarCounter, roomInventory.gasthausBarCounter.pose.standard, ƒS.positionPercent(50, 100));
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.show(character.dwarf, character.dwarf.pose.standard, ƒS.positionPercent(30, 96.5));
                await ƒS.update();
                //

                await ƒS.Speech.tell(character.dwarf, text.dwarf.D020);
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D021);
                addDrunknessLevel();
                await ƒS.Speech.tell(character.dwarf, text.dwarf.D022);
                break;
        }

        
        await ƒS.Speech.tell(character.narrator, text.narrator.N007);
        await ƒS.Character.hide(character.dwarf);
        await ƒS.update(1);
        await ƒS.Speech.tell(character.narrator, text.narrator.N008);
        await ƒS.Character.show(character.dwarf, character.dwarf.pose.thinking, ƒS.positionPercent(30, 96.5));
        await ƒS.update(1);
        await ƒS.Speech.tell(character.dwarf, text.dwarf.D023);
        await ƒS.Speech.tell(character.dwarf, text.dwarf.D024);
        await ƒS.Speech.tell(character.narrator, text.narrator.N009);
        await ƒS.Speech.tell(character.narrator, text.narrator.N010);
        await ƒS.Speech.tell(character.narrator, text.narrator.N011);

        await ƒS.Speech.tell(character.dwarf, text.dwarf.D011);
        await ƒS.Character.hide(character.dwarf);
        await ƒS.Character.show(character.dwarf, character.dwarf.pose.thinking, ƒS.positionPercent(30, 96.5));
        await ƒS.update();
        await ƒS.Speech.tell(character.dwarf, text.dwarf.D012);
        await ƒS.Speech.tell(character.dwarf, text.dwarf.D013);
        await ƒS.Character.hide(character.dwarf);
        await ƒS.Character.show(character.dwarf, character.dwarf.pose.standard, ƒS.positionPercent(30, 96.5));
        await ƒS.update();
        await ƒS.Speech.tell(character.dwarf, text.dwarf.D014);
        await ƒS.Speech.tell(character.narrator, text.narrator.N006);

        await ƒS.Character.hide(character.dwarf);
        await ƒS.Character.hide(roomInventory.metKrug);
        await ƒS.Character.hide(roomInventory.metKrug2);
        await ƒS.Character.hide(roomInventory.metKrug3);
        await ƒS.Character.hide(roomInventory.gasthausBarCounter);

        return "Laden";
    }
}