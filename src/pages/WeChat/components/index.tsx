import * as React from "react";
import { MessageTypesProps } from "../../../Interface";
import Talker from '../../../components/Talker';

const Text = (props: any) => {
  return <Talker {...props}>{props.content}</Talker>
};

const WeErrorText = (props: any) => {
  return <Talker {...props}><span style={{ color: "red" }}>{props.content}</span></Talker>

};
const WeImage = (props: any) => {
  return <Talker {...props}><img alt="" src={props.content} style={{ width: "100px", height: "100px" }} /></Talker>
};

const SystemMessage = (props: any) => {
  return (
    <Talker {...props}>
      <div
        style={{
          width: "100%",
          margin: "20px 0",
          color: "#dfdfdf",
          textAlign: "center"
        }}
      >
        {props.content}
      </div>
    </Talker>
  )
};

const MyMessage = (MyComponent: any) => {
  const Hoc = (props: any) => {
    return <div style={{ textAlign: "right"}}>{MyComponent(props)}</div>;
  };
  return Hoc;
};

const MessageTypes: MessageTypesProps = {
  text: Text,
  errorText: WeErrorText,
  image: WeImage,
  system: SystemMessage,
  myself: MyMessage
};

const getMessageTypes = ({type,me}:{type: string, me?: string}) => {
  return me ? MyMessage(MessageTypes[type || 'text']) : MessageTypes[type || 'text'];
};

export default getMessageTypes;
