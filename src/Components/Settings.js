import React, { Component } from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import Setting from "./Setting";

const popover = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Номер технологической схемы</Popover.Title>
        <Popover.Content>
           Основной параметр конфигурации, определяющий логику поведения ПЛК при исполнении программы.
        </Popover.Content>
    </Popover>
);

class Settings extends Component {
    render() {
        return (
            <div>
                <h1 className="mt-3 mb-3">Настройки</h1>
                <Alert variant="danger">
                    <Alert.Heading>Изменение данных настроек может привести к необратимым результатам!</Alert.Heading>
                    <p>
                        Настройки в данном разделе предназначены для тонкой настройки работы установки.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Изменяйте параметры согласно инструкции.
                    </p>
                </Alert>
                <Jumbotron>
                    <h2>Параметры</h2>
                    <Setting name="Параметр 4" short_description="Номер технологической схемы" full_description="Основной параметр конфигурации, определяющий логику поведения ПЛК при исполнении программы."/>
                    <Setting name="Параметр 5" short_description="Интегральный коэффициент главного регулятора" full_description=""/>
                    <Setting name="Параметр 6" short_description="Пропорциональный коэффициент главного регулятора" full_description=""/>
                    <Button variant="primary" size="lg" block>
                        Записать все параметры
                    </Button>
                </Jumbotron>
            </div>
        );
    }
}

export default Settings;