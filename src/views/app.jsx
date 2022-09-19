/*
* @organization: Console Art Cybernetic
* @project: Tiktok Chat Simulation
* @platform: PC (DESKTOP)
* @created: 2022-09-14
* @updated: 2022-09-18
* @framework: React
* @author: Obrymec
* @version: 0.0.3
*/

// Dependencies.
import Header from "./header.jsx";
import Body from "./body.jsx";
import React from "react";
import "../css/app.css";

/*
* @description: Main application class definition.
* @type: UI
*/
export default class App extends React.PureComponent {
	/*
    * @description: Builds application instance.
    * @parameters:
    *   -> Object props: Contains class properties.
    * @return: void
    */
	constructor (props) {
		// Calls the parent constructor.
		super (props);
		// Global attributes.
		this.state = {};
	}

	/*
    * @description: Returns this view as JSX format.
    * @return: JSXObject
    */
	render = () => <div className = "chat-simulation">
		{/* Application global header view */}
		<Header/>
		{/* Application chat workspace */}
		<Body/>
	</div>;
}
