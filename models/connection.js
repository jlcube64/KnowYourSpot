const { DateTime } = require("luxon");
const {v4: uuidv4} = require('uuid');

const events = [
{
    id:'1',
    name: 'Charlotte Community',
    topic: 'Theme is going to be halloween, so make sure to come through and enjoy the sceenery!',
    details: 'Lowered Cars Only',
    date: "10/21/22",
    startTime: "5:00 PM",
    endTime : "6:00 PM",
    hostName : "VinWiki",
    image: "placeholder"

},
{
    id:'2',
    name: 'Uptown Community',
    topic: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    details: 'Stoynev',
    date: "10/7/22",
    startTime: "5:00 PM",
    endTime : "6:00 PM",
    hostName : "VinWiki",
    image: "placeholder"
},
{
    id:'3',
    name: 'University City Community',
    topic: 'On Forza of course',
    details: 'German Cars Only',
    date: "10/21/22",
    startTime: "5:00 PM",
    endTime : "6:00 PM",
    hostName : "Xbox",
    image: "placeholder"

}
];


exports.find = () => events;

// same way to implement just different methods, using arrow function vs not using

exports.findByID = function(id){
    return events.find(event=> event.id === id);
};

exports.save = function (event){
    event.id = uuidv4();
    event.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    events.push(event);
};

exports.updateById = function(id, newEvent){
    let event = events.find(event=> event.id === id);
    if(event){
        event.name = newEvent.name;
        event.topic = newEvent.topic;
        return true;
    } else{
        return false;
    }
};

exports.deleteById = function(id){
    let index = events.findIndex(event => event.id === id);
    if(index !== -1){
        events.splice(index, 1);
        return true;
    }
    else{
        return false;
    }
}