namespace Novel {
    export async function Prolog(): ƒS.SceneReturn {
        console.log("Szene: Prolog");


        let text = {
            prologText: {
                T000: "Hier könnte ihr Prolog stehen"
            }
        };


        //!!!!!!!!!!!!Startscreen durch Novel Page ersetzen?????????????
        //kurze Zwischensequenz, in der shortcuts für menü gezeigt werden
        await ƒS.Location.show(location.menuErklaerung);
        await ƒS.update();
        await ƒS.Speech.tell(character.narrator, "Menü Shortcuts");

        //evtl. Transition raus
        await ƒS.Location.show(location.blackscreen);
        await ƒS.update(transition.transitionTwo.duration, transition.transitionTwo.alpha, transition.transitionTwo.edge)

        await ƒS.Speech.tell(character.narrator, text.prologText.T000);


        
    }
}