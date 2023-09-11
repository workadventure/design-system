export default {
    "*": { "@apply box-border": true },
    "html,\nbody": { "@apply text-contrast font-main p-0 m-0 box-border": true },
    ".paragraph": { "@apply font-normal": true },
    ".paragraph-xxs": { "@apply text-xxs": true },
    ".paragraph-xs": { "@apply text-xs": true },
    ".paragraph-sm": { "@apply text-sm": true },
    ".paragraph-lg": { "@apply text-lg": true },
    ".paragraph-bold": { "@apply font-bold": true },
    ".paragraph-italic": { "@apply italic": true },
    "h1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6": { "@apply font-title m-0 uppercase": true },
    "h1 .underline, h2 .underline, h3 .underline, h4 .underline, h5 .underline, h6 .underline, .h1 .underline, .h2 .underline, .h3 .underline, .h4 .underline, .h5 .underline, .h6 .underline":
        {
            '@apply relative no-underline text-secondary z-10 after:content-[""] after:absolute after:bottom-0 after:left-0 after:m-auto after:w-full after:h-[6px] after:block after:bg-[url("../img/underline.svg")] after:bg-center after:bg-[length:100%_100%] after:bg-no-repeat after:z-0': true,
        },
    "h1 .highlight, h2 .highlight, h3 .highlight, h4 .highlight, h5 .highlight, h6 .highlight, .h1 .highlight, .h2 .highlight, .h3 .highlight, .h4 .highlight, .h5 .highlight, .h6 .highlight":
        {
            '@apply relative z-10 after:content-[""] after:absolute after:top-0 after:left-[-5px] after:m-auto after:w-[110%] after:h-[110%] after:block after:bg-[url("../img/hightlight.svg")] after:bg-center after:bg-[length:100%_100%] after:bg-no-repeat after:z-0': true,
        },
    "h1 .highlight span,\nh1 .highlight-text,\nh2 .highlight span,\nh2 .highlight-text,\nh3 .highlight span,\nh3 .highlight-text,\nh4 .highlight span,\nh4 .highlight-text,\nh5 .highlight span,\nh5 .highlight-text,\nh6 .highlight span,\nh6 .highlight-text,\n.h1 .highlight span,\n.h1 .highlight-text,\n.h2 .highlight span,\n.h2 .highlight-text,\n.h3 .highlight span,\n.h3 .highlight-text,\n.h4 .highlight span,\n.h4 .highlight-text,\n.h5 .highlight span,\n.h5 .highlight-text,\n.h6 .highlight span,\n.h6 .highlight-text":
        { "@apply relative z-10 text-white": true },
    "h1 .stripe.stripe-blue, h2 .stripe.stripe-blue, h3 .stripe.stripe-blue, h4 .stripe.stripe-blue, h5 .stripe.stripe-blue, h6 .stripe.stripe-blue, .h1 .stripe.stripe-blue, .h2 .stripe.stripe-blue, .h3 .stripe.stripe-blue, .h4 .stripe.stripe-blue, .h5 .stripe.stripe-blue, .h6 .stripe.stripe-blue":
        {
            '@apply relative z-20 leading-[4rem] pl-6 pr-4 after:content-[""] after:absolute after:top-0 after:left-[-15px] after:m-auto after:w-[115%] after:h-[100%] after:block after:bg-[url("../img/stripe-blue.svg")] after:bg-center after:bg-[length:100%_100%] after:bg-no-repeat after:z-10': true,
        },
    "h1 .stripe.stripe-blue .stripe-blue-text,\nh1 .stripe.stripe-blue span,\nh2 .stripe.stripe-blue .stripe-blue-text,\nh2 .stripe.stripe-blue span,\nh3 .stripe.stripe-blue .stripe-blue-text,\nh3 .stripe.stripe-blue span,\nh4 .stripe.stripe-blue .stripe-blue-text,\nh4 .stripe.stripe-blue span,\nh5 .stripe.stripe-blue .stripe-blue-text,\nh5 .stripe.stripe-blue span,\nh6 .stripe.stripe-blue .stripe-blue-text,\nh6 .stripe.stripe-blue span,\n.h1 .stripe.stripe-blue .stripe-blue-text,\n.h1 .stripe.stripe-blue span,\n.h2 .stripe.stripe-blue .stripe-blue-text,\n.h2 .stripe.stripe-blue span,\n.h3 .stripe.stripe-blue .stripe-blue-text,\n.h3 .stripe.stripe-blue span,\n.h4 .stripe.stripe-blue .stripe-blue-text,\n.h4 .stripe.stripe-blue span,\n.h5 .stripe.stripe-blue .stripe-blue-text,\n.h5 .stripe.stripe-blue span,\n.h6 .stripe.stripe-blue .stripe-blue-text,\n.h6 .stripe.stripe-blue span":
        { "@apply relative z-20 text-white": true },
    "h1 .stripe.stripe-white, h2 .stripe.stripe-white, h3 .stripe.stripe-white, h4 .stripe.stripe-white, h5 .stripe.stripe-white, h6 .stripe.stripe-white, .h1 .stripe.stripe-white, .h2 .stripe.stripe-white, .h3 .stripe.stripe-white, .h4 .stripe.stripe-white, .h5 .stripe.stripe-white, .h6 .stripe.stripe-white":
        {
            '@apply relative z-10 mt-2 after:content-[""] after:absolute after:top-0 after:left-[-32px] after:m-auto after:min-w-[250px] after:w-[120%] after:h-[100%] after:block after:bg-[url("../img/stripe-white.svg")] after:bg-center after:bg-[length:100%_100%] after:bg-no-repeat after:z-0': true,
        },
    "h1 .stripe.stripe-white .stripe-white-text,\nh1 .stripe.stripe-white span,\nh2 .stripe.stripe-white .stripe-white-text,\nh2 .stripe.stripe-white span,\nh3 .stripe.stripe-white .stripe-white-text,\nh3 .stripe.stripe-white span,\nh4 .stripe.stripe-white .stripe-white-text,\nh4 .stripe.stripe-white span,\nh5 .stripe.stripe-white .stripe-white-text,\nh5 .stripe.stripe-white span,\nh6 .stripe.stripe-white .stripe-white-text,\nh6 .stripe.stripe-white span,\n.h1 .stripe.stripe-white .stripe-white-text,\n.h1 .stripe.stripe-white span,\n.h2 .stripe.stripe-white .stripe-white-text,\n.h2 .stripe.stripe-white span,\n.h3 .stripe.stripe-white .stripe-white-text,\n.h3 .stripe.stripe-white span,\n.h4 .stripe.stripe-white .stripe-white-text,\n.h4 .stripe.stripe-white span,\n.h5 .stripe.stripe-white .stripe-white-text,\n.h5 .stripe.stripe-white span,\n.h6 .stripe.stripe-white .stripe-white-text,\n.h6 .stripe.stripe-white span":
        { "@apply relative z-30 text-contrast": true },
    "h1 .stripe.stripe-inline.stripe-blue,\nh1 .stripe.stripe-inline.stripe-white,\nh2 .stripe.stripe-inline.stripe-blue,\nh2 .stripe.stripe-inline.stripe-white,\nh3 .stripe.stripe-inline.stripe-blue,\nh3 .stripe.stripe-inline.stripe-white,\nh4 .stripe.stripe-inline.stripe-blue,\nh4 .stripe.stripe-inline.stripe-white,\nh5 .stripe.stripe-inline.stripe-blue,\nh5 .stripe.stripe-inline.stripe-white,\nh6 .stripe.stripe-inline.stripe-blue,\nh6 .stripe.stripe-inline.stripe-white,\n.h1 .stripe.stripe-inline.stripe-blue,\n.h1 .stripe.stripe-inline.stripe-white,\n.h2 .stripe.stripe-inline.stripe-blue,\n.h2 .stripe.stripe-inline.stripe-white,\n.h3 .stripe.stripe-inline.stripe-blue,\n.h3 .stripe.stripe-inline.stripe-white,\n.h4 .stripe.stripe-inline.stripe-blue,\n.h4 .stripe.stripe-inline.stripe-white,\n.h5 .stripe.stripe-inline.stripe-blue,\n.h5 .stripe.stripe-inline.stripe-white,\n.h6 .stripe.stripe-inline.stripe-blue,\n.h6 .stripe.stripe-inline.stripe-white":
        { "@apply inline-block py-3 px-6": true, transform: "translate(-10px, 20px)" },
    "h1,\n.h1": { "@apply text-[44px] leading-10": true },
    "h2,\n.h2": { "@apply text-[40px] leading-10": true },
    "h3,\n.h3": { "@apply text-[36px] leading-10": true },
    "h4,\n.h4": { "@apply text-[32px]": true },
    "h5,\n.h5": { "@apply text-[26px]": true },
    "h6,\n.h6": { "@apply text-[22px]": true },
    ".light": { "@apply font-light": true },
    ".bold": { "@apply font-bold": true },
    ".regular": { "@apply font-normal": true },
    ".subtitle": { "@apply text-neutral text-center m-0": true },
};
