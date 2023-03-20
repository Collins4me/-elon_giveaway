import {Client} from "discord.js"
const bot = new Client({intents: 2048})
const token = process.env.DISCORD_TOKEN


export default function sendPhrase(req, res){
    const message = req.body
    bot.login(token)
    bot.on('ready', async function(){
        const channel01 = await bot.channels.fetch('1053763501048471696')
        channel01.send(message)
    })
    

    res.status(200).json({ name: 'John Doe' })
}