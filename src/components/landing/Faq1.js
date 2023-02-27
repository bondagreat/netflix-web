import { useState } from 'react';
import { PlusLandingPageIcon } from '../../images';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Faq1({ head, body, active }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AccordionItem className="mb-2">
        <AccordionItemHeading
          className="mb-[2px] "
          // onClick={() => setOpen(!open)}
        >
          <AccordionItemButton className="bg-[#303030] p-6 flex items-center justify-between">
            <p className="text-white bg-[#303030] text-2xl font-medium ">
              {head}
            </p>
            <div
              className={`w-6 fill-white duration-200 ${
                active ? 'rotate-45' : ''
              }`}
            >
              <PlusLandingPageIcon />
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="bg-[#303030] p-6">
          <p className="text-white bg-[#303030] text-2xl font-medium">{body}</p>
        </AccordionItemPanel>
      </AccordionItem>
    </>
  );
}
