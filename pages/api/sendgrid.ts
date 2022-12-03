import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from 'next';

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
	// TODO: Find out why process.env.SENDGRID_API_KEY is returns undefined ?
	sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
	console.log("Is this undefined->" + "");
		// console.log("REQ.BODY", req.body);
	await sendgrid.send({
		to: 'iskren93@gmail.com', // Change to your recipient
		from: 'iskren.dev@gmail.com', // Change to your verified sender
		subject: 'Sending with SendGrid is Fun',
		text: 'and easy to do anywhere, even with Node.js',
		html: '<strong>and easy to do anywhere, even with Node.js</strong>',
	}).then(() => {
		console.log('Email sent')
		res.status(200).json({ message: 'ok' });
	}).catch((error) => {
		console.error(error)
		res.status(500).json({ message: error });
	})
}

export default sendEmail;