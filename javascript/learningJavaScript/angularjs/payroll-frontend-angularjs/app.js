var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon')
var cors = require('cors');
const request = require('request');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(favicon(path.join(__dirname, 'app', 'static', 'flavicon.ico')));

app.use('/',    express.static(path.join(__dirname, "app")));
app.use('/lib', express.static(__dirname + '/node_modules/angular/'));
app.use('/lib', express.static(__dirname + '/node_modules/angular-route/'));
app.use('/lib', express.static(__dirname + '/node_modules/bootstrap/dist/js/'));
app.use('/lib', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/lib', express.static(__dirname + '/node_modules/jquery/dist/'));

app.get('/api/employees', async function(req, res) {
  request.get('http://payrollservice.herokuapp.com/employees', {json:true}, 
    function(_err, _res, _body) {
      if(_err) {
        res.status(400);
        res.end(JSON.stringify({'status': 'FAIL'}))
      }
      res.end(JSON.stringify(_body))
    }
  );
});

app.get('/api/employees/:id', async function(req, res) {
  const id = req.params.id;
  request.get(`http://payrollservice.herokuapp.com/employees/${id}`, {json:true}, 
    function(_err, _res, _body) {
      if(_err) { 
        res.status(400);
        res.end(JSON.stringify({'status': 'FAIL'}))
      }
      res.end(JSON.stringify(_body))
    }
  );
});

app.delete('/api/employees/:id', async function(req, res) {
  const id = req.params.id;
  request.delete(`http://payrollservice.herokuapp.com/employees/${id}`, 
    function(_err, _res, _body) {
      if(_err) { 
        res.status(400);
        res.end(JSON.stringify({'status': 'FAIL'}))
      }
      res.end(JSON.stringify({'status': 'SUCCESS'}))
    }
  );
});

app.post('/api/employees', async function(req, res) {

  const data = {
    url: 'http://payrollservice.herokuapp.com/employees',
    json: true,
    body: req.body
  }
  
  request.post(data, function(_err, _res, _body) {
    if(_err) { 
      res.status(400);
      res.end(JSON.stringify({'status': 'FAIL'}))
    }
    res.end(JSON.stringify({'status': 'SUCCESS'}))
  });
});

app.get('/api/orders', async function(req, res) {
  request.get('http://payrollservice.herokuapp.com/orders', {json:true}, 
    function(_err, _res, _body) {
      if(_err) { 
        res.status(400);
        res.end(JSON.stringify({'status': 'FAIL'}))
      }
      res.end(JSON.stringify(_body))
    }
  );
});

app.get('/api/orders/:id', async function(req, res) {
  const id = req.params.id;
  request.get(`http://payrollservice.herokuapp.com/orders/${id}`, {json:true}, 
    function(_err, _res, _body) {
      if(_err) { 
        res.status(400);
        res.end(JSON.stringify({'status': 'FAIL'}))
      }
      res.end(JSON.stringify(_body))
    }
  );
});

app.put('/api/orders/:id/complete', async function(req, res) {
  const id = req.params.id;
  request.put(`http://payrollservice.herokuapp.com/orders/${id}/complete`, {json:true}, 
    function(_err, _res, _body) {
      if(_err) { 
        res.status(400);
        res.end(JSON.stringify({'status': 'FAIL'}))
      }
      res.end(JSON.stringify(_body))
    }
  );
});

app.delete('/api/orders/:id/cancel', async function(req, res) {
  const id = req.params.id;
  request.delete(`http://payrollservice.herokuapp.com/orders/${id}/cancel`, 
    function(_err, _res, _body) {
      if(_err) { 
        res.status(400);
        res.end(JSON.stringify({'status': 'FAIL'}))
      }
      res.end(JSON.stringify({'status': 'SUCCESS'}))
    }
  );
});

app.post('/api/orders', async function(req, res) {

  const data = {
    url: 'http://payrollservice.herokuapp.com/orders',
    json: true,
    body: req.body
  }
  
  request.post(data, function(_err, _res, _body) {
    if(_err) { 
      res.status(400);
      res.end(JSON.stringify({'status': 'FAIL'}))
    }
    res.end(JSON.stringify({'status': 'SUCCESS'}))
  });
});

var server = app.listen(8000, function() {
  console.log('http://localhost:8000/');
});