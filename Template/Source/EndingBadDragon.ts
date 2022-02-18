namespace Novel {
    export async function EndingBadDragon(): ƒS.SceneReturn {
        console.log("This is the bad Dragon End");

        let text = {
            narrator: {
                N000: "Du spürst, wie es in der Höhle schlagartig heißer wird…",
                N001: "Das letzte was du wahrnehmen kannst ist der fürchterliche Schrei eines Drachen, bevor du von glühenden Flammen umgeben wirst.",
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
        
        dataForSave.whichEnd = 0;
        return "Epilog";
    }
}