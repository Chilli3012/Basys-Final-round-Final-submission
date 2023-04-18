const EMR = require("../models/EMR");

const getEMRDetails = async(req,res)=>{

    const {id} = req.params;
    

    const emr = await EMR.find({id:id});

    res.json({emr})

    


}

const postEMRDetails = async(req,res)=>{

    const  emrData = req.body

    const newEMR = await new EMR(emrData).save()

    res.json({emrData})
}


module.exports = {getEMRDetails,postEMRDetails}