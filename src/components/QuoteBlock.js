import { React, Component } from "react";
import API_KEY from '../apikey';
import $ from 'jquery';

class QuoteBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const loading = 'Loading...';
        return (
            <div className="container-fluid">
                <div className="well">
                    <wrapper id="quote-box">
                        <div className="text-group">
                            <h2 id="text" className="text-center">{this.props.loading == true ? loading : this.props.apiData.quote}</h2>
                            <h4 id="author" className="text-center">{this.props.loading == true ? '' : this.props.apiData.author}</h4>
                        </div>
                        <div id="buttons">
                            <div>
                                <a href="#" id="tweet-quote" target="_blank" title="Tweet Quote"><i id="twitter-icon"
                                    className="fab"></i></a>
                            </div>
                            <div>
                                <button style={{ backgroundColor: 'blue' }} onClick={this.props.handleClick} id="new-quote" className="btn">New Quote</button>
                            </div>
                        </div>
                    </wrapper>
                </div>
            </div>
        );
    }
}

export default QuoteBlock;