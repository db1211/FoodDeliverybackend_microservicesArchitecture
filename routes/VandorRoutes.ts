import express ,{Request ,Response, NextFunction} from 'express'


const router  = express.Router()

router.get('/',(req:Request, res:Response,next:NextFunction) => {

res.json({messge:"Hello from Vandor"})

})


export {router as VandorRoute}

