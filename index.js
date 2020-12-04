const arr = [-1,0,2,3,4,5,6,7,10,12,22,30,32,36,40,42,50,100]
let val = 10

function binSearch(arr,val){
  let start = 0
  let end = arr.length - 1
  let mid = Math.floor((start + end)/2)

while (arr[mid] !== val && start <= end){
  
  if (val < arr[mid] ){
     end = mid - 1
    }
    else  {
      start = mid + 1
    }
    mid =  Math.floor((start + end)/2)
  }
  
  if(arr[mid] === val){
        return ` Index of the value searched is: ${mid}`;
    }
    return -1 + " cannot find this value";
  // return mid;
  
}

binSearch(arr,val)