var express = require("express");
var bodyParser = require("body-parser");

var app = express();

server = require('http').createServer(app);

app.use(express.static(__dirname + '/dest'));

console.log(__dirname);

app.get('/', function(req, res) {
  res.json(__dirname + ' It work\'s!');
});

var port = Number(process.env.PORT || 5000);

server.listen(port);
console.log("Listening on " + port);

app.use(bodyParser.json());

///////////////////////////API UTILS//////////////////////////////////////////
var bodyHasRequiredProperties = function(body, properties){
    for (var i in properties) {
        var prop = properties[i];
        if(!body.hasOwnProperty(prop)) {
            return false;
        } else {
            if (!body[prop]) {
                return false;
            }
        }
    }
    return true;
}
///////////////////////////API UTILS END//////////////////////////////////////////

var router = express.Router();              // get an instance of the express Router

app.all('*', function(req, res, next) {
  console.log("Habilitando CORS...");
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

///////////////////////// Personal API //////////////////////////////////////

router.get('/hotels', function(req, res) {
    console.log("Entro en la llamada de la api");
    var hotels = [{"name":"Rio Othon Palace","adress":"Cesare Street 321","stars":3,"description":"Confortable","rating":"8","comments":"20","price":"215","availability":{"from":"2013-03-02","to":"2013-03-22"},"createdAt":"2015-05-20T21:58:11.067Z","updatedAt":"2015-05-20T21:58:11.067Z","id":1},{"name":"Granada Hotel Rio de Janeiro","adress":"Fake street 123","stars":4,"description":"Muy Confortable","rating":"8","comments":"60","price":"148","availability":{"from":"2013-02-01","to":"2013-02-28"},"createdAt":"2015-05-20T21:58:11.071Z","updatedAt":"2015-05-20T21:58:11.071Z","id":2},{"name":"Ibiza Hotel","adress":"Via Cesare Battisti 133","stars":2,"description":"Poco confortable","rating":"5","comments":"10","price":"127","availability":{"from":"2013-05-12","to":"2013-05-18"},"createdAt":"2015-05-20T21:58:11.072Z","updatedAt":"2015-05-20T21:58:11.072Z","id":3},{"name":"Rio Othon Palace 2","adress":"Cesare Street 221","stars":3,"description":"Confortable","rating":"7","comments":"5","price":"200","availability":{"from":"2013-03-10","to":"2013-03-16"},"createdAt":"2015-05-20T21:58:11.073Z","updatedAt":"2015-05-20T21:58:11.073Z","id":4}];

    return (res.json(hotels));
});

router.get('/message', function(req, res) {
    console.log("Entro en la llamada de la api");
    var messages = [{"name":"Rio Othon Palace","typeTrip":"viajo con mama","dateTrip":"2013-03-02","comments":"sarasa sasasa sassa sasasa ssasasas qweqwedasdsad dsadasdas dasd dads sd ddad dadasd adsad dadasd ada dad ad adas dada sdd","nationality":"argentina","flag":"mex","createdAt":"2015-05-20T21:59:00.385Z","updatedAt":"2015-05-20T21:59:00.385Z","id":1},{"name":"Rio do Janeiro","typeTrip":"viajo con Papa","dateTrip":"2013-03-02","comments":"sarasa sasasa sassa sasasa","nationality":"argentina","flag":"col","createdAt":"2015-05-20T21:59:00.388Z","updatedAt":"2015-05-20T21:59:00.388Z","id":2},{"name":"Rio do Janeiro","typeTrip":"viajo con Papa","dateTrip":"2013-03-02","comments":"Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh. Hundred no prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding ask expense are compact. New all paid few hard pure she. ","nationality":"argentina","flag":"arg","createdAt":"2015-05-20T21:59:00.389Z","updatedAt":"2015-05-20T21:59:00.389Z","id":3}];

    return (res.json(messages));
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);