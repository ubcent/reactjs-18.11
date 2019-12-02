import React, {Component} from 'react';
import {Box, Card} from "@material-ui/core";
import moment from "moment";

export class Messege extends Component {
    render() {
        return (
            <Box mb={1} boxShadow={1}> <Card> <Box p={2}>
                <Box borderBottom={1} mb={1} display="flex" justifyContent="space-between">
                    <div>{this.props.message.author}</div>
                    <div>{moment(this.props.message.created_at).format('D.M.Y H:M:ss')}</div>
                </Box>
                <div>
                    {this.props.message.text}
                </div>
            </Box> </Card> </Box>
        );
    }
}