import React from "react";
import load from "../img/load.gif"
import { useSelector } from 'react-redux'

const QuoteBlock = (props) => {
    const { loading } = useSelector((state) => state.loading)
    const { data } = useSelector((state) => state.data)
    const { bgColor } = useSelector((state) => state.bgColor)
    return (
        <div>
            <div className="container-fluid" style={{ backgroundColor: bgColor }}>
                <div className="card d-flex align-items-center w-100 p-3 p-sm-4 p-xl-5">
                    <div className="row flex-grow-1">
                        <div className="col text-center align-self-center">
                            <div className="row">
                                <div className="col text-center">
                                    <p id="quote" className="text-center fs-4 fw-bold transition-color" style={{ color: bgColor }}>
                                        {loading == false ? data.quote : <a target="_blank" href="https://icons8.com/icon/H6C79JoP90DH/settings"><img src={load} style={{ width: 100 }} /></a>}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <p id="author" className="text-center fs-5 transition-color" style={{ color: bgColor }}>
                                        {loading == false ? `- ${data.author}` : null}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row w-100 h-25">
                        <div className="col-12 align-self-end mb-2">
                            <div className="row justify-content-between">
                                <div className="col-2 text-start align-self-center">
                                    <a href={data ? `https://twitter.com/intent/tweet?text=` + data.quote + ` - ${data.author}` : '#'} target="_blank" title="Tweet Quote">
                                        <i className="fab fa-twitter fs-1 transition-color" style={{ color: bgColor }}></i>
                                    </a>
                                </div>
                                <div className="col-10 text-end align-self-center">
                                    <button onClick={props.newQuote} id="new-quote" className="btn transition-bg" style={{ backgroundColor: bgColor, color: 'white' }}>New Quote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuoteBlock