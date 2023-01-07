


const LongestSubstring = () => {
    let s = "pwwkew";

    let result = s[0];
    let count = 0;

    for (let i = 1; i < s.length; i++) {
        if (!result.includes(s[i])) {
            result+=s[i]; 
            
        }
            count++;
        
        
    }

  console.log(result.length);
  return (count);


}

LongestSubstring();