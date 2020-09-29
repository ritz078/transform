export const json = JSON.stringify(
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  null,
  2
);

export const html = `<!-- Hello world -->
<div class="awesome" style="border: 1px solid red">
  <label for="name">Enter your name: </label>
  <input type="text" id="name" />
</div>
<p>Enter your HTML here</p>`;

export const svg = `<svg style="flex:1;" xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="10" y="10" height="100" width="100"
    style="stroke:#ff0000; fill: #0000ff"/>
</svg>`;

export const css = `.main-wrapper {
  flex-direction: row;
  display: flex;
  flex: 1;
}
#content {
  flex: 1;
}
ul {
  padding: 20px 0;
  flex: 1;
}
li {
  font-family:'Lato';
  color: whitesmoke;
  line-height: 44px;
}
`;

export const css2 = `.alert {
  position: relative;
  padding: 1.6rem 4.6rem;
  margin-bottom: 1.6rem;
  border: 1px solid #c53030;
  color: #fff;
  border-radius: 0.2rem;
  width: 100%;
}

.logo {
  margin-bottom: 1.6rem;
  background: url('logo.svg') no-repeat;
  display: flex;
  justify-content: center;
}

.button {
  background: #81e6d9;
  padding: 1.6rem 4.6rem;
  letter-spacing: 0.03rem;
  border-radius: 0.2rem;
}

.button:hover {
  background: #2c7a7b;
}

@media (min-width: 640px) {
  .button {
    padding: 0.5rem 1rem;
    width: 100%;
  } 
}

@media (min-width: 1280px) {
  .button {
    padding: 3rem 7rem;
    margin-bottom: 2.4rem;
  } 
}

.username {
  color: #718096;
  border-color: #bee3f8;
}

.username:focus {
  border-color: #3182ce;
}

.username::placeholder {
  color: #cbd5e0;
}

@media (min-width: 1280px) {
  .username {
    width: 50%;
  } 
}

.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  padding: 2.4rem 3rem;
  border-top: 1px solid #fff5f5;
}
`;

export const javascript = `const container = css({
  flex: 1,
  padding: 10,
  backgroundColor: 'orange',
  color: colors.white,

  '&:hover': {
    backgroundColor: 'tomato',
  },
});`;

export const yaml = `---
  foo: "bar"
  baz:
    - "qux"
    - "quxx"
  corge: null
  grault: 1
  garply: true
  waldo: "false"
  fred: "undefined"
  emptyarr: []
  emptyobj: {}
`;

export const xml = `<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
</note>
`;

export const markdown = `Heading
=======
## Sub-heading
Paragraphs are separated
by a blank line.
Two spaces at the end of a line
produces a line break.
Text attributes _italic_,
**bold**, \`monospace\`.
Horizontal rule:
---
Bullet list:
  * apples
  * oranges
  * pears
Numbered list:
  1. wash
  2. rinse
  3. repeat
A [link](http://example.com).
![Image](https://via.placeholder.com/150)
> Markdown uses email-style > characters for blockquoting.
`;

export const flow = `export type AlertType = 'success'

export type AlertProps = {
  type: AlertType,
  text: string,
  testId: string,
}

export type AlertTypeIconMap = {
  success: 'tick' | 'started',
}

const Alert = ({ type, text, testId }: AlertProps) => {
  const alertTypeIconMap: AlertTypeIconMap = {
    success: 'tick',
  }
  const styles = getStyles({ type })

  return (
      <View style={styles.iconContainer}>
        <Icon type={alertTypeIconMap[type]} />
      </View>
  )
}

export default Alert`;

export const graphql = `type Query {
	user: User!
}
type User {
	id: ID!
	profile: Profile!
	email: String!
	username: String!
}
type Profile {
	name: String!
	age: Int!
}`;

export const graphql1 = `scalar Date

schema {
  query: Query
}

type Query {
  me: User!
  user(id: ID!): User
  allUsers: [User]
  search(term: String!): [SearchResult!]!
  myChats: [Chat!]!
}

enum Role {
  USER,
  ADMIN,
}

interface Node {
  id: ID!
}

union SearchResult = User | Chat | ChatMessage

type User implements Node {
  id: ID!
  username: String!
  email: String!
  role: Role!
}

type Chat implements Node {
  id: ID!
  users: [User!]!
  messages: [ChatMessage!]!
}

type ChatMessage implements Node {
  id: ID!
  content: String!
  time: Date!
  user: User!
}
`;

export const graphqlDocument = `query findUser($userId: ID!) {
  user(id: $userId) {
    ...UserFields
  }
}

fragment UserFields on User {
  id
  username
  role
}`;

export const graphqlMongodb = `type User @entity {
  id: ID! @id
  username: String! @column
  email: String! @column @map(
    path: "login.email"
  )
  profile: Profile! @column
  chats: [Chat!]! @link
}

type Profile @entity(embedded: true, 
  additionalFields: [
    { path: "dateOfBirth", type: "string" }
  ]) {
  name: String! @column
  age: Int
}

type Chat @entity {
  id: ID! @id
  users: [User!]! @link
  messages: [ChatMessage!]!
}

type ChatMessage @entity {
  id: ID! @id
  chat: Chat! @link
  content: String! @column
  author: User! @link
}`;

export const jsObject = `{
	title: {
		type: 'String',
		trim: true,
		index: true,
		required: true
	},
	year: {
		type: 'Number',
		max: 2012,
		validate: 'validateBookYear'
	},
	author: {
		type: 'ObjectId',
		ref: 'Author',
		index: true,
		required: true
	}
}`;

export const jsonSchema = `{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "Example Schema",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "age": {
      "description": "Age in years",
      "type": "integer",
      "minimum": 0
    },
    "height": {
      "type": ["number", "null"]
    },
    "favoriteFoods": {
      "type": "array",
      "minItems": 0,
      "maxItems": 2,
      "items": {
        "type": "string"
      }
    },
    "likesDogs": {
      "type": "boolean"
    }
  },
  "required": ["firstName", "lastName"]
}`;

export const jsonLd = `{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Jane Doe",
  "jobTitle": "Professor",
  "telephone": "(425) 123-4567",
  "url": "http://www.janedoe.com"
}
`;

export const jsonLdContext = `{
  "@context": "https://schema.org/"
}`;

export const typescript = `
import React from 'react';
export interface Props {
  /** The user's name */
  name: string;
  /** Should the name be rendered in bold */
  priority?: boolean
}

export interface FauxactClassComponent<Props extends {}, State = {}> {
  props: Props
  state: State

  setState: (prevState: State, props: Props) => Props
  callback?: () => void
  render(): FauxactClassComponent<any> | null
}

export const PrintName: React.FC<Props> = (props) => {
  return (
    <div>
      <p style={{ fontWeight: props.priority ? "bold" : "normal" }}>{props.name}</p>
    </div>
  )
}

export const ShowUser: React.FC<Props> = (props) => {
  return <PrintName name="Ned" />
}

let username = "Cersei"
export const ShowStoredUser: React.FC<Props> = (props) => {
  return <PrintName name={username} priority />
}

import { useState, useEffect } from 'react';

export const CounterExample: React.FC<{}> = () => {
  const [count, setCount] = useState(0);
  
  const handleClick = () => setCount(count + 1)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}`;

export const typeScriptInterface = `export interface Root {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Props {
  /** The user's name */
  name: string;
  /** Should the name be rendered in bold */
  priority?: boolean
}`;
