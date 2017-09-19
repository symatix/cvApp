
export const executeCommand = (command, callback) => {
    if (command[0] === "documentation" || command[0] === "help"){
        return "docs"
    }
    if (command[1] === "get" && command[0].includes("contact")){
        return "contact"
    }
    if (command[1] === "get" && command[0] === "services"){
        return "services"
    }
    if (command[0] === "cls") {
        return "cls"
    }
    return "error"
}
