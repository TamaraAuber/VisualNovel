namespace Novel {
    export async function Unterwegs1Goblins(): ƒS.SceneReturn {
        console.log("Szene: Unterwegs1Goblins");

        let text = {
            narrator: {
                N000: "Du machst dich auf den Weg zu den Bergen",
                N001: ""
            }
        };

        let howToTalkWithGoblins = {
            iChooseTalk: "die Sache friedlich regeln",
            iChooseFight: "Gegenangriff"
        };


        //Unterwegs -- Hilfeschreie aus der Ferne
        await ƒS.Location.show(location.feld);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Speech.tell(character.narrator, text.narrator.N000);

        await ƒS.Speech.tell(character.narrator, "Du willst nachsehen");

        await ƒS.Location.show(location.wald);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Character.show(roomInventory.waldBaeume, roomInventory.waldBaeume.pose.standard, ƒS.positionPercent(50, 100));
        await ƒS.update(1);
        
        await ƒS.Speech.tell(character.narrator, "Im Wald entdeckst du eine Gruppe Goblins");

        await ƒS.Character.show(character.goblinGroup, character.goblinGroup.pose.standard, ƒS.positionPercent(65, 65));
        await ƒS.update(1);

        //Protagonist wird von Goblins entdeckt
        await ƒS.Speech.tell(character.narrator, "Du hörst ein Geräusch hinter dir, drehst dich um, entdeckst weiteren Goblin");

        await ƒS.Character.hide(character.goblinGroup);
        await ƒS.update();
        await ƒS.Character.hide(roomInventory.waldBaeume);
        await ƒS.update();

        await ƒS.Location.show(location.waldGespiegelt);
        await ƒS.update(0.1, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Character.show(character.goblinLeader, character.goblinLeader.pose.standard, ƒS.positionPercent(60, 90));
        await ƒS.update(1);

        let dialogHowToTalkWithGoblins = await ƒS.Menu.getInput(howToTalkWithGoblins, "DialogBoxGoblins");
        switch (dialogHowToTalkWithGoblins) {
            case howToTalkWithGoblins.iChooseFight:
                break;
            case howToTalkWithGoblins.iChooseTalk:
                break;
        }


    }
}