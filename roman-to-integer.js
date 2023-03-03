
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


    let x = "III";
    let numbers = [...x];
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (RomanInteger[numbers[i]] <  RomanInteger[numbers[i+1]]) {
            result +=(RomanInteger[numbers[i+1]]  - RomanInteger[char]);
             i += 1;
        }else{
            result += RomanInteger[numbers[i]];
           
        }
        

    }
       
         console.log(result);
         return result;

}


RomanToInteger();