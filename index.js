const express=require('express');
const cors=require('cors');

const app=express();

app.use(cors());
//app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());


// public folder for images
app.use(express.static('public'))

// Routes
const port = process.env.PORT || 5000;

app.listen(port, () =>console.log( `Server running on port ${port} 🔥`));