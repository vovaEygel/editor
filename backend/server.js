const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()
const http = require('http').createServer(app);

//route imports
const authRoutes = require('./api/auth/auth.routes')
const influencerRoutes = require('./api/influencer/influencer.routes')

app.use(cookieParser())
app.use(bodyParser.json());
//use session middlewere
app.use(session({
    secret: 'braudeProject',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8081', 'http://127.0.0.1:8081', 'http://localhost:8080', 'http://127.0.0.1:3030', 'http://localhost:3030'],
        credentials: true
    };
    app.use(cors(corsOptions));
}

// routes
app.use('/api/influencer', influencerRoutes)
app.use('/api/auth', authRoutes)

const logger = require('./services/logger.service')
const port = process.env.PORT || 3030;
http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
});