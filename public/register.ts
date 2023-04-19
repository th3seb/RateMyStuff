import A from "./framework/a.js";
import { HTML } from "./framework/base.js";
import Br from "./framework/br.js";
import Button from "./framework/button.js";
import Div from "./framework/div.js";
import Headings from "./framework/headings.js";
import Paragraph from "./framework/p.js";
import InText from "./framework/text.js";
import { CSSPropertiesMap } from "./framework/types.js";

function check(object: HTML, method: () => void) {
    object.addEventListener("input", method);
    object.addEventListener("change", method);
    object.addEventListener("keypress", method);
    object.addEventListener("paste", method);
}

const linkStyleConfig: CSSPropertiesMap = {
    color: "#ffad0a",
    "text-decoration": "none",
    "font-family": "Helvetica, sans-serif"
};

const titleStyleConfig: CSSPropertiesMap = {
    "font-family": "Helvetica, sans-serif",
    "font-weight": "bold",
    margin: "0px",
    padding: "0px",
    "text-align": "left",
    cursor: "default",
    color: "#347582"
};

const textStyleConfig: CSSPropertiesMap = {
    padding: "10px",
    width: "275px",
    border: "1px solid rgb(38, 96, 86, 0.2)",
    "margin-top": "10px",
    "font-family": "Helvetica, sans-serif",
    "border-radius": "5px",
    "font-size": "0.9em"
};

const buttonStyleConfig: CSSPropertiesMap = {
    padding: "10px",
    border: "1px solid rgb(38, 96, 86, 0.2)",
    width: "100%",
    "font-family": "Helvetica, sans-serif",
    "border-radius": "5px",
    "margin-top": "25px",
    "background-color": "#2b525a",
    "font-size": "16px",
    color: "white",
    cursor: "pointer",
    "text-decoration": "none"
};
const buttonDisabledStyleConfig: CSSPropertiesMap = {
    padding: "10px",
    border: "1px solid #5b5b5b",
    width: "100%",
    "font-family": "Helvetica, sans-serif",
    "border-radius": "5px",
    "margin-top": "25px",
    "background-color": "#5b5b5b",
    "font-size": "16px",
    color: "white",
    cursor: "not-allowed",
    "text-decoration": "line-through"
};

const divStyleConfig: CSSPropertiesMap = {
    transform: "translate(-50%, -50%) rotate(-78.75deg)",
    position: "absolute",
    top: "50%",
    left: "50%",
    color: "white"
};

const LoginStyleConfig: CSSPropertiesMap = {
    width: "300px",
    padding: "20px",
    border: "1px solid #e3e5e5",
    "border-radius": "10px",
    "background-color": "white",
    "box-shadow": "0px 0px 10px 1px #444444"
};

const subSubMainStyleConfig: CSSPropertiesMap = {
    border: "1px solid #2b525a",
    "border-radius": "100px",
    width: "450px",
    height: "450px",
    transform: "translate(-50%, -50%) rotate(11.25deg)",
    "text-align": "center",
    top: "50%",
    left: "50%",
    position: "absolute",
    "background-color": "#2b525a",
    "box-shadow": "0px 0px 10px 0px #2b525a"
};

const subMainStyleConfig: CSSPropertiesMap = {
    border: "1px solid #347582",
    "border-radius": "100px",
    width: "525px",
    height: "525px",
    transform: "translate(-50%, -50%) rotate(22.5deg)",
    "text-align": "center",
    top: "50%",
    left: "50%",
    position: "absolute",
    "background-color": "#347582",
    "box-shadow": "0px 0px 10px 0px #347582"
};

const mainStyleConfig: CSSPropertiesMap = {
    border: "1px solid #ffad0a",
    "border-radius": "150px",
    width: "650px",
    height: "650px",
    transform: "translate(-50%, -50%) rotate(45deg)",
    "text-align": "center",
    top: "50%",
    left: "50%",
    position: "absolute",
    "background-color": "#ffad0a",
    "box-shadow": "0px 0px 10px 0px #ffad0a"
};

//Phone Styles

const LoginPhoneStyleConfig: CSSPropertiesMap = {
    transform: "translate(-50%,-50%) rotate(-10deg)",
    position: "absolute",
    left: "50%",
    top: "50%",
    width: "200px",
    padding: "20px",
    border: "1px solid #e3e5e5",
    "border-radius": "10px",
    "background-color": "white",
    "box-shadow": "0px 0px 10px 0px #2b525a"
};

const titlePhoneStyleConfig: CSSPropertiesMap = {
    "font-family": "Helvetica, sans-serif",
    "font-weight": "bold",
    margin: "0px",
    padding: "0px",
    cursor: "default",
    color: "#347582"
};

const textPhoneStyleConfig: CSSPropertiesMap = {
    padding: "10px",
    width: "175px",
    border: "1px solid rgb(38, 96, 86, 0.2)",
    "margin-top": "10px",
    "font-family": "Helvetica, sans-serif",
    "border-radius": "5px",
    "font-size": "0.9em"
};

const buttonPhoneStyleConfig: CSSPropertiesMap = {
    padding: "10px",
    border: "1px solid rgb(38, 96, 86, 0.2)",
    width: "100%",
    "font-family": "Helvetica, sans-serif",
    "border-radius": "5px",
    "margin-top": "25px",
    "background-color": "#2b525a",
    "font-size": "16px",
    color: "white",
    cursor: "pointer",
    "text-decoration": "none"
};

const buttonDisabledPhoneStyleConfig: CSSPropertiesMap = {
    padding: "10px",
    border: "1px solid #5b5b5b",
    width: "100%",
    "font-family": "Helvetica, sans-serif",
    "border-radius": "5px",
    "margin-top": "25px",
    "background-color": "#5b5b5b",
    "font-size": "16px",
    color: "white",
    cursor: "not-allowed",
    "text-decoration": "line-through"
};

