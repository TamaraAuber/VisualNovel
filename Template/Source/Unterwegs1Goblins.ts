namespace Novel {
    export async function Unterwegs1Goblins(): ƒS.SceneReturn {
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
        await ƒS.Character.hide(roomInventory.waldBaeume);
        await ƒS.update();

        await ƒS.Location.show(location.waldGespiegelt);
        await ƒS.update(0.1, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Character.show(character.goblinLeader, character.goblinLeader.pose.standard, ƒS.positionPercent(60, 90));
        await ƒS.update(1);

        await ƒS.Speech.tell(character.narrator, "Er scheint wütend, macht sich bereit dich anzugreifen");

        let dialogHowToTalkWithGoblins = await ƒS.Menu.getInput(howToTalkWithGoblins, "DialogBoxGoblins");
        switch (dialogHowToTalkWithGoblins) {
            case howToTalkWithGoblins.iChooseFight:
                return "Unterwegs1GoblinsAttack";
            case howToTalkWithGoblins.iChooseTalk:
                await ƒS.Speech.tell(character.narrator, "Sie scheinen nicht an einer friedlichen Lösung interessiert zu sein");
                await ƒS.Speech.tell(character.narrator, "Du wirst von den Goblins überwältigt");

                //Protagonist wird von den Goblins überwältigt und gefesselt
                await ƒS.Character.hide(character.goblinLeader);
                await ƒS.Location.show(location.blackscreen);
                await ƒS.update(transition.transitionKnockOut.duration, transition.transitionKnockOut.alpha, transition.transitionKnockOut.edge);

                await ƒS.Speech.tell(character.narrator, "Als du wieder zu die kommst ist es schon dunkel");
                await ƒS.Location.show(location.waldUpsideDown);
                await ƒS.Character.show(character.goblinGroup, character.goblinGroup.pose.nightUpsideDown, ƒS.positionPercent(40, 80));
                await ƒS.Character.show(roomInventory.filterNacht, roomInventory.filterNacht.pose.standard, ƒS.positionPercent(50, 100));
                await ƒS.update(1, transition.transitionKnockOut.alpha, transition.transitionKnockOut.edge);
                await ƒS.Speech.tell(character.narrator, "Du hängst kopfüber");

                //Goblins schlafen ein
                await ƒS.Speech.tell(character.narrator, "nach einer Weile schlafen sie ein");
                await ƒS.Character.hide(character.goblinGroup);
                await ƒS.Character.hide(roomInventory.filterNacht);
                await ƒS.Character.show(character.goblinGroup, character.goblinGroup.pose.sleepingNightUpsideDown, ƒS.positionPercent(40, 80));
                await ƒS.Character.show(roomInventory.filterNacht, roomInventory.filterNacht.pose.standard, ƒS.positionPercent(50, 100));
                await ƒS.update(1);

                //Protagonist schafft es Fesseln zu lösen
                await ƒS.Speech.tell(character.narrator, "Kurz vor Tagesanbruch: du schaffst es die Fesseln zu lösen und fällst zu Boden");
                await ƒS.Character.hide(character.goblinGroup);
                await ƒS.Character.hide(roomInventory.filterNacht);
                await ƒS.Location.show(location.blackscreen);
                await ƒS.update(transition.transitionKnockOut.duration, transition.transitionKnockOut.alpha, transition.transitionKnockOut.edge);
                await ƒS.Speech.tell(character.narrator, "du rapelst dich auf");
                await ƒS.Location.show(location.wald);
                await ƒS.Character.show(character.goblinGroup, character.goblinGroup.pose.sleepingNight, ƒS.positionPercent(60, 70));
                await ƒS.Character.show(roomInventory.filterNacht, roomInventory.filterNacht.pose.standard, ƒS.positionPercent(50, 100));
                await ƒS.update();

                break;
        }

        let dialogSneakOrAttack = await ƒS.Menu.getInput(sneakOrAttack, "DialogBoxGoblins");
        switch (dialogSneakOrAttack) {
            case sneakOrAttack.iChooseAttack:
                await ƒS.Speech.tell(character.narrator, "Attack!!");
                return "Unterwegs1GoblinsAttack";
            case sneakOrAttack.iChooseSneak:
                await ƒS.Speech.tell(character.narrator, "du versuchst langsam davon zu schleichen");

                await ƒS.Character.hide(character.goblinGroup);
                await ƒS.Character.hide(roomInventory.filterNacht);
                return "Unterwegs2Fee";
                
        }


    }
}