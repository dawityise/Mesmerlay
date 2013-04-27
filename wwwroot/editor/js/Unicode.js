var letter;
var objEvent;
var isBackSpace = false;
$(document.getElementById('freeRTE').contentWindow.document).keydown(function(objEvent) {
    objEvent ? keycode = objEvent.which : keycode = event.keyCode;
    var store = document.getElementById('hdn');
    var fidel = document.getElementById("fidel");
    if (keycode == 8) {
        if (fidel.innerHTML !="") {
            fidel.innerHTML = ""; store.value = ""; return false;
        }
        else { store.value = ""; }
    }
});

$(document.getElementById('freeRTE').contentWindow.document).keypress(function(objEvent) {
    objEvent ? keycode = objEvent.which : keycode = event.keyCode;
    letter = String.fromCharCode(keycode);
    var store = document.getElementById('hdn');
    var input = document.getElementById('freeRTE');
    var fidel = document.getElementById("fidel");
    var word;
    //alert(keycode);

    if (keycode != 32) {
        store.value = store.value + letter;
    }
    else {
        store.value = "";
        if (fidel.innerHTML != null) {
            rteInsertHTML(fidel.innerHTML); fidel.innerHTML = "";
        }
    }
    if (keycode == 13) {
        store.value = "";
        if (fidel.innerHTML != null) {
            rteInsertHTML(fidel.innerHTML);
            fidel.innerHTML = "";
        }
    }

    word = store.value;

    if (word.length > 0) {

        var num = "";
        var uni = "";
        if (word.length == 3) {
            num = checkThree(word);
            uni = '"\\u' + num + '"';
            //if word has no meaning e.g. "tab" "mos" "tae"
            if (num == "") {
                //e.g word "sea" if "tae" t-ae ? ta-e
                var thirdChar = word.charAt(2);
                var firstChar = word.charAt(0);
                var firstTwo = word.charAt(0) + word.charAt(1);
                var lastTwo = word.charAt(1) + word.charAt(2);
                var tirgum;
                if (thirdChar == "a" || thirdChar == "e" || thirdChar == "i" || thirdChar == "o" || thirdChar == "u" || thirdChar == "A" || thirdChar == "E" || thirdChar == "I" || thirdChar == "O" || thirdChar == "U") {
                    tirgum = checkOne(thirdChar);
                    if (tirgum == "") {
                        tirgum = checkOne(firstChar);
                        if (/^[A-F\d]{4}$/.test(tirgum)) {
                            uni = '"\\u' + tirgum + '"';
                            rteInsertHTML(eval(uni));

                            store.value = lastTwo;
                            tirgum = checkTwo(lastTwo);

                            if (/^[A-F\d]{4}$/.test(tirgum)) {
                                uni = '"\\u' + tirgum + '"';
                                fidel.innerHTML = eval(uni);
                            }

                        } else { alert("I am here"); }

                    }
                    else {
                        tirgum = checkTwo(word.substring(0, 2));
                        if (/^[A-F\d]{4}$/.test(tirgum)) {
                            uni = '"\\u' + tirgum + '"';
                            rteInsertHTML(eval(uni));
                        }
                        store.value = word.charAt(2);
                        tirgum = checkOne(word.charAt(2));
                        if (/^[A-F\d]{4}$/.test(tirgum)) {
                            uni = '"\\u' + tirgum + '"';
                            fidel.innerHTML = eval(uni);
                        }
                    }

                }
                else {
                    tirgum = checkTwo(word.substring(0, 2));
                    if (/^[A-F\d]{4}$/.test(tirgum)) {
                        uni = '"\\u' + tirgum + '"';
                        rteInsertHTML(eval(uni));
                    }
                    store.value = word.charAt(2);
                    tirgum = checkOne(word.charAt(2));
                    if (/^[A-F\d]{4}$/.test(tirgum)) {
                        uni = '"\\u' + tirgum + '"';
                        fidel.innerHTML = eval(uni);
                    }
                    else {
                        fidel.innerHTML = "";
                        store.value = "";
                    }
                }
            }
            else {
                if (/^[A-F\d]{4}$/.test(num)) {
                    uni = '"\\u' + num + '"';
                    rteInsertHTML(eval(uni));
                    store.value = "";
                    fidel.innerHTML = "";
                }
            }

        }
        else if (word.length == 2) {
            num = checkTwo(word);
            //if word is like "hh" function returns ""
            if (num == "") {
                var tirgum;
                store.value = word.charAt(1);
                tirgum = checkOne(word.charAt(1));

                if (/^[A-F\d]{4}$/.test(tirgum)) {
                    uni = '"\\u' + tirgum + '"';
                    fidel.innerHTML = eval(uni);

                }
                else {
                    fidel.innerHTML = "";
                    store.value = "";
                }
                tirgum = checkOne(word.charAt(0));

                if (/^[A-F\d]{4}$/.test(tirgum)) {
                    uni = '"\\u' + tirgum + '"';
                    rteInsertHTML(eval(uni));

                }

            } else {
                tirgum = checkTwo(word);
                lastChar = word.charAt(1);
                if (/^[A-F\d]{4}$/.test(tirgum)) {
                    
                    uni = '"\\u' + tirgum + '"';
                    if (lastChar == "a" || lastChar == "e" || lastChar == ("u") || lastChar == "A" || lastChar == "E" || lastChar == ("U")) {
                        fidel.innerHTML = eval(uni); 
                    } else { rteInsertHTML(eval(uni)); store.value = ""; fidel.innerHTML = "";  }

                }

            }

        }
        else {
            tirgum = checkOne(word);
            if (/^[A-F\d]{4}$/.test(tirgum)) {
                uni = '"\\u' + tirgum + '"';
                fidel.innerHTML = eval(uni);

            }
        }


    }

    //ignore english characters ":", ";", ",", "#"
    if (keycode == 58 || keycode == 59 || keycode == 44 || keycode == 35 || keycode == 126) {
        return false;
    }
    if (keycode > 64 && keycode < 123
        && keycode != 91 && keycode != 92
        && keycode != 93 && keycode != 94
        && keycode != 95 && keycode != 96) {

        return false;
    }

});


