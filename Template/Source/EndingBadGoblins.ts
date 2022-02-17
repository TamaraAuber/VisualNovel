namespace Novel {
    export async function EndingBadGoblins(): ƒS.SceneReturn {
        console.log("This is the bad Goblin End");

        let text = {
            narrator: {
                N000: "Du bist schon eine Weile unterwegs als du plötzlich wildes Geschrei hörst. ",
            }
        };

        await ƒS.Location.show(location.blackscreen);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);


        await ƒS.Speech.tell(character.narrator, "This is the bad goblin end");


        return "Epilog";

    }
}