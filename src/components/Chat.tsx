import { FC } from "react";
import ChatHeader from "./ChatHeader";
import TextArea from "./TextArea";
import Illustration from "./Illustration";

type ConversationTypes = {
  message: string;
  type: string;
  timestamp: number;
  sources: string[];
};

const conversationData: ConversationTypes[] = [];

// const conversationData: ConversationTypes[] = [
//   {
//     message:
//       "Can you provide me with some ideas for blog posts about opensource?",
//     sources: [
//       "nethvoice.docs.nethesis.it/it/v14/index.html",
//       "nethvoice.docs.nethesis.it/it/v14/index.html",
//     ],
//     type: "question",
//     timestamp: 123456,
//   },
//   {
//     message: `Of course! Open source is a fascinating and ever-evolving topic with a wide range of subtopics to explore. Here are some blog post ideas about open source:

//     The Evolution and Impact of Open Source Software: Explore the history of open source software, its key milestones, and its impact on the tech industry, businesses, and society as a whole.

//     How to Contribute to Open Source Projects: A step-by-step guide for beginners on how to get started with contributing to open source projects, including finding projects, making contributions, and collaborating with the community.

//     The Benefits of Open Source for Businesses: Discuss the advantages of open source software for businesses, including cost savings, customization options, and enhanced security.

//     Open Source in Education: Explore the role of open source software and resources in education, from open educational resources (OER) to open source learning management systems (LMS).

//     The Importance of Open Source Licensing: An overview of different open source licenses, their implications, and how to choose the right license for your project.

//     Open Source vs. Proprietary Software: A comparative analysis of open source and proprietary software, highlighting their strengths, weaknesses, and use cases.

//     Open Source and Innovation: Discuss how open source fosters innovation, collaboration, and knowledge-sharing, leading to groundbreaking developments in various fields.

//     Women in Open Source: Shed light on the contributions and challenges faced by women in the open source community, and explore initiatives to promote diversity and inclusivity.

//     Open Source Hardware: Diving into the world of open source hardware, its significance in the maker community, and how it enables DIY enthusiasts to create and innovate.

//     The Future of Open Source: Speculate on the future trends and developments in open source, including potential challenges and opportunities on the horizon.

//     Open Source and Cybersecurity: Examine the role of open source software in cybersecurity, how it can enhance security, and common misconceptions about open source security.

//     Open Source in Government and Public Sector: Explore how open source software is being used by governments and public institutions to promote transparency, save costs, and foster citizen engagement.

//     Open Source and Artificial Intelligence: Investigate the intersection of open source and AI technologies, including popular open source AI projects and their impact on AI research and applications.

//     Open Source Tools for Developers: Showcase must-have open source tools and libraries that developers can use to streamline their workflow and boost productivity.

//     Open Source and Data Privacy: Discuss the importance of open source solutions in maintaining data privacy and how transparency in open source projects can build user trust.

//     Remember to tailor your blog posts to your target audience, whether it's beginners, developers, tech enthusiasts, or a combination of these. Additionally, stay up-to-date with the latest trends in open source to make your content more relevant and engaging. Happy blogging!
//     `,
//     type: "answer",
//     timestamp: 123456,
//     sources: [
//       "nethvoice.docs.nethesis.it/it/v14/index.html",
//       "nethvoice.docs.nethesis.it/it/v14/index.html",
//     ],
//   },
//   {
//     message: "How can i start my blog post about opensource?",
//     sources: [
//       "nethvoice.docs.nethesis.it/it/v14/index.html",
//       "nethvoice.docs.nethesis.it/it/v14/index.html",
//     ],
//     type: "question",
//     timestamp: 123456,
//   },
//   {
//     message: `To begin your blog post about open source, it's essential to capture your readers' attention and set the stage for the rest of your content. Here are some effective ways to start your blog post about open source:

//     1. **An Engaging Quote**: Start with a powerful and relevant quote about open source. It could be from a prominent figure in the open-source community, a thought-provoking statement, or even an insightful comment from a developer or user of open-source software.

//     2. **A Personal Anecdote**: Share a personal experience related to open source that sparked your interest or influenced your perspective. This could be a story about how you first encountered open-source projects or the impact they've had on your work or life.

//     3. **The Significance of Open Source**: Begin by highlighting the importance and prevalence of open source in today's digital world. Discuss its increasing relevance across various industries and the pivotal role it plays in technology, collaboration, and innovation.

//     4. **Defining Open Source**: Start with a brief explanation of what open source means, how it differs from closed-source software, and why it's a crucial concept in the tech community.

//     5. **The Power of Community**: Focus on the collaborative nature of open-source projects and the power of community-driven development. Emphasize how open source fosters a diverse, inclusive environment for developers and users to come together and create something amazing.

//     6. **Open Source Success Stories**: Begin with a few examples of successful open-source projects that have revolutionized industries, changed the way we use technology, or made a significant impact on society. This can serve as inspiration for your readers and showcase the potential of open source.

//     7. **The Philosophy Behind Open Source**: Introduce the philosophical principles that underpin the open-source movement, such as transparency, meritocracy, and the belief in sharing knowledge for the greater good.

//     8. **Addressing Misconceptions**: If there are common misconceptions or myths about open source, you could start by dispelling one of these beliefs. This will pique your readers' interest and encourage them to keep reading to learn more.

//     9. **An Invitation to Explore**: Frame your introduction as an invitation for your readers to embark on a journey to discover the world of open source. This could be phrased as a call to action or an opportunity to be part of something bigger than themselves.

