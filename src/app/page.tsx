'use client';

import Image from "next/image";
import { Search } from "./_component/search";
import Link from "next/link";
import { useState } from "react";

export interface userProps {
  login: string;
  name: string;
  created_at: string;
  avatar_url: string;
  followers: number;
  following: number;
  twitter_username: string | null;
  public_repos: number;
  location: string | null;
  bio: string | null;
  blog: string;
}

export default function Page() {
  const [user, setUser] = useState<userProps>();

  function formatDate(dateJoin: string): string {
    const date = new Date(dateJoin);
    const year = date.getFullYear();
    const day = date.getDate();
    const monthOptions: Intl.DateTimeFormatOptions = { month: 'short' };
    const month = new Intl.DateTimeFormat('en-US', monthOptions).format(date);

    return `${year} Joined ${day} ${month}`;
  }

  return (
    <main className="flex min-h-screen flex-col items-center px-4 mt-8">
      <Search searchUser={setUser} />

      <div className="max-w-[730px] w-full mx-auto mt-10 rounded-2xl p-4 sm:p-12 bg-white dark:bg-[#1E2A47] shadow-lg shadow-gray-400/50 dark:shadow-none">
        {user ?
          <div className=" w-full gap-8 text-white">
            <div className="w-full flex gap-8 items-start">

              <Image
                src={user.avatar_url}
                width={117}
                height={117}
                alt="Picture of the author"
                className="rounded-full w-14 h-14"
              />

              <div className="w-full flex justify-between flex-col md:flex-row">
                <div className="flex items-start">
                  <div>
                    <h1 className="font-bold text-[#2B3442] dark:text-white text-[26px]">{user.login}</h1>
                    <p className="text-[#60ABFF] text-base">{user.name}</p>
                  </div>
                </div>
                <p className="text-[#4B6A9B] dark:text-white"> {formatDate(user.created_at)}</p>
              </div>
            </div>

            <div className="max-w-full md:max-w-[483.4px] md:w-full  mr-0 ml-auto">
              <div className="mt-6">
                <p className="text-[#8C92A1]">{user.bio ?? "This profile has no bio"}</p>
                <div className="mt-9 flex flex-wrap flex-col md:flex-row gap-4 bg-[#F6F8FF] dark:bg-[#141D2F] py-3.5 px-8 rounded-2xl">
                  <div className="flex-1">
                    <p className="text-[#4B6A9B] dark:text-white">Repos</p>
                    <h2 className="text-2xl font-bold text-[#2B3442] dark:text-white">{user.public_repos}</h2>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#4B6A9B] dark:text-white">Followers</p>
                    <h2 className="text-2xl font-bold text-[#2B3442] dark:text-white">{user.followers}</h2>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#4B6A9B] dark:text-white">Following</p>
                    <h2 className="text-2xl font-bold text-[#2B3442] dark:text-white">{user.following}</h2>
                  </div>
                </div>
              </div>

              <div className="mt-6 gap-4 flex flex-wrap justify-between flex-col sm:flex-row">
                <div className="flex-1 min-w-[200px]">
                  <p className="text-[#4B6A9B] dark:text-white flex gap-4 items-center">
                    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="fill-[#141D2F] dark:fill-white" fillRule="evenodd" clipRule="evenodd" d="M7.03013 0.00158203C9.42758 0.0504882 11.5835 1.33021 12.7973 3.4249C14.038 5.56599 14.072 8.13786 12.8882 10.3047L7.92872 19.3823L7.92196 19.3943C7.7038 19.7736 7.3129 20 6.87634 20C6.43974 20 6.04884 19.7736 5.83064 19.3943L5.82388 19.3823L0.86439 10.3047C-0.319437 8.13786 -0.285492 5.56599 0.95521 3.4249C2.16904 1.33021 4.32497 0.0504882 6.72239 0.00158203C6.82477 -0.000527343 6.92778 -0.000527343 7.03013 0.00158203ZM4.06376 6.25001C4.06376 7.80083 5.32544 9.06251 6.87626 9.06251C8.42712 9.06251 9.68876 7.80083 9.68876 6.25001C9.68876 4.69919 8.42708 3.43752 6.87626 3.43752C5.32544 3.43752 4.06376 4.69919 4.06376 6.25001Z" fill="white" />
                    </svg>
                    San Francisco
                  </p>
                </div>
                <div className="flex gap-4 flex-1 min-w-[200px]">
                  <Link href="" className="text-[#4B6A9B] dark:text-white flex gap-4 items-center">
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="fill-[#141D2F] dark:fill-white" d="M20 2.29875C19.2562 2.625 18.4637 2.84125 17.6375 2.94625C18.4875 2.43875 19.1362 1.64125 19.4412 0.68C18.6487 1.1525 17.7737 1.48625 16.8412 1.6725C16.0887 0.871249 15.0162 0.375 13.8462 0.375C11.5762 0.375 9.74874 2.2175 9.74874 4.47625C9.74874 4.80125 9.77624 5.11375 9.84374 5.41124C6.43499 5.245 3.41875 3.61125 1.3925 1.1225C1.03875 1.73625 0.831249 2.43875 0.831249 3.195C0.831249 4.615 1.5625 5.87374 2.6525 6.60249C1.99375 6.58999 1.3475 6.39874 0.799999 6.09749C0.799999 6.10999 0.799999 6.12624 0.799999 6.14249C0.799999 8.13499 2.22125 9.78999 4.085 10.1712C3.75125 10.2625 3.3875 10.3062 3.01 10.3062C2.7475 10.3062 2.4825 10.2912 2.23375 10.2362C2.765 11.86 4.2725 13.0537 6.06499 13.0925C4.67 14.1837 2.89875 14.8412 0.981249 14.8412C0.644999 14.8412 0.3225 14.8262 0 14.785C1.81625 15.9562 3.96875 16.625 6.28999 16.625C13.835 16.625 17.96 10.375 17.96 4.9575C17.96 4.77625 17.9537 4.60125 17.945 4.4275C18.7587 3.85 19.4425 3.12875 20 2.29875Z" fill="white" />
                    </svg>
                    Not Available
                  </Link>
                </div>
                <div className="flex gap-4 flex-1 min-w-[200px]">

                  <Link href="" className="text-[#4B6A9B] dark:text-white flex gap-4 items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="fill-[#141D2F] dark:fill-white" d="M7.40416 5.06724C5.04862 7.50439 5.56264 11.5489 8.26088 13.3406C8.34979 13.3997 8.46807 13.3879 8.54444 13.3133C9.11248 12.7583 9.59303 12.2207 10.0138 11.5369C10.0782 11.4323 10.0381 11.2966 9.93014 11.2381C9.51858 11.0151 9.10905 10.597 8.8785 10.1554L8.87823 10.1555C8.60205 9.6056 8.50803 8.98915 8.65424 8.35251C8.6544 8.35255 8.65455 8.35259 8.65471 8.35259C8.82295 7.53752 9.69799 6.77931 10.3663 6.0781C10.3649 6.07763 10.3635 6.07713 10.3621 6.07666L12.8662 3.52096C13.864 2.50248 15.5054 2.49408 16.5137 3.50232C17.5321 4.50017 17.549 6.14986 16.5511 7.1683L15.0344 8.72798C14.9642 8.80017 14.9414 8.90548 14.9743 9.00068C15.3235 10.0134 15.4094 11.4413 15.1754 12.5201C15.1688 12.5503 15.2061 12.5701 15.2277 12.548L18.4557 9.25333C20.5179 7.14865 20.5004 3.72193 18.4168 1.63842C16.2906 -0.487868 12.829 -0.470173 10.7246 1.67768L7.41709 5.05342C7.41272 5.05803 7.40858 5.06271 7.40416 5.06724Z" fill="white" />
                      <path className="fill-[#141D2F] dark:fill-white" d="M13.439 13.8048C13.4389 13.8049 13.4388 13.805 13.4388 13.8052C13.4409 13.8043 13.4428 13.8035 13.4449 13.8026C14.1036 12.5979 14.2333 11.2163 13.9246 9.86949L13.9232 9.87094L13.9217 9.87027C13.6285 8.6707 12.8241 7.47953 11.7316 6.74614C11.6376 6.68305 11.4875 6.69035 11.3995 6.76153C10.8461 7.20899 10.3044 7.78278 9.94697 8.515C9.89083 8.62996 9.93287 8.76805 10.0435 8.83227C10.4583 9.07309 10.8329 9.42566 11.0837 9.89375L11.0841 9.89348C11.2796 10.2241 11.4722 10.8516 11.3474 11.5257C11.3474 11.5257 11.3472 11.5257 11.3472 11.5257C11.2308 12.4195 10.3282 13.2393 9.61068 13.9781L9.61103 13.9784C9.06486 14.5369 7.67646 15.9523 7.12052 16.5203C6.12267 17.5387 4.47299 17.5556 3.45455 16.5577C2.43612 15.5599 2.41928 13.9102 3.41713 12.8918L4.93834 11.3274C5.00728 11.2565 5.03072 11.1534 5.00006 11.0594C4.66228 10.023 4.56975 8.62731 4.78295 7.54969C4.78889 7.51965 4.75193 7.50047 4.73049 7.52235L1.551 10.7675C-0.53228 12.8937 -0.514624 16.3556 1.5903 18.4605C3.71647 20.5437 7.16049 20.5085 9.24369 18.3823C9.9674 17.5728 13.0654 14.7045 13.439 13.8048Z" fill="white" />
                    </svg>
                    https://github.blog
                  </Link>
                </div>
                <div className="flex gap-4 flex-1 min-w-[200px]">
                  <Link href="" className="flex gap-4 items-center text-[#4B6A9B] dark:text-white">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="fill-[#141D2F] dark:fill-white" fillRule="evenodd" clipRule="evenodd" d="M10.8583 1.55844L1.7 0.166772C1.275 0.100106 0.841666 0.216772 0.516666 0.491772C0.191666 0.775105 0 1.18344 0 1.60844V19.1668C0 19.6251 0.375 20.0001 0.833333 20.0001H3.54166V15.6251C3.54166 14.8168 4.19166 14.1668 5 14.1668H7.08333C7.89166 14.1668 8.54166 14.8168 8.54166 15.6251V20.0001H12.0833V3.0001C12.0833 2.28344 11.5667 1.6751 10.8583 1.55844ZM4.58333 12.2918H3.33333C2.98833 12.2918 2.70833 12.0118 2.70833 11.6668C2.70833 11.3218 2.98833 11.0418 3.33333 11.0418H4.58333C4.92833 11.0418 5.20833 11.3218 5.20833 11.6668C5.20833 12.0118 4.92833 12.2918 4.58333 12.2918ZM3.33333 9.79176H4.58333C4.92833 9.79176 5.20833 9.51176 5.20833 9.16676C5.20833 8.82176 4.92833 8.54176 4.58333 8.54176H3.33333C2.98833 8.54176 2.70833 8.82176 2.70833 9.16676C2.70833 9.51176 2.98833 9.79176 3.33333 9.79176ZM4.58333 7.29177H3.33333C2.98833 7.29177 2.70833 7.01177 2.70833 6.66677C2.70833 6.32177 2.98833 6.04177 3.33333 6.04177H4.58333C4.92833 6.04177 5.20833 6.32177 5.20833 6.66677C5.20833 7.01177 4.92833 7.29177 4.58333 7.29177ZM3.33333 4.79177H4.58333C4.92833 4.79177 5.20833 4.51177 5.20833 4.16677C5.20833 3.82177 4.92833 3.54177 4.58333 3.54177H3.33333C2.98833 3.54177 2.70833 3.82177 2.70833 4.16677C2.70833 4.51177 2.98833 4.79177 3.33333 4.79177ZM8.74999 12.2918H7.49999C7.15499 12.2918 6.87499 12.0118 6.87499 11.6668C6.87499 11.3218 7.15499 11.0418 7.49999 11.0418H8.74999C9.09499 11.0418 9.37499 11.3218 9.37499 11.6668C9.37499 12.0118 9.09499 12.2918 8.74999 12.2918ZM7.49999 9.79176H8.74999C9.09499 9.79176 9.37499 9.51176 9.37499 9.16676C9.37499 8.82176 9.09499 8.54176 8.74999 8.54176H7.49999C7.15499 8.54176 6.87499 8.82176 6.87499 9.16676C6.87499 9.51176 7.15499 9.79176 7.49999 9.79176ZM8.74999 7.29177H7.49999C7.15499 7.29177 6.87499 7.01177 6.87499 6.66677C6.87499 6.32177 7.15499 6.04177 7.49999 6.04177H8.74999C9.09499 6.04177 9.37499 6.32177 9.37499 6.66677C9.37499 7.01177 9.09499 7.29177 8.74999 7.29177ZM7.49999 4.79177H8.74999C9.09499 4.79177 9.37499 4.51177 9.37499 4.16677C9.37499 3.82177 9.09499 3.54177 8.74999 3.54177H7.49999C7.15499 3.54177 6.87499 3.82177 6.87499 4.16677C6.87499 4.51177 7.15499 4.79177 7.49999 4.79177Z" fill="white" />
                      <path className="fill-[#141D2F] dark:fill-white" fillRule="evenodd" clipRule="evenodd" d="M12.9166 7.79248L18.85 9.03498C19.5308 9.18581 20 9.77165 20 10.46V18.5416C20 19.3458 19.3458 20 18.5416 20H12.9166V7.79248ZM15.625 17.5H16.875C17.22 17.5 17.5 17.22 17.5 16.875C17.5 16.53 17.22 16.25 16.875 16.25H15.625C15.28 16.25 15 16.53 15 16.875C15 17.22 15.28 17.5 15.625 17.5ZM16.875 15H15.625C15.28 15 15 14.72 15 14.375C15 14.03 15.28 13.75 15.625 13.75H16.875C17.22 13.75 17.5 14.03 17.5 14.375C17.5 14.72 17.22 15 16.875 15ZM15.625 12.5H16.875C17.22 12.5 17.5 12.22 17.5 11.875C17.5 11.53 17.22 11.25 16.875 11.25H15.625C15.28 11.25 15 11.53 15 11.875C15 12.22 15.28 12.5 15.625 12.5Z" fill="white" />
                    </svg>
                    @github
                  </Link>
                </div>
              </div>
            </div>

          </div>
          :
          <div>
            <h2>Pequisar usuario github</h2>
          </div>
        }
      </div>
    </main>
  )
}