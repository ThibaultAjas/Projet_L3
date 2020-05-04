import React from "react";
import FeedLine from "./FeedLine";
import axios from 'axios';

import '../../stylesheets/feed.css';

class Feed extends React.Component {
    state = {
        events: [],
    };

    componentDidMount = () => {
        this.getEvents();
    };

    getEvents = () => {
        axios.post('/event/getAll')
            .then((response) => {
                const data = response.data;
                this.setState({events: data.data});
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            });
    };

    render() {
        return (
            <div className='p-5 mx-lg-5 mx-md-2 mx-sm-2 feed'>
                {
                    this.state.events.map((element, index) =>
                        <FeedLine
                            key={index}
                            id={index}
                            imageURL='https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                            title={element.title}
                            date={element.date}
                            dateAjout={element.dateAjout}
                            description={element.description}
                        />
                    ).sort((a, b) => (new Date(b.props.dateAjout)).getTime() - (new Date(a.props.dateAjout)).getTime())
                }
            </div>
        );
    }
}

export default Feed;