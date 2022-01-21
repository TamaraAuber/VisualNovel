namespace Novel {
    export async function Unterwegs2Fee(): ƒS.SceneReturn {
        console.log("Szene: Unterwegs2Fee");

        let text = {
            narrator: {
                N000: "Lerne die Fee kennen",
                N001: "Auftritt Fee",
                N002: ":)"
            }
        };

        await ƒS.Location.show(location.feld);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Speech.tell(character.narrator, text.narrator.N000);

        await ƒS.Character.show(character.fairy, character.fairy.pose.grateful, ƒS.positionPercent(70, 65));
        await ƒS.update(1);

        await ƒS.Speech.tell(character.narrator, text.narrator.N002);

        await ƒS.Character.hide(character.fairy);
        await ƒS.update();
        await ƒS.Character.show(character.fairy, character.fairy.pose.standard, ƒS.positionPercent(55, 75));
        await ƒS.update(1);

        await ƒS.Speech.tell(character.narrator, text.narrator.N002);

        await ƒS.Character.hide(character.fairy);
        await ƒS.update();
        await ƒS.Character.show(character.fairy, character.fairy.pose.afraid, ƒS.positionPercent(40, 65));
        //await ƒS.update(1);
        await ƒS.update(2);

    }
}