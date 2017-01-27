var express = require('express');
var app = express();
var list = [
  {
    "id":0,
    "wName":"TechPark5",
    "WType":"OpenDesk",
    "capacity":10,
    "availability":"Available",
    "dailyRates":1000,
    "monthlyRates":25000,
    "hourlyRates":100,
    "inst":"Book Now"
  },
  {
    "id":1,
    "wName":"Tech2",
    "WType":"OpenDesk",
    "capacity":10,
    "availability":"Available",
    "dailyRates":1000,
    "monthlyRates":2534000,
    "HourlyRates":1050,
    "inst":"Book Now"
  },
  {
    "id":2,
    "wName":"Tech3",
    "WType":"OpenDesk",
    "capacity":10,
    "availability":"Available",
    "dailyRates":1000,
    "monthlyRates":25000,
    "HourlyRates":100,
    "inst":"Book Now"
  },
  {
    "id":3,
    "wName":"Tech4",
    "WType":"OpenDesk",
    "capacity":10,
    "availability":"Available",
    "dailyRates":10050,
    "monthlyRates":25000,
    "HourlyRates":1060,
    "inst":"Book Now"
  },
  {
    "id":4,
    "wName":"Tech5",
    "WType":"OpenDesk",
    "capacity":10,
    "availability":"Available",
    "dailyRates":1000,
    "monthlyRates":25000,
    "HourlyRates":100,
    "inst":"Book Now"
  },
  {
    "id":5,
    "wName":"Tech6",
    "WType":"OpenDesk",
    "capacity":10,
    "availability":"Available",
    "dailyRates":1000,
    "monthlyRates":25000,
    "HourlyRates":100,
    "inst":"Book Now"
  },
  {
    "id":6,
    "wName":"Tech7",
    "WType":"OpenDesk",
    "capacity":10,
    "availability":"Available",
    "dailyRates":1000,
    "monthlyRates":25000,
    "HourlyRates":100,
    "inst":"Book Now"
  },
  {
    "id":7,
    "wName":"Tech1",
    "WType":"OpenDesk",
    "capacity":10,
    "availability":"Available",
    "dailyRates":1000,
    "monthlyRates":25000,
    "HourlyRates":100,
    "inst":"Book Now"
  },
  {
    "id":8,
    "wName":"Tech8",
    "WType":"OpenDesk",
    "capacity":10,
    "availability":"Available",
    "dailyRates":10050,
    "monthlyRates":2000,
    "HourlyRates":1040,
    "inst":"Book Now"
  }
]

app.get('/getWorkspaces',function(req,res){
  console.log("got hit");
  res.send(list);
})

app.listen(3000,function(){
  console.log("Server is running at 3000");
});
app.use(express.static(__dirname+'/common-ui'));
