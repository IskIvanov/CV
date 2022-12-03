import React from 'react';
import useSwr from 'swr';
import { fetcher } from '../../src/utils/fetcher';

export default function EmailPage() {
	const { data } = useSwr('/api/sendgrid', fetcher, { refreshInterval: 0 })

	return (
		<>
			{data ? 'Loading...' : 'Loaded'}
		</>
	);
}
