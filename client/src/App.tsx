import React, { Component } from "react";
import { solid, split, Path, Square } from './square';
import { SquareElem } from './square_draw';


/** Describes set of possible app page views */
type Page = {kind: ""}; // TODO: modify to set of relevant page states         

type AppState = {
  show: Page;   // Stores state for the current page of the app to show
};

/**
 * Displays the square application containing either a list of files names
 * to pick from or an editor for files files
 */
export class App extends Component<{}, AppState> {

  constructor(props: {}) {
    super(props);

    this.state = {show: {kind: ""}}; // TODO: initialize starting view
  }
  
  render = (): JSX.Element => {
    const sq: Square = split(solid("blue"), solid("orange"), solid("purple"), solid("red"));

    // TODO (Q2): Replace return with commented out line to render full editor
    //            component instead of always a static square
    return <SquareElem width={600n} height={600n} square={sq}
              onClick={this.doSquareClick}/>;
    // return <FileEditor initialState={sq}>

    // TODO (Q4): render the correct component or loading message depending on 
    // current view instead of always displaying editor
  };

  doSquareClick = (path: Path): void => {
    console.log(path);
    alert("Stop that!");
  };

  // TODO: write functions here to handle switching between app pages and
  //       for accessing server through server.ts helper functions
}
