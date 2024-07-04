
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.nq5ng3r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', (err) => {
    if (!err) {
        console.log('DB Connected.')
    }
})