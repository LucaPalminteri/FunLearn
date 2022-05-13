//const mysql = require('mysql')

// const conection = mysql.createConnection(
//     {host: 'localhost',
//     user: 'user',
//     password: 'user',
//     database: 'funlearn'
//     }
// )

// conection.connect( (err)=> {
//     if(err) throw err
//     console.log('conection works');
// })

// export function getUser(user,password) {
//     conection.query('SELECT * FROM users', (err,rows)=> {
//         if(err) throw err
//         rows.forEach(user => {
//             console.log('Email: ' + user.email);
//             console.log('Password: ' + user.password);
//         })
//     })
// }

// conection.end()