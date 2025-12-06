const maintenance = document.createElement('div')
maintenance.className = 'maintence';

maintenance.innerHTML = `
    <div class="top_bar">
        <div class="logo">
            <h1>ぐがと</h1>
            <p>Germany</p>
        </div>

        <a href="../index.html" class="return_link"><img src="../assets/imgs/return_icon.svg" alt="Return"></a>
    </div>

    <div class="panel">
        <h1>In Maintenance...</h1>
    </div>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            /* border: 1px solid red; */

        }

        body {
            background-image: url(..assets/imgs/bg.jpg);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            background-color: black;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .panel {
            margin-top: 15em;
            width: fit-content;
            text-align: center;
            color: whitesmoke;
            font-family: "Lexend Zetta", sans-serif;
            padding: 2em;
            border: 1px solid rgba(255, 255, 255, 0.70);
            border-radius: 15px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.70);
            backdrop-filter: blur(70px);
            -webkit-backdrop-filter: blur(70px);
        }

        .top_bar {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 3em;
        }

        .logo {
            display: flex;
            align-items: center;
            align-self: flex-start;
            font-family: "Lexend Zetta", sans-serif;
            color: whitesmoke;
        }

        .logo p {
            display: inline;
            text-align: center;
            height: fit-content;
            padding-left: 1.5em;
            font-size: large;
        }

        .logo h1 {
            border-right: 1px solid whitesmoke;
            padding-right: .5em;
            writing-mode: vertical-lr;
        }

        .return_link {
            justify-content: center;
            margin-left: auto;
        }
    </style>
`;

document.body.append(maintenance);

console.log("Maintenance page loaded...")

