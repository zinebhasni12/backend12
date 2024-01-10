let myPromise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
             resolve("call inside the setInterval revolve after 6 seconds !! ")

    },6000)

 })

 let myPromise2 = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("call inside the setInterval revolve after 3 seconds !! ")

        },3000)

 })


 console.log("hello from promise!!!")

        myPromise.then((successMessage) =>{

                  console.log("the first Call from callback  >>>>>>>>>>>>    " + successMessage)
        })

        myPromise2.then((onSuccess)=>{
            console.log("the first Call from callback  >>>>>>>>>>>>    " + onSuccess)
        })

console.log("after call")
