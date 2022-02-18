namespace Novel {
    export async function EndingSadDragon(): ƒS.SceneReturn {
        console.log("This is the sad End");

        let text = {
            narrator: {
                N000: "Es ist fast so als würdest du gar nicht selbst kämpfen.",
                N001: "Als würde das Schwert sich von selbst bewegen…",
                N002: "Du schlägst und weichst ein paar Mal aus …",
                N003: "… bis du dem Drachen schließlich den Todesstoß verpasst!",
                N004: "Mit einem qualvollen Schrei geht dieser zu Boden und regt sich nicht mehr.",
                N005: "Plötzlich fängt dein Rucksack an sich zu bewegen…",
                N006: "Du schaust hinein und ziehst den Stein heraus, welcher anfängt Risse zu bekommen…",
                N007: "Als der Stein ganz auseinanderfällt, hältst du plötzlich einen kleinen Drachen in den Armen…",
                N008: "Er schaut dich erwartungsvoll mit seinen großen Kulleraugen an.",
                N009: "Da wird dir klar …",
                N010: "Der fürchterliche Drache war gar nicht so böse, sondern nur auf der Suche nach seinem Baby…",
                N011: "und du hast sie umgebracht."
            }
        };

        let textDelay1 = 5000;
        let textDelay2 = 2000;

        document.getElementById("speech").hidden = true;

        await ƒS.Location.show(location.blackscreen);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        let storyDIv = document.getElementById("storyDiv");

        storyDIv.innerHTML = text.narrator.N000;
        storyDIv.classList.toggle('fade');
        await delay(textDelay1);
        storyDIv.classList.toggle('fadeOut');
        console.log("fade out")
        await delay(textDelay2);

        storyDIv.innerHTML = text.narrator.N001;
        storyDIv.classList.toggle('fadeOut');
        console.log("fade")
        await delay(textDelay1);
        storyDIv.classList.toggle('fade');
        await delay(textDelay2);

        storyDIv.innerHTML = text.narrator.N002;
        storyDIv.classList.toggle('fade');
        await delay(textDelay1);
        storyDIv.classList.toggle('fadeOut');
        await delay(textDelay2);

        storyDIv.innerHTML = text.narrator.N003;
        storyDIv.classList.toggle('fadeOut');
        await delay(textDelay1);
        storyDIv.classList.toggle('fade');
        await delay(textDelay2);

        storyDIv.innerHTML = text.narrator.N004;
        storyDIv.classList.toggle('fade');
        await delay(textDelay1);
        storyDIv.classList.toggle('fadeOut');
        await delay(textDelay2);

        storyDIv.innerHTML = text.narrator.N005;
        storyDIv.classList.toggle('fadeOut');
        await delay(textDelay1);
        storyDIv.classList.toggle('fade');
        await delay(textDelay2);

        storyDIv.innerHTML = text.narrator.N006;
        storyDIv.classList.toggle('fade');
        await delay(textDelay1);
        storyDIv.classList.toggle('fadeOut');
        await delay(textDelay2);

        storyDIv.innerHTML = text.narrator.N007;
        storyDIv.classList.toggle('fadeOut');
        await delay(textDelay1);
        storyDIv.classList.toggle('fade');
        await delay(textDelay2);

        storyDIv.innerHTML = text.narrator.N008;
        storyDIv.classList.toggle('fade');
        await delay(textDelay1);
        storyDIv.classList.toggle('fadeOut');
        await delay(textDelay2);

        storyDIv.innerHTML = text.narrator.N009;
        storyDIv.classList.toggle('fadeOut');
        await delay(textDelay1);
        storyDIv.classList.toggle('fade');
        await delay(textDelay2);

        storyDIv.innerHTML = text.narrator.N010;
        storyDIv.classList.toggle('fade');
        await delay(textDelay1);
        storyDIv.classList.toggle('fadeOut');
        await delay(textDelay2);

        storyDIv.innerHTML = text.narrator.N011;
        storyDIv.classList.toggle('fadeOut');
        await delay(textDelay1);
        storyDIv.classList.toggle('fade');
        await delay(textDelay2);

        dataForSave.whichEnd = 1;
        return "Epilog";

    }
}