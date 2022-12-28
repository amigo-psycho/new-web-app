const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://0.0.0.0:27017/Movies').then(res => { console.log('mongoDB connection established'); });
const app = express(); //create the express web app object
app.use(cors({
    // origin:"http://localhost:4200",
    origin: "*", //access to every client
    methods: "*", //GET DELETE UPDATE
}));

app.use(bodyParser.json())  //application-json



            ///////////////
            /////movie/////
            ///////////////


let Address = mongoose.model('movie', new mongoose.Schema({
    id: { type: Number },
    title: { type: String },
    poster_path: { type: String },
    trail_path: { type: String },
    overview: { type: String },
    gener: { type: String },
    vote_average: { type: String },

}, {
    collection: 'movie'
}));


//configure for requests and response for different API methods: GET, POST, DELETE
app.get("/api/movie", function (req, res) {
    //get all the movies from the database using the model
    Address.find((err, address) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(address);
        }
    });
    // res.send("<h1>You have sent GET all request. Thanks</h1>");
});


//get by id
app.get("/api/movie/:id", function (req, res) {
    let id = Number(req.params.id);
    Address.findOne({ "id": id }, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
})


//delete
app.delete("/api/movie/:id", function (req, res) {
    let id = req.params.id;
    Address.remove({ "id": id }, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    })
});


app.post("/api/movie", function (req, res) {
    //specify the fields from the body
    Address.findOne().sort({ id: -1 }).then((data) => {
        let movie = new Address();
        movie.id = data.id + 1;
        movie.title = req.body.title;
        movie.poster_path = req.body.poster_path;
        movie.trail_path = req.body.trail_path;
        movie.overview =req.body.overview;
        movie.gener = req.body.gener;
        movie.vote_average = req.body.vote_average;
       
        //save
        movie.save(function (err) {
            if (err) {
                res.send(err);
            }
            Address.find(function (err, data) {
                if (err) {
                    res.send(err);
                }
                res.json(data);
            });
        });
    });
});

            //////////////
            /////user/////
            //////////////


let User = mongoose.model('user', new mongoose.Schema({
    id: { type: Number },
    username: { type: String },
    password: { type: String },
    cpassword: {type: String},
    email: {type: String}
}, {
    collection: 'user'
}));


//configure for requests and response for different API methods: GET, POST, DELETE
app.get("/api/user", function (req, res) {
    //get all the movies from the database using the model
    User.find((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(user);
        }
    });
    // res.send("<h1>You have sent GET all request. Thanks</h1>");
});

//get by id
app.get("/api/user/:id", function (req, res) {
    let id = Number(req.params.id);
    User.findOne({ "id": id }, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
});


//delete
app.delete("/api/user/:id", function (req, res) {
    let id = req.params.id;
    User.remove({ "id": id }, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    })
});

//post
app.post("/api/user", function (req, res) {
    //specify the fields from the body
    User.findOne().sort({ id: -1 }).then((data) => {
        let user = new User();
        user.id = data.id + 1;
        user.username = req.body.username;
        user.password = req.body.password;
        user.cpassword = req.body.cpassword;
        user.email = req.body.email;
       
        //save
        user.save(function (err) {
            if (err) {
                res.send(err);
            }
            User.find(function (err, data) {
                if (err) {
                    res.send(err);
                }
                res.json(data);
            });
        });
    });
});


            ///////////////
            /////login/////
            ///////////////

app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });
  
  app.listen(8066, () => console.log('API is running on http://localhost:8066/login'));


const port = 4200;
app.listen(port, () => console.log("Movie server app started on port " + port));