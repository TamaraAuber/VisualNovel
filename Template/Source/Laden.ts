namespace Novel {
    export async function Laden(): ƒS.SceneReturn {
        console.log("Szene: Laden");

        let text = {
            narrator: {
                N000: "Willkommen im Laden",
                N001: "Auftritt Händlerin"
            },
            tiefling: {
                T000: "Willkommen in meinem Laden"
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

        await ƒS.Speech.tell(character.narrator, text.narrator.N000);

        await ƒS.Character.show(roomInventory.ladenTheke, roomInventory.ladenTheke.pose.standard, ƒS.positionPercent(50, 100));
        await ƒS.update(1);


        //mit Ruby reden
        await ƒS.Speech.tell(character.narrator, text.narrator.N001);

        await ƒS.Character.show(character.tiefling, character.tiefling.pose.standard, ƒS.positionPercent(35, 95));
        await ƒS.update(1);

        await ƒS.Speech.tell(character.tiefling, text.tiefling.T000);


        //Ruby bietet Geschenk an
        if (dataForSave.neededLongSleep === 0) {
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
            let dialogPresentNoon = await ƒS.Menu.getInput(presentsNoon, "DialogBoxPresents");
            switch (dialogPresentNoon) {
                case presentsNoon.iChooseCloak:
                    dataForSave.ownsPlayerWaepon = false;
                    break;
                case presentsNoon.iChooseStaff:
                    dataForSave.ownsPlayerWaepon = true;
                    break;
            }
        }

        //Ruby erklärt den Weg zum Drachen
        await ƒS.Speech.tell(character.tiefling, "Der Drache lebt in den Bergen");

        await ƒS.Character.hide(character.tiefling);
        await ƒS.update();
        await ƒS.Character.show(character.tiefling, character.tiefling.pose.thinking, ƒS.positionPercent(35, 95));
        await ƒS.update(1);

        //Protagonist macht sich auf den Weg
        await ƒS.Speech.tell(character.narrator, "Du verabschiedest dich und gehst weiter");

        await ƒS.Character.hide(character.tiefling);
        await ƒS.update();
        await ƒS.Character.show(character.tiefling, character.tiefling.pose.standard, ƒS.positionPercent(35, 95));
        await ƒS.update(1);



        await ƒS.Character.hide(character.tiefling);
        await ƒS.Character.hide(roomInventory.ladenTheke);
    }
}