namespace Novel {
    export async function Prolog(): ƒS.SceneReturn {
        console.log("Prolog");


        let text = {
            prologText: {
                T000: "Hier könnte ihr Prolog stehen"
            }
        };


        //evtl kurze Zwischensequenz, in der shortcuts für menü gezeigt werden

        await ƒS.Location.show(location.blackscreen);

        await ƒS.Speech.tell(character.narrator, text.prologText.T000);


        
    }
}