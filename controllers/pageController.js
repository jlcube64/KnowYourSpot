
exports.index = (req, res)=>{
    res.render('./pages/index');
};

exports.connection =(req,res)=>{
    res.render('./pages/connection');
};

exports.map =(req,res)=>{
    res.render('./pages/map');
};

exports.contact =(req,res)=>{
    res.render('./pages/contact');
};


exports.login  = (req,res) =>{
    res.render('./pages/login')
}




