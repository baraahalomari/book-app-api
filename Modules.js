
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/book', { useNewUrlParser: true, useUnifiedTopology: true });


// const bookSchema = new mongoose.Schema({
//     name: String,
//     description: String,
//     status: String,
//     iamge: String,
// });


// const userSchema = new mongoose.Schema({
//     email: String,
//     books: [bookSchema]
// });


// const bookModel = mongoose.model('bookModel', bookSchema)
// const user = mongoose.model('user', userSchema);

// function bookCollection() {
//     const book1 = new bookModel({
//         name: 'Resisting Happiness',
//         description: 'A True Story about Why We Sabotage Ourselves',
//         status: 'finished reading',
//         iamge: 'https://cdn.asaha.com/assets/thumbs/bf9/bf93b21ca6f860b22862fb495157ee5e.jpg',
//     })
//     const book2 = new bookModel({
//         name: 'Start Where You Are',
//         description: 'A Guide to Compassionate Living',
//         status: 'finished reading',
//         iamge: 'https://cdn.asaha.com/assets/thumbs/f0f/f0f41178adda35d162a59e04ae087c74.jpg',
//     })
//     const book3 = new bookModel({
//         name: 'Remember who you are ',
//         description: 'Forget safety. Live where you fear to live. Destroy your reputation. Be notorious.',
//         status: 'finished reading',
//         iamge: 'https://m.media-amazon.com/images/I/61BeQNDPUgL._SY346_.jpg',
//     })
//     book1.save();
//     book2.save();
//     book3.save();
// }

// // bookCollection();

// function userCollection() {
//     const user1 = new user({
//         email: 'balomari995@gmail.com',
//         books: [
//             {
//                 name: 'Resisting Happiness',
//                 description: 'A True Story about Why We Sabotage Ourselves',
//                 status: 'finished reading',
//                 iamge: 'https://cdn.asaha.com/assets/thumbs/bf9/bf93b21ca6f860b22862fb495157ee5e.jpg',
//             },
//             {
//                 name: 'Start Where You Are',
//                 description: 'A Guide to Compassionate Living',
//                 status: 'finished reading',
//                 iamge: 'https://cdn.asaha.com/assets/thumbs/f0f/f0f41178adda35d162a59e04ae087c74.jpg',
//             },
//             {
//                 name: 'Remember who you are ',
//                 description: 'Forget safety. Live where you fear to live. Destroy your reputation. Be notorious.',
//                 status: 'finished reading',
//                 iamge: 'https://m.media-amazon.com/images/I/61BeQNDPUgL._SY346_.jpg',
//             }
//         ]
//     })
        
//         const user2 = new user({
//             email: 'brah.alomary@yahoo.com',
//             books: [
//                 {
//                     name: 'Resisting Happiness',
//                     description: 'A True Story about Why We Sabotage Ourselves',
//                     status: 'finished reading',
//                     iamge: 'https://cdn.asaha.com/assets/thumbs/bf9/bf93b21ca6f860b22862fb495157ee5e.jpg',
//                 },
//                 {
//                     name: 'Start Where You Are',
//                     description: 'A Guide to Compassionate Living',
//                     status: 'finished reading',
//                     iamge: 'https://cdn.asaha.com/assets/thumbs/f0f/f0f41178adda35d162a59e04ae087c74.jpg',
//                 },
               
//             ]
//     })

//     user1.save();
//     user2.save();
// }

// function getBooksHandler(req,res) {
//     let userName = req.query.name;
//     // let {name} = req.query
//     user.find({ownerName:userName},function(err,ownerData){
//         if(err) {
//             console.log('did not work')
//         } else {
//             console.log(ownerData)
//             console.log(ownerData[0])
//             console.log(ownerData[0].books)
//             res.send(ownerData[0].books)
//         }
//     })
// }



// // userCollection();
// module.exports=bookCollection;
// module.exports= userCollection;
// module.exports=getBooksHandler;