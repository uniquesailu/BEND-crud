import Emp from "../model/employeeModel.js";

const createEmployee=async(req,res)=>{
    const { ename,email,emobile}=req.body;
    if(!ename || !email || !emobile )
    res.status(404).json({message:"missing field"});
    else{
        try{
            const response=await Emp.create({ename,email,emobile});
            if(response)
            res.status(200).json({message:"record successfully created"})
        else
        res.status(404).json({message:"unable to find record"})
        }catch(err){
            res.status(err.message)

        }
    }
}
const getEmployees=async(req,res)=>{
    try{
        const e=await Emp.find();
        if(e.length!=0)
        res.status(200).json(e);
    else
    res.status(404).json({message:"unable to find record"})
    }catch(err){
        res.status(err.message);
    }
}

const getEmployee=async(req,res)=>{
    try{
        const e=await Emp.findById(req.params.id);
        if(e)
        res.status(200).json(e);
    else
    res.status(404).json({message:"unable to find record"})
    }catch(err){
        res.status(err.message);
    }
}

const deleteEmployee=async(req,res)=>{
    try{
        const e=await Emp.findByIdAndRemove(req.params.id);
        if(e)
        res.status(200).json({message:"record deleted"});
    else
    res.status(404).json({message:"record not found"})
    }catch(err){
        res.status(err.message);
    }
}

const updateEmployee=async(req,res)=>{
    try{
        const e=await Emp.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(e)
        res.status(200).json({message:"record updated successfully"});
    else
    res.status(404).json({message:"unable to update record"})
    }catch(err){
        res.status(err.message);
    }
}

export {createEmployee,getEmployees,getEmployee,deleteEmployee,updateEmployee}