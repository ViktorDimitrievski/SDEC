'use strict';

$(document).ready(function () {
    var idCounter = 1; // vrednost na id za sekoj vnesen recept
    var recepti = [{
        id: "1",
        ime: "Viktor",
        izvor: "Baba.mi",
        sostojki: [{
            "brasno": 3,
            "mleko": 3,
            "maslo": 2,
            "sol": 5,
            "seker": 1,
            "jajca": 2,
            "domati": 4,
            "piperki": 0,
            "sirenje": 7,
            "kaskaval": 0,
            "kompir": 0,
            "meso": 0
        }],
        vremePodgotovka: "",
        nacinPodgotovka: ""
    }];

    $("#dodadiRecept").click(function () {
        var imeInput = $("#ime").val();
        var izvorInput = $("#izvor").val();
        var sostojkaInput = $("#sostojka").val();
        var kolicestvoInput = $("#kolicestvo").val();
        var vremeInput = $("#vreme").val();
        var podgotovkaInput = $("#podgotovka").val();
        ++idCounter;
        recepti.push({
            id: idCounter,
            ime: imeInput,
            izvor: izvorInput,
            sostojki:{
              "brasno" : 3,
            "piperki": 5
            },
            vremePodgotovka: vremeInput,
            nacinPodgotovka: podgotovkaInput
        });
    });
/*    $("#dodadiSostojka").click(function () {
        var sostojkaInput = $("#sostojka").val();
        if (sostojkaInput === "default") {
            alert("Потребно е да ја одберете прво првата состојка на вашиот бабин рецепт!");
        }else{
        $("#prvaSostojka").clone().appendTo("tbody");
        $("")
        }
    });*/
});



