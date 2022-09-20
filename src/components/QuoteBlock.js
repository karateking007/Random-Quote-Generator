import { React, Component } from "react";
import load from "../img/load.gif"

class QuoteBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: this.props.bgColor }}>
                <div className="well">
                    <wrapper id="quote-box">
                        <div id="quote-text">
                            <h2 id="text" className="text-center">
                                {this.props.loading == false ? this.props.apiData.quote : <a target="_blank" href="https://icons8.com/icon/H6C79JoP90DH/settings"><img src={load} style={{ width: 100 }} /></a>}
                            </h2>
                            <h4 id="author" className="text-center">
                                {this.props.loading == false ? `- ${this.props.apiData.author}` : null}
                            </h4>
                        </div>
                        <div id="buttons">
                            <div>
                                <a href="#" target="_blank" title="Tweet Quote">
                                    <i className="fab fa-twitter" style={{ color: 'black' }}></i>
                                </a>
                            </div>
                            <div>
                                <button onClick={this.props.handleClick} id="new-quote" className="btn" style={{ backgroundColor: 'black' }}>New Quote</button>
                            </div>
                        </div>
                    </wrapper>
                </div>
            </div>
        );
    }
}

export default QuoteBlock;