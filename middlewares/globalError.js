


function errorHandler( _req,_res, next){
    const error = new Error("Not Found")
    error.status= 404;
    _res.status(404).json({
        success:false,
        message:'Route not found'
    })
    next(error)
    
}


export default errorHandler