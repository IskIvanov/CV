import useSWR from 'swr'
import zod from 'zod'
import { useState } from 'react'
import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'

// TODO: Add email form validation
// TODO: Add translations to the Dialog
// TODO: Implement form and react-hook-form for better form controls
// TODO: Abstract most of the logic in custom hooks

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="down" ref={ref} {...props} />
})

const schema = zod.object({
	email: zod.string().email({ message: "Please provide a valid email address." }).min(4),
})

export default function EmailDialog() {
	const [open, setOpen] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
	});
	const [emailValidationErrors, setEmailValidationErrors] = useState<string>('');
	console.log("My api key on local env = ->" + process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
	console.log("Environment = ->" + process.env.NODE_ENV);
	const { data, error: serverError, mutate } = useSWR('/api/sendgrid', (url, options) => {
		// Set the options for the POST request
		const postOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: formData.email }),
		};
		// Post request only if the email is valid
		if (formData.email !== '') {
			return fetch(url, { ...options, ...postOptions }).then((res) => res.json());
		} else {
			return null;
		}
		// Make the POST request and return the response
	},
		{
			// TODO: Prevent the BE call from rendering on initialization
			fallbackData: false,
			revalidateOnFocus: false,
		}
	);


	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ email: event.target.value });
	};
	// TODO: Set data after mutation is called
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			setEmailValidationErrors('');
			schema.parse(formData);
			mutate();
			setOpen(false);
		} catch (err) {
			setEmailValidationErrors(err.issues[0].message);
		}
	};

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
		setEmailValidationErrors('')
	}

	return (
		<div className='mt-8'>
			<Button
				variant='outlined'
				onClick={handleClickOpen}
			>
				Download CV
			</Button>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogContent>
					<DialogContentText>
						To download my CV, please enter your name and email address below, the CV will
						be sent to your email shortly.
					</DialogContentText>
					<TextField
						onChange={handleChange}
						autoFocus
						margin="dense"
						id="name"
						label="Email Address"
						error={!!emailValidationErrors}
						helperText={emailValidationErrors}
						type="email"
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
					<Button onClick={handleSubmit}>Send</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
