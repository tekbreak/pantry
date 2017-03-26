import React, { Component } from 'react';
import * as bs from 'react-bootstrap';

export default class Category extends Component {
    static defaultProps = {
        selected: true
    }
    onClick(category) {
        this.props.onClick(category);
    }
    render() {
        let className = 'Category Category--' + this.props.name;
        if (this.props.selectable) className += ' Category--selectable';
        if (this.props.selected) className += ' is-selected';

        return <div className={className}>
            <bs.Label bsStyle="default" onClick={() => this.onClick(this.props.name)}>
                {this.props.name}
            </bs.Label>
        </div>;
    }
}


Category.propTypes = {
    name: React.PropTypes.string,
    onClick: React.PropTypes.func,
    selected: React.PropTypes.bool,
    selectable: React.PropTypes.bool
};