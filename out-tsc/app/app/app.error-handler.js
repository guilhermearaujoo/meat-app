import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handleError = function (error) {
        var errorMessage;
        if (error instanceof HttpErrorResponse) {
            var body = error.error;
            errorMessage = "Erro ".concat(error.status, " ao acessar a URL ").concat(error.url, " - ").concat(error.statusText || '', " ").concat(body);
        }
        else {
            errorMessage = error.message ? error.message : error.toString();
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    };
    return ErrorHandler;
}());
export { ErrorHandler };
//# sourceMappingURL=app.error-handler.js.map