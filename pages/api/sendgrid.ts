import sendgrid from "@sendgrid/mail";

async function sendEmail(req, res) {
	// TODO: Find out why process.env.SENDGRID_API_KEY is returns undefined ?
	sendgrid.setApiKey("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");
	console.log("Is this undefined->" + "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");
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