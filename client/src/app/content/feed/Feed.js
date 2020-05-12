import React from "react";

import FeedLine from "./FeedLine";

import '../../stylesheets/feed.css';
import { isLogged } from "../util/app_cookies";
import SwapFeedButtons from "../swap_feed_buttons/SwapFeedButtons";
import { getFollowersEvents } from "../util/dataConverter";
import SwapFeedButton from "../swap_feed_buttons/SwapFeedButton";


class Feed extends React.Component {
    state = {
        events: []
    };

    isUserProfile = false;

    componentDidMount = () => {
        if (this.props.content) {
            this.setState({ events: this.props.content });
            if (window.location.href.includes('/actions')) this.isUserProfile = true;
        } else {
            this.getEvents();
        }
    };

    getEvents = () => {
        // axios.post('/event/getAll')
        // axios({
        //     url: '/event/getAllFromFollowing',
        //     method: 'POST',
        //     data: getUser()
        // })
        //     .then((response) => {
        //         const data = response.data;
        //         this.setState({events: data.data});
        //     })
        //     .catch((error) => {
        //         console.log('Error: ', error);
        //     });

        getFollowersEvents().then((data) => this.setState({ events: data} ));
    };

    render() {
        if (this.props.content) {
            return (
                <>
                    { (isLogged && this.isUserProfile)
                    ? <div id="buttons-container" className='d-flex flex-column'>
                            <SwapFeedButton name="map" href='/profile/map'/>
                            <SwapFeedButton name="feed" href="/"/>
                        </div>
                    : <></> }

                    {
                        <div className='p-5 mx-lg-5 mx-md-2 mx-sm-2 feed'>
                            {
                                this.props.content.map((element, index) =>
                                    <FeedLine key={index} element={element} />
                                ).sort((a, b) => (new Date(b.props.dateAjout)).getTime() - (new Date(a.props.dateAjout)).getTime())
                            }
                        </div>
                    }
                </>
            );
        }

        return (
            <>
                { (isLogged) ? <SwapFeedButtons userPfoile={this.isUserProfile}/> : <></> }

                {
                     <div className='p-5 mx-lg-5 mx-md-2 mx-sm-2 feed'>
                        {
                           this.state.events.map((element, index) =>
                              <FeedLine key={index} element={element} />
                            ).sort((a, b) => (new Date(b.props.dateAjout)).getTime() - (new Date(a.props.dateAjout)).getTime())
                        }
                    </div>
                }
            </>
        );
    }
}

export default Feed;