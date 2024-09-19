/*
 ****
 ****
 ****
 ****
 */

function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let rows = ''
    for (let j = 0; j < n; j++) {
      rows += '*'
    }
    console.log(rows)
  }
 
}
console.log(pattern1(4));


/*
*
**
***
****
***** 
*/

function pattern2 (n){
    for(let i = 0; i<n; i++){
      let rows = '';
      for(let j = 0; j<=i; j++){
        rows += "*"
      }
      console.log(rows)
    }
  }



  /* 
  1
  12
  123
  1234
  12345
  */

function pattern3(n){
    for(let i = 1; i<=n; i++){
        let rows = '';
        for(let j = 1; j<=i; j++ ){
            rows += j
        }
        console.log(rows)
    }
}

/* 
1
22
333
4444
55555
*/

function pattern4(n){
    for(let i = 1; i<=n; i++){
        let rows = '';
        for(let j = 1; j<=i; j++ ){
            rows += i
        }
        console.log(rows)
    }
}


/*
*****
****
***
**
*
*/

function pattern5(n){
    for(let i = 1; i<=n; i++){
        let rows = '';
        for(let j = 0; j<n-i+1; j++){
            rows += "*"
        }
        console.log(rows)
    }
}


/* 
    *    
   ***
  *****
 *******
*********

 */

function pattern6(n){
    for(let i = 0; i<5; i++){
        let rows = ''
        //space
        for(let j = 0; j<n-i-1; j++){
        rows += " "
        }

        // star
        for(let j  = 0; j<2*i+1; j++){
            rows += "*"
        }

        
       
        console.log(rows)
    }
}




  console.log(pattern6(5));
