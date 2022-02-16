namespace Novel {
    export async function EndingBadDragon(): ƒS.SceneReturn {
        console.log("This is the bad End");

        await ƒS.Location.show(location.blackscreen);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);


        await ƒS.Speech.tell(character.narrator, "This is the bad end");

        return "Epilog";




    }
}