import { Router } from 'express'
import CreateReminderDto from '../dtos/create-reminder';
import Reminder from '../models/reminder';

const router=Router();

const reminders: Reminder[]= [];

router.get("/",(req,res)=>{
    res.send("List of reminders")
})

router.post("/",(req,res)=>{

   const {title}= req.body as CreateReminderDto
   const reminder = new Reminder(title)
   reminders.push(reminder);
  return res.status(201).json(reminders)
})


export default router;