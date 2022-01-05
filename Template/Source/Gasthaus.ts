namespace Novel {
    export async function Gasthaus(): ƒS.SceneReturn {
        console.log("Szene: Gasthaus");


        let text = {
            narrator: {
                T000: "Willkommen im Gasthaus"
            }
        };


        await ƒS.Location.show(location.gasthausHauptraum);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Speech.tell(character.narrator, text.narrator.T000);


    }
}