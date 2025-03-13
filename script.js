function validEmail(str) {
    // Empty string edge case
    if (!str) return false;

    // Email regex pattern
    const emailPattern = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+$/;
    return emailPattern.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
