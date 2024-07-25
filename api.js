// const fetchData=async()=>{
//     try{
//         // let lati=navigator.geolocation.c
//        let ran=Math.floor(Math.random()*80)+1
//       await  fetch(`https://jsonplaceholder.typicode.com/posts/${ran}`)
//         .then((res)=>res.json())
//         .then((data)=>console.log(data.title))
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// fetchData()



// function fibonanci(n){
//     let s1=0,s2=1,s=0;
//     console.log(s1 +"   " +s2);
//     while(s<n){
//     s1=s2;
//     s2=s;
//     s=s1+s2;
//     console.log(s +" ");
//     }
    
// }

// fibonanci(50)

// const dataFetch=async(url)=>{
//     try{
//         console.log("data processing");
//     await fetch(url)
//     .then((res)=>res.json())
//     .then((data)=>console.log(data.title));
//     console.log("data processing completed");
//     }
//     catch(err){
//         console.log(err +"  error during fetching data");
//     }
// }


// dataFetch('https://jsonplaceholder.typicode.com/posts/2')