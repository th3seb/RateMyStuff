import A from "./framework/a.js";
import Br from "./framework/br.js";
import Button from "./framework/button.js";
import Div from "./framework/div.js";
import Headings from "./framework/headings.js";
import Paragraph from "./framework/p.js";
import InText from "./framework/text.js";
import { CSSPropertiesMap } from "./framework/types.js";

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
    color: "#3e9988"
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
    cursor: "pointer"
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
    "background-color": "white"
};

const subSubMainStyleConfig: CSSPropertiesMap = {
    border: "1px solid #2b525a",
    "border-radius": "100px",
    width: "400px",
    height: "400px",
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
    width: "450px",
    height: "450px",
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
    width: "600px",
    height: "600px",
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
    color: "#3e9988"
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
    cursor: "pointer"
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

const title = Headings.H3("Login");
const name = InText().addAttribute("placeholder", "Enter your Username").addAttribute("id", "name");
const password = InText().addAttribute("placeholder", "Enter your Password").addAttribute("id", "password").addAttribute("type", "password");
const loginButton = Button("Sign in").addAttribute("id", "loginButton");
const register = phone.matches
    ? Paragraph("Don't have an account?", Br(), A("Register now!").addAttribute("href", "/register").addStyleFromConfig(linkPhoneStyleConfig))
          .addStyle("font-family", "Helvetica, sans-serif")
          .addStyle("color", "black")
    : Paragraph("Don't have an account?", Br(), A("Register now!").addAttribute("href", "/register").addStyleFromConfig(linkStyleConfig)).addStyle(
          "font-family",
          "Helvetica, sans-serif"
      );

const main = Div();
if (phone.matches) {
    name.addStyleFromConfig(textPhoneStyleConfig);
    password.addStyleFromConfig(textPhoneStyleConfig);
    loginButton.addStyleFromConfig(buttonPhoneStyleConfig);
    title.addStyleFromConfig(titlePhoneStyleConfig);

    const divLogin = Div(title, Br(), name, Br(), password, Br(), loginButton, register).addStyleFromConfig(LoginPhoneStyleConfig);
    main.appendChild(divLogin).addStyle("margin", "0 auto").addStyle("text-align", "center").addStyleFromConfig(mainPhoneStyleConfig);

    body.style.background = "#347582";
} else {
    name.addStyleFromConfig(textStyleConfig);
    password.addStyleFromConfig(textStyleConfig);
    loginButton.addStyleFromConfig(buttonStyleConfig);
    title.addStyleFromConfig(titleStyleConfig);

    const divLogin = Div(Div(title, Br(), name, Br(), password, Br(), loginButton).addStyleFromConfig(LoginStyleConfig), register).addStyleFromConfig(
        divStyleConfig
    );
    const subSubMain = Div(divLogin).addStyleFromConfig(subSubMainStyleConfig);
    const subMain = Div(subSubMain).addStyleFromConfig(subMainStyleConfig);
    main.appendChild(subMain).addStyleFromConfig(mainStyleConfig);

    body.style.background = "linear-gradient(45deg, #3e9988, #2b525a)";
}

//Funktionalität
loginButton.addEventListener("click", async () => {
    const res = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: name.getValue(),
            password: password.getValue()
        })
    });
    if ((await res.text()) === "false") {
        alert("User not found!");
        return;
    }
    window.location.href = res.url;
});

body.appendChild(main.getComponent());
