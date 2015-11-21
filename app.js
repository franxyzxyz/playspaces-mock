var express = require('express');
var app = express();
var ejs            = require('ejs');
var expressLayouts = require('express-ejs-layouts');
var path           = require('path');

app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var seedLocation = [
  {name: "hong kong park",
  address: "19 cotton tree drive",
  district: "central",
  region: "hk",
  bike_path: "N/A",
  merry_go_round: "N/A",
  play_structure: true,
  seesaw: "N/A",
  slide: true,
  swing: "N/A",
  carpark: true,
  snack_shop: true,
  wc: true,
  category: "park",
  rating: 4.5,
  img:"../img/hongkongpark.jpg"
  },
  {name: "mount austin playground",
  address: "mount austin road",
  district: "the peak",
  region: "hk",
  bike_path: "N/A",
  merry_go_round: "N/A",
  play_structure: true,
  seesaw: "N/A",
  slide: true,
  swing: true,
  carpark: "N/A",
  snack_shop: "N/A",
  wc: true,
  category: "playground",
  rating: 3.0
  },
  {name: "sai on lane playground",
  address: "sai on lane",
  district: "sai wan",
  region: "hk",
  bike_path: "N/A",
  merry_go_round: "N/A",
  play_structure: true,
  seesaw: "N/A",
  slide: true,
  swing: "N/A",
  carpark: "N/A",
  snack_shop: "N/A",
  wc: "N/A",
  category: "playground",
  rating: 4.0
  },
  {name: "victoria park",
  address: "1 hing fat street",
  district: "causeway bay",
  region: "hk",
  bike_path: "N/A",
  merry_go_round: "N/A",
  play_structure: true,
  seesaw: "N/A",
  slide: true,
  swing: true,
  carpark: true,
  snack_shop: true,
  wc: true,
  category: "park",
  rating: 3.5
  },
  {name: "quarry bay park",
  address: "taikoo shing",
  district: "quarry bay",
  region: "hk",
  bike_path: "N/A",
  merry_go_round: "N/A",
  play_structure: true,
  seesaw: true,
  slide: true,
  swing: true,
  carpark: "N/A",
  snack_shop: "N/A",
  wc: true,
  category: "playground",
  rating: 4.3
  }
]
app.get('/',function(req,res){
  res.render('index',{seedLocation})
})
app.get('/keyword',function(req,res){
  res.render('keyword',{seedLocation})
})
app.get('/location/makerbay',function(req,res){
  res.render('location')
})

app.get('/user/pip',function(req,res){
  res.render('user')
})

app.get('/search',function(req,res){
  res.render('search')
})

app.listen(3000);
console.log("Connected to server")