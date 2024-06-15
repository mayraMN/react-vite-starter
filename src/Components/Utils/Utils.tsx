import { ReactNode } from 'react'

export function capitalizeFirstLetter(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export function formatIdNumber(id: number) {
  if (id < 10) {
    return '00' + id
  }
  if (id < 100) {
    return '0' + id
  }
  return id
}
export const iconsDic: Record<string, ReactNode> = {
  grass: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2053_1082)">
        <path
          d="M31.1749 8.24061C30.328 7.49686 26.9436 8.31249 25.9811 8.42811C22.7906 8.77733 19.6473 9.47095 16.6061 10.4969C13.4655 11.6062 10.903 13.2062 9.41864 16.3094C8.51473 18.2471 8.16447 20.3972 8.40658 22.5216C8.6487 24.6461 9.47377 26.6622 10.7905 28.3469C11.4749 27.6187 12.4561 26.8844 12.9968 26.0469C13.7186 24.9312 13.3249 22.7031 13.378 21.3031C13.3936 20.8906 13.5468 15.1812 13.8249 15.1625C14.1624 15.1406 15.0343 20.7437 15.3468 22.8312C15.3585 22.8977 15.3879 22.9598 15.4319 23.011C15.476 23.0621 15.533 23.1004 15.597 23.1219C15.661 23.1433 15.7296 23.1471 15.7955 23.1328C15.8615 23.1185 15.9224 23.0866 15.9718 23.0406C16.7155 22.3052 17.4624 21.576 18.2124 20.8531C18.7249 20.3562 18.9811 20.1625 19.1186 19.5156C19.2561 18.8687 19.153 17.9875 19.1968 17.3031C19.2218 16.8969 19.5093 11.7531 19.878 11.7281C20.2468 11.7031 21.0186 15.7375 21.3061 17.2469C21.32 17.2975 21.3464 17.3438 21.3829 17.3816C21.4193 17.4193 21.4648 17.4473 21.5149 17.4629C21.565 17.4784 21.6183 17.4811 21.6697 17.4707C21.7212 17.4602 21.7692 17.437 21.8093 17.4031C23.328 15.9312 28.0593 11.3312 28.2811 11.5375C28.503 11.7437 24.5749 17.025 23.3155 18.725C23.2872 18.7692 23.2705 18.8199 23.267 18.8724C23.2635 18.9248 23.2732 18.9772 23.2953 19.0249C23.3174 19.0726 23.3512 19.1139 23.3935 19.145C23.4358 19.1762 23.4853 19.1962 23.5374 19.2031C25.0718 19.2875 29.1624 19.5531 29.1968 19.8906C29.2311 20.2281 24.128 21.2281 23.7593 21.3C23.1343 21.4281 22.4374 21.4719 21.8124 21.6344C21.0124 21.8437 20.8749 22.0406 20.3718 22.7406C19.7468 23.5739 19.1218 24.4073 18.4968 25.2406C18.4547 25.2962 18.4288 25.3623 18.422 25.4317C18.4151 25.5011 18.4276 25.571 18.458 25.6337C18.4884 25.6964 18.5355 25.7495 18.5942 25.7872C18.6529 25.8248 18.7208 25.8454 18.7905 25.8469C20.903 25.8812 26.5686 26.0094 26.603 26.3469C26.6186 26.6281 20.978 27.5281 20.5718 27.5969C19.2811 27.8187 17.0999 27.7312 16.0655 28.4125C15.2686 28.9375 14.5343 30.3437 13.928 31.0875C15.7106 32.1394 17.7426 32.6943 19.8124 32.6943C21.8822 32.6943 23.9142 32.1394 25.6968 31.0875C28.6968 29.2969 30.0718 26.575 30.803 23.275C31.4612 20.0757 31.7547 16.8122 31.678 13.5469C31.678 12.3594 31.6343 11.1687 31.5155 9.98749C31.4686 9.59061 31.5093 8.53436 31.1749 8.24061Z"
          fill="#3F3D3F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2053_1082">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  bug: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2053_1102)">
        <path
          d="M27.8126 12.5C26.5844 15.4844 24.2157 16.2969 21.2501 16.5625C19.4063 21.9781 21.4438 27.9594 25.3126 31.875C32.7751 28.3469 34.1438 17.8125 27.8126 12.5Z"
          fill="#3F3D3F"
        />
        <path
          d="M22.6344 14.1593C24.0235 13.5762 25.1836 12.5544 25.9375 11.25C25.1222 10.8072 24.258 10.4611 23.3625 10.2187L25.1 8.09371C25.249 7.90058 25.3169 7.65699 25.2892 7.41464C25.2615 7.1723 25.1405 6.95028 24.9517 6.79573C24.763 6.64118 24.5215 6.56627 24.2785 6.58689C24.0354 6.60752 23.81 6.72207 23.65 6.90621L21.2906 9.79058C20.4339 9.67808 19.5661 9.67808 18.7094 9.79058L16.35 6.90621C16.2734 6.80692 16.1776 6.72401 16.0684 6.66238C15.9592 6.60076 15.8387 6.56167 15.7141 6.54744C15.5895 6.53321 15.4633 6.54412 15.343 6.57952C15.2227 6.61493 15.1108 6.67412 15.0137 6.75358C14.9167 6.83303 14.8366 6.93115 14.7782 7.04212C14.7198 7.15308 14.6842 7.27464 14.6736 7.3996C14.663 7.52456 14.6776 7.65037 14.7165 7.7696C14.7553 7.88882 14.8178 7.99904 14.9 8.09371L16.6375 10.2187C15.742 10.4611 14.8778 10.8072 14.0625 11.25C14.9026 12.6847 16.2316 13.7686 17.806 14.3029C19.3803 14.8373 21.0945 14.7863 22.6344 14.1593Z"
          fill="#3F3D3F"
        />
        <path
          d="M14.6876 15.625C13.5752 14.841 12.7083 13.7573 12.1876 12.5C11.8751 12.7719 7.36571 16.6844 8.12509 22.8125C8.89384 29.0156 14.3313 31.7062 14.6876 31.875C18.5563 27.9594 20.5938 21.9781 18.7501 16.5625C18.1032 16.5062 16.0907 16.6062 14.6876 15.625Z"
          fill="#3F3D3F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2053_1102">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  electric: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2053_1112)">
        <path
          d="M13.4375 9.0625H23.125L27.1875 21.875L20.9375 21.5625L24.6875 32.1875L9.6875 16.7188H16.875L13.4375 9.0625Z"
          fill="#3F3D3F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2053_1112">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  ground: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.8125 10H18.4375L12.1875 27.5H34.0625L27.8125 10Z"
        fill="#3F3D3F"
      />
      <path d="M15 13.4375H10L5 27.5H10L15 13.4375Z" fill="#3F3D3F" />
    </svg>
  ),
  fire: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2053_1090)">
        <path
          d="M26.7688 13.3156C29.975 15.5938 31.8406 19.8063 30.425 23.6282C29.0938 27.2313 25.3719 29.4844 21.6219 29.5907C22.2951 29.3528 22.8998 28.9539 23.3834 28.4286C23.867 27.9033 24.2146 27.2676 24.396 26.5771C24.5774 25.8865 24.5871 25.1621 24.4241 24.467C24.2612 23.7718 23.9306 23.1272 23.4612 22.5892C22.9918 22.0512 22.3978 21.6363 21.7312 21.3806C21.0646 21.1249 20.3455 21.0363 19.6368 21.1225C18.928 21.2086 18.2511 21.4669 17.6651 21.8748C17.0791 22.2827 16.6019 22.8278 16.275 23.4625C14.7125 26.4625 17.1813 29.4531 19.875 30.65C22.9281 32.0125 26.4563 31.0063 28.9063 28.9C24.6875 34.6875 16.1469 35.7156 11.4594 29.9406C8.27189 26.0125 8.19689 20.2531 11.0938 16.0938C10.3969 18.3469 10.9375 20.625 12.8125 21.875C10.9375 18.125 12.1875 15.2844 14.7313 12.7688C15.9563 11.5563 17.5156 11.0938 18.7938 10.0344C20.2 8.8719 20.3844 6.94065 20.1156 5.24377C21.2261 5.82506 22.1428 6.71774 22.7534 7.81237C23.364 8.907 23.642 10.156 23.5531 11.4063C20 11.4219 18.6969 16.3657 21.8281 18.125C24.8781 19.85 28.4188 16.4188 26.7688 13.3156Z"
          fill="#3F3D3F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2053_1090">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  fighting: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2053_1126)">
        <path
          d="M7.16555 25.3563L8.72805 29.1656C8.84273 29.447 9.05165 29.6796 9.31903 29.8238C9.58641 29.968 9.89561 30.0148 10.1937 29.9561C10.4917 29.8973 10.7601 29.7368 10.9528 29.5019C11.1455 29.2671 11.2505 28.9726 11.2499 28.6688V17.5813C11.2505 17.2775 11.1455 16.9829 10.9528 16.7481C10.7601 16.5132 10.4917 16.3527 10.1937 16.294C9.89561 16.2353 9.58641 16.282 9.31903 16.4262C9.05165 16.5704 8.84273 16.8031 8.72805 17.0844L7.16555 20.8938C6.57795 22.3232 6.57795 23.9268 7.16555 25.3563Z"
          fill="#3F3D3F"
        />
        <path
          d="M31.7188 28.5156V12.1094C31.7188 11.6743 31.5459 11.257 31.2382 10.9493C30.9305 10.6416 30.5132 10.4688 30.0781 10.4688H29.2969C28.8618 10.4688 28.4445 10.6416 28.1368 10.9493C27.8291 11.257 27.6562 11.6743 27.6562 12.1094V17.4469C27.6562 17.5853 27.6013 17.718 27.5034 17.8159C27.4055 17.9138 27.2728 17.9688 27.1344 17.9688C27.066 17.9688 26.9983 17.9552 26.9351 17.929C26.872 17.9027 26.8147 17.8642 26.7665 17.8157C26.7182 17.7672 26.6801 17.7097 26.6542 17.6464C26.6283 17.5831 26.6152 17.5153 26.6156 17.4469V12.1094C26.6156 11.6743 26.4428 11.257 26.1351 10.9493C25.8274 10.6416 25.4101 10.4688 24.975 10.4688H24.1937C23.7586 10.4688 23.3413 10.6416 23.0337 10.9493C22.726 11.257 22.5531 11.6743 22.5531 12.1094V17.4469C22.5531 17.5853 22.4981 17.718 22.4003 17.8159C22.3024 17.9138 22.1697 17.9688 22.0312 17.9688C21.8928 17.9688 21.7601 17.9138 21.6622 17.8159C21.5644 17.718 21.5094 17.5853 21.5094 17.4469V12.1094C21.5094 11.6743 21.3365 11.257 21.0288 10.9493C20.7212 10.6416 20.3039 10.4688 19.8688 10.4688H19.0875C18.6524 10.4688 18.2351 10.6416 17.9274 10.9493C17.6197 11.257 17.4469 11.6743 17.4469 12.1094V17.4469C17.4473 17.5153 17.4342 17.5831 17.4083 17.6464C17.3824 17.7097 17.3443 17.7672 17.296 17.8157C17.2478 17.8642 17.1905 17.9027 17.1274 17.929C17.0642 17.9552 16.9965 17.9688 16.9281 17.9688C16.7897 17.9688 16.657 17.9138 16.5591 17.8159C16.4612 17.718 16.4062 17.5853 16.4062 17.4469V12.1094C16.4062 11.6743 16.2334 11.257 15.9257 10.9493C15.618 10.6416 15.2007 10.4688 14.7656 10.4688H13.9844C13.5493 10.4688 13.132 10.6416 12.8243 10.9493C12.5166 11.257 12.3438 11.6743 12.3438 12.1094V28.5156C12.3438 28.9507 12.5166 29.368 12.8243 29.6757C13.132 29.9834 13.5493 30.1562 13.9844 30.1562H30.0781C30.5132 30.1562 30.9305 29.9834 31.2382 29.6757C31.5459 29.368 31.7188 28.9507 31.7188 28.5156Z"
          fill="#3F3D3F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2053_1126">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  poison: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2053_1086)">
        <path
          d="M32.5 18.4375C32.5 12.6844 26.9031 8.02185 20 8.02185C13.0969 8.02185 7.5 12.6844 7.5 18.4375C7.5 21.5625 9.16562 24.375 11.7969 26.2937C11.4339 26.9497 11.2456 27.6878 11.25 28.4375C11.25 30.5094 12.6031 32.1875 14.2719 32.1875C15.5719 32.1875 16.6781 31.1656 17.1063 29.7375C17.4781 31.1531 18.6313 32.1875 20 32.1875C21.3687 32.1875 22.5219 31.1531 22.8938 29.7375C23.3219 31.1656 24.4281 32.1875 25.7281 32.1875C27.3969 32.1875 28.75 30.5094 28.75 28.4375C28.7544 27.6878 28.5661 26.9497 28.2031 26.2937C30.8344 24.375 32.5 21.5625 32.5 18.4375ZM20 24.7906C15.425 24.7906 11.5625 21.875 11.5625 18.4375C11.5625 15 15.425 12.0844 20 12.0844C24.575 12.0844 28.4375 15 28.4375 18.4375C28.4375 21.875 24.575 24.7906 20 24.7906Z"
          fill="#3F3D3F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2053_1086">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  psychic: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2053_1131)">
        <path
          d="M26.4187 29.85C20.9343 32.7844 13.4562 31.4313 10.2093 25.85C7.24057 20.7532 8.8562 13.5907 13.8249 10.3625C18.7937 7.13442 26.0437 8.59067 29.4812 13.325C33.4906 18.8438 30.4874 27.1188 23.4156 27.7782C20.4406 28.0532 17.1656 26.675 15.7281 23.9344C14.4468 21.4657 15.0624 17.8782 17.4031 16.2469C19.7437 14.6157 23.5312 14.9157 24.7187 17.8125C25.2218 19.0438 25.0312 20.7219 24.0749 21.6969C23.2687 22.5 21.3937 22.8125 20.5218 21.875C20.2093 21.5313 19.8687 20.8907 20.4749 20.6469C20.7124 20.5532 21.3187 20.9594 21.6031 20.9594C22.9124 20.9407 23.3281 19.2875 22.6562 18.3157C21.8406 17.1407 20.0374 17.2282 19.0124 18.025C17.7624 19 17.6062 20.6157 18.1468 22.025C19.1968 24.7469 22.6124 25.3625 24.9406 23.8063C27.2031 22.2907 27.5468 18.65 26.3999 16.3469C24.8374 13.1875 20.5187 12.2594 17.4031 13.3875C14.2874 14.5157 12.4781 17.5375 12.4031 20.7563C12.3776 22.1951 12.6961 23.6193 13.332 24.9102C13.968 26.2011 14.903 27.3215 16.0593 28.1782C19.1031 30.4032 22.8749 29.85 26.4187 29.85Z"
          fill="#3F3D3F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2053_1131">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  fairy: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2053_1120)">
        <path
          d="M34.6875 20L26.875 15.7312L27.9562 12.0344L24.2688 13.125L20 5.3125L15.7312 13.125L12.0344 12.0344L13.125 15.7312L5.3125 20L13.125 24.2688L12.0344 27.9656L15.7312 26.875L20 34.6875L24.2688 26.875L27.9656 27.9562L26.875 24.2688L34.6875 20ZM22.1 22.1L20 25.9375L17.9 22.1L14.0625 20L17.9 17.9L20 14.0625L22.1 17.9L25.9375 20L22.1 22.1Z"
          fill="#3F3D3F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2053_1120">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  dragon: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2053_1147)">
        <path
          d="M31.528 17.9656C31.0118 15.3973 29.6477 13.0768 27.6546 11.3767C25.6615 9.67662 23.155 8.69541 20.5374 8.59058C21.0149 7.27404 20.9904 5.82771 20.4687 4.52808C19.8569 5.90687 18.9502 7.13468 17.8124 8.12495C17.3275 8.5826 16.7753 8.96307 16.1749 9.25308C15.5797 9.48237 14.9976 9.74422 14.4312 10.0375C12.2257 11.2655 10.4729 13.1694 9.43115 15.4687C8.83097 16.7988 8.48643 18.2299 8.41553 19.6875C9.70612 19.2836 11.0213 18.9632 12.353 18.7281C13.5343 18.5218 14.7312 18.4156 15.9187 18.2562C18.1062 17.9437 19.828 16.675 21.0343 14.8187C22.5591 15.3092 23.8356 16.3697 24.5972 17.7788C25.3588 19.1879 25.5467 20.8368 25.1217 22.3811C24.6967 23.9255 23.6917 25.246 22.3163 26.0671C20.9409 26.8881 19.3016 27.1462 17.7405 26.7875C18.3423 28.1386 19.2925 29.3056 20.4937 30.1687C21.1051 30.6069 21.7739 30.9592 22.4812 31.2156C22.7947 31.3703 23.1411 31.4464 23.4905 31.4374C23.8946 31.3394 24.2866 31.1969 24.6593 31.0124C27.1322 29.9601 29.1665 28.0869 30.419 25.709C31.6714 23.3311 32.0653 20.5939 31.5343 17.9593L31.528 17.9656ZM12.753 14.0625C13.0918 13.725 13.5035 13.4698 13.9564 13.3164C14.4094 13.1631 14.8914 13.1158 15.3655 13.1781C15.4216 13.6503 15.37 14.129 15.2145 14.5784C15.059 15.0278 14.8037 15.4361 14.4678 15.7726C14.1319 16.1091 13.724 16.3652 13.2749 16.5214C12.8259 16.6777 12.3472 16.7302 11.8749 16.675C11.8118 16.2013 11.8582 15.7196 12.0104 15.2667C12.1626 14.8138 12.4167 14.4018 12.753 14.0625ZM18.878 31.8937C16.4398 31.6412 14.1428 30.6284 12.3118 28.9987C10.4807 27.369 9.20847 25.2049 8.6749 22.8125C11.2171 21.4281 14.0778 20.7342 16.9718 20.7999C15.9847 22.3002 15.519 24.0837 15.6468 25.875C15.7249 27.0506 16.0537 28.1959 16.611 29.234C17.1683 30.2722 17.9413 31.179 18.878 31.8937Z"
          fill="#3F3D3F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2053_1147">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  flying: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2053_1094)">
        <path
          d="M30.6251 23.7751C29.3094 26 27.6657 26.9625 25.5469 27.2126C25.0313 27.2688 24.5032 27.2126 23.9844 27.2907C23.6126 27.3376 23.3594 27.7376 23.6719 27.9157C25.1907 28.75 23.8157 29.1438 23.4001 29.4782C21.823 30.7108 19.8982 31.416 17.8982 31.4939C15.8981 31.5718 13.9242 31.0186 12.2561 29.9125C10.5879 28.8064 9.31004 27.2035 8.6034 25.3308C7.89677 23.4581 7.7972 21.4106 8.31881 19.4782C8.82207 17.5463 9.92636 15.8243 11.4722 14.5611C13.018 13.2978 14.9254 12.5585 16.9188 12.45C19.5126 12.3344 22.1188 12.3469 24.7313 12.4188C28.0719 12.5 31.1313 11.875 33.5844 9.15942C34.0376 9.91255 33.8469 10.575 33.7376 11.1875C33.3441 13.3828 32.1996 15.3729 30.5001 16.817C28.8006 18.2611 26.6519 19.0693 24.4219 19.1032C23.4844 19.125 22.5469 19.1032 21.6094 19.1282C21.2969 19.1282 20.9407 19.2 20.9376 19.5969C20.9376 19.9094 21.2501 19.9969 21.5094 19.9813C24.9469 19.8094 28.5219 20.7438 31.6469 18.5C31.8751 18.3344 32.1469 18.0094 32.4438 18.3438C32.6876 18.6157 32.5094 18.9344 32.3563 19.2063C30.9688 21.6844 28.9032 23.1782 26.0376 23.4375C25.2126 23.5125 24.3751 23.4375 23.5376 23.4844C23.0563 23.5094 22.2438 23.2594 22.2188 23.9063C22.1907 24.65 23.0188 24.35 23.4688 24.3438C25.7376 24.3188 28.0219 24.6313 30.6251 23.7751Z"
          fill="#3F3D3F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2053_1094">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  ghost: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2053_1143)">
        <path
          d="M31.328 19.6876C31.328 9.29693 18.4374 3.81256 10.9374 11.0219C3.3874 18.2969 8.58115 31.3938 19.0624 31.7126C24.5311 31.7126 27.0436 31.2532 30.9124 30.2626C29.7435 29.7841 28.6629 29.1134 27.7155 28.2782C28.8604 27.1597 29.7698 25.8235 30.3903 24.3481C31.0107 22.8727 31.3295 21.2881 31.328 19.6876ZM14.453 20.6251C13.7596 20.6237 13.0897 20.3732 12.5656 19.9191C12.0415 19.465 11.6982 18.8376 11.5981 18.1514C11.4981 17.4652 11.6481 16.7659 12.0207 16.1811C12.3934 15.5963 12.9638 15.1649 13.628 14.9657C13.607 15.1064 13.5955 15.2484 13.5937 15.3907C13.5926 15.8411 13.697 16.2855 13.8986 16.6883C14.1002 17.0912 14.3934 17.4411 14.7546 17.7103C15.1157 17.9794 15.5349 18.1602 15.9786 18.2382C16.4222 18.3162 16.8779 18.2892 17.3093 18.1594C17.2075 18.8444 16.8631 19.47 16.3389 19.9226C15.8147 20.3751 15.1455 20.6243 14.453 20.6251ZM24.1061 20.6251C23.4135 20.625 22.7439 20.3759 22.2196 19.9233C21.6953 19.4707 21.3511 18.8447 21.2499 18.1594C21.6812 18.2892 22.137 18.3162 22.5806 18.2382C23.0242 18.1602 23.4434 17.9794 23.8046 17.7103C24.1658 17.4411 24.4589 17.0912 24.6605 16.6883C24.8621 16.2855 24.9666 15.8411 24.9655 15.3907C24.9636 15.2484 24.9522 15.1064 24.9311 14.9657C25.5954 15.1649 26.1658 15.5963 26.5385 16.1811C26.9111 16.7659 27.0611 17.4652 26.9611 18.1514C26.861 18.8376 26.5176 19.465 25.9936 19.9191C25.4695 20.3732 24.7996 20.6237 24.1061 20.6251Z"
          fill="#3F3D3F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2053_1143">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  water: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2053_1098)">
        <path
          d="M28.9062 23.75C28.9062 26.1121 27.9679 28.3774 26.2977 30.0477C24.6274 31.7179 22.3621 32.6562 20 32.6562C17.6379 32.6562 15.3726 31.7179 13.7023 30.0477C12.0321 28.3774 11.0938 26.1121 11.0938 23.75C11.0938 18.8313 18.2812 7.96875 20 7.96875C21.7188 7.96875 28.9062 18.8313 28.9062 23.75ZM21.0938 26.7188C19.8505 26.7188 18.6583 26.2249 17.7792 25.3458C16.9001 24.4667 16.4062 23.2745 16.4062 22.0312C16.4057 21.4234 16.5247 20.8214 16.7562 20.2594C15.9899 20.7664 15.3681 21.4636 14.9517 22.2828C14.5353 23.1019 14.3385 24.0151 14.3806 24.9331C14.4226 25.8511 14.7021 26.7425 15.1916 27.5201C15.6812 28.2978 16.3641 28.9352 17.1736 29.3701C17.9831 29.8049 18.8916 30.0223 19.8103 30.0011C20.729 29.9798 21.6265 29.7206 22.4151 29.2488C23.2036 28.777 23.8563 28.1087 24.3094 27.3093C24.7625 26.5098 25.0004 25.6064 25 24.6875C25 24.6656 25 24.6469 25 24.625C24.5721 25.2691 23.9915 25.7974 23.31 26.1627C22.6284 26.528 21.867 26.719 21.0938 26.7188Z"
          fill="#3F3D3F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2053_1098">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  ice: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2351_6)">
        <path
          d="M18.7907 20.0812L11.8907 23.9687L5.23755 20L11.8 16.2031L18.7907 20.0812ZM28.125 16.0312L21.2094 19.9187L28.1875 23.8094L34.75 20.0125L28.125 16.0312ZM19.2032 11.0031L12.6407 7.20935L12.5 14.9594L19.325 18.9937L19.2032 11.0031ZM27.5 25.0406L20.675 21.0062L20.7969 28.9969L27.3594 32.7906L27.5 25.0406ZM27.3938 14.8125V7.21873L20.625 10.9937L20.5407 18.9125L27.3938 14.8125ZM19.375 29.0062L19.4594 21.0875L12.6063 25.1875V32.7812L19.375 29.0062Z"
          fill="#3F3D3F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2351_6">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  normal: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2053_1108)">
        <path
          d="M20 32.5C17.5277 32.5 15.111 31.7669 13.0554 30.3934C10.9998 29.0199 9.39761 27.0676 8.45151 24.7835C7.50542 22.4995 7.25787 19.9861 7.74019 17.5614C8.2225 15.1366 9.41301 12.9093 11.1612 11.1612C12.9093 9.41301 15.1366 8.2225 17.5614 7.74019C19.9861 7.25787 22.4995 7.50542 24.7835 8.45151C27.0676 9.39761 29.0199 10.9998 30.3934 13.0554C31.7669 15.111 32.5 17.5277 32.5 20C32.5 23.3152 31.183 26.4946 28.8388 28.8388C26.4946 31.183 23.3152 32.5 20 32.5ZM20 12.5C18.5166 12.5 17.0666 12.9399 15.8332 13.764C14.5999 14.5881 13.6386 15.7594 13.0709 17.1299C12.5033 18.5003 12.3547 20.0083 12.6441 21.4632C12.9335 22.918 13.6478 24.2544 14.6967 25.3033C15.7456 26.3522 17.082 27.0665 18.5368 27.3559C19.9917 27.6453 21.4997 27.4968 22.8701 26.9291C24.2406 26.3614 25.4119 25.4002 26.236 24.1668C27.0601 22.9334 27.5 21.4834 27.5 20C27.5 18.0109 26.7098 16.1032 25.3033 14.6967C23.8968 13.2902 21.9891 12.5 20 12.5Z"
          fill="#3F3D3F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2053_1108">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  rock: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2053_1135)">
        <path
          d="M29.6875 10.625L32.8125 20.3125L28.75 25.3125L25.9375 20.9375L29.6875 10.625ZM23.125 31.5625L27.5 26.5625L24.375 22.1875L14.6875 28.75L23.125 31.5625ZM16.25 10.625L7.5 20L7.8125 26.5625L12.5 28.125L24.0625 20.3125L27.5 10.625H16.25Z"
          fill="#3F3D3F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2053_1135">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  steel: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2053_1139)">
        <path
          d="M26.25 20C26.25 21.2362 25.8834 22.4445 25.1967 23.4723C24.5099 24.5001 23.5338 25.3012 22.3918 25.7743C21.2497 26.2473 19.9931 26.3711 18.7807 26.1299C17.5683 25.8888 16.4547 25.2935 15.5806 24.4194C14.7065 23.5454 14.1112 22.4317 13.8701 21.2193C13.6289 20.007 13.7527 18.7503 14.2258 17.6083C14.6988 16.4662 15.4999 15.4901 16.5277 14.8033C17.5555 14.1166 18.7639 13.75 20 13.75C21.6576 13.75 23.2473 14.4085 24.4194 15.5806C25.5915 16.7527 26.25 18.3424 26.25 20ZM26.7969 8.22815H13.2031L6.40625 20L13.2031 31.7719H26.7969L33.5938 20L26.7969 8.22815Z"
          fill="#3F3D3F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2053_1139">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  dark: (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.0469 20C30.0475 21.5683 29.6732 23.114 28.9553 24.5083C28.2374 25.9026 27.1967 27.1052 25.9198 28.0157C24.643 28.9263 23.167 29.5185 21.6148 29.743C20.0627 29.9675 18.4794 29.8177 16.9969 29.3062C18.9338 28.6385 20.6142 27.383 21.8036 25.7148C22.9931 24.0466 23.6323 22.0488 23.6323 20C23.6323 17.9512 22.9931 15.9534 21.8036 14.2852C20.6142 12.617 18.9338 11.3615 16.9969 10.6938C18.4794 10.1823 20.0627 10.0325 21.6148 10.257C23.167 10.4815 24.643 11.0737 25.9198 11.9843C27.1967 12.8948 28.2374 14.0974 28.9553 15.4917C29.6732 16.886 30.0475 18.4317 30.0469 20ZM20 7.5C17.5277 7.5 15.111 8.23311 13.0554 9.60663C10.9998 10.9801 9.39761 12.9324 8.45151 15.2165C7.50542 17.5005 7.25787 20.0139 7.74019 22.4386C8.2225 24.8634 9.41301 27.0907 11.1612 28.8388C12.9093 30.587 15.1366 31.7775 17.5614 32.2598C19.9861 32.7421 22.4995 32.4946 24.7835 31.5485C27.0676 30.6024 29.0199 29.0002 30.3934 26.9446C31.7669 24.889 32.5 22.4723 32.5 20C32.5 16.6848 31.183 13.5054 28.8388 11.1612C26.4946 8.81696 23.3152 7.5 20 7.5Z"
        fill="#3F3D3F"
      />
    </svg>
  ),
}
