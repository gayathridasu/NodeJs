function query(aa1){

    var aa = aa1.split("&");

    var obj={

}

   for(i=0;i<aa.length;i++){

    console.log(aa[i].split("="));

    obj[aa[i].split("=")[0]] = aa[i].split("=")[1]
    
   }
   return obj
}

module.exports={
   query
}