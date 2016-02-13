'use strict';
$(document).ready(function () {


    var idCounter = 2; // vrednost na id za sekoj vnesen recept
    var recepti = [{
        id: "1",
        ime: "Viktor",
        izvor: "http://baba.mi",
        sostojki: "Pavlaka",
        sostojkaKolicestvo: "3kg",
        vremePodgotovka: "1hr",
        nacinPodgotovka: "Nacinot e zavisi kako ek ti kaze dali baba ti ili majka ti ili moze nekoe treto lice kojgo znaes a mozebi i ne go znaes. ako go znaes dobro i ako ne go znaes e dobro pak ke naucsi nesto novo"
    }, {
        id: "2",
        ime: "Koce",
        izvor: "http://dedo.mi",
        sostojki: "Pavlaka",
        sostojkaKolicestvo: "6kg",
        vremePodgotovka: "1hr",
        nacinPodgotovka: "Ovde demk ima nekoj drug tekst ama izgleda e napisan eveneznam ili jasznam ama nejkam da znam taka baba mi rece"
    }];

    $("#dodadiRecept").click(function () {
        var imeInput = $("#ime").val();
        var izvorInput = $("#izvor").val();
        var sostojkaInput = $("#0").val();
        var kolicestvoInput = $("#kolicestvo").val();
        var vremeInput = $("#vreme").val();
        var vremePodgotovkaInput = $("#podgotovka").val();

        if (imeInput === "" || izvorInput === "" || sostojkaInput === "default" || vremeInput === "" || vremePodgotovkaInput === "") {
            alert("Potrebno e da vi se popolneti polinjata za Ime Izvor edna sostojka barem Vremeto na prigotovka i nacin na podgotovka");

        } else {
            ++idCounter;
            recepti.push({ // Се ставааат влезните параметри во низата рецепти
                id: idCounter,
                ime: imeInput,
                izvor: izvorInput,
                sostojki: sostojkaInput,
                sostojkaKolicestvo: kolicestvoInput,
                vremePodgotovka: vremeInput,
                nacinPodgotovka: vremePodgotovkaInput
            });
            creatingListOfRecepis(); // Се повикува функција која ни ја креира листата од рецепти
        }
    });


    function creatingListOfRecepis() {
        var newTD = "</td> <td>";
        var sizeOfRecepies = recepti.length; //Мериме која е должината на низата Рецептис
        $("#listaRecepti tbody").empty(); // Табелата ја празниме од било какви елементи бидејќи со следната наредба ја креираме од ново

        for (var i = 0; i < sizeOfRecepies; i++) {
            recepti[i].id = i + 1; //Во низата објекти рецепти пристапуваме до рецепт и го мењаме неговото ид за да се прикаже точниот број на ид кога ќе се избрише некој елемент во низата и при неговото рекреирање е потребно ова за да се избегне прикажување на погрешно ид
            $("#listaRecepti tbody") // во табелата со ид листарецепти и во бодито на истата апендираме цел ред со колини 
                .append("<tr> <td> " +
                    recepti[i].id + newTD +
                    recepti[i].ime + newTD +
                    recepti[i].izvor + newTD +
                    recepti[i].sostojki + newTD +
                    recepti[i].sostojkaKolicestvo + newTD +
                    recepti[i].vremePodgotovka + newTD +
                    recepti[i].nacinPodgotovka + "</td> <td class='btnGroup" + i + "'>" + //тукуа во колоната каде што ги печатиме компчињата ставаме класа која ја зголемуваме со и да можеме во секој ред да ставиме к
                    "</td></tr>"
                );
            var btnPrikaz = $("<button></button>").attr('data-id', i).addClass("prikaz").text("Прикажи рецепт");
            var btnBrisi = $("<button></button>").attr('data-id', i).addClass("izbrisi").text("Бриши рецепт");

            $(".btnGroup" + i).append(btnPrikaz, btnBrisi); //овде на класата коај ја креиравме горе ги апендираме креираните компчиња
            // $(".btnGroup" + i).append(btnBrisi);
        } // крај на фор циклусто што апендира елементи

        prikazNaCelosenRecept(); //da se zakaci ovde event lisener za na kopceto za prikaz
        brisenjeNaRecepta(); //da se zakaci ovde event lisener na kopcet za brisenje

    } //ovde e kraj na funkcijata creatingListOfRecepis

    function prikazNaCelosenRecept() {// функција која ни ја прикажува рецептата во целост
        $(".prikaz").click(function (event) {
            var zemiID = $(this).attr("data-id");
            var naslovRecept = $("<h1></h1>").text(recepti[zemiID].ime);
            var izvorvRecept = $("<p></p>").text(recepti[zemiID].izvor);
            var nacinPodgotovkaRecept = $("<p></p>").text(recepti[zemiID].nacinPodgotovka);
            $("#zaOpstiPrikaz").empty();
            $("#zaOpstiPrikaz").append(naslovRecept, izvorvRecept);
            $("#zaNacinPrikaz").empty();
            $("#zaNacinPrikaz").append(nacinPodgotovkaRecept);
        });
    }

    function brisenjeNaRecepta() { //функција која ни брише рецепт од низата рецепти
        $(".izbrisi").click(function () {
            var zemiID = $(this).attr("data-id");
            var parsID = parseInt(zemiID);
            recepti.splice(parsID, 1);
            idCounter = 2;
            creatingListOfRecepis();
            console.log(recepti);
        });
    }




}); //kraj na document redy