function checkOne(str) {
    switch (str) {
        case "a":
            num = "12A5";
            break;
        case "A":
            num = "12D5";
            break;
        case "b":
            num = "1265";
            break;
        case "B":
            num = "1265";
            break;
        case "c":
            num = "127D";
            break;
        case "C":
            num = "132D";
            break;
        case "d":
            num = "12F5";
            break;
        case "D":
            num = "12F5";
            break;
        case "f":
            num = "134D"
            break;
        case "F":
            num = "134D"
            break;
        case "g":
            num = "130D"
            break;
        case "G":
            num = "130D"
            break;
        case "h":
            num = "1205"
            break;
        case "H":
            num = "1215"
            break;        
        case "j":
            num = "1305"
            break;
        case "J":
            num = "1305"
            break;
        case "k":
            num = "12AD"
            break;
        case "K":
            num = "12BD"
            break;
        case "l":
            num = "120D"
            break;
        case "L":
            num = "120D"
            break;
        case "m":
            num = "121D"
            break;
        case "M":
            num = "121D"
            break;
        case "n":
            num = "1295"
            break;
        case "N":
            num = "129D"
            break;
        
        case "p":
            num = "1355"
            break;
        case "P":
            num = "1335"
            break;
        case "q":
            num = "1245"
            break;
        case "Q":
            num = "1245"
            break;    
        case "r":
            num = "122D"
            break;
        case "R":
            num = "122D"
            break;
        case "s":
            num = "1235"
            break;
        case "S":
            num = "1225"
            break;
        case "t":
            num = "1275"
            break;
        case "T":
            num = "1325"
            break;
        case "v":
            num = "126D"
            break;
        case "V":
            num = "126D"
            break;          
        case "w":
            num = "12CD"
            break;
        case "W":
            num = "12CD"
            break;
        case "x":
            num = "123D"
            break;
        case "X":
            num = "123D"
            break; 
        case "y":
            num = "12ED"
            break;
        case "Y":
            num = "12ED"
            break;
        case "z":
            num = "12DD"
            break;
        case "Z":
            num = "12E5"
            break;
        case "~":
            num = "1345"
            break;
        case "#":
            num = "133D"
            break;
        case ":":
            num = "1361"
            break;
        case ",":
            num = "1363"
            break;
        case ";":
            num = "1364"
            break;    
        default:
            num = "";
            break;
    }
    return num;
}