const linkPhoneStyleConfig: CSSPropertiesMap = {
    color: "#2b525a",
    "text-decoration": "none",
    "font-family": "Helvetica, sans-serif"
};

const mainPhoneStyleConfig: CSSPropertiesMap = {
    width: "1000px",
    height: "400px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(10deg)",
    "background-color": "#2b525a",
    "box-shadow": "0px 0px 10px 0px #347582",
    "border-radius": "10px"
};

const phone = window.matchMedia("(max-width: 600px)");
const body = document.querySelector("body");

const title = Headings.H3("Register");
const name = InText().addAttribute("placeholder", "Enter your Username").addAttribute("id", "name");
const password = InText().addAttribute("placeholder", "Enter your Password").addAttribute("id", "password").addAttribute("type", "password");
const passwordConfirm = InText()
    .addAttribute("placeholder", "Confirm your Password")
    .addAttribute("id", "password2")
    .addAttribute("type", "password");
const registerButton = Button("Sign Up").addAttribute("id", "registerButton");
const login = phone.matches
    ? Paragraph("Already have an account?", Br(), A("Login now!").addAttribute("href", "/login").addStyleFromConfig(linkPhoneStyleConfig))
          .addStyle("font-family", "Helvetica, sans-serif")
          .addStyle("color", "black")
    : Paragraph("Already have an account?", Br(), A("Login now!").addAttribute("href", "/login").addStyleFromConfig(linkStyleConfig)).addStyle(
          "font-family",
          "Helvetica, sans-serif"
      );
const textUsername = Paragraph("This Username is already taken!")
    .addStyleFromConfig({
        color: "red",
        "font-family": "Helvetica, sans-serif",
        "text-decoration": "underline",
        display: "none",
        margin: "0px",
        padding: "0px",
        "margin-top": "5px",
        "font-size": "0.8em"
    })
    .addAttribute("id", "textUsername");

const main = Div();
if (phone.matches) {
    name.addStyleFromConfig(textPhoneStyleConfig);
    password.addStyleFromConfig(textPhoneStyleConfig);
    passwordConfirm.addStyleFromConfig(textPhoneStyleConfig);
    registerButton.addStyleFromConfig(buttonPhoneStyleConfig);
    title.addStyleFromConfig(titlePhoneStyleConfig);

    const divRegister = Div(title, Br(), name, textUsername, password, passwordConfirm, Br(), registerButton, login).addStyleFromConfig(
        LoginPhoneStyleConfig
    );
    main.appendChild(divRegister).addStyle("margin", "0 auto").addStyle("text-align", "center").addStyleFromConfig(mainPhoneStyleConfig);

    body.style.background = "#347582";
} else {
    name.addStyleFromConfig(textStyleConfig);
    password.addStyleFromConfig(textStyleConfig);
    passwordConfirm.addStyleFromConfig(textStyleConfig);
    registerButton.addStyleFromConfig(buttonStyleConfig);
    title.addStyleFromConfig(titleStyleConfig);

    const divRegister = Div(
        Div(title, Br(), name, textUsername, password, passwordConfirm, Br(), registerButton).addStyleFromConfig(LoginStyleConfig),
        login
    ).addStyleFromConfig(divStyleConfig);
    const subSubMain = Div(divRegister).addStyleFromConfig(subSubMainStyleConfig);
    const subMain = Div(subSubMain).addStyleFromConfig(subMainStyleConfig);
    main.appendChild(subMain).addStyleFromConfig(mainStyleConfig);

    body.style.background = "linear-gradient(45deg, #3e9988, #2b525a)";
}

const checkUsername = async () => {
    const value = name.getValue();

    const text = await (
        await fetch("/register/checkUsername", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: value })
        })
    ).text();
    if (text === "true" && value.length > 0) {
        name.addStyle("border", "1px solid green");
        registerButton.removeAttribute("disabled");
        phone.matches ? registerButton.addStyleFromConfig(buttonPhoneStyleConfig) : registerButton.addStyleFromConfig(buttonStyleConfig);
        textUsername.addStyle("display", "none");
    } else {
        if (!(value.length === 0)) {
            textUsername.addStyle("display", "block");
        }
        name.addStyle("border", "1px solid red");
        registerButton.addAttribute("disabled");
        phone.matches
            ? registerButton.addStyleFromConfig(buttonDisabledPhoneStyleConfig)
            : registerButton.addStyleFromConfig(buttonDisabledStyleConfig);
    }
};

const checkPassword = () => {
    if (password.getValue() === passwordConfirm.getValue() && password.getValue().length > 0) {
        password.addStyle("border", "1px solid green");
        passwordConfirm.addStyle("border", "1px solid green");
        registerButton.removeAttribute("disabled");
        phone.matches ? registerButton.addStyleFromConfig(buttonPhoneStyleConfig) : registerButton.addStyleFromConfig(buttonStyleConfig);
    } else {
        password.addStyle("border", "1px solid red");
        passwordConfirm.addStyle("border", "1px solid red");
        registerButton.addAttribute("disabled");
        phone.matches
            ? registerButton.addStyleFromConfig(buttonDisabledPhoneStyleConfig)
            : registerButton.addStyleFromConfig(buttonDisabledStyleConfig);
    }
};

check(name, checkUsername);
check(password, checkPassword);
check(passwordConfirm, checkPassword);

//Funktionalität
registerButton.addEventListener("click", async () => {
    console.log("click");

    const res = await fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: name.getValue(),
            password: password.getValue()
        })
    });
    window.location.href = res.url;
});

body.appendChild(main.getComponent());
