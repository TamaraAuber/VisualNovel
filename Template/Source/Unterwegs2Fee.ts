namespace Novel {
    export async function Unterwegs2Fee(): ƒS.SceneReturn {
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
        await ƒS.Location.show(location.wald);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);
        await ƒS.Speech.tell(character.narrator, "Du schnappst die den Käfig mit der Fee und möchtest verschwinden");

        //P stolpert über Stein, Möglichkeit ihn mitzunehmen
        await ƒS.Speech.tell(character.narrator, "Stolperst über Stein, der neben Käfig liegt");
        await ƒS.Character.show(roomInventory.stone, roomInventory.stone.pose.standard, ƒS.positionPercent(75, 100));
        await ƒS.update(1);

        let dialogTakeStone = await ƒS.Menu.getInput(wannaFancyStone, "DialogBoxGoblins");
        switch (dialogTakeStone) {
            case wannaFancyStone.iChooseTakeIt:
                ƒS.Inventory.add(items.stone);
                await ƒS.Inventory.open();
                break;
            case wannaFancyStone.iChooseLeaveIt:
                break;
        }

        await ƒS.Character.hide(roomInventory.stone);

        // P und F lernen sich kennen
        await ƒS.Location.show(location.feld);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);
        await ƒS.Speech.tell(character.narrator, "In sicherer Entfernung befreist du Fee aus Käfig");

        await ƒS.Character.show(character.fairy, character.fairy.pose.grateful, ƒS.positionPercent(70, 65));
        await ƒS.update(1);
        await ƒS.Speech.tell(character.fairy, text.fairy.F000);

        await ƒS.Character.hide(character.fairy);
        //await ƒS.update();
        await ƒS.Character.show(character.fairy, character.fairy.pose.standard, ƒS.positionPercent(55, 75));
        await ƒS.update(1);
        await ƒS.Speech.tell(character.fairy, "Ich kann dir den Weg zeigen");


        //P und F rätseln über Stein -- nur möglich wenn Stein im Inventar
        if (ƒS.Inventory.getAmount(items.stone)) {
            await ƒS.Speech.tell(character.fairy, "Interessanter Stein");
        }



        //Eingang der Drachenhöhle wird erreicht
        await ƒS.Speech.tell(character.narrator, "Ihr erreicht den Eingang der Höhle");
        await ƒS.Location.show(location.blackscreen);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);
        

    }
}