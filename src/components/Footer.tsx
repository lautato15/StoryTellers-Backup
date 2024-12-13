import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Footer() {

  return (
    <footer>
      <Accordion type="single" collapsible className="w-full mt-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>LA UBICACION</AccordionTrigger>
          <AccordionContent className="p-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque facere non dolorem, animi dolorum, nobis illo veniam expedita aliquid consectetur eum commodi corporis eos a tenetur. Ipsa tempore atque est?
            Doloremque est sequi impedit porro voluptas voluptatibus dolorum alias nulla sed mollitia quas veritatis ratione, sapiente culpa rem sit praesentium, officia eaque. Porro perferendis temporibus eveniet nemo nostrum dolor et!
            Debitis, excepturi quae ipsa quos dolor voluptas optio aut distinctio quaerat reiciendis amet ad corporis numquam perspiciatis aliquid rerum eveniet! Porro repellendus mollitia, voluptas veniam velit obcaecati debitis exercitationem quis?
            Autem cumque inventore dolores corporis odio itaque omnis nostrum labore delectus! Ut, saepe! Similique deserunt ipsa repudiandae id sequi quidem odit voluptas alias soluta architecto eum illum, repellat provident nihil!
            Officia quas cum, alias dicta esse sint sed, iure asperiores ea voluptatem voluptatibus mollitia, excepturi explicabo. Animi, repellendus voluptatem? Sed sit ducimus assumenda nobis architecto, libero itaque nam nihil culpa.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className='my-2'>
          <AccordionTrigger>FUNCIONAMIENTO</AccordionTrigger>
          <AccordionContent className="p-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque facere non dolorem, animi dolorum, nobis illo veniam expedita aliquid consectetur eum commodi corporis eos a tenetur. Ipsa tempore atque est?
            Doloremque est sequi impedit porro voluptas voluptatibus dolorum alias nulla sed mollitia quas veritatis ratione, sapiente culpa rem sit praesentium, officia eaque. Porro perferendis temporibus eveniet nemo nostrum dolor et!
            Debitis, excepturi quae ipsa quos dolor voluptas optio aut distinctio quaerat reiciendis amet ad corporis numquam perspiciatis aliquid rerum eveniet! Porro repellendus mollitia, voluptas veniam velit obcaecati debitis exercitationem quis?
            Autem cumque inventore dolores corporis odio itaque omnis nostrum labore delectus! Ut, saepe! Similique deserunt ipsa repudiandae id sequi quidem odit voluptas alias soluta architecto eum illum, repellat provident nihil!
            Officia quas cum, alias dicta esse sint sed, iure asperiores ea voluptatem voluptatibus mollitia, excepturi explicabo. Animi, repellendus voluptatem? Sed sit ducimus assumenda nobis architecto, libero itaque nam nihil culpa.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>ANTECDENTES</AccordionTrigger>
          <AccordionContent className="p-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque facere non dolorem, animi dolorum, nobis illo veniam expedita aliquid consectetur eum commodi corporis eos a tenetur. Ipsa tempore atque est?
            Doloremque est sequi impedit porro voluptas voluptatibus dolorum alias nulla sed mollitia quas veritatis ratione, sapiente culpa rem sit praesentium, officia eaque. Porro perferendis temporibus eveniet nemo nostrum dolor et!
            Debitis, excepturi quae ipsa quos dolor voluptas optio aut distinctio quaerat reiciendis amet ad corporis numquam perspiciatis aliquid rerum eveniet! Porro repellendus mollitia, voluptas veniam velit obcaecati debitis exercitationem quis?
            Autem cumque inventore dolores corporis odio itaque omnis nostrum labore delectus! Ut, saepe! Similique deserunt ipsa repudiandae id sequi quidem odit voluptas alias soluta architecto eum illum, repellat provident nihil!
            Officia quas cum, alias dicta esse sint sed, iure asperiores ea voluptatem voluptatibus mollitia, excepturi explicabo. Animi, repellendus voluptatem? Sed sit ducimus assumenda nobis architecto, libero itaque nam nihil culpa.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </footer>
  );
}