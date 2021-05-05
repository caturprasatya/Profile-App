import './ButtonCover.css';

// interface ContainerProps {
//   name: string;
// }

const ButtonCover: React.FC = () => {
  return (
    <div className="container">
      <div className="c1">
          <div className="c11">
            <h1 className="mainhead">COMPLATE YOUR DATA</h1>
            <p className="mainp">Just click the buttons below to toggle between SignIn & SignUp</p>
          </div>
          <div id="left"><h1 className="s1class"><span>SIGN</span><span className="su">IN</span>
          </h1></div>
          <div id="right"><h1 className="s2class"><span>SIGN</span><span className="su">UP</span></h1></div>
      </div>
    </div>
  );
};

export default ButtonCover;
