function fatorial(n){
    if(n==0||n==1){
        return 1
    }
    else{
        return n*fatorial(n-1);
    }

}
console.log(fatorial(5));

function prime(n){
    if(n<1)return false;
    for(i=2;i<=Math.sqrt(n);i++){
        if(n%i==0)return false;

    }
    return true;
}

function check(arr){
    let empty=[];
    for(num of arr){
        if(prime(num)){
            empty.push(num)
        }
    }
    return empty;
}
console.log(check([7,4,3,2,5,8]));

function gcd(a,b){
    while(b!==0){
        let temp=b;
        b=a%b;
        a=temp;
    }
    return a;

}
function lcm(a,b){
    return Math.abs(a*b)/gcd(a,b);
}
console.log(lcm(6,3));

function star(n,i=1,start=""){                              
    if(n<i){
        return;
    }
    console.log(start+"*".repeat(i));
    star(n,i+1,start);
}
star(5);

function binary(arr,target){
    let left=0;
    let right=arr.length-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]==target){
            return mid;
        }
        else if(arr[mid]<target){
            left=mid+1;
        }
        else if(arr[mid]>target){
            right=mid-1
        }

    }
    return -1;

}
console.log(binary([1,2,3,4,5,6,7,8,9],9)); 


function bubbleSort(arr){
    for (i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]];
            }
        }
    }
    return arr;
}
console.log(bubbleSort([4,3,6,2,7]));

function selectionSort(arr){    
    for(i=0;i<arr.length;i++){
        let mid=i;
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[mid]){
                mid=j;
            }
        }
        if(mid!==i){
            [arr[i],arr[mid]]=[arr[mid],arr[i]];
        }
    }
    return arr;
}
console.log(selectionSort([4,3,6,2,7]));

function insertionSort(arr){
    for(i=1;i<arr.length;i++){
        let key=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=key;
    }
    return arr;
}