function checkTwo(str) {
    switch (str) {
        //a
        case "ae":
            num = "12A0"
            break;
        case "aE":
            num = "12A0"
            break;
        case "au":
            num = "12A1"
            break;
        case "aU":
            num = "12A1"
            break;
        case "ai":
            num = "12A2"
            break;
        case "aI":
            num = "12A2"
            break;
        case "aa":
            num = "12A3"
            break;
        case "aA":
            num = "12A3"
            break;
        case "ao":
            num = "12A6"
            break;
        case "aO":
            num = "12A6"
            break;
        //A 
        case "Ae":
            num = "12D0"
            break;
        case "AE":
            num = "12D0"
            break;
        case "Au":
            num = "12D1"
            break;
        case "AU":
            num = "12D1"
            break;
        case "Ai":
            num = "12D2"
            break;
        case "AI":
            num = "12D2"
            break;
        case "Aa":
            num = "12D3"
            break;
        //case "AA":
        //    num = "12D3"
        //    break;    
        case "Ao":
            num = "12D6"
            break;
        case "AO":
            num = "12D6"
            break;
        //b 
        case "be":
            num = "1260"
            break;
        case "bu":
            num = "1261"
            break;
        case "bi":
            num = "1262"
            break;
        case "ba":
            num = "1263"
            break;
        case "bo":
            num = "1266"
            break;
        case "bE":
            num = "1260"
            break;
        case "bU":
            num = "1261"
            break;
        case "bI":
            num = "1262"
            break;
        //case "bA":
        //    num = "1263"
        //    break;
        case "bO":
            num = "1266"
            break;
        case "BE":
            num = "1260"
            break;
        case "BU":
            num = "1261"
            break;
        case "BI":
            num = "1262"
            break;
        case "BA":
            num = "1263"
            break;
        case "BO":
            num = "1266"
            break;
        case "Be":
            num = "1260"
            break;
        case "Bu":
            num = "1261"
            break;
        case "Bi":
            num = "1262"
            break;
        case "Ba":
            num = "1263"
            break;
        case "Bo":
            num = "1266"
            break;    
        //c 
        case "ce":
            num = "1278"
            break;
        case "cu":
            num = "1279"
            break;
        case "ci":
            num = "127A"
            break;
        case "ca":
            num = "127B"
            break;
        case "co":
            num = "127E"
            break;
        case "cE":
            num = "1278"
            break;
        case "cU":
            num = "1279"
            break;
        case "cI":
            num = "127A"
            break;
        //case "cA":
        //    num = "127B"
        //    break;
        case "cO":
            num = "127E"
            break;
        //C  
        case "Ce":
            num = "1328"
            break;
        case "Cu":
            num = "1329"
            break;
        case "Ci":
            num = "132A"
            break;
        case "Ca":
            num = "132B"
            break;
        case "Co":
            num = "132E"
            break;
        case "CE":
            num = "1328"
            break;
        case "CU":
            num = "1329"
            break;
        case "CI":
            num = "132A"
            break;
        //case "CA":
        //    num = "132B"
        //    break;
        case "CO":
            num = "132E"
            break;
        //d  
        case "de":
            num = "12F0"
            break;
        case "du":
            num = "12F1"
            break;
        case "di":
            num = "12F2"
            break;
        case "da":
            num = "12F3"
            break;
        case "do":
            num = "12F6"
            break;
        case "dE":
            num = "12F0"
            break;
        case "dU":
            num = "12F1"
            break;
        case "dI":
            num = "12F2"
            break;
        //case "dA":
        //    num = "12F3"
        //    break;
        case "dO":
            num = "12F6"
            break;
        case "DE":
            num = "12F0"
            break;
        case "DU":
            num = "12F1"
            break;
        case "DI":
            num = "12F2"
            break;
        //case "DA":
        //    num = "12F3"
        //    break;
        case "DO":
            num = "12F6"
            break;
        case "De":
            num = "12F0"
            break;
        case "Du":
            num = "12F1"
            break;
        case "Di":
            num = "12F2"
            break;
        case "Da":
            num = "12F3"
            break;
        case "Do":
            num = "12F6"
            break;
        //e
        case "Ea":
            num = "12A7"
            break;
        //f   
        case "fe":
            num = "1348"
            break;
        case "fu":
            num = "1349"
            break;
        case "fi":
            num = "134A"
            break;
        case "fa":
            num = "134B"
            break;
        case "fo":
            num = "134E"
            break;
        case "fE":
            num = "1348"
            break;
        case "fU":
            num = "1349"
            break;
        case "fI":
            num = "134A"
            break;
        //case "fA":
        //    num = "134B"
        //    break;
        case "fO":
            num = "134E"
            break;
        case "FE":
            num = "1348"
            break;
        case "FU":
            num = "1349"
            break;
        case "FI":
            num = "134A"
            break;
        //case "FA":
        //    num = "134B"
        //    break;
        case "FO":
            num = "134E"
            break;
        case "Fe":
            num = "1348"
            break;
        case "Fu":
            num = "1349"
            break;
        case "Fi":
            num = "134A"
            break;
        case "Fa":
            num = "134B"
            break;
        case "Fo":
            num = "134E"
            break;
        //g   
        case "ge":
            num = "1308"
            break;
        case "gu":
            num = "1309"
            break;
        case "gi":
            num = "130A"
            break;
        case "ga":
            num = "130B"
            break;
        case "go":
            num = "130E"
            break;
        case "gE":
            num = "1308"
            break;
        case "gU":
            num = "1309"
            break;
        case "gI":
            num = "130A"
            break;
        //case "gA":
        //    num = "130B"
        //    break;
        case "gO":
            num = "130E"
            break;
        case "GE":
            num = "1308"
            break;
        case "GU":
            num = "1309"
            break;
        case "GI":
            num = "130A"
            break;
        //case "GA":
        //    num = "130B"
        //    break;
        case "GO":
            num = "130E"
            break;
        case "Ge":
            num = "1308"
            break;
        case "Gu":
            num = "1309"
            break;
        case "Gi":
            num = "130A"
            break;
        case "Ga":
            num = "130B"
            break;
        case "Go":
            num = "130E"
            break;
        //h 
        case "he":
            num = "1200"
            break;
        case "hu":
            num = "1201"
            break;
        case "hi":
            num = "1202"
            break;
        case "ha":
            num = "1203"
            break;
        case "ho":
            num = "1206"
            break;
        case "hE":
            num = "1200"
            break;
        case "hU":
            num = "1201"
            break;
        case "hI":
            num = "1202"
            break;
        //case "hA":
        //    num = "1203"
        //    break;
        case "hO":
            num = "1206"
            break;
        //H 
        case "He":
            num = "1210"
            break;
        case "Hu":
            num = "1211"
            break;
        case "Hi":
            num = "1212"
            break;
        case "Ha":
            num = "1213"
            break;
        case "Ho":
            num = "1216"
            break;
        case "HE":
            num = "1210"
            break;
        case "HU":
            num = "1211"
            break;
        case "HI":
            num = "1212"
            break;
        //case "HA":
        //    num = "1213"
        //    break;
        case "HO":
            num = "1216"
            break;
        //j   
        case "je":
            num = "1300"
            break;
        case "ju":
            num = "1301"
            break;
        case "ji":
            num = "1302"
            break;
        case "ja":
            num = "1303"
            break;
        case "jo":
            num = "1306"
            break;
        case "jE":
            num = "1300"
            break;
        case "jU":
            num = "1301"
            break;
        case "jI":
            num = "1302"
            break;
        //case "jA":
        //    num = "1303"
        //    break;
        case "jO":
            num = "1306"
            break;
        case "JE":
            num = "1300"
            break;
        case "JU":
            num = "1301"
            break;
        case "JI":
            num = "1302"
            break;
        //case "JA":
        //    num = "1303"
        //    break;
        case "JO":
            num = "1306"
            break;
        case "Je":
            num = "1300"
            break;
        case "Ju":
            num = "1301"
            break;
        case "Ji":
            num = "1302"
            break;
        case "Ja":
            num = "1303"
            break;
        case "Jo":
            num = "1306"
            break;
        //k    
        case "ke":
            num = "12A8"
            break;
        case "ku":
            num = "12A9"
            break;
        case "ki":
            num = "12AA"
            break;
        case "ka":
            num = "12AB"
            break;
        case "ko":
            num = "12AE"
            break;
        case "kE":
            num = "12A8"
            break;
        case "kU":
            num = "12A9"
            break;
        case "kI":
            num = "12AA"
            break;
        //case "kA":
        //    num = "12AB"
        //    break;
        case "kO":
            num = "12AE"
            break;
        //K     
        case "Ke":
            num = "12B8"
            break;
        case "Ku":
            num = "12B9"
            break;
        case "Ki":
            num = "12BA"
            break;
        case "Ka":
            num = "12BB"
            break;
        case "Ko":
            num = "12BE"
            break;
        case "KE":
            num = "12B8"
            break;
        case "KU":
            num = "12B9"
            break;
        case "KI":
            num = "12BA"
            break;
        //case "KA":
        //    num = "12BB"
        //    break;
        case "KO":
            num = "12BE"
            break;
        //l    
        case "le":
            num = "1208"
            break;
        case "lu":
            num = "1209"
            break;
        case "li":
            num = "120A"
            break;
        case "la":
            num = "120B"
            break;
        case "lo":
            num = "120E"
            break;
        case "lE":
            num = "1208"
            break;
        case "lU":
            num = "1209"
            break;
        case "lI":
            num = "120A"
            break;
        //case "lA":
        //    num = "120B"
        //    break;
        case "lO":
            num = "120E"
            break;
        case "LE":
            num = "1208"
            break;
        case "LU":
            num = "1209"
            break;
        case "LI":
            num = "120A"
            break;
        case "LA":
            num = "120B"
            break;
        case "LO":
            num = "120E"
            break;
        case "Le":
            num = "1208"
            break;
        case "Lu":
            num = "1209"
            break;
        case "Li":
            num = "120A"
            break;
        case "La":
            num = "120B"
            break;
        case "Lo":
            num = "120E"
            break;
        //m    
        case "me":
            num = "1218"
            break;
        case "mu":
            num = "1219"
            break;
        case "mi":
            num = "121A"
            break;
        case "ma":
            num = "121B"
            break;
        case "mo":
            num = "121E"
            break;
        case "mE":
            num = "1218"
            break;
        case "mU":
            num = "1219"
            break;
        case "mI":
            num = "121A"
            break;
        //case "mA":
        //    num = "121B"
        //    break;
        case "mO":
            num = "121E"
            break;
        case "ME":
            num = "1218"
            break;
        case "MU":
            num = "1219"
            break;
        case "MI":
            num = "121A"
            break;
        //case "MA":
        //    num = "121B"
        //    break;
        case "MO":
            num = "121E"
            break;
        case "Me":
            num = "1218"
            break;
        case "Mu":
            num = "1219"
            break;
        case "Mi":
            num = "121A"
            break;
        case "Ma":
            num = "121B"
            break;
        case "Mo":
            num = "121E"
            break;
        //n    
        case "ne":
            num = "1290"
            break;
        case "nu":
            num = "1291"
            break;
        case "ni":
            num = "1292"
            break;
        case "na":
            num = "1293"
            break;
        case "no":
            num = "1296"
            break;
        case "nE":
            num = "1290"
            break;
        case "nU":
            num = "1291"
            break;
        case "nI":
            num = "1292"
            break;
        //case "nA":
        //    num = "1293"
        //    break;
        case "nO":
            num = "1296"
            break;
        //N     
        case "Ne":
            num = "1298"
            break;
        case "Nu":
            num = "1299"
            break;
        case "Ni":
            num = "129A"
            break;
        case "Na":
            num = "129B"
            break;
        case "No":
            num = "129E"
            break;
        case "NE":
            num = "1298"
            break;
        case "NU":
            num = "1299"
            break;
        case "NI":
            num = "129A"
            break;
        //case "NA":
        //    num = "129B"
        //    break;
        case "NO":
            num = "129E"
            break;
        //p    
        case "pe":
            num = "1350"
            break;
        case "pu":
            num = "1351"
            break;
        case "pi":
            num = "1352"
            break;
        case "pa":
            num = "1353"
            break;
        case "po":
            num = "1356"
            break;
        case "pE":
            num = "1350"
            break;
        case "pU":
            num = "1351"
            break;
        case "pI":
            num = "1352"
            break;
        //case "pA":
        //    num = "1353"
        //    break;
        case "pO":
            num = "1356"
            break;
        //P     
        case "Pe":
            num = "1330"
            break;
        case "Pu":
            num = "1331"
            break;
        case "Pi":
            num = "1332"
            break;
        case "Pa":
            num = "1333"
            break;
        case "Po":
            num = "1336"
            break;
        case "PE":
            num = "1330"
            break;
        case "PU":
            num = "1331"
            break;
        case "PI":
            num = "1332"
            break;
        //case "PA":
        //    num = "1333"
        //    break;
        case "PO":
            num = "1336"
            break;
        //q    
        case "qe":
            num = "1240"
            break;
        case "qu":
            num = "1241"
            break;
        case "qi":
            num = "1242"
            break;
        case "qa":
            num = "1243"
            break;
        case "qo":
            num = "1246"
            break;
        case "qE":
            num = "1240"
            break;
        case "qU":
            num = "1241"
            break;
        case "qI":
            num = "1242"
            break;
        //case "qA":
        //    num = "1243"
        //    break;
        case "qO":
            num = "1246"
            break;
        case "QE":
            num = "1240"
            break;
        case "QU":
            num = "1241"
            break;
        case "QI":
            num = "1242"
            break;
        //case "QA":
        //    num = "1243"
        //    break;
        case "QO":
            num = "1246"
            break;
        case "Qe":
            num = "1240"
            break;
        case "Qu":
            num = "1241"
            break;
        case "Qi":
            num = "1242"
            break;
        case "Qa":
            num = "1243"
            break;
        case "Qo":
            num = "1246"
            break;
        //r    
        case "re":
            num = "1228"
            break;
        case "ru":
            num = "1229"
            break;
        case "ri":
            num = "122A"
            break;
        case "ra":
            num = "122B"
            break;
        case "ro":
            num = "122E"
            break;
        case "rE":
            num = "1228"
            break;
        case "rU":
            num = "1229"
            break;
        case "rI":
            num = "122A"
            break;
        //case "rA":
        //    num = "122B"
        //    break;
        case "rO":
            num = "122E"
            break;
        case "RE":
            num = "1228"
            break;
        case "RU":
            num = "1229"
            break;
        case "RI":
            num = "122A"
            break;
        //case "RA":
        //    num = "122B"
        //    break;
        case "RO":
            num = "122E"
            break;
        case "Re":
            num = "1228"
            break;
        case "Ru":
            num = "1229"
            break;
        case "Ri":
            num = "122A"
            break;
        case "Ra":
            num = "122B"
            break;
        case "Ro":
            num = "122E"
            break;
        //s    
        case "se":
            num = "1230"
            break;
        case "su":
            num = "1231"
            break;
        case "si":
            num = "1232"
            break;
        case "sa":
            num = "1233"
            break;
        case "so":
            num = "1236"
            break;
        case "sE":
            num = "1230"
            break;
        case "sU":
            num = "1231"
            break;
        case "sI":
            num = "1232"
            break;
        //case "sA":
        //    num = "1233"
        //    break;
        case "sO":
            num = "1236"
            break;
        //S     
        case "Se":
            num = "1220"
            break;
        case "Su":
            num = "1221"
            break;
        case "Si":
            num = "1222"
            break;
        case "Sa":
            num = "1223"
            break;
        case "So":
            num = "1226"
            break;
        case "SE":
            num = "1220"
            break;
        case "SU":
            num = "1221"
            break;
        case "SI":
            num = "1222"
            break;
        //case "SA":
        //    num = "1223"
        //    break;
        case "SO":
            num = "1226"
            break;
        //t    
        case "te":
            num = "1270"
            break;
        case "tu":
            num = "1271"
            break;
        case "ti":
            num = "1272"
            break;
        case "ta":
            num = "1273"
            break;
        case "to":
            num = "1276"
            break;
        case "tE":
            num = "1270"
            break;
        case "tU":
            num = "1271"
            break;
        case "tI":
            num = "1272"
            break;
        //case "tA":
        //    num = "1273"
        //    break;
        case "tO":
            num = "1276"
            break;
        //T     
        case "Te":
            num = "1320"
            break;
        case "Tu":
            num = "1321"
            break;
        case "Ti":
            num = "1322"
            break;
        case "Ta":
            num = "1323"
            break;
        case "To":
            num = "1326"
            break;
        case "TE":
            num = "1320"
            break;
        case "TU":
            num = "1321"
            break;
        case "TI":
            num = "1322"
            break;
        //case "TA":
        //    num = "1323"
        //    break;
        case "TO":
            num = "1326"
            break;
        //v    
        case "ve":
            num = "1268"
            break;
        case "vu":
            num = "1269"
            break;
        case "vi":
            num = "126A"
            break;
        case "va":
            num = "126B"
            break;
        case "vo":
            num = "126E"
            break;
        case "vE":
            num = "1268"
            break;
        case "vU":
            num = "1269"
            break;
        case "vI":
            num = "126A"
            break;
        //case "vA":
        //    num = "126B"
        //    break;
        case "vO":
            num = "126E"
            break;
        case "VE":
            num = "1268"
            break;
        case "VU":
            num = "1269"
            break;
        case "VI":
            num = "126A"
            break;
        //case "VA":
        //    num = "126B"
        //    break;
        case "VO":
            num = "126E"
            break;
        case "Ve":
            num = "1268"
            break;
        case "Vu":
            num = "1269"
            break;
        case "Vi":
            num = "126A"
            break;
        case "Va":
            num = "126B"
            break;
        case "Vo":
            num = "126E"
            break;
        //w    
        case "we":
            num = "12C8"
            break;
        case "wu":
            num = "12C9"
            break;
        case "wi":
            num = "12CA"
            break;
        case "wa":
            num = "12CB"
            break;
        case "wo":
            num = "12CE"
            break;
        case "wE":
            num = "12C8"
            break;
        case "wU":
            num = "12C9"
            break;
        case "wI":
            num = "12CA"
            break;
        //case "wA":
        //    num = "12CB"
        //    break;
        case "wO":
            num = "12CE"
            break;
        case "WE":
            num = "12C8"
            break;
        case "WU":
            num = "12C9"
            break;
        case "WI":
            num = "12CA"
            break;
        //case "WA":
        //    num = "12CB"
        //    break;
        case "WO":
            num = "12CE"
            break;
        case "We":
            num = "12C8"
            break;
        case "Wu":
            num = "12C9"
            break;
        case "Wi":
            num = "12CA"
            break;
        case "Wa":
            num = "12CB"
            break;
        case "Wo":
            num = "12CE"
            break;
        //x    
        case "xe":
            num = "1238"
            break;
        case "xu":
            num = "1239"
            break;
        case "xi":
            num = "123A"
            break;
        case "xa":
            num = "123B"
            break;
        case "xo":
            num = "123E"
            break;
        case "xE":
            num = "1238"
            break;
        case "xU":
            num = "1239"
            break;
        case "xI":
            num = "123A"
            break;
        //case "xA":
        //    num = "123B"
        //    break;
        case "xO":
            num = "123E"
            break;
        case "XE":
            num = "1238"
            break;
        case "XU":
            num = "1239"
            break;
        case "XI":
            num = "123A"
            break;
        //case "XA":
        //    num = "123B"
        //    break;
        case "XO":
            num = "123E"
            break;
        case "Xe":
            num = "1238"
            break;
        case "Xu":
            num = "1239"
            break;
        case "Xi":
            num = "123A"
            break;
        case "Xa":
            num = "123B"
            break;
        case "Xo":
            num = "123E"
            break;
        //y    
        case "ye":
            num = "12E8"
            break;
        case "yu":
            num = "12E9"
            break;
        case "yi":
            num = "12EA"
            break;
        case "ya":
            num = "12EB"
            break;
        case "yo":
            num = "12EE"
            break;
        case "yE":
            num = "12E8"
            break;
        case "yU":
            num = "12E9"
            break;
        case "yI":
            num = "12EA"
            break;
        //case "yA":
        //    num = "12EB"
        //    break;
        case "yO":
            num = "12EE"
            break;
        case "YE":
            num = "12E8"
            break;
        case "YU":
            num = "12E9"
            break;
        case "YI":
            num = "12EA"
            break;
        //case "YA":
        //    num = "12EB"
        //    break;
        case "YO":
            num = "12EE"
            break;
        case "Ye":
            num = "12E8"
            break;
        case "Yu":
            num = "12E9"
            break;
        case "Yi":
            num = "12EA"
            break;
        case "Ya":
            num = "12EB"
            break;
        case "Yo":
            num = "12EE"
            break;
        //z    
        case "ze":
            num = "12D8"
            break;
        case "zu":
            num = "12D9"
            break;
        case "zi":
            num = "12DA"
            break;
        case "za":
            num = "12DB"
            break;
        case "zo":
            num = "12DE"
            break;
        case "zE":
            num = "12D8"
            break;
        case "zU":
            num = "12D9"
            break;
        case "zI":
            num = "12DA"
            break;
        case "za":
            num = "12DB"
            break;
        case "zO":
            num = "12DE"
            break;
        //Z     
        case "Ze":
            num = "12E0"
            break;
        case "Zu":
            num = "12E1"
            break;
        case "Zi":
            num = "12E2"
            break;
        case "Za":
            num = "12E3"
            break;
        case "Zo":
            num = "12E6"
            break;
        case "ZE":
            num = "12E0"
            break;
        case "ZU":
            num = "12E1"
            break;
        case "ZI":
            num = "12E2"
            break;
        //case "ZA":
        //    num = "12E3"
        //    break;
        case "ZO":
            num = "12E6"
            break;
        //# == ts      
        case "~e":
            num = "1340"
            break;
        case "~u":
            num = "1341"
            break;
        case "~i":
            num = "1342"
            break;
        case "~a":
            num = "1343"
            break;
        case "~o":
            num = "1346"
            break;
        case "~E":
            num = "1340"
            break;
        case "~U":
            num = "1341"
            break;
        case "~I":
            num = "1342"
            break;
        //case "~A":
        //    num = "1343"
        //    break;
        case "~O":
            num = "1346"
            break;
        //# == Ts       
        case "#e":
            num = "1338"
            break;
        case "#u":
            num = "1339"
            break;
        case "#i":
            num = "133A"
            break;
        case "#a":
            num = "133B"
            break;
        case "#o":
            num = "133E"
            break;
        case "#E":
            num = "1338"
            break;
        case "#U":
            num = "1339"
            break;
        case "#I":
            num = "133A"
            break;
        //case "#A":
        //    num = "133B"
        //    break;
        case "#O":
            num = "133E"
            break;

        default:
            num = "";
            break;
    }
    return num;
}

