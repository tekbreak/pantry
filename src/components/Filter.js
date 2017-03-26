import React, { Component } from 'react';
import * as bs from 'react-bootstrap';

import Category from './Category';

export default class Filter extends Component {
    onClick(category) {
        this.props.onChange(category);
    }

    render() {
        return <section>
            <div className="Filter">
                <bs.Panel>Filter {this.props.categories.map((item, index) =>
                <Category
                    key={'category' + index}
                    name={item}
                    selectable={true}
                    selected={this.props.selectedCategories.indexOf(item) !== -1}
                    onClick={(category) => this.onClick(category)}
                />
            )}
        </bs.Panel>
            </div></section>
    }
}


Filter.propTypes = {
    categories: React.PropTypes.arrayOf(React.PropTypes.string),
    selectedCategories: React.PropTypes.arrayOf(React.PropTypes.string),
    onChange: React.PropTypes.func
};
