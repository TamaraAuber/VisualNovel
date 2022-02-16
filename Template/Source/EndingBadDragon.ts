namespace Novel {
    export async function EndingBadDragon(): ƒS.SceneReturn {
        console.log("This is the bad End");

        await ƒS.Location.show(location.blackscreen);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);


        await ƒS.Speech.tell(character.narrator, "This is the bad end");


        /*
        0: Ending Attack
        1: Ending Staff
        2: Ending Cloak
        3: Ending Run
        */

        if (dataForSave.badDragonEndingNo === 0) {
            await ƒS.Speech.tell(character.narrator, "Attack");
        }
        if (dataForSave.badDragonEndingNo === 1) {
            await ƒS.Speech.tell(character.narrator, "Staff");
        }
        if (dataForSave.badDragonEndingNo === 2) {
            await ƒS.Speech.tell(character.narrator, "Cloak");
        }
        if (dataForSave.badDragonEndingNo === 3) {
            await ƒS.Speech.tell(character.narrator, "Run");
        }

        return "Epilog";




    }
}