const db=require('../db')

class MeetController{
    async createMeetUp(req,res){
        const {subject, description, tags, time, date, place, user_id}
        =req.body
        const newMeetUp=await db.query(`INSERT INTO meetups
        (subject, description, tags, time, date, place, user_id) 
        VALUES ($1, $2,$3,$4,$5,$6,$7) RETURNING *`,
        [subject, description, tags, time, date, place, user_id])
        console.log(subject, description, tags, time, date, place, user_id)
        res.json(newMeetUp.rows[0])
    }
    async getMeetUps(req,res){
        const meetUps = await db.query('SELECT * FROM meetups')
        res.json(meetUps.rows)
    }
    async getOneMeetUp(req,res){
        const id=req.params.id
        const meetUp = await db.query('SELECT * FROM meetups WHERE meet_id = $1',[id])
        res.json(meetUp.rows[0])
    }   
    async updateMeetUp(req,res){
        const id=req.params.id
        const {subject, description, tags, time, date, place, user_id}=req.body
        const meetUp= await db.query('UPDATE meetups SET subject=$1, description=$2, tags=$3,time=$4, date=$5, place=$6, user_id=$7 WHERE meet_id = $8 RETURNING *',[subject, description, tags, time, date, place, user_id,id])
        res.json(meetUp.rows[0])
    }
    async deleteMeetUp(req,res){
        const id=req.params.id
        const user = await db.query('DELETE FROM meetups WHERE meet_id = $1',[id])
        res.json(user.rows[0])
    }
}
module.exports = new MeetController()