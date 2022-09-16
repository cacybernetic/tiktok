/*
* @organization: Console Art Cybernetic
* @project: Tiktok Chat Simulation
* @platform: PC (DESKTOP)
* @created: 2022-09-15
* @updated: 2022-09-15
* @framework: React
* @author: Obrymec
* @version: 0.0.3
*/

// Dependencies.
import "../../css/contact.css";
import React from "react";

/*
* @description: Creates a user contact view.
* @type: UI
*/
export default class ContactUI extends React.PureComponent {
	/*
    * @description: Returns this view as JSX format.
    * @return: JSXObject
    */
	render = () => <div className = "guest-contact">
        {/* Guest icon */}
        <div className = "guest-profil"><img src = {this.props.profil} width = "48px" height = "48px" alt = ''/></div>
        {/* Guest data */}
        <div className = "guest-data">
            {/* Guest name */}
            <div className = "guest-name"><label><strong>{this.props.name}</strong></label></div>
            {/* Bottom data */}
            <div className = "bottom-data">
                {/* Chat label */}
                <div className = "chat-label"><label>{this.props.label}</label></div>
                {/* Message date */}
                <div className = "msg-date"><label>{this.props.date}</label></div>
            </div>
        </div>
    </div>;
}
