// import * as Yup from 'yup';
// import User from '../models/User';

class UserController {

    async index(req, res) {
        return res.json({ ok: true });
    }



}

export default new UserController();
