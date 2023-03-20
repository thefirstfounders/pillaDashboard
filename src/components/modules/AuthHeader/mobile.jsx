import FallbackImage from "@/components/Common/ImageWrapper"
import ButtonComp from "@/components/Ui/Button"
import Link from "next/link"
import { BiMenuAltLeft, BiUserCircle } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"


export default function Mobile({onToggle,setOnToggle,setSignUpToggle,signUpToggle,SignUpRef}) {
  return (
    <div
          className={`position-fixed start-0 end-0 bg-white bottom-0 py-4 px-3 top-0 ${
            onToggle === "mobile" && "animate__fadeIn animate__animated"
          }`}
          style={{ zIndex: 100 }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4 ">
            <div>
              <span>
                {onToggle !== "mobile" ? (
                  <BiMenuAltLeft
                    size={30}
                    color="#00AA96"
                    className="me-3 d-lg-none"
                    onClick={() => setOnToggle(null)}
                  />
                ) : (
                  <IoMdClose
                    size={30}
                    color="#00AA96"
                    className="me-3 d-lg-none"
                    onClick={() => setOnToggle(null)}
                  />
                )}
              </span>

              <Link href={"/"}>
                {" "}
                <FallbackImage src={"/Images/Auth/Logo.png"} width={79} height={24} />
              </Link>
            </div>

            <div ref={SignUpRef}>
              <ButtonComp
              onClick={()=>{
                 setSignUpToggle(!signUpToggle);
                setOnToggle(null)
              }}
              
              btnText={
                  <span className="h6t">
                    <BiUserCircle size={25} className="me-2" />
                    Sign in
                  </span>
                }
                btnClassName="primaryI text-white rounded-pill px-3 py-2"
              />
            </div>
          </div>
          <div>
            <div>
              <div className="mb-3">Company</div>
              <ul className="list-unstyled ps-4">
                {[
                  { name: "About", path: "/about" },
                  { name: "Team", path: "/our-team" },
                  { name: "Career", path: "/" },
                  { name: "Contact", path: "/contact" },
                ].map((item, i) => (
                  <li key={i} className="mb-3">
                    <Link className="text-black text-decoration-none" href={item?.path}>{item?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-3">Resources</div>
              <ul className="list-unstyled ps-4">
                {[
                  { name: "Blog", path: "/" },
                  { name: "Compliances", path: "/" },
                  { name: "For developer", path: "/" },
                  { name: "Terms of use", path: "/" },
                ].map((item, i) => (
                  <li key={i} className="mb-3 text-decoration-none">
                    <Link className="text-black text-decoration-none" href="/">{item?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
  )
}
