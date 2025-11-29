import { Children, useEffect } from "react";

function Testimonial() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <div className="mx-auto my-5 grid w-[92%] space-y-5 md:grid-cols-4 md:grid-rows-2 md:gap-4">
        <SingleTestimonial
          image="/images/testimonial/image-daniel.jpg"
          name="Daniel clifford"
          header=" I recieved a job offer mid-course, and the subjects I learned were
        current,if not more so, in the country I joined. I honestly feel I got
        every penny's worth."
          backgroundImage="url(/images/testimonial/bg-pattern-quotation.svg)"
          bgColor="bg-purple-600"
          colSpan="2"
          order="order-1"
        >
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          tempora, quos velit natus architecto repudiandae consequuntur, laborum
          optio earum quod dolor. Consequatur officia nam dolore assumenda
          facilis, maiores placeat veniam. Quas minima tempore nobis corporis
          odit tempora dolores. Expedita eos, asperiores quibusdam dolorem non
          eaque alias illum pariatur sunt libero eum perferendis fugiat ea
          corrupti? Laboriosam veniam laudantium sint commodi."
        </SingleTestimonial>
        <SingleTestimonial
          image="/images/testimonial/image-jonathan.jpg"
          name="Jonathan Walters"
          header="The team was very supportive and kept me motivated"
          bgColor="bg-zinc-600"
          order="order-2"
        >
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          tempora, quos velit natus architecto repudiandae consequuntur, laborum
          optio earum quod dolor. Consequatur officia
        </SingleTestimonial>
        <SingleTestimonial
          image="/images/testimonial/image-jeanette.jpg"
          name="Jeanette Harmon"
          header="An overall wonderfull and rewarding experience"
          bgColor="bg-white"
          nameColor="text-zinc-600"
          bgWhite={true}
          order="order-4"
        >
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          tempora, quos velit natus architecto repudiandae consequuntur, laborum
          optio earum quod dolor. Consequatur officia nam dolore assumenda"
        </SingleTestimonial>
        {/* <SingleTestimonial
          image="/images/testimonial/image-jonathan.jpg"
          name="Jonathan Walters"
          header="The team was very supportive and kept me motivated"
          bgColor="bg-zinc-600"
        >
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          tempora, quos velit natus architecto repudiandae consequuntur, laborum
          optio earum quod dolor. Consequatur officia nam dolore assumenda
          facilis, maiores placeat veniam. Quas minima tempore nobis corporis
          odit tempora dolores. Expedita eos, asperiores quibusdam dolorem non
          eaque alias illum pariatur sunt libero eum perferendis fugiat ea
          corrupti? Laboriosam veniam laudantium sint commodi."
        </SingleTestimonial> */}
        <SingleTestimonial
          image="/images/testimonial/image-patrick.jpg"
          name="Patrick Abrams"
          header="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          tempora, quos velit natus architecto repudiandae consequuntur, laborum"
          bgColor="bg-zinc-950"
          colSpan="2"
          order="order-5"
          // nameColor="text-zinc-600"
        >
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quis
          doloribus aliquid dignissimos blanditiis placeat, distinctio ab
          maiores in porro. Perferendis accusamus ab soluta corrupti quae
          laboriosam voluptatem, debitis ea! Quod laboriosam sit, possimus
          assumenda eos autem molestiae voluptas. Inventore animi sapiente
          nesciunt molestiae repellat delectus earum asperiores totam, eius
          obcaecati voluptatum veritatis et dolorem omnis architecto accusamus
          mollitia quam? "
        </SingleTestimonial>
        <SingleTestimonial
          image="/images/testimonial/image-kira.jpg"
          name="Kira Whittle"
          header="Such a life-changing experience. Highly recommended!"
          bgColor="bg-white"
          bgWhite={true}
          nameColor="text-zinc-600"
          order="order-3"
          row="2"
        >
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          earum itaque quo veniam labore dolore praesentium natus quibusdam vero
          laborum maiores adipisci nisi repellat dolorem voluptatum enim,
          corrupti blanditiis aliquam? Ea error laborum maxime voluptas quisquam
          praesentium hic nobis numquam pariatur. Aperiam commodi nobis magnam,
          odit quas nostrum illum dolore, obcaecati fuga non autem modi
          doloremque fugiat libero quibusdam veniam. Dignissimos dicta
          asperiores aspernatur, a facere accusantium molestiae harum nulla
          ratione quaerat, at culpa, ea quia aperiam rerum reprehenderit. Unde
          quisquam eaque distinctio iusto, in incidunt cupiditate quibusdam cum
          quidem."
        </SingleTestimonial>
      </div>
    </div>
  );
}

function SingleTestimonial({
  image,
  name,
  header,
  children,
  backgroundImage: BImage,
  bgColor,
  nameColor = "text-zinc-200",
  bgWhite,
  colSpan = "1",
  order,
  row,
}) {
  return (
    <div
      className={`flex flex-col items-start justify-start space-y-6 rounded-md ${bgColor} bg-scroll bg-top-right bg-no-repeat px-3 py-4 md:col-span-[var(--x)] ${order} mt-4 line-clamp-1 shadow-xl shadow-zinc-900/20 md:row-span-[var(--y)]`}
      style={{
        backgroundImage: BImage,
        backgroundSize: "4rem",
        "--x": colSpan,
        "--y": row,
      }}
    >
      <div className="flex items-center justify-start gap-4">
        <p className="flex items-center justify-center">
          <img src={image} alt="image-daniel" className="rounded-full" />
        </p>
        <div className="flex flex-col items-start justify-center space-y-[1px]">
          <h2
            className={`text-md font-bold tracking-tighter capitalize ${nameColor}`}
          >
            {name}
          </h2>
          <p
            className={`text-normal text-sm font-normal tracking-tight capitalize ${bgWhite ? `${nameColor}` : "text-purple-100/40"} `}
          >
            verified Graduate
          </p>
        </div>
      </div>
      <h2
        className={`flex items-center justify-start text-lg font-bold tracking-normal ${bgWhite ? `text-slate-700` : "text-slate-200"}`}
      >
        {header}
      </h2>
      <p
        className={`flex items-center justify-start text-[12px] tracking-tighter ${bgWhite ? `text-slate-700/70` : "text-red-100/40"} `}
      >
        {children}
      </p>
    </div>
  );
}

export default Testimonial;
