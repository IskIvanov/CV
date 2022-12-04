import useSWR from 'swr'
import zod from 'zod'
import { useForm } from 'react-hook-form';
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

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="down" ref={ref} {...props} />
})

const schema = zod.object({
	email: zod.string().email(),
})

export default function EmailDialog() {
	const [open, setOpen] = useState(false);
	const { } = useForm();
	const [formData, setFormData] = useState({
		email: '',
	});
	const [emailValidationErrors, setEmailValidationErrors] = useState({});

	const { data, error: serverError, mutate } = useSWR('/api/sendgrid', (url, options) => {
		// Set the options for the POST request
		const postOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: formData.email }),
		};

		// Make the POST request and return the response
		return fetch(url, { ...options, ...postOptions }).then((res) => res.json());
	},
		{
			// TODO: Prevent the BE call from rendering on initialization
			fallbackData: false,
		}
	);


	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ email: event.target.value });
	};
	// TODO: Set data after mutation is called
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			schema.parse(formData);
			// mutate();
		} catch (errors) {
			console.error(errors);
			debugger;
			setEmailValidationErrors(errors.issues.message);
		}
	};

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div>
			{/* <form onSubmit={handleSubmit}> */}
			<Button
				className="mt-10 rounded-xl
					p-4 border border-white
					bg-gray-500 
						shadow-lg
						bg-gray-500/80"
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
						// error={!!error.email}
						// helperText={error.email}
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
			{/* </form> */}
		</div>
	)
}
