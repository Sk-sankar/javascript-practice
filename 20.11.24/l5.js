function selection(arr){
    let n= arr.length;
    
      for(i=0;i<n;i++){
        let mid=i
        for(j=i+1;j<n;j++){
            if(arr[j].salary<arr[mid].salary){
                mid=j
            }
        }

        if(mid !==1){
            [arr[i],arr[mid]]=[arr[mid],arr[i]]
        }
      }
      return arr;
}
console.log(selection([
      { name: "Ravi", age: 20, salary: 1000},
      { name: "Anjali", age: 17, salary: 9520 },
       { name: "Priya", age: 19, salary: 6000 },
       { name: "Kumar", age: 21, salary: 2000}]))



       function bubble(array){
        let n=array.length;
        for(i=0;i<n;i++){
            for(j=i+1;j<n;j++){
                if(array[i]>array[j]){
                    [array[i],array[j]]=[array[j],array[i]]
                }
            }
        }
        return array;
       }
       console.log(bubble([4,3,7,2,9]))