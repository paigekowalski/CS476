function SignUpForm(event){
    var elements = event.currentTarget;

    var a = elements[0].value;  //fieldset
    var b = elements[1].value;  //username
    var c = elements[2].value;  //first name
    var d = elements[3].value;  //last name
    var e = elements[4].value;  //id
    var f = elements[5].value;  //email
    var g = elements[6].value;  //password
    var h = elements[7].value;  //confirm password

    var result = true;

    var email_v = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var pass_v = /(?=.*\d)(?=.*[\W\S]).{8,}/;


    document.getElementById("signup_em_msg").innerHTML = "";
    document.getElementById("signup_uname_msg").innerHTML = "";
    document.getElementById("signup_fname_msg").innerHTML = "";
    document.getElementById("signup_lname_msg").innerHTML = "";
    document.getElementById("signup_pss_msg").innerHTML = "";
    document.getElementById("signup_cpss_msg").innerHTML = "";

    //EMAIL CHECK
    if(b == null || b == "" || !email_v.test(b))
    {
        document.getElementById("signup_em_msg").innerHTML = "Email: Improper format or empty";
        result = false;
    }

    //USERNAME CHECK
    if(c == null || c == "")
    {
        document.getElementById("signup_uname_msg").innerHTML = "Username is empty";
        result = false;
    }

    //FIRST NAME CHECK
    if(d == null || d == "")
    {
        document.getElementById("signup_fname_msg").innerHTML = "First name is empty";
        result = false;
    }

    //LAST NAME CHECK
    if(e == null || e == "")
    {
        document.getElementById("signup_lname_msg").innerHTML = "Last Name is empty";
        result = false;
    }

    //PASSWORD CHECK
    if(f == null || f == "" || !pass_v.test(f))
    {
        document.getElementById("signup_pss_msg").innerHTML = "Password: does not meet requirements";
        result = false;
    }

    //CONFIRM PASSWORD CHECK
    if(g == null || g == "")
    {
        document.getElementById("signup_cpss_msg").innerHTML = "Confirm Password is Empty";
        result = false;
    } else if(g != null && g != "" && g != f)
    {
        document.getElementById("signup_cpss_msg").innerHTML = "Comfirm password does not match password";
        result = false;
    }

    if(result == false)
    {
        event.preventDefault();
    }
}

function LoginForm(event)
{
    var elements = event.currentTarget;

    var a = elements[0].value; //fieldset
    var b = elements[1].value; //email
    var c = elements[2].value; //password

    var results = true;

    var pass_v = /(?=.*\d)(?=.*[\W\S]).{8,}/;
    var email_v = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    document.getElementById("login_em").innerHTML = "";
    document.getElementById("login_pss").innerHTML = "";
    
    //EMAIL CHECK
    if(b == null || b == "" || !email_v.test(b))
    {
        document.getElementById("login_em_msg").innerHTML = "email is incorrect format/empty";
        result = false;
    }

    if(c == null || c == "" || !pass_v.test(c))
    {
        document.getElementById("login_pss_msg").innerHTML = "password is incorrect/empty";
        result = false;
    }

    if(result == false)
    {
        event.preventDefault();
    }


document.getElementById("signup").addEventListener("submit", SignUpForm, false);
document.getElementById("login").addEventListener("submit", LoginForm, false);
document.getElementById("reset").addEventListener("reset", ResetForm, false);