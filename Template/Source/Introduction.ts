namespace Template {
    export async function Introduction(): ƒS.SceneReturn {
        console.log("Intro");


        let text = {
            narrator: {
                T000: "",
                T001: ""
            },

            aisaka: {
                T000: "",
                T001: ""
            }
        };


        await ƒS.Location.show(locations.bedroom);
        await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);

        await ƒS.Character.show(characters.narrator, characters.narrator.pose.standard, ƒS.positionPercent(30, 100));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T000);
        await ƒS.Speech.tell(characters.narrator, "Hi");

        await ƒS.Character.hide(characters.narrator);


        let firstDialogElementOptions = {
            iSayOk: "Okay",
            iSayYes: "Yes",
            iSayNo: "Nein"
        };

        let firstDialogeElement = await ƒS.Menu.getInput(firstDialogElementOptions, /*CSS Klasse mit der Dialog gestaltet wird*/ "individualCssClass");

        switch (firstDialogeElement) {
            case firstDialogElementOptions.iSayOk:
                await ƒS.Speech.tell(characters.narrator, "Hi");
                break;
            case firstDialogElementOptions.iSayYes:
                await ƒS.Character.show(characters.narrator, characters.narrator.pose.standard, ƒS.positions.center);
                break;
            case firstDialogElementOptions.iSayNo:
                break;
        }



    }

}