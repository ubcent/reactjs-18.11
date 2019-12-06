import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Messenger } from 'components/Messenger';
import { load } from 'actions/chats';

class MessengerContainer extends PureComponent {
    componentDidMount() {
        const { loadChats } = this.props;

        loadChats();
    }

    render() {
        const { chats, messages } = this.props;
        return (
            <Messenger messages={messages} chats={chats}/>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const chats = state.chats.get('entries');
    const { match } = ownProps;

    let messages = null;

    if (match && chats.has(match.params.id)) {
        messages = chats.getIn([match.params.id, 'messages']).toJS();
    }
    
    return {
        chats: chats.map((entry) => ({name: entry.get('name'), link: `/chats/${entry.get('id')}`})).toList().toJS(),
        messages,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadChats: () => dispatch(load())
    }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);