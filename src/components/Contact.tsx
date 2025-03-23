import {forwardRef } from "react";


const Contact = forwardRef<HTMLDivElement, {}>((_, ref) => {
    return (
      <div ref={ref} className="bg-blue-100 h-[58rem] rounded-[12px]">
        <div>Contact</div>
      </div>
    );
  });
  

export default Contact;