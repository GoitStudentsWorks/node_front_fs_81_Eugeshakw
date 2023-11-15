import { HeaderStyle } from './HederStyle';

const Header = ({ children }) => {
  return (
    <HeaderStyle>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="48"
          viewBox="0 0 40 48"
          fill="none"
        >
          <g clip-path="url(#clip0_115_1994)">
            <path
              d="M15.8199 7.31807C16.4933 6.78833 17.3441 7.93599 17.4338 8.99549C17.5235 10.055 16.5821 12.4385 13.9374 13.0564C11.2927 13.6743 10.9788 15.3075 11.0685 16.2786C11.1582 17.2498 10.71 18.3091 9.76852 18.0886C8.82708 17.8682 8.73754 16.4112 9.58926 15.0421C10.441 13.6729 12.5921 12.4378 12.9512 11.6872C13.3103 10.9367 13.0409 10.0541 13.758 9.74513C14.475 9.43617 15.4166 10.2306 15.3269 10.9817C15.3269 10.9817 16.0441 10.2756 15.9544 9.2161C15.8956 8.52058 15.482 7.58438 15.8199 7.31807Z"
              fill="#9EBBFF"
            />
            <path
              d="M33.2122 13.7634C33.4611 13.0555 35.2294 13.4544 35.6326 14.4254C36.0359 15.3964 35.9016 16.1469 36.3049 16.8089C36.7082 17.4709 35.5879 18.5745 34.758 18.442C33.9281 18.3096 34.2424 16.8089 34.2424 16.1467C34.2424 15.4845 32.8089 14.9103 33.2122 13.7634Z"
              fill="#9EBBFF"
            />
            <path
              d="M27.6085 5.42756C28.2222 4.8876 29.536 5.81734 29.8947 6.5677C30.2534 7.31806 29.9395 9.30443 28.8411 9.26034C27.7428 9.21626 28.1798 7.66322 27.7878 7.33974C27.0937 6.76627 27.116 5.86143 27.6085 5.42756Z"
              fill="#9EBBFF"
            />
            <path
              d="M20.0418 0.82937C20.4769 1.50284 20.1532 2.41843 19.0476 2.62453C17.942 2.83062 17.7327 1.91754 17.1348 2.12417C16.537 2.3308 15.8791 2.47721 15.6108 2.00643C15.3426 1.53564 15.6407 0.82937 16.836 0.82937C18.0313 0.82937 19.243 -0.406647 20.0418 0.82937Z"
              fill="#9EBBFF"
            />
            <path
              d="M13.0855 7.26376C13.6054 7.26376 14.0268 6.81669 14.0268 6.26519C14.0268 5.7137 13.6054 5.26663 13.0855 5.26663C12.5657 5.26663 12.1443 5.7137 12.1443 6.26519C12.1443 6.81669 12.5657 7.26376 13.0855 7.26376Z"
              fill="#9EBBFF"
            />
            <path
              d="M9.00275 10.5699C8.66843 10.4039 7.57211 12.129 8.31919 12.3354C9.06626 12.5419 9.53689 10.8345 9.00275 10.5699Z"
              fill="#9EBBFF"
            />
            <path
              d="M6.07788 15.6901C6.07788 15.6901 7.54218 16.4847 7.00422 18.1179C6.46625 19.751 5.30096 19.5451 4.94225 19.0447C4.58355 18.5444 4.58373 17.8677 5.18139 17.396C5.77905 16.9243 6.07788 15.6901 6.07788 15.6901Z"
              fill="#9EBBFF"
            />
            <path
              d="M37.1569 24.4888C37.1569 24.4888 37.6052 25.1519 37.3812 26.3427C37.1571 27.5336 36.7988 29.8732 38.0534 30.5363C39.3081 31.1994 39.8016 28.859 39.3092 28.1528C38.8167 27.4465 39.5776 25.0178 37.1569 24.4888Z"
              fill="#9EBBFF"
            />
            <path
              d="M38.7483 35.1268C39.2806 35.1268 39.7121 34.6129 39.7121 33.9791C39.7121 33.3452 39.2806 32.8314 38.7483 32.8314C38.2159 32.8314 37.7844 33.3452 37.7844 33.9791C37.7844 34.6129 38.2159 35.1268 38.7483 35.1268Z"
              fill="#9EBBFF"
            />
            <path
              d="M0.937892 35.5682C1.76887 35.144 2.46189 35.833 2.55161 37.1131C2.64133 38.3932 3.85158 39.4966 3.22389 40.1588C2.5962 40.821 1.86678 38.0843 1.29642 37.8303C0.421401 37.4407 -0.272533 36.1861 0.937892 35.5682Z"
              fill="#9EBBFF"
            />
            <path
              d="M36.235 36.8481C35.4525 37.643 36.494 38.4656 34.6466 40.5558C33.8773 41.4253 35.2144 44.0287 31.5087 43.9989C31.5087 43.9989 29.3568 45.9407 27.205 46.2065C25.0531 46.4722 24.157 46.1179 22.095 47.2659C20.0331 48.414 15.4607 46.471 13.5778 45.6324C11.6949 44.7939 10.9784 44.7052 9.36508 44.7052C7.75172 44.7052 8.37905 42.233 7.21321 41.1735C6.04737 40.114 4.70282 39.6733 4.61274 38.7025C4.52265 37.7318 3.62689 37.2898 3.71679 35.7886C3.8067 34.2873 2.28215 33.8466 2.10344 31.9923C1.92472 30.1381 2.90948 29.7857 2.55095 28.7262C2.19243 27.6667 2.10344 26.7845 2.64086 25.725C2.70476 25.5966 2.779 25.4735 2.86289 25.3569C3.32351 24.7103 3.76557 24.7605 4.07531 23.6945C4.43402 22.458 3.44799 21.9288 4.52392 21.3994C5.59986 20.87 5.95856 22.458 5.33015 24.0476C4.70173 25.6372 3.89514 27.1375 4.9718 27.4022C6.04847 27.6669 5.77912 24.4008 7.21357 22.8995C8.64803 21.3983 8.02089 21.0463 9.90286 19.5451C11.7848 18.0438 11.9648 18.6626 12.5921 17.0729C13.2195 15.4831 14.9912 13.8069 16.7962 13.0119C18.6011 12.217 19.4074 11.865 19.1377 10.5399C18.8679 9.21483 20.3728 9.21573 20.4282 7.80301C20.4835 6.39029 19.227 5.4195 18.1516 5.77273C17.0762 6.12595 15.9998 6.12577 16.3585 4.97882C16.7172 3.83187 18.9751 3.91933 20.0423 4.44854C21.1095 4.97775 22.0068 3.65481 23.4414 4.97882C24.876 6.30283 26.758 6.74459 26.4894 9.83544C26.2208 12.9263 25.952 13.9838 27.1167 14.161C28.2815 14.3383 27.2965 12.7483 27.2965 11.5129C27.2965 10.2774 29.3585 10.3646 29.8959 11.3356C30.4333 12.3066 29.7172 13.9838 30.2546 14.6026C30.792 15.2214 31.7791 15.1318 32.0478 16.0143C32.3164 16.8967 31.869 20.5169 33.1237 21.3117C34.3783 22.1065 34.1097 19.37 35.1857 20.2085C36.2616 21.047 36.5302 22.5474 35.9029 24.0485C35.4843 25.052 35.4414 27.5567 35.6845 29.7131C35.8026 30.78 35.991 31.7628 36.237 32.435C36.9779 34.4644 37.0176 36.0531 36.235 36.8481Z"
              fill="#9EBBFF"
            />
            <path
              d="M21.3741 14.3469C23.7282 13.6148 25.7039 17.665 24.8848 19.4053C24.0656 21.1456 23.7153 26.5139 26.7575 25.8463C29.7996 25.1788 27.5764 20.0159 29.2143 20.1198C30.8523 20.2238 30.1505 24.9481 31.2037 26.446C32.2569 27.9438 35.8905 38.1997 30.0366 41.7719C24.1826 45.3441 15.8987 45.2289 12.7268 42.5783C11.4507 41.512 10.5271 40.3966 9.84662 39.3151C9.52322 38.8013 9.32886 38.394 9.19637 38.0368C8.91119 37.269 8.96105 36.9984 8.6735 36.228C8.48523 35.7318 8.24292 35.2571 7.95082 34.8122C7.3184 33.8547 7.03158 33.9669 6.44029 33.1332C6.24283 32.8549 5.61605 31.9146 5.55818 30.6481C5.54307 30.3164 5.50067 29.3897 5.90123 29.2245C6.35439 29.0377 6.94095 30.0044 7.54279 29.8037C7.85837 29.6983 7.99559 29.3332 8.08185 29.1047C8.33664 28.4277 8.08185 28.009 7.95937 27.0056C7.8651 26.2297 7.7519 25.2967 8.21416 24.5094C8.28987 24.3804 8.50807 23.9589 9.23204 23.5657C11.7786 22.1829 14.0655 23.4505 15.7306 20.9153C17.3956 18.3802 17.4278 18.2137 18.9915 17.548C20.5552 16.8822 19.1508 15.0383 21.3741 14.3469Z"
              fill="#C6D7FF"
            />
            <path
              d="M20.4393 48C18.7776 48 16.4563 47.3288 13.4206 45.9767C11.5707 45.1523 10.9144 45.0833 9.36514 45.0833C8.13997 45.0833 7.87863 43.9828 7.6688 43.0986C7.52047 42.4738 7.36705 41.8278 6.95266 41.4514C6.56702 41.1009 6.16391 40.8242 5.77408 40.5554C4.98606 40.0131 4.3056 39.5448 4.2308 38.736C4.20131 38.4154 4.05317 38.1507 3.88156 37.8441C3.61093 37.3602 3.27407 36.7588 3.3334 35.7663C3.3698 35.15 3.07388 34.7499 2.69861 34.243C2.28695 33.6875 1.82032 33.0569 1.72077 32.0284C1.61886 30.9741 1.86254 30.3617 2.05837 29.869C2.21852 29.4667 2.31516 29.2239 2.18703 28.8454C1.86291 27.8881 1.65198 26.8268 2.2975 25.5553C2.5694 25.02 2.85603 24.7687 3.08643 24.5667C3.34832 24.3373 3.53741 24.1725 3.70521 23.59C3.82969 23.1608 3.7598 22.8429 3.69119 22.5356C3.58873 22.0736 3.46134 21.4985 4.35091 21.0605C4.79806 20.8402 5.23557 20.8766 5.55205 21.1598C6.12114 21.6705 6.17829 22.9424 5.688 24.1841C5.60192 24.4019 5.51256 24.618 5.42502 24.8293C5.0847 25.6537 4.69888 26.5855 4.86668 26.9117C4.87978 26.9372 4.91054 26.9967 5.06468 27.0347C5.07385 27.0375 5.08346 27.0388 5.09307 27.0384C5.26633 26.9784 5.47525 26.154 5.60046 25.6614C5.8507 24.6757 6.16209 23.447 6.93337 22.64C7.51884 22.0273 7.73723 21.623 7.94815 21.232C8.24862 20.6764 8.53216 20.1503 9.66087 19.2506C10.3796 18.6772 10.8578 18.4037 11.2078 18.2035C11.7436 17.8965 11.8877 17.8141 12.2348 16.9354C12.8899 15.275 14.7013 13.5196 16.639 12.6664L16.6473 12.6628C18.526 11.8352 18.9619 11.6023 18.7612 10.6137C18.581 9.72665 19.0524 9.26608 19.4316 8.89618C19.7492 8.58615 20.0235 8.31841 20.044 7.78848C20.0664 7.20909 19.8184 6.67003 19.3803 6.34637C19.0354 6.09171 18.6318 6.01322 18.2727 6.13132C17.5839 6.35766 16.6606 6.52917 16.1751 6.06214C15.9798 5.87415 15.7893 5.51412 15.9914 4.86717C16.1212 4.45193 16.441 4.12702 16.9161 3.92756C17.8964 3.51538 19.3912 3.70265 20.2149 4.1109C20.5103 4.25749 20.7895 4.20588 21.2204 4.10964C21.8809 3.96215 22.7026 3.77864 23.7033 4.70247C24.0073 4.98294 24.3427 5.22953 24.667 5.46788C25.8625 6.34601 27.0987 7.25497 26.8714 9.86607C26.8378 10.2525 26.8041 10.6073 26.7733 10.9327C26.5415 13.3768 26.5866 13.6969 27.175 13.786C27.2163 13.793 27.2583 13.7958 27.3002 13.7946C27.3253 13.6352 27.2183 13.2076 27.1457 12.9164C27.0365 12.4782 26.912 11.9817 26.912 11.5103C26.912 10.8974 27.2942 10.4351 27.9332 10.275C28.6988 10.0827 29.7957 10.3646 30.2326 11.1532C30.5584 11.7413 30.5044 12.4879 30.4565 13.1467C30.4217 13.6248 30.3824 14.167 30.5458 14.3546C30.7127 14.5465 30.9624 14.6592 31.2269 14.7788C31.6636 14.9759 32.2071 15.2221 32.4151 15.9044C32.5124 16.2245 32.5274 16.7587 32.5461 17.435C32.5807 18.6755 32.6329 20.5503 33.3307 20.992C33.4581 21.0728 33.5309 21.0832 33.5542 21.0766C33.6568 21.047 33.8026 20.7341 33.8898 20.547C34.0568 20.1886 34.2465 19.7815 34.6518 19.6858C34.8978 19.6275 35.1577 19.7037 35.4234 19.9101C36.6245 20.847 36.9521 22.5266 36.2573 24.1906C35.6809 25.5691 35.8807 30.347 36.5969 32.3054C37.4198 34.5558 37.3902 36.2174 36.5115 37.1104C36.3079 37.3174 36.2857 37.5047 36.2551 37.9072C36.206 38.5559 36.1384 39.4441 34.9368 40.8034C34.7866 40.9735 34.7508 41.3391 34.7127 41.7262C34.6099 42.7726 34.4554 44.3446 31.6553 44.376C31.1693 44.79 29.2395 46.336 27.254 46.5803C26.6434 46.6554 26.1286 46.6821 25.6741 46.7057C24.5261 46.7652 23.6966 46.8082 22.2851 47.5939C21.7993 47.8645 21.186 48 20.4393 48ZM4.91436 21.6736C4.8634 21.6736 4.79315 21.6891 4.69597 21.737C4.34036 21.9121 4.35018 21.9558 4.443 22.3748C4.51871 22.7171 4.62262 23.1859 4.445 23.7981C4.21515 24.5908 3.90121 24.8658 3.59765 25.132C3.38836 25.3153 3.19072 25.4884 2.98488 25.8938C2.49169 26.8651 2.59287 27.652 2.91609 28.6067C3.13211 29.245 2.95012 29.7026 2.77396 30.145C2.59924 30.5845 2.40124 31.0823 2.48586 31.9569C2.56521 32.7793 2.94885 33.2972 3.31975 33.7981C3.72959 34.3516 4.15345 34.924 4.10049 35.8111C4.05427 36.5855 4.29741 37.0199 4.55547 37.4796C4.75075 37.8287 4.95276 38.1896 4.99698 38.6679C5.0392 39.1269 5.55824 39.4839 6.21541 39.936C6.60706 40.2049 7.05094 40.5109 7.47479 40.8963C8.0619 41.4299 8.25062 42.2251 8.41733 42.9265C8.65392 43.9219 8.80551 44.3272 9.36605 44.3272C10.9741 44.3272 11.7683 44.41 13.738 45.2878C18.8483 47.5638 21.0013 47.441 21.9078 46.9366C23.4764 46.0634 24.4286 46.0142 25.6341 45.9518C26.0756 45.9289 26.5759 45.903 27.1592 45.8312C29.166 45.584 31.23 43.7391 31.2505 43.7206C31.3213 43.6567 31.4139 43.6212 31.51 43.6212H31.5131C33.7538 43.6391 33.8444 42.7192 33.9491 41.6543C33.9991 41.1434 34.0466 40.6606 34.3582 40.3081C35.3925 39.1382 35.4465 38.4249 35.49 37.8518C35.522 37.4319 35.555 36.9977 35.9606 36.5853C36.6025 35.9328 36.5714 34.4667 35.8751 32.5624C35.0834 30.397 34.8969 25.4606 35.5475 23.9037C36.1091 22.5596 35.8735 21.2259 34.9469 20.5037C34.9112 20.4739 34.8715 20.449 34.829 20.4297C34.758 20.4978 34.6527 20.7237 34.5877 20.8632C34.4101 21.2445 34.2088 21.6766 33.77 21.8031C33.5059 21.8791 33.2186 21.821 32.9157 21.6288C31.8768 20.9711 31.8225 19.0225 31.7788 17.4567C31.763 16.8858 31.7481 16.3456 31.6798 16.1225C31.5766 15.784 31.3313 15.6589 30.9067 15.4668C30.5941 15.3254 30.2396 15.1652 29.9629 14.8474C29.5942 14.4238 29.6412 13.7777 29.6909 13.0937C29.7331 12.5116 29.7768 11.9094 29.5589 11.5166C29.3174 11.0806 28.6015 10.8894 28.123 11.0094C27.6798 11.1207 27.6798 11.4154 27.6798 11.5121C27.6798 11.8917 27.7921 12.341 27.8913 12.7374C28.0566 13.398 28.1992 13.9684 27.87 14.3227C27.6893 14.5173 27.4161 14.5883 27.0583 14.5342C25.6809 14.3256 25.7904 13.1686 26.009 10.8634C26.0397 10.5408 26.0732 10.1869 26.1067 9.80245C26.2974 7.61035 25.3755 6.93275 24.208 6.07487C23.8666 5.82397 23.5137 5.56465 23.1785 5.25516C22.4751 4.6057 21.9955 4.71251 21.3904 4.84799C20.9385 4.94889 20.4258 5.06304 19.8697 4.78724C19.2107 4.46036 17.9588 4.31269 17.2173 4.62416C16.9529 4.73509 16.7875 4.89208 16.726 5.0901C16.6601 5.30121 16.6548 5.46645 16.7123 5.522C16.8139 5.61967 17.2485 5.67164 18.0307 5.41448C18.6321 5.21734 19.2924 5.33652 19.8418 5.74243C20.4814 6.21483 20.8439 6.99081 20.8119 7.81805C20.7798 8.64529 20.3323 9.08274 19.9729 9.43364C19.5965 9.8012 19.4198 9.99851 19.5148 10.4663C19.8424 12.0843 18.7586 12.563 16.9615 13.3535L16.9531 13.3573C15.2136 14.1234 13.5307 15.7438 12.9515 17.2103C12.5241 18.2924 12.2439 18.4863 11.5951 18.8578C11.2675 19.0456 10.8185 19.3028 10.1457 19.839C9.13856 20.6418 8.90197 21.0802 8.62789 21.5877C8.40404 22.0024 8.15016 22.4727 7.49427 23.159C6.86021 23.8221 6.57557 24.944 6.34772 25.8454C6.21378 26.3734 6.09821 26.8293 5.93078 27.1687C5.60192 27.835 5.13184 27.8318 4.88105 27.7691C4.47266 27.6685 4.27684 27.4338 4.18457 27.2545C3.85826 26.6214 4.25609 25.6596 4.71653 24.5452C4.80261 24.3372 4.89052 24.1246 4.97496 23.9106C5.397 22.8422 5.2798 21.9366 5.03738 21.7193C5.0212 21.7037 5.00191 21.6916 4.98073 21.6837C4.95956 21.6759 4.93696 21.6724 4.91436 21.6736Z"
              fill="#407BFF"
            />
            <path
              d="M10.0136 18.4016C9.90858 18.4011 9.80395 18.3886 9.70186 18.3643C9.31768 18.2747 9.01703 18.0134 8.85524 17.6295C8.55277 16.9127 8.74004 15.8643 9.3437 14.8942C9.83508 14.1057 10.6997 13.3888 11.4632 12.7557C12.0248 12.2897 12.5551 11.8505 12.6905 11.567C12.8075 11.3222 12.8498 11.0464 12.8907 10.7797C12.9653 10.293 13.0498 9.74119 13.6427 9.48582C14.0484 9.31091 14.5405 9.38868 14.959 9.69406C15.1703 9.84732 15.343 10.0463 15.4639 10.2756C15.5935 10.0104 15.7028 9.65409 15.6677 9.2394C15.6495 9.02686 15.5926 8.77686 15.5374 8.53528C15.4022 7.94389 15.2746 7.38457 15.6402 7.0964C15.9072 6.88618 16.2275 6.84371 16.542 6.97704C17.1295 7.22597 17.6472 8.10213 17.7208 8.97148C17.8187 10.1283 16.8006 12.6785 14.004 13.3319C11.5183 13.9127 11.2775 15.4107 11.3553 16.253C11.4262 17.0211 11.1924 17.7559 10.7598 18.125C10.5541 18.3045 10.2884 18.4029 10.0136 18.4016ZM14.097 9.96072C14.0201 9.96009 13.9439 9.97516 13.8733 10.005C13.585 10.1292 13.5333 10.3851 13.46 10.8641C13.4152 11.1568 13.3644 11.4883 13.2116 11.8082C13.0225 12.2043 12.498 12.6394 11.8341 13.1899C11.1039 13.7953 10.2764 14.4813 9.83471 15.191C9.34097 15.9842 9.16135 16.877 9.38702 17.4132C9.47801 17.6304 9.62943 17.7652 9.83526 17.8134C10.0522 17.8643 10.2313 17.8263 10.3825 17.6973C10.6752 17.4476 10.8357 16.8881 10.7818 16.305C10.7055 15.4806 10.8546 13.4862 13.8707 12.7813C16.3311 12.2064 17.2307 10.0122 17.1466 9.01969C17.0862 8.30571 16.6592 7.64514 16.314 7.4989C16.1948 7.44837 16.1009 7.46055 16.0002 7.53977C15.9211 7.63331 16.0366 8.13958 16.0989 8.4118C16.1584 8.67238 16.2199 8.94173 16.2412 9.19334C16.3407 10.3702 15.5634 11.1503 15.5303 11.1826C15.4881 11.2242 15.4337 11.2518 15.3748 11.2616C15.3159 11.2714 15.2553 11.2629 15.2015 11.2373C15.1477 11.2117 15.1033 11.1703 15.0745 11.1187C15.0457 11.0672 15.0339 11.0081 15.0408 10.9496C15.0728 10.6808 14.9021 10.3598 14.6158 10.1509C14.446 10.026 14.2637 9.96126 14.097 9.96126V9.96072Z"
              fill="#407BFF"
            />
            <path
              d="M34.9044 18.7363C34.8403 18.7364 34.7762 18.7314 34.7128 18.7214C33.7846 18.5732 33.8729 17.3804 33.9313 16.5912C33.9437 16.4234 33.9554 16.2648 33.9554 16.1462C33.9554 15.994 33.7564 15.7718 33.5639 15.5568C33.1741 15.1211 32.6399 14.5243 32.9402 13.6698C33.0587 13.3333 33.3934 13.1322 33.8587 13.1204C34.5934 13.1025 35.5816 13.5525 35.8994 14.3175C36.1032 14.8078 36.1775 15.2426 36.243 15.6258C36.3103 16.02 36.3684 16.3605 36.5524 16.662C36.758 16.9994 36.7103 17.4326 36.4219 17.8526C36.1041 18.3154 35.5025 18.7363 34.9044 18.7363ZM33.9073 13.6867H33.8745C33.7741 13.6896 33.535 13.7114 33.4844 13.855C33.3071 14.3593 33.5719 14.7077 33.9959 15.1811C34.2713 15.4887 34.5312 15.7792 34.5312 16.1455C34.5312 16.2847 34.5188 16.4532 34.5055 16.6317C34.4624 17.2148 34.3963 18.0958 34.8049 18.1611C35.1567 18.2166 35.6684 17.9361 35.9451 17.5338C36.0195 17.4263 36.1798 17.1521 36.0584 16.953C35.8186 16.5587 35.7491 16.1512 35.6752 15.7189C35.6117 15.3473 35.546 14.9629 35.3658 14.5308C35.1565 14.0267 34.4382 13.6867 33.9073 13.6867Z"
              fill="#407BFF"
            />
            <path
              d="M28.8789 9.54459C28.8627 9.54459 28.8465 9.54459 28.8301 9.54351C27.8837 9.50552 27.7782 8.61161 27.7147 8.07882C27.6939 7.90445 27.6601 7.61287 27.6025 7.55624C27.2045 7.22775 26.9714 6.76449 26.9636 6.286C26.9568 5.86575 27.1223 5.47578 27.4173 5.21611C27.6539 5.0084 27.9729 4.93779 28.3405 5.01145C29.0867 5.16109 29.8822 5.87453 30.1557 6.44693C30.4347 7.03097 30.3806 8.22774 29.8904 8.95588C29.6299 9.34154 29.2811 9.54459 28.8789 9.54459ZM28.069 5.55016C27.958 5.55016 27.8688 5.57973 27.8009 5.63976C27.6306 5.78958 27.5352 6.0222 27.5394 6.27775C27.5445 6.59621 27.6986 6.89639 27.9733 7.12327C28.2031 7.31287 28.2437 7.65319 28.2865 8.01359C28.3631 8.65642 28.4439 8.96125 28.8536 8.97774C29.071 8.9867 29.2527 8.87667 29.4105 8.64244C29.7744 8.10122 29.8387 7.11592 29.6347 6.68904C29.4254 6.25123 28.7793 5.67847 28.2257 5.56772C28.1742 5.55671 28.1217 5.55083 28.069 5.55016Z"
              fill="#407BFF"
            />
            <path
              d="M18.7311 2.93905C18.2204 2.93905 17.8978 2.71809 17.6499 2.54855C17.4159 2.38852 17.3418 2.35321 17.23 2.39192C16.7984 2.54067 15.785 2.88977 15.3606 2.14551C15.2754 1.99922 15.231 1.83334 15.2319 1.6647C15.2329 1.49606 15.2791 1.33067 15.3659 1.1853C15.5062 0.946409 15.8866 0.545873 16.836 0.545873C17.2 0.545873 17.5897 0.406805 17.9671 0.272397C18.7118 0.00716532 19.6385 -0.322583 20.2848 0.677235C20.5461 1.08153 20.5894 1.55537 20.404 1.97759C20.1961 2.45017 19.7213 2.78744 19.1011 2.90303C18.9792 2.92642 18.8553 2.93848 18.7311 2.93905ZM17.3068 1.81003C17.5798 1.81003 17.796 1.95805 17.9784 2.08279C18.2456 2.26558 18.4978 2.43834 18.9941 2.34587C19.43 2.26468 19.743 2.05393 19.8755 1.75232C19.9847 1.50573 19.9561 1.22472 19.7989 0.981714C19.419 0.392289 18.9761 0.516124 18.1633 0.806446C17.7393 0.95752 17.3005 1.11361 16.8364 1.11361C16.3528 1.11361 15.998 1.24426 15.8626 1.47203C15.8266 1.53202 15.8076 1.6004 15.8076 1.67006C15.8076 1.73972 15.8266 1.80811 15.8626 1.86809C15.9929 2.09623 16.3561 2.093 17.0406 1.85716C17.126 1.82673 17.216 1.8108 17.3068 1.81003Z"
              fill="#407BFF"
            />
            <path
              d="M13.0856 7.54727C12.4076 7.54727 11.8562 6.97219 11.8562 6.2652C11.8562 5.55821 12.4076 4.98312 13.0856 4.98312C13.7635 4.98312 14.3147 5.55821 14.3147 6.2652C14.3147 6.97219 13.7633 7.54727 13.0856 7.54727ZM13.0856 5.55015C12.7252 5.55015 12.432 5.87093 12.432 6.2652C12.432 6.65946 12.7252 6.98025 13.0856 6.98025C13.4459 6.98025 13.7389 6.65946 13.7389 6.2652C13.7389 5.87093 13.4459 5.55015 13.0856 5.55015Z"
              fill="#407BFF"
            />
            <path
              d="M8.44796 12.6371C8.37816 12.6368 8.30872 12.6272 8.24158 12.6084C8.00154 12.5422 7.83702 12.3641 7.79024 12.1198C7.68414 11.5654 8.20882 10.6996 8.60193 10.4087C8.83852 10.2329 9.02051 10.2614 9.13225 10.3166C9.59214 10.5448 9.60324 11.2473 9.37648 11.8236C9.17283 12.3419 8.82832 12.6371 8.44796 12.6371ZM8.91422 10.8847C8.70293 11.0629 8.3344 11.6433 8.35205 11.9799C8.35587 12.0516 8.37025 12.0552 8.39682 12.0625C8.56316 12.1087 8.74261 11.8645 8.83961 11.6188C8.96846 11.2912 8.95827 11.0075 8.91422 10.8847Z"
              fill="#407BFF"
            />
            <path
              d="M5.69405 19.6885C5.30259 19.6885 4.92168 19.5078 4.70711 19.2083C4.22138 18.5307 4.34313 17.6947 5.00157 17.1756C5.42689 16.8404 5.72062 15.9421 5.79779 15.6243C5.80814 15.5819 5.82828 15.5424 5.85663 15.509C5.88499 15.4755 5.9208 15.4489 5.96129 15.4312C6.00178 15.4136 6.04585 15.4054 6.09009 15.4072C6.13433 15.4091 6.17754 15.4209 6.21637 15.4419C6.79492 15.7557 7.76129 16.7374 7.27774 18.2053C6.89792 19.3587 6.23821 19.6211 5.87877 19.6748C5.81764 19.684 5.75589 19.6885 5.69405 19.6885ZM6.23766 16.158C6.08934 16.5937 5.80088 17.2707 5.36119 17.6179C4.84743 18.0227 4.94115 18.5512 5.17756 18.8809C5.27875 19.0221 5.51479 19.1553 5.79287 19.1139C6.1867 19.0551 6.51956 18.6704 6.73031 18.0302C7.04352 17.0806 6.57726 16.4621 6.23766 16.1584V16.158Z"
              fill="#407BFF"
            />
            <path
              d="M38.4782 30.9357C38.2962 30.9357 38.1075 30.8863 37.9175 30.7861C36.5599 30.0692 36.7997 27.8777 37.0986 26.2911C37.296 25.2418 36.9218 24.6517 36.918 24.6461C36.8862 24.5991 36.8693 24.5437 36.8697 24.4871C36.87 24.4305 36.8876 24.3753 36.92 24.3286C36.9525 24.282 36.9984 24.2459 37.0519 24.2252C37.1053 24.2044 37.1639 24.1998 37.2199 24.2121C39.1252 24.6289 39.2739 26.1366 39.3722 27.1345C39.4086 27.4985 39.4421 27.8424 39.5465 27.9918C39.9706 28.5993 39.8144 29.9504 39.2479 30.5735C39.0293 30.8133 38.7634 30.9357 38.4782 30.9357ZM37.6434 24.9461C37.7297 25.294 37.7794 25.7825 37.6642 26.3945C37.2538 28.5766 37.4305 29.8861 38.1894 30.2863C38.4442 30.4212 38.6388 30.3938 38.8184 30.1956C39.2293 29.7434 39.3214 28.6723 39.0713 28.3139C38.8828 28.0436 38.8437 27.6479 38.7984 27.1899C38.7152 26.344 38.6222 25.4011 37.6434 24.9461Z"
              fill="#407BFF"
            />
            <path
              d="M38.7484 35.4103C38.0583 35.4103 37.4968 34.7683 37.4968 33.9791C37.4968 33.1898 38.0583 32.5479 38.7484 32.5479C39.4385 32.5479 40.0001 33.19 40.0001 33.9791C40.0001 34.7682 39.4381 35.4103 38.7484 35.4103ZM38.7484 33.1149C38.3757 33.1149 38.0726 33.5026 38.0726 33.9791C38.0726 34.4556 38.3757 34.8432 38.7484 34.8432C39.1211 34.8432 39.4243 34.4556 39.4243 33.9791C39.4243 33.5026 39.1211 33.1149 38.7484 33.1149Z"
              fill="#407BFF"
            />
            <path
              d="M3.01989 40.5454C2.99443 40.5453 2.96901 40.5435 2.94381 40.54C2.48884 40.4746 2.16525 39.8339 1.79072 39.0923C1.61455 38.7432 1.31972 38.1594 1.1774 38.0888C0.512772 37.7925 0.0186651 37.1296 0.000465975 36.5126C-0.0131834 36.0131 0.273453 35.5882 0.804686 35.3165C1.20106 35.114 1.61036 35.1081 1.95669 35.2997C2.45644 35.5762 2.77784 36.23 2.83826 37.0936C2.87265 37.5852 3.09305 38.0549 3.30634 38.5094C3.61154 39.1597 3.92711 39.8321 3.43373 40.3524C3.2896 40.5051 3.13873 40.5454 3.01989 40.5454ZM1.41527 35.7268C1.30716 35.7268 1.19221 35.7578 1.07039 35.8198C0.735165 35.9911 0.569007 36.2189 0.576469 36.4972C0.587388 36.8954 0.955739 37.3674 1.41509 37.5725C1.72338 37.7097 1.95451 38.1438 2.30684 38.8404C2.49066 39.2042 2.82625 39.869 3.00951 39.9707L3.01406 39.9658C3.23245 39.7361 3.06866 39.3531 2.78475 38.7472C2.56054 38.2696 2.30666 37.7284 2.26499 37.1328C2.21876 36.4732 1.99855 35.9728 1.67588 35.7943C1.59649 35.7498 1.50664 35.7265 1.41527 35.7268Z"
              fill="#407BFF"
            />
            <path
              d="M22.771 32.5004C23.0011 33.6277 22.2664 34.814 21.203 35.2603C19.7145 35.9275 17.8473 35.1422 17.3976 33.5787C17.294 33.2218 17.2722 32.8477 17.343 32.5001C17.3507 32.4628 17.3712 32.4293 17.4009 32.4052C17.4307 32.381 17.468 32.3675 17.5066 32.3671C17.5452 32.3667 17.5827 32.3793 17.613 32.4028C17.6433 32.4264 17.6645 32.4594 17.6731 32.4965C17.917 33.6434 18.8852 34.5013 20.041 34.4895C21.1888 34.4807 22.1297 33.6343 22.377 32.5003C22.4182 32.2909 22.7301 32.2926 22.7703 32.5003L22.771 32.5004Z"
              fill="#407BFF"
            />
            <g opacity="0.5">
              <path
                d="M9.88875 34.2256C10.9263 34.0301 11.5616 32.8121 11.3077 31.5051C11.0537 30.1981 10.0068 29.297 8.96924 29.4924C7.93168 29.6879 7.29642 30.9059 7.55033 32.2129C7.80425 33.5199 8.8512 34.421 9.88875 34.2256Z"
                fill="white"
              />
            </g>
            <g opacity="0.5">
              <path
                d="M9.94532 28.1985C11.0178 28.5271 12.0954 25.0687 13.9959 24.2861C15.8964 23.5035 17.1493 21.0415 17.7322 19.449C18.3151 17.8566 20.7076 16.8168 20.2022 15.7035C19.6968 14.5903 17.508 15.486 16.2184 17.1815C14.9288 18.877 15.5041 20.646 13.5588 21.3945C11.6134 22.1431 7.72538 27.518 9.94532 28.1985Z"
                fill="white"
              />
            </g>
            <g opacity="0.2">
              <path
                d="M35.2567 36.7277C34.5215 37.4454 35.5002 38.188 33.7644 40.0751C33.0413 40.8603 34.298 43.2113 30.8161 43.1837C30.8161 43.1837 28.7938 44.937 26.7714 45.1767C24.7489 45.4165 23.9066 45.0968 21.9688 46.1334C20.0309 47.1699 15.7334 45.4165 13.9635 44.6586C12.1937 43.9008 11.5207 43.8215 10.0043 43.8215C8.48796 43.8215 9.07761 41.5895 7.98184 40.633C6.88607 39.6766 5.62232 39.2785 5.53788 38.402C5.45343 37.5255 4.61118 37.1266 4.69562 35.7712C4.78007 34.4158 3.34725 34.018 3.17927 32.3438C3.01129 30.6696 3.9369 30.3517 3.59985 29.3951C3.2628 28.4384 3.17927 27.6419 3.68448 26.6854C3.74476 26.5692 3.81458 26.458 3.89322 26.353C3.91452 26.8953 3.94509 27.4377 4.13345 27.7739C4.328 28.1216 4.5857 28.4424 4.70472 28.8191C5.01029 29.7868 4.32691 30.7707 4.22718 31.7761C4.04191 33.6361 5.78739 35.0753 6.98089 36.5637C8.04299 37.8881 8.80463 39.5171 10.3046 40.3841C11.9738 41.3493 14.1388 41.1009 15.9667 40.4438C17.7946 39.7866 19.4637 38.7592 21.3262 38.1936C23.4811 37.5366 25.7926 37.5259 28.0535 37.6381C29.6818 37.7189 31.5412 37.7814 32.6737 36.6728C33.3254 36.0352 33.586 35.1325 33.7644 34.2617C34.1065 32.5902 34.2349 30.8831 34.1466 29.1802C34.344 29.5483 34.5412 29.9166 34.7382 30.2852C34.8491 31.2485 35.0263 32.1357 35.2574 32.7425C35.9543 34.5757 35.9911 36.0101 35.2567 36.7277Z"
                fill="#407BFF"
              />
            </g>
            <path
              d="M25.4125 24.9298C26.6433 24.8064 27.7799 26.1332 27.951 27.8934C28.122 29.6537 27.2627 31.1809 26.032 31.3046C24.8014 31.4282 23.6647 30.1011 23.4936 28.3409C23.3225 26.5807 24.1817 25.0537 25.4125 24.9298Z"
              fill="#407BFF"
            />
            <path
              d="M25.4991 25.6673C25.8913 25.8286 26.0602 26.4277 25.8764 27.0054C25.6925 27.5832 25.2254 27.921 24.8332 27.7597C24.441 27.5985 24.2721 26.9993 24.4559 26.4216C24.6397 25.8438 25.1069 25.506 25.4991 25.6673Z"
              fill="white"
            />
            <path
              d="M26.819 29.4515C27.0046 29.587 27.0272 29.9174 26.8694 30.1893C26.7116 30.4612 26.4326 30.5725 26.2475 30.4372C26.0625 30.3019 26.0393 29.9712 26.1971 29.6993C26.3549 29.4275 26.6334 29.3164 26.819 29.4515Z"
              fill="#8BAEFF"
            />
            <path
              d="M14.8575 24.9298C13.6267 24.8064 12.4901 26.1332 12.3191 27.8934C12.148 29.6537 13.0072 31.1809 14.238 31.3046C15.4688 31.4282 16.6053 30.1011 16.7764 28.3409C16.9475 26.5807 16.0885 25.0537 14.8575 24.9298Z"
              fill="#407BFF"
            />
            <path
              d="M14.7712 25.6673C14.379 25.8286 14.2101 26.4277 14.3939 27.0054C14.5777 27.5832 15.0449 27.921 15.4371 27.7597C15.8293 27.5985 15.9982 26.9993 15.8143 26.4216C15.6305 25.8438 15.1634 25.506 14.7712 25.6673Z"
              fill="white"
            />
            <path
              d="M13.4511 29.4515C13.2655 29.587 13.2429 29.9174 13.4007 30.1893C13.5585 30.4612 13.8375 30.5725 14.0225 30.4372C14.2076 30.3019 14.2307 29.9712 14.073 29.6993C13.9152 29.4275 13.6367 29.3164 13.4511 29.4515Z"
              fill="#8BAEFF"
            />
          </g>
          <defs>
            <clipPath id="clip0_115_1994">
              <rect width="40" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>Tracker of water</p>
      </div>
      {children}
    </HeaderStyle>
  );
};

export default Header;
