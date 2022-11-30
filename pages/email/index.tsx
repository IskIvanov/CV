import React from 'react';
import useSwr from 'swr'
import { fetcher } from '../../src/utils/fetcher';

export default function EmailPage() {
	const { data } = useSwr('/api/example-service', fetcher)

	return (
		<div>
			<h1>Example Service</h1>
			{data && <>Test Component</>}
		</div>
	)
}
