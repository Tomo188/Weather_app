import "./forecast.css"
import { Accordion, AccordionItemButton, AccordionItem, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import { useState } from "react";
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
export const Forecast = ({ data }) => {
    const [show, setShow] = useState(false)

    const dayInAWeek = new Date().getDay()
    const week = weekDays.slice(dayInAWeek, weekDays.length).concat(weekDays.slice(0, dayInAWeek))

    const list = data.forecast?.list

    console.log(list)
    return (<>
        {list ? <label className="tittle" onClick={() => {
            setShow(!show)
        }}>{show ? "close" : "Show Daily:"}</label> : ''}

        {show ? list && <Accordion allowZeroExpanded={true}>
            {list.slice(0, 7).map((item, indx) => {

                return <AccordionItem className="index" acordion-aria-controls="accordion__panel-raa-11">
                    <AccordionItemHeading>
                        <AccordionItemButton>

                            <div className="daily-item" >
                                <img className="icon-small" src={`icon/${item.weather[0].icon}.png`} alt="weather small logo" />
                                <label className="day">{week[indx]}</label>
                                <label className="description">{item.weather[0].description}</label>
                                <label className="min-max">{Math.round(item.main.temp_min)}&#8451; / {Math.round(item.main.temp_max)}&#8451;</label>
                            </div>


                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="daily-details-grid">
                            <div className="daily-details-grid-item">
                                <label htmlFor="">Pressure</label>
                                <label>{item.main.pressure}</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label htmlFor="">Humidity:</label>
                                <label>{item.main.humidity}</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label htmlFor="">Wind:</label>
                                <label>{item.wind.speed}</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label htmlFor="">Feels like:</label>
                                <label>{item.main.feels_like}&#8451;</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label htmlFor="">Sea level:</label>
                                <label>{item.main.sea_level}m</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label htmlFor="">Clouds</label>
                                <label>{item.clouds.all}</label>
                            </div>

                        </div>
                    </AccordionItemPanel>
                </AccordionItem>

            })} </Accordion> : ''}</>)
}