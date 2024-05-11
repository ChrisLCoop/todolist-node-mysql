import { pool } from "../db.js";

export const ping = async(req,res)=>{
    const [result] = await pool.query('SELECT "PONG" AS result')
    res.json(result[0])
}

export const inicio = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM todolist')
    res.render('index',{data:rows});
    
}


export const proceso = async(req,res)=>{
    const {tarea,fecha,estado} = req.body
    const [rows] =await pool.query('INSERT INTO todolist (tarea,fecha,estado) VALUES(?,?,?)',[tarea,fecha,estado])
    
    res.redirect('/');
}

export const borrar = async(req,res)=>{
    const {tareaID} =req.body
    const [rows] = await pool.query('DELETE FROM todolist WHERE id = (?)',[tareaID])

    res.redirect('/');
}

export const completado = async(req,res)=>{
    const {estado,tareaID} = req.body
    const [rows] = await pool.query('UPDATE todolist SET estado = (?) WHERE id= (?)',[estado,tareaID])

    res.redirect('/')
}