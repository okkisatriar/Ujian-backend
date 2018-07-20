const mysql = require ('mysql');
const bodyparser = require ('body-parser');
const koneksi = require('cors');
const express = require('express');

const app = express();

const dbs = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'rumahouse',
        port: '3306'
    }
);
dbs.connect();

var port = 8002;

app.use(koneksi());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.get('/list', (req, res) =>
{
    var panggilData = `SELECT * FROM table_addproduk `;
    dbs.query(panggilData, (err, result) =>
    {
        if (err)
        {
            throw err;
        }
        else
        {
            res.send(result);
        }
    });
});

// app.post('/', (req, res) =>
// {
//     var inputEmail = req.body.email;
//     var idtampil = req.body.id_user;
//     var passwordUser = req.body.password;
//     var passwordEncrypt = crypto.createHash('sha256' , secret).update(passwordUser).digest('hex');
    
//     var getData = 'SELECT * FROM table_user';
//     dbs.query(getData, (err,result) =>
//     {
//         if (err)
//         {
//             throw err;
//         }
//         else
//         {        
//             for(i=0 ; i<result.length ; i++)
//             {
//                 if ((inputEmail == result[i].email) && (passwordEncrypt == result[i].password))
//                 {
//                  console.log('Login Sukses')
//                  var status = '1';
//                  res.send(status);
//                  break;
//                 }
//                 else if (i === result.length-1)
//                 {
//                  console.log('Login Gagal')
//                  var status = '-1';
//                  res.send(status);
//                  break;
//                 }
//             }
//         }
//     });
// });

app.listen(port, () => {
    console.log('Server berjalan di port '+port+' ....')
});
