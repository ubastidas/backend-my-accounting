import User from "../models/User";

export async function getUsers (req, res) {    
    
    let users = await User.findAll();
    
    if (users.length >=1){
        res.json(users);
    }else{
        res.json({msg: "no information found"});
    }    
}

export async function getUser (req, res) {
   
    let id = req.params.id;
    let user = await User.findByPk(id);
    
    if (user) {
        res.json(user);
    }else{
        res.json({msg: "no information found"});
    }
}

export async function createUser (req, res) {
    let user = await User.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    });    
    res.status(201).json(user);
}

export async function updateUser (req, res) {
    let id = req.params.id;
    let result = await User.update({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    }, {
        where:{
            id: id
        } 
    });
    console.log('resultado:' ,result);
    if (result[0]){
        res.status(201).json({msg: "user updated succesfully"});
    }else{
        res.status(404).json({msg: "user not found"});
    }    
}

export async function deleteUser (req, res) {
    let id = req.params.id;
    let result = await User.destroy({
        where: {
            id: id
        }
    });
    if (result){
        res.status(200).json({msg: "user deleted succesfully"});
    }else{
        res.status(404).json({msg: "user not found"});
    }    
}
