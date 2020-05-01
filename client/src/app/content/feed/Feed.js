import React from "react";
import FeedLine from "./FeedLine";
import axios from 'axios';

import '../../stylesheets/feed.css';

class Feed extends React.Component {

    state = {
        events: []
    };

    componentDidMount = () => {
        this.getEvents()
    };

    getEvents = () => {
        axios.post('/event/getAll')
            .then((response) => {
                const data = response.data;
                this.setState({events: data}); // On update le state
                console.log('All events have been received');
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
                            key={element._id}
                            image='https://www.opengovguide.com/wp-content/uploads/2019/07/rw-a-tool-for-sustainable-land-use-management-in-rwanda-homepage-780x439.jpg'
                            title={element.title}
                            date={element.date}
                            dateAjout={element.dateAjout}
                            description={element.description}
                        />
                    )
                        .sort((a, b) => (new Date(b.props.dateAjout)).getTime() - (new Date(a.props.dateAjout)).getTime())
                        // On sort les events par date d'ajout la plus récente
                }
            </div>
        );
    }
};

export default Feed;