namespace Novel {
    export async function EndingHappyDragon(): ƒS.SceneReturn {
        console.log("This is the Happy End");

        let text = {
            narrator: {
                N000: "Du betrachtest die Familie noch eine Weile und trittst dann den Rückweg an.",
                N001: "Im Dorf angekommen beschließt du mit Amalya noch eine Weile dort zu bleiben.",
                N002: "Drachenangriffe gibt es seitdem jedoch keine mehr…",
                N003: "Im Dorf wirst du als Held gefeiert und zum Ehrenbürger erklärt.",
                N004: "Du besuchst die Drachen noch ein paar Mal, um zu sehen, wie es ihnen geht…",
                N005: "Bis du schließlich deine Heimreise antrittst, um deiner Familie von deinem Abenteuer zu berichten."
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

        dataForSave.whichEnd = 2;
        return "Epilog";


    }
}