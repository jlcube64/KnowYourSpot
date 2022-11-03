const model = require('../models/connection')


//Returns all of the connection events that are going to be happening
exports.index =(req,res)=>{
    let events = model.find();
    res.render('./events/index',{events});
};

exports.newConnection =(req,res)=>{
    res.render('./events/newConnection');
};


exports.create =(req,res)=>{
    //res.send('created a new story');
    let event = req.body;
    model.save(event);
    res.redirect('/events');

};
//Shows the event by the specific ID
exports.show = (req,res,next)=>{
    let id = req.params.id;
    let event = model.findByID(id);
    if(event){
        res.render('./events/show',{event});
    }else{
        let err = new Error('Cannot find a event with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.edit = (req,res, next)=>{
    let id = req.params.id;
    let event = model.findByID(id);
    if(event){
        res.render('./events/edit', {event});
    }else{
        let err = new Error('Cannot find a event with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.update = (req, res, next)=>{
    let event = req.body;
    let id = req.params.id;

    if(model.updateById(id,event)){
        res.redirect('/events/'+id);
    }else{
        let err = new Error('Cannot find a event with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.delete = (req, res, next)=>{
    let id = req.params.id;
    if(model.deleteById(id)){
        res.redirect('/events');
    }
    else{
        let err = new Error('Cannot find a event with id ' + id);
        err.status = 404;
        next(err);
    }
};






