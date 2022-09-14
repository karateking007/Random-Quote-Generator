import { React, Component } from "react";
import API_KEY from '../apikey';
import $ from 'jquery';

class QuoteBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Variables for inline styling

        const loading = 'Loading...';

        var inputStyle = {
            bgCol: {
                backgroundColor: ''
            },
            col: {
                color: ''
            }
        }

        const backgroundColors = ["blue", "green", "purple", "orange", "red", "brown"];

        // Change to random color
        function changeColors() {
            var randNum = Math.floor(Math.random() * backgroundColors.length);
            var colorOne = backgroundColors[randNum];
            var colorTwo = ''
            //   Prevent the same color from occuring twice in a row
            if (colorTwo !== colorOne) {
                inputStyle.bgCol.backgroundColor = colorOne
                inputStyle.col.color = colorOne
            } else {
                changeColors();
            }
            colorTwo = colorOne;
        }

        if (this.props.loading == false) {
            changeColors();
        }

        return (
            <div className="container-fluid" style={inputStyle.bgCol}>
                <div className="well">
                    <wrapper id="quote-box">
                        <div className="text-group">
                            <h2 id="text" className="text-center" style={inputStyle.col}>{this.props.loading == true ? loading : this.props.apiData.quote}</h2>
                            <h4 id="author" className="text-center" style={inputStyle.col}>{this.props.loading == true ? '' : this.props.apiData.author}</h4>
                        </div>
                        <div id="buttons">
                            <div>
                                <a href="#" target="_blank" title="Tweet Quote"><i id="twitter-icon"
                                    className="fab fa-twitter" style={inputStyle.col}></i></a>
                            </div>
                            <div>
                                <button style={inputStyle.bgCol} onClick={this.props.handleClick} id="new-quote" className="btn">New Quote</button>
                            </div>
                        </div>
                    </wrapper>
                </div>
            </div>
        );
    }
}

export default QuoteBlock;