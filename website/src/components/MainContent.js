import React from "react";
import "./MainContent.css";
import CreateApplicantForm from "./CreateApplicantForm"

export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: null
        }
    }
    isLoggedIn = () => this.state && typeof this.state.userId === "number" && this.state.userId > 0;
    loggedInMessage = () => this.isLoggedIn() ? "Your application reference: "+this.state.userId : "";

    onUserIdChanged = (userId) => {
        this.setState({userId: userId});
    }
    
    render = () => {
        return (
            <div className="MainContent">
                <div className="text-right">{this.loggedInMessage()}</div>

                {this.isLoggedIn()
                  ? null
                  : <CreateApplicantForm onApplicantCreated={this.onUserIdChanged}></CreateApplicantForm>
                }
            </div>
        );
    }
}