import { FC, KeyboardEvent, useRef } from "react";
import { ConversationTypes } from "./Chat";

interface TextAreaTypes {
  newAnswerCallback: (data: ConversationTypes) => void;
  newQuestionCallback: (data: ConversationTypes) => void;
}

interface AskResponse {
  answer: string,
  history: string,
  sources: string[]
}

const TextArea: FC<TextAreaTypes> = ({
  newQuestionCallback,
  newAnswerCallback,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  async function sendQuestionRequest() {
    if (textAreaRef.current?.value) {
      newQuestionCallback({
        message: textAreaRef.current?.value,
        type: "question",
        timestamp: Date.now(),
        sources: [],
      });

      const question = textAreaRef.current?.value.slice()
      textAreaRef.current.value = ''

      try {
        const request: Response = await fetch(
          `http://${import.meta.env.VITE_BASE_API_HOST}/ask`,
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              question: question,
              history: "",
            }),
          }
        );

        const data: AskResponse = await request.json();

        if (data) {
          newAnswerCallback({
            message: data.answer,
            type: "answer",
            timestamp: Date.now(),
            sources: data.sources,
          });
        }

        console.log("data");
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  }

  function handleEnter(e: KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendQuestionRequest();
    }
  }

  return (
    <>
      <div className="w-full h-fit absolute bottom-0 p-5 z-20">
        <div className="bg-white w-full flex items-center h-[50px] pr-1.5 gap-1.5 shadow-lg rounded-md">
          <div className="w-full h-full overflow-hidden">
            <textarea
              ref={textAreaRef}
              className="text-sm h-full rounded-md focus:outline-none"
              style={{
                padding: ".625rem",
                paddingTop: ".9375rem",
                resize: "none",
                width: "calc(100% + 20px)",
              }}
              rows={10}
              wrap="hard"
              placeholder="Ask A Question"
              onKeyDown={handleEnter}
            />
          </div>
          <div
            style={{
              width: "31px",
              height: "31px",
            }}
            className="flex justify-center items-center hover:bg-gray-100 transition-colors cursor-pointer rounded"
          >
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9286 9.00002C13.9286 9.28418 13.8157 9.5567 13.6147 9.75763C13.4138 9.95856 13.1413 10.0714 12.8571 10.0714C12.573 10.0714 12.3004 9.95856 12.0995 9.75763C11.8986 9.5567 11.7857 9.28418 11.7857 9.00002C11.7857 8.71586 11.8986 8.44334 12.0995 8.2424C12.3004 8.04147 12.573 7.92859 12.8571 7.92859C13.1413 7.92859 13.4138 8.04147 13.6147 8.2424C13.8157 8.44334 13.9286 8.71586 13.9286 9.00002ZM8.57141 9.00002C8.57141 9.28418 8.45853 9.5567 8.2576 9.75763C8.05666 9.95856 7.78414 10.0714 7.49998 10.0714C7.21582 10.0714 6.9433 9.95856 6.74237 9.75763C6.54144 9.5567 6.42855 9.28418 6.42855 9.00002C6.42855 8.71586 6.54144 8.44334 6.74237 8.2424C6.9433 8.04147 7.21582 7.92859 7.49998 7.92859C7.78414 7.92859 8.05666 8.04147 8.2576 8.2424C8.45853 8.44334 8.57141 8.71586 8.57141 9.00002ZM2.14284 10.0714C1.85868 10.0714 1.58616 9.95856 1.38523 9.75763C1.18429 9.5567 1.07141 9.28418 1.07141 9.00002C1.07141 8.71586 1.18429 8.44334 1.38523 8.2424C1.58616 8.04147 1.85868 7.92859 2.14284 7.92859C2.427 7.92859 2.69952 8.04147 2.90045 8.2424C3.10139 8.44334 3.21427 8.71586 3.21427 9.00002C3.21427 9.28418 3.10139 9.5567 2.90045 9.75763C2.69952 9.95856 2.427 10.0714 2.14284 10.0714Z"
                fill="#444444"
              />
            </svg>
          </div>
          <div
            onClick={sendQuestionRequest}
            style={{
              width: "31px",
              height: "31px",
            }}
            className="flex justify-center items-center bg-emerald-500 hover:bg-emerald-600  transition-colors cursor-pointer rounded"
          >
            <svg
              width="31"
              height="32"
              viewBox="0 0 31 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_719_1129)">
                <path
                  d="M8.09963 10.7939C7.92384 10.4424 7.98537 10.0176 8.2549 9.73044C8.52443 9.44333 8.94338 9.35837 9.30666 9.51071L22.4317 15.1357C22.7774 15.2822 23 15.622 23 15.997C23 16.372 22.7774 16.7119 22.4317 16.8584L9.30666 22.4834C8.94631 22.6386 8.52443 22.5508 8.2549 22.2636C7.98537 21.9765 7.92384 21.5517 8.09963 21.2002L10.7012 16L8.09963 10.7939ZM11.5156 16.4687L8.93752 21.625L20.9697 16.4687H11.5156ZM20.9697 15.5312L8.93752 10.375L11.5156 15.5312H20.9697Z"
                  fill="#dddddd"
                />
              </g>
              <defs>
                <clipPath id="clip0_719_1129">
                  <rect
                    width="15"
                    height="15"
                    fill="white"
                    transform="translate(8 8.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-36 w-full bg-gradient-to-b from-transparent to-lightGrayBackground z-10 pointer-events-none" />
    </>
  );
};

export default TextArea;
