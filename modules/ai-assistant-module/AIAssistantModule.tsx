import { HeaderContactUs } from "@/modules/contact-us/components/header-base/HeaderBase";
import { NewChatButton } from "@/components/chatbox/NewChatButton";
import { ChatInputBox } from "./components/ChatInputBox";

type Props = {};

export const AIAssistantModule = (props: Props) => {
  return (
    <div>
      <div className="lg:hidden pb-10 md:block xs:hidden border-none">
        <HeaderContactUs isDarkLogo={true} />
      </div>
      <div className="md:hidden  block  border-none">
        <HeaderContactUs isDarkLogo={true} />
      </div>
      <div className="flex items-center justify-between gap-4 lg:justify-between md:justify-between lg:px-[63px] md:px-0 px-[45px] lg:mt-[122px]">
        <p>AI Assistant</p>
        <NewChatButton />
      </div>
      <div className="lg:px-[296px] md:px-[65px] px-10 lg:mt-[30px]">
        <div className="lg:mt-[10px] md:mt-[50px] mt-[33px] relative">
          <ChatInputBox />
        </div>
      </div>
    </div>
  );
};
