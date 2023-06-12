import React from "react"

type IconProps = {}

const Icon: React.FC<IconProps> = () => {
  return (
    <svg
      width="169"
      height="30"
      viewBox="0 0 169 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M139 2.5C139 1.11929 140.119 0 141.5 0H166.5C167.881 0 169 1.11929 169 2.5V27.5C169 28.8807 167.881 30 166.5 30H141.5C140.119 30 139 28.8807 139 27.5V2.5ZM165.892 19.5223C165.873 19.2068 166.013 18.816 166.239 18.5946C166.31 18.5244 166.374 18.4451 166.429 18.3572C166.433 18.3514 166.439 18.3478 166.446 18.3478C166.452 18.3478 166.459 18.3444 166.462 18.3388C166.626 18.0798 166.689 17.7691 166.637 17.4667C166.624 17.39 166.604 17.3152 166.577 17.2432C166.459 16.927 166.474 16.4903 166.635 16.1934C166.744 15.9904 166.802 15.7633 166.802 15.5326C166.802 15.3019 166.744 15.0748 166.635 14.8718C166.525 14.6688 166.367 14.4962 166.174 14.3696C165.994 14.2346 165.888 13.9623 165.963 13.7507C166.001 13.6457 166.028 13.5369 166.044 13.4257C166.083 13.1551 166.056 12.8791 165.963 12.6218C165.871 12.3644 165.717 12.1335 165.515 11.9494C165.458 11.8974 165.398 11.8497 165.335 11.8063C165.09 11.6384 164.95 11.2872 164.884 10.9979C164.818 10.7135 164.806 10.3288 164.904 10.0539C164.994 9.80053 164.984 9.51575 164.87 9.26086C164.86 9.2435 164.85 9.2263 164.839 9.20932C164.656 8.92796 164.522 8.51789 164.534 8.18294C164.542 7.96005 164.484 7.73972 164.369 7.54868C164.254 7.35766 164.086 7.20413 163.886 7.10672C163.607 6.97127 163.336 6.64618 163.265 6.34404C163.262 6.33154 163.259 6.31907 163.256 6.30664C163.196 6.07862 163.071 5.8726 162.898 5.71278C162.724 5.55297 162.509 5.44601 162.277 5.40446C161.943 5.34482 161.569 5.10151 161.398 4.80888C161.378 4.77363 161.356 4.73921 161.332 4.70572C161.172 4.47938 160.948 4.30603 160.688 4.20792C160.429 4.1098 160.146 4.0914 159.877 4.15506C159.498 4.24427 158.982 4.15732 158.676 3.9168C158.237 3.57044 157.63 3.45383 157.043 3.67392C156.828 3.76804 156.646 3.88712 156.498 4.03631C156.411 4.12309 156.197 4.08397 156.129 3.98219C156.056 3.87291 155.957 3.78322 155.841 3.72101C155.725 3.65879 155.596 3.62593 155.465 3.6253C155.276 3.62439 155.06 3.51082 154.967 3.3463C154.946 3.30849 154.922 3.27202 154.896 3.23715C154.79 3.0971 154.649 2.98802 154.487 2.92134C154.324 2.85467 154.147 2.83284 153.974 2.85816C153.708 2.89692 153.383 2.82873 153.17 2.66541C153.132 2.63624 153.092 2.60937 153.05 2.58502C152.856 2.47216 152.634 2.41819 152.41 2.42972C152.186 2.44126 151.971 2.51779 151.79 2.64997C151.54 2.83232 151.123 2.91753 150.826 2.83496C150.813 2.83135 150.799 2.82794 150.786 2.82475C150.555 2.76881 150.313 2.78048 150.088 2.8584C149.864 2.9363 149.666 3.07715 149.52 3.26415L149.511 3.2754C149.309 3.53959 148.924 3.75266 148.591 3.76174C148.359 3.76809 148.131 3.83258 147.93 3.94935C147.729 4.06611 147.561 4.23141 147.44 4.43013C147.325 4.61937 147.257 4.83315 147.241 5.05369C147.24 5.07581 147.241 5.09801 147.244 5.11998C147.275 5.34926 147.084 5.54745 146.857 5.59214C146.743 5.61463 146.631 5.64904 146.523 5.69507C146.277 5.80021 146.059 5.96291 145.889 6.16949C145.719 6.37606 145.6 6.6205 145.544 6.88228C145.493 7.12097 145.494 7.36772 145.548 7.60525C145.551 7.61798 145.533 7.62589 145.526 7.61503C145.523 7.61119 145.519 7.60924 145.514 7.61014C145.345 7.64362 145.191 7.73051 145.075 7.85809C144.903 8.0479 144.615 8.22164 144.361 8.25338L144.35 8.25482C144.173 8.27889 144.006 8.35074 143.867 8.46263C143.729 8.57452 143.623 8.72219 143.562 8.88969C143.504 9.05017 143.489 9.22301 143.518 9.39102C143.298 9.37574 143.078 9.42391 142.885 9.52982C142.69 9.63639 142.53 9.7969 142.425 9.99204C142.319 10.1872 142.272 10.4087 142.289 10.6299C142.313 10.9358 142.167 11.3302 141.94 11.5371C141.929 11.5473 141.918 11.5576 141.908 11.5682C141.739 11.7344 141.621 11.9456 141.568 12.1767C141.515 12.4078 141.53 12.6492 141.611 12.8722C141.727 13.1962 141.711 13.6455 141.549 13.9496C141.533 13.9806 141.517 14.0123 141.503 14.0446C141.394 14.2943 141.36 14.5706 141.407 14.8392C141.453 15.1078 141.577 15.3569 141.764 15.5555C142.03 15.8383 142.213 16.3195 142.159 16.7038C142.137 16.8637 142.137 17.0272 142.162 17.1897C142.226 17.6234 142.457 18.0151 142.804 18.2826C142.974 18.4239 143.176 18.5198 143.393 18.5615C143.395 18.5619 143.395 18.5652 143.392 18.5652C143.392 18.5652 143.391 18.5654 143.391 18.5658L143.391 18.5662C143.296 18.7389 143.268 18.9404 143.312 19.1325C143.316 19.1503 143.321 19.1678 143.326 19.1851C143.401 19.433 143.402 19.7771 143.297 20.0138C143.225 20.1767 143.199 20.3562 143.221 20.533C143.243 20.7097 143.313 20.877 143.424 21.0168C143.591 21.2276 143.692 21.5487 143.651 21.8142C143.643 21.8603 143.639 21.9069 143.638 21.9538C143.63 22.1791 143.689 22.4016 143.807 22.5937C143.926 22.7857 144.097 22.939 144.302 23.0344C144.582 23.1656 144.86 23.4916 144.932 23.7933C144.934 23.8035 144.937 23.8136 144.94 23.8238C145 24.0518 145.124 24.2578 145.298 24.4176C145.471 24.5775 145.687 24.6844 145.919 24.726C146.255 24.7861 146.632 25.0264 146.808 25.3184C146.827 25.3496 146.847 25.3801 146.868 25.4098C147.027 25.6314 147.248 25.8014 147.503 25.8987C147.757 25.996 148.035 26.0163 148.301 25.957C148.679 25.8729 149.187 25.9634 149.49 26.2028C149.937 26.5555 150.56 26.6718 151.152 26.4348C151.3 26.3795 151.432 26.3085 151.548 26.2219C151.692 26.1147 152.054 26.1792 152.184 26.3024C152.321 26.4314 152.498 26.5082 152.685 26.5203C152.706 26.5217 152.728 26.5198 152.75 26.516C152.934 26.4836 153.104 26.6157 153.191 26.781C153.219 26.8347 153.253 26.8859 153.291 26.9339C153.4 27.0717 153.545 27.1774 153.71 27.2397C153.875 27.3021 154.053 27.3188 154.227 27.2881C154.489 27.2416 154.816 27.3048 155.028 27.4664C155.065 27.495 155.105 27.5214 155.146 27.5454C155.339 27.6583 155.562 27.7123 155.786 27.7007C156.009 27.6892 156.225 27.6126 156.406 27.4805C156.658 27.296 157.074 27.2059 157.378 27.2825C157.387 27.2849 157.396 27.2871 157.405 27.2892C157.633 27.3412 157.871 27.3278 158.091 27.2506C158.312 27.1733 158.506 27.0353 158.651 26.8525C158.86 26.5896 159.249 26.3792 159.585 26.3705C159.627 26.3694 159.669 26.3664 159.71 26.3615C159.985 26.3293 160.243 26.2163 160.453 26.0368C160.663 25.8573 160.814 25.6195 160.889 25.3536C160.993 24.9787 161.315 24.5676 161.673 24.4141C161.813 24.3543 161.945 24.2752 162.065 24.1783C162.401 23.9068 162.619 23.5157 162.674 23.087C162.678 23.0676 162.682 23.0482 162.685 23.0287C162.733 22.7539 162.923 22.4844 163.114 22.281C163.289 22.0941 163.572 21.9254 163.826 21.8925L163.843 21.8901L163.853 21.8886C164.031 21.8605 164.198 21.7838 164.335 21.6668C164.472 21.5499 164.575 21.3973 164.631 21.2259C164.682 21.0689 164.692 20.9016 164.662 20.7398C164.878 20.755 165.094 20.7087 165.286 20.6063C165.48 20.5025 165.64 20.3452 165.747 20.1531C165.855 19.9609 165.905 19.742 165.892 19.5223ZM164.662 20.7398L164.656 20.7395C164.654 20.7393 164.652 20.7373 164.652 20.7349C164.652 20.7294 164.659 20.7286 164.66 20.734L164.662 20.7398ZM143.518 9.39102L143.52 9.39118C143.521 9.39123 143.521 9.39161 143.521 9.39215L143.522 9.39312C143.522 9.39547 143.518 9.39577 143.518 9.39346L143.518 9.39102ZM153.5 25.4783C153.613 25.4011 153.742 25.3486 153.877 25.3243C154.012 25.3 154.151 25.3044 154.284 25.3372C154.417 25.37 154.542 25.4305 154.651 25.5147C154.759 25.5989 154.848 25.705 154.913 25.8261C155.115 25.6151 155.391 25.4905 155.683 25.4784C155.974 25.4662 156.259 25.5675 156.478 25.7609C156.526 25.5891 156.609 25.4296 156.724 25.2932C156.838 25.1568 156.981 25.0466 157.142 24.9703C157.303 24.894 157.478 24.8532 157.656 24.8508C157.834 24.8485 158.011 24.8845 158.174 24.9565C158.174 24.2174 158.783 23.6522 159.5 23.6087C159.311 23.2131 159.285 22.7592 159.427 22.3446C159.57 21.9299 159.869 21.5877 160.261 21.3913C160.034 21.1501 159.901 20.8359 159.885 20.5052C159.869 20.1744 159.971 19.8489 160.174 19.587C159.9 19.4387 159.69 19.196 159.582 18.904C159.474 18.612 159.476 18.2907 159.587 18C159.429 17.9845 159.276 17.9364 159.137 17.8589C158.999 17.7813 158.877 17.676 158.782 17.5494C158.686 17.4228 158.617 17.2778 158.58 17.1234C158.542 16.969 158.537 16.8086 158.565 16.6522H158.391C157.957 16.6522 157.587 16.3696 157.522 15.9565V15.9348C157.408 16.0126 157.278 16.0618 157.141 16.078C157.005 16.0941 156.866 16.0769 156.738 16.0277C156.61 15.9785 156.495 15.8988 156.405 15.7955C156.314 15.6922 156.25 15.5684 156.217 15.4348C156.143 15.4729 156.061 15.4928 155.978 15.4928C155.895 15.4928 155.813 15.4729 155.739 15.4348C155.666 15.7233 155.516 15.9865 155.304 16.1957C155.373 16.2271 155.433 16.2729 155.482 16.33C155.531 16.387 155.567 16.4539 155.588 16.5262C155.608 16.5984 155.613 16.6743 155.602 16.7486C155.59 16.8228 155.563 16.8938 155.522 16.9565C155.663 16.9933 155.792 17.066 155.897 17.1674C156.002 17.2689 156.079 17.3957 156.121 17.5357C156.162 17.6756 156.167 17.8239 156.134 17.9662C156.102 18.1084 156.033 18.2399 155.935 18.3478C156.088 18.4212 156.219 18.5351 156.312 18.6772C156.406 18.8193 156.459 18.9843 156.466 19.1542C156.472 19.3242 156.432 19.4928 156.35 19.6419C156.268 19.7909 156.147 19.9147 156 20C156.009 20.0108 156.017 20.0213 156.026 20.0317L156.04 20.0495C156.113 20.1374 156.181 20.2193 156.217 20.3478C156.298 20.5051 156.341 20.6788 156.344 20.8555C156.347 21.0322 156.309 21.2072 156.233 21.3669C156.158 21.5266 156.046 21.6668 155.908 21.7766C155.769 21.8863 155.608 21.9628 155.435 22C155.535 22.2023 155.58 22.4275 155.565 22.6527C155.55 22.8779 155.476 23.0952 155.35 23.2827C155.225 23.4701 155.052 23.6211 154.849 23.7203C154.646 23.8196 154.421 23.8635 154.196 23.8478C154.217 24.1309 154.152 24.4139 154.008 24.6587C153.864 24.9035 153.649 25.0984 153.391 25.2174L153.5 25.5V25.4783ZM152.491 4.65206C152.783 4.6399 153.059 4.5153 153.261 4.30436C153.457 4.60871 153.739 4.84784 154.109 4.84784C154.325 4.85074 154.534 4.77325 154.696 4.63045L154.804 4.91305C154.547 5.032 154.331 5.22697 154.188 5.47178C154.044 5.71659 153.978 5.99954 154 6.28262C153.77 6.26037 153.538 6.30061 153.33 6.39909C153.121 6.49757 152.942 6.65063 152.813 6.8421C152.684 7.03358 152.609 7.25638 152.596 7.48697C152.583 7.71756 152.632 7.94739 152.739 8.15218C152.538 8.20086 152.353 8.30302 152.205 8.44788C152.056 8.59275 151.95 8.77495 151.896 8.97528C151.843 9.17561 151.845 9.38664 151.901 9.58612C151.958 9.7856 152.067 9.96614 152.217 10.1087C152.064 10.1901 151.936 10.3129 151.848 10.4631C151.76 10.6134 151.716 10.7852 151.72 10.9591C151.725 11.1331 151.778 11.3024 151.873 11.4479C151.969 11.5934 152.103 11.7093 152.261 11.7826C152.162 11.8891 152.093 12.019 152.059 12.1599C152.025 12.3009 152.028 12.4482 152.067 12.5878C152.106 12.7273 152.181 12.8545 152.283 12.9571C152.386 13.0597 152.513 13.1344 152.652 13.1739C152.609 13.3261 152.565 13.5217 152.652 13.6739L152.804 13.8696C152.617 14.0951 152.49 14.3643 152.435 14.6522C152.357 14.6206 152.274 14.6081 152.19 14.6156C152.107 14.6232 152.027 14.6506 151.957 14.6957C151.927 14.5602 151.865 14.434 151.775 14.3281C151.686 14.2222 151.572 14.1399 151.443 14.0884C151.314 14.0369 151.175 14.0178 151.037 14.0327C150.899 14.0476 150.767 14.0961 150.652 14.1739C150.609 13.7609 150.217 13.4783 149.783 13.4783H149.609C149.636 13.3235 149.632 13.1647 149.596 13.0117C149.56 12.8586 149.494 12.7145 149.4 12.5883C149.306 12.462 149.188 12.3563 149.052 12.2775C148.916 12.1988 148.765 12.1487 148.609 12.1304C148.72 11.8397 148.722 11.5184 148.614 11.2265C148.506 10.9345 148.296 10.6917 148.022 10.5435C148.224 10.2816 148.327 9.95601 148.311 9.62528C148.295 9.29456 148.162 8.98035 147.935 8.73914C148.327 8.54277 148.626 8.2005 148.768 7.78588C148.91 7.37126 148.884 6.91737 148.696 6.52175C149.046 6.50548 149.377 6.35761 149.623 6.10772C149.869 5.85782 150.011 5.52433 150.022 5.17392C150.184 5.24217 150.358 5.27525 150.534 5.27097C150.709 5.26669 150.882 5.22514 151.04 5.14909C151.198 5.07303 151.339 4.9642 151.452 4.82981C151.565 4.69542 151.648 4.53855 151.696 4.36958C151.914 4.56298 152.2 4.66421 152.491 4.65206ZM162.815 13.8762C162.929 14.1306 163.105 14.3524 163.326 14.5217H163.348C163.599 14.7106 163.903 14.8169 164.217 14.8261C164.049 15.1298 164 15.4856 164.08 15.8235C164.161 16.1614 164.365 16.457 164.652 16.6522C164.503 16.7553 164.379 16.8898 164.288 17.0461C164.196 17.2025 164.141 17.377 164.124 17.5573C164.107 17.7376 164.131 17.9193 164.192 18.0897C164.253 18.2601 164.351 18.415 164.478 18.5435C164.195 18.6248 163.955 18.8134 163.809 19.0692C163.662 19.325 163.622 19.6278 163.696 19.9131C163.565 19.913 163.436 19.939 163.316 19.9895C163.196 20.0401 163.087 20.1141 162.996 20.2072C162.905 20.3004 162.833 20.4108 162.786 20.532C162.738 20.6532 162.715 20.7828 162.717 20.9131H162.565C162.687 20.5886 162.683 20.2305 162.554 19.9089C162.425 19.5872 162.181 19.3252 161.87 19.1739C161.987 18.9846 162.053 18.768 162.061 18.5454C162.069 18.3228 162.019 18.1019 161.916 17.9045C161.813 17.707 161.66 17.5398 161.473 17.4194C161.286 17.2989 161.07 17.2293 160.848 17.2174C160.923 17.0076 160.937 16.7804 160.886 16.5632C160.835 16.3461 160.722 16.1485 160.561 15.9943C160.4 15.84 160.197 15.7359 159.978 15.6945C159.759 15.6531 159.532 15.6761 159.326 15.7609C159.326 15.5203 159.234 15.2889 159.068 15.1148C158.902 14.9407 158.675 14.8373 158.435 14.8261C158.225 14.811 158.016 14.8728 157.848 15C157.799 14.8605 157.715 14.7362 157.603 14.6393C157.491 14.5425 157.356 14.4765 157.211 14.4479C157.066 14.4194 156.916 14.4292 156.776 14.4765C156.636 14.5238 156.511 14.6068 156.413 14.7174C156.348 14.5652 156.174 14.4565 155.978 14.4565L155.761 14.5217C155.674 14.2609 155.522 14.0217 155.348 13.8261C155.403 13.7769 155.447 13.7166 155.477 13.6491C155.507 13.5817 155.522 13.5086 155.522 13.4348C155.697 13.4919 155.887 13.4887 156.06 13.4257C156.233 13.3626 156.381 13.2434 156.478 13.087C156.565 12.9565 156.63 12.7826 156.63 12.6087C156.826 12.6694 157.037 12.6639 157.229 12.5932C157.422 12.5225 157.586 12.3904 157.696 12.2174L157.783 12.0435C157.902 12.1506 158.043 12.2315 158.195 12.281C158.348 12.3306 158.509 12.3478 158.669 12.3314C158.829 12.315 158.983 12.2655 159.122 12.186C159.262 12.1064 159.383 11.9987 159.478 11.8696C159.666 12.1034 159.93 12.2641 160.224 12.3236C160.518 12.3832 160.823 12.3379 161.087 12.1957C161.204 12.506 161.429 12.7642 161.72 12.9237C162.011 13.0831 162.349 13.1333 162.674 13.0652C162.653 13.3431 162.701 13.6219 162.815 13.8762ZM163.413 10.7174L163.522 10.6087C163.4 10.5477 163.293 10.4619 163.206 10.357C163.12 10.2521 163.056 10.1303 163.019 9.99939C162.982 9.86846 162.973 9.7313 162.992 9.59666C163.012 9.46201 163.059 9.33284 163.13 9.2174C162.85 9.13145 162.613 8.94197 162.468 8.68754C162.323 8.43311 162.28 8.13284 162.348 7.84783C162.174 7.89268 161.992 7.89921 161.816 7.86697C161.639 7.83472 161.472 7.76448 161.325 7.6611C161.178 7.55772 161.055 7.42367 160.966 7.26823C160.876 7.11279 160.821 6.93968 160.804 6.76088C160.152 7.06523 159.348 6.82609 159 6.2174C158.746 6.57377 158.363 6.81655 157.932 6.89375C157.501 6.97096 157.058 6.87644 156.696 6.63044C156.591 6.94426 156.379 7.21069 156.096 7.38199C155.813 7.55329 155.479 7.61825 155.152 7.56523C155.151 7.87033 155.04 8.16487 154.841 8.39596C154.642 8.62705 154.367 8.77956 154.065 8.82609C154.127 8.97386 154.157 9.13288 154.154 9.29301C154.151 9.45314 154.115 9.61086 154.047 9.75609C153.98 9.90133 153.882 10.0309 153.762 10.1365C153.642 10.2422 153.501 10.3215 153.348 10.3696L153.435 10.5217C153.652 10.9131 153.565 11.3913 153.239 11.6522H153.217C153.334 11.715 153.434 11.8041 153.51 11.9126C153.586 12.0211 153.635 12.1458 153.654 12.2769C153.673 12.4079 153.662 12.5415 153.62 12.6671C153.578 12.7927 153.507 12.9067 153.413 13C153.525 13.0763 153.603 13.1933 153.63 13.3261C153.915 13.2495 154.215 13.2495 154.5 13.3261C154.519 13.2104 154.577 13.1046 154.664 13.0257C154.75 12.9468 154.861 12.8995 154.978 12.8913C154.93 12.7462 154.922 12.5908 154.955 12.4415C154.988 12.2922 155.06 12.1546 155.165 12.0432C155.27 11.9318 155.403 11.8508 155.55 11.8088C155.697 11.7667 155.852 11.7652 156 11.8044C155.957 11.6087 156 11.4131 156.13 11.2391C156.435 10.8044 156.978 10.6522 157.413 10.9565C157.456 10.7515 157.554 10.5621 157.696 10.4085C157.838 10.2549 158.02 10.1431 158.221 10.0849C158.422 10.0268 158.636 10.0246 158.838 10.0786C159.04 10.1326 159.224 10.2407 159.37 10.3913C159.494 10.1989 159.667 10.0433 159.872 9.94059C160.077 9.83792 160.305 9.79196 160.534 9.8075C160.763 9.82303 160.983 9.89948 161.172 10.0289C161.361 10.1583 161.512 10.336 161.609 10.5435C161.881 10.3521 162.212 10.2644 162.543 10.2963C162.874 10.3282 163.183 10.4776 163.413 10.7174ZM154.565 16.9131C154.543 16.8261 154.522 16.7174 154.543 16.6304C154.265 16.7013 153.974 16.7013 153.696 16.6304C153.696 16.7391 153.696 16.8913 153.609 17C153.522 17.1522 153.348 17.2391 153.217 17.2391C153.266 17.3842 153.274 17.5396 153.241 17.6889C153.208 17.8382 153.135 17.9759 153.031 18.0872C152.926 18.1986 152.793 18.2796 152.646 18.3217C152.499 18.3637 152.343 18.3653 152.196 18.3261C152.208 18.4968 152.173 18.6677 152.095 18.82C152.017 18.9724 151.899 19.1004 151.753 19.1901C151.607 19.2798 151.44 19.3277 151.269 19.3287C151.098 19.3297 150.929 19.2837 150.783 19.1957C150.783 19.3261 150.696 19.4783 150.63 19.5652C150.537 19.7161 150.41 19.8434 150.259 19.937C150.108 20.0306 149.937 20.0881 149.761 20.105C149.584 20.1218 149.405 20.0975 149.24 20.0341C149.074 19.9706 148.925 19.8697 148.804 19.7391C148.68 19.9316 148.507 20.0872 148.302 20.1899C148.097 20.2925 147.868 20.3385 147.64 20.323C147.411 20.3074 147.191 20.231 147.002 20.1015C146.813 19.9721 146.662 19.7944 146.565 19.587C146.295 19.7725 145.968 19.8568 145.642 19.825C145.316 19.7932 145.012 19.6473 144.783 19.4131C144.743 19.4535 144.699 19.4899 144.652 19.5217C144.826 19.6087 145 19.7609 145.087 19.9565C145.261 20.2609 145.239 20.6304 145.065 20.9131C145.345 20.999 145.582 21.1885 145.728 21.4429C145.873 21.6973 145.916 21.9976 145.848 22.2826C146.02 22.2414 146.199 22.2376 146.373 22.2716C146.547 22.3055 146.712 22.3764 146.856 22.4794C147.001 22.5825 147.121 22.7152 147.21 22.8688C147.298 23.0224 147.353 23.1931 147.37 23.3696C148.022 23.0652 148.826 23.3044 149.174 23.9131C149.298 23.7312 149.457 23.576 149.642 23.4565C149.827 23.337 150.033 23.2556 150.25 23.2172C150.467 23.1787 150.689 23.1839 150.904 23.2325C151.118 23.281 151.321 23.372 151.5 23.5C151.604 23.1904 151.813 22.9271 152.091 22.7562C152.369 22.5853 152.699 22.5177 153.022 22.5652C153.024 22.2569 153.138 21.9597 153.341 21.7282C153.545 21.4966 153.825 21.3462 154.13 21.3044C154.068 21.158 154.037 21.0003 154.039 20.8413C154.04 20.6823 154.075 20.5253 154.14 20.3804C154.206 20.2354 154.3 20.1055 154.418 19.9989C154.536 19.8923 154.675 19.8112 154.826 19.7609L154.739 19.6087C154.543 19.2174 154.63 18.7391 154.957 18.4783C154.804 18.3913 154.652 18.2826 154.609 18.1304C154.529 17.9665 154.503 17.7819 154.535 17.6024C154.566 17.423 154.653 17.2579 154.783 17.1304C154.696 17.087 154.63 17 154.565 16.9131ZM152.321 15.674C152.393 15.6595 152.462 15.6298 152.522 15.587V15.5652C152.616 15.8122 152.765 16.035 152.957 16.2174C152.865 16.2593 152.788 16.3267 152.734 16.4116C152.68 16.4964 152.651 16.5951 152.652 16.6957C152.283 16.5652 151.913 16.7174 151.696 17.0435C151.609 17.1739 151.565 17.3478 151.565 17.5217C151.366 17.4557 151.151 17.4584 150.954 17.5294C150.757 17.6003 150.589 17.7355 150.478 17.913L150.391 18.087C150.272 17.9835 150.133 17.9056 149.983 17.8581C149.832 17.8105 149.674 17.7944 149.517 17.8107C149.36 17.8271 149.208 17.8754 149.07 17.9528C148.933 18.0303 148.813 18.1351 148.717 18.2609C148.529 18.0217 148.261 17.8576 147.962 17.7979C147.663 17.7381 147.353 17.7866 147.087 17.9348C146.97 17.6244 146.745 17.3662 146.454 17.2068C146.163 17.0473 145.825 16.9971 145.5 17.0652C145.519 16.7854 145.467 16.5054 145.349 16.2509C145.231 15.9964 145.051 15.7756 144.826 15.6087C144.565 15.413 144.261 15.3044 143.957 15.3044C144.125 15.0006 144.174 14.6448 144.093 14.3069C144.013 13.969 143.809 13.6734 143.522 13.4783C143.671 13.3752 143.795 13.2407 143.886 13.0843C143.977 12.9279 144.033 12.7535 144.05 12.5732C144.067 12.3929 144.043 12.2112 143.982 12.0408C143.921 11.8704 143.823 11.7155 143.696 11.587C143.976 11.501 144.213 11.3115 144.358 11.0571C144.503 10.8027 144.546 10.5024 144.478 10.2174C144.61 10.2204 144.742 10.1965 144.864 10.1473C144.987 10.0981 145.099 10.0246 145.192 9.93112C145.285 9.83766 145.359 9.72623 145.408 9.60357C145.457 9.4809 145.481 9.34953 145.478 9.2174C145.522 9.22066 145.565 9.22066 145.609 9.2174C145.487 9.54185 145.491 9.89992 145.62 10.2216C145.749 10.5432 145.993 10.8053 146.304 10.9565C146.173 11.1511 146.098 11.3781 146.086 11.6126C146.075 11.8472 146.128 12.0803 146.24 12.2866C146.353 12.4929 146.519 12.6645 146.722 12.7826C146.925 12.9007 147.157 12.9609 147.391 12.9565C147.332 13.159 147.33 13.3739 147.385 13.5777C147.439 13.7814 147.549 13.9663 147.701 14.112C147.854 14.2578 148.043 14.3589 148.249 14.4043C148.455 14.4497 148.67 14.4377 148.87 14.3696C148.869 14.6101 148.962 14.8415 149.128 15.0157C149.294 15.1898 149.521 15.2932 149.761 15.3044C149.957 15.3261 150.196 15.2391 150.348 15.1304C150.398 15.2656 150.483 15.3856 150.592 15.4792C150.702 15.5727 150.834 15.6366 150.976 15.6649C151.117 15.6932 151.264 15.685 151.401 15.6409C151.538 15.5968 151.662 15.5184 151.761 15.413C151.796 15.4777 151.845 15.5342 151.904 15.5786C151.963 15.6231 152.03 15.6546 152.102 15.671C152.174 15.6875 152.249 15.6885 152.321 15.674Z"
        fill="#FF4D4D"
      />
      <path
        d="M7.04911 24C1.82755 24 0 20.8885 0 15.1659C0 9.57389 1.82755 6.11423 7.04911 6.11423C8.61558 6.11423 9.74692 6.2883 10.4214 6.54941C10.5302 6.57117 10.5519 6.63645 10.5519 6.767L10.4214 8.72529C10.4214 8.81233 10.3561 8.89936 10.2038 8.83409C9.59463 8.6165 8.44153 8.44243 7.37546 8.44243C4.17725 8.44243 3.30699 10.1831 3.30699 15.1877C3.30699 19.9311 4.26428 21.5848 7.37546 21.5848C8.28923 21.5848 9.42057 21.4325 10.095 21.2801C10.2038 21.2366 10.3779 21.1931 10.4214 21.3672L10.6172 23.2602C10.6389 23.4343 10.5954 23.4778 10.5084 23.5431C9.63814 23.7824 8.33275 23.9782 7.02736 23.9782M17.9056 20.8015C18.4278 21.3454 19.124 21.5848 20.8645 21.5848C22.6485 21.5848 23.323 21.3454 23.8234 20.8015C24.6501 19.9311 25.0635 17.5376 25.0635 14.9048C25.0635 12.2285 24.6501 10.1396 23.8234 9.26927C23.323 8.70354 22.6485 8.48595 20.908 8.48595C19.124 8.48595 18.4278 8.72529 17.9056 9.26927C17.0789 10.1396 16.6873 12.2285 16.6873 14.9048C16.6873 17.5159 17.0789 19.9093 17.9056 20.7797M26.2819 22.2375C25.1505 23.456 23.4535 23.9782 20.8427 23.9782C18.1885 23.9782 16.6437 23.456 15.5124 22.2375C14.0251 20.0913 13.2906 17.5127 13.4238 14.9048C13.4238 11.641 14.294 9.09519 15.5124 7.76791C16.6437 6.52765 18.3407 6.11423 20.908 6.11423C23.5623 6.11423 25.1505 6.54941 26.2819 7.76791C27.7391 9.85187 28.4519 12.366 28.3052 14.9048C28.3052 18.1034 27.435 20.8885 26.2819 22.2375ZM42.089 9.16047C42.089 9.00816 42.002 8.87761 41.8279 8.79057C41.371 8.6165 40.2614 8.48595 39.3259 8.48595C35.6708 8.48595 34.5177 9.44334 34.5177 14.8395C34.5395 20.1487 35.1269 21.6065 39.4782 21.6065C40.1744 21.6065 41.2187 21.5848 41.8062 21.3889C42.089 21.2801 42.089 21.1496 42.089 21.019V9.16047ZM31.2107 14.8395C31.2107 8.72529 33.6039 6.11423 39.2606 6.11423C40.4137 6.11423 41.4363 6.33182 41.8714 6.33182C42.0237 6.33182 42.0672 6.20127 42.0672 6.04896V0.304624C42.0672 0.108794 42.1978 0 42.4153 0H44.8956C45.1131 0 45.2437 0.108794 45.2437 0.304624V22.9338C45.2437 23.1079 45.1131 23.2384 44.8956 23.282C43.1042 23.7416 41.2624 23.9755 39.4129 23.9782C32.8642 23.9782 31.2107 21.4325 31.2107 14.8395ZM51.7394 13.7951H59.0713C59.3759 13.7951 59.4847 13.7516 59.4847 12.6636C59.4847 9.76972 58.6145 8.44243 55.7208 8.44243C52.3486 8.44243 51.5436 10.6183 51.5436 13.5775C51.5436 13.7081 51.5653 13.7951 51.7394 13.7951ZM56.3735 23.9565C49.8248 23.9565 48.2584 19.9529 48.2584 15.0354C48.2584 9.94379 50.1729 6.11423 55.7208 6.11423C61.16 6.11423 62.4219 9.31278 62.4219 13.5775V14.4696C62.4219 15.7752 62.1173 16.058 61.5516 16.058H51.7394C51.5653 16.058 51.5218 16.1233 51.5218 16.2974C51.5218 20.5621 53.5669 21.6065 57.048 21.6065C58.6145 21.6065 60.3115 21.1714 61.334 20.7362H61.5081C61.6604 20.7362 61.7692 20.8015 61.8127 20.9102L61.9432 22.651V22.7162C61.9432 22.8468 61.8997 22.9991 61.7474 23.0644C60.0448 23.7049 58.2358 24.0151 56.4171 23.9782M85.5716 23.6301H81.2856C81.1333 23.6301 81.068 23.5866 81.0027 23.4125C79.8758 18.7339 78.8096 14.0408 77.8045 9.33454C77.7392 9.16047 77.6957 9.11695 77.4564 9.11695C77.1736 9.11695 77.1083 9.16047 77.043 9.33454C76.1293 13.5775 74.3017 20.6491 73.5185 23.4125C73.4532 23.5866 73.3444 23.6736 73.1269 23.6736H68.9279C68.8191 23.6736 68.7103 23.5213 68.6668 23.369C67.0666 17.8589 65.6084 12.3086 64.2937 6.72348C64.2937 6.50589 64.3372 6.44062 64.5113 6.44062H67.4267C67.6007 6.44062 67.6225 6.54941 67.6442 6.72348C68.5965 11.4629 69.6629 16.1787 70.8424 20.8667C70.8424 21.0626 70.9947 21.0843 71.2123 21.0843C71.5169 21.0843 71.6039 21.0626 71.6257 20.8667C72.7614 16.1683 73.8276 11.4534 74.8239 6.72348C74.8674 6.50589 74.9544 6.44062 75.1067 6.44062H79.6756C79.8279 6.44062 79.9584 6.54941 79.9584 6.72348C80.7851 10.7924 82.4169 17.7552 83.1349 20.8667C83.2001 21.0626 83.3524 21.0843 83.57 21.0843C83.8311 21.0843 83.8963 21.0626 83.9616 20.8667C84.8319 17.7117 86.5724 10.8141 87.3991 6.72348C87.4644 6.50589 87.5732 6.44062 87.7255 6.44062H90.4451C90.5756 6.44062 90.6626 6.57117 90.6626 6.74524C90.2275 8.83409 87.0945 20.0399 85.985 23.4125C85.9197 23.5866 85.8327 23.6736 85.6151 23.6736M102.042 16.0145C102.042 15.8622 101.955 15.7969 101.825 15.7969H98.8221C96.0373 15.7969 95.3193 16.3844 95.3193 18.9737C95.3193 21.4977 95.885 21.8024 99.1702 21.8024C100.022 21.8178 100.874 21.7595 101.716 21.6283C102.02 21.5848 102.02 21.4977 102.02 21.4107L102.042 16.0145ZM94.2968 8.83409C94.0792 8.87761 93.8399 8.87761 93.7964 8.70354L93.5788 7.09338C93.5135 6.91931 93.5788 6.72348 93.7528 6.6582C95.4314 6.24113 97.1583 6.05086 98.8874 6.09247C102.999 6.09247 105.11 7.52856 105.11 11.3146V22.9121C105.11 23.1296 105.023 23.2602 104.675 23.4125C102.964 23.8127 101.21 23.9955 99.453 23.9565C93.7093 23.9565 92.0558 22.8033 92.0558 19.3218C92.0558 16.2103 92.8173 14.5567 97.6908 13.9692L101.868 13.4905C101.977 13.447 102.086 13.4252 102.086 13.2729V11.6627C102.086 9.16047 100.998 8.55122 98.1694 8.55122C96.9728 8.55122 95.3628 8.70354 94.3185 8.83409M109.853 6.81052C112.559 6.16646 115.354 5.98257 118.121 6.26655C118.295 6.2883 118.339 6.37534 118.339 6.54941L118.186 8.57298C118.186 8.70354 118.099 8.74705 117.969 8.72529C117.098 8.57298 116.228 8.50771 115.14 8.50771C114.553 8.50771 113.4 8.57298 112.899 8.83409C112.704 8.92112 112.682 9.07344 112.682 9.22575V23.3472C112.682 23.5648 112.53 23.6954 112.29 23.6301H109.832C109.614 23.6301 109.505 23.5213 109.505 23.3472V7.09338C109.505 6.91931 109.636 6.81052 109.832 6.81052M120.861 23.6301C120.753 23.6301 120.666 23.5866 120.666 23.4343L120.818 21.3672C120.818 21.2801 120.927 21.1931 121.079 21.2366C122.263 21.4605 123.464 21.577 124.669 21.5848C127.497 21.5848 127.976 21.2801 127.976 19.2566C127.976 18.0598 127.28 17.4288 124.582 15.5576C121.862 13.621 120.818 12.8377 120.818 10.7706C120.818 7.41976 122.341 6.11423 126.692 6.11423C128.237 6.11423 129.564 6.20127 130.478 6.37534C130.565 6.37534 130.652 6.44062 130.652 6.59293L130.521 8.63826C130.521 8.74705 130.391 8.81233 130.239 8.79057C129.39 8.63826 128.15 8.48595 127.04 8.48595C124.604 8.48595 123.777 8.63826 123.777 10.4442C123.777 11.8368 124.495 12.3155 127.214 14.0562C130.064 15.884 131 17.146 131 19.0825C131 22.8903 129.259 23.9782 125.191 23.9782C123.735 23.9943 122.28 23.8925 120.84 23.6736"
        fill="white"
      />
    </svg>
  )
}
export default Icon