//     Remember to keep your opening concise, engaging, and relevant to the main theme of your blog post. After setting the tone, you can then delve into more in-depth discussions, examples, and practical information about open source. Happy writing!`,
//     sources: [
//       "nethvoice.docs.nethesis.it/it/v14/index.html",
//       "nethvoice.docs.nethesis.it/it/v14/index.html",
//     ],
//     type: "answer",
//     timestamp: 123456,
//   },
//   {
//     message: "Write the introduction in 100 words.",
//     sources: [
//       "nethvoice.docs.nethesis.it/it/v14/index.html",
//       "nethvoice.docs.nethesis.it/it/v14/index.html",
//     ],
//     type: "question",
//     timestamp: 123456,
//   },
//   {
//     message: `In a world fueled by collaboration and innovation, there exists a dynamic force driving the technological landscape: open source. Embracing the ethos of transparency, inclusivity, and community-driven development, open source has revolutionized how we create and share software. From software giants to individual developers, its impact is felt across industries, shaping the future of technology. In this blog post, we embark on a journey to explore the significance, philosophy, and success stories behind open source. Join us as we unravel the transformative power of open source and its role in shaping the digital realm we inhabit today.`,
//     sources: [
//       "nethvoice.docs.nethesis.it/it/v14/index.html",
//       "nethvoice.docs.nethesis.it/it/v14/index.html",
//     ],
//     type: "answer",
//     timestamp: 123456,
//   },
// ];

const dotsIcon = (
  <svg
    width="19"
    height="4"
    viewBox="0 0 19 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.99869 2C2.99869 2.82806 2.32741 3.5 1.49936 3.5C0.671302 3.5 3.13987e-05 2.82806 3.24845e-05 2C3.35704e-05 1.17194 0.671306 0.500001 1.49936 0.500002C2.32742 0.500003 2.99869 1.17195 2.99869 2Z"
      fill="#444444"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.9973 2C10.9973 2.82806 10.3261 3.5 9.49801 3.5C8.66996 3.5 7.99868 2.82806 7.99869 2C7.99869 1.17194 8.66996 0.500001 9.49801 0.500002C10.3261 0.500003 10.9973 1.17195 10.9973 2Z"
      fill="#444444"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.996 2C18.996 2.82806 18.3247 3.5 17.4967 3.5C16.6686 3.5 15.9973 2.82806 15.9973 2C15.9973 1.17194 16.6686 0.500001 17.4967 0.500002C18.3247 0.500003 18.996 1.17195 18.996 2Z"
      fill="#444444"
    />
  </svg>
);

const questionIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_465_1044)">
      <path
        d="M5.66664 6.68755C5.66664 6.25004 5.76818 4.5 7.95571 4.5C9.25999 4.5 10.0417 5.37502 10.0417 6.68755C10.0417 8.58333 7.95571 8.58333 7.95571 9.86868M7.99997 11.5V11.8554M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z"
        stroke="#202020"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_465_1044">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const logoIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10.75" stroke="#dddddd" />
    <circle cx="12" cy="12" r="10.75" stroke="#dddddd" />
    <circle cx="12" cy="12" r="7.75" stroke="#dddddd" />
    <circle cx="12" cy="12" r="4.75" stroke="#dddddd" />
    <circle cx="12" cy="12" r="1.75" stroke="#dddddd" />
  </svg>
);

const copyIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 3.84615H14V13.0769H9.05M11.5 3.84615V2H7.5V3.84615M11.5 3.84615H7.5M7.5 3.84615H5V6.15385M4 8.92308H7M4 11.2308H7M2 6.61538H9V14H2V6.61538Z"
      stroke="#444444"
    />
  </svg>
);

function newQuestionCallback(data: ConversationTypes): void {
  console.log(data);
}

function newAnswerCallback(data: ConversationTypes): void {
  console.log(data);
}

const Chat: FC = () => {
  return (
    <div className="relative h-screen bg-lightGrayBackground text-lightText">
      <ChatHeader />
      {/* Conversation */}
      <div
        className="relative p-5 flex flex-col gap-2.5 overflow-y-auto overflow-x-hidden pb-36"
        style={{ height: "calc(100% - 4.25rem)" }}
      >
        {conversationData.length === 0 && (
          <div className="w-full h-full flex justify-center items-center">
            <Illustration />
          </div>
        )}
        {conversationData.length > 0 &&
          conversationData.map((row, i) => (
            <div key={i} className="flex gap-2.5">
              <div
                className={`rounded flex-shrink-0 flex items-center justify-center ${
                  row.type === "question" ? "bg-white" : "bg-emerald-500"
                }`}
                style={{ height: "1.875rem", width: "1.875rem" }}
              >
                {row.type === "question" ? questionIcon : logoIcon}
              </div>
              <div className="bg-white p-2.5 gap-2.5 flex flex-col rounded w-full">
                {row.type === "answer" && (
                  <div className="flex justify-between items-center">
                    <div>{dotsIcon}</div>
                    <div>{copyIcon}</div>
                  </div>
                )}
                <div className="text-sm">{row.message}</div>
                <div>
                  <div className="w-full h-fit p-2.5 bg-indigo-50 rounded-sm border border-blue-200 justify-start items-start gap-2.5 inline-flex">
                    <div className="text-blue-500 text-[12px] font-normal capitalize leading-[19px]">
                      Sources:
                      <br />
                      {row.sources.map((source, i) => (
                        <a
                          target="blank"
                          key={i}
                          href={
                            source.includes("https")
                              ? source
                              : `https://${source}`
                          }
                        >
                          {source}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <TextArea
        newQuestionCallback={newQuestionCallback}
        newAnswerCallback={newAnswerCallback}
      />
    </div>
  );
};

export default Chat;
