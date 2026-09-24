/* @ds-bundle: {"format":4,"namespace":"ChassisDesignSystem_a20987","components":[{"name":"ChassisLogo","sourcePath":"components/brand/ChassisLogo.jsx"},{"name":"PageFooter","sourcePath":"components/document/PageFooter.jsx"},{"name":"PageHeader","sourcePath":"components/document/PageHeader.jsx"}],"sourceHashes":{"components/brand/ChassisLogo.jsx":"04b81e551fed","components/brand/logo-art.js":"95b8cf6f556f","components/document/PageFooter.jsx":"1b3aa9384807","components/document/PageHeader.jsx":"ced0e56c404e","ui_kits/token-docs/doc-parts.jsx":"f172ce8028cd","ui_kits/token-docs/screen-overview.jsx":"62d532effdb1","ui_kits/token-docs/screen-primitives.jsx":"a997422a4b66","ui_kits/token-docs/screen-semantics.jsx":"83d43ab92384","ui_kits/token-docs/screen-usage.jsx":"0c1b09f170ac"},"inlinedExternals":[],"unexposedExports":[{"name":"logoArt","sourcePath":"components/brand/logo-art.js"}]} */

(() => {

const __ds_ns = (window.ChassisDesignSystem_a20987 = window.ChassisDesignSystem_a20987 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/logo-art.js
try { (() => {
// Chassis mark artwork, inlined verbatim from the source file's SVG exports.
// Paths inherit `currentColor` so the mark takes any token colour.
const logoArt = {
  "mark": {
    "vb": "0 0 46.772 44.663",
    "inner": "<path fill=\"currentColor\" d=\"M 22.636 36.369 L 26.581 36.369 L 26.581 37.581 C 26.581 38.219 26.612 38.623 26.675 38.793 C 26.706 39.006 26.862 39.261 27.144 39.559 C 27.426 39.857 27.645 40.027 27.801 40.069 C 27.958 40.154 28.318 40.197 28.881 40.197 L 40.527 40.197 C 41.09 40.197 41.45 40.154 41.607 40.069 C 41.763 40.027 41.982 39.857 42.264 39.559 C 42.546 39.261 42.718 39.006 42.78 38.793 C 42.812 38.623 42.827 38.219 42.827 37.581 L 42.827 7.082 C 42.827 6.444 42.812 6.019 42.78 5.806 C 42.718 5.636 42.546 5.402 42.264 5.104 C 41.982 4.807 41.763 4.615 41.607 4.53 C 41.45 4.488 41.09 4.466 40.527 4.466 L 28.881 4.466 C 28.318 4.466 27.958 4.488 27.801 4.53 C 27.645 4.615 27.426 4.807 27.144 5.104 C 26.862 5.402 26.706 5.636 26.675 5.806 C 26.612 6.019 26.581 6.444 26.581 7.082 L 26.581 36.369 L 20.191 8.295 L 22.636 5.742 C 22.636 4.466 23.012 3.403 23.763 2.552 L 24.89 1.276 C 25.642 0.425 26.393 0 27.144 0 L 42.264 0 C 43.015 0 43.767 0.425 44.518 1.276 L 45.645 2.552 C 46.396 3.403 46.772 4.466 46.772 5.742 L 46.772 38.921 C 46.772 40.197 46.396 41.26 45.645 42.111 L 44.518 43.387 C 43.767 44.238 43.015 44.663 42.264 44.663 L 27.144 44.663 C 26.393 44.663 25.642 44.238 24.89 43.387 L 23.763 42.111 C 23.012 41.26 22.636 40.197 22.636 38.921 L 22.636 36.369 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path fill=\"currentColor\" d=\"M 24.135 8.295 L 20.191 8.295 L 20.191 7.082 C 20.191 6.444 20.16 6.04 20.097 5.87 C 20.066 5.657 19.909 5.402 19.628 5.104 C 19.346 4.807 19.127 4.636 18.97 4.594 C 18.814 4.509 18.454 4.466 17.89 4.466 L 6.245 4.466 C 5.682 4.466 5.322 4.509 5.165 4.594 C 5.009 4.636 4.79 4.807 4.508 5.104 C 4.226 5.402 4.054 5.657 3.991 5.87 C 3.96 6.04 3.944 6.444 3.944 7.082 L 3.944 37.581 C 3.944 38.219 3.96 38.644 3.991 38.857 C 4.054 39.027 4.226 39.261 4.508 39.559 C 4.79 39.857 5.009 40.048 5.165 40.133 C 5.322 40.176 5.682 40.197 6.245 40.197 L 17.89 40.197 C 18.454 40.197 18.814 40.176 18.97 40.133 C 19.127 40.048 19.346 39.857 19.628 39.559 C 19.909 39.261 20.066 39.027 20.097 38.857 C 20.16 38.644 20.191 38.219 20.191 37.581 L 20.191 8.295 L 24.135 36.369 L 24.135 38.921 C 24.135 40.197 23.76 41.26 23.009 42.111 L 21.882 43.387 C 21.13 44.238 20.379 44.663 19.628 44.663 L 4.508 44.663 C 3.756 44.663 3.005 44.238 2.254 43.387 L 1.127 42.111 C 0.376 41.26 0 40.197 0 38.921 L 0 5.742 C 0 4.466 0.376 3.403 1.127 2.552 L 2.254 1.276 C 3.005 0.425 3.756 0 4.508 0 L 19.628 0 C 20.379 0 21.13 0.425 21.882 1.276 L 23.008 2.552 C 23.76 3.403 24.135 4.466 24.135 5.742 L 24.135 8.295 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  },
  "wordmark": {
    "vb": "0 0 272 46",
    "inner": "<path fill=\"currentColor\" d=\"M 93.607 10.373 L 88.455 10.373 L 88.455 9.214 C 88.455 8.604 88.414 8.217 88.332 8.055 C 88.292 7.851 88.087 7.607 87.719 7.322 C 87.351 7.038 87.065 6.875 86.861 6.834 C 86.656 6.753 86.186 6.712 85.45 6.712 L 70.241 6.712 C 69.505 6.712 69.035 6.753 68.83 6.834 C 68.626 6.875 68.34 7.038 67.972 7.322 C 67.604 7.607 67.379 7.851 67.297 8.055 C 67.256 8.217 67.236 8.604 67.236 9.214 L 67.236 38.382 C 67.236 38.992 67.256 39.399 67.297 39.602 C 67.379 39.765 67.604 39.989 67.972 40.273 C 68.34 40.558 68.626 40.741 68.83 40.823 C 69.035 40.863 69.505 40.884 70.241 40.884 L 85.45 40.884 C 86.186 40.884 86.656 40.863 86.861 40.823 C 87.065 40.741 87.351 40.558 87.719 40.273 C 88.087 39.989 88.292 39.765 88.332 39.602 C 88.414 39.399 88.455 38.992 88.455 38.382 L 88.455 37.222 L 93.607 37.222 L 93.607 39.663 C 93.607 40.884 93.116 41.901 92.135 42.714 L 90.663 43.935 C 89.682 44.748 88.7 45.155 87.719 45.155 L 67.972 45.155 C 66.99 45.155 66.009 44.748 65.028 43.935 L 63.556 42.714 C 62.575 41.901 62.084 40.884 62.084 39.663 L 62.084 7.933 C 62.084 6.712 62.575 5.695 63.556 4.882 L 65.028 3.661 C 66.009 2.848 66.99 2.441 67.972 2.441 L 87.719 2.441 C 88.7 2.441 89.682 2.848 90.663 3.661 L 92.135 4.882 C 93.116 5.695 93.607 6.712 93.607 7.933 L 93.607 10.373 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path fill=\"currentColor\" d=\"M 109.373 14.645 L 120.106 14.645 C 121.087 14.645 122.068 15.052 123.05 15.865 L 124.521 17.086 C 125.503 17.899 125.993 18.916 125.993 20.137 L 125.993 45.155 L 120.842 45.155 L 120.842 21.418 C 120.842 20.808 120.801 20.421 120.719 20.259 C 120.678 20.055 120.474 19.811 120.106 19.527 C 119.738 19.242 119.452 19.079 119.247 19.038 C 119.043 18.957 118.573 18.916 117.837 18.916 L 109.987 18.916 C 109.21 18.916 108.678 18.957 108.392 19.038 C 108.147 19.12 107.656 19.384 106.92 19.832 C 106.184 20.279 105.755 20.605 105.632 20.808 C 105.51 21.011 105.448 21.418 105.448 22.028 L 105.448 45.155 L 100.297 45.155 L 100.297 0 L 105.448 0 L 105.448 17.513 L 105.694 17.513 C 105.694 17.147 106.143 16.577 107.043 15.804 C 107.942 15.031 108.719 14.645 109.373 14.645 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path fill=\"currentColor\" d=\"M 154.944 42.714 L 154.699 42.714 C 154.699 43.202 154.249 43.711 153.35 44.24 C 152.614 44.687 152.103 44.952 151.816 45.033 C 151.571 45.114 151.08 45.155 150.344 45.155 L 139.857 45.155 C 138.876 45.155 137.895 44.748 136.914 43.935 L 135.442 42.714 C 134.46 41.901 133.97 40.884 133.97 39.663 L 133.97 32.341 C 133.97 31.12 134.46 30.103 135.442 29.29 L 136.914 28.069 C 137.895 27.256 138.876 26.849 139.857 26.849 L 150.835 26.849 C 151.612 26.849 152.103 26.89 152.307 26.971 C 152.511 27.012 152.777 27.174 153.104 27.459 C 153.595 27.866 153.84 28.273 153.84 28.68 L 154.086 28.68 L 154.086 21.418 C 154.086 20.808 154.045 20.421 153.963 20.259 C 153.922 20.055 153.718 19.811 153.35 19.527 C 152.982 19.242 152.695 19.079 152.491 19.038 C 152.287 18.957 151.816 18.916 151.08 18.916 L 141.145 18.916 C 140.409 18.916 139.898 18.977 139.612 19.099 C 139.367 19.181 138.876 19.527 138.14 20.137 L 134.46 17.086 L 135.932 15.865 C 136.668 15.255 137.159 14.909 137.404 14.828 C 137.69 14.706 138.201 14.645 138.937 14.645 L 153.35 14.645 C 154.331 14.645 155.312 15.052 156.293 15.865 L 157.765 17.086 C 158.746 17.899 159.237 18.916 159.237 20.137 L 159.237 38.382 C 159.237 38.992 159.258 39.399 159.298 39.602 C 159.38 39.765 159.605 39.989 159.973 40.273 C 160.341 40.558 160.545 40.802 160.586 41.006 C 160.668 41.168 160.709 41.555 160.709 42.165 L 160.709 45.155 L 158.562 45.155 C 157.827 45.155 157.315 45.114 157.029 45.033 C 156.784 44.911 156.416 44.647 155.925 44.24 C 155.271 43.711 154.944 43.202 154.944 42.714 Z M 139.121 33.622 L 139.121 38.382 C 139.121 38.992 139.142 39.399 139.183 39.602 C 139.264 39.765 139.489 39.989 139.857 40.273 C 140.225 40.558 140.511 40.741 140.716 40.823 C 140.92 40.863 141.391 40.884 142.126 40.884 L 149.609 40.884 C 150.345 40.884 150.835 40.843 151.08 40.762 C 151.367 40.68 151.878 40.416 152.614 39.968 C 153.35 39.521 153.779 39.195 153.902 38.992 C 154.024 38.789 154.086 38.382 154.086 37.772 L 154.086 33.622 C 154.086 33.012 154.045 32.626 153.963 32.463 C 153.922 32.259 153.718 32.015 153.35 31.731 C 152.982 31.446 152.695 31.283 152.491 31.242 C 152.287 31.161 151.816 31.12 151.08 31.12 L 142.126 31.12 C 141.391 31.12 140.92 31.161 140.716 31.242 C 140.511 31.283 140.225 31.446 139.857 31.731 C 139.489 32.015 139.264 32.259 139.183 32.463 C 139.142 32.626 139.121 33.012 139.121 33.622 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path fill=\"currentColor\" d=\"M 206.741 27.459 C 205.76 27.459 204.779 27.866 203.797 28.68 L 202.325 29.9 C 201.344 30.714 200.853 31.731 200.853 32.951 L 200.853 39.663 C 200.853 40.884 201.344 41.901 202.325 42.714 L 203.797 43.935 C 204.779 44.748 205.76 45.155 206.741 45.155 L 220.356 45.155 C 221.337 45.155 222.318 44.748 223.3 43.935 L 224.772 42.714 C 225.753 41.901 226.243 40.884 226.243 39.663 L 226.243 37.222 L 221.092 37.222 L 221.092 38.382 C 221.092 38.992 221.071 39.399 221.03 39.602 C 220.949 39.765 220.724 39.989 220.356 40.273 C 219.988 40.558 219.702 40.741 219.497 40.823 C 219.293 40.863 218.823 40.884 218.087 40.884 L 209.01 40.884 C 208.274 40.884 207.804 40.863 207.6 40.823 C 207.395 40.741 207.109 40.558 206.741 40.273 C 206.373 39.989 206.169 39.765 206.128 39.602 C 206.046 39.399 206.005 38.992 206.005 38.382 L 206.005 33.439 C 206.046 33.114 206.291 32.748 206.741 32.341 C 207.109 32.056 207.395 31.893 207.6 31.853 C 207.804 31.771 208.274 31.731 209.01 31.731 L 219.743 31.731 C 220.724 31.731 221.705 31.324 222.686 30.51 L 224.158 29.29 C 225.139 28.476 225.63 27.459 225.63 26.239 L 225.63 20.137 C 225.63 18.916 225.139 17.899 224.158 17.086 L 222.686 15.865 C 221.705 15.052 220.724 14.645 219.743 14.645 L 206.741 14.645 C 205.76 14.645 204.779 15.052 203.797 15.865 L 202.325 17.086 C 201.344 17.899 200.853 18.916 200.853 20.137 L 200.853 22.578 L 206.005 22.578 L 206.005 21.418 C 206.005 20.808 206.046 20.421 206.128 20.259 C 206.169 20.055 206.373 19.811 206.741 19.527 C 207.109 19.242 207.395 19.079 207.6 19.038 C 207.804 18.957 208.274 18.916 209.01 18.916 L 217.473 18.916 C 218.209 18.916 218.68 18.957 218.884 19.038 C 219.088 19.079 219.375 19.242 219.743 19.527 C 220.111 19.811 220.335 20.055 220.417 20.259 C 220.458 20.421 220.479 20.808 220.479 21.418 L 220.479 24.957 C 220.479 25.568 220.458 25.974 220.417 26.178 C 220.335 26.34 220.111 26.564 219.743 26.849 C 219.375 27.134 219.088 27.317 218.884 27.398 C 218.68 27.439 218.209 27.459 217.473 27.459 L 206.741 27.459 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path fill=\"currentColor\" d=\"M 173.981 27.459 C 172.999 27.459 172.018 27.866 171.037 28.68 L 169.565 29.9 C 168.584 30.714 168.093 31.731 168.093 32.951 L 168.093 39.663 C 168.093 40.884 168.584 41.901 169.565 42.714 L 171.037 43.935 C 172.018 44.748 172.999 45.155 173.981 45.155 L 187.596 45.155 C 188.577 45.155 189.558 44.748 190.539 43.935 L 192.011 42.714 C 192.992 41.901 193.483 40.884 193.483 39.663 L 193.483 37.222 L 188.332 37.222 L 188.332 38.382 C 188.332 38.992 188.311 39.399 188.27 39.602 C 188.188 39.765 187.964 39.989 187.596 40.273 C 187.228 40.558 186.941 40.741 186.737 40.823 C 186.533 40.863 186.062 40.884 185.326 40.884 L 176.25 40.884 C 175.514 40.884 175.044 40.863 174.839 40.823 C 174.635 40.741 174.349 40.558 173.981 40.273 C 173.613 39.989 173.408 39.765 173.367 39.602 C 173.286 39.399 173.245 38.992 173.245 38.382 L 173.245 33.439 C 173.286 33.114 173.531 32.748 173.981 32.341 C 174.349 32.056 174.635 31.893 174.839 31.853 C 175.044 31.771 175.514 31.731 176.25 31.731 L 186.982 31.731 C 187.964 31.731 188.945 31.324 189.926 30.51 L 191.398 29.29 C 192.379 28.476 192.87 27.459 192.87 26.239 L 192.87 20.137 C 192.87 18.916 192.379 17.899 191.398 17.086 L 189.926 15.865 C 188.945 15.052 187.964 14.645 186.982 14.645 L 173.981 14.645 C 172.999 14.645 172.018 15.052 171.037 15.865 L 169.565 17.086 C 168.584 17.899 168.093 18.916 168.093 20.137 L 168.093 22.578 L 173.245 22.578 L 173.245 21.418 C 173.245 20.808 173.286 20.421 173.367 20.259 C 173.408 20.055 173.613 19.811 173.981 19.527 C 174.349 19.242 174.635 19.079 174.839 19.038 C 175.044 18.957 175.514 18.916 176.25 18.916 L 184.713 18.916 C 185.449 18.916 185.919 18.957 186.124 19.038 C 186.328 19.079 186.614 19.242 186.982 19.527 C 187.35 19.811 187.575 20.055 187.657 20.259 C 187.698 20.421 187.718 20.808 187.718 21.418 L 187.718 24.957 C 187.718 25.568 187.698 25.974 187.657 26.178 C 187.575 26.34 187.35 26.564 186.982 26.849 C 186.614 27.134 186.328 27.317 186.124 27.398 C 185.919 27.439 185.449 27.459 184.713 27.459 L 173.981 27.459 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path fill=\"currentColor\" d=\"M 239.011 45.155 L 233.859 45.155 L 233.859 14.645 L 239.011 14.645 L 239.011 45.155 Z M 239.563 5.126 L 239.563 5.614 C 239.563 6.387 239.522 6.875 239.44 7.078 C 239.399 7.282 239.215 7.526 238.888 7.811 C 238.561 8.136 237.805 8.299 236.619 8.299 L 236.312 8.299 C 235.413 8.299 234.861 8.278 234.656 8.238 C 234.452 8.197 234.207 8.055 233.92 7.811 C 233.634 7.526 233.45 7.282 233.368 7.078 C 233.328 6.875 233.307 6.387 233.307 5.614 L 233.307 5.126 C 233.307 4.353 233.328 3.865 233.368 3.661 C 233.45 3.458 233.655 3.214 233.982 2.929 C 234.227 2.685 234.452 2.543 234.656 2.502 C 234.861 2.461 235.413 2.441 236.312 2.441 L 236.558 2.441 C 237.784 2.441 238.581 2.604 238.949 2.929 C 239.236 3.214 239.399 3.458 239.44 3.661 C 239.522 3.865 239.563 4.353 239.563 5.126 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path fill=\"currentColor\" d=\"M 266.113 27.459 C 267.094 27.459 268.075 27.866 269.056 28.68 L 270.528 29.9 C 271.509 30.714 272 31.731 272 32.951 L 272 39.663 C 272 40.884 271.509 41.901 270.528 42.714 L 269.056 43.935 C 268.075 44.748 267.094 45.155 266.113 45.155 L 252.498 45.155 C 251.516 45.155 250.535 44.748 249.554 43.935 L 248.082 42.714 C 247.101 41.901 246.61 40.884 246.61 39.663 L 246.61 37.222 L 251.762 37.222 L 251.762 38.382 C 251.762 38.992 251.782 39.399 251.823 39.602 C 251.905 39.765 252.13 39.989 252.498 40.273 C 252.866 40.558 253.152 40.741 253.356 40.823 C 253.561 40.863 254.031 40.884 254.767 40.884 L 263.843 40.884 C 264.579 40.884 265.049 40.863 265.254 40.823 C 265.458 40.741 265.745 40.558 266.113 40.273 C 266.48 39.989 266.685 39.765 266.726 39.602 C 266.808 39.399 266.848 38.992 266.848 38.382 L 266.848 33.439 C 266.808 33.114 266.562 32.748 266.113 32.341 C 265.745 32.056 265.458 31.893 265.254 31.853 C 265.049 31.771 264.579 31.731 263.843 31.731 L 253.111 31.731 C 252.13 31.731 251.148 31.324 250.167 30.51 L 248.695 29.29 C 247.714 28.476 247.223 27.459 247.223 26.239 L 247.223 20.137 C 247.223 18.916 247.714 17.899 248.695 17.086 L 250.167 15.865 C 251.148 15.052 252.13 14.645 253.111 14.645 L 266.113 14.645 C 267.094 14.645 268.075 15.052 269.056 15.865 L 270.528 17.086 C 271.509 17.899 272 18.916 272 20.137 L 272 22.578 L 266.848 22.578 L 266.848 21.418 C 266.848 20.808 266.808 20.421 266.726 20.259 C 266.685 20.055 266.48 19.811 266.113 19.527 C 265.745 19.242 265.458 19.079 265.254 19.038 C 265.049 18.957 264.579 18.916 263.843 18.916 L 255.38 18.916 C 254.644 18.916 254.174 18.957 253.97 19.038 C 253.765 19.079 253.479 19.242 253.111 19.527 C 252.743 19.811 252.518 20.055 252.436 20.259 C 252.395 20.421 252.375 20.808 252.375 21.418 L 252.375 24.957 C 252.375 25.568 252.395 25.974 252.436 26.178 C 252.518 26.34 252.743 26.564 253.111 26.849 C 253.479 27.134 253.765 27.317 253.97 27.398 C 254.174 27.439 254.644 27.459 255.38 27.459 L 266.113 27.459 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path fill=\"currentColor\" d=\"M 22.636 37.705 L 26.581 37.705 L 26.581 38.918 C 26.581 39.556 26.612 39.96 26.675 40.13 C 26.706 40.343 26.862 40.598 27.144 40.896 C 27.426 41.193 27.645 41.364 27.801 41.406 C 27.958 41.491 28.318 41.534 28.881 41.534 L 40.527 41.534 C 41.09 41.534 41.45 41.491 41.607 41.406 C 41.763 41.364 41.982 41.193 42.264 40.896 C 42.546 40.598 42.718 40.343 42.78 40.13 C 42.812 39.96 42.827 39.556 42.827 38.918 L 42.827 8.419 C 42.827 7.781 42.812 7.356 42.78 7.143 C 42.718 6.973 42.546 6.739 42.264 6.441 C 41.982 6.143 41.763 5.952 41.607 5.867 C 41.45 5.824 41.09 5.803 40.527 5.803 L 28.881 5.803 C 28.318 5.803 27.958 5.824 27.801 5.867 C 27.645 5.952 27.426 6.143 27.144 6.441 C 26.862 6.739 26.706 6.973 26.675 7.143 C 26.612 7.356 26.581 7.781 26.581 8.419 L 26.581 37.705 L 20.191 9.631 L 22.636 7.079 C 22.636 5.803 23.012 4.74 23.763 3.889 L 24.89 2.613 C 25.642 1.762 26.393 1.337 27.144 1.337 L 42.264 1.337 C 43.015 1.337 43.767 1.762 44.518 2.613 L 45.645 3.889 C 46.396 4.74 46.772 5.803 46.772 7.079 L 46.772 40.258 C 46.772 41.534 46.396 42.597 45.645 43.448 L 44.518 44.724 C 43.767 45.575 43.015 46 42.264 46 L 27.144 46 C 26.393 46 25.642 45.575 24.89 44.724 L 23.763 43.448 C 23.012 42.597 22.636 41.534 22.636 40.258 L 22.636 37.705 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path> <path fill=\"currentColor\" d=\"M 24.135 9.631 L 20.191 9.631 L 20.191 8.419 C 20.191 7.781 20.16 7.377 20.097 7.207 C 20.066 6.994 19.909 6.739 19.628 6.441 C 19.346 6.143 19.127 5.973 18.97 5.931 C 18.814 5.846 18.454 5.803 17.89 5.803 L 6.245 5.803 C 5.682 5.803 5.322 5.846 5.165 5.931 C 5.009 5.973 4.79 6.143 4.508 6.441 C 4.226 6.739 4.054 6.994 3.991 7.207 C 3.96 7.377 3.944 7.781 3.944 8.419 L 3.944 38.918 C 3.944 39.556 3.96 39.981 3.991 40.194 C 4.054 40.364 4.226 40.598 4.508 40.896 C 4.79 41.193 5.009 41.385 5.165 41.47 C 5.322 41.512 5.682 41.534 6.245 41.534 L 17.89 41.534 C 18.454 41.534 18.814 41.512 18.97 41.47 C 19.127 41.385 19.346 41.193 19.628 40.896 C 19.909 40.598 20.066 40.364 20.097 40.194 C 20.16 39.981 20.191 39.556 20.191 38.918 L 20.191 9.631 L 24.135 37.705 L 24.135 40.258 C 24.135 41.534 23.76 42.597 23.009 43.448 L 21.882 44.724 C 21.13 45.575 20.379 46 19.628 46 L 4.508 46 C 3.756 46 3.005 45.575 2.254 44.724 L 1.127 43.448 C 0.376 42.597 0 41.534 0 40.258 L 0 7.079 C 0 5.803 0.376 4.74 1.127 3.889 L 2.254 2.613 C 3.005 1.762 3.756 1.337 4.508 1.337 L 19.628 1.337 C 20.379 1.337 21.13 1.762 21.882 2.613 L 23.008 3.889 C 23.76 4.74 24.135 5.803 24.135 7.079 L 24.135 9.631 Z\" fill=\"currentColor\" fill-rule=\"nonzero\"></path>"
  }
};
Object.assign(__ds_scope, { logoArt });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/logo-art.js", error: String((e && e.message) || e) }); }

// components/brand/ChassisLogo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  logo: {
    art: __ds_scope.logoArt.mark,
    ratio: 46.772 / 44.663
  },
  "logo with text": {
    art: __ds_scope.logoArt.wordmark,
    ratio: 272 / 46
  }
};

/** The Chassis brand mark. Two variants, exactly as the source file defines them. */
function ChassisLogo({
  type = "logo",
  height = 46,
  color = "var(--color-on-surface-default)",
  title = "Chassis",
  style,
  ...rest
}) {
  const v = VARIANTS[type] || VARIANTS.logo;
  return /*#__PURE__*/React.createElement("svg", _extends({
    role: "img",
    "aria-label": title,
    viewBox: v.art.vb,
    width: height * v.ratio,
    height: height,
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    style: {
      display: "inline-block",
      color,
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: v.art.inner
    }
  }));
}
Object.assign(__ds_scope, { ChassisLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ChassisLogo.jsx", error: String((e && e.message) || e) }); }

// components/document/PageFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Documentation page footer — centred copyright line plus the Chassis mark.
 * Geometry transcribed from the source file: 71px tall, 12px radius, #F1F1F1.
 */
function PageFooter({
  copyright = "\u00a9 2026",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({}, rest, {
    style: {
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "16px 32px",
      justifyContent: "center",
      alignItems: "center",
      height: 71,
      borderRadius: 12,
      background: "rgb(241,241,241)",
      fontFamily: "var(--ds-font)",
      boxSizing: "border-box",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "28px",
      color: "rgb(0,0,0)",
      whiteSpace: "nowrap"
    }
  }, copyright), /*#__PURE__*/React.createElement(__ds_scope.ChassisLogo, {
    type: "logo",
    height: 39,
    color: "rgb(0,0,0)"
  }));
}
Object.assign(__ds_scope, { PageFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/PageFooter.jsx", error: String((e && e.message) || e) }); }

// components/document/PageHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Documentation page header — the black bar that tops every Chassis spec page.
 * Geometry transcribed from the source file: 97px tall, 12px radius, black fill.
 */
function PageHeader({
  title = "Title",
  lastUpdated = "Last updated date: 17 April 2026",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    "data-surface": "inverse"
  }, rest, {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: 97,
      borderRadius: 12,
      background: "rgb(0,0,0)",
      padding: "0 32px",
      fontFamily: "var(--ds-font)",
      boxSizing: "border-box",
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ChassisLogo, {
    type: "logo",
    height: 65,
    color: "rgb(255,255,255)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: "center",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: "28px",
      color: "rgb(255,255,255)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 18,
      lineHeight: "28px",
      color: "rgb(255,255,255)",
      textAlign: "right",
      whiteSpace: "nowrap"
    }
  }, lastUpdated));
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/PageHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/token-docs/doc-parts.jsx
try { (() => {
const mono = '"Roboto Mono", ui-monospace, SFMono-Regular, monospace';
function SectionTitle({
  index,
  kicker,
  title,
  lede
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "rgb(120,120,120)"
    }
  }, index, " \u2014 ", kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 40,
      lineHeight: "44px",
      fontWeight: 700,
      letterSpacing: "-0.01em"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: "24px",
      color: "rgb(79,79,79)",
      maxWidth: 720
    }
  }, lede));
}
function Rule() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "rgb(240,240,240)"
    }
  });
}
function Stat({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      minWidth: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 10,
      letterSpacing: "0.14em",
      color: "rgb(120,120,120)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      lineHeight: "32px",
      fontWeight: 700
    }
  }, value));
}
function Table({
  head,
  rows,
  cols
}) {
  const grid = cols || `repeat(${head.length}, 1fr)`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid rgb(240,240,240)",
      borderRadius: 6,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: grid,
      gap: 16,
      padding: "10px 16px",
      background: "rgb(249,249,249)",
      borderBottom: "1px solid rgb(240,240,240)"
    }
  }, head.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: mono,
      fontSize: 10,
      letterSpacing: "0.12em",
      color: "rgb(120,120,120)"
    }
  }, h))), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: grid,
      gap: 16,
      padding: "9px 16px",
      borderBottom: i === rows.length - 1 ? "none" : "1px solid rgb(240,240,240)",
      alignItems: "center"
    }
  }, r.map((c, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      fontFamily: j === 0 ? mono : "inherit",
      fontSize: j === 0 ? 12 : 13,
      lineHeight: "20px",
      color: j === 0 ? "rgb(0,0,0)" : "rgb(79,79,79)"
    }
  }, c)))));
}
function Swatch({
  token,
  hex,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      borderRadius: 4,
      background: hex,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 11
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 10,
      color: "rgb(120,120,120)"
    }
  }, token));
}
Object.assign(window, {
  mono,
  SectionTitle,
  Rule,
  Stat,
  Table,
  Swatch
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/token-docs/doc-parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/token-docs/screen-overview.jsx
try { (() => {
function ScreenOverview() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 11,
      letterSpacing: "0.14em",
      color: "rgb(120,120,120)"
    }
  }, "01 \u2014 SYSTEM ARCHITECTURE"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 56,
      lineHeight: "60px",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      maxWidth: 900
    }
  }, "Design Tokens"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: "28px",
      color: "rgb(79,79,79)",
      maxWidth: 760
    }
  }, "A two-tier token system. Primitives define raw values. Semantics assign meaning and adapt across brand modes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 64,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "PRIMITIVES",
    value: "429"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "SEMANTICS",
    value: "278"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "MODES",
    value: "13"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "VERSION",
    value: "v1.0"
  }))), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24
    }
  }, [["Primitive", "Raw values. Brand-agnostic. The complete palette of options available to the system. Never consumed directly in products.", [["NAMING", "category/group/step"], ["EXAMPLE", "color/neutral/700"], ["CONSUMERS", "Semantics only"]]], ["Semantic", "Role-based tokens that reference primitives. Carry meaning — what the value is for, not what the value is. Adapt across brand themes.", [["NAMING", "category/role/variant"], ["EXAMPLE", "color/surface/default"], ["CONSUMERS", "Products & components"]]]].map(([t, d, rows], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      border: "1px solid rgb(240,240,240)",
      borderRadius: 12,
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      lineHeight: "32px",
      fontWeight: 700
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(79,79,79)"
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      marginTop: 4
    }
  }, rows.map(([k, v], j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      display: "grid",
      gridTemplateColumns: "110px 1fr",
      gap: 12,
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mono,
      fontSize: 10,
      letterSpacing: "0.12em",
      color: "rgb(120,120,120)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mono,
      fontSize: 12
    }
  }, v))))))), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 11,
      letterSpacing: "0.14em",
      color: "rgb(120,120,120)"
    }
  }, "07 \u2014 RELATIONSHIPS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700
    }
  }, "How a token resolves."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "stretch",
      gap: 12,
      flexWrap: "wrap"
    }
  }, [["COMPONENT", "Button / primary / bg", "Applied in product"], ["SEMANTIC", "color/surface/brand-primary", "Role token"], ["PRIMITIVE", "color/fun-blue/900", "Palette step"], ["VALUE", "#0B1F41", "Raw hex"]].map(([k, v, n], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 190,
      border: "1px solid rgb(240,240,240)",
      borderRadius: 6,
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 10,
      letterSpacing: "0.12em",
      color: "rgb(120,120,120)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 13
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "rgb(120,120,120)"
    }
  }, n)), i < 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "center",
      fontFamily: mono,
      color: "rgb(176,176,176)"
    }
  }, "\u2192"))))));
}
window.ScreenOverview = ScreenOverview;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/token-docs/screen-overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/token-docs/screen-primitives.jsx
try { (() => {
const RAMPS = {
  neutral: [["50", "#F9F9F9"], ["100", "#F0F0F0"], ["200", "#D8D8D8"], ["300", "#B0B0B0"], ["400", "#878787"], ["500", "#787878"], ["600", "#696969"], ["700", "#4F4F4F"], ["800", "#343434"], ["900", "#1A1A1A"], ["1000", "#000000"]],
  navy: [["100", "#EEF1F7"], ["200", "#D5DCF0"], ["300", "#9FAECC"], ["400", "#607598"], ["500", "#355077"], ["600", "#1C3660"], ["700", "#0B1F41"], ["800", "#071429"], ["900", "#030A14"]],
  blue: [["50", "#EBF0FA"], ["100", "#CCDAF5"], ["200", "#99B8EC"], ["300", "#5589DE"], ["400", "#2563D4"], ["500", "#025FEA"], ["600", "#014EC0"], ["700", "#005BAA"], ["800", "#00346B"], ["900", "#00102A"]],
  orange: [["50", "#FFF0EB"], ["100", "#FFDBCC"], ["200", "#FFB899"], ["300", "#FF9066"], ["400", "#F76833"], ["500", "#F35218"], ["600", "#EF4100"], ["700", "#C23500"], ["800", "#8A2600"], ["900", "#521700"]],
  red: [["50", "#FBE5E6"], ["100", "#F9CDD0"], ["200", "#F5A4A8"], ["300", "#F07A7F"], ["400", "#EA5058"], ["500", "#E22530"], ["600", "#D60008"], ["700", "#A8000A"], ["800", "#780008"], ["900", "#480005"]],
  green: [["50", "#E5F5ED"], ["100", "#C8EDD9"], ["200", "#96E8BE"], ["300", "#5CF4A2"], ["400", "#2FDB7F"], ["500", "#10CD65"], ["600", "#06C655"], ["700", "#059944"], ["800", "#046B30"], ["900", "#023D1C"]],
  yellow: [["50", "#FFF9E8"], ["100", "#FFF3CC"], ["200", "#FFE999"], ["300", "#FFDC66"], ["400", "#FFCF33"], ["500", "#FFCA1A"], ["600", "#FFC61A"], ["700", "#CC9E00"], ["800", "#997600"], ["900", "#664F00"]]
};
function Ramp({
  name,
  steps
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 11,
      letterSpacing: "0.1em",
      color: "rgb(120,120,120)"
    }
  }, "color/", name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2
    }
  }, steps.map(([s, hex]) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 52,
      background: hex,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 9,
      color: "rgb(120,120,120)"
    }
  }, s), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 9,
      color: "rgb(176,176,176)"
    }
  }, hex)))));
}
function ScreenPrimitives() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    index: "04",
    kicker: "PRIMITIVES",
    title: "The raw material.",
    lede: "Primitives are brand-agnostic values with a single mode. They are the full palette available to semantics. Products should not reference primitives directly \u2014 doing so bypasses the mode system."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, Object.entries(RAMPS).map(([n, s]) => /*#__PURE__*/React.createElement(Ramp, {
    key: n,
    name: n,
    steps: s
  }))), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "rgb(120,120,120)"
    }
  }, "FONT SIZE"), /*#__PURE__*/React.createElement(Table, {
    head: ["TOKEN", "VALUE"],
    rows: [["font/size/10", "10px"], ["font/size/11", "11px"], ["font/size/12", "12px"], ["font/size/13", "13px"], ["font/size/14", "14px"], ["font/size/16", "16px"], ["font/size/18", "18px"], ["font/size/22", "22px"], ["font/size/28", "28px"], ["font/size/32", "32px"], ["font/size/48", "48px"], ["font/size/52", "52px"], ["font/size/60", "60px"], ["font/size/140", "140px"]]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "rgb(120,120,120)"
    }
  }, "BORDER & RADIUS"), /*#__PURE__*/React.createElement(Table, {
    head: ["TOKEN", "VALUE"],
    rows: [["border/width/0", "0px"], ["border/width/0-5", "0.5px"], ["border/width/1", "1px"], ["border/width/1-5", "1.5px"], ["border/width/2", "2px"], ["border/width/3", "3px"], ["border/radius/0", "0px"], ["border/radius/2", "2px"], ["border/radius/4", "4px"], ["border/radius/6", "6px"], ["border/radius/10", "10px"], ["border/radius/12", "12px"], ["border/radius/16", "16px"], ["border/radius/18", "18px"], ["border/radius/32", "32px"], ["border/radius/99", "99px"]]
  }))));
}
window.ScreenPrimitives = ScreenPrimitives;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/token-docs/screen-primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/token-docs/screen-semantics.jsx
try { (() => {
function ScreenSemantics() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    index: "05",
    kicker: "SEMANTICS",
    title: "Roles, not raw values.",
    lede: "Every semantic token resolves to a primitive \u2014 and resolves differently depending on the active mode. Products should reference semantics exclusively."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "rgb(120,120,120)"
    }
  }, "TYPOGRAPHY"), /*#__PURE__*/React.createElement(Table, {
    cols: "220px 130px 1fr",
    head: ["TOKEN", "SPECS", "PREVIEW"],
    rows: [["typography/display/xxl", "60 / 76 · bold", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 26,
        fontWeight: 700
      }
    }, "Ag \u2014 sample text")], ["typography/display/xl", "52 / 64 · bold", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 24,
        fontWeight: 700
      }
    }, "Ag \u2014 sample text")], ["typography/heading/lg", "48 / 56 · bold", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22,
        fontWeight: 700
      }
    }, "Ag \u2014 sample text")], ["typography/heading/md", "32 / 36 · bold", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 19,
        fontWeight: 700
      }
    }, "Ag \u2014 sample text")], ["typography/heading/sm", "28 / 36 · bold", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 17,
        fontWeight: 700
      }
    }, "Ag \u2014 sample text")], ["typography/subtitle/lg", "22 / 28 · medium", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 500
      }
    }, "Ag \u2014 sample text")], ["typography/subtitle/md", "18 / 24 · medium", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 500
      }
    }, "Ag \u2014 sample text")], ["typography/body/lg", "16 / 24 · regular", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16
      }
    }, "Ag \u2014 sample text")], ["typography/body/md", "14 / 20 · regular", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14
      }
    }, "Ag \u2014 sample text")], ["typography/body/sm", "12 / 20 · regular", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12
      }
    }, "Ag \u2014 sample text")], ["typography/label/xl", "16 / 20 · semibold", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 600
      }
    }, "Ag \u2014 sample text")], ["typography/label/md", "12 / 16 · regular", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12
      }
    }, "Ag \u2014 sample text")], ["typography/label/xs", "10 / 12 · regular", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10
      }
    }, "Ag \u2014 sample text")]]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "rgb(120,120,120)"
    }
  }, "SPACING"), /*#__PURE__*/React.createElement(Table, {
    head: ["TOKEN", "RESOLVES TO", "VALUE"],
    rows: [["spacing/component/2xs", "→ spacing/2", "2px"], ["spacing/component/xs", "→ spacing/4", "4px"], ["spacing/component/sm", "→ spacing/8", "8px"], ["spacing/component/md", "→ spacing/12", "12px"], ["spacing/component/lg", "→ spacing/16", "16px"], ["spacing/component/xl", "→ spacing/24", "24px"], ["spacing/component/2xl", "→ spacing/32", "32px"], ["spacing/component/3xl", "→ spacing/40", "40px"], ["spacing/component/4xl", "→ spacing/48", "48px"]]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "rgb(120,120,120)"
    }
  }, "RADIUS \u2014 WHITE-LABEL vs BRAND THEME"), /*#__PURE__*/React.createElement(Table, {
    head: ["TOKEN", "WHITE-LABEL", "BRAND THEME"],
    rows: [["radius/button/md", "→ radius/0 · 0px", "→ radius/6 · 6px"], ["radius/input", "→ radius/0 · 0px", "→ radius/6 · 6px"], ["radius/badge", "→ radius/0 · 0px", "→ radius/4 · 4px"], ["radius/card", "→ radius/0 · 0px", "→ radius/18 · 18px"], ["radius/chip", "→ radius/0 · 0px", "→ radius/99 · 99px"], ["radius/alert", "→ radius/0 · 0px", "→ radius/12 · 12px"], ["radius/circular", "→ radius/99 · 99px", "→ radius/99 · 99px"]]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "rgb(120,120,120)"
    }
  }, "CONTROL & ICON SIZE"), /*#__PURE__*/React.createElement(Table, {
    head: ["TOKEN", "RESOLVES TO", "VALUE"],
    rows: [["size/controls/xs", "→ size/32", "32px"], ["size/controls/sm", "→ size/36", "36px"], ["size/controls/md", "→ size/40", "40px"], ["size/controls/lg", "→ size/44", "44px"], ["size/controls/xl", "→ size/48", "48px"], ["size/icons/sm", "→ size/16", "16px"], ["size/icons/md", "→ size/20", "20px"], ["size/icons/lg", "→ size/24", "24px"]]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "rgb(120,120,120)"
    }
  }, "LAYOUT \xB7 SHADOW \xB7 STATE"), /*#__PURE__*/React.createElement(Table, {
    head: ["TOKEN", "RESOLVES TO", "VALUE / NOTE"],
    rows: [["layout/breakpoint/sm", "→ breakpoint/sm", "375px"], ["layout/breakpoint/lg", "→ breakpoint/lg", "1024px"], ["layout/breakpoint/2xl", "→ breakpoint/2xl", "1440px"], ["layout/grid/columns/desktop", "12", "12 cols"], ["layout/grid/gutter/desktop", "→ spacing/32", "32px"], ["shadow/alpha5", "→ alpha/black-5", "#000 5% · low elevation"], ["shadow/alpha10", "→ alpha/black-10", "#000 10% · standard"], ["state/disabled", "→ opacity/50", "50% on disabled controls"]]
  }))));
}
window.ScreenSemantics = ScreenSemantics;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/token-docs/screen-semantics.jsx", error: String((e && e.message) || e) }); }

