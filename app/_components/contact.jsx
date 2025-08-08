import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="relativ py-20 px-[200] sm:px-8 lg:px-16   max-w-[900px] mx-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* البيانات */}
        <div>
          <h2 className="text-4xl font-bold text-primary font-palyfair mb-6">Contact Now</h2>
          <div className="grid gap-8">
            {/* Write Us */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Write Us
              </h3>
              <div className="flex items-center mt-5 gap-5 text-2xl text-green-600 ">
              
                {/*  */}
               
                <a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
                <a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
                <a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
                <a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
                <a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 18c-4.51 2-5-2-7-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
              </div>
            </div>

            {/* Delivery */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Delivery
              </h3>
              <address className="not-italic text-gray-600 leading-relaxed">
                +20 109 186 6077 <br />
                Cairo, Egypt
              </address>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Location
              </h3>
              <address className="not-italic text-gray-600 mb-2">
                Cairo, Egypt
              </address>
              <a
                href="https://maps.app.goo.gl/UDrCMbeoxXC5pU9k6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                <i className="ri-map-pin-fill mr-1"></i>
                <span>View On Map</span>
              </a>
            </div>
          </div>
        </div>

        {/* الصورة */}
        <div className="relative flex justify-center items-center group">
  <img
    src="/contact-img.png"
    alt="Contact"
    className="max-w-full w-[400px] h-auto transform transition-transform duration-500 ease-in-out group-hover:scale-105"
  />

  {/* استيكرات */}
  <img
    src="/sticker-tomato.svg"
    alt="Tomato Sticker"
    className="absolute top-[-20px] left-[-20px] w-12 h-12"
  />
  <img
    src="/sticker-mushroom.svg"
    alt="Mushroom Sticker"
    className="absolute bottom-[20px] right-[30px] w-10 h-10"
  />
  <img
    src="/sticker-onion.svg"
    alt="Onion Sticker"
    className="absolute top-[30px] right-[10px] w-10 h-10"
  />
  <img
    src="/sticker-onion.svg"
    alt="Onion Sticker"
    className="absolute top-[50px] right-[30px] w-10 h-10"
  />
</div>
</div>
    </div>
  );
};

export default Contact;
