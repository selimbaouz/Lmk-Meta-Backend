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
            res.status(200).send(response.data);
        })
        .catch(function (error) {
            if(error.response.data.code === 15) {
                res.status(400).send(error.response);
            } else if(error.response.data.code === 11) {
                res.status(400).send(error.response);
            } else {
                res.status(500).send(error.response);
            }
        });
}

export const getContact = (req, res) => {
    res.send({message: 'API LMK-META !'})
}