function checkThree(str) {
    switch (str) {
        case "aee":
            num = "12A4"
            break;
        case "aEE":
            num = "12A4"
            break;
        case "aEe":
            num = "12A4"
            break;
        case "aeE":
            num = "12A4"
            break;
        case "Aee":
            num = "12D4"
            break;
        case "AEE":
            num = "12D4"
            break;
        case "AEe":
            num = "12D4"
            break;
        case "AeE":
            num = "12D4"
            break;
        case "hee":
            num = "1204"
            break;
        case "hEE":
            num = "1204"
            break;
        case "hEe":
            num = "1204"
            break;
        case "heE":
            num = "1204"
            break;
        case "Hee":
            num = "1214"
            break;
        case "HEE":
            num = "1214"
            break;
        case "HEe":
            num = "1214"
            break;
        case "HeE":
            num = "1214"
            break;
        case "lee":
            num = "120C"
            break;
        case "lEE":
            num = "120C"
            break;
        case "LEE":
            num = "120C"
            break;
        case "lEe":
            num = "120C"
            break;
        case "leE":
            num = "120C"
            break;
        case "LeE":
            num = "120C"
            break;
        case "LEe":
            num = "120C"
            break;
        case "mee":
            num = "121C"
            break;
        case "mEE":
            num = "121C"
            break;
        case "MEE":
            num = "121C"
            break;
        case "mEe":
            num = "121C"
            break;
        case "meE":
            num = "121C"
            break;
        case "MeE":
            num = "121C"
            break;
        case "MEe":
            num = "121C"
            break;
        case "see":
            num = "1234"
            break;
        case "sEE":
            num = "1234"
            break;
        case "sEe":
            num = "1234"
            break;
        case "seE":
            num = "1234"
            break;
        case "See":
            num = "1224"
            break;
        case "SEE":
            num = "1224"
            break;
        case "SEe":
            num = "1224"
            break;
        case "SeE":
            num = "1224"
            break;
        case "ree":
            num = "122C"
            break;
        case "rEE":
            num = "122C"
            break;
        case "rEe":
            num = "122C"
            break;
        case "reE":
            num = "122C"
            break;
        case "REE":
            num = "122C"
            break;
        case "REe":
            num = "122C"
            break;
        case "ReE":
            num = "122C"
            break;
        case "xee":
            num = "123C"
            break;
        case "xEE":
            num = "123C"
            break;
        case "xEe":
            num = "123C"
            break;
        case "xeE":
            num = "123C"
            break;
        case "XEE":
            num = "123C"
            break;
        case "XEe":
            num = "123C"
            break;
        case "XeE":
            num = "123C"
            break;
        case "qee":
            num = "1244"
            break;
        case "qEE":
            num = "1244"
            break;
        case "qEe":
            num = "1244"
            break;
        case "qeE":
            num = "1244"
            break;
        case "QEE":
            num = "1244"
            break;
        case "QEe":
            num = "1244"
            break;
        case "QeE":
            num = "1244"
            break;
        case "bee":
            num = "1264"
            break;
        case "bEE":
            num = "1264"
            break;
        case "bEe":
            num = "1264"
            break;
        case "beE":
            num = "1264"
            break;
        case "BEE":
            num = "1264"
            break;
        case "BEe":
            num = "1264"
            break;
        case "BeE":
            num = "1264"
            break;
        case "vee":
            num = "126C"
            break;
        case "vEE":
            num = "126C"
            break;
        case "vEe":
            num = "126C"
            break;
        case "veE":
            num = "126C"
            break;
        case "VEE":
            num = "126C"
            break;
        case "VEe":
            num = "126C"
            break;
        case "VeE":
            num = "126C"
            break;
        case "tee":
            num = "1274"
            break;
        case "tEE":
            num = "1274"
            break;
        case "tEe":
            num = "1274"
            break;
        case "teE":
            num = "1274"
            break;        
        case "Tee":
            num = "1324"
            break;
        case "TEE":
            num = "1324"
            break;
        case "TEe":
            num = "1324"
            break;
        case "TeE":
            num = "1324"
            break;
        case "cee":
            num = "127C"
            break;
        case "cEE":
            num = "127C"
            break;
        case "cEe":
            num = "127C"
            break;
        case "ceE":
            num = "127C"
            break;
        case "Cee":
            num = "132C"
            break;
        case "CEE":
            num = "132C"
            break;
        case "CEe":
            num = "132C"
            break;
        case "CeE":
            num = "132C"
            break;
        case "nee":
            num = "1294"
            break;
        case "nEE":
            num = "1294"
            break;
        case "nEe":
            num = "1294"
            break;
        case "neE":
            num = "1294"
            break;
        case "Nee":
            num = "129C"
            break;
        case "NEE":
            num = "129C"
            break;
        case "NEe":
            num = "129C"
            break;
        case "NeE":
            num = "129C"
            break;
        case "kee":
            num = "12AC"
            break;
        case "kEE":
            num = "12AC"
            break;
        case "kEe":
            num = "12AC"
            break;
        case "keE":
            num = "12AC"
            break;
        case "Kee":
            num = "12BC"
            break;
        case "KEE":
            num = "12BC"
            break;
        case "KEe":
            num = "12BC"
            break;
        case "KeE":
            num = "12BC"
            break;
        case "wee":
            num = "12CC"
            break;
        case "wEE":
            num = "12CC"
            break;
        case "wEe":
            num = "12CC"
            break;
        case "weE":
            num = "12CC"
            break;
        case "WEE":
            num = "12CC"
            break;
        case "WEe":
            num = "12CC"
            break;
        case "WeE":
            num = "12CC"
            break;
        case "zee":
            num = "12DC"
            break;
        case "zEE":
            num = "12DC"
            break;
        case "zEe":
            num = "12DC"
            break;
        case "zeE":
            num = "12DC"
            break;
        case "Zee":
            num = "12E4"
            break;
        case "ZEE":
            num = "12E4"
            break;
        case "ZEe":
            num = "12E4"
            break;
        case "ZeE":
            num = "12E4"
            break;
        case "yee":
            num = "12EC"
            break;
        case "yEE":
            num = "12EC"
            break;
        case "yEe":
            num = "12EC"
            break;
        case "yeE":
            num = "12EC"
            break;
        case "YEE":
            num = "12EC"
            break;
        case "YEe":
            num = "12EC"
            break;
        case "YeE":
            num = "12EC"
            break;
        case "dee":
            num = "12F4"
            break;
        case "dEE":
            num = "12F4"
            break;
        case "dEe":
            num = "12F4"
            break;
        case "deE":
            num = "12F4"
            break;
        case "DEE":
            num = "12F4"
            break;
        case "DEe":
            num = "12F4"
            break;
        case "DeE":
            num = "12F4"
            break;
        case "jee":
            num = "1304"
            break;
        case "jEe":
            num = "1304"
            break;
        case "jeE":
            num = "1304"
            break;
        case "JEE":
            num = "1304"
            break;
        case "JEe":
            num = "1304"
            break;
        case "JeE":
            num = "1304"
            break;
        case "gee":
            num = "130C"
            break;
        case "gEE":
            num = "130C"
            break;
        case "gEe":
            num = "130C"
            break;
        case "geE":
            num = "130C"
            break;
        case "GEE":
            num = "130C"
            break;
        case "GEe":
            num = "130C"
            break;
        case "GeE":
            num = "130C"
            break;
        case "fee":
            num = "134C"
            break;
        case "fEE":
            num = "134C"
            break;
        case "fEe":
            num = "134C"
            break;
        case "feE":
            num = "134C"
            break;
        case "FEE":
            num = "134C"
            break;
        case "FEe":
            num = "134C"
            break;
        case "FeE":
            num = "134C"
            break;
        case "pee":
            num = "1354"
            break;
        case "pEE":
            num = "1354"
            break;
        case "pEe":
            num = "1354"
            break;
        case "peE":
            num = "1354"
            break;
        case "Pee":
            num = "1334"
            break;
        case "PEE":
            num = "1334"
            break;
        case "PEe":
            num = "1334"
            break;
        case "PeE":
            num = "1334"
            break;
        case "~ee":
            num = "1344"
            break;
        case "~EE":
            num = "1344"
            break;
        case "~Ee":
            num = "1344"
            break;
        case "~eE":
            num = "1344"
            break;    
        case "#ee":
            num = "133C"
            break;
        case "#EE":
            num = "133C"
            break;
        case "#Ee":
            num = "133C"
            break;
        case "#eE":
            num = "133C"
            break;
        case "Hua":
            num = "1217"
            break;
        case "HUa":
            num = "1217"
            break;
        case "HUA":
            num = "1217"
            break;
        case "lua":
            num = "120F"
            break;
        case "lUA":
            num = "120F"
            break;
        case "lUa":
            num = "120F"
            break;
        case "LUA":
            num = "120F"
            break;
        case "LUa":
            num = "120F"
            break;
        case "LuA":
            num = "120F"
            break;
        case "rua":
            num = "122F"
            break;
        case "Rua":
            num = "122F"
            break;
        case "rUa":
            num = "122F"
            break;
        case "ruA":
            num = "122F"
            break;
        case "RUa":
            num = "122F"
            break;
        case "RUA":
            num = "122F"
            break;
            
        case "xua":
            num = "123F"
            break;
        case "xUa":
            num = "123F"
            break;
        case "xUA":
            num = "123F"
            break;
        case "XUa":
            num = "123F"
            break;
        case "XUA":
            num = "123F"
            break;
        case "Sua":
            num = "1227"
            break;
        case "SUA":
            num = "1227"
            break;
        case "SuA":
            num = "1227"
            break;
        case "sua":
            num = "1237"
            break;
        case "sUA":
            num = "1237"
            break;
        case "suA":
            num = "1237"
            break;
        case "bua":
            num = "1267"
            break;
        case "bUa":
            num = "1267"
            break;
        case "BUA":
            num = "1267"
            break;
        case "buA":
            num = "1267"
            break;
        case "Bua":
            num = "1267"
            break;
        case "vua":
            num = "126F"
            break;
        case "VUA":
            num = "126F"
            break;
        case "cua":
            num = "127F"
            break;
        case "cUA":
            num = "127F"
            break;
        case "hua":
            num = "128B"
            break;
        case "hUA":
            num = "128B"
            break;
        case "hue":
            num = "1283"
            break;
        case "HUE":
            num = "128B"
            break;
        case "nua":
            num = "1297"
            break;
        case "nUA":
            num = "1297"
            break;
        case "Nua":
            num = "129F"
            break;
        case "NUA":
            num = "129F"
            break;
        case "Zua":
            num = "12E7"
            break;
        case "ZUA":
            num = "12E7"
            break;
        case "zua":
            num = "12DF"
            break;
        case "zUA":
            num = "12DF"
            break;
        case "dua":
            num = "12F7"
            break;
        case "dUA":
            num = "12F7"
            break;
        case "DUA":
            num = "12F7"
            break;
        case "jua":
            num = "1307"
            break;
        case "jUA":
            num = "1307"
            break;
        case "JUA":
            num = "1307"
            break;
        case "Cua":
            num = "132F"
            break;
        case "CUA":
            num = "132F"
            break;
        case "fua":
            num = "134F"
            break;
        case "FUA":
            num = "134F"
            break;
        case "fUA":
            num = "134F"
            break;
        case "Pua":
            num = "1337"
            break;
        case "PUA":
            num = "1337"
            break;
        case "pua":
            num = "1357"
            break;
        case "pUA":
            num = "1357"
            break;
        case "#ua":
            num = "133F"
            break;
        case "#UA":
            num = "133F"
            break;
        case "tua":
            num = "1277"
            break;
        case "tUA":
            num = "1277"
            break;
        case "kua":
            num = "12B3"
            break;
        case "kUA":
            num = "12B3"
            break;
        case "qua":
            num = "124B"
            break;
        case "QUA":
            num = "124B"
            break;
        case "gua":
            num = "130F"
            break;
        case "gUA":
            num = "130F"
            break;
        case "GUA":
            num = "130F"
            break;
        case "mua":
            num = "121F"
            break;
        case "MUA":
            num = "121F"
            break;
        case "mUA":
            num = "121F"
            break;
        case "Tua":
            num = "1327"
            break;
        case "TUA":
            num = "1327"
            break;      
        default:
            num = "";
            break;
    }
    return num;
}

