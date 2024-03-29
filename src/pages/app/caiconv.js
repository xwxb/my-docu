import React, { useEffect } from 'react';

function ScriptComponent({ html }) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function ConvMain() {
    useEffect(() => {
        const fun = () => {

            function onChange(event) {
                var reader = new FileReader();
                reader.onload = onReaderLoad;
                reader.readAsText(event.target.files[0]);
            }

            function onReaderLoad(event) {
                try {
                    var obj = JSON.parse(event.target.result);
                    const user_name = document.getElementById('user_name')?.value || 'You';
                    const bot_name = document.getElementById('bot_name')?.value || 'Bot';

                    const characterInfo = {
                        "char_name": "",
                        "char_persona": "",
                        "char_greeting": "",
                        "world_scenario": "",
                        "example_dialogue": ""
                    };


                    characterInfo.char_name = obj.info.character.name;
                    characterInfo.char_persona = obj.info.character.description;
                    characterInfo.char_greeting = obj.info.character.greeting;

                    document.getElementById('character_info').innerHTML = "";

                    var data1 = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(characterInfo));

                    var a1 = document.createElement('a');
                    a1.href = 'data:' + data1;
                    a1.download = `${bot_name}_info.json`;
                    a1.innerHTML = `${bot_name} Info JSON`;

                    var container1 = document.getElementById('character_info');

                    container1.appendChild(a1);



                    // console.log(user_name);
                    // console.log(bot_name);
                    // console.log(obj);

                    document.getElementById('container').innerHTML = "";
                    obj?.histories?.histories.forEach((history, idx) => {
                        const chatObj = {
                            chat: []
                        }
                        history.msgs.map(v => {
                            if (v.src.is_human) {
                                chatObj.chat.push(`${user_name}: ${v.text}`);
                            } else {
                                chatObj.chat.push(`${bot_name}: ${v.text}`);
                            }
                        })

                        var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(chatObj));

                        var a = document.createElement('a');
                        a.href = 'data:' + data;
                        a.download = `${bot_name}_conversation.json`;
                        a.innerHTML = `${bot_name} conversation(${idx + 1}) JSON`;

                        var container = document.getElementById('container');

                        container.appendChild(a);

                    })


                } catch (error) {
                    console.log(error);
                    // alert('error')
                }

            }
            document.getElementById('myFile').addEventListener('change', onChange);
        };
        fun();
      }, []);

    return (
        <div>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    .form {\n        display: flex;\n        width: 300px;\n        flex-direction: column;\n    }\n\n    .input {\n        margin-bottom: 5px;\n    }\n\n    #container {\n        display: flex;\n        flex-direction: column;\n\n    }\n\n    #container>a {\n        margin-bottom: 5px;\n    }\n"
                }}
            />
            <body>
                <form action="/action_page.php">
                    <div className="form">
                        Write you name here (default "You"):
                        <input
                            className="input"
                            type="input"
                            id="user_name"
                            name="you name"
                            placeholder="you name"
                        />
                        Write you bot here (default "Bot"):
                        <input
                            className="input"
                            type="input"
                            id="bot_name"
                            name="bot name"
                            placeholder="bot name"
                        />
                        <input className="input" type="file" id="myFile" name="filename" />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* links goes here */}
                    Conversations:
                    <div id="container"></div>
                    Character info:
                    <div id="character_info"></div>
                </form>
            </body>
        </div>
    );
}

export default ConvMain;
