import express from 'express'
import {AdminRoute, VandorRoute } from './routes'

const app =express()

app.use("/admin",AdminRoute)
app.use("/vandor",VandorRoute)

app.listen(8000,()=>{
    console.log("app is running in port 8000")
})