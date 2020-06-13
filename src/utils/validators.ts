import { AsyncValidatorFn, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

export function usernameExists(userService: UserDataService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        return userService.usernameIsAvailable(control.value).pipe(map((
            response) => {
            return (response["exists"]) ? { exists: true } : null;
        })
        );
    };
}

export function emailExists(userService: UserDataService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        return userService.emailIsAvailbable(control.value).pipe(map((
            response) => {
            return (response["exists"]) ? { exists: true } : null;
        })
        );
    };
}

export function checkPasswords(group: FormGroup) {
    let pass = group.get('password').value;
    let confirmPass = group.get('c_password').value;

    return pass === confirmPass ? null : { unmatch: true }
}