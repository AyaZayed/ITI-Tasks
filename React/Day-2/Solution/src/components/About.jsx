import aboutImg from "../assets/about-img.png";
import PrimaryButton from "./PrimaryButton";
import Section from "./Section";

export default function About() {
   return (
      <Section
         img={aboutImg}
         alt="one cartoons on a couch reading a book"
         title="about us"
         desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                   Repudiandae ea error, et odit necessitatibus, sed, provident
                   alias est iure ipsa vero sequi quisquam illo nisi. Ipsam
                   excepturi ipsum sunt earum?"
         className="flex-row-reverse">
         <PrimaryButton color="blue" className="capitalize">
            read more
         </PrimaryButton>
      </Section>
   );
}
