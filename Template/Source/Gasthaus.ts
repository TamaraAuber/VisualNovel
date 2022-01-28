namespace Novel {
    export async function Gasthaus(): ƒS.SceneReturn {
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
        await ƒS.Location.show(location.gasthausHauptraum);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Speech.tell(character.narrator, text.narrator.N000);

        //Am Bartresen
        await ƒS.Location.show(location.gasthausBar);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Character.show(roomInventory.gasthausBarCounter, roomInventory.gasthausBarCounter.pose.standard, ƒS.positionPercent(50, 100));
        await ƒS.update(1);

        await ƒS.Speech.tell(character.narrator, text.narrator.N001);

        await ƒS.Character.show(character.dwarf, character.dwarf.pose.standard, ƒS.positionPercent(30, 96.5));
        await ƒS.update(1);

        await ƒS.Speech.tell(character.dwarf, text.dwarf.D000);

        let dialogHelfenOderTrinken1 = await ƒS.Menu.getInput(helfenOderTrinkenRoundOne, "DialogBoxHelfenOderTrinken");
        switch(dialogHelfenOderTrinken1) {
            case helfenOderTrinkenRoundOne.iChooseHelp:
                await ƒS.Speech.tell(character.narrator, "Du beschließt zu helfen");
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.show(character.dwarf, character.dwarf.pose.thinking, ƒS.positionPercent(30, 96.5));
                await ƒS.update(1);
                await ƒS.Speech.tell(character.dwarf, "gehe zu Ruby. Sie kann dir sagen wo der Drache ist");
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Speech.tell(character.narrator, "Du übernachtest und gehst am nächsten morgen zu Ruby");
                await ƒS.Character.hide(roomInventory.gasthausBarCounter);

                return "Laden";
            case helfenOderTrinkenRoundOne.iChooseDrink:
                await ƒS.Speech.tell(character.narrator, "Du bestellst ein Krug Met");
                await ƒS.Character.show(roomInventory.metKrug, roomInventory.metKrug.pose.standard, ƒS.positionPercent(50, 83));

                //Krug auf Theke stellen
                await ƒS.Character.hide(roomInventory.gasthausBarCounter);
                await ƒS.Character.show(roomInventory.gasthausBarCounter, roomInventory.gasthausBarCounter.pose.standard, ƒS.positionPercent(50, 100));
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.show(character.dwarf, character.dwarf.pose.standard, ƒS.positionPercent(30, 96.5));
                await ƒS.update();
                //

                addDrunknessLevel();
                break;
        }


        await ƒS.Speech.tell(character.dwarf, "genieße es. Bald sind meine Vorräte leer.");

        let dialogHelfenOderTrinken2 = await ƒS.Menu.getInput(helfenOderTrinkenRoundTwo, "DialogBoxHelfenOderTrinken");
        switch (dialogHelfenOderTrinken2) {
            case helfenOderTrinkenRoundTwo.iChooseHelp:
                await ƒS.Speech.tell(character.narrator, "Du beschließt zu helfen");
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.show(character.dwarf, character.dwarf.pose.thinking, ƒS.positionPercent(30, 96.5));
                await ƒS.update(1);
                await ƒS.Speech.tell(character.dwarf, "gehe zu Ruby. Sie kann dir sagen wo der Drache ist");
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Speech.tell(character.narrator, "Du übernachtest und gehst am nächsten morgen zu Ruby");
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

                addDrunknessLevel();
                break;
        }

        await ƒS.Speech.tell(character.dwarf, "Du trinkst aber ganz schön viel");
        let dialogHelfenOderTrinken3 = await ƒS.Menu.getInput(helfenOderTrinkenRoundThree, "DialogBoxHelfenOderTrinken");
        switch (dialogHelfenOderTrinken3) {
            case helfenOderTrinkenRoundThree.iChooseHelp: 
                await ƒS.Speech.tell(character.narrator, "Du beschließt zu helfen");
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Character.show(character.dwarf, character.dwarf.pose.thinking, ƒS.positionPercent(30, 96.5));
                await ƒS.update(1);
                await ƒS.Speech.tell(character.dwarf, "gehe zu Ruby. Sie kann dir sagen wo der Drache ist");
                await ƒS.Character.hide(character.dwarf);
                await ƒS.Speech.tell(character.narrator, "Du übernachtest und gehst am nächsten morgen zu Ruby");
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

                addDrunknessLevel();
                break;
        }

        
        await ƒS.Speech.tell(character.dwarf, "Meine Vorräte sind aufgebraucht. Ich habe keinen Met mehr!");
        await ƒS.Speech.tell(character.narrator, "Du beschließt dich zu helfen");

        await ƒS.Character.hide(character.dwarf);
        await ƒS.Character.show(character.dwarf, character.dwarf.pose.thinking, ƒS.positionPercent(30, 96.5));
        await ƒS.update(1);
        await ƒS.Speech.tell(character.dwarf, "gehe zu Ruby. Sie kann dir sagen wo der Drache ist");
        await ƒS.Character.hide(character.dwarf);
        await ƒS.Speech.tell(character.narrator, "Du übernachtest und möchtest am nächsten morgen zu Ruby");
        await ƒS.Character.hide(roomInventory.metKrug);
        await ƒS.Character.hide(roomInventory.metKrug2);
        await ƒS.Character.hide(roomInventory.metKrug3);
        await ƒS.Character.hide(roomInventory.gasthausBarCounter);


    }
}