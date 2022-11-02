const path= require('path');
const express= require('express');
const cors= require('cors');
const app= express();
const morgan=require('morgan');

const planetRoutes= require('./routes/planets/planets.routes');
const launchesRoutes= require('./routes/launches/launches.routes');

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/planets',planetRoutes);
app.use('/launches',launchesRoutes);
app.get('/*',(req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

module.exports= app;