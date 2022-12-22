import Tilt from "react-vanilla-tilt";

export default function LanguageCard(props) {
  return (
    <Tilt
      style={{
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <div className="bg-black text-white aspect-square transform flip-card">
        <div className="inner-card">
          <div className="front-card">
            You can put whatever you want inside this
          </div>
          <div className="back-card">
            Kachow
          </div>
        </div>
      </div>
    </Tilt>
  );
}
