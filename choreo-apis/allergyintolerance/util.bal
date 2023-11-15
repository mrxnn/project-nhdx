import ballerina/log;
import ballerinax/health.fhir.r4;

isolated function isSuccessCode(int statusCode) returns boolean {
    if statusCode >= 200 && statusCode <= 299 {
        return true;
    }
    return false;
}

isolated function handleError(string message, error|json e, int statusCode) returns r4:FHIRError {
    if e is error {
        log:printError(message + ": ", e);
        return r4:createFHIRError(message, r4:ERROR, r4:PROCESSING, cause = e, httpStatusCode = statusCode);
    } else {
        log:printDebug(message + ": " + e.toString());
        return r4:createFHIRError(message, r4:ERROR, r4:PROCESSING, cause = error(message), httpStatusCode = statusCode);
    }
}
