namespace Novel {
    export async function Prolog(): ƒS.SceneReturn {
        console.log("Szene: Prolog");

        let text = {
            prologText: {
                T000: "&nbsp;",
                T001: "198 n.D.",
                T002: "Die Drachenkriege sind seit fast 200 Jahren vorbei. ",
                T003: "Obwohl mit den letzten verbleibenden Drachen Frieden geschlossen wurde, halten diese sich nun überwiegend im Verborgenen auf.",
                T004: "Nur selten bekommt man einen von Ihnen zu sehen.",
                T005: "Nach einer längeren Reise kommst du gerade in einem kleinen Dorf an.",
                T006: "Du stammst aus einer, in deiner Heimat, angesehenen Familie von Abenteurern.",
                T007: "Da du jedoch der Jüngste in deiner Familie bist, steht dir das große Glück zu jegliche Botengänge zu erledigen. Von solch einem Botengang kommst du gerade.",
                T008: "Du bist hungrig und sehnst dich nach einem Bett, als du am Ende der Straße ein Gasthaus entdeckst."
            },
            novelPage: {
                N000: "<h1> Shortcuts </h1><b> F8: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Save <br><b> F9: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Load <br><b> M: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Open/Close Menu<br><b> C: </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; show Credits<br>"
            }
        };

        let textDelay1 = 5000;
        let textDelay2 = 2000;

        document.getElementById("speech").hidden = true;

        await ƒS.Location.show(location.blackscreen);
        await ƒS.update(transition.transitionTwo.duration, transition.transitionTwo.alpha, transition.transitionTwo.edge)
       
        //Anzeige Shortcuts
        ƒS.Text.addClass("menuShortcuts");
        await ƒS.Text.print(text.novelPage.N000);
        

        //Prolog
        let storyDIv = document.getElementById("storyDiv");

        storyDIv.innerHTML = text.prologText.T001;
        storyDIv.classList.toggle('fade');
        await delay(textDelay1);
        storyDIv.classList.toggle('fadeOut');
        console.log("fade out")
        await delay(textDelay2);

        storyDIv.innerHTML = text.prologText.T002;
        storyDIv.classList.toggle('fadeOut');
        console.log("fade")
        await delay(textDelay1);
        storyDIv.classList.toggle('fade');
        await delay(textDelay2);

        storyDIv.innerHTML = text.prologText.T003;
        storyDIv.classList.toggle('fade');
        await delay(textDelay1);
        storyDIv.classList.toggle('fadeOut');
        await delay(textDelay2);

        storyDIv.innerHTML = text.prologText.T004;
        storyDIv.classList.toggle('fadeOut');
        await delay(textDelay1);
        storyDIv.classList.toggle('fade');
        await delay(textDelay2);

        storyDIv.innerHTML = text.prologText.T005;
        storyDIv.classList.toggle('fade');
        await delay(textDelay1);
        storyDIv.classList.toggle('fadeOut');
        await delay(textDelay2);

        storyDIv.innerHTML = text.prologText.T006;
        storyDIv.classList.toggle('fadeOut');
        await delay(textDelay1);
        storyDIv.classList.toggle('fade');
        await delay(textDelay2);

        storyDIv.innerHTML = text.prologText.T007;
        storyDIv.classList.toggle('fade');
        await delay(textDelay1);
        storyDIv.classList.toggle('fadeOut');
        await delay(textDelay2);

        storyDIv.innerHTML = text.prologText.T008;
        storyDIv.classList.toggle('fadeOut');
        await delay(textDelay1);
        storyDIv.classList.toggle('fade');
        await delay(textDelay2);
      

        return "Gasthaus";
    }
}