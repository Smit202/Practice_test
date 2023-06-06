
handleError(200);
handleError(301);
handleError(304);
handleError(400);
handleError(401);
handleError(403);
handleError(404);
handleError(500);
handleError(250);

function handleError(code) {
    switch (code) {
        case 200:
            console.log("Ok: request has succeeded");
            break;

        case 301:
            console.log("Requested resource has been moved permanently");
            break;
        
        case 304:
            console.log("Not modified");
            break;

        case 400:
            console.log("Bad request");
            break;

        case 401:
            console.log("Unauthorized request");
            break;

        case 403:
            console.log("Forbidden");
            break;

        case 404:
            console.log("Resource not found in this server!");
            break;

        case 500:
            console.log("Internal server error");
            break;

        default:
            console.log("Invalid status code");
            break;
    }
}