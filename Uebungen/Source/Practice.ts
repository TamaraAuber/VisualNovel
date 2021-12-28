namespace Template {
    export async function Practice(): ƒS.SceneReturn {
        console.log("Practice");


        let text = {
            Stickman: {
                T000: "Es ist ein wunderschöner Ferientag, meine Eltern haben mit mir beschlossen ans mehr zu fahren. Sie beide lieben den Strand....Dabei gibt es nur ein Problem....Ich hasse Sand! :(",
                T001: "Während die beiden sich in ihren liegen ausruhen und die Sonne genießen versuche ich irgendwie dieser sandigen Hölle zu entgehen.....",
                T0001: "Hmmm ...wie wäre es vielleicht mit einer kleinen Ablenkung?",
                T002: "Schwimmen! Das ist genau das Richtige! Ich bin zwar nicht die größte Wasserratte, aber nass zu werden ist um einiges besser als überall Sand an sich kleben zu haben!",
                T003: "Vielleicht hilft ja tanzen? Ich liebe es zu tanzen und dabei lässt sich gut der ganze Sand aus meiner Kleidung schütteln!",
                T004: "Hmm...Ich sehe hier nicht wirklich etwas interessantes. Und viele Aktivitäten bei denen man dem Sand entgehen kann ohne nass zu werden sehe ich hier auch nicht. Ich muss wohl einfach abwarten. Vielleicht passiert ja noch etwas spannendes.",
                T005: "Hey, bauen die Kinder da hinten etwa eine Sandburg?! Ich hasse Sand, aber ich liebe Burgen. Aber ist es das wirklich Wert?",
                T006: "Burgen sind etwas wunderbares. Auch wenn sie aus Sand sind. Der Tag am Strand ist wohl doch nicht so schlecht! Unsere Burg wird die Beste!",
                T007: "Nein! Ist es nicht! Dafür hasse ich Sand viel zu sehr. Da fällt mir gerade ein im Auto hab ich ein tolles Buch liegen...Ich geh einfach dorthin und lese!"
            },
        };

        let firstDialogElementOptions = {
            iChooseSwimming: "Schwimmen gehen",
            iChooseDancing: "Tanzen",
            iChooseWaiting: "Warten"
        };

        let secondDialogElementOptions = {
            iChooseGoAway: "Hier ist es zu langweilig! Vielleicht kann ich ja gehen.",
            iChooseHelp: "Vielleicht kann ich Ihnen ja helfen?"
        }



        await ƒS.Location.show(locations.beach);
        await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);

        await ƒS.Character.show(characters.Stickman, characters.Stickman.pose.meh, ƒS.positionPercent(30, 100));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.Stickman, text.Stickman.T000);
        await ƒS.Speech.tell(characters.Stickman, text.Stickman.T001);
        await ƒS.Character.hide(characters.Stickman);
        await ƒS.Character.show(characters.Stickman, characters.Stickman.pose.thinking, ƒS.positionPercent(30, 100));
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.Stickman, text.Stickman.T0001);

        let firstDialogeElement = await ƒS.Menu.getInput(firstDialogElementOptions, /*CSS Klasse mit der Dialog gestaltet wird*/ "dialogBox");

        switch (firstDialogeElement) {
            case firstDialogElementOptions.iChooseSwimming:
                await ƒS.Character.hide(characters.Stickman);
                await ƒS.Location.show(locations.beach3);
                await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
                await ƒS.Character.show(characters.Stickman, characters.Stickman.pose.happy, ƒS.positionPercent(30, 100));
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.Stickman, text.Stickman.T002);
                await ƒS.Speech.tell(characters.Stickman, text.Stickman.T005);
                await ƒS.Character.hide(characters.Stickman);
                await ƒS.Character.show(characters.Stickman, characters.Stickman.pose.thinking, ƒS.positionPercent(30, 100));
                await ƒS.update(3);
                break;
            case firstDialogElementOptions.iChooseDancing:
                await ƒS.Location.show(locations.beach2);
                await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
                await ƒS.Speech.tell(characters.Stickman, text.Stickman.T003);
                await ƒS.Character.hide(characters.Stickman);
                await ƒS.Character.show(characters.Stickman, characters.Stickman.pose.dancing, ƒS.positionPercent(30, 100));
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.Stickman, text.Stickman.T005);
                await ƒS.Character.hide(characters.Stickman);
                await ƒS.Character.show(characters.Stickman, characters.Stickman.pose.thinking, ƒS.positionPercent(30, 100));
                await ƒS.update(3);
                break;
            case firstDialogElementOptions.iChooseWaiting:
                await ƒS.Character.hide(characters.Stickman);
                await ƒS.Location.show(locations.beach2);
                await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
                await ƒS.Character.show(characters.Stickman, characters.Stickman.pose.meh, ƒS.positionPercent(30, 100));
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.Stickman, text.Stickman.T004);
                await ƒS.Speech.tell(characters.Stickman, text.Stickman.T005);
                await ƒS.Character.hide(characters.Stickman);
                await ƒS.Character.show(characters.Stickman, characters.Stickman.pose.thinking, ƒS.positionPercent(30, 100));
                await ƒS.update(3);
                break;
        }


        let secondDialogeElement = await ƒS.Menu.getInput(secondDialogElementOptions, /*CSS Klasse mit der Dialog gestaltet wird*/ "dialogBox2");

        switch (secondDialogeElement) {
            case secondDialogElementOptions.iChooseGoAway:
                await ƒS.Character.hide(characters.Stickman);
                await ƒS.Character.show(characters.Stickman, characters.Stickman.pose.meh, ƒS.positionPercent(30, 100));
                await ƒS.update(3);
                await ƒS.Speech.tell(characters.Stickman, text.Stickman.T007);
                await ƒS.Character.hide(characters.Stickman);
                await ƒS.Character.animate(characters.Stickman, characters.Stickman.pose.happy, fromLeftToRight());
                break;
            case secondDialogElementOptions.iChooseHelp:
                await ƒS.Speech.tell(characters.Stickman, text.Stickman.T006);
                await ƒS.Character.hide(characters.Stickman);
                await ƒS.Character.animate(characters.Stickman, characters.Stickman.pose.happy, fromLeftToRight());
                break;
        }


  


    }

}