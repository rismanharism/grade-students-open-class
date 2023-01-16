// do not change this code
var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split(",");

var nama = input[0];
var nilai = Number(input[1]);

// code here
if(nilai >= 80 && nilai <= 100){
    console.log("nama :" + nama + "; score : A");
}
else if(nilai >= 65 && nilai <= 79){
    console.log("nama :" + nama +"; score : B");
}
else if(nilai >= 50 && nilai <= 64){
    console.log("nama :" + nama + "; score : C");
}
else if(nilai >= 35 && nilai <= 49){
    console.log("nama :" + nama + "; score : D");
}
else if(nilai >= 0 && nilai <= 34){
    console.log("nama :" + nama + "; score : E");
}
else{
    console.log("Nilai Invalid");
}