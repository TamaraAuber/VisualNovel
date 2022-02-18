namespace Novel {
    export async function Epilog(): ƒS.SceneReturn {
        console.log("Szene: Epilog");

        let text = {
            narrator: {
                N000: "Bad End",
                N001: "Sad End",
                N002: "Happy End"
            }
        };

        document.getElementById("speech").hidden = true;

        await ƒS.Location.show(location.blackscreen);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);

        let storyDIv = document.getElementById("storyDiv");

        storyDIv.setAttribute("style", "font-size: 70px;");
        
        switch (dataForSave.whichEnd) {
            case 0:
                storyDIv.innerHTML = text.narrator.N000;
                break;
            case 1:
                storyDIv.innerHTML = text.narrator.N001;
                break;
            case 2:
                storyDIv.innerHTML = text.narrator.N002;
                break;
        }
        
        storyDIv.classList.toggle('fade');

    }
}
