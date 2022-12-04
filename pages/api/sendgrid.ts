import sendgridMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from 'next';

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {

	const sendgridAPIKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY;
	sendgridMail.setApiKey(sendgridAPIKey);
	// TODO: Finish implementation.
	// Sendgrid client integration according to the sendgrid docs: https://docs.sendgrid.com/api-reference/contacts/add-or-update-a-contact
	// const client = require('@sendgrid/client');
	// // client.setApiKey(sendgridAPIKey);
	
	// // const data = {
	// // 	contacts: [
	// // 		{
	// // 			first_name: "Iskren",
	// // 			last_name: "Ivanov",
	// // 		}
	// // 	]
	// // };

	// const request = {
	// 	url: `/v3/marketing/contacts`,
	// 	method: 'PUT',
	// 	body: data
	// }
		
	// Setting up the email message sender
	await sendgridMail.send({
		to: req.body.email, 
		from: 'iskren.dev@gmail.com', 
		subject: 'Iskren Ivanov CV',
		html: `
			<!doctype html>
			<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

			<head>
			<title>
			</title>
			<!--[if !mso]><!-->
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<!--<![endif]-->
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<style type="text/css">
				#outlook a {
				padding: 0;
				}

				body {
				margin: 0;
				padding: 0;
				-webkit-text-size-adjust: 100%;
				-ms-text-size-adjust: 100%;
				}

				table,
				td {
				border-collapse: collapse;
				mso-table-lspace: 0pt;
				mso-table-rspace: 0pt;
				}

				img {
				border: 0;
				height: auto;
				line-height: 100%;
				outline: none;
				text-decoration: none;
				-ms-interpolation-mode: bicubic;
				}

				p {
				display: block;
				margin: 13px 0;
				}

			</style>
			<!--[if mso]>
				<noscript>
				<xml>
				<o:OfficeDocumentSettings>
				<o:AllowPNG/>
				<o:PixelsPerInch>96</o:PixelsPerInch>
				</o:OfficeDocumentSettings>
				</xml>
				</noscript>
				<![endif]-->
			<!--[if lte mso 11]>
				<style type="text/css">
				.mj-outlook-group-fix { width:100% !important; }
				</style>
				<![endif]-->
			<!--[if !mso]><!-->
			<link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
			<style type="text/css">
				@import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);

			</style>
			<!--<![endif]-->
			<style type="text/css">
				@media only screen and (min-width:480px) {
				.mj-column-per-100 {
					width: 100% !important;
					max-width: 100%;
				}
				}

			</style>
			<style media="screen and (min-width:480px)">
				.moz-text-html .mj-column-per-100 {
				width: 100% !important;
				max-width: 100%;
				}

			</style>
			<style type="text/css">
			</style>
			<style type="text/css">
			</style>
			</head>

			<body style="word-spacing:normal;background-color:#f8f8fc;">
			<div style="background-color:#f8f8fc;">
				<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
				<div style="margin:0px auto;max-width:600px;">
				<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
					<tbody>
					<tr>
						<td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0px;text-align:center;">
						<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
						<div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
							<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
							<tbody>
								<tr>
								<td style="vertical-align:top;padding-top:0px;padding-bottom:0px;">
									<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
									<tbody>
										<tr>
										<td style="font-size:0px;word-break:break-word;">
											<div style="height:40px;line-height:40px;">&#8202;</div>
										</td>
										</tr>
									</tbody>
									</table>
								</td>
								</tr>
							</tbody>
							</table>
						</div>
						<!--[if mso | IE]></td></tr></table><![endif]-->
						</td>
					</tr>
					</tbody>
				</table>
				</div>
				<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
				<div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
				<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
					<tbody>
					<tr>
						<td style="border-left:solid 1px #e9e9f1;border-right:solid 1px #e9e9f1;border-top:solid 1px #e9e9f1;direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0px;text-align:center;">
						<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:598px;" ><![endif]-->
						<div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
							<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
							<tbody>
								<tr>
								<td style="vertical-align:top;padding-top:0px;padding-bottom:0px;">
									<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
									<tbody>
										<tr>
										<td align="center" style="font-size:0px;padding:10px 25px;padding-top:50px;word-break:break-word;">
											<div style="font-family:Helvetica;font-size:20px;font-weight:bold;line-height:1;text-align:center;color:#000000;">Hello!</div>
										</td>
										</tr>
									</tbody>
									</table>
								</td>
								</tr>
							</tbody>
							</table>
						</div>
						<!--[if mso | IE]></td></tr></table><![endif]-->
						</td>
					</tr>
					</tbody>
				</table>
				</div>
				<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
				<div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
				<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
					<tbody>
					<tr>
						<td style="border-left:solid 1px #e9e9f1;border-right:solid 1px #e9e9f1;direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0px;text-align:center;">
						<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:598px;" ><![endif]-->
						<div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
							<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
							<tbody>
								<tr>
								<td style="vertical-align:top;padding-top:0px;padding-bottom:0px;">
									<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
									<tbody>
										<tr>
										<td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
											<div style="font-family:Helvetica;font-size:17px;line-height:26px;text-align:center;color:#000000;">Thank you for requesting my CV. <br> Please find the downloadable link below:</div>
										</td>
										</tr>
									</tbody>
									</table>
								</td>
								</tr>
							</tbody>
							</table>
						</div>
						<!--[if mso | IE]></td></tr></table><![endif]-->
						</td>
					</tr>
					</tbody>
				</table>
				</div>
				<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
				<div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
				<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
					<tbody>
					<tr>
						<td style="border-bottom:solid 1px #e9e9f1;border-left:solid 1px #e9e9f1;border-right:solid 1px #e9e9f1;direction:ltr;font-size:0px;padding:20px 0;padding-top:6px;text-align:center;">
						<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:598px;" ><![endif]-->
						<div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
							<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
							<tbody>
								<tr>
								<td align="center" style="font-size:0px;padding:10px 25px;padding-bottom:30px;padding-left:20px;word-break:break-word;">
									<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
									<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
									<tbody>
										<tr>
										<td style="padding:0 10px 0 0;vertical-align:middle;">
											<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:40px;">
											<tbody>
												<tr>
												<td style="font-size:0;height:40px;vertical-align:middle;width:40px;">
													<a href="https://iskren.dev/static/resume.pdf" target="_blank">
													<img height="40" src="https://iskren.dev/images/cv.png" style="border-radius:3px;display:block;" width="40" />
													</a>
												</td>
												</tr>
											</tbody>
											</table>
										</td>
										<td style="vertical-align:middle;">
											<a href="https://iskren.dev/static/resume.pdf" style="color:#333333;font-size:20px;font-weight:bold;font-family:Helvetica;line-height:22px;text-decoration:none;" target="_blank"> Download CV </a>
										</td>
										</tr>
									</tbody>
									</table>
									<!--[if mso | IE]></td></tr></table><![endif]-->
								</td>
								</tr>
							</tbody>
							</table>
						</div>
						<!--[if mso | IE]></td></tr></table><![endif]-->
						</td>
					</tr>
					</tbody>
				</table>
				</div>
				<!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" role="presentation" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
				<div style="margin:0px auto;max-width:600px;">
				<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
					<tbody>
					<tr>
						<td style="direction:ltr;font-size:0px;padding:20px 0;padding-top:0px;text-align:center;">
						<!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
						<div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
							<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
							<tbody>
								<tr>
								<td style="vertical-align:top;padding-top:0px;">
									<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="" width="100%">
									<tbody>
										<tr>
										<td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
											<div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
											<div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#0A3752; font-size:12px; line-height:20px; padding:0px 0px 16px 0px; text-align:center;">
												<p style="font-family:verdana,geneva,sans-serif; font-size:12px; line-height:20px;"><a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank" style="color:#000000;">Unsubscribe</a></p>
											</div>
											</div>
										</td>
										</tr>
									</tbody>
									</table>
								</td>
								</tr>
							</tbody>
							</table>
						</div>
						<!--[if mso | IE]></td></tr></table><![endif]-->
						</td>
					</tr>
					</tbody>
				</table>
				</div>
				<!--[if mso | IE]></td></tr></table><![endif]-->
			</div>
			</body>

			</html>
		`
	}).then(() => {
		console.log('Email sent')
		res.status(200).json({ message: 'ok' });
	}).catch((error) => {
		console.error(error)
		res.status(500).json({ message: error });
	});

	// client.request(request)
	// .then(([response]) => {
	// 	console.log(response.statusCode);
	// 	console.log(response.body);
	// })
	// .catch(error => {
	// 	console.error(error);
	// });
}

export default sendEmail;