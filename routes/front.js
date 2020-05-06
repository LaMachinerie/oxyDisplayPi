/*
Configuration du module
*/
    let express = require('express')
    let router = express.Router()
// 


/*
Configuration de la route principale => http://localhost:8080/
*/
    router.get('/', (req, res, next) => {
        // Envoi du fichier html du dossier /www dans la réponse
        res.render('index.html')
    })
//


    router.get('/data', (req, res, next) => {
        console.log("New request :");
        var patientId = req.query.id;
        var patientSpO2 = req.query.spo2;
        var patientIr = req.query.ir;

        var irResult = "NULL";

        console.log('"' + patientIr + '"');
        
        if(patientIr != undefined)
            irResult = JSON.parse(req.query.ir);

        console.log("From Sensor :");
        console.log("Patient ID :"+patientId+", SpO2 "+ patientSpO2);
        console.log("Patient ID :"+patientId+", IR ");
        console.log(irResult);
        

        

        
        res.send('OK');
    })
//

/*
Export du module
*/
    module.exports = router
// 