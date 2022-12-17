import type { Actions, PageServerLoad } from "./$types";

import { db } from '../lib/database';
import { error, fail } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ params }) => {
    console.log("PageServerLoad /")
    return {
        items: await db.match.findMany({include: {players: true}})
    }
}

export const actions: Actions = {
    newMatch: async (event) => {
        // TODO log the user in
        console.log("newMatch!!")
        await db.match.create({
            data: {}
        })
        return {success: true}
    },
    enterMatch: async ({ request, locals }) => {
        console.log("enterMatch!!", locals.user)
        const data = await request.formData()
        console.log("enterMatch!!", data)
        const idX = data.get("matchId")
        if (
            typeof idX !== 'string' || !idX
        ) {
            return fail(400, { idX, missing: true })
        }
        console.log("form input =", idX)
        // TODO register the user
        await db.match.update({
            where: {id: idX},
            data: {players: 
                {connect: {id: locals.user.id}}
            }
        })
        console.log("enterMatch!!")
        // await db.match.delete({
        //     where: { id: idX }
        // })
        return {success: true}
    },
    deleteMatch: async ({ request }) => {
        console.log("deleteMatch!!")
        const data = await request.formData()
        console.log("deleteMatch!!", data)
        const idX = data.get("matchId")
        if (
            typeof idX !== 'string' || !idX
        ) {
            return fail(400, { idX, missing: true })
        }
        console.log("form input =", idX)
        // TODO register the user
        console.log("deleteMatch!!")
        await db.match.delete({
            where: { id: idX }
        })
        return {success: true}
    }
}

// 
// await db.match.findMany({include: {players: true}})
