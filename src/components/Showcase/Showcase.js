import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

import * as bs from 'react-bootstrap';
import ShowcaseItem from './ShowcaseItem';

export default class Showcase extends Component {
    render() {
        return <section>
            <div className="Showcase">
                <bs.Grid>
                    <bs.Row className="show-grid">
                        <ReactCSSTransitionGroup
                            transitionName="Showcase__Item"
                            transitionLeaveTimeout={0}
                            transitionEnterTimeout={0}>
                            {
                                this.props.items.map((item,index) => {
                                    if (item.selected) {
                                        return <bs.Col xs={12} sm={4} md={3} key={"showcaseItem" + index}>
                                            <ShowcaseItem name={item.name} category={item.category}
                                                          description={item.description}/>
                                        </bs.Col>;
                                    }else{
                                        return null;
                                    }
                                })
                            }
                        </ReactCSSTransitionGroup>
                    </bs.Row>
                </bs.Grid>
            </div>
        </section>;
    }
}


Showcase.propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string,
        category: React.PropTypes.string
    }))
};