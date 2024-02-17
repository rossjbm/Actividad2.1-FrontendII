const JWT = require("jsonwebtoken")

class seguridad{
    async JWT(req, res, next){   
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        console.log('este el token: ',token);
        try {
            if (token == "null") {
                throw (token);
            }
            const verificado = await JWT.verify(token, process.env.secreto)
            console.log(verificado);
            next()
        } catch (error) {
            if (error.name == "TokenExpiredError" || error== "null") {
                res.status(401).json({'error':'debe iniciar sesión'})
            }else{
                console.log('generico');
                res.status(404).json({'error':error})
            }
            
        }
        

    }
}

module.exports = new seguridad();