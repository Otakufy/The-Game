// Simpele maze game van Luuk Schouten

alert("Je zit vast in een doolhof, probeer de weg naar buiten te vinden!")

var vraag = prompt("Naar links, rechtdoor naar rechts?");
var fout = document.write("Doodlopend, probeer opnieuw.");

if(vraag == "links"){
    alert("Correct!");

    var Level1 = prompt("Naar links, rechtdoor naar rechts?");
    if(Level1 == "rechts"){
        console.log("Level 1")
        alert("Correct!");

        var Level2 = prompt("Naar links, rechtdoor naar rechts?");
        if(Level2 == "rechts"){
            alert("Correct!");
            console.log("Level 2");

            var Level3 = prompt("Naar links, rechtdoor naar rechts?");
            if(Level3 == "links"){
                alert("Correct!");
                console.log("Level 3");

                var Level4 = prompt("Naar links, rechtdoor naar rechts?");
                if(Level4 == "rechtdoor"){
                    console.log("Level 4")
                    alert("Je bent uit het doolhof gekomen!");
                    location.reload();
                }else{
                    fout;
                }
            }else{
                fout;
            }
        }else{
            fout;
        }
    }else{
        fout;
    }
}else{
    fout;
}














