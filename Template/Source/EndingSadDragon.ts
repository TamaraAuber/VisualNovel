namespace Novel {
    export async function EndingSadDragon(): ƒS.SceneReturn {
        console.log("This is the sad End");

        await ƒS.Location.show(location.blackscreen);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);


        await ƒS.Speech.tell(character.narrator, "This is the sad end");




    }
}