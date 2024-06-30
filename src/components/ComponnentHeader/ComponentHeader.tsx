import { IComponentHeader } from "../../interface/interface";
import "./componentHeader.css";

const ComponentHeader = ({ data }: IComponentHeader) => {
  return (
    <div className="titleLayout">
      <div className="title">{data?.title}</div>
    </div>
  );
};

export default ComponentHeader;
