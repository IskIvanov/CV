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

// TODO: Add email validation
const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="down" ref={ref} {...props} />
})

export default function EmailDialog() {
	const [open, setOpen] = useState(false);
	const [email, setEmail] = useState('');

	const handleDownload = () => {
		fetch("/api/sendgrid", {
			body: JSON.stringify({
				email: email
			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		})
	}

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div>
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
						To download my CV, please enter your email address here, the CV will
						be sent to your email shortly.
					</DialogContentText>
					<TextField
						onChange={(e) => {
							setEmail(e.target.value)
						}}
						autoFocus
						margin="dense"
						id="name"
						label="Email Address"
						type="email"
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
					<Button onClick={handleDownload}>Send</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

