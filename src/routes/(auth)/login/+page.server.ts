/** @type {import('./$types').} */
import { error, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from "./$types";

import { db } from '../../../lib/database'

export const load: PageServerLoad = async ({ locals }) => {
	// redirect user if logged in
  console.log("PageServerLoad /login")
	if (locals.user) {
		throw redirect(302, '/')
	}
}

export const actions: Actions = {
  default: async ({ cookies, request }): Promise<any> => {
    // TODO log the user in
    const data = await request.formData()
    const username = data.get("qwerty")
    console.log("form input =", username)

    if (
      typeof username !== 'string' ||      !username
    ) {
      throw error(400, { message: "username is empty" })
    }

    const user = await db.user.findUnique({ where: { username } })

    if (!user) {
      throw error(400, { message: "user not found" })
    }
  
    const authenticatedUser = await db.user.update({
      where: { username: user.username },
      data: { userAuthToken: crypto.randomUUID() },
    })

    cookies.set('session', authenticatedUser.userAuthToken, {
      // send cookie for every page
      path: '/',
      // server side only cookie so you can't use `document.cookie`
      httpOnly: true,
      // only requests from same site can send cookies
      // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
      sameSite: 'strict',
      // only sent over HTTPS in production
      secure: process.env.NODE_ENV === 'production',
      // set cookie to expire after a month
      maxAge: 60 * 60 * 24 * 30,
    })

    // return { success: true }
    throw redirect(302, '/')
  }
}
