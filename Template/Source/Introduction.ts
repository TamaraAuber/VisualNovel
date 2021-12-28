namespace Template {
    export async function Introduction(): ƒS.SceneReturn {
        console.log("Intro");


        let text = {
            narrator: {
                //mit ` schrägen Strichen lassen sich html elemente einbinden, z.b. span, zum stylen
                T000: "",
                T001: ""
            },

            aisaka: {
                T000: "",
                T001: ""
            }
        };


        await ƒS.Location.show(locations.beach);
        await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);

        await ƒS.Character.show(characters.narrator, characters.narrator.pose.standard, ƒS.positionPercent(30, 100));
        await ƒS.update(1);

        //InputField
        dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        console.log(dataForSave.nameProtagonist);

        await ƒS.Speech.tell(characters.narrator, text.narrator.T000 + dataForSave.nameProtagonist);
        await ƒS.Speech.tell(characters.narrator, "Hi <p>Whatsup</p>");
        //Textgeschwindigkeit (20 = Geschwindigkeit der Buchstaben, 2 = Pause zwischen den Paragraphen/P-Tags)
        ƒS.Speech.setTickerDelays(20,2);

        //lässt den Spieler reden; mit eigener css-Klasse (letzter Eintrag)
        await ƒS.Speech.tell(dataForSave.nameProtagonist, "heeeeello", true, "protagonist")

        //await ƒS.Character.animate(characters.narrator, characters.narrator.pose.standard, jirkaAnimation());

        //Inventory
        ƒS.Inventory.add(items.pen);
        await ƒS.Inventory.open();

        await ƒS.Character.hide(characters.narrator);


        //Musik einblenden
        ƒS.Sound.fade(sound.backgroundTheme, 0.2, 2, true);

        //Delay
        let signalDelay:ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]); //Signal definiert, aber noch nicht aufgerufen. Szene wird um duration 1 verzögert werden



        await ƒS.Speech.tell(characters.narrator, "Hi");
        signalDelay();  //führt Delay aus
        await ƒS.Speech.tell(dataForSave.nameProtagonist, "heeeeello", true, "protagonist")

        //Musik ohne fade abspielen
        ƒS.Sound.play(sound.backgroundTheme, 2, true);


        let firstDialogElementOptions = {
            iSayOk: "Okay",
            iSayYes: "Yes",
            iSayNo: "Nein"
        };

        let firstDialogeElement = await ƒS.Menu.getInput(firstDialogElementOptions, /*CSS Klasse mit der Dialog gestaltet wird*/ "individualCssClass");

        switch (firstDialogeElement) {
            case firstDialogElementOptions.iSayOk:
                await ƒS.Speech.tell(characters.narrator, "Hi");
                //kann man nutzen um zu entscvheiden zu welcher nächsten Szene der Nutzer kommt
                dataForSave.points += 10;
                break;
            case firstDialogElementOptions.iSayYes:
                await ƒS.Character.show(characters.narrator, characters.narrator.pose.standard, ƒS.positions.center);
                break;
            case firstDialogElementOptions.iSayNo:
                break;
        }

        if (dataForSave.points === 10) {
            //return End();
            //return "Ende";
        }



    }

}