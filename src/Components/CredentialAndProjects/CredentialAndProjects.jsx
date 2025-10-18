import customWebsiteImg from "../../assets/custom-website.jpg";
import frontendDevImg from "../../assets/frontend-development.jpg";
import backendDevImg from "../../assets/backend-development.jpg";
import apiIntegrationImg from "../../assets/API-Development-Integration.jpg";
import uiuxDesignImg from "../../assets/UIUX-Design.webp";
import ecommerceDevImg from "../../assets/e-commarce-website.jpg";

const CredentialAndProjects = () => {
  return (
    <>
      <h1 className="text-center font-semibold text-2xl mb-3">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="stats shadow rounded-3xl">
          <div className="stat rounded-2xl">
            <img className="" src={customWebsiteImg} alt="" />
            <div className="text-lg font-medium pt-3">
              Custom Website Development
            </div>
            <div className="text-stone-400 text-sm">
              Build fully responsive and SEO-friendly websites from scratch
              using MERN stack.
            </div>
          </div>
        </div>
        {/* Projects */}
        <div className="stats shadow rounded-3xl">
          <div className="stat">
            <img className="" src={frontendDevImg} alt="" />
            <div className="text-lg font-medium pt-3">Frontend Development</div>
            <div className="text-stone-400 text-sm">
              Modern, user-friendly, and pixel-perfect UI using React, Next.js,
              and Tailwind CSS.
            </div>
          </div>
        </div>
        <div className="stats shadow rounded-3xl">
          <div className="stat">
            <img className="" src={backendDevImg} alt="" />
            <div className="text-lg font-medium pt-3">Backend Development</div>
            <div className="text-stone-400 text-sm">
              Build secure and scalable backend systems with Node.js, Express,
              and MongoDB.
            </div>
          </div>
        </div>
        <div className="stats shadow rounded-3xl">
          <div className="stat">
            <img className="" src={apiIntegrationImg} alt="" />
            <div className="text-lg font-medium pt-3">
              API Development & Integration
            </div>
            <div className="text-stone-400 text-sm">
             RESTful API creation and integration with third-party services.
            </div>
          </div>
        </div>
        <div className="stats shadow rounded-3xl">
          <div className="stat">
            <img className="" src={uiuxDesignImg} alt="" />
            <div className="text-lg font-medium pt-3">
             UI/UX Design
            </div>
            <div className="text-stone-400 text-sm">
              Clean, modern interface design ensuring smooth user experience.
            </div>
          </div>
        </div>
        <div className="stats shadow rounded-3xl">
          <div className="stat">
            <img className="" src={ecommerceDevImg} alt="" />
            <div className="text-lg font-medium pt-3">
              E-Commerce Website Development
            </div>
            <div className="text-stone-400 text-sm">
              Build Shopify or MERN-based online stores with secure payment gateways.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CredentialAndProjects;
