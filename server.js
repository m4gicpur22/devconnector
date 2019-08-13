const express = require('express');
const connectDB = require('./config/DB');

const app = express();

connectDB();

//parsers data passed for us
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send("API running!"));

//intialize routes
app.use('/Api/Users',  require('./Routes/Api/user'));
app.use('/Api/Auth',  require('./Routes/Api/auth'));
app.use('/Api/Profile',  require('./Routes/Api/profile'));
app.use('/Api/Posts',  require('./Routes/Api/posts'));





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));