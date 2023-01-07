

const AddTwoNumber = () => {
        let l1 = [9,9,9,9,9,9,9]
        let l2 = [9,9,9,9]
        let result = [];
        let temp;
        let reminder =0;

       
        
        for(let i = 0; i < Math.max(l1.length,l2.length); i++) {
           
            if (l1[i]  === undefined || l2[i] === undefined) {
                l2[i] = 0;
                
            }
        
            if((l1[i] + l2[i] + reminder) < 10){
                result.push(l1[i] + l2[i] + reminder)
            }else{
               temp = (l1[i] + l2[i] + reminder) - 10;
               result.push(temp);
               reminder = 1;
            }
            
        }

 console.log(result);
  return result;
}

AddTwoNumber();