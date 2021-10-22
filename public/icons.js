export const CheckmarkIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 0C27.7227 0 31.2457 0.848114 34.3935 2.36086C33.105 3.38022 31.9103 4.35882 30.7971 5.30071C28.6769 4.53007 26.3894 4.11009 24.0041 4.11009C18.5117 4.11009 13.5372 6.33639 9.94088 9.9368C6.34047 13.5372 4.11417 18.5076 4.11417 24C4.11417 29.4924 6.34047 34.4628 9.94088 38.0632C13.5413 41.6636 18.5117 43.8899 24.0041 43.8899C29.4964 43.8899 34.471 41.6636 38.0673 38.0632C41.6677 34.4628 43.894 29.4924 43.894 24C43.894 22.6952 43.7676 21.4149 43.527 20.1794C44.5586 18.8338 45.6147 17.4924 46.6952 16.1631C47.5433 18.6177 48.0041 21.2559 48.0041 24C48.0041 30.6259 45.317 36.6279 40.9745 40.9704C36.632 45.3129 30.63 48 24.0041 48C17.3782 48 11.3761 45.3129 7.03364 40.9704C2.68705 36.6279 0 30.6259 0 24C0 17.3741 2.68705 11.3721 7.02956 7.02956C11.3721 2.68705 17.3741 0 24 0ZM12.8196 20.0571L18.6748 19.9796L19.1111 20.0938C20.2936 20.7747 21.4067 21.5535 22.4465 22.4342C23.1967 23.0703 23.9144 23.7635 24.5953 24.5138C26.6952 21.1335 28.9337 18.0306 31.2987 15.1764C33.8879 12.0489 36.6361 9.21101 39.5229 6.62181L40.0938 6.40163H46.4832L45.1947 7.83282C41.2355 12.2324 37.6432 16.7788 34.3976 21.4679C31.1519 26.1611 28.2487 31.0051 25.6677 35.9918L24.8644 37.5413L24.1264 35.9633C22.7645 33.0398 21.1335 30.3568 19.1886 27.9592C17.2436 25.5617 14.9806 23.4332 12.3425 21.6228L12.8196 20.0571Z"
      fill="#00A224"
    />
  </svg>
)
export const TitleUnderline = ({
  color,
  width,
  height,
  firstViewBox,
  thirdViewBox,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`${firstViewBox} 0 ${thirdViewBox} 22`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M111 22V7L125 14.5L139 7V22L125 14.5L111 22Z" fill={color} />
      <line x1="-4.37114e-08" y1="0.5" x2="250" y2="0.499978" stroke={color} />
    </svg>
  )
}

export const PrevArrowIcon = () => (
  <svg
    width="21"
    height="39"
    viewBox="0 0 21 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 1L2 19.5L20 38" stroke="black" stroke-width="2" />
  </svg>
)

export const NextArrowIcon = () => (
  <svg
    width="21"
    height="39"
    viewBox="0 0 21 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 38L19 19.5L0.999997 1" stroke="black" stroke-width="2" />
  </svg>
)

export const MobilePhoneIcon = () => (
  <svg
    width="37"
    height="37"
    viewBox="0 0 37 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.3393 18.4009C12.8952 21.5819 15.4737 24.1486 18.6618 25.6901C18.8951 25.8006 19.1531 25.8485 19.4105 25.829C19.6678 25.8096 19.9157 25.7234 20.1297 25.579L24.8239 22.4488C25.0315 22.3104 25.2704 22.2259 25.5188 22.2031C25.7673 22.1803 26.0176 22.2198 26.2469 22.3181L35.0289 26.0818C35.3272 26.2085 35.5763 26.4288 35.7385 26.7093C35.9008 26.9899 35.9675 27.3156 35.9286 27.6374C35.651 29.8094 34.5912 31.8058 32.9477 33.2527C31.3042 34.6996 29.1897 35.4979 27 35.498C20.237 35.498 13.751 32.8114 8.96878 28.0292C4.1866 23.247 1.5 16.761 1.5 9.99799C1.50012 7.80831 2.29836 5.69376 3.74528 4.05025C5.19219 2.40675 7.18855 1.347 9.36056 1.06942C9.68234 1.03048 10.0081 1.09717 10.2886 1.25944C10.5692 1.42171 10.7895 1.67077 10.9162 1.96909L14.6832 10.7587C14.7806 10.986 14.8203 11.234 14.7987 11.4804C14.7772 11.7268 14.695 11.964 14.5595 12.171L11.4402 16.9372C11.2982 17.1516 11.2143 17.3992 11.1966 17.6557C11.1789 17.9122 11.2281 18.169 11.3393 18.4009V18.4009Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)
export const EmailIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M42 10.5L24 27L6 10.5"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 10.5H42V36C42 36.3978 41.842 36.7794 41.5607 37.0607C41.2794 37.342 40.8978 37.5 40.5 37.5H7.5C7.10218 37.5 6.72064 37.342 6.43934 37.0607C6.15804 36.7794 6 36.3978 6 36V10.5Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.7257 24L6.46094 37.0761"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M41.5384 37.0762L27.2734 24"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export const FacebookIcon = () => (
  <svg
    width="15"
    height="21"
    viewBox="0 0 15 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.7091 7.73956H8.82353V2.32187H15V0H10.1471C7.22771 0 4.85294 1.38869 4.85294 3.09582V7.73956H0V10.0614H4.85294V21H8.82353V10.0614H13.915L14.7091 7.73956Z"
      fill="#999999"
    />
  </svg>
)

export const TwitterIcon = () => (
  <svg
    width="21"
    height="18"
    viewBox="0 0 21 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 2.19405L19.1049 1.93839L19.5997 0.047586L17.3797 0.656852C16.6701 0.22628 15.8644 0 15.0319 0C12.4877 0 10.4176 2.12004 10.4176 4.72579V5.33883C7.24214 5.16194 4.31898 3.619 2.32299 1.04427L1.80693 0.378555L1.33509 1.07774C1.14828 1.3544 0.989822 1.65271 0.863892 1.96399C0.472481 2.93179 0.403107 3.97737 0.66346 4.988C0.816467 5.5825 1.08387 6.14287 1.44212 6.63251L0.710724 6.81235L0.854279 7.42507C1.23576 9.05185 2.40246 10.3173 3.90033 10.824L3.18111 11.6865L3.64895 12.0957C4.35599 12.7142 5.21732 13.0981 6.13328 13.2032C4.49329 14.6693 2.34798 15.5577 0 15.5577L0.264198 15.7457C2.33661 17.2204 4.76967 18 7.30046 18C10.5982 18 13.6984 16.6848 16.0302 14.2967C18.362 11.9085 19.6462 8.73319 19.6462 5.35589V4.72579C19.6462 4.50345 19.6309 4.28094 19.6008 4.06155L21 2.19405Z"
      fill="#999999"
    />
  </svg>
)

export const InstagramIconForContacts = () => (
  <svg
    width="37"
    height="37"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34.0568 0H13.9432C6.25491 0 0 6.25491 0 13.9432V34.0568C0 41.7451 6.25491 48 13.9432 48H34.0568C41.7451 48 48 41.7451 48 34.0568V13.9432C48 6.25491 41.7451 0 34.0568 0ZM44.25 34.0568C44.25 39.6773 39.6773 44.25 34.0568 44.25H13.9432C8.32266 44.25 3.75 39.6773 3.75 34.0568V13.9432C3.75 8.32266 8.32266 3.75 13.9432 3.75H34.0568C39.6773 3.75 44.25 8.32266 44.25 13.9432V34.0568Z"
      fill="white"
    />
    <path
      d="M23.9961 11.0586C16.8623 11.0586 11.0586 16.8623 11.0586 23.9961C11.0586 31.1299 16.8623 36.9336 23.9961 36.9336C31.1299 36.9336 36.9336 31.1299 36.9336 23.9961C36.9336 16.8623 31.1299 11.0586 23.9961 11.0586ZM23.9961 33.1836C18.9301 33.1836 14.8086 29.0621 14.8086 23.9961C14.8086 18.9301 18.9301 14.8086 23.9961 14.8086C29.0621 14.8086 33.1836 18.9301 33.1836 23.9961C33.1836 29.0621 29.0621 33.1836 23.9961 33.1836Z"
      fill="white"
    />
    <path
      d="M37.1289 12.75C38.1644 12.75 39.0039 11.9105 39.0039 10.875C39.0039 9.83947 38.1644 9 37.1289 9C36.0934 9 35.2539 9.83947 35.2539 10.875C35.2539 11.9105 36.0934 12.75 37.1289 12.75Z"
      fill="white"
    />
  </svg>
)
export const InstagramIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.8999 0H6.10017C2.73652 0 0 2.73652 0 6.10017V14.8998C0 18.2635 2.73652 21 6.10017 21H14.8998C18.2635 21 21 18.2635 21 14.8999V6.10017C21 2.73652 18.2635 0 14.8999 0ZM19.3594 14.8998C19.3594 17.3588 17.3588 19.3594 14.8999 19.3594H6.10017C3.64116 19.3594 1.64062 17.3588 1.64062 14.8999V6.10017C1.64062 3.64116 3.64116 1.64062 6.10017 1.64062H14.8998C17.3588 1.64062 19.3594 3.64116 19.3594 6.10017V14.8998Z"
      fill="#999999"
    />
    <path
      d="M10.5 5C7.46727 5 5 7.46727 5 10.5C5 13.5327 7.46727 16 10.5 16C13.5327 16 16 13.5327 16 10.5C16 7.46727 13.5327 5 10.5 5ZM10.5 14.4058C8.34635 14.4058 6.5942 12.6536 6.5942 10.5C6.5942 8.34635 8.34635 6.5942 10.5 6.5942C12.6536 6.5942 14.4058 8.34635 14.4058 10.5C14.4058 12.6536 12.6536 14.4058 10.5 14.4058Z"
      fill="#999999"
    />
    <path
      d="M16 6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4C15.4477 4 15 4.44772 15 5C15 5.55228 15.4477 6 16 6Z"
      fill="#999999"
    />
  </svg>
)

export const LinkedinIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.9946 21V20.9991H21V13.4971C21 9.8271 20.1633 7 15.6197 7C13.4354 7 11.9696 8.13186 11.3712 9.20492H11.308V7.34263H7V20.9991H11.4858V14.2369C11.4858 12.4565 11.8433 10.7348 14.1783 10.7348C16.4789 10.7348 16.5132 12.7667 16.5132 14.3512V21H20.9946Z"
      fill="#999999"
    />
    <path d="M0 7H4V21H0V7Z" fill="#999999" />
    <path
      d="M2.5 0C1.11988 0 0 1.11466 0 2.48834C0 3.86203 1.11988 5 2.5 5C3.88012 5 5 3.86203 5 2.48834C4.99913 1.11466 3.87925 0 2.5 0V0Z"
      fill="#999999"
    />
  </svg>
)

export const PoweredByBookinglane = () => (
  <svg
    width="176"
    height="40"
    viewBox="0 0 176 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="poweredByBookinglane"
  >
    <path
      d="M7.41357 0H21.9474C22.0055 0.0125101 22.0628 0.0306129 22.1219 0.0366472C25.9038 0.430936 29.0274 1.91198 31.4178 4.44359C33.7137 6.87481 34.7782 9.70106 34.5353 12.8599C34.522 13.0317 34.5638 13.1509 34.7133 13.2704C35.1021 13.5813 35.4888 13.8961 35.8484 14.2315C37.4993 15.7714 38.7402 17.524 39.5134 19.5208C39.9509 20.6506 40.1996 21.8132 40.3863 22.9887V25.6124C40.3322 25.9729 40.2882 26.3346 40.2223 26.6933C39.8901 28.5003 39.1882 30.1961 38.1586 31.7933C36.7901 33.9153 34.9174 35.641 32.605 37.0081C30.3609 38.3346 27.8758 39.1388 25.1893 39.4886C24.0667 39.6349 22.9406 39.7372 21.8108 39.5902C19.0223 39.2277 17.1649 37.7759 15.8979 35.7016C15.0944 34.386 14.8978 32.9289 14.8492 31.4642C14.8048 30.1221 14.8041 28.7788 14.7981 27.4361C14.7725 20.7837 14.7821 14.1313 14.8271 7.47883C14.8303 7.07424 14.8199 6.66229 14.737 6.26609C14.1411 3.41952 11.3171 1.45706 7.91442 1.69343C6.22398 1.81028 4.82111 2.44315 3.65843 3.4806C2.4179 4.58929 1.94585 5.95216 1.94721 7.47176C1.9538 15.3527 1.95494 23.2337 1.95062 31.1145C1.95062 31.9368 1.96186 32.7606 2.08844 33.5759C2.36901 35.3816 3.22113 36.961 4.6654 38.2958C5.18141 38.7726 5.73983 39.2035 6.46316 39.4571C6.38531 39.4945 6.32688 39.5063 6.27049 39.5013C6.16292 39.4925 6.05627 39.4767 5.95141 39.4542C4.61583 39.1482 3.52828 38.485 2.59337 37.6385C0.83343 36.0445 -0.00761406 34.1501 5.19259e-05 31.9269C0.029353 23.5778 0.0109547 15.2282 0.0133396 6.87879C0.0133396 6.61931 0.0155543 6.35528 0.067683 6.1011C0.568357 3.65692 2.11689 1.88534 4.67256 0.757229C5.54086 0.373831 6.46571 0.159982 7.41357 0ZM13.9092 1.70387C14.1612 1.91655 14.4436 2.07344 14.5932 2.29671C15.0484 2.97608 15.7153 3.08366 16.5649 3.06836C18.3683 3.03598 20.1793 2.96283 21.9774 3.1677C24.5498 3.46073 26.6963 4.48847 28.3828 6.15968C30.3798 8.14039 31.2303 10.4808 30.8642 13.1038C30.4741 15.8986 28.8068 17.9901 26.009 19.4051C24.3065 20.2664 22.4427 20.6343 20.4768 20.6343C19.3683 20.6343 18.2598 20.6393 17.1514 20.6318C16.8758 20.63 16.7499 20.7111 16.7656 20.9582C16.78 21.1867 16.786 21.4174 16.764 21.6448C16.7352 21.9437 16.8673 22.0496 17.217 22.0457C18.4216 22.0325 19.6269 22.0262 20.8313 22.0441C22.912 22.0752 24.8465 21.5811 26.6378 20.7301C30.6923 18.8037 33.1408 15.057 32.4742 10.7874C31.8439 6.74397 29.2274 3.96055 24.8913 2.37765C23.5442 1.88593 22.1297 1.66649 20.6657 1.66752C18.4613 1.66914 16.2567 1.6584 14.0523 1.65398C14.031 1.65428 14.0092 1.6687 13.9092 1.70387ZM18.926 36.4967C19.6245 37.1295 20.4221 37.5512 21.3621 37.77C22.4544 38.0239 23.5578 37.9687 24.6602 37.8411C27.3269 37.5321 29.7458 36.6834 31.9297 35.33C34.2583 33.8876 35.9569 32.0021 37.1227 29.754C38.0361 27.9923 38.4828 26.1379 38.4685 24.2078C38.4526 22.1654 37.8874 20.2307 36.8331 18.4071C36.1857 17.2881 35.3532 16.2564 34.3619 15.3446C34.1638 15.1618 34.0759 15.1739 33.995 15.4199C33.8967 15.7196 33.7887 16.0212 33.6358 16.3021C33.4534 16.6374 33.526 16.8813 33.7926 17.1721C36.2798 19.8852 37.1065 22.9937 36.4561 26.361C35.7958 29.7808 33.7227 32.4774 30.3899 34.424C28.4255 35.5719 26.2472 36.2154 23.8823 36.3854C22.3788 36.4936 20.8725 36.421 19.3679 36.4451C19.2383 36.4465 19.1042 36.4175 18.9265 36.4959L18.926 36.4967ZM19.026 4.7659C18.181 4.7659 17.446 4.77459 16.7116 4.76178C16.3956 4.75634 16.3387 4.85568 16.4254 5.09882C16.5151 5.34676 16.5834 5.60011 16.6298 5.85678C16.6777 6.12892 16.8107 6.24048 17.1501 6.23547C18.3061 6.2184 19.4628 6.22502 20.619 6.23032C22.0784 6.23709 23.3966 6.64418 24.5528 7.38831C26.354 8.54601 27.2569 10.1351 27.2569 12.064C27.2552 14.1981 26.0961 15.7745 23.9363 16.7946C22.8437 17.3106 21.649 17.4863 20.4164 17.4918C19.3565 17.4969 18.2964 17.4918 17.2364 17.4941C16.7969 17.4953 16.772 17.5209 16.7697 17.9078C16.7683 18.1264 16.7838 18.3458 16.7659 18.5632C16.7431 18.8398 16.8852 18.9281 17.1904 18.9254C18.4792 18.9144 19.7681 18.9147 21.0575 18.9136C21.5294 18.9136 21.9944 18.8593 22.4544 18.7769C26.7148 18.0139 29.3565 14.9323 28.9335 11.2221C28.5974 8.27521 25.8501 5.63146 22.4411 4.94664C21.2721 4.71218 20.0931 4.78165 19.026 4.76517V4.7659ZM20.2367 33.3678C19.3691 33.3678 18.5015 33.3706 17.634 33.3662C17.349 33.3647 17.2272 33.4464 17.323 33.7062C17.4108 33.9439 17.4847 34.1854 17.5444 34.4295C17.6076 34.6893 17.7713 34.7779 18.0788 34.7753C19.4757 34.7636 20.8749 34.79 22.272 34.7635C23.3416 34.7429 24.4104 34.6808 25.4598 34.4616C28.0163 33.9281 30.1616 32.7953 31.8427 31.0662C33.9135 28.937 34.8612 26.4614 34.6631 23.6676C34.5304 21.7976 33.8086 20.1177 32.571 18.59C32.4277 18.4134 32.3481 18.4595 32.2345 18.6018C32.0567 18.8245 31.8928 19.0616 31.6761 19.253C31.4154 19.4834 31.435 19.6612 31.627 19.9271C32.9543 21.7668 33.3367 23.7705 32.9158 25.8909C32.5263 27.8538 31.4677 29.5241 29.7964 30.886C28.1937 32.1916 26.293 32.9984 24.0973 33.2593C22.8145 33.4115 21.5243 33.3538 20.2367 33.3671V33.3678ZM20.2234 30.191C19.1011 30.191 18.1621 30.1901 17.2225 30.191C17.0412 30.191 16.8398 30.1723 16.863 30.4215C16.8881 30.6908 16.9083 30.9607 16.9214 31.2309C16.9359 31.5304 17.0679 31.661 17.4548 31.6567C19.1647 31.6379 20.875 31.6541 22.5852 31.6447C23.0292 31.6422 23.4791 31.6252 23.9155 31.5603C26.763 31.136 28.9051 29.8411 30.1863 27.5926C31.4154 25.4352 31.4563 23.2542 30.1315 21.0932C29.9804 20.8465 29.8616 20.8642 29.6514 21.0208C29.4148 21.1974 29.1676 21.3664 28.9051 21.5121C28.663 21.6463 28.6277 21.7789 28.7637 21.9989C29.2335 22.7588 29.417 23.5839 29.4087 24.4368C29.3814 27.1977 27.0109 29.5939 23.8614 30.0728C22.5926 30.2655 21.3142 30.1537 20.2234 30.1902V30.191ZM19.1807 15.7905C19.8134 15.7643 20.5946 15.8148 21.3769 15.7353C23.9706 15.4717 25.5855 13.5249 25.2801 11.5952C25.0111 9.89607 23.4471 8.30685 21.475 8.03251C20.0069 7.82808 18.5182 7.97364 17.0388 7.94862C16.8392 7.94523 16.7683 8.05253 16.7693 8.21354C16.7715 8.53601 16.7763 8.85877 16.7669 9.18108C16.7606 9.39538 16.8671 9.48118 17.1122 9.4775C17.5817 9.47058 18.0517 9.46793 18.5212 9.4775C19.4228 9.49663 20.3282 9.41259 21.2255 9.54461C22.4403 9.72329 23.4081 10.5729 23.5506 11.5814C23.7069 12.6863 23.0396 13.6919 21.849 14.112C21.3645 14.283 20.8464 14.3251 20.3251 14.3254C19.2773 14.3261 18.2298 14.3341 17.1816 14.3229C16.8661 14.3195 16.7451 14.4162 16.7647 14.6871C16.7818 14.9469 16.7822 15.2074 16.7657 15.4672C16.7519 15.7152 16.8802 15.7976 17.1535 15.7938C17.7797 15.7838 18.4061 15.7898 19.1807 15.7898V15.7905ZM20.0964 28.4743C20.9156 28.4743 21.7348 28.4771 22.5541 28.4743C24.7188 28.4656 26.2167 27.5586 27.0698 25.8771C27.5739 24.8839 27.5468 23.8537 27.0644 22.8395C26.9497 22.5981 26.8072 22.5539 26.54 22.6708C26.2817 22.7829 26.012 22.8743 25.7344 22.944C25.4164 23.0245 25.3286 23.1098 25.4881 23.4174C26.3325 25.0464 25.5351 26.7629 23.2329 27.0214C22.1907 27.1382 21.1393 27.0551 20.0923 27.0674C19.1165 27.0791 18.1405 27.0766 17.1647 27.0664C16.8673 27.0635 16.7468 27.1563 16.7654 27.4139C16.7838 27.6425 16.7838 27.8719 16.7654 28.1005C16.7392 28.3903 16.8785 28.4831 17.2058 28.4796C18.1686 28.4656 19.1327 28.4737 20.0964 28.4736V28.4743ZM20.0384 23.7602V23.7882C19.0993 23.7882 18.1601 23.7929 17.2211 23.7857C16.886 23.7832 16.7369 23.8913 16.7637 24.1939C16.7871 24.4639 16.7871 24.7349 16.7637 25.0049C16.7383 25.3014 16.8581 25.4083 17.2131 25.4055C18.8749 25.3925 20.5371 25.4031 22.199 25.397C22.5713 25.3956 22.9476 25.3781 23.3064 25.277C23.7128 25.1624 23.8779 24.9275 23.836 24.5601C23.7714 23.9927 23.5028 23.7745 22.7851 23.7636C21.8694 23.7489 20.9537 23.7595 20.0384 23.7595V23.7602ZM18.9006 12.6573C19.4408 12.6278 20.1047 12.71 20.763 12.6131C21.3333 12.5286 21.5977 12.2793 21.5699 11.8575C21.5449 11.4772 21.2192 11.2076 20.679 11.1989C19.4873 11.1798 18.2952 11.1914 17.1032 11.1871C16.8547 11.1862 16.7608 11.2888 16.7671 11.4962C16.7758 11.7769 16.7806 12.0584 16.7656 12.3386C16.7523 12.5888 16.8817 12.6667 17.1548 12.6612C17.6964 12.6499 18.2385 12.6573 18.9006 12.6573Z"
      fill="#999999"
    />
    <path
      d="M10.2824 39.4573C9.94642 39.5275 9.65358 39.4236 9.36585 39.3275C7.38837 38.6669 5.98089 37.4543 4.94751 35.8893C4.20459 34.7644 3.8339 33.5599 3.83595 32.254C3.84855 23.884 3.85105 15.5141 3.84344 7.14417C3.84344 5.22498 5.36216 3.60838 7.53521 3.19702C10.2241 2.68764 12.9324 4.46422 13.083 6.82509C13.1115 7.27266 13.1189 7.71934 13.1189 8.16676C13.1197 16.0683 13.119 23.9698 13.1167 31.8712C13.1167 33.0876 13.2443 34.2833 13.7534 35.4273C14.3837 36.8421 15.3026 38.0812 16.7272 39.0037C16.8626 39.0906 17.0029 39.1715 17.1477 39.2462C17.2806 39.3156 17.4213 39.3737 17.6015 39.4566C17.4162 39.5282 17.2743 39.4851 17.1303 39.454C15.7591 39.1597 14.6634 38.4696 13.7142 37.6073C12.0057 36.0559 11.1335 34.2153 11.1386 32.0485C11.1566 23.7827 11.1587 15.5169 11.1449 7.25102C11.1449 6.01782 10.3088 5.104 8.97454 4.86366C7.42601 4.58402 5.88975 5.62015 5.83915 6.97977C5.82553 7.34369 5.81843 7.70791 5.81786 8.07242C5.81661 15.8804 5.81661 23.6882 5.81786 31.4959C5.81786 32.5158 5.82757 33.5344 6.13165 34.5333C6.62824 36.1654 7.55685 37.5718 8.99925 38.7182C9.38118 39.0219 9.82172 39.248 10.2824 39.4573Z"
      fill="#999999"
    />
    <path
      d="M14.0652 39.4512C13.7948 39.5177 13.6359 39.4906 13.4744 39.4549C12.3599 39.2078 11.4199 38.685 10.5807 38.032C8.98314 36.7882 7.92421 35.2706 7.5806 33.4168C7.51268 33.0363 7.47964 32.6517 7.4818 32.2667C7.47634 23.9911 7.47515 15.7154 7.47822 7.43966C7.47822 7.15855 7.46732 6.87244 7.67447 6.63018C7.91399 6.35055 8.36832 6.20661 8.73067 6.28844C9.09302 6.37027 9.40136 6.68582 9.4477 7.03993C9.46797 7.19431 9.45996 7.35179 9.45996 7.5078C9.46178 15.8148 9.46536 24.1217 9.47069 32.4286C9.47478 34.524 10.3131 36.3877 11.8349 38.0049C12.4071 38.6132 13.0873 39.1504 14.0652 39.4512Z"
      fill="#999999"
    />
    <path
      d="M49.4727 33.6747H56.1055C59.5925 33.6747 61.4497 31.8357 61.4497 29.3378C61.4497 27.0162 59.8047 25.614 58.0385 25.5297V25.3765C59.6531 25.0087 60.8433 23.8517 60.8433 22.0051C60.8433 19.6528 59.1149 17.9824 55.6886 17.9824H49.4727V33.6747ZM52.755 30.9622V26.794H55.5067C57.0834 26.794 58.0613 27.7135 58.0613 29.0084C58.0613 30.1884 57.2653 30.9622 55.4309 30.9622H52.755ZM52.755 24.549V20.6642H55.2489C56.7044 20.6642 57.5306 21.4228 57.5306 22.5568C57.5306 23.7981 56.53 24.549 55.1883 24.549H52.755Z"
      fill="#999999"
    />
    <path
      d="M67.9555 33.9045C71.488 33.9045 73.6863 31.4603 73.6863 27.8361C73.6863 24.1888 71.488 21.7522 67.9555 21.7522C64.423 21.7522 62.2247 24.1888 62.2247 27.8361C62.2247 31.4603 64.423 33.9045 67.9555 33.9045ZM67.9707 31.376C66.3409 31.376 65.507 29.8665 65.507 27.8131C65.507 25.7596 66.3409 24.2425 67.9707 24.2425C69.5701 24.2425 70.404 25.7596 70.404 27.8131C70.404 29.8665 69.5701 31.376 67.9707 31.376Z"
      fill="#999999"
    />
    <path
      d="M80.2167 33.9045C83.7492 33.9045 85.9475 31.4603 85.9475 27.8361C85.9475 24.1888 83.7492 21.7522 80.2167 21.7522C76.6842 21.7522 74.4859 24.1888 74.4859 27.8361C74.4859 31.4603 76.6842 33.9045 80.2167 33.9045ZM80.2319 31.376C78.6021 31.376 77.7682 29.8665 77.7682 27.8131C77.7682 25.7596 78.6021 24.2425 80.2319 24.2425C81.8313 24.2425 82.6652 25.7596 82.6652 27.8131C82.6652 29.8665 81.8313 31.376 80.2319 31.376Z"
      fill="#999999"
    />
    <path
      d="M87.2171 33.6747H90.4464V29.9355L91.3181 28.9317L94.4943 33.6747H98.2769L93.7363 27.0009L98.0571 21.9055H94.3503L90.6207 26.3726H90.4464V17.9824H87.2171V33.6747Z"
      fill="#999999"
    />
    <path
      d="M98.8113 33.6747H102.041V21.9055H98.8113V33.6747ZM100.433 20.3884C101.396 20.3884 102.185 19.6451 102.185 18.7333C102.185 17.8292 101.396 17.0859 100.433 17.0859C99.4784 17.0859 98.69 17.8292 98.69 18.7333C98.69 19.6451 99.4784 20.3884 100.433 20.3884Z"
      fill="#999999"
    />
    <path
      d="M107.026 26.8706C107.034 25.3535 107.929 24.4647 109.232 24.4647C110.529 24.4647 111.309 25.3228 111.302 26.7633V33.6747H114.531V26.181C114.531 23.4379 112.939 21.7522 110.513 21.7522C108.785 21.7522 107.534 22.6104 107.011 23.9819H106.875V21.9055H103.797V33.6747H107.026V26.8706Z"
      fill="#999999"
    />
    <path
      d="M121.492 38.3333C124.819 38.3333 127.185 36.8009 127.185 33.7896V21.9055H123.978V23.8823H123.857C123.425 22.9246 122.477 21.7522 120.529 21.7522C117.974 21.7522 115.814 23.7597 115.814 27.7671C115.814 31.6825 117.914 33.5061 120.537 33.5061C122.394 33.5061 123.432 32.5636 123.857 31.5905H123.993V33.7436C123.993 35.3604 122.97 35.9887 121.567 35.9887C120.142 35.9887 119.422 35.3604 119.157 34.6478L116.17 35.0539C116.557 36.9081 118.353 38.3333 121.492 38.3333ZM121.56 31.0542C119.976 31.0542 119.111 29.7823 119.111 27.7518C119.111 25.7519 119.96 24.3497 121.56 24.3497C123.129 24.3497 124.008 25.6906 124.008 27.7518C124.008 29.8282 123.114 31.0542 121.56 31.0542Z"
      fill="#999999"
    />
    <path
      d="M132.153 17.9824H128.924V33.6747H132.153V17.9824Z"
      fill="#999999"
    />
    <path
      d="M137.23 33.8969C138.951 33.8969 140.065 33.1383 140.634 32.0426H140.725V33.6747H143.787V25.7366C143.787 22.9322 141.437 21.7522 138.845 21.7522C136.055 21.7522 134.221 23.1008 133.774 25.2462L136.76 25.4914C136.98 24.7099 137.67 24.1352 138.83 24.1352C139.929 24.1352 140.558 24.6945 140.558 25.66V25.7059C140.558 26.4645 139.762 26.5641 137.738 26.7633C135.434 26.9779 133.364 27.7594 133.364 30.3876C133.364 32.7169 135.009 33.8969 137.23 33.8969ZM138.155 31.6442C137.162 31.6442 136.45 31.1768 136.45 30.2803C136.45 29.3608 137.2 28.9088 138.337 28.7479C139.042 28.6482 140.194 28.4797 140.581 28.2192V29.4681C140.581 30.7017 139.573 31.6442 138.155 31.6442Z"
      fill="#999999"
    />
    <path
      d="M148.692 26.8706C148.699 25.3535 149.594 24.4647 150.898 24.4647C152.194 24.4647 152.975 25.3228 152.967 26.7633V33.6747H156.196V26.181C156.196 23.4379 154.605 21.7522 152.179 21.7522C150.45 21.7522 149.2 22.6104 148.677 23.9819H148.54V21.9055H145.463V33.6747H148.692V26.8706Z"
      fill="#999999"
    />
    <path
      d="M163.218 33.9045C166.098 33.9045 168.039 32.487 168.494 30.3033L165.507 30.1041C165.181 31.0006 164.347 31.4679 163.271 31.4679C161.656 31.4679 160.633 30.3876 160.633 28.6329V28.6253H168.562V27.7288C168.562 23.7291 166.166 21.7522 163.089 21.7522C159.662 21.7522 157.441 24.2118 157.441 27.8437C157.441 31.5752 159.632 33.9045 163.218 33.9045ZM160.633 26.6024C160.701 25.2615 161.709 24.1888 163.142 24.1888C164.544 24.1888 165.515 25.2002 165.522 26.6024H160.633Z"
      fill="#999999"
    />
    <path
      d="M168.562 15.6718C168.562 15.0028 168.725 14.3818 169.05 13.8089C169.378 13.236 169.83 12.7856 170.406 12.4577C170.985 12.1265 171.61 11.9609 172.281 11.9609C172.951 11.9609 173.574 12.1265 174.15 12.4577C174.73 12.7856 175.182 13.236 175.507 13.8089C175.835 14.3818 175.999 15.0028 175.999 15.6718C175.999 16.3308 175.84 16.9452 175.523 17.5148C175.205 18.0844 174.756 18.5414 174.177 18.8858C173.601 19.227 172.969 19.3975 172.281 19.3975C171.593 19.3975 170.959 19.227 170.38 18.8858C169.804 18.5414 169.357 18.0844 169.039 17.5148C168.721 16.9452 168.562 16.3308 168.562 15.6718ZM169.008 15.6718C169.008 16.2646 169.153 16.816 169.442 17.326C169.736 17.836 170.135 18.2384 170.642 18.5331C171.151 18.8246 171.698 18.9703 172.281 18.9703C172.864 18.9703 173.41 18.8246 173.92 18.5331C174.43 18.2384 174.828 17.836 175.114 17.326C175.404 16.8127 175.549 16.2613 175.549 15.6718C175.549 15.0889 175.407 14.5458 175.124 14.0424C174.842 13.539 174.445 13.1383 173.936 12.8402C173.429 12.5422 172.878 12.3931 172.281 12.3931C171.694 12.3931 171.146 12.5405 170.636 12.8352C170.13 13.1267 169.732 13.5257 169.442 14.0324C169.153 14.5358 169.008 15.0823 169.008 15.6718ZM171.432 15.9847V17.6986H170.919V13.5307H172.27C172.784 13.5307 173.178 13.6334 173.454 13.8387C173.73 14.0407 173.868 14.3487 173.868 14.7627C173.868 15.2032 173.621 15.5294 173.129 15.7413C173.381 15.8274 173.555 15.9616 173.653 16.1437C173.751 16.3225 173.8 16.5378 173.8 16.7895C173.8 17.0412 173.807 17.2233 173.82 17.3359C173.834 17.4485 173.857 17.5429 173.889 17.6191V17.6986H173.354C173.306 17.5794 173.281 17.278 173.281 16.7945C173.281 16.4997 173.215 16.2911 173.082 16.1685C172.953 16.046 172.731 15.9847 172.417 15.9847H171.432ZM171.432 15.5327H172.38C172.663 15.5327 172.895 15.4631 173.077 15.324C173.262 15.1849 173.354 15.0011 173.354 14.7726C173.354 14.4911 173.278 14.2908 173.124 14.1715C172.974 14.049 172.714 13.9844 172.344 13.9778H171.432V15.5327Z"
      fill="#999999"
    />
    <path
      d="M49.5156 13.1641V4.57422H52.7559C53.3262 4.57422 53.7617 4.60156 54.0625 4.65625C54.4844 4.72656 54.8379 4.86133 55.123 5.06055C55.4082 5.25586 55.6367 5.53125 55.8086 5.88672C55.9844 6.24219 56.0723 6.63281 56.0723 7.05859C56.0723 7.78906 55.8398 8.4082 55.375 8.91602C54.9102 9.41992 54.0703 9.67188 52.8555 9.67188H50.6523V13.1641H49.5156ZM50.6523 8.6582H52.873C53.6074 8.6582 54.1289 8.52148 54.4375 8.24805C54.7461 7.97461 54.9004 7.58984 54.9004 7.09375C54.9004 6.73438 54.8086 6.42773 54.625 6.17383C54.4453 5.91602 54.207 5.74609 53.9102 5.66406C53.7188 5.61328 53.3652 5.58789 52.8496 5.58789H50.6523V8.6582ZM56.9922 10.0527C56.9922 8.90039 57.3125 8.04688 57.9531 7.49219C58.4883 7.03125 59.1406 6.80078 59.9102 6.80078C60.7656 6.80078 61.4648 7.08203 62.0078 7.64453C62.5508 8.20312 62.8223 8.97656 62.8223 9.96484C62.8223 10.7656 62.7012 11.3965 62.459 11.8574C62.2207 12.3145 61.8711 12.6699 61.4102 12.9238C60.9531 13.1777 60.4531 13.3047 59.9102 13.3047C59.0391 13.3047 58.334 13.0254 57.7949 12.4668C57.2598 11.9082 56.9922 11.1035 56.9922 10.0527ZM58.0762 10.0527C58.0762 10.8496 58.25 11.4473 58.5977 11.8457C58.9453 12.2402 59.3828 12.4375 59.9102 12.4375C60.4336 12.4375 60.8691 12.2383 61.2168 11.8398C61.5645 11.4414 61.7383 10.834 61.7383 10.0176C61.7383 9.24805 61.5625 8.66602 61.2109 8.27148C60.8633 7.87305 60.4297 7.67383 59.9102 7.67383C59.3828 7.67383 58.9453 7.87109 58.5977 8.26562C58.25 8.66016 58.0762 9.25586 58.0762 10.0527ZM65.2129 13.1641L63.3086 6.94141H64.3984L65.3887 10.5332L65.7578 11.8691C65.7734 11.8027 65.8809 11.375 66.0801 10.5859L67.0703 6.94141H68.1543L69.0859 10.5508L69.3965 11.7402L69.7539 10.5391L70.8203 6.94141H71.8457L69.9004 13.1641H68.8047L67.8145 9.4375L67.5742 8.37695L66.3145 13.1641H65.2129ZM76.9961 11.1602L78.0859 11.2949C77.9141 11.9316 77.5957 12.4258 77.1309 12.7773C76.666 13.1289 76.0723 13.3047 75.3496 13.3047C74.4395 13.3047 73.7168 13.0254 73.1816 12.4668C72.6504 11.9043 72.3848 11.1172 72.3848 10.1055C72.3848 9.05859 72.6543 8.24609 73.1934 7.66797C73.7324 7.08984 74.4316 6.80078 75.291 6.80078C76.123 6.80078 76.8027 7.08398 77.3301 7.65039C77.8574 8.2168 78.1211 9.01367 78.1211 10.041C78.1211 10.1035 78.1191 10.1973 78.1152 10.3223H73.4746C73.5137 11.0059 73.707 11.5293 74.0547 11.8926C74.4023 12.2559 74.8359 12.4375 75.3555 12.4375C75.7422 12.4375 76.0723 12.3359 76.3457 12.1328C76.6191 11.9297 76.8359 11.6055 76.9961 11.1602ZM73.5332 9.45508H77.0078C76.9609 8.93164 76.8281 8.53906 76.6094 8.27734C76.2734 7.87109 75.8379 7.66797 75.3027 7.66797C74.8184 7.66797 74.4102 7.83008 74.0781 8.1543C73.75 8.47852 73.5684 8.91211 73.5332 9.45508ZM79.4043 13.1641V6.94141H80.3535V7.88477C80.5957 7.44336 80.8184 7.15234 81.0215 7.01172C81.2285 6.87109 81.4551 6.80078 81.7012 6.80078C82.0566 6.80078 82.418 6.91406 82.7852 7.14062L82.4219 8.11914C82.1641 7.9668 81.9062 7.89062 81.6484 7.89062C81.418 7.89062 81.2109 7.96094 81.0273 8.10156C80.8438 8.23828 80.7129 8.42969 80.6348 8.67578C80.5176 9.05078 80.459 9.46094 80.459 9.90625V13.1641H79.4043ZM87.6719 11.1602L88.7617 11.2949C88.5898 11.9316 88.2715 12.4258 87.8066 12.7773C87.3418 13.1289 86.748 13.3047 86.0254 13.3047C85.1152 13.3047 84.3926 13.0254 83.8574 12.4668C83.3262 11.9043 83.0605 11.1172 83.0605 10.1055C83.0605 9.05859 83.3301 8.24609 83.8691 7.66797C84.4082 7.08984 85.1074 6.80078 85.9668 6.80078C86.7988 6.80078 87.4785 7.08398 88.0059 7.65039C88.5332 8.2168 88.7969 9.01367 88.7969 10.041C88.7969 10.1035 88.7949 10.1973 88.791 10.3223H84.1504C84.1895 11.0059 84.3828 11.5293 84.7305 11.8926C85.0781 12.2559 85.5117 12.4375 86.0312 12.4375C86.418 12.4375 86.748 12.3359 87.0215 12.1328C87.2949 11.9297 87.5117 11.6055 87.6719 11.1602ZM84.209 9.45508H87.6836C87.6367 8.93164 87.5039 8.53906 87.2852 8.27734C86.9492 7.87109 86.5137 7.66797 85.9785 7.66797C85.4941 7.66797 85.0859 7.83008 84.7539 8.1543C84.4258 8.47852 84.2441 8.91211 84.209 9.45508ZM94.1289 13.1641V12.3789C93.7344 12.9961 93.1543 13.3047 92.3887 13.3047C91.8926 13.3047 91.4355 13.168 91.0176 12.8945C90.6035 12.6211 90.2812 12.2402 90.0508 11.752C89.8242 11.2598 89.7109 10.6953 89.7109 10.0586C89.7109 9.4375 89.8145 8.875 90.0215 8.37109C90.2285 7.86328 90.5391 7.47461 90.9531 7.20508C91.3672 6.93555 91.8301 6.80078 92.3418 6.80078C92.7168 6.80078 93.0508 6.88086 93.3438 7.04102C93.6367 7.19727 93.875 7.40234 94.0586 7.65625V4.57422H95.1074V13.1641H94.1289ZM90.7949 10.0586C90.7949 10.8555 90.9629 11.4512 91.2988 11.8457C91.6348 12.2402 92.0312 12.4375 92.4883 12.4375C92.9492 12.4375 93.3398 12.25 93.6602 11.875C93.9844 11.4961 94.1465 10.9199 94.1465 10.1465C94.1465 9.29492 93.9824 8.66992 93.6543 8.27148C93.3262 7.87305 92.9219 7.67383 92.4414 7.67383C91.9727 7.67383 91.5801 7.86523 91.2637 8.24805C90.9512 8.63086 90.7949 9.23438 90.7949 10.0586ZM101.084 13.1641H100.105V4.57422H101.16V7.63867C101.605 7.08008 102.174 6.80078 102.865 6.80078C103.248 6.80078 103.609 6.87891 103.949 7.03516C104.293 7.1875 104.574 7.4043 104.793 7.68555C105.016 7.96289 105.189 8.29883 105.314 8.69336C105.439 9.08789 105.502 9.50977 105.502 9.95898C105.502 11.0254 105.238 11.8496 104.711 12.4316C104.184 13.0137 103.551 13.3047 102.812 13.3047C102.078 13.3047 101.502 12.998 101.084 12.3848V13.1641ZM101.072 10.0059C101.072 10.752 101.174 11.291 101.377 11.623C101.709 12.166 102.158 12.4375 102.725 12.4375C103.186 12.4375 103.584 12.2383 103.92 11.8398C104.256 11.4375 104.424 10.8398 104.424 10.0469C104.424 9.23438 104.262 8.63477 103.938 8.24805C103.617 7.86133 103.229 7.66797 102.771 7.66797C102.311 7.66797 101.912 7.86914 101.576 8.27148C101.24 8.66992 101.072 9.24805 101.072 10.0059ZM106.744 15.5605L106.627 14.5703C106.857 14.6328 107.059 14.6641 107.23 14.6641C107.465 14.6641 107.652 14.625 107.793 14.5469C107.934 14.4688 108.049 14.3594 108.139 14.2188C108.205 14.1133 108.312 13.8516 108.461 13.4336C108.48 13.375 108.512 13.2891 108.555 13.1758L106.193 6.94141H107.33L108.625 10.5449C108.793 11.002 108.943 11.4824 109.076 11.9863C109.197 11.502 109.342 11.0293 109.51 10.5684L110.84 6.94141H111.895L109.527 13.2695C109.273 13.9531 109.076 14.4238 108.936 14.6816C108.748 15.0293 108.533 15.2832 108.291 15.4434C108.049 15.6074 107.76 15.6895 107.424 15.6895C107.221 15.6895 106.994 15.6465 106.744 15.5605Z"
      fill="#999999"
    />
  </svg>
)
export const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.7864 12L23.6301 2.15634C24.1233 1.66303 24.1233 0.863248 23.6301 0.369984C23.1368 -0.123328 22.3369 -0.123328 21.8437 0.369984L12 10.2136L2.15634 0.369984C1.66303 -0.123328 0.863248 -0.123328 0.369984 0.369984C-0.123281 0.863295 -0.123328 1.66308 0.369984 2.15634L10.2136 12L0.369984 21.8436C-0.123328 22.3369 -0.123328 23.1367 0.369984 23.63C0.863295 24.1233 1.66307 24.1232 2.15634 23.63L12 13.7863L21.8436 23.63C22.3369 24.1233 23.1367 24.1232 23.63 23.63C24.1232 23.1367 24.1232 22.3369 23.63 21.8436L13.7864 12Z"
      fill="#858282"
    />
  </svg>
)
