export const validateCommand = (str) => {
    const input = str.split('(');
    let command;
    let request;

    if (input.length > 1 && input[0].includes('.')){
        request = input[0].split('.');
        request = request[1].substring(0, input[1].length - 1).trim().toLowerCase();
        command = input[1].substring(0, input[1].length - 1).trim().toLowerCase();

        return [command, request]
    }
    return [input[0].trim().toLowerCase()]
}
