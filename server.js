'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const bookCollection = require('./Modules');
// const userCollection = require('./Modules');
// const getBooksHandler = require('./Modules');

// const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.use(cors());
const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Hello');
})




app.get('/book', getBooksHandler);
app.post('/addBook', addBookHandler);
app.delete('/deleteBook/:index', deleteBookHandler);
app.put('/updateBook/:index',updateBookHandler);



const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true, useUnifiedTopology: true });


const bookSchema = new mongoose.Schema({
    name: String,
    description: String,
    status: String,
    iamge: String,
});


const userSchema = new mongoose.Schema({
    email: String,
    books: [bookSchema]
});




const bookModel = mongoose.model('bookModel', bookSchema)
const user = mongoose.model('user', userSchema);

function bookCollection() {
    const book1 = new bookModel({
        name: 'Resisting Happiness',
        description: 'A True Story about Why We Sabotage Ourselves',
        status: 'finished reading',
        iamge: 'https://cdn.asaha.com/assets/thumbs/bf9/bf93b21ca6f860b22862fb495157ee5e.jpg',
    })
    const book2 = new bookModel({
        name: 'Start Where You Are',
        description: 'A Guide to Compassionate Living',
        status: 'finished reading',
        iamge: 'https://cdn.asaha.com/assets/thumbs/f0f/f0f41178adda35d162a59e04ae087c74.jpg',
    })
    const book3 = new bookModel({
        name: 'Remember who you are ',
        description: 'Forget safety. Live where you fear to live. Destroy your reputation. Be notorious.',
        status: 'finished reading',
        iamge: 'https://m.media-amazon.com/images/I/61BeQNDPUgL._SY346_.jpg',
    })
    book1.save();
    book2.save();
    book3.save();
}

bookCollection();

function userCollection() {
    const user1 = new user({
        email: 'balomari995@gmail.com',
        books: [
            {
                name: 'Resisting Happiness',
                description: 'A True Story about Why We Sabotage Ourselves',
                status: 'finished reading',
                iamge: 'https://cdn.asaha.com/assets/thumbs/bf9/bf93b21ca6f860b22862fb495157ee5e.jpg',
            },
            {
                name: 'Start Where You Are',
                description: 'A Guide to Compassionate Living',
                status: 'finished reading',
                iamge: 'https://cdn.asaha.com/assets/thumbs/f0f/f0f41178adda35d162a59e04ae087c74.jpg',
            },
            {
                name: 'Remember who you are ',
                description: 'Forget safety. Live where you fear to live. Destroy your reputation. Be notorious.',
                status: 'finished reading',
                iamge: 'https://m.media-amazon.com/images/I/61BeQNDPUgL._SY346_.jpg',
            }
        ]
    })

    const user2 = new user({
        email: 'brah.alomary@yahoo.com',
        books: [
            {
                name: 'Resisting Happiness',
                description: 'A True Story about Why We Sabotage Ourselves',
                status: 'finished reading',
                iamge: 'https://cdn.asaha.com/assets/thumbs/bf9/bf93b21ca6f860b22862fb495157ee5e.jpg',
            },
            {
                name: 'Start Where You Are',
                description: 'A Guide to Compassionate Living',
                status: 'finished reading',
                iamge: 'https://cdn.asaha.com/assets/thumbs/f0f/f0f41178adda35d162a59e04ae087c74.jpg',
            },

        ]
    })

    user1.save();
    user2.save();
}

userCollection();



function getBooksHandler(req, res) {
    let userName = req.query.name;
    // let {name} = req.query
    user.find({ ownerName: userName }, function (err, ownerData) {
        if (err) {
            console.log('did not work')
        } else {
            // console.log(ownerData)
            // console.log(ownerData[0])
            // console.log(ownerData[0].books)
            res.send(ownerData[0].books)
        }
    })
}

function addBookHandler(req, res) {
    // console.log(req.body);
    let userName = req.body.email;
    // console.log(userName);
    const { name, description, img, status } = req.body;
    user.find({ email: userName }, (error, userData) => {
        if (error) { res.send('not working') }
        else {
            // console.log('before pushing', userName)

            userData[0].books.push({
                name: name,
                description: description,
                img: img,
                status: status
            })
            // console.log('after pushing', userData[0].books)
            userData[0].save();

            res.send(userData[0].books);

        }
    })
}

function deleteBookHandler(req, res) {
    const email = req.query.email;
    const index = Number(req.params.index);
    console.log(email);
    console.log(index);

    user.find({ email: email }, (error, ownerData) => {
        // filter the cats for the owner and remove the one that matches the index
        const newBookArr = ownerData[0].books.filter((item, idx) => {
            if (idx !== index) return item;
            // return idx !==index
        })
        ownerData[0].books = newBookArr;
        ownerData[0].save();
        res.send(ownerData[0].books)
    })
}

function updateBookHandler(req,res){
    console.log(req.body);
    console.log(req.params.index);
    const { name, description, img, status ,email } =req.body;
    const index = Number(req.params.index);
    user.findOne({ email: email },(error,ownerData)=>{
        console.log(ownerData);
        ownerData.books.splice(index,1,{
            name: name,
                description: description,
                img: img,
                status: status
        })
        ownerData.save();
        console.log(ownerData)
        res.send(ownerData.books)
    })
}

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})