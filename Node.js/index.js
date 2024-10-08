var http = require("http");

var {otp}=require("./otp");

var url=require("url");

// console.log(otp);

var server = http.createServer((req, res)=>{
    console.log(req.url);

var pared = url.parse(req.url);

console.log(pared.query.split("&"));

var aa = pared.query.split("&")

var obj={

}

   for(i=0;i<aa.length;i++){

    console.log(aa[i].split("="));

    obj[aa[i].split("=")[0]] = aa[i].split("=")[1]
    
   }
   console.log(obj);
   

   if(req.method=="GET"){

    var obj={
        "otp":otp(3)
    }

    res.statuscode=200;
    res.write(JSON.stringify(obj));
    res.end();
}else{

    var obj={
        "otp":otp(4)
    }

    res.statuscode=200;
    res.write(JSON.stringify(obj));
    res.end();
}
    
})

server.listen(3000,()=>{
    console.log("connetced")
})