namespace Novel {
    export async function EndingBadGoblins(): ƒS.SceneReturn {
        console.log("This is the bad Goblin End");

        await ƒS.Location.show(location.blackscreen);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);


        await ƒS.Speech.tell(character.narrator, "This is the bad goblin end");


        return "Epilog";

    }
}