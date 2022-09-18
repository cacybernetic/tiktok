/*
* @organization: Console Art Cybernetic
* @project: Tiktok Chat Simulation
* @platform: PC (DESKTOP)
* @created: 2022-09-14
* @updated: 2022-09-17
* @framework: React
* @author: Obrymec
* @version: 0.0.3
*/

// Dependencies.
import Header from "../header/ui.jsx";
import Body from "../body/ui.jsx";
import "../../css/app.css";
import React from "react";

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
