export default async function Page({ params }) {
    const { slug } = await params
    let languages = ["python", "c", "javaScript", "java"]
    if (languages.includes(params.slug)) {
        return <div>My Post: {slug}</div>
    }
    else {
        return <div>Page is not found</div>

    }
    return <div>My Post: {slug}</div>
}