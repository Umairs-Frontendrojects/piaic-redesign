import CallToAction from "../components/CallToAction";
import Companies from "../components/Companies";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import HomeLayout from "../layouts/homePage/Index";

export default function Home() {
  return (
    <HomeLayout>
      <Courses />
      <Testimonials />
      <Companies />
      <CallToAction />
    </HomeLayout>
  );
}
