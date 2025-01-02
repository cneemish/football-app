import {
    addNewPlayer
} from '../controllers/players-controllers.js';

// Creating routes 

const route = (app) =>{
    app.route('/players')
        .post(addNewPlayer)

}

export default route;
