import React, { useState } from "react";

const About = () => {
  //Add code
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "grey",
  });
  const [btnText, setBtnText] = useState("Enable Dark mode");
  const [btnColor, setBtnColor] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setTimeout(() => {
        setMyStyle({
          color: "white",
          backgroundColor: "grey",
        });
        setBtnText("Enable Light mode");
        setBtnColor({
          color: "black",
          backgroundColor: "white",
        });
      }, 150);
    } else {
      setTimeout(() => {
        setMyStyle({
          color: "black",
          backgroundColor: "white",
        });
        setBtnText("Enable Dark mode");
        setBtnColor({
          color: "white",
          backgroundColor: "grey",
        });
      }, 150);
    }
  };
  return (
    <div className="container">
      <h1 className="my-3">About Us:</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container-2">
        <button
          type="button"
          className="btn btn-dark my-3"
          onClick={toggleStyle}
          style={btnColor}
        >
          {btnText}
        </button>
      </div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, sapiente dolor porro soluta iusto perspiciatis voluptatum quisquam, iste quo, nemo ratione minima nostrum neque harum est dolore sequi obcaecati aliquid eaque reprehenderit asperiores. Repellendus fugit reprehenderit dignissimos praesentium. Ipsam autem asperiores quia facere. Earum dolorem fuga quod dolores quidem unde quas ipsam maiores necessitatibus quam eum ex vero ratione non asperiores esse facere iusto molestias, repudiandae voluptas? Atque recusandae est odio harum expedita dolorum deleniti dolores deserunt quas, error dignissimos reiciendis? Eveniet inventore impedit eius provident voluptates error placeat minus saepe, optio repellendus quaerat et temporibus mollitia laboriosam est sapiente velit ipsum. Nam non corporis omnis consequatur voluptatibus soluta cupiditate culpa, temporibus eaque tenetur? Quas dicta quia officia! Ut repellat eligendi unde ratione laborum autem odio qui laboriosam, excepturi ad, temporibus cum animi nostrum in repudiandae doloribus deserunt. Sapiente molestiae dolor autem adipisci vero magnam nemo ad molestias ab enim, aperiam ullam numquam provident, earum facilis libero, cum modi non. Magni error, aperiam quaerat eligendi nihil odit quibusdam doloremque similique recusandae laboriosam officiis hic modi illum asperiores totam veniam sapiente tenetur. Quo, cumque repellendus repudiandae voluptate placeat soluta beatae est reiciendis nobis quam, aut obcaecati maiores sunt ullam, earum sed quod quaerat incidunt fuga ratione. Vitae itaque perspiciatis rem nostrum quibusdam! Quasi temporibus, dicta repellat quo consequuntur quam. Necessitatibus labore vel, eum corporis ipsam veniam? Pariatur cupiditate facilis alias quia odio quidem numquam, doloribus voluptatem ut voluptas rerum est fugiat accusantium hic debitis possimus praesentium nemo quo fuga necessitatibus labore ad voluptatum aperiam repudiandae. Unde vero placeat similique quis eum laborum quod nemo eius voluptatibus adipisci corrupti magnam beatae molestiae, sed possimus voluptas cumque iusto quibusdam accusantium incidunt. Adipisci consequuntur, ea officia aliquid repudiandae totam delectus rerum similique porro magnam fuga aperiam accusantium quae beatae reiciendis nostrum ratione animi fugiat suscipit nihil eum dignissimos dolores alias dicta? Est excepturi dignissimos optio corrupti autem impedit animi incidunt aspernatur deserunt tempore vitae veritatis voluptate obcaecati sit ipsam illo itaque nesciunt laborum nobis ducimus eveniet minus, minima ex? Aperiam sapiente accusantium laudantium repellendus dignissimos dolorem id aut, rerum corporis modi. Reiciendis sed a suscipit animi, quidem nesciunt odit quis assumenda quos libero impedit aperiam error totam modi praesentium molestias cumque, doloribus aut, maxime dolore dolorum unde aliquid placeat iusto. Maxime ex reiciendis ipsa quas nostrum laudantium officia molestias quasi, non sint minima quis impedit! Mollitia ab alias ullam cumque veritatis qui nostrum blanditiis nemo, et vel, incidunt culpa esse perspiciatis, optio omnis necessitatibus minima consectetur eaque odit magnam reiciendis facilis recusandae quia? Dicta ullam reprehenderit, animi alias voluptatibus sit nisi, fuga amet natus exercitationem illo nobis incidunt enim repellat sunt ipsa neque asperiores vel iste non veniam! Odit magnam sunt error beatae tempora nihil illo sint perspiciatis commodi deserunt ipsam non aut, qui sapiente iusto excepturi atque? Quam, veritatis. Sequi, magnam vel laboriosam quas at odit tempore eaque! Libero quo accusamus impedit magni. Sequi dignissimos autem quod ipsum cupiditate. Enim est nihil praesentium nobis mollitia ab molestiae, odio hic accusamus, incidunt quis reprehenderit.
    </div>
  );
}
export default About