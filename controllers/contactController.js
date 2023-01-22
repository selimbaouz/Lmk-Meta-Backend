import axios from 'axios';
import dotenv  from 'dotenv';
dotenv.config();

export const createContact = (req, res) => {
    const phoneNumber = JSON.stringify(req.body);
    axios.post(process.env.API_URL_CONTACT, 
    {
        "identifier": phoneNumber
    }, {
        headers: {
            "X-Primotexto-ApiKey": process.env.TOKEN_PRIMO_TEXTO,
            "Content-Type": "application/json",            
        },
    })
        .then(function (response) {
            res.send(response);
        })
        .catch(function (error) {
            console.log(error);
            res.send(error);
        });
}