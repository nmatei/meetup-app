// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
// import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("./assets/city.jpg"),
  tree: require("./assets/tree.jpg"),
  kat: require("./assets/kat.png"),
  rock: require("./assets/rock.jpg"),
  // immutable: require("./assets/immutable.svg"),
  markdown: require("./assets/markdown.png")
};

preloader(images);

const PRIMARY = "#5682FF"
const theme = createTheme({
  primary: PRIMARY,
  white: 'white',
  editor: '#2d2d2d'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} bgColor="white" transitionDuration={500}>

          <Slide transition={["slide"]} bgColor="editor">
            <CodePane lang="shell" textSize={35}>
{`
  $ whoami
`}
            </CodePane>
            <CodePane lang="javascript" textSize={35}>
{`
  {
    fullName: 'Radu Brehar',
    married: 'Yes - 2 children :)',
    job: 'Founter & CTO ZippyUI',

    'twitter & github': '@radubrehar',
    zippyui: 'We open source carefully
      crafted UI components for React'
  }
`}
            </CodePane>
          </Slide>
          <Slide transition={["slide",]} bgColor="white">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Redux
            </Heading>
          </Slide>

          <Slide transition={["slide", "fade"]} notes="Redux principles: single state, immutable, pure">
            <Heading>Principles:</Heading>
            <List textColor="white">
              <Appear><ListItem textSize={60}>Single state object</ListItem></Appear>
              <Appear><ListItem textSize={60}>Immutable/read-only state</ListItem></Appear>
              <Appear><ListItem textSize={60}>Pure functions</ListItem></Appear>
            </List>

            <Appear>
              <Heading size={2} textColor="white">S. I. P. </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor="primary">Single state object/tree</Heading>
            <Image src={images.tree.replace("/", "")} />
            <Text>The state object is the "source of truth" for the entire app.</Text>
            <Text>It's basically an object referencing other objects, referencing other objects ... you get it</Text>
          </Slide>

          <Slide bgImage={images.rock.replace("/","")}>
            <Appear>
              <Heading padding="300px 0px 0px 0px" textColor="white">Immutable state</Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Heading textColor="primary">Immutable state</Heading>
            <Appear>
              <Text textSize={60}>You <b>NEVER</b> modify the STATE!</Text>
            </Appear>
            <Appear>
              <Text textSize={60}>Only return a new state object.</Text>
            </Appear>
            <Appear>
<CodePane margin="20px auto" textSize={40} lang="javascript">
  {`
    Object.assign({}, state, {
      update: 'Property'
    })
`}</CodePane>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps fit>Pure functions</Heading>
            <Appear>
            <Heading size={5} textColor="white"  margin={10}>
              Pure = <span style={{color: 'orange'}}>no side effects</span> + <span style={{color: '#C52525'}}>deterministic output</span>
            </Heading>
            </Appear>

            <Appear>
            <Heading size={5} textColor="white"  margin={10}>
              State is built by pure functions called <span style={{color: "black"}}>reducers</span>
            </Heading>
            </Appear>

            <Appear>
            <Heading size={5} textColor="white"  margin={10}>
              <div style={{marginBottom: 40}}>Reducers are <span style={{color: '#22FF22'}}>composable</span> + each reducer only handles a <span style={{color:'#A500A5'}}>small</span> part of the state</div>

            </Heading>
            </Appear>

            <Appear>
            <Heading size={5} textColor="white"  margin={10}>
              If reducer receives undefined for the state arg, it must <span style={{color: 'orange'}}>return the initial state</span> of the app
            </Heading>
            </Appear>


          </Slide>

          <Slide transition={["slide"]} bgColor="editor">
            <CodePane textSize={22} lang="jsx">
{`
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener())
  }
  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }

  dispatch({});
  return { getState, dispatch, subscribe };
}
`}
            </CodePane>
          </Slide>
          <Slide transition={["slide"]} bgColor="tertiary">
            <Heading size={3} textColor="primary">
              Actions
            </Heading>

            <Appear>
            <Heading size={5}  margin={10}>
              <div style={{marginBottom: 40}}>Actions are objects with a <b style={{color: 'red'}}>type</b> property.</div>
            </Heading>
            </Appear>

            <Appear>
            <CodePane lang="jsx" textSize={22}>
{`
  dispatch({
    type: 'ADD_USER',
    payload: { name: 'john', id: 1}
  })
`}
            </CodePane>
            </Appear>

            <Appear>
              <Heading size={5}  margin={10}>
                The store <span style={{color: PRIMARY}}>reducer</span> is called as a result of an action dispatch.
              </Heading>
            </Appear>

            <Appear>
            <CodePane lang="jsx" textSize={22}>
{`
  reducer(state, action) => newState
  //app can now re-render
`}
            </CodePane>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="editor">
            <Heading caps size={3} textColor="white">
              Reducers again - part 1
            </Heading>
            <CodePane lang="jsx" textSize={25}>
{`
  const reducer = (state = { users: [] }, action) => {

    if (action.type === 'ADD_USER'){
      return assign({}, {
        users: [...state.users, action.user]
      })
    }
    //what if ...?

    return state
  }
  const store = createStore(reducer)
`}
            </CodePane>
          </Slide>

          <Slide transition={["slide"]} bgColor="editor">
            <Heading caps size={3} textColor="white">
              Reducers again - part 2
            </Heading>
            <CodePane lang="jsx" textSize={25}>
{`
  const usersReducer = (state = [], action) => {
    if (action.type === 'ADD_USER'){
      return [...state, action.user]
    }
    return state
  }

  const reducer = (state = {}, action) => {
    return {
      users: usersReducer(state.users, action)
    }
  }

  const store = createStore(reducer)
`}
            </CodePane>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">

            <Appear>
              <Heading caps><div style={{marginBottom: 20}}>That's REDUX</div></Heading>
            </Appear>
            <Appear>
              <Heading caps fit><div style={{marginBottom: 20}}>Really ... !</div></Heading>
            </Appear>
            <Appear>
              <Heading caps>Demos now!</Heading>
            </Appear>
          </Slide>
          <Slide bgColor="editor">
          <CodePane lang="shell" textSize={35}>
{`
$ git clone https://github.com/
  zippyui/meetup-app

$ cd meetup-app
$ npm i
$ npm run dev

#goto localhost:9090
#goto locahost:9090/presentation
`}
            </CodePane>
            </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
