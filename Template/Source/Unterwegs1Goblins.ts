namespace Novel {
    export async function Unterwegs1Goblins(): ƒS.SceneReturn {
        console.log("Szene: Unterwegs1Goblins");

        let text = {
            narrator: {
                N000: "Du bist schon eine Weile unterwegs als du plötzlich wildes Geschrei hörst. ",
                N001: "Darunter befindet sich eine kaum hörbare Hohe Stimme, welche um Hilfe schreit, weshalb du beschließt, nachzusehen.",
                N002: "Die Stimmen führen dich immer tiefer in den Wald, bis du schließlich deren Ursprung erkennen kannst.",
                N003: "Sie kommen von einer Gruppe Goblins, welche sich im Wald niedergelassen haben. ",
                N004: "Die hohe Stimme stammt von einer kleinen Fee, die von den Goblins in einem Käfig gefangen gehalten und kräftig durchgeschüttelt wird.",

                N005: "Gerade als du überlegst was du tun sollst, hörst du hinter dir ein wütendes Grummeln.",
                N006: "Du drehst dich um und ein weiterer wütender Goblin steht hinter dir.",
                N007: "Er hebt seine Keule, ruft nach seinen Gefährten und macht sich bereit dich anzugreifen.",

                N008: "Du suchst das Gespräch und versuchst die Sache friedlich zu regeln.",
                N009: "Jedoch können oder wollen die Goblins dich nicht verstehen und stürzen auf dich los.",
                N010: "Du wirst von Ihnen überwältigt und niedergeschlagen.",
                N011: "Als du wieder zu dir kommst, ist es bereits dunkel.",
                N012: "Du hängst kopfüber, gefesselt an einem Baumstamm, während die Goblins wieder an ihrem Lager sitzen und sich, wie es scheint, Geschichten erzählen oder sie machen sich über dich lustig…schwer zu sagen, da du ja kein Goblin sprichst.",
                N013: "Du beobachtest eine ganze Weile das Geschehen, bis die Goblins schließlich einschlafen.",
                N014: "Kurz vor Tagesanbruch schaffst du es doch noch deine Fesseln zu lösen und fällst zu Boden.",
                N015: "Zum Glück haben sie nichts bemerkt und du rappelst dich leise auf.",

                N016: "Du versuchst dich so langsam und leise wie möglich davonzuschleichen.",

                N017: "Mutig wie du bist, machst du dich zum Gegenangriff bereit!",

                N018: "Du machst dich zum Angriff bereit…",
                N019: "…krrchhh…",
                N020: "…der Ast, den du übersehen hast, ist kaum zu überhören, als du auf ihn trittst.",
                N021: "Die Goblins wachen auf und machen sich ebenfalls zum Angriff bereit."
            }
        };

        let howToTalkWithGoblins = {
            iChooseTalk: "Wir können doch über alles reden.",
            iChooseFight: "Gegenangriff"
        };

        let sneakOrAttack = {
            iChooseSneak: "Leise und vorsichtig wegrennen",
            iChooseAttack: "Angriff"
        };


        //Unterwegs -- Hilfeschreie aus der Ferne
        await ƒS.Location.show(location.feld);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Speech.tell(character.narrator, text.narrator.N000);
        await ƒS.Speech.tell(character.narrator, text.narrator.N001);

        await ƒS.Location.show(location.wald);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);
        await ƒS.Speech.tell(character.narrator, text.narrator.N002);
        await ƒS.Character.show(roomInventory.waldBaeume, roomInventory.waldBaeume.pose.standard, ƒS.positionPercent(50, 100));
        await ƒS.update(1);
        
        await ƒS.Speech.tell(character.narrator, text.narrator.N003);
        await ƒS.Character.show(character.goblinGroup, character.goblinGroup.pose.standard, ƒS.positionPercent(65, 65));
        await ƒS.update(1);
        await ƒS.Speech.tell(character.narrator, text.narrator.N004);

        //Protagonist wird von Goblins entdeckt
        await ƒS.Speech.tell(character.narrator, text.narrator.N005);

        await ƒS.Character.hide(character.goblinGroup);
        await ƒS.Character.hide(roomInventory.waldBaeume);
        await ƒS.update();
        await ƒS.Location.show(location.waldGespiegelt);
        await ƒS.update(0.1, transition.transitionOne.alpha, transition.transitionOne.edge);
        await ƒS.Character.show(character.goblinLeader, character.goblinLeader.pose.standard, ƒS.positionPercent(60, 90));
        await ƒS.update(1);

        await ƒS.Speech.tell(character.narrator, text.narrator.N006);
        await ƒS.Speech.tell(character.narrator, text.narrator.N007);

        let dialogHowToTalkWithGoblins = await ƒS.Menu.getInput(howToTalkWithGoblins, "DialogBoxGoblins");
        switch (dialogHowToTalkWithGoblins) {
            case howToTalkWithGoblins.iChooseFight:
                dataForSave.longTimeWithGoblins = false;
                await ƒS.Speech.tell(character.narrator, text.narrator.N017);
                return "Unterwegs1GoblinsAttack";
            case howToTalkWithGoblins.iChooseTalk:
                dataForSave.longTimeWithGoblins = true;
                await ƒS.Speech.tell(character.narrator, text.narrator.N008);
                await ƒS.Speech.tell(character.narrator, text.narrator.N009);
                await ƒS.Speech.tell(character.narrator, text.narrator.N010);

                //Protagonist wird von den Goblins überwältigt und gefesselt
                await ƒS.Character.hide(character.goblinLeader);
                await ƒS.Location.show(location.blackscreen);
                await ƒS.update(transition.transitionKnockOut.duration, transition.transitionKnockOut.alpha, transition.transitionKnockOut.edge);
                await ƒS.Speech.tell(character.narrator, text.narrator.N011);
                await ƒS.Location.show(location.waldUpsideDown);
                await ƒS.Character.show(character.goblinGroup, character.goblinGroup.pose.nightUpsideDown, ƒS.positionPercent(40, 80));
                await ƒS.Character.show(roomInventory.filterNacht, roomInventory.filterNacht.pose.standard, ƒS.positionPercent(50, 100));
                await ƒS.update(1, transition.transitionKnockOut.alpha, transition.transitionKnockOut.edge);
                await ƒS.Speech.tell(character.narrator, text.narrator.N012);

                //Goblins schlafen ein
                await ƒS.Speech.tell(character.narrator, text.narrator.N013);
                await ƒS.Character.hide(character.goblinGroup);
                await ƒS.Character.hide(roomInventory.filterNacht);
                await ƒS.Character.show(character.goblinGroup, character.goblinGroup.pose.sleepingNightUpsideDown, ƒS.positionPercent(40, 80));
                await ƒS.Character.show(roomInventory.filterNacht, roomInventory.filterNacht.pose.standard, ƒS.positionPercent(50, 100));
                await ƒS.update(1);

                //Protagonist schafft es Fesseln zu lösen
                await ƒS.Speech.tell(character.narrator, text.narrator.N014);
                await ƒS.Character.hide(character.goblinGroup);
                await ƒS.Character.hide(roomInventory.filterNacht);
                await ƒS.Location.show(location.blackscreen);
                await ƒS.update(transition.transitionKnockOut.duration, transition.transitionKnockOut.alpha, transition.transitionKnockOut.edge);
                await ƒS.Speech.tell(character.narrator, text.narrator.N015);
                await ƒS.Location.show(location.wald);
                await ƒS.Character.show(character.goblinGroup, character.goblinGroup.pose.sleepingNight, ƒS.positionPercent(60, 70));
                //await ƒS.Character.show(roomInventory.filterNacht, roomInventory.filterNacht.pose.standard, ƒS.positionPercent(50, 100));
                await ƒS.update();

                break;
        }

        let dialogSneakOrAttack = await ƒS.Menu.getInput(sneakOrAttack, "DialogBoxGoblins");
        switch (dialogSneakOrAttack) {
            case sneakOrAttack.iChooseAttack:
                await ƒS.Speech.tell(character.narrator, text.narrator.N018);
                await ƒS.Speech.tell(character.narrator, text.narrator.N019);
                await ƒS.Speech.tell(character.narrator, text.narrator.N020);
                await ƒS.Character.hide(character.goblinGroup);
                await ƒS.Character.show(character.goblinLeader, character.goblinLeader.pose.standard, ƒS.positionPercent(60, 90));
                await ƒS.update(1);
                await ƒS.Speech.tell(character.narrator, text.narrator.N021);
                //await ƒS.Character.hide(roomInventory.filterNacht);
                return "Unterwegs1GoblinsAttack";
    
            case sneakOrAttack.iChooseSneak:
                await ƒS.Speech.tell(character.narrator, text.narrator.N016);

                await ƒS.Character.hide(character.goblinGroup);
                //await ƒS.Character.hide(roomInventory.filterNacht);
                return "Unterwegs2Fee";
                
        }


    }
}