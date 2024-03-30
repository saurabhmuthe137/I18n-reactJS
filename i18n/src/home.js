import "../src/home.css"
import I18n from "./i18n";

function Home() {
    const myAge = 19;

    return (
        <center>
            <div>
                <select
                    defaultValue={localStorage.getItem("lang")}
                    onChange={(e) => {
                        localStorage.setItem("lang", e.target.value);
                        window.location.reload();
                    }}>
                    <option value="en">English</option>
                    <option value="mr">Marathi</option>
                    <option value="hi">Hindi</option>
                </select>
                <h1>{I18n("welcomeMessage")}</h1>
                <h2>{I18n("normalMessage")}</h2>
                <h2>{I18n("usersStatmessage", "<age>", myAge)}</h2>
                <h3>{I18n("endMessage")}</h3>
            </div>
        </center>
    )
}
export default Home