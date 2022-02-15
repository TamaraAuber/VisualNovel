namespace Novel {
    export async function Ende(): ƒS.SceneReturn {
        console.log("This is the End");

        await ƒS.Location.show(location.blackscreen);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);


        await ƒS.Speech.tell(character.narrator, "This is the end");




    }
}

