import { Router } from 'express'; 
var router = Router();

router.get('/', function(req, res) {
    res.json({ message: 'Welcome to our api!' });   
});

export default router;