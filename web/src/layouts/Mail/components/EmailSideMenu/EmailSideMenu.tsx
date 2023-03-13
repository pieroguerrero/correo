import svgMenu from "../../../../assets/sidemenu/menu_FILL0_wght400_GRAD0_opsz24.png";
import svgMail from "../../../../assets/sidemenu/mail_FILL1_wght400_GRAD0_opsz20.png";
import svgChat from "../../../../assets/sidemenu/chat_bubble_FILL0_wght200_GRAD0_opsz20.png";

export default function EmailSideMenu() {
  return (
    <div className=" w-[68px] h-full bg-[#eaf1fb] flex flex-col items-center space-y-4 py-2 z-10">
      <button className="flex items-center justify-center opacity-70  hover:bg-[#dae1eb] rounded-full w-12 h-12 mb-2">
        <img src={svgMenu} alt="menu icon" />
      </button>
      <button>
        <div className="w-12 h-8 rounded-full flex items-center justify-center bg-blue-200/50 mx-auto bg-center">
          <img src={svgMail} alt="mail icon" />
        </div>
        <p className="text-xs">Mail</p>
      </button>
      <button>
        <div className="flex items-center justify-center w-12 h-8 rounded-full mx-auto bg-center bg-no-repeat">
          <img src={svgChat} alt="chat icon" />
        </div>
        <p className="text-xs">Chat</p>
      </button>
      <button>
        <div className="flex items-center justify-center w-12 h-8 rounded-full mx-auto bg-center bg-no-repeat">
          <img
            src={
              "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/gmail_groups_baseline_nv700_20dp.png"
            }
            alt="chat icon"
          />
        </div>
        <p className="text-xs">Spaces</p>
      </button>
      <button>
        <div className="flex items-center justify-center w-12 h-8 rounded-full mx-auto bg-center bg-no-repeat">
          <img
            src={
              "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/meet_baseline_nv700_20dp.png"
            }
            alt="chat icon"
          />
        </div>
        <p className="text-xs">Meet</p>
      </button>
    </div>
  );
}
