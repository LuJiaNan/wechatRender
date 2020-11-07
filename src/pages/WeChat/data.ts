import { pic1, pic2 } from "./image";

const data = [
  {
    id: 1,
    name: "",
    nickName: "昵称1",
    content: "aaa"
  },
  {
    id: 2,
    name: "",
    nickName: "昵称2",
    type: "errorText",
    content: "bbb"
  },
  {
    id: 3,
    name: "",
    nickName: "昵称3",
    type: "image",
    content: pic1
  },
  {
    id: 4,
    name: "",
    nickName: "",
    type: "system",
    content: "xxx加入群聊"
  },
  {
    id: 5,
    name: "",
    nickName: "昵称5",
    // 决定自己说的话还是别人,默认false
    me: true,
    content: "我说"
  },
  {
    id: 6,
    name: "",
    nickName: "昵称6",
    type: "image",
    me: true,
    content: pic2
  }
];

export default data;
