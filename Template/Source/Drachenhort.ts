namespace Novel {
    export async function Drachenhort(): ƒS.SceneReturn {
        console.log("Szene: Drachenhort");

        //test
        //ƒS.Inventory.add(items.staff);
        //ƒS.Inventory.add(items.cloak);
        //ƒS.Inventory.add(items.sword);
        //ƒS.Inventory.add(items.stone);
        





        let text = {
            narrator: {
                N000: "Als ihr in die Höhle eintretet herrscht totale Finsternis.",
                N001: "Ihr lauft langsam weiter und allmählich wird es heller…",
                N002: "Vorsichtig tastet ihr euch an das Ende der Höhle voran, bis …",

                N003: "Ihr steht plötzlich einem riesigen schlafenden Drachen gegenüber.",
                N004: "Neben dir zittert Amalya vor Angst. Du erkennst, wie sie sich anstrengt nicht nochmal loszuschreien.",
                N005: "Pfffff!",
                N006: "Schnaubend steht der Drache auf.",
                N007: "Schon im Liegen war dieser riesig, aber jetzt wird er immer größer, bis er in seiner vollen Größe wütend vor euch dasteht.",
                N008: "Ihr steht einem riesigen wütenden Drachen bevor.",

                N009: "Dein Mut ist bewundernswert, deine Intelligenz jedoch nicht. Wer greift einen Drachen mit bloßen Händen an?!",
                N010: "Voller Selbstvertrauen stellst du dich dem Drachen entgegen…",
                N011: "Ein böser Fehler!",

                N012: "Du wirfst einen Blick in deinen Rucksack und ziehst den alles entscheidenden Gegenstand heraus…",

                N013: "Du nimmst deinen Stab und stellst dich todesmutig dem Drachen entgegen…",
                N014: "Du greifst einen feuerspeienden Drachen mit einem Holzstock an…wer hätte gedacht, dass das schief gehen kann!",

                N015: "Du erinnerst dich an Rubys Worte…friedliche Lösung!",
                N016: "Du kniest vor dem Drachen nieder und bietest ihm deinen Umhang als Geschenk an.",
                N017: "Der Drache scheint kurz verwirrt aber immer noch wütend…",
                N018: "…der Umhang ist ja auch viel zu klein!",

                N019: "Du greifst zu deinem Schwert und stellst dich dem Drachen entgegen!",
                
                N020: "Du kniest nieder und bietest dem Drachen als Geschenk den wunderschönen Stein an.",
                N021: "Auf einmal wird der Drache ganz ruhig und friedlich…",
                N022: "Er nimmt den Stein vorsichtig an sich.",
                N023: "Plötzlich fängt der Stein sich an zu bewegen…",
                N024: "Da erkennst du…es ist gar kein Stein, sondern ein Ei!",
                N025: "Aus dem Ei schlüpft ein kleines Drachenbaby, welches von seiner Mutter liebevoll betrachtet wird.",

                N026: "Du schreist Amalya zu, dass sie fliehen soll…",
                N027: "…so schnell du kannst rennst du ihr hinterher…",
                N028: "Jedoch zu langsam!"
            },
            fairy: {
                F000: "Aaahhhhhhhhh!!!",
                F001: "I-i-ich d-d-dachte nicht, dass er so groß ist…",
                F002: "G-g-glaubst du e-e-er hat mich gehört?!",

                F003: "Tu doch etwas!",
                F004: "Vielleicht hast du ja etwas Nützliches dabei! O-o-oder Ruby hat Recht und man kann die Sache doch i-i-irgendwie friedlich lösen!",

                F005: "",
                F006: "",
                F007: ""
            }
        };

        let ratschlagBefolgen = {
            iChooseYes: "Hast Recht, ich sollte in meinen Rucksack schauen!",
            iCHooseNo: "Ach was, ich besiege den Drachen schon!"
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
        await ƒS.Speech.tell(character.narrator, text.narrator.N000);
        await ƒS.Speech.tell(character.narrator, text.narrator.N001);
        await ƒS.Location.show(location.drachenHoehleGang);
        await ƒS.update(8, transition.transitionThree.alpha, transition.transitionThree.edge);
        await ƒS.Speech.tell(character.narrator, text.narrator.N002);


        //sie entdecken schlafenden Drachen
        await ƒS.Location.show(location.drachenHoehle);
        await ƒS.Character.show(character.dragon, character.dragon.pose.sleeping, ƒS.positionPercent(55, 80));
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);
        await ƒS.Speech.tell(character.fairy, text.fairy.F000);
        await ƒS.Speech.tell(character.narrator, text.narrator.N003);
        await ƒS.Speech.tell(character.narrator, text.narrator.N004);
        await ƒS.Character.show(character.fairy, character.fairy.pose.afraid, ƒS.positionPercent(20, 70));
        await ƒS.update(0.5);
        await ƒS.Speech.tell(character.fairy, text.fairy.F001);
        await ƒS.Speech.tell(character.fairy, text.fairy.F002);
        await ƒS.Speech.tell(character.narrator, text.narrator.N005);
        await ƒS.Speech.tell(character.narrator, text.narrator.N006);
        await ƒS.Character.hide(character.dragon);
        await ƒS.update();
        await ƒS.Character.show(character.dragon, character.dragon.pose.angry, ƒS.positionPercent(50, 100));
        await ƒS.update(3);
        await ƒS.Speech.tell(character.narrator, text.narrator.N007);
        //await ƒS.Speech.tell(character.narrator, text.narrator.N008);


        //F schlägt vor ins Inventar zu schauen
        await ƒS.Speech.tell(character.fairy, text.fairy.F003);
        await ƒS.Speech.tell(character.fairy, text.fairy.F004);


        //Möglichkeit Ratschlag der Fee zu befolgen
        let dialogRatschlagBefolgen = await ƒS.Menu.getInput(ratschlagBefolgen, "DialogBoxRatschlagBefolgen");
        switch (dialogRatschlagBefolgen) {       
            case ratschlagBefolgen.iCHooseNo:
                await ƒS.Speech.tell(character.narrator, text.narrator.N009);
                await ƒS.Speech.tell(character.narrator, text.narrator.N010);
                await ƒS.Speech.tell(character.narrator, text.narrator.N011);
                await ƒS.Character.hide(character.dragon);
                await ƒS.Character.hide(character.fairy);
                dataForSave.badDragonEndingNo = 0;
                return "EndingBadDragon";    
            case ratschlagBefolgen.iChooseYes:
                await ƒS.Speech.tell(character.narrator, text.narrator.N012);
               break;
        }


        //Ratschlag der Fee befolgt --> Blick ins Inventar
        //await ƒS.Inventory.open();
        //await ƒS.Speech.tell(character.narrator, "  ");
        
        let dialogHowToDealWithDragons = await ƒS.Menu.getInput(howToDealWithDragons, "DialogBoxhowToDealWithDragons");
            switch (dialogHowToDealWithDragons) {
                case howToDealWithDragons.iChooseStaff:
                    await ƒS.Speech.tell(character.narrator, text.narrator.N013);
                    await ƒS.Speech.tell(character.narrator, text.narrator.N014);
                    await ƒS.Character.hide(character.dragon);
                    await ƒS.Character.hide(character.fairy);
                    dataForSave.badDragonEndingNo = 1;
                    return "EndingBadDragon";
                  
                case howToDealWithDragons.iChooseCloak:
                    await ƒS.Speech.tell(character.narrator, text.narrator.N015);
                    await ƒS.Speech.tell(character.narrator, text.narrator.N016);
                    await ƒS.Speech.tell(character.narrator, text.narrator.N017);
                    await ƒS.Speech.tell(character.narrator, text.narrator.N018);
                    await ƒS.Character.hide(character.dragon);
                    await ƒS.Character.hide(character.fairy);
                    dataForSave.badDragonEndingNo = 2;
                    return "EndingBadDragon";
                   
                case howToDealWithDragons.iChooseSword:
                    await ƒS.Speech.tell(character.narrator, text.narrator.N019);
                    await ƒS.Character.hide(character.dragon);
                    await ƒS.Character.hide(character.fairy);
                    return "EndingSadDragon";
                    
                case howToDealWithDragons.iChooseStone:
                    await ƒS.Speech.tell(character.narrator, text.narrator.N015);
                    await ƒS.Speech.tell(character.narrator, text.narrator.N020);
                    await ƒS.Speech.tell(character.narrator, text.narrator.N021);
                    await ƒS.Speech.tell(character.narrator, text.narrator.N022);
                    await ƒS.Character.hide(character.dragon);
                    await ƒS.Character.hide(character.fairy);
                    await ƒS.Speech.tell(character.narrator, text.narrator.N023);
                    await ƒS.Speech.tell(character.narrator, text.narrator.N024);
                    await ƒS.update();
                    await ƒS.Character.show(character.dragon, character.dragon.pose.happyWithBaby, ƒS.positionPercent(50, 100));
                    await ƒS.update(1);
                    await ƒS.Speech.tell(character.narrator, text.narrator.N025);
                    await ƒS.Character.hide(character.dragon);
                    return "EndingHappyDragon";
                
                case howToDealWithDragons.iChooseRun:
                    await ƒS.Speech.tell(character.narrator, text.narrator.N026);
                    await ƒS.Speech.tell(character.narrator, text.narrator.N027);
                    await ƒS.Speech.tell(character.narrator, text.narrator.N028);
                    await ƒS.Character.hide(character.dragon);
                    await ƒS.Character.hide(character.fairy);
                    dataForSave.badDragonEndingNo = 3;
                    return "EndingBadDragon";
                    
            }

    }
}