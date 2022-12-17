
// get `locals.user` and pass it to the `page` store
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ locals }) => {
    console.log("LOAD LayoutServerLoad /")
	return {
		user: locals.user,
	}
}