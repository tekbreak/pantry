import * as React from 'react';

import Header from './components/Header';
import Filter from './components/Filter';
import Showcase from './components/Showcase/Showcase';

export default class Pantry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategories: props.categories.slice()
        };
    }

    filter(category) {
        let selectedCategories = this.state.selectedCategories;
        const index = selectedCategories.indexOf(category);
        if (index !== -1) {
            selectedCategories.splice(index, 1);
        }else{
            selectedCategories.push(category);
        }
        this.setState({selectedCategories: selectedCategories});
    }

    render() {
        return (
            <div className="Pantry">
                <Header />
                    <Filter
                        categories={this.props.categories}
                        selectedCategories={this.state.selectedCategories}
                        onChange={(category) => this.filter(category)}
                    />
                    <Showcase items={this.props.items.map(item => {
                        item.selected = this.state.selectedCategories.indexOf(item.category) !== -1;
                        return item;
                    })}/>

            </div>
        );
    }
}

Pantry.propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string,
        category: React.PropTypes.string
    })),
    categories: React.PropTypes.arrayOf(React.PropTypes.string)
};