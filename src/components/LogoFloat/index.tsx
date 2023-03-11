import Image from 'next/image';
import Portrait from '@/../public/avatar.png'
import styles from './styles.module.scss';

const LogoFloat = () => {
    return (
        <div className={styles.wrapper}>
            <Image className={styles.avatar} src={Portrait} alt='My portrait.' height={256} />

            <svg
                className={styles.logoFloat}
                width='auto'
                viewBox='0 0 126 40'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g>
                    <rect
                        x='5'
                        y='6'
                        width='8'
                        height='8'
                        rx='4'
                        fill='#282C34'
                    />
                    <path
                        d='M9.53477 9.99998C9.53477 10.2943 9.29534 10.533 8.99999 10.533C8.70463 10.533 8.4652 10.2943 8.4652 9.99998C8.4652 9.70563 8.70463 9.46701 8.99999 9.46701C9.29534 9.46701 9.53477 9.70563 9.53477 9.99998Z'
                        fill='#61DAFB'
                    />
                    <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M9 7.99437C8.91233 7.90942 8.82498 7.83167 8.73867 7.76176C8.51576 7.58121 8.29427 7.4484 8.08746 7.38173C7.88066 7.31505 7.67411 7.31054 7.5 7.41072C7.32589 7.5109 7.22654 7.69143 7.18108 7.90325C7.13562 8.11508 7.14027 8.37265 7.18572 8.65532C7.20331 8.76477 7.22719 8.87903 7.25718 8.99717C7.13952 9.03037 7.02829 9.06689 6.92438 9.10642C6.65603 9.20854 6.42988 9.3333 6.26854 9.47846C6.1072 9.6236 6 9.79962 6 9.99998C6 10.2003 6.1072 10.3764 6.26854 10.5215C6.42988 10.6667 6.65603 10.7914 6.92438 10.8935C7.02829 10.9331 7.13952 10.9696 7.25718 11.0028C7.22719 11.1209 7.20331 11.2352 7.18572 11.3446C7.14027 11.6273 7.13562 11.8849 7.18108 12.0967C7.22654 12.3085 7.32589 12.4891 7.5 12.5892C7.67411 12.6894 7.88066 12.6849 8.08746 12.6182C8.29427 12.5516 8.51576 12.4187 8.73867 12.2382C8.82498 12.1683 8.91233 12.0905 9 12.0056C9.08767 12.0905 9.17502 12.1683 9.26133 12.2382C9.48424 12.4187 9.70573 12.5516 9.91254 12.6182C10.1193 12.6849 10.3259 12.6894 10.5 12.5892C10.6741 12.4891 10.7735 12.3085 10.8189 12.0967C10.8644 11.8849 10.8597 11.6273 10.8143 11.3446C10.7967 11.2352 10.7728 11.1209 10.7428 11.0028C10.8605 10.9696 10.9717 10.9331 11.0756 10.8935C11.344 10.7914 11.5701 10.6667 11.7315 10.5215C11.8928 10.3764 12 10.2003 12 9.99998C12 9.79962 11.8928 9.6236 11.7315 9.47846C11.5701 9.3333 11.344 9.20854 11.0756 9.10642C10.9717 9.06689 10.8605 9.03037 10.7428 8.99717C10.7728 8.87903 10.7967 8.76477 10.8143 8.65532C10.8597 8.37265 10.8644 8.11508 10.8189 7.90325C10.7735 7.69143 10.6741 7.5109 10.5 7.41072C10.3259 7.31054 10.1193 7.31505 9.91254 7.38173C9.70573 7.4484 9.48424 7.58121 9.26133 7.76176C9.17502 7.83167 9.08767 7.90942 9 7.99437ZM10.3696 7.63587C10.4575 7.68645 10.5274 7.78815 10.5638 7.95763C10.6002 8.12708 10.5992 8.34987 10.5567 8.61419C10.5404 8.71575 10.5181 8.8224 10.49 8.93322C10.2432 8.87755 9.97418 8.83545 9.68981 8.80924C9.52486 8.57691 9.35378 8.3658 9.182 8.18063C9.26424 8.10094 9.34578 8.02839 9.42586 7.96352C9.63431 7.79468 9.8274 7.68243 9.99284 7.62909C10.1583 7.57574 10.2817 7.58529 10.3696 7.63587ZM8.818 8.18063C8.73576 8.10094 8.65422 8.02839 8.57414 7.96352C8.36569 7.79468 8.1726 7.68243 8.00716 7.62909C7.84171 7.57574 7.71835 7.58529 7.63043 7.63587C7.54252 7.68645 7.47255 7.78815 7.43618 7.95763C7.39981 8.12708 7.40081 8.34987 7.4433 8.61419C7.45963 8.71575 7.48191 8.8224 7.51003 8.93322C7.75683 8.87755 8.02582 8.83545 8.31019 8.80924C8.47514 8.57691 8.64622 8.3658 8.818 8.18063ZM10.4186 9.18371C10.2501 9.1462 10.0699 9.11508 9.88026 9.09137C9.94213 9.18776 10.0028 9.28706 10.0618 9.38902C10.1209 9.49097 10.1769 9.59295 10.2297 9.69454C10.3039 9.51903 10.367 9.34789 10.4186 9.18371ZM10.3796 9.99998C10.499 9.74145 10.5969 9.48823 10.672 9.24738C10.7823 9.27852 10.8862 9.31262 10.9826 9.34931C11.2335 9.44479 11.4276 9.55532 11.5567 9.67144C11.6857 9.78757 11.7391 9.89881 11.7391 9.99998C11.7391 10.1011 11.6857 10.2124 11.5567 10.3285C11.4276 10.4446 11.2335 10.5552 10.9826 10.6507C10.8862 10.6873 10.7823 10.7214 10.672 10.7526C10.5969 10.5117 10.499 10.2585 10.3796 9.99998ZM10.0913 9.99998C10.0146 9.84133 9.92941 9.68041 9.8359 9.51901C9.7424 9.3576 9.64517 9.20361 9.54564 9.05811C9.36944 9.04496 9.18701 9.03804 9 9.03804C8.81299 9.03804 8.63056 9.04496 8.45436 9.05811C8.35483 9.20361 8.2576 9.3576 8.1641 9.51901C8.07059 9.68041 7.98539 9.84133 7.90872 9.99998C7.98539 10.1586 8.07059 10.3195 8.1641 10.481C8.2576 10.6424 8.35483 10.7963 8.45436 10.9419C8.63056 10.955 8.81299 10.9619 9 10.9619C9.18701 10.9619 9.36944 10.955 9.54564 10.9419C9.64517 10.7963 9.7424 10.6424 9.8359 10.481C9.92941 10.3195 10.0146 10.1586 10.0913 9.99998ZM9.88026 10.9086C9.94214 10.8122 10.0028 10.7129 10.0618 10.6109C10.1209 10.509 10.1769 10.407 10.2297 10.3054C10.3039 10.4809 10.367 10.6521 10.4186 10.8162C10.2501 10.8538 10.0699 10.8849 9.88026 10.9086ZM9.34943 11.214C9.23473 11.2192 9.11812 11.2219 9 11.2219C8.88188 11.2219 8.76527 11.2192 8.65057 11.214C8.76599 11.3658 8.88316 11.5059 9 11.6325C9.11684 11.5059 9.23401 11.3658 9.34943 11.214ZM9.182 11.8193C9.35378 11.6342 9.52486 11.423 9.68981 11.1907C9.97418 11.1645 10.2432 11.1224 10.49 11.0667C10.5181 11.1776 10.5404 11.2842 10.5567 11.3858C10.5992 11.6501 10.6002 11.8729 10.5638 12.0423C10.5274 12.2118 10.4575 12.3135 10.3696 12.3641C10.2817 12.4147 10.1583 12.4242 9.99284 12.3709C9.8274 12.3175 9.63431 12.2053 9.42586 12.0364C9.34578 11.9716 9.26424 11.899 9.182 11.8193ZM8.818 11.8193C8.64622 11.6342 8.47514 11.423 8.31019 11.1907C8.02582 11.1645 7.75683 11.1224 7.51003 11.0667C7.48191 11.1776 7.45963 11.2842 7.4433 11.3858C7.40081 11.6501 7.39981 11.8729 7.43618 12.0423C7.47255 12.2118 7.54252 12.3135 7.63043 12.3641C7.71835 12.4147 7.84171 12.4242 8.00716 12.3709C8.1726 12.3175 8.36569 12.2053 8.57414 12.0364C8.65422 11.9716 8.73576 11.899 8.818 11.8193ZM7.58137 10.8162C7.74986 10.8538 7.93012 10.8849 8.11974 10.9086C8.05786 10.8122 7.99724 10.7129 7.93818 10.6109C7.87912 10.509 7.82313 10.407 7.77031 10.3054C7.6961 10.4809 7.63302 10.6521 7.58137 10.8162ZM7.77031 9.69454C7.82313 9.59295 7.87912 9.49097 7.93818 9.38902C7.99724 9.28706 8.05787 9.18776 8.11974 9.09137C7.93012 9.11508 7.74986 9.1462 7.58137 9.18371C7.63302 9.34789 7.6961 9.51902 7.77031 9.69454ZM7.62038 9.99998C7.50096 10.2585 7.40305 10.5117 7.32803 10.7526C7.21767 10.7214 7.11385 10.6873 7.01744 10.6507C6.7665 10.5552 6.57241 10.4446 6.44334 10.3285C6.31426 10.2124 6.26087 10.1011 6.26087 9.99998C6.26087 9.89881 6.31426 9.78757 6.44334 9.67144C6.57241 9.55532 6.7665 9.44479 7.01744 9.34931C7.11385 9.31262 7.21767 9.27852 7.32803 9.24738C7.40305 9.48823 7.50096 9.74145 7.62038 9.99998ZM8.65057 8.78593C8.76527 8.78072 8.88188 8.77805 9 8.77805C9.11812 8.77805 9.23473 8.78072 9.34942 8.78593C9.23401 8.63413 9.11684 8.49411 9 8.36744C8.88316 8.49411 8.76599 8.63413 8.65057 8.78593Z'
                        fill='#61DAFB'
                    />
                </g>
                <g clip-path='url(#clip0_67_21)'>
                    <mask
                        id='mask0_67_21'
                        style={{ maskType: 'alpha' }}
                        maskUnits='userSpaceOnUse'
                        x='84'
                        y='8'
                        width='8'
                        height='8'
                    >
                        <path
                            d='M88 16C90.2091 16 92 14.2091 92 12C92 9.79086 90.2091 8 88 8C85.7909 8 84 9.79086 84 12C84 14.2091 85.7909 16 88 16Z'
                            fill='black'
                        />
                    </mask>
                    <g mask='url(#mask0_67_21)'>
                        <path
                            d='M88 16C90.2091 16 92 14.2091 92 12C92 9.79086 90.2091 8 88 8C85.7909 8 84 9.79086 84 12C84 14.2091 85.7909 16 88 16Z'
                            fill='black'
                        />
                        <path
                            d='M90.6448 15.0009L87.073 10.4H86.4V13.5987H86.9384V11.0837L90.2222 15.3265C90.3704 15.2273 90.5115 15.1185 90.6448 15.0009Z'
                            fill='url(#paint0_linear_67_21)'
                        />
                        <path
                            d='M89.6444 10.4H89.1111V13.6H89.6444V10.4Z'
                            fill='url(#paint1_linear_67_21)'
                        />
                    </g>
                </g>
                <g clip-path='url(#clip1_67_21)'>
                    <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M28 9.99998C30.2092 9.99998 32 11.7909 32 14C32 16.2091 30.2092 18 28 18C25.7909 18 24 16.2091 24 14C24 11.7909 25.7909 9.99998 28 9.99998Z'
                        fill='#CC499C'
                    />
                    <path
                        d='M27.205 15.3324C27.2632 15.5477 27.2568 15.7484 27.1967 15.9302C27.1901 15.9504 27.1827 15.9704 27.1747 15.9902C27.1667 16.0099 27.1581 16.0293 27.1488 16.0486C27.1025 16.1448 27.0403 16.2348 26.9641 16.3179C26.7317 16.5715 26.4069 16.6673 26.2677 16.5865C26.1174 16.4994 26.1927 16.1419 26.4621 15.8571C26.752 15.5506 27.1691 15.3536 27.1691 15.3536L27.1685 15.3524C27.1805 15.3459 27.1927 15.3392 27.205 15.3324ZM30.5091 11.712C30.3279 11.0016 29.15 10.7681 28.0351 11.1642C27.3716 11.3999 26.6534 11.7698 26.1369 12.2529C25.5229 12.8272 25.4249 13.3271 25.4653 13.536C25.6077 14.2731 26.6176 14.7548 27.0327 15.1123V15.1144C26.9103 15.1747 26.0143 15.6281 25.8047 16.0917C25.5834 16.5808 25.8399 16.9317 26.0097 16.9789C26.5357 17.1253 27.0756 16.862 27.3657 16.4293C27.6457 16.0117 27.6224 15.4724 27.5007 15.2042C27.6685 15.1599 27.8642 15.1401 28.1129 15.1691C28.8145 15.2511 28.9522 15.6892 28.9259 15.8725C28.8996 16.0559 28.7524 16.1567 28.7032 16.1871C28.654 16.2176 28.639 16.2281 28.6431 16.2508C28.6491 16.2837 28.6719 16.2824 28.7138 16.2753C28.7716 16.2656 29.0823 16.1262 29.0955 15.7877C29.1125 15.358 28.7007 14.8773 27.9715 14.8899C27.6712 14.895 27.4824 14.9236 27.346 14.9744C27.3359 14.9629 27.3256 14.9514 27.315 14.9401C26.8642 14.4592 26.0309 14.119 26.0662 13.4724C26.0791 13.2373 26.1608 12.6184 27.6675 11.8676C28.9017 11.2526 29.8898 11.4218 30.0606 11.7969C30.3045 12.3328 29.5325 13.3287 28.2507 13.4724C27.7624 13.5271 27.5052 13.3379 27.4413 13.2674C27.3739 13.1932 27.3639 13.1898 27.3388 13.2038C27.2978 13.2264 27.3238 13.292 27.3388 13.331C27.377 13.4306 27.5341 13.6072 27.8018 13.6951C28.0373 13.7724 28.6107 13.8148 29.3041 13.5466C30.0807 13.2462 30.6872 12.4106 30.5091 11.712Z'
                        fill='white'
                    />
                </g>
                <g clip-path='url(#clip2_67_21)'>
                    <path
                        d='M19.2188 25H12.7812C12.3498 25 12 25.3498 12 25.7812V32.2188C12 32.6502 12.3498 33 12.7812 33H19.2188C19.6502 33 20 32.6502 20 32.2188V25.7812C20 25.3498 19.6502 25 19.2188 25Z'
                        fill='#3178C6'
                    />
                    <path
                        d='M19.2188 25H12.7812C12.3498 25 12 25.3498 12 25.7812V32.2188C12 32.6502 12.3498 33 12.7812 33H19.2188C19.6502 33 20 32.6502 20 32.2188V25.7812C20 25.3498 19.6502 25 19.2188 25Z'
                        fill='#3178C6'
                    />
                    <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M16.9522 31.366V32.1482C17.0793 32.2134 17.2297 32.2623 17.4033 32.2949C17.577 32.3275 17.76 32.3438 17.9523 32.3438C18.1398 32.3438 18.3179 32.3258 18.4866 32.29C18.6554 32.2541 18.8033 32.195 18.9305 32.1128C19.0576 32.0305 19.1583 31.9229 19.2325 31.7901C19.3067 31.6573 19.3438 31.4931 19.3438 31.2976C19.3438 31.1558 19.3226 31.0315 19.2802 30.9248C19.2378 30.8181 19.1767 30.7231 19.0968 30.64C19.0169 30.5569 18.9211 30.4824 18.8094 30.4164C18.6978 30.3504 18.5718 30.288 18.4316 30.2294C18.3289 30.187 18.2368 30.1459 18.1553 30.1059C18.0738 30.066 18.0045 30.0253 17.9474 29.9837C17.8904 29.9422 17.8464 29.8982 17.8154 29.8517C17.7844 29.8053 17.7689 29.7527 17.7689 29.694C17.7689 29.6403 17.7828 29.5918 17.8105 29.5486C17.8382 29.5054 17.8773 29.4684 17.9279 29.4374C17.9784 29.4064 18.0404 29.3824 18.1137 29.3653C18.1871 29.3482 18.2686 29.3396 18.3583 29.3396C18.4235 29.3396 18.4923 29.3445 18.5649 29.3543C18.6374 29.3641 18.7104 29.3791 18.7838 29.3995C18.8571 29.4199 18.9284 29.4455 18.9977 29.4765C19.067 29.5075 19.131 29.5433 19.1897 29.5841V28.8532C19.0707 28.8076 18.9407 28.7737 18.7997 28.7517C18.6586 28.7297 18.4968 28.7188 18.3142 28.7188C18.1284 28.7188 17.9523 28.7387 17.786 28.7786C17.6198 28.8186 17.4735 28.8809 17.3471 28.9656C17.2207 29.0504 17.1209 29.1583 17.0475 29.2895C16.9742 29.4207 16.9375 29.5775 16.9375 29.76C16.9375 29.9931 17.0047 30.1919 17.1392 30.3565C17.2737 30.5211 17.4779 30.6604 17.7518 30.7745C17.8594 30.8185 17.9597 30.8616 18.0526 30.904C18.1455 30.9464 18.2258 30.9904 18.2935 31.036C18.3611 31.0816 18.4145 31.1313 18.4536 31.1851C18.4928 31.2389 18.5123 31.3 18.5123 31.3685C18.5123 31.419 18.5001 31.4658 18.4756 31.509C18.4512 31.5522 18.4141 31.5897 18.3644 31.6214C18.3147 31.6532 18.2527 31.6781 18.1785 31.696C18.1043 31.7139 18.0175 31.7229 17.9181 31.7229C17.7485 31.7229 17.5806 31.6931 17.4143 31.6337C17.2481 31.5742 17.094 31.485 16.9522 31.366ZM15.6372 29.4388H16.6406V28.7969H13.8438V29.4388H14.8423V32.2969H15.6372V29.4388Z'
                        fill='white'
                    />
                </g>
                <g clip-path='url(#clip3_67_21)'>
                    <path
                        d='M39.25 25H32.75C32.3358 25 32 25.3358 32 25.75V32.25C32 32.6642 32.3358 33 32.75 33H39.25C39.6642 33 40 32.6642 40 32.25V25.75C40 25.3358 39.6642 25 39.25 25Z'
                        fill='#F7DF1E'
                    />
                    <path
                        d='M37.374 31.2501C37.5351 31.5132 37.7448 31.7066 38.1156 31.7066C38.4271 31.7066 38.6261 31.5509 38.6261 31.3358C38.6261 31.078 38.4216 30.9867 38.0788 30.8367L37.8908 30.7561C37.3483 30.525 36.988 30.2355 36.988 29.6234C36.988 29.0596 37.4176 28.6304 38.0889 28.6304C38.5669 28.6304 38.9105 28.7967 39.1581 29.2323L38.5727 29.6081C38.4438 29.377 38.3048 29.286 38.0889 29.286C37.8687 29.286 37.7292 29.4257 37.7292 29.6081C37.7292 29.8337 37.8689 29.925 38.1914 30.0647L38.3793 30.1452C39.0181 30.4191 39.3787 30.6983 39.3787 31.3261C39.3787 32.0029 38.847 32.3737 38.133 32.3737C37.4348 32.3737 36.9838 32.041 36.7631 31.605L37.374 31.2501ZM34.7184 31.3152C34.8365 31.5247 34.9439 31.7019 35.2022 31.7019C35.4492 31.7019 35.605 31.6052 35.605 31.2295V28.6733H36.3567V31.2396C36.3567 32.0181 35.9004 32.3723 35.2342 32.3723C34.6323 32.3723 34.2837 32.0608 34.1064 31.6857L34.7184 31.3152Z'
                        fill='black'
                    />
                </g>
                <g>
                    <rect
                        x='105'
                        y='7'
                        width='8'
                        height='8'
                        rx='0.75'
                        fill='#2E0F08'
                    />
                    <path
                        d='M107.27 8H107.54V8.26719H107.788V8H108.058V8.80859H107.788V8.53906H107.542V8.80859H107.27M108.414 8.26953H108.176V8H108.923V8.26953H108.684V8.80859H108.414M109.041 8H109.323L109.497 8.28477L109.67 8H109.953V8.80859H109.683V8.40781L109.494 8.69844L109.306 8.40781V8.80859H109.041M110.086 8H110.356V8.54141H110.738V8.80859H110.086'
                        fill='white'
                    />
                    <path
                        d='M107.261 13.5195L106.874 9.17889H111.126L110.739 13.5172L108.997 14'
                        fill='#E44D26'
                    />
                    <path
                        d='M109 13.6309V9.53516H110.738L110.406 13.2383'
                        fill='#F16529'
                    />
                    <path
                        d='M107.664 10.066H109V10.5981H108.248L108.297 11.143H109V11.6739H107.809M107.833 11.941H108.367L108.405 12.3664L109 12.5258V13.0813L107.908 12.7766'
                        fill='#EBEBEB'
                    />
                    <path
                        d='M110.331 10.066H108.998V10.5981H110.282M110.234 11.143H108.998V11.675H109.654L109.592 12.3664L108.998 12.5258V13.0789L110.088 12.7766'
                        fill='white'
                    />
                </g>
                <g>
                    <rect
                        x='88'
                        y='25'
                        width='8'
                        height='8'
                        rx='0.75'
                        fill='#080f2e'
                    />
                    <path
                        d='M94.129 27.1791L93.7411 31.5174L91.9974 32L90.2585 31.5181L89.871 27.1791H94.129Z'
                        fill='#264DE4'
                    />
                    <path
                        d='M93.409 31.2412L93.7405 27.5339H92V31.6312L93.409 31.2412Z'
                        fill='#2965F1'
                    />
                    <path
                        d='M90.7593 29.1432L90.8071 29.6753H92V29.1432H90.7593Z'
                        fill='#EBEBEB'
                    />
                    <path
                        d='M92 28.0661H91.9982H90.6633L90.7118 28.5983H92V28.0661Z'
                        fill='#EBEBEB'
                    />
                    <path
                        d='M92 31.0789V30.5252L91.9977 30.5259L91.404 30.3658L91.366 29.9414H91.0776H90.8309L90.9056 30.777L91.9976 31.0796L92 31.0789Z'
                        fill='#EBEBEB'
                    />
                    <path
                        d='M90.873 26H91.5187V26.2695H91.143V26.5391H91.5187V26.8086H90.873V26Z'
                        fill='white'
                    />
                    <path
                        d='M91.6478 26H92.2935V26.2344H91.9178V26.2812H92.2935V26.8203H91.6478V26.5742H92.0235V26.5273H91.6478V26Z'
                        fill='white'
                    />
                    <path
                        d='M92.4226 26H93.0682V26.2344H92.6926V26.2812H93.0682V26.8203H92.4226V26.5742H92.7982V26.5273H92.4226V26Z'
                        fill='white'
                    />
                    <path
                        d='M92.6546 29.6753L92.5927 30.3655L91.9982 30.5257V31.0793L93.091 30.777L93.099 30.6871L93.2243 29.2861L93.2373 29.1432L93.3335 28.0661H91.9982V28.5983H92.7493L92.7008 29.1432H91.9982V29.6753H92.6546Z'
                        fill='white'
                    />
                </g>
                <g clip-path='url(#clip4_67_21)'>
                    <mask
                        id='mask1_67_21'
                        style={{ maskType: 'luminance' }}
                        maskUnits='userSpaceOnUse'
                        x='109'
                        y='25'
                        width='8'
                        height='8'
                    >
                        <path
                            d='M109 25.0098H116.99V33H109V25.0098Z'
                            fill='white'
                        />
                    </mask>
                    <g mask='url(#mask1_67_21)'>
                        <path
                            d='M116.84 28.6491L113.351 25.1607C113.303 25.1128 113.246 25.0749 113.184 25.049C113.121 25.0231 113.055 25.0098 112.987 25.0098C112.919 25.0098 112.852 25.0231 112.79 25.049C112.727 25.0749 112.671 25.1128 112.623 25.1607L111.899 25.8852L112.818 26.804C112.926 26.7673 113.042 26.7616 113.153 26.7874C113.264 26.8133 113.366 26.8698 113.446 26.9504C113.527 27.0316 113.584 27.1341 113.61 27.246C113.635 27.3579 113.629 27.4747 113.591 27.5832L114.477 28.4688C114.586 28.4311 114.703 28.4247 114.815 28.4504C114.926 28.4762 115.029 28.5329 115.11 28.6141C115.167 28.671 115.212 28.7385 115.243 28.8128C115.274 28.887 115.289 28.9667 115.289 29.0471C115.289 29.1275 115.274 29.2071 115.243 29.2814C115.212 29.3556 115.167 29.4231 115.11 29.48C114.995 29.5948 114.839 29.6593 114.677 29.6593C114.514 29.6593 114.359 29.5948 114.244 29.48C114.158 29.3944 114.1 29.2856 114.076 29.167C114.053 29.0485 114.065 28.9256 114.111 28.8139L113.285 27.9881V30.1617C113.372 30.2048 113.447 30.268 113.505 30.3462C113.563 30.4243 113.602 30.5151 113.618 30.6111C113.633 30.707 113.626 30.8054 113.596 30.8979C113.567 30.9905 113.515 31.0747 113.446 31.1435C113.389 31.2003 113.322 31.2454 113.248 31.2762C113.173 31.307 113.094 31.3228 113.013 31.3228C112.933 31.3228 112.853 31.307 112.779 31.2762C112.705 31.2454 112.637 31.2003 112.581 31.1435C112.524 31.0866 112.479 31.0191 112.448 30.9448C112.417 30.8705 112.401 30.7909 112.401 30.7105C112.401 30.6301 112.417 30.5505 112.448 30.4762C112.479 30.4019 112.524 30.3344 112.581 30.2775C112.638 30.2201 112.706 30.1746 112.781 30.1437V27.9501C112.706 27.9193 112.638 27.8741 112.581 27.8171C112.524 27.76 112.479 27.6922 112.448 27.6176C112.417 27.543 112.401 27.463 112.401 27.3823C112.401 27.3015 112.418 27.2216 112.449 27.1471L111.543 26.241L109.15 28.6328C109.054 28.7293 109 28.8602 109 28.9967C109 29.1332 109.054 29.2641 109.15 29.3607L112.639 32.8495C112.736 32.9459 112.867 33 113.003 33C113.14 33 113.271 32.9459 113.367 32.8495L116.84 29.377C116.936 29.2804 116.99 29.1495 116.99 29.0131C116.99 28.8766 116.936 28.7457 116.84 28.6491Z'
                            fill='#F03C2E'
                        />
                    </g>
                </g>
                <defs>
                    <linearGradient
                        id='paint0_linear_67_21'
                        x1='88.8445'
                        y1='13.1778'
                        x2='90.4222'
                        y2='15.1334'
                        gradientUnits='userSpaceOnUse'
                    >
                        <stop stop-color='white' />
                        <stop offset='1' stop-color='white' stop-opacity='0' />
                    </linearGradient>
                    <linearGradient
                        id='paint1_linear_67_21'
                        x1='89.3778'
                        y1='10.4'
                        x2='89.3688'
                        y2='12.75'
                        gradientUnits='userSpaceOnUse'
                    >
                        <stop stop-color='white' />
                        <stop offset='1' stop-color='white' stop-opacity='0' />
                    </linearGradient>
                    <clipPath id='clip0_67_21'>
                        <rect
                            width='8'
                            height='8'
                            fill='white'
                            transform='translate(84 8)'
                        />
                    </clipPath>
                    <clipPath id='clip1_67_21'>
                        <rect
                            width='8'
                            height='8'
                            fill='white'
                            transform='translate(24 10)'
                        />
                    </clipPath>
                    <clipPath id='clip2_67_21'>
                        <rect
                            width='8'
                            height='8'
                            fill='white'
                            transform='translate(12 25)'
                        />
                    </clipPath>
                    <clipPath id='clip3_67_21'>
                        <rect
                            width='8'
                            height='8'
                            fill='white'
                            transform='translate(32 25)'
                        />
                    </clipPath>
                    <clipPath id='clip4_67_21'>
                        <rect
                            width='8'
                            height='8'
                            fill='white'
                            transform='translate(109 25)'
                        />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export default LogoFloat;
