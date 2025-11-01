import sliderImg from "../assets/slider-img.png";
import PrimaryButton from "./PrimaryButton";
import Section from "./Section";

export default function Hero() {
   return (
      <Section
         img={sliderImg}
         alt="two cartoons on a couch drinking a cup of coffee"
         title="for all your Furniture needs"
         desc=" Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                   Repudiandae ea error, et odit necessitatibus, sed, provident
                   alias est iure ipsa vero sequi quisquam illo nisi. Ipsam
                   excepturi ipsum sunt earum?">
         <PrimaryButton
            color="orange"
            className="uppercase bg-orange hover:text-orange outline-orange">
            contact us
         </PrimaryButton>
         <PrimaryButton color="blue" className="uppercase">
            shop now
         </PrimaryButton>
      </Section>
   );
}
