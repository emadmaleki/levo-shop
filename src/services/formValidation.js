import { existUser } from "../utils/helpers";

export let checkOutformValidation = (fullname = null, phone = null, address = null) => {
    let errMsg = '';
    let resFullname = vName(fullname);
    let resPhone = vPhone(phone);
    let resAdress = vAddress(address);
    let resFields = vFields(fullname, phone, address);
    if (resFields.res) {
        if (resFullname.res) {
            if (resPhone.res) {
                if (resAdress.res) {
                    return true;
                } else {
                    errMsg = resAdress.detail;
                }
            } else {
                errMsg = resPhone.detail;
            }
        } else {
            errMsg = resFullname.detail;
        }
    } else {
        errMsg = resFields.detail;
    }
    return errMsg;
}
export let RegisterformValidation = (firstName = null, lastName = null, email = null, password = null) => {
    let errMsg = '';
    let resFirstName = vName(firstName);
    let resLastName = vName(lastName);
    let resEmail = vEmail(email);
    let resPassword = vPassword(password);
    let resFields = vFields(firstName, lastName, email, password);

    if (resFields.res) {
        if (resFirstName.res) {
            if (resLastName.res) {
                if (resEmail.res) {
                    if (resPassword.res) {
                        return true;
                    } else {
                        errMsg = resPassword.detail;
                    }
                } else {
                    errMsg = resEmail.detail;
                }
            } else {
                errMsg = resLastName.detail;
            }
        } else {
            errMsg = resFirstName.detail;
        }
    } else {
        errMsg = resFields.detail;
    }
    return errMsg;
}
export let LoginformValidation = (email = null, password = null) => {
    let errMsg = '';
    let resEmail = vEmail(email);
    let resPassword = vPassword(password);
    let resFields = vFields(email, password);

    if (resFields.res) {
        if (resEmail.res) {
            if (resPassword.res) {
                return true;
            } else {
                errMsg = resPassword.detail;
            }
        } else {
            errMsg = resEmail.detail;
        }
    } else {
        errMsg = resFields.detail;
    }
    return errMsg;
}
export let vName = (text) => {
    let responce = { res: false, detail: null };
    if (text.trim() != '') {
        responce.res = true;
    } else {
        responce.detail = 'Please fill in your Name!';
    }
    return responce;
}
export let vEmail = (email) => {
    let responce = { res: false, detail: null };
    let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.trim() != '') {
        if (email.match(pattern)) {
            responce.res = true;
        } else {
            responce.detail = 'Please enter the correct email!';
        }
    } else {
        responce.detail = 'Please fill in your email!';
    }

    return responce;
}
export let vPassword = (pass) => {
    let responce = { res: false, detail: null };

    if (pass.trim() != '') {
        if (pass.length >= 8) {
            responce.res = true;
        } else {
            responce.detail = 'Password must be more than 8 characters!';
        }
    } else {
        responce.detail = 'Please fill in your password!';
    }
    return responce;
}
export let vPhone = (phone) => {
    let responce = { res: false, detail: null };
    let pattern = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/g;

    if (phone.trim() != '') {
        if (phone.match(pattern)) {
            responce.res = true;
        } else {
            responce.detail = 'Please enter the correct phone!';
        }
    } else {
        responce.detail = 'Please fill in your phone!';
    }

    return responce;
}
export let vAddress = (address) => {
    let responce = { res: false, detail: null };

    if (address.trim() != '') {
        if (address.length >= 12 && address.length <= 60) {
            responce.res = true;
        } else {
            responce.detail = 'The address must be more than 12 and less than 60 characters!';
        }
    } else {
        responce.detail = 'Please fill in your Address!';
    }
    return responce;
}
export let vAge = (age) => {
    let responce = { res: false, detail: null };

    if (age.trim() != '') {
        if (age <= 120) {
            responce.res = true;
        } else {
            responce.detail = 'Enter your age correctly!';
        }
    } else {
        responce.detail = 'Please fill in your age!';
    }
    return responce
}
export let vFields = (...fields) => {
    let responce = { res: false, detail: null };

    fields.map(field => {
        if (field.trim() != '') {
            responce.res = true;
        } else {
            responce.detail = 'Please fill in the fields!';
        }
    });

    return responce;
}