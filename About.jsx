import PageWrapper from "../components/PageWrapper";

function About() {
  return (
    <PageWrapper title="About" titleClass="text-center">
      <div className="flex justify-center items-center h-[300px] text-center px-4">
        <p>
          This website was founded by Master Ibrahim Excellent Temiloluwa,
          a web developer. The main purpose of this website is for hotels
          to showcase their amenities, properties and provide details
          about their services. It helps increase hotel visibility and
          promote business.
        </p>
      </div>
    </PageWrapper>
  );
}

export default About;