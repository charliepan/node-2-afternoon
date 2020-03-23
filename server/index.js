const express = require('express');
const app = express();

const msg_control = require('./controllers/messages_controller');

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const PORT = 3001;

app.post('/api/messages', msg_control.create);
app.get('/api/messages', msg_control.read);
app.put('/api/messages/:id', msg_control.update);
app.delete('/api/messages/:id', msg_control.delete);


app.listen(PORT, ()=>{
    console.log(`Server is listening from port ${PORT}`);
})

