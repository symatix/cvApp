
export const executeCommand = (command, callback) => {
    if (command[0] === "docs" || command[0] === "help"){
        return "docs"
    }
    if ((command[1] === "get" && command[0] === ("contact")) || command[0] === ".contact"){
        return "contact"
    }
    if ((command[1] === "get" && command[0] === "services") || command[0] === ".services"){
        return "services"
    }
    if ((command[1] === "get" && command[0] === "portfolio") || command[0] === ".portfolio"){
        return "portfolio"
    }
    if ((command[1] === "get" && command[0] === "request") || command[0] === ".request"){
        return "request"
    }
    if (command[0] === "cls") {
        return "cls"
    }
    return "error"
}
