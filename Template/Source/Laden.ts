namespace Novel {
    export async function Laden(): ƒS.SceneReturn {
        console.log("Szene: Laden");

        let text = {
            narrator: {
                N000: "Am nächsten Morgen machst du dich auf den Weg zu Rubys Laden.",
                N001: "Der Met war wohl ein bisschen stärker als gedacht und so ist es erst Mittag als du dich zu Rubys Laden begibst.",
                N002: "Du betrittst den Laden und willst dich gerade ein bisschen umschauen, als eine junge Tieflingdame aus einem Nebenzimmer kommt und dich begrüßt.",
                N003: "Du erzählst ihr, von Gestern Abend und, dass der Gastwirt dich geschickt hat.",
                N004: "Du bedankst und verabschiedest dich bei Ruby, bevor du dich schließlich auf den in die Berge machst."
            },
            tiefling: {
                T000: "Hallo, Ich bin Ruby.",
                T001: "Willkommen in meinem Laden! Wie kann ich dir helfen?",
                T002: "Ach ja, zu Andvari geh ich immer gerne. In seinem Gasthaus ist normalerweise immer so viel los :)",
                T003: "Natürlich helfe ich dir gerne! Das Drachenproblem betrifft mich ja genauso sehr wie alle anderen in unserem Dorf auch.",
                T004: "Man munkelt, dass der Drache seine Höhle in den Bergen hat und sich dort meistens versteckt.",
                T005: "Es wäre wirklich schön, wenn er aufhören würde uns heimzusuchen.",
                T006: "Einige denken ihn zu töten wäre die einzige Lösung… Ich denke nicht, dass man das tun sollte. Es wird schon einen Grund haben, wieso der Drache jetzt erst aufgetaucht ist…",
                T007: "Vielleicht lässt sich die Sache ja friedlich klären? Denke doch an meine Worte, wenn du ihm begegnest.",
                T008: "Aber genug, ich schweife ab. Du musst los!",
                T009: "Aber davor würde ich dir gerne etwas mitgeben, was dir auf deiner Reise vielleicht helfen könnte.",
                T010: "Was möchtest du mitnehmen?",
                T011: "Leider habe ich mein letztes Schwert heute Morgen verkauft, aber vielleicht findest du ja etwas anderes. Was möchtest du mitnehmen?",
                T012: "Ich hoffe mein Geschenk wird dir auf deiner Reise behilflich sein. Viel Glück!"
            }
        };

        let presentsMorning = {
            iChooseCloak: "Umhang",
            iChooseStaff: "Kampfstab",
            iChooseSword: "Schwert"
        };

        let presentsNoon = {
            iChooseCloak: "Umhang",
            iChooseStaff: "Kampfstab"
        };

        removeDrunknessLevel();

        //Laden betreten
        await ƒS.Location.show(location.laden);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);
        await ƒS.Character.show(roomInventory.ladenTheke, roomInventory.ladenTheke.pose.standard, ƒS.positionPercent(50, 100));
        await ƒS.update(0.3);



        if (dataForSave.neededLongSleep === false) {
            await ƒS.Speech.tell(character.narrator, text.narrator.N000);
        } else {
            await ƒS.Speech.tell(character.narrator, text.narrator.N001);
        }
        await ƒS.Speech.tell(character.narrator, text.narrator.N002);

        //mit Ruby reden
        await ƒS.Character.show(character.tiefling, character.tiefling.pose.standard, ƒS.positionPercent(35, 95));
        await ƒS.update(1);

        await ƒS.Speech.tell(character.tiefling, text.tiefling.T000);
        await ƒS.Speech.tell(character.tiefling, text.tiefling.T001);
        await ƒS.Speech.tell(character.narrator, text.narrator.N003);
        await ƒS.Speech.tell(character.tiefling, text.tiefling.T002);
        await ƒS.Speech.tell(character.tiefling, text.tiefling.T003);

        await ƒS.Character.hide(character.tiefling);
        await ƒS.Character.show(character.tiefling, character.tiefling.pose.thinking, ƒS.positionPercent(35, 95));
        await ƒS.update();

        await ƒS.Speech.tell(character.tiefling, text.tiefling.T004);
        await ƒS.Speech.tell(character.tiefling, text.tiefling.T005);
        await ƒS.Speech.tell(character.tiefling, text.tiefling.T006);
        await ƒS.Speech.tell(character.tiefling, text.tiefling.T007);

        await ƒS.Character.hide(character.tiefling);
        await ƒS.Character.show(character.tiefling, character.tiefling.pose.standard, ƒS.positionPercent(35, 95));
        await ƒS.update();

        await ƒS.Speech.tell(character.tiefling, text.tiefling.T008);


        //Ruby bietet Geschenk an
        if (dataForSave.neededLongSleep === false) {
            await ƒS.Speech.tell(character.tiefling, text.tiefling.T009);
            await ƒS.Speech.tell(character.tiefling, text.tiefling.T010);

            let dialogPresentMorning = await ƒS.Menu.getInput(presentsMorning, "DialogBoxPresents");
            switch (dialogPresentMorning) {
                case presentsMorning.iChooseCloak:
                    ƒS.Inventory.add(items.cloak);
                    await ƒS.Inventory.open();
                    dataForSave.ownsPlayerWaepon = false;
                    break;
                case presentsMorning.iChooseStaff:
                    ƒS.Inventory.add(items.staff);
                    await ƒS.Inventory.open();
                    dataForSave.ownsPlayerWaepon = true;
                    break;
                case presentsMorning.iChooseSword:
                    ƒS.Inventory.add(items.sword);
                    await ƒS.Inventory.open();
                    dataForSave.ownsPlayerWaepon = true;
                    break;
            }
        } else {
            await ƒS.Speech.tell(character.tiefling, text.tiefling.T011);

            let dialogPresentNoon = await ƒS.Menu.getInput(presentsNoon, "DialogBoxPresents");
            switch (dialogPresentNoon) {
                case presentsNoon.iChooseCloak:
                    ƒS.Inventory.add(items.cloak);
                    await ƒS.Inventory.open();
                    dataForSave.ownsPlayerWaepon = false;
                    break;
                case presentsNoon.iChooseStaff:
                    ƒS.Inventory.add(items.staff);
                    await ƒS.Inventory.open();
                    dataForSave.ownsPlayerWaepon = true;
                    break;
            }
        }

        await ƒS.Speech.tell(character.tiefling, text.tiefling.T012);

        
        //Protagonist macht sich auf den Weg
        await ƒS.Speech.tell(character.narrator, text.narrator.N004);

        await ƒS.Character.hide(character.tiefling);
        await ƒS.Character.hide(roomInventory.ladenTheke);

        return "Unterwegs1Goblins";
    }
}