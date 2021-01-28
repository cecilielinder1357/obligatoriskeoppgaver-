// Unit 1 - Dette er hovedfunksjonen hvor alle
// funksjoner hentes fra.
function isDateValid(date) {
    var ValidDate = '03.02.2020';
    return isLengthValid(date)
        && checkForDots(date)
        && checkYear(date)
        && isDayValid(date);

    // Unit 2 - Sjekker at lengden er 10.
    function isLengthValid(date) {
        // Definerer lengden som 10.
        return date.length == 10;
    }

    //Unit 3 - Sjekker at punktum er i 3. og 6. posisjon.
    function checkForDots(date) {
        // Returnerer posisjon 3 og 6 for å finne punktummene.
        return date[2] == '.' && date[5] == '.';
    }

    // Unit 4 - Sjekker at det er et gyldig år.
    function checkYear(date) {
        // Definerer år som posisjon 6 i stringen(datoen).
        var year = date.substr(6);
        return year.length === 4 && year >= '0000' && year <= '9999';
    }
    // Unit 5 - Sjekker at det er et skuddår (datoen).
    function isLeapYear(date) {
        // Definerer år som posisjon 6 i stringen.
        var year = date.substr(6);
        // Sjekker at det er skuddår.
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }

    function isDayValid(date){
        // Dag hentes ut fra første posisjon, og tar med seg 2 tall.
        var day = date.substr(0,2);
        // Måned hetnes ut fra tredje posisjon, og tar med seg 2 tall.
        var month = date.substr(3, 2);
        // Definerer alle mnd med 30 dager.
        var isShortMonth = month == '04'  || month == '06' || month == '09' || month == '11';

        // || = eller    && = og   !=  = ikke lik

        // Lengden skal være 2, og være gyldig mellom 1 og 28.
        return day.length == 2 && day >= '01' && day <= '28' ||
        // Sjekker om det er 29.februar (skuddår), 
        // og februar/skuddår-funksjonen er gyldig.
        day == '29' && (month != '02' || isLeapYear(date))   ||
        // Sjekker om det er 30 dager og at mnd ikke er februar.
        day == '30' && month != '02'  ||
        // Sjekker om det er 31 dager for de resterende mnd, 
        // og ikke 30 og at mnd ikke er feb.
        day == '31' && !isShortMonth && month != '02';

    }
    
} //la stå