namespace Novel {
    export async function EndingHappyDragon(): ƒS.SceneReturn {
        console.log("This is the Happy End");

        await ƒS.Location.show(location.blackscreen);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);


        await ƒS.Speech.tell(character.narrator, "This is the happy end");

        return "Epilog";


    }
}