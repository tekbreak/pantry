import React, { Component } from 'react';

import Category from '../Category';

export default class ShowcaseItem extends Component {
    render() {
        const image = 'images/' + this.props.name + '.png';
        const chevronClassName = 'chevron chevron--' + this.props.category;
        return <article>
            <div className="Showcase__Item">
                <div className="Showcase__Item__image">
                    <div className="Showcase__Item__image__container" style={{backgroundImage: 'url(' + image +')'}}></div>
                </div>
                <div className="Showcase__Item__container">
                    <h2>{this.props.name}</h2>
                    <Category name={this.props.category} />
                    <p>
                        {this.props.description}
                    </p>
                </div>
                <div className="Showcase__Item__actions">
                    <a href="#"><span className={chevronClassName}></span>View more</a>
                </div>
            </div>
        </article>;
    }
}


ShowcaseItem.propTypes = {
    name: React.PropTypes.string,
    category: React.PropTypes.string,
    description: React.PropTypes.string,
    selected: React.PropTypes.bool
};