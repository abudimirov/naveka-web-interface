import React, { Component } from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function saveNetworkSettings(e) {
    e.preventDefault();
    console.log('Настройки сети переданы.');
    var ssid = document.getElementById("ssid").value;
    var password = document.getElementById("password").value;
    var data = {ssid:ssid, password:password};
    console.log(data);
    var xhr = new XMLHttpRequest();
    var url = "/";

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            if(xhr.responseText != null){
                console.log(xhr.responseText);
            }
        }
    }
    ;
    xhr.open("POST", url, true);
    xhr.send(JSON.stringify(data));
}

class Wifi extends Component {
    render() {
        return (
            <div>
                <h1 className="mt-3 mb-3">Подключение к Wi-Fi</h1>
                <Jumbotron>
                    <p>Подключите установку к домашней сети Wi-Fi и сможете управлять устройством удаленно.</p>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="label-ssid">Имя сети (SSID)</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="SSID"
                            aria-label="SSID"
                            aria-describedby="basic-addon1"
                            id="ssid"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="label-password">Пароль сети</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Пароль"
                            aria-label="Пароль"
                            aria-describedby="basic-addon1"
                            id="password"
                        />
                    </InputGroup>
                    <Button variant="success" size="lg" block onClick={saveNetworkSettings}>
                        Сохранить
                    </Button>
                </Jumbotron>
            </div>
        );
    }
}

export default Wifi;