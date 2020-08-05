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
                    <Setting name="Параметр 7" short_description="Основной регулятор Tqut " full_description=""/>
                    <Setting name="Параметр 8" short_description="Т наружного воздуха для перехода в режим «нагревание» " full_description=""/>
                    <Setting name="Параметр 9" short_description="Т наружного воздуха для перехода в режим «охлаждение» " full_description=""/>
                    <Setting name="Параметр 10" short_description="Авторежим управления вентилятором " full_description=""/>
                    <Setting name="Параметр 11" short_description="Минимальная скорость вращения ЭД вентилятора, % " full_description=""/>
                    <Setting name="Параметр 12" short_description="Максимальная скорость вращения ЭД вентилятора, % " full_description=""/>
                    <Setting name="Параметр 13" short_description="Время прогрева/продувки ЖТ/ЭТ, сек " full_description=""/>
                    <Setting name="Параметр 14" short_description="Мин значение темп-ры воздуха в приточном канале " full_description=""/>
                    <Setting name="Параметр 15" short_description="Период ШИМ, сек " full_description=""/>
                    <Setting name="Параметр 16" short_description="Т отработанного теплоносителя пусковая " full_description=""/>
                    <Setting name="Параметр 17" short_description="Т отработанного теплоносителя аварийная, замерзания " full_description=""/>
                    <Setting name="Параметр 18" short_description="Т отработанного теплоносителя для дежурного режима " full_description=""/>
                    <Setting name="Параметр 19" short_description="Цикл включения и отключения ККБ, минуты " full_description=""/>
                    <Setting name="Параметр 20" short_description="Гистерезис охладителя, С " full_description=""/>
                    <Setting name="Параметр 21" short_description="Максимальное кол-во скоростей вентилятора  " full_description=""/>
                    <Setting name="Параметр 22" short_description="Вывод надписи Fan Speed" full_description=""/>
                    <Setting name="Параметр 23" short_description="Вывод надписи Auto" full_description=""/>
                    <Setting name="Параметр 24" short_description="Режим работы панели " full_description=""/>
                    <Setting name="Параметр 25" short_description="Выбор точки измерения температуры " full_description=""/>
                    <Setting name="Параметр 26" short_description="Точка измерений Влажности" full_description=""/>
                    <Setting name="Параметр 27" short_description="Минимальная температура (SET) от 0 до 63 " full_description=""/>
                    <Setting name="Параметр 28" short_description="Максимальная температура (SET) до 0 до 63 " full_description=""/>
                    <Button variant="primary" size="lg" block>
                        Записать все параметры
                    </Button>
                </Jumbotron>
            </div>
        );
    }
}

export default Settings;