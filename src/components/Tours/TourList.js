import React, { Component } from "react";
import Title from "../Title";
import styles from "../../css/items.module.css";
import Tour from "../Tours/Tour";

export default class TourList extends Component {
    state = {
        tours: [],
        sortedTours: [],
    };

    componentDidMount() {
        this.setState({
            tours: this.props.tours,
            sortedTours: this.props.tours,
        });
    }
    render() {
        return (
            <section className={styles.tours}>
                <Title title="our" subtitle="tours" />
                <div className={styles.center}>
                  {
                    this.state.sortedTours.map((item)=>{
                      return <Tour key={item.contentful_id} tour={item} />
                    })
                  }
                </div>
            </section>
        );
    }
}
