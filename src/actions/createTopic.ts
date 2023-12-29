"use server";

export async function createTopic(formData: FormData) {
    // TODO: Revalidate the homePage 
    const name = formData.get('name');
    const description = formData.get('descripton');
    console.log(name, description);
}
