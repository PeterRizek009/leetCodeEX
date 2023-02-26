


const LongestSubstring = () => {
    let s = "pwwkew";
    let result = s[0];

    for (let i = 1; i < s.length; i++) {
        if (!result.includes(s[i])) {
            result += s[i];
        }
    }

    if (s.includes(result)) {
        return (result.length);
    } else {
        result = result.slice(1, result.length);
        if (result.length === undefined) {
            return 0
        }else{
            return (result.length);
        }
        
    }

    //   console.log(result);
    //   console.log(result.length);



}


// const CheckifExist =  (s ,result ) => {
//     while(!s.includes(result)) {
//         result.shift(0);
//         break;
//     }

// }

LongestSubstring();