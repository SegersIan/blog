(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{216:function(e,t,o){"use strict";o.r(t);var a=o(28),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"tools-you-need-as-a-web-full-stackd-developer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tools-you-need-as-a-web-full-stackd-developer"}},[e._v("#")]),e._v(" Tools you need as a web/full-stackd developer")]),e._v(" "),o("p",[e._v("(Published originally 23.03.2018 on "),o("a",{attrs:{href:"https://medium.com/@segersian/productivity-tools-381c8a63e8cb",target:"_blank",rel:"noopener noreferrer"}},[e._v("Medium"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("p",[e._v("Your toolkit plays a significant role in your productivity. Therefore every web and full-stack developer should have a toolkit that helps you to get the job done. I want to share an overview of the tools that help me with my everyday work as a full-stack developer.")]),e._v(" "),o("h2",{attrs:{id:"http-client"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#http-client"}},[e._v("#")]),e._v(" HTTP Client")]),e._v(" "),o("p",[e._v("An HTTP Client is crucial to test quickly and efficiently any API, that being your own API or a 3th party API. I use "),o("a",{attrs:{href:"https://www.postman.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Postman"),o("OutboundLink")],1),e._v(" for this. I love it for its straight forward user interface and the persisted history of all API calls I made. I save hours of my time with this tool when needing to play around with APIs. I am just scratching the surface regarding its features and benefits. Definitely worth checking out.")]),e._v(" "),o("h2",{attrs:{id:"tunneling"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tunneling"}},[e._v("#")]),e._v(" Tunneling")]),e._v(" "),o("p",[e._v("In todays world many services and APIs offer a webhook feature, basically a 3th part service that pushes updates to your publicly exposed API endpoint. This can range from receiving a webhook when a build has completed on your continuous integration server, to receiving message updates from Facebook while developing a chatbot.")]),e._v(" "),o("p",[e._v("When developing and testing such integration, you need to be able to expose publicly your local development server to receive these payloads for testing purposes.")]),e._v(" "),o("p",[e._v("A great tool for this is "),o("a",{attrs:{href:"https://ngrok.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ngrok"),o("OutboundLink")],1),e._v(", comes with a CLI which enables you to create a tunnel in a single command that exposes a public URL to your local development server. What I love about this tool is that it’s easy to use and for a small fee you can have a dedicated subdomain.")]),e._v(" "),o("p",[e._v("When launching the ngrok tunnel you get a public url (like http://somerandomstring.ngrok.io) that you can use to register your webhooks to. On your local machine you get a web interface which allows you to inspect the request and response payloads sent to your tunnel with the ability to replay any of those request. This is great, because you don’t need to re-trigger the received webhooks while testing.")]),e._v(" "),o("p",[e._v("This tool is also supper for a demo when you want to give access to anyone on the web to your locally hosted server or web application. Supports also HTTPS!")]),e._v(" "),o("h2",{attrs:{id:"local-proxy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#local-proxy"}},[e._v("#")]),e._v(" Local Proxy")]),e._v(" "),o("p",[e._v("A local proxy to inspect any API calls that your local server makes can be extremely useful for debugging and diagnosing failing API calls. I’am gonna kill two birds with one stone here, because I use "),o("a",{attrs:{href:"https://github.com/zaproxy/zaproxy",target:"_blank",rel:"noopener noreferrer"}},[e._v("OWASP ZAP"),o("OutboundLink")],1),e._v(" for that.")]),e._v(" "),o("p",[e._v("Primarily this tool is used for security testing, like, penetration testing, so in addition to getting a great security testing tool, you get a local proxy that gets the job done when you need to inspect all API calls that your local development server makes to figure out what you’re doing wrong.")]),e._v(" "),o("p",[e._v("Make sure to track the OWASP project, which stands for Open Web Application Security Project, helps you in improving the security of your web application.")]),e._v(" "),o("h2",{attrs:{id:"regex-tester"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#regex-tester"}},[e._v("#")]),e._v(" Regex Tester")]),e._v(" "),o("p",[e._v("Regex is a necessary evil for us, developers. I still often struggle to break down and comprehend the syntax, I use "),o("a",{attrs:{href:"https://regex101.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("regex101"),o("OutboundLink")],1),e._v(" to help me to debug and format any regular expressions. With its explanation feature it really helps to understand any Regex and debug them.")]),e._v(" "),o("h2",{attrs:{id:"database-client"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#database-client"}},[e._v("#")]),e._v(" Database Client")]),e._v(" "),o("p",[e._v("Being able to directly view and update the data while developing is paramount. In my current project we’re using MongoDB, so I use a MongoDB Client. My favorite is "),o("a",{attrs:{href:"https://robomongo.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Robo 3T"),o("OutboundLink")],1),e._v(" (former RoboMongo). This tool has all the basic features that I need with a proper MongoDB shell to execute and test my queries. Nothing fancy, just all the basics I need to do my job.")]),e._v(" "),o("p",[e._v("Robo 3T has also a bigger brother, called Studio 3T (former MongoChef) which comes with excellent features, but not without a price tag.")]),e._v(" "),o("h2",{attrs:{id:"terminal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#terminal"}},[e._v("#")]),e._v(" Terminal")]),e._v(" "),o("p",[e._v("As I use a Mac for development (Hipster Alert), I want to be fast and productive when using the terminal. I use "),o("a",{attrs:{href:"https://www.iterm2.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("iTerm2"),o("OutboundLink")],1),e._v(" as my primary Terminal interface, which gives me more freedom in customizing my terminal interface. Comes with useful shortcuts, like creating side by side terminal views and such.")]),e._v(" "),o("p",[e._v("In addition to iTerm2 I use the "),o("a",{attrs:{href:"http://www.zsh.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZSH shell"),o("OutboundLink")],1),e._v(" with many of the plugins from the "),o("a",{attrs:{href:"https://ohmyz.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oh My Zsh community"),o("OutboundLink")],1),e._v(". These plugins can be very useful since they come with auto complete for several CLI tools like git, docker, kubectl and many others. Check out all the available plugins "),o("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("I strongly suggest to anyone who is comfortable in the terminal to research tools and plugins that elevates their CLI experience.")]),e._v(" "),o("h2",{attrs:{id:"conclusion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),o("p",[e._v("These tools I use on a daily basis to increase my productivity, therefore they are worth sharing with you. Do you want to share any tools, or do you have great alternatives worth looking into? I am eager to hear your thoughts in the comments below.")])])}),[],!1,null,null,null);t.default=r.exports}}]);