import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedText from './AnimatedText';
import ScrollReveal from 'scrollreveal';

export default function ContactForm() {
    // refs
    const form = useRef();

    // states
    const [showDraftPopup, setShowDraftPopup] = useState(false);
    const [showSubmitPopup, setShowSubmitPopup] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // form submit handler
    const sendEmail = (e) => {
        e.preventDefault(); // off page refresh
        setIsSubmitting(true); // submitting state

        // emailjs send form
        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
                publicKey: 'YOUR_PUBLIC_KEY',
            })
            // success to send form
            .then(
                () => {
                    form.current.reset(); // reset form
                    localStorage.removeItem('contactFormDraft'); // remove draft from local storage
                    setIsSubmitting(false); // submitting state
                    setShowSubmitPopup(true); // show success popup
                },
                // fail to send form
                (error) => {
                    alert("Something went wrong, please try again later."); // alert message
                    console.log('FAILED...', error.text); // log error
                    setIsSubmitting(false); // submitting state
                }
            );
    };

    // save draft handler
    const saveDraft = () => {
        // get all form data
        const formData = {
            use_name: form.current.user_name.value,
            user_company: form.current.user_company.value,
            user_email: form.current.user_email.value,
            user_phone: form.current.user_phone.value,
            message: form.current.user_message.value,
        };
        localStorage.setItem('contactFormDraft', JSON.stringify(formData)); // save to local storage
        setShowDraftPopup(true); // show draft saved popup
    };

    const closeDraftPopup = () => setShowDraftPopup(false); // when click close button, close the draft popup
    const closeSubmitPopup = () => setShowSubmitPopup(false); // when click close button, close the submit success popup

    // load draft
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('contactFormDraft')); // get draft from local storage
        if (savedData) { // if have draft, fill the form
            Object.keys(savedData).forEach((key) => {
                if (form.current[key]) form.current[key].value = savedData[key]; // fetch each form field and set value
            });
        }
    }, []);

    // scroll reveal
    useEffect(() => {
        ScrollReveal().reveal('.form-items', {
            origin: 'bottom',
            distance: '100px',
            duration: 800,
            easing: 'ease-out',
            interval: 200,
            reset: true,
            once: false,
            opacity: 0,
        });
    }, []);

    return (
        <section className="bg-white dark:bg-[#030303] mt-30">
            {/* title */}
            <AnimatedText className="md:text-4xl text-xl lg:w-[800px] w-[80%] mx-auto lg:px-12">
                <span className="before:absolute before:aspect-square before:h-1 before:bg-black dark:before:bg-white relative pl-5 before:transform before:-translate-y-1/2 before:top-1/2 before:left-0 before:rounded-full text-base pr-20 bottom-2 opacity-80">
                    Contact me
                </span>
                Get in touch with us to share your ideas, ask questions, or start a project—we’re here to help anytime!
            </AnimatedText>

            {/* form */}
            <form
                ref={form}
                onSubmit={sendEmail}
                className="px-7 lg:px-12 mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-15 gap-x-5 md:gap-x-10 text-xl md:text-3xl mt-8"
            >
                {/* input fields */}
                <input
                    required
                    name="user_name"
                    type="text"
                    placeholder="Your Name*"
                    className="form-items focus:outline-none z-2 border-b-2 dark:focus:border-white focus:border-black dark:border-white/50 border-black/50 relative w-full"
                />
                <input
                    name="user_company"
                    type="text"
                    placeholder="Your Company"
                    className="form-items focus:outline-none z-2 border-b-2 dark:focus:border-white focus:border-black dark:border-white/50 border-black/50 relative w-full"
                />
                <input
                    required
                    name="user_email"
                    type="email"
                    placeholder="Your Email*"
                    className="form-items focus:outline-none z-2 border-b-2 dark:focus:border-white focus:border-black dark:border-white/50 border-black/50 relative"
                />
                <input
                    name="user_phone"
                    type="tel"
                    placeholder="Your Phone"
                    className="form-items focus:outline-none z-2 border-b-2 dark:focus:border-white focus:border-black dark:border-white/50 border-black/50 relative"
                />
                <textarea
                    required
                    name="user_message"
                    rows="4"
                    placeholder="Your Message*"
                    className="form-items focus:outline-none z-2 border-b-2 dark:focus:border-white focus:border-black dark:border-white/50 border-black/50 relative md:col-span-2"
                ></textarea>

                {/* button */}
                <div className="flex justify-between md:col-span-2 text-base -mt-5">
                    <button
                        type="button"
                        onClick={saveDraft}
                        className="px-7 flex cursor-pointer gap-1 justify-center group md:w-max w-full py-3 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition-all items-center rounded-full"
                    >
                        <span>Save Draft</span>
                        <span className="relative overflow-hidden">
                            <svg className="h-5 dark:fill-white fill-black rotate-45 group-hover:transform group-hover:translate-x-7 ease-out transition-all group-hover:-translate-y-7 group-hover:opacity-0 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z" /></svg>
                            <svg className="h-5 dark:fill-white fill-black rotate-45 group-hover:transform -translate-x-7 top-0 letf-0 absolute group-hover:translate-x-0 transition-all translate-y-7 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z" /></svg>
                        </span>
                    </button>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-7 flex gap-1 justify-center group md:w-max w-full py-3 bg-primary hover:bg-primary/70 transition-all items-center rounded-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                            }`}
                    >
                        <span>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </span>
                        <span className="relative overflow-hidden">
                            <svg className="h-5 dark:fill-white fill-black rotate-45 group-hover:transform group-hover:translate-x-7 ease-out transition-all group-hover:-translate-y-7 group-hover:opacity-0 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z" /></svg>
                            <svg className="h-5 dark:fill-white fill-black rotate-45 group-hover:transform -translate-x-7 top-0 letf-0 absolute group-hover:translate-x-0 transition-all translate-y-7 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z" /></svg>
                        </span>
                    </button>
                </div>
            </form>

            {/* Draft Popup */}
            {showDraftPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
                    <div className="bg-white dark:bg-[#111] w-[90%] md:w-full md:max-w-140 p-4 md:p-8 rounded-2xl md:rounded-3xl text-center">
                        <h3 className="text-xl md:text-3xl font-semibold mb-3">Draft Saved Successfully</h3>
                        <p className="text-sm md:text-base text-left">
                            Your contact form data has been saved in local storage. You can see your data when refresh the page or come back later.
                        </p>
                        <button
                            onClick={closeDraftPopup}
                            className="flex gap-2 mx-auto mt-5 px-5 py-2 bg-primary hover:bg-primary/70 transition-all text-white rounded-full cursor-pointer"
                        >
                            Close
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                        </button>
                    </div>
                </div>
            )}

            {/* Submit Success Popup */}
            {showSubmitPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
                    <div className="bg-white dark:bg-[#111] w-[90%] md:w-full md:max-w-140 p-4 md:p-8 rounded-2xl md:rounded-3xl text-center">
                        <h3 className="text-xl md:text-3xl font-semibold mb-3">Form Submission Successful</h3>
                        <p className="text-sm md:text-base text-left">
                            Your data has been sent to me. I will mail you soon. Thanks!
                        </p>
                        <button
                            onClick={closeSubmitPopup}
                            className="flex gap-2 mx-auto mt-5 px-5 py-2 bg-primary hover:bg-primary/70 transition-all text-white rounded-full cursor-pointer"
                        >
                            Close
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                        </button>
                    </div>
                </div>
            )}

            {/* email */}
            <div className="flex flex-col justify-center text-center gap-1 mt-10">
                <p className="text-lg opacity-80">or, mail me directly at</p>
                <a
                    href="mailto:me@codeovik.com"
                    className="relative hover:text-primary transition-all w-max mx-auto inline-block text-3xl md:text-6xl after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-black dark:after:bg-white hover:after:bg-primary after:transition-all after:content-['']"
                >
                    me@codeovik.com
                </a>
            </div>
        </section>
    );
}