// ui_kits/token-docs/screen-usage.jsx
try { (() => {
function Card({
  n,
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "48px 1fr",
      gap: 20,
      padding: "20px 0",
      borderTop: "1px solid rgb(240,240,240)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 13,
      color: "rgb(176,176,176)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: "21px",
      color: "rgb(79,79,79)",
      maxWidth: 760
    }
  }, body)));
}
function ScreenUsage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    index: "08",
    kicker: "USAGE",
    title: "Rules, constraints, implementation notes.",
    lede: "Apply these rules to keep the system maintainable. They are derived from how the tokens are structured today \u2014 breaking them will break the multi-brand model."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "rgb(120,120,120)",
      marginBottom: 8
    }
  }, "DO"), [["Name new tokens by role, not appearance.", "surface/subtle survives a rebrand. gray-100 does not."], ["Reuse existing roles before adding new ones.", "If a surface, on-surface, or border token already fits, use it. New roles dilute the layer."], ["Keep mode-invariant things mode-invariant.", "Feedback, overlay, breakpoints, and spacing rhythm are platform-level. Do not bind them to a brand."], ["Test new brands by adding a mode.", "A new brand should be a new mode column — not a new token set."]].map(([t, b], i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    n: String(i + 1).padStart(2, "0"),
    title: t,
    body: b
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "rgb(120,120,120)",
      marginBottom: 8
    }
  }, "DON'T"), [["Don't inline hex, px, or font values.", "Raw values detach from the token graph and won't update when the system updates."], ["Don't create semantic tokens for single-use cases.", "If a value is used in one place, it is not a role — it is a style. Ship it in the component."], ["Don't rebrand by editing primitives.", "Edit the mode's alias mapping. Primitives are shared across all brands and should remain stable."], ["Don't mix typography scales.", "Stay within display / heading / subtitle / body / button / label. Cross-category reuse creates brittle hierarchy."]].map(([t, b], i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    n: String(i + 1).padStart(2, "0"),
    title: t,
    body: b
  })))), /*#__PURE__*/React.createElement(Rule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "rgb(120,120,120)"
    }
  }, "IMPLEMENTATION NOTES"), [["Shadow tokens define color, not composition.", "Only shadow/alpha5 and shadow/alpha10 exist as tokens. X, Y, blur, and spread live in code."], ["Typography family is the only mode-aware type token.", "Size, line-height, weight, and letter-spacing resolve identically in every mode."], ["Radii collapse to zero in White-Label.", "White-Label uses square corners by design; radius/circular is the sole exception."], ["Feedback colors do not rebrand.", "negative, warning and info use the same primitive across modes. positive shifts slightly."], ["Primitive color count exceeds what modes use today.", "The palette includes families no current mode consumes — headroom, not dead weight."], ["No dark mode.", "Modes today are Brand Themes, not color schemes. Dark would be an additional axis."]].map(([t, b], i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    n: String(i + 2).padStart(2, "0"),
    title: t,
    body: b
  }))));
}
window.ScreenUsage = ScreenUsage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/token-docs/screen-usage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ChassisLogo = __ds_scope.ChassisLogo;

__ds_ns.PageFooter = __ds_scope.PageFooter;

__ds_ns.PageHeader = __ds_scope.PageHeader;

})();
