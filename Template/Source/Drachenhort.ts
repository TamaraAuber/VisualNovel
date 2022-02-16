namespace Novel {
    export async function Drachenhort(): ƒS.SceneReturn {
        console.log("Szene: Drachenhort");

        //test
        //ƒS.Inventory.add(items.staff);
        //ƒS.Inventory.add(items.cloak);
        //ƒS.Inventory.add(items.sword);
        //ƒS.Inventory.add(items.stone);
        





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

        let howToDealWithDragons;
        /* --> alle Auswahlmöglichkeiten
        howToDealWithDragons = {
            iChooseStaff: "Stab",
            iChooseCloak: "Umhang",
            iChooseSword: "Schwert",
            iChooseStone: "Stein",
            iChooseRun: "Weglaufen!!!"
        };*/

        if (ƒS.Inventory.getAmount(items.staff)) {
            howToDealWithDragons = {
                iChooseStaff: "Stab",
                iChooseRun: "Weglaufen!!!"
            };
        }

        if (ƒS.Inventory.getAmount(items.staff) && ƒS.Inventory.getAmount(items.stone)) {
            howToDealWithDragons = {
                iChooseStaff: "Stab",
                iChooseStone: "Stein",
                iChooseRun: "Weglaufen!!!"
            };
        }

        if (ƒS.Inventory.getAmount(items.cloak)) {
            howToDealWithDragons = {
                iChooseCloak: "Umhang",
                iChooseRun: "Weglaufen!!!"
            };
        }

        if (ƒS.Inventory.getAmount(items.cloak) && ƒS.Inventory.getAmount(items.stone)) {
            howToDealWithDragons = {
                iChooseCloak: "Umhang",
                iChooseStone: "Stein",
                iChooseRun: "Weglaufen!!!"
            };
        }

        if (ƒS.Inventory.getAmount(items.sword)) {
            howToDealWithDragons = {
                iChooseSword: "Schwert",
                iChooseRun: "Weglaufen!!!"
            };
        }

        if (ƒS.Inventory.getAmount(items.sword) && ƒS.Inventory.getAmount(items.stone)) {
            howToDealWithDragons = {
                iChooseSword: "Schwert",
                iChooseStone: "Stein",
                iChooseRun: "Weglaufen!!!"
            };
        }
        


        //P und F betreten Höhle
        await ƒS.Location.show(location.blackscreen);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Speech.tell(character.narrator, "Es ist dunkel");
        await ƒS.Speech.tell(character.narrator, "Du läufst weiter und es wird heller");

        await ƒS.Location.show(location.drachenHoehleGang);
        await ƒS.update(transition.transitionThree.duration, transition.transitionThree.alpha, transition.transitionThree.edge);

        await ƒS.Speech.tell(character.narrator, "gelangst ans Ende der Höhle");


        //sie entdecken schlafenden Drachen
        await ƒS.Location.show(location.drachenHoehle);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        await ƒS.Speech.tell(character.narrator, "Entdeckst Drache");

        await ƒS.Character.show(character.dragon, character.dragon.pose.sleeping, ƒS.positionPercent(55, 80));
        await ƒS.update(1);

        //await ƒS.Character.show(roomInventory.sonnenstrahlen, roomInventory.sonnenstrahlen.pose.standard, ƒS.positionPercent(50, 100));
        //await ƒS.update(1);


        //Drache wird geweckt
        await ƒS.Speech.tell(character.narrator, "Fee erschrickt; stößt Stein um -> lautes Geräusch!!!");

        await ƒS.Character.show(character.fairy, character.fairy.pose.afraid, ƒS.positionPercent(20, 70));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(character.fairy, "Glaubst du er hat das bemerkt?");

        await ƒS.Speech.tell(character.narrator, "Drache wird geweckt");
        await ƒS.Character.hide(roomInventory.sonnenstrahlen);
        await ƒS.Character.hide(character.dragon);
        await ƒS.update();

        await ƒS.Character.show(character.dragon, character.dragon.pose.angry, ƒS.positionPercent(50, 100));
        await ƒS.update(1);


        //F schlägt vor ins Inventar zu schauen
        await ƒS.Speech.tell(character.fairy, "Möchtest du in dein Inventar schauen?");


        //Möglichkeit Ratschlag der Fee zu befolgen
        let dialogRatschlagBefolgen = await ƒS.Menu.getInput(ratschlagBefolgen, "DialogBoxRatschlagBefolgen");
        switch (dialogRatschlagBefolgen) {       
            case ratschlagBefolgen.iCHooseNo:
                await ƒS.Speech.tell(character.narrator, "Angrif!!!!!!");
                await ƒS.Character.hide(character.dragon);
                await ƒS.Character.hide(character.fairy);
                dataForSave.badDragonEndingNo = 0;
                return "EndingBadDragon";    
            case ratschlagBefolgen.iChooseYes:
               break;
        }


        //Ratschlag der Fee befolgt --> Blick ins Inventar
        await ƒS.Inventory.open();
        await ƒS.Speech.tell(character.narrator, "Was möchtest du tun?");
        
        let dialogHowToDealWithDragons = await ƒS.Menu.getInput(howToDealWithDragons, "DialogBoxhowToDealWithDragons");
            switch (dialogHowToDealWithDragons) {
                case howToDealWithDragons.iChooseStaff:
                    await ƒS.Speech.tell(character.narrator, "Staff Attack!");
                    await ƒS.Character.hide(character.dragon);
                    await ƒS.Character.hide(character.fairy);
                    dataForSave.badDragonEndingNo = 1;
                    return "EndingBadDragon";
                  
                case howToDealWithDragons.iChooseCloak:
                    await ƒS.Speech.tell(character.narrator, "Here's my cloak :)");
                    await ƒS.Character.hide(character.dragon);
                    await ƒS.Character.hide(character.fairy);
                    dataForSave.badDragonEndingNo = 2;
                    return "EndingBadDragon";
                   
                case howToDealWithDragons.iChooseSword:
                    await ƒS.Speech.tell(character.narrator, "My sword will kill you!");
                    await ƒS.Character.hide(character.dragon);
                    await ƒS.Character.hide(character.fairy);
                    return "EndingSadDragon";
                    
                case howToDealWithDragons.iChooseStone:
                    await ƒS.Speech.tell(character.narrator, "I give you my stone :)");
                    await ƒS.Character.hide(character.dragon);
                    await ƒS.Character.hide(character.fairy);
                    return "EndingHappyDragon";
                
                case howToDealWithDragons.iChooseRun:
                    await ƒS.Speech.tell(character.narrator, "Run Forrest Run");
                    await ƒS.Character.hide(character.dragon);
                    await ƒS.Character.hide(character.fairy);
                    dataForSave.badDragonEndingNo = 3;
                    return "EndingBadDragon";
                    
            }

    }
}