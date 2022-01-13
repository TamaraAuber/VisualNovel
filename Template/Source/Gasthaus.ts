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


        await ƒS.Location.show(location.gasthausHauptraum);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Speech.tell(character.narrator, text.narrator.N000);

        await ƒS.Location.show(location.gasthausBar);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Character.show(roomInventory.gasthausBarCounter, roomInventory.gasthausBarCounter.pose.standard, ƒS.positionPercent(50, 100));
        await ƒS.update(1);

        await ƒS.Speech.tell(character.narrator, text.narrator.N001);

        await ƒS.Character.show(character.dwarf, character.dwarf.pose.standard, ƒS.positionPercent(30, 96.5));
        await ƒS.update(1);

        await ƒS.Speech.tell(character.dwarf, text.dwarf.D000);

        await ƒS.Character.hide(character.dwarf);
        await ƒS.Character.show(character.dwarf, character.dwarf.pose.thinking, ƒS.positionPercent(30, 96.5));
        await ƒS.update(1);

        await ƒS.Speech.tell(character.narrator, text.narrator.N002);



        await ƒS.Character.hide(character.dwarf);
        await ƒS.Character.hide(roomInventory.gasthausBarCounter);
        await ƒS.Speech.tell(character.narrator, text.narrator.N003);


    }
}