namespace Novel {
    export async function Drachenhort(): ƒS.SceneReturn {
        console.log("Szene: Drachenhort");

        let text = {
            narrator: {
                N000: "Hier wohnt ein Drache",
                N001: "Auftritt Drache",
                N002: ":)"
            }
        };


        await ƒS.Location.show(location.gasthausHauptraum);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Speech.tell(character.narrator, text.narrator.N001);

        await ƒS.Character.show(character.dragon, character.dragon.pose.angry, ƒS.positionPercent(50, 95));
        await ƒS.update(1);

        await ƒS.Speech.tell(character.narrator, text.narrator.N002);

        await ƒS.Character.hide(character.dragon);

        await ƒS.Speech.tell(character.narrator, text.narrator.N001);

        await ƒS.Character.show(character.dragon, character.dragon.pose.happyWithBaby, ƒS.positionPercent(50, 100));
        await ƒS.update(1);


    }
}