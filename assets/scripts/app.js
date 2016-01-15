var members = [];
var htmlElems = {
    memberNameElem: document.getElementById("name"),
    memberNameWrapperElem: document.getElementById("wrapper-name"),
    memberEmailElem: document.getElementById("email"),
    memberEmailWrapperElem: document.getElementById("wrapper-email"),
    memberPasswordElem: document.getElementById("password"),
    memberPasswordWrapperElem: document.getElementById("wrapper-password"),
    memberButtonElem: document.getElementById("button"),
    membersListElem: document.getElementById("members-list")
};

function submitRegistration() {
    // Gather Input
    var name = htmlElems.memberNameElem.value;
    var email = htmlElems.memberEmailElem.value;
    var password = htmlElems.memberPasswordElem.value;
    // Validate input
    clearFormColor();
    if (!validateInput(name, email, password)) return;
    // Create new Member
    var member = new Member(name, email, password);
    // Push new Member to members Array
    members.push(member);
    // Clear form
    clearForm();
    // Clear members list
    htmlElems.membersListElem.innerHTML = "";
    // Write Members to page
    for (var i = 0; i < members.length; i++) {
        var memberElem = document.createElement('li');
        memberElem.innerText = "Name: " + members[i].name + " Email:" + members[i].email;
        htmlElems.membersListElem.appendChild(memberElem);
    }
}

function validateInput(name, email, password) {
    email = email.toLowerCase();
    // Check for empty fields
    if (!name || !email || !password) {
        if (!name) {htmlElems.memberNameWrapperElem.classList.add("has-error");}
        if (!email) {htmlElems.memberEmailWrapperElem.classList.add("has-error");}
        if (!password) {htmlElems.memberPasswordWrapperElem.classList.add("has-error");}
        htmlElems.memberButtonElem.classList.add("btn-danger");
        alert("Please enter all information")
        return false;
    }
    // Check for duplicate emails
    for(var i=0;i<members.length;i++) {
        if (email == members[i].email) {
            alert("Please use a different Email");
            htmlElems.memberEmailWrapperElem.classList.add("has-error");
            return false;
        }
    }
    
    return true;
}
function clearForm() {
    htmlElems.memberNameElem.value = "";
    htmlElems.memberEmailElem.value = "";
    htmlElems.memberPasswordElem.value = "";
    clearFormColor();
}
function clearFormColor() {
    htmlElems.memberButtonElem.classList.remove("btn-danger");
    htmlElems.memberPasswordWrapperElem.classList.remove("has-error");
    htmlElems.memberEmailWrapperElem.classList.remove("has-error");
    htmlElems.memberNameWrapperElem.classList.remove("has-error");
}

function Member(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.hasDiscount = false;
}