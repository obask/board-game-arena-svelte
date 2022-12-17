import { error, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from './$types'

import { db } from '../../../lib/database'

// using an enum for user roles to avoid typos
// if you're not using TypeScript use an object
enum Roles {
	ADMIN = 'ADMIN',
	USER = 'USER',
}

export const load: PageServerLoad = async ({ locals }) => {
	// redirect user if logged in
	if (locals.user) {
		throw redirect(302, '/')
	}
}

const register: Action = async ({ request }) => {
	const data = await request.formData()
	const username = data.get('username')

	if (
        typeof username !== 'string' || !username
    ) {
		return error(400, { message: "Dsaddas" })
	}

	const user = await db.user.findUnique({
		where: { username },
	})

	if (user) {
		return error(400, { message: "user exists" })
	}

	await db.user.create({
		data: {
			username,
			userAuthToken: crypto.randomUUID(),
			// role: { connect: { name: Roles.USER } },
		},
	})

	throw redirect(303, '/login')
}

export const actions: Actions = { register }