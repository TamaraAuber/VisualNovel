namespace Novel {
    export async function Epilog(): ƒS.SceneReturn {
        console.log("Szene: Prolog");

       

        await ƒS.Location.show(location.blackscreen);
        await ƒS.update(transition.transitionOne.duration, transition.transitionOne.alpha, transition.transitionOne.edge);


        // Novel Page
        ƒS.Text.setClass("Epilog");
        ƒS.Text.print("Ich bin ein Epilog :)");

        




    }
}
