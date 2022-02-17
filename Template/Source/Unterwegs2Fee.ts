namespace Novel {
    export async function Unterwegs2Fee(): ƒS.SceneReturn {
        console.log("Szene: Unterwegs2Fee");

        let text = {
            narrator: {
                N000: "Du schnappst dir den Käfig mit der Fee und möchtest so schnell wie möglich verschwinden.",
                N001: "Da fällt dir auf einmal ein seltsamer Stein auf. Er wirkt irgendwie wertvoll.",
                N002: "Du packst den Stein in deine Tasche und läufst weiter.",
                N003: "Du lässt den Stein liegen und läufst weiter.",
                N004: "In sicherer Entfernung befreist du die Fee aus ihrem Käfig.",
                N005: "Amalya ist sehr neugierig und fragt dich über alles aus. Also erzählst du ihr von dem Gastwirt Andvari und Ruby und, dass du jetzt auf der Suche nach der Drachenhöhle bist.",
                N006: "Ihr macht euch also gemeinsam auf den Weg.",
                N007: "Unterwegs versucht ihr herauszufinden, was für einen Stein du da bei den Goblins eingesammelt hast.",
                N008: "Das letzte Stück eures Weges führt einen steilen Berghang hinauf, welcher an einem kleinen Felsvorsprung endet.",
                N009: "Ihr steht vor einem großen Höhleneingang. ",
                N010: "Aber als du dich umdrehst bietet sich dir ein noch viel beeindruckenderer Anblick!",
                N011: "Von hier oben kannst du über das gesamte Tal sehen.",
                N012: "Jedoch verleiht ihm das schlechte Wetter ein erschreckendes Aussehen.",
                N013: "Das heranziehende Unwetter bereitet dir nicht gerade viel Mut.",
                N014: "Ihr könnt gerade noch die untergehende Sonne betrachten.",
                N015: "Dieser wunderschöne Anblick verleiht dir ein Gefühl alles schaffen zu können und du vergisst fast, weshalb du hier bist.",
                N016: "Du drehst dich wieder der Fee zu und ihr betretet gemeinsam die Höhle…"

            },
            fairy: {
                F000: "Vielen Dank, dass du mich gerettet hast! Du bist mein Held! Ich heiße übrigens Amalya :)",
                F001: "Oh, ich weiß wo die Drachenhöhle ist. Ich kann dir den weg zeigen!",
                F002: "Ich weiß nicht, wo sie den herhaben. Den hatten sie schon als sie mich gefangen genommen haben.",
                F003: "So wie sie sich benommen haben muss er wohl sehr wertvoll sein…aber mehr weiß ich darüber auch nicht.",
                F004: "Ich finde ihn jedenfalls sehr hübsch! :)",
                F005: "Wir sind da! Da drin befindet sich die Höhle des Drachen.",
                F006: "Wir sollten weiter gehen!"
            }
        };

        let wannaFancyStone = {
            iChooseTakeIt: "Stein mitnehmen",
            iChooseLeaveIt: "Stein liegen lassen"
        };

        // P schnappt sich Fee und rennt davon
        await ƒS.Location.show(location.wald);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);
        await ƒS.Speech.tell(character.narrator, text.narrator.N000);

        //P stolpert über Stein, Möglichkeit ihn mitzunehmen
        await ƒS.Speech.tell(character.narrator, text.narrator.N001);
        await ƒS.Character.show(roomInventory.stone, roomInventory.stone.pose.standard, ƒS.positionPercent(75, 100));
        await ƒS.update(1);

        let dialogTakeStone = await ƒS.Menu.getInput(wannaFancyStone, "DialogBoxGoblins");
        switch (dialogTakeStone) {
            case wannaFancyStone.iChooseTakeIt:
                await ƒS.Speech.tell(character.narrator, text.narrator.N002);
                ƒS.Inventory.add(items.stone);
                await ƒS.Inventory.open();
                break;
            case wannaFancyStone.iChooseLeaveIt:
                await ƒS.Speech.tell(character.narrator, text.narrator.N003);
                break;
        }

        await ƒS.Character.hide(roomInventory.stone);

        // P und F lernen sich kennen
        await ƒS.Location.show(location.feld);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);
        await ƒS.Speech.tell(character.narrator, text.narrator.N004);

        await ƒS.Character.show(character.fairy, character.fairy.pose.grateful, ƒS.positionPercent(70, 65));
        await ƒS.update(1);
        await ƒS.Speech.tell(character.fairy, text.fairy.F000);
        await ƒS.Speech.tell(character.narrator, text.narrator.N005);

        await ƒS.Character.hide(character.fairy);
        //await ƒS.update();
        await ƒS.Character.show(character.fairy, character.fairy.pose.standard, ƒS.positionPercent(55, 75));
        await ƒS.update(1);
        await ƒS.Speech.tell(character.fairy, text.fairy.F001);
        await ƒS.Speech.tell(character.narrator, text.narrator.N006);


        //P und F rätseln über Stein -- nur möglich wenn Stein im Inventar
        if (ƒS.Inventory.getAmount(items.stone)) {
            await ƒS.Speech.tell(character.narrator, text.narrator.N007);
            await ƒS.Speech.tell(character.fairy, text.fairy.F002);
            await ƒS.Speech.tell(character.fairy, text.fairy.F003);
            await ƒS.Speech.tell(character.fairy, text.fairy.F004);
        }


        //Eingang der Drachenhöhle wird erreicht
        await ƒS.Character.hide(character.fairy);
        await ƒS.Location.show(location.drachenHoehleEingang);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);
        await ƒS.Speech.tell(character.narrator, text.narrator.N008);

        await ƒS.Character.show(character.fairy, character.fairy.pose.standard, ƒS.positionPercent(25, 55));
        await ƒS.update(1);
        await ƒS.Speech.tell(character.fairy, text.fairy.F005);
        await ƒS.Speech.tell(character.narrator, text.narrator.N009);
        await ƒS.Speech.tell(character.narrator, text.narrator.N010);
        await ƒS.Speech.tell(character.narrator, text.narrator.N011);

        //Ausblick über Tal  --> je nachdem wie viel Zeit mit den Goblins verbracht wurde
        if (dataForSave.longTimeWithGoblins) {
            //es wurde viel Zeit mit den Goblins verschwendet -> schlechtes Wetter
            await ƒS.Location.show(location.talSchlechtesWetter);
            await ƒS.Character.hide(character.fairy);
            await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);
            await ƒS.Speech.tell(character.narrator, text.narrator.N012);
            await ƒS.Character.show(roomInventory.blitze, roomInventory.blitze.pose.standard, ƒS.positionPercent(50, 100));
            await ƒS.update();
            await ƒS.Character.hide(roomInventory.blitze);
            //await ƒS.update(0.5);
            await ƒS.Character.show(roomInventory.filterLicht, roomInventory.filterLicht.pose.standard, ƒS.positionPercent(50, 100));
            await ƒS.update(1);
            await ƒS.Character.hide(roomInventory.filterLicht);
            await ƒS.update(2);
            await ƒS.Speech.tell(character.narrator, text.narrator.N013);
        } else {
            //wenig Zeit verschwendet -> gutes Wetter
            await ƒS.Location.show(location.talGutesWetter);
            await ƒS.Character.hide(character.fairy);
            await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);
            await ƒS.Speech.tell(character.narrator, text.narrator.N014);
            await ƒS.Speech.tell(character.narrator, text.narrator.N015);
        }

        //Höhle betreten
        await ƒS.Speech.tell(character.fairy, text.fairy.F006);
        await ƒS.Speech.tell(character.narrator, text.narrator.N016);


        await ƒS.Character.hide(character.fairy);
    }
}