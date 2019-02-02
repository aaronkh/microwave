var express = require('express')
var bodyParser = require('body-parser')
var app = express()

bodyParser.urlencoded({extended: true})
app.use(bodyParser.json())

var time = undefined
var lock = false
var unlock = false
var person = undefined

// microwave only
app.get('/', function(req, res){
	ttime = time
	tlock = lock
	tunlock = unlock
	time = undefined
	lock = false
	unlock = false
	res.json({
		time: ttime,
		lock: tlock,
		unlock: unlock
	})
})

// post to set microwave to turn on
app.post('/time', function(req, res){
	time = req.body.time
	res.json({ time: time })
})

// lock the microwave
app.post('/lock', function(req, res){
	lock = true
	res.json({ lock: lock })
})

// unlock the microwave
app.post('/unlock', function(req, res){
	unlock = true
	res.json({ unlock: unlock })
})

// post azure data here
app.post('/person', function(req, res){
	person = req.body.person
	res.json({ person: person })
})

// check with face
app.get('/person', function(req, res){
	res.json({ person: person })
})

// when checked and correct, clear person and unlock
app.get('/clear-person', function(req, res){
	person = undefined
	res.json({ person: person })
})

app.listen(3000, "0.0.0.0", function(){
	console.log("app is running on port 3000")
})