const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'editor'
})

dbConnection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('connected')
})

dbConnection.query('SELECT * FROM links where id=4', function(error, results, fields) {
    if (error) throw error;
    console.log('query res: ', JSON.parse(JSON.stringify(results))[0]);
});

dbConnection.end();