import Image from "next/image";
import BoonTribe from "../asset/boon-05.png";

function Brand() {
  return (
    <div className="flex justify-center">
      <Image
        src={BoonTribe}
        alt="boon tribe branding"
        className="max-w-md max-h-110"
      />
    </div>
  );
}

export default Brand;
