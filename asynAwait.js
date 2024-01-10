const axios = require("axios");


const connectToURL = async (url)=>{

  try {
    const res = await axios.get(url);
    let myList = await res.data.entries
    for(let item of myList){
      console.log(item.Description)
    }
  } catch (error) {
    console.log(error)
  }


    // req.then(resp => {
    //     let listOfEntries = resp.data.entries;
    //     listOfEntries.forEach((entry)=>{
    //       console.log(entry.Category);
    //     });
    //   })
    // .catch(err => {
    //     console.log(err.toString())
    // });


  }



  console.log("Before connect URL")
  connectToURL('https://api.publicapis.org/entries');
  console.log("After connect URL")