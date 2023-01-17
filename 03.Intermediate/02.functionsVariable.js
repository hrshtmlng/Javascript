var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin will all access`
            // break;
        case "subadmin":
            return `${name} is sub-admin will gets access to create/delete courses`
            // break;
        case "testprep":
            return `${name} is test-prep will gets access to create/delete test`
            // break;
        case "user":
            return `${name} is user will gets access to consume the content`
            // break;
                                
        default:
            return  `${name} is trial user`
            // break;
    }
} 

console.log(getUserRole("Harshit" ,"admin"));

var getRole = getUserRole("Sammy", "user")

console.log(getRole);