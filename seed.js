const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/GLA-DB')
    .then(()=> console.log('DB connected'))
    .catch((err)=> console.log(err));

const dummyUsers = [
    {
        name:'Scenary-At-Bay',
        photo:'https://i.pinimg.com/originals/03/b7/20/03b72024b1f145a8442acf2ac0147fef.jpg',
        price:$50000,
        description:'Painting is a beautiful art of colors. It requires creative skills to paint images on canvas or any other surface. There are various stages of painting that include preparing the surface, under-painting or blocking in colors, laying the paint, and blending colors. '        
    },
    {
        name:'Metal-Dabloise',
        photo:'https://th.bing.com/th/id/OIP.lJ0QNK025UiXiIWvZ90nWQHaGH?pid=ImgDet&rs=1',
        price:$89000,
        description:'the famous painters of the world who made their contribution to art include Leonardo da Vinci, Michelangelo, Rembrandt, Raphael, Vincent van gogh, Pablo Picasso, etc. Some of the paintings that are famous worldwide include Mona Lisa by Leonardo da Vinci'        
    },
    {
        name:'wague-ci-zamp',
        photo:'https://www.filepicker.io/api/file/bXS24AVVRey32Y2qPw5y',
        price:$21900,
        description:'Painting is a constructive art. It is the human passion to draw something out of the heart. Read the following essay that sheds light upon the meaning and purpose of painting, painting as a hobby, and benefits of painting essay for children & students. '        
    },
    {
        name:'tryst-Destiny',
        photo:'https://th.bing.com/th/id/OIP.tIp3rQCjzUycA3bQMJEGdAAAAA?pid=ImgDet&rs=1',
        price:$78600,
        description:'Painting is the great colorful depiction of Art . The main functions of paintings are that they can transport you to a different time and place, evoke varied emotions from within the society, provide inspiration to people who love creative arts, etc. '        
    },
    {
        name:'queMock',
        photo:'https://i.pinimg.com/originals/e5/b0/0f/e5b00f177877d24c7d5062c2a550dfc1.jpg',
        price:$45000,
        description:'Painting is a beautiful art of colors. It requires creative skills to paint images on canvas or any other surface. There are various stages of painting that include preparing the surface, under-painting or blocking in colors, laying the paint, and blending colors. '        
    },
    {
        name:'hallowen',
        photo:'https://i.pinimg.com/originals/09/23/f1/0923f1c772454b28bb7bc703d6645678.jpg',
        price:$84600,
        description:'the famous painters of the world who made their contribution to art include Leonardo da Vinci, Michelangelo, Rembrandt, Raphael, Vincent van gogh, Pablo Picasso, etc. Some of the paintings that are famous worldwide include Mona Lisa by Leonardo da Vinci'
        
    },
    {
        name:'Lacasa-de-papel',
        photo:'https://visualartideas.com/wp-content/uploads/2017/06/Watercolor-Painting-of-Sea.jpg',
        price:90000,
        description:'Painting is a constructive art. It is the human passion to draw something out of the heart. Read the following essay that sheds light upon the meaning and purpose of painting, painting as a hobby, and benefits of painting essay for children & students. '
    }
];

async function seedData(){
    await User.deleteMany({});
    await User.create(dummyUsers);
    console.log('DB Seeded successfully!');
}

seedData();