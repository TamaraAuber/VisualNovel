namespace Novel {
    export async function Drachenhort(): ƒS.SceneReturn {
        console.log("Szene: Drachenhort");

        /*let text = {
            narrator: {
                N000: "Hier wohnt ein Drache",
                N001: "Auftritt Drache",
                N002: ":)"
            }
        };*/

        let ratschlagBefolgen = {
            iChooseYes: "Ins Inventar schauen",
            iCHooseNo: "Drache einfach bekämpfen"
        };

        //schauen wie ich checke was Protagonist im Inventar dabei hat
        let howToDealWithDragons = {
            iChooseStaff: "Stab",
            iChooseCloak: "Umhang",
            iChooseSword: "Schwert",
            iChooseStone: "Stein"
        };


        await ƒS.Location.show(location.blackscreen);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Speech.tell(character.narrator, "Es ist dunkel");
        await ƒS.Speech.tell(character.narrator, "Du läufst weiter und es wird heller");

        await ƒS.Location.show(location.drachenHoehleGang);
        await ƒS.update(transition.transitionThree.duration, transition.transitionThree.alpha, transition.transitionThree.edge);

        await ƒS.Speech.tell(character.narrator, "gelangst ans Ende der Höhle");

        await ƒS.Location.show(location.drachenHoehle);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Speech.tell(character.narrator, "Entdeckst Drache");

        await ƒS.Character.show(character.dragon, character.dragon.pose.sleeping, ƒS.positionPercent(55, 80));
        await ƒS.update(1);

        await ƒS.Character.show(roomInventory.sonnenstrahlen, roomInventory.sonnenstrahlen.pose.standard, ƒS.positionPercent(50, 100));
        await ƒS.update(1);

        await ƒS.Speech.tell(character.narrator, "Drache wacht auf");

        await ƒS.Character.hide(roomInventory.sonnenstrahlen);
        await ƒS.update();
        await ƒS.Character.hide(character.dragon);
        await ƒS.update();

        await ƒS.Character.show(character.dragon, character.dragon.pose.angry, ƒS.positionPercent(50, 100));
        await ƒS.update(1);

        await ƒS.Speech.tell(character.fairy, "Möchtest du in dein Inventar schauen?");

        let dialogRatschlagBefolgen = await ƒS.Menu.getInput(ratschlagBefolgen, "DialogBoxRatschlagBefolgen");
        switch (dialogRatschlagBefolgen) {       
            case ratschlagBefolgen.iCHooseNo:
                await ƒS.Speech.tell(character.narrator, "Angrif!!!!!!");
                dataForSave.givenEnding = "0";
                return "Ende";    
            case ratschlagBefolgen.iChooseYes:
                await ƒS.Speech.tell(character.narrator, "Was möchtest du tun?");
        
                let dialogHowToDealWithDragons = await ƒS.Menu.getInput(howToDealWithDragons, "DialogBoxhowToDealWithDragons");
                    switch (dialogHowToDealWithDragons) {
                        case howToDealWithDragons.iChooseStaff:
                            await ƒS.Speech.tell(character.narrator, "Staff Attack!");
                            break;
                        case howToDealWithDragons.iChooseCloak:
                            await ƒS.Speech.tell(character.narrator, "Here's my cloak :)");
                            break;
                        case howToDealWithDragons.iChooseSword:
                            await ƒS.Speech.tell(character.narrator, "My sword will kill you!");
                            break;
                        case howToDealWithDragons.iChooseStone:
                            await ƒS.Speech.tell(character.narrator, "I give you my stone :)");
                            break;
            }
        }

    


    }
}