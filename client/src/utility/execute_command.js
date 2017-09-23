
export const executeCommand = (command, callback) => {
    const parameter = command[0]
    const request = command[1]

    if (parameter === "docs" || parameter === "help" ||  parameter === ".help" ||  parameter === ".docs"){
        return "docs"
    }
    if ((request === "get" && parameter === ("contact")) || parameter === ".contact"){
        return "contact"
    }
    if ((request === "get" && parameter === "services") || parameter === ".services"){
        return "services"
    }
    if ((request === "get" && parameter === "portfolio") || parameter === ".portfolio"){
        return "portfolio"
    }
    if ((request === "post" && parameter === "request") || parameter === ".request"){
        return "request"
    }
    if (parameter === "cls") {
        return "cls"
    }
    return "error"
}
