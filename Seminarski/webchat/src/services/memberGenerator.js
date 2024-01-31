import generateName from "sillyname";
import generateColor from "randomcolor";

export default function getMember() {
  return {
    username: generateName(),
    color: generateColor()
  };
}
