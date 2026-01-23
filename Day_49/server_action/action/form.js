"use server"
import fs from "fs/promises"
export const submitAction = async (e) => {
    console.log(e.get("name"), e.get("email"), e.get("password"))
    let a = await fs.writeFile("harry.txt", `Name is ${e.get("name")} and email is ${e.get("email")} and passwored is ${e.get("password")}`)

}