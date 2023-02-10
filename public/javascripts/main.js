// let names = ['Manissa', 'Me', 'InShaAllah'];

// for (let i = 0; i < names.length; i++) {
//     for (let j = 0; j < names.length; j++) {
//         if (names[j] == names[i]){
//             console.log("same");
//         }else{
//             console.log("different");
//         }
//     }
// }

// let toRemove = 0;
// let toAdd = 0;


// for (let i = 0; i < dateObj.Creches.length; i++) {
//     for (let j = 0; j < dateObj.Creches.length; j++) {
//         if (dateObj.ref[j] != dateObj.ref[i]) {
//             if (dateObj.date[j] == dateObj.date[i]) {
//                 if ((dateObj.LM[j] == 0 && dateObj.LM[i] == 0) && (dateObj.LAM[j] == 1 && dateObj.LAM[i] == 1) && (dateObj.MM[j] == 0 && dateObj.MM[i] == 0) && (dateObj.MAM[j] == 1 && dateObj.MAM[i] == 1) && (dateObj.MeM[j] == 0 && dateObj.MeM[i] == 0) && (dateObj.MeAM[j] == 1 && dateObj.MeAM[i] == 1) && (dateObj.JM[j] == 0 && dateObj.JM[i] == 0) && (dateObj.JAM[j] == 1 && dateObj.JAM[i] == 1) && (dateObj.VM[j] == 0 && dateObj.VM[i] == 0) && (dateObj.VAM[j] == 1 && dateObj.VAM[i] == 1)) {
//                     toRemove += parseInt(dateObj.places[j]);
//                 } else if ((dateObj.LM[j] == 1 && dateObj.LM[i] == 1) && (dateObj.LAM[j] == 0 && dateObj.LAM[i] == 0) && (dateObj.MM[j] == 1 && dateObj.MM[i] == 1) && (dateObj.MAM[j] == 0 && dateObj.MAM[i] == 0) && (dateObj.MeM[j] == 1 && dateObj.MeM[i] == 1) && (dateObj.MeAM[j] == 0 && dateObj.MeAM[i] == 0) && (dateObj.JM[j] == 1 && dateObj.JM[i] == 1) && (dateObj.JAM[j] == 0 && dateObj.JAM[i] == 0) && (dateObj.VM[j] == 1 && dateObj.VM[i] == 1) && (dateObj.VAM[j] == 0 && dateObj.VAM[i] == 0)) {
//                     toRemove += parseInt(dateObj.places[j]);
//                 }
//             }
//         }
//     }
// }


// let dayPlace = Object.keys(dateObj);
// for (let i = 0; i < dateObj.Creches.length; i++) {
//     let check = dateObj.dayPlace[0][i];
//     let diff = 'noOne';
//     for (let y = 0; y < dayPlace.length; y++) {
//         if (dateObj.dayPlace[y][i] != check) {
//             diff = y;
//         }
//         if (diff != 0) {
//             console.log(dayPlace[diff])
//         }
//     }
// }

function changeForm(elementClicked) {
    let buttonLog = document.getElementById("login");
    let buttonSub = document.getElementById("submit");
    let formLog = document.getElementById("formLog");
    let formSub = document.getElementById("formSub");

    if (elementClicked == "login") {
        buttonLog.className = "active";
        buttonSub.className = "unactive";
        formSub.style.display = "none";
        formLog.style.display = "block";
    } else if (elementClicked == "submit") {
        buttonLog.className = "unactive";
        buttonSub.className = "active";
        formLog.style.display = "none";
        formSub.style.display = "block";
    }
}