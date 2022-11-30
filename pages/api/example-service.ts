import type { NextApiRequest, NextApiResponse } from 'next'

export type User = {
  id: number
  name?: string
}
// Fake users data
const serviceTest: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(serviceTest)
}