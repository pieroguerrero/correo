import pngSelectAll from "../../assets/filters/check_box_outline_blank_FILL0_wght400_GRAD0_opsz24.png";
import pngSelectOptions from "../../assets/filters/arrow_drop_down_FILL0_wght400_GRAD0_opsz24.png";
import pngRefresh from "../../assets/filters/refresh_FILL0_wght400_GRAD0_opsz24.png";
import pngMoreOptions from "../../assets/filters/more_vert_FILL0_wght400_GRAD0_opsz24.png";
export default function EmailFilters() {
  return (
    <div className="w-full flex flex-row items-center pl-4 bg-white rounded-t-xl">
      <div className="w-5 h-5">
        <img src={pngSelectAll} alt="select all" />
      </div>
      <div className=" w-full flex items-center p-4 gap-4 rounded-t-xl">
        <div className="w-5 h-5">
          <img src={pngSelectOptions} alt="select options" />
        </div>

        <div className="w-5 h-5">
          <img src={pngRefresh} alt="refresh" />
        </div>

        <div className="w-5 h-5">
          <img src={pngMoreOptions} alt="more options" />
        </div>
      </div>
    </div>
  );
}
