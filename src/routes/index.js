import express from 'express'
import userRoutes from './apis/user.route.js'
import uploadLocal from './apis/upload.route.js'
 import uploadCloud from './apis/attachment.route.js'
const routes = express.Router()

routes.use( "/users",  userRoutes )
routes.use( "/upload",  uploadLocal )
routes.use( "/upLoadCloud",  uploadCloud )


export default routes
