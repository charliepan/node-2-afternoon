let arr_msg = [];
let id = 0;

module.exports = {
    create: (req,res) =>{
        const {text, time} = req.body;
        arr_msg.push({id,text,time});
        id++;
        res.status(200).send(arr_msg);
    },
    read: (req,res) =>{
        res.status(200).send(arr_msg);
    },
    update: (req,res) =>{
        const {text} = req.body;
        const updateID = req.params.id;
        const messagesIndex = arr_msg.findIndex(arr_msg => arr_msg.id === +updateID);
        let message = arr_msg[messagesIndex];

        arr_msg[messagesIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).send(arr_msg);
    },
    delete: (req,res) =>{
        const deleteID = req.params.id;
        const messagesIndex = arr_msg.findIndex(arr_msg => arr_msg.id === +deleteID);
        arr_msg.splice(messagesIndex, 1);
        res.status(200).send(arr_msg);

    },

}