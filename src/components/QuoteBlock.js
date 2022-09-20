import { React, Component } from "react";
import load from "../img/load.gif"

class QuoteBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: this.props.bgColor }}>
                <div className="card p-3 p-sm-4">
                    <wrapper id="quote-box">
                        <div id="quote-text">
                            <h3 id="text" className="text-center fs-3 fs-sm-4">
                                {this.props.loading == false ? this.props.apiData.quote : <a target="_blank" href="https://icons8.com/icon/H6C79JoP90DH/settings"><img src={load} style={{ width: 100 }} /></a>}
                            </h3>
                            <h4 id="author" className="text-center fs-5 fs-sm-6 fw-light mt-2">
                                {this.props.loading == false ? `- ${this.props.apiData.author}` : null}
                            </h4>
                        </div>
                        <div id="buttons" className="m-0">
                            <div>
                                <a onClick={this.props.updateTwitter} href={this.props.twitterLink} target="_blank" title="Tweet Quote">
                                    <i className="fab fa-twitter" style={{ color: 'black' }}></i>
                                </a>
                            </div>
                            <div>
                                <button onClick={this.props.newQuote} id="new-quote" className="btn" style={{ backgroundColor: 'black' }}>New Quote</button>
                            </div>
                        </div>
                    </wrapper>
                </div>
            </div>
        );
    }
}

export default QuoteBlock;