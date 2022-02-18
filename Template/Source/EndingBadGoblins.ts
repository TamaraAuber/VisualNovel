namespace Novel {
    export async function EndingBadGoblins(): ƒS.SceneReturn {
        console.log("This is the bad Goblin End");

        let text = {
            narrator: {
                N000: "Du trittst den Goblins zwar mutig, aber ohne richtige Waffe entgegen.",
                N001: "Unglücklicherweise sind diese dir zahlenmäßig überlegen und ziemlich wütend.",
                N002: "So sehr du es auch versuchst, sie sind einfach zu viele…",
                N003: "Du wirst von den Goblins besiegt!"
            }
        };

        let textDelay1 = 3000;
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

      
        dataForSave.whichEnd = 0;
        return "Epilog";

    }
}