const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "ba6fb35e",
  apiSecret: "Your API Key"
})

const from = "Vonage APIs"
const to = "919284280215"
const text = 'Save me!'

async function sendSMS() {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}

sendSMS();

