import Layout from "../components/layout";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Header from "../components/header";

import ButtonShowcase from "../components/ComponentShowcase/ButtonShowcase";
import InputShowcase from "../components/ComponentShowcase/InputShowcase";
import TextAreaShowcase from "../components/ComponentShowcase/TextAreaShowcase";
import DropdownShowcase from "@/components/ComponentShowcase/DropdownShowcase";

export default function Home() {
  return (
    <Layout>
      <main className="grid gap-12 py-8 relative min-h-screen">
      <Header />
        <Hero />
        <div className="grid gap-8">
          <ButtonShowcase />
          <InputShowcase />
          <TextAreaShowcase />
          <DropdownShowcase />

        </div>
        <Footer />
      </main>
    </Layout>
  );
}
