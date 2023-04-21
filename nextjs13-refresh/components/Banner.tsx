import { IBannerProps } from '@/types/Interface';
import Image from 'next/image';

const banner = (bannerProps: IBannerProps) => {
  return (
    <header className="flex justify-center gap-10 items-center ">
      <div>
        <Image
          className="rounded-md"
          src="https://dummyimage.com/150x100/052e16/fcfcfc&text=logo+handler"
          width={150}
          height={90}
          alt="the branding of the page"
        />
      </div>
      <div>
        <p className="font-bold text-xl text-amber-800">
          {bannerProps.headerText}
        </p>
      </div>
    </header>
  );
};

export default banner;
