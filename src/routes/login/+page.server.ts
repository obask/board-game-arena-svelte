/** @type {import('./$types').} */
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = (event: any) => {
  return {
    user: {name: "VASILY"}
  };
}

export const actions: Actions = {
  default: async ({ request }: any): Promise<any> => {
    // TODO log the user in
    const data = await request.formData()
    console.log("form input =", data.get("qwerty"))
    return { success: true }
  }
}
