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
                        <div className="text-group">
                            <h2 id="text" style={{ color: this.props.bgColor }} className="text-center">{this.props.loading == true ? '' : this.props.apiData.quote}</h2>
                            <h4 id="author" style={{ color: this.props.bgColor }} className="text-center">{this.props.loading == true ? '' : this.props.apiData.author}</h4>
                            <a target="_blank" href="https://icons8.com/icon/H6C79JoP90DH/settings"><img src={this.props.loading == true ? load : null} style={{ width: 100 }} /></a>
                        </div>
                        <div id="buttons">
                            <div>
                                <a href="#" target="_blank" title="Tweet Quote">
                                    <i className="fab fa-twitter" style={{ color: this.props.bgColor }}></i>
                                </a>
                            </div>
                            <div>
                                <button onClick={this.props.handleClick} id="new-quote" className="btn" style={{ backgroundColor: this.props.bgColor }}>New Quote</button>
                            </div>
                        </div>
                    </wrapper>
                </div>
            </div>
        );
    }
}

export default QuoteBlock;