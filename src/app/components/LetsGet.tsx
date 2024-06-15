import * as React from "react";

type TextSectionProps = {
  children: React.ReactNode;
};

const TextSection: React.FC<TextSectionProps> = ({ children }) => (
  <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    <h1 className="self-stretch my-auto text-6xl text-center text-rose-500 leading-[88px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[70px]">
      {children}
    </h1>
  </section>
);

type ContentSectionProps = {
  children: React.ReactNode;
};

const ContentSection: React.FC<ContentSectionProps> = ({ children }) => (
  <section className="flex flex-col ml-5 w-6/12 custom2:px-20">
    <p className="text-2xl leading-10 text-justify text-black max-md:mt-10 max-md:max-w-full font-sarabun">
      {children}
    </p>
  </section>
);

const LetsGet: React.FC = () => (
  <main className="px-5 custom2:h-[30rem] pt-16">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <TextSection>
        <span className="text-emerald-900 font-Satisfy">
          Do you have any plan?{" "}
        </span>
        <br />
        <span className="text-rose-500 font-Satisfy">Let’s get connected</span>
      </TextSection>
      <ContentSection>
        Aenean tempor mi molestie egestas cras. Quis nec eget arcu ultricies.
        Ultricies nisl risus in ridiculus. Tristique facilisis tristique cursus
        elementum porta erat est. Nulla condimentum elit neque Aenean tempor mi
        molestie egestas cras. Quis nec eget arcu ultricies. Ultricies nisl
        risus in ridiculus. Tristique facilisis tristique cursus elementum porta
        erat est. Nulla condimentum elit neque
      </ContentSection>
    </div>
  </main>
);

export default LetsGet;
