import FallbackImage from "@/components/Common/ImageWrapper";

export default function ResourcesComp() {
  return (
    <div className="row justify-content-between align-items-center ">
          <div className="col-3">
            <FallbackImage
            src={'/Header/resources.svg'}
           
            width={181}
            height={140}
            />
          </div>
          <div className="col-9">
            <div className="row gx-5 gy-3">
              <div className="col-lg-6">
                <div className="d-flex gap-4 align-items-start">
               <div> <FallbackImage
            src={'/Header/blog.svg'}
           
            width={24}
            height={24}
            /></div> 
             <div>
             <h4 className="mb-2 fw-normal">Blog</h4>
             <p className="h6tt col-11">Read our blog for the latest information on Pilla wallet solution.</p>
             </div>
                </div>
              </div>
              <div className="col-lg-6">
              <div className="d-flex gap-4 align-items-start">
               <div> <FallbackImage
            src={'/Header/Compliances.svg'}
           
            width={24}
            height={24}
            /></div> 
             <div>
             <h4 className="mb-2 fw-normal">Compliances</h4>
             <p className="h6tt col-lg-9">We value your trust and create a secured payment gateway for you.</p>

             </div>
                </div>
              </div>
              <div className="col-lg-6">
              <div className="d-flex gap-4 align-items-start">
               <div> <FallbackImage
            src={'/Header/developer.svg'}
           
            width={24}
            height={24}
            /></div> 
             <div>
             <h4 className="mb-2 fw-normal">For developer</h4>
             <p className="h6tt col-lg-11">Take a deep dive into our API documentation to learn how you can start building with us today.</p>

             </div>
                </div>
              </div>
              <div className="col-lg-6">
              <div className="d-flex gap-4 align-items-start">
               <div> <FallbackImage
            src={'/Header/term.svg'}
           
            width={24}
            height={24}
            /></div> 
             <div>
             <h4 className="mb-2 fw-normal">Terms of use</h4>
             <p className="h6tt col-lg-11">Our mission is to protect your content and also deliver affordable, easy-to-use solutions.</p>

             </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
