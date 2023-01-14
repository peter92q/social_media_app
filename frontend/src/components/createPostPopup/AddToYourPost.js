import { Photo } from "../../svg";
export default function AddToYourPost({ setShowPrev }) {
  return (
    <div className="addtoyourpost">
      <div
        className="post_header_right hover1"
        onClick={() => {
          setShowPrev(true);}}>
        <div style={{display: "flex", flexDirection:'row', padding: '3px', width: "10vw"}}>
        <Photo color="#45bd62" />
        <h5>Post picture</h5>
        </div>
      </div>
        

    </div>
  );
}
