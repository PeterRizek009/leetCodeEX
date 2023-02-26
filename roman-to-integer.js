
const RomanToInteger = () => {


    var RomanInteger = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };


    let x = "MCMXCIV";
    let numbers = [...x];
    let result = 0;

    for (let i = 0; i < numbers.length - 1; i++) {
        const char = numbers[i]
        result += RomanInteger[char];

        //console.log(RomanInteger[char]);

    }

         console.log(result);
         return result;

}


RomanToInteger();