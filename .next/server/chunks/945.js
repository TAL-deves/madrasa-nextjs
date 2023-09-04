exports.id = 945;
exports.ids = [945];
exports.modules = {

/***/ 3049:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23))

/***/ }),

/***/ 4452:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6971));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23))

/***/ }),

/***/ 6971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2196);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2050);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apiHandler_customApiHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9988);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Navbar(props) {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const [isDrawerOpen, setIsDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const toggleDrawer = ()=>{
        setIsDrawerOpen(!isDrawerOpen);
        console.log(isDrawerOpen);
    };
    const handleLogOut = async ()=>{
        // setError('');
        //  setIsLoading(true);
        try {
            const data = await (0,_apiHandler_customApiHandler__WEBPACK_IMPORTED_MODULE_4__/* .logoutHandler */ .Sl)("/auth/logout");
            // Handle the response data
            if (data.success === true) {
                router.push("/");
                window.location.reload();
                // router.replace("/");
                console.log("logged in", data);
            }
            // setShow(false);
            console.log("login response", data);
        } catch (error) {
            // Handle the error
            // setShow(false);
            console.log(error);
        }
    // setIsLoading(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: ` shadow-black sticky top-0 z-10 bg-[#032216]`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container mx-auto ",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: toggleDrawer,
                            className: "text-white p-2 focus:outline-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                className: "h-6 w-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M4 6h16M4 12h16M4 18h16"
                                })
                            })
                        })
                    }),
                    isDrawerOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "block md:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "justify-start ",
                            children: props.navMenu.map((menu)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: menu.name === "প্রচ্ছদ" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center space-x-4 p-1  hover:bg-[#E07B27]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    paddingRight: "0rem"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__/* .faHome */ .J9Y,
                                                    style: {
                                                        color: "#ffffff"
                                                    },
                                                    height: "1.1rem"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "text-white ",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/",
                                                        children: "প্রচ্ছদ"
                                                    }),
                                                    " "
                                                ]
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: localStorage.getItem("accessToken") && menu.name === "লগ ইন" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "text-white px-10 hover:bg-[#E07B27] transition-bg duration-800 space-x-4 p-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    onClick: ()=>{
                                                        handleLogOut;
                                                    },
                                                    children: "লগআউট"
                                                }),
                                                " "
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "text-white px-10 hover:bg-[#E07B27] transition-bg duration-800 space-x-4 p-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: menu.link,
                                                    children: menu.name
                                                }),
                                                " "
                                            ]
                                        })
                                    })
                                }))
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden md:block",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "flex justify-start items-center",
                            children: props.navMenu.map((menu)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: menu.name === "প্রচ্ছদ" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center justify-around space-x-4 p-4 hover:bg-[#E07B27]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    paddingRight: "0rem"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__/* .faHome */ .J9Y,
                                                    style: {
                                                        color: "#ffffff"
                                                    },
                                                    height: "1.1rem"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                className: "text-white ",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: "/",
                                                        children: "প্রচ্ছদ"
                                                    }),
                                                    " "
                                                ]
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: localStorage.getItem("accessToken") && menu.name === "লগ ইন" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "text-white px-10 hover:bg-[#E07B27] transition-bg duration-800 space-x-4 p-4 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    onClick: ()=>{
                                                        handleLogOut();
                                                    },
                                                    children: "লগআউট"
                                                }),
                                                " "
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            className: "text-white px-10 hover:bg-[#E07B27] transition-bg duration-800 space-x-4 p-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: menu.link,
                                                    children: menu.name
                                                }),
                                                " "
                                            ]
                                        })
                                    })
                                }))
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 9988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  HN: () => (/* binding */ loginHandler),
  Sl: () => (/* binding */ logoutHandler)
});

// UNUSED EXPORTS: authGetRequestHandler, deleteRequestHandler, getRequestHandler, patchRequestHandler, postRequestHandler, putRequestHandler

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var lib_axios = __webpack_require__(3258);
// EXTERNAL MODULE: ./node_modules/crypto-js/index.js
var crypto_js = __webpack_require__(7683);
;// CONCATENATED MODULE: ./src/apiHandler/utils/encryption.js

// Define the encryption key and IV
const keyString = "thisIsAverySpecialSecretKey00000";
const IV = "1583288699248111";
// Convert the key and IV to CryptoJS format
const key = crypto_js.enc.Utf8.parse(keyString);
const iv = crypto_js.enc.Utf8.parse(IV);
// Encryption function
const encryptData = (data)=>{
    //   console.log("data ----- ", data);
    const response = JSON.stringify(data);
    // Encrypt the request body using AES encryption
    const encrypted = crypto_js.AES.encrypt(response, key, {
        iv: iv,
        padding: crypto_js.pad.Pkcs7,
        mode: crypto_js.mode.CBC
    });
    // Convert the encrypted data to a Base64-encoded string
    const encryptedBase64 = encrypted.ciphertext.toString(crypto_js.enc.Base64);
    //   console.log("encryptedBase64 ----- ", encryptedBase64);
    return encryptedBase64;
};
// export default encryptData;
/* harmony default export */ const encryption = (encryptData);

;// CONCATENATED MODULE: ./src/apiHandler/utils/decryption.js
// const CryptoJS = require("crypto-js");

// Define the encryption key and IV
const decryption_keyString = "thisIsAverySpecialSecretKey00000";
const decryption_IV = "1583288699248111";
// Convert the key and IV to CryptoJS format
const decryption_key = crypto_js.enc.Utf8.parse(decryption_keyString);
const decryption_iv = crypto_js.enc.Utf8.parse(decryption_IV);
// Decryption function
function decryptData(encryptedBase64) {
    // Convert the encrypted data from a Base64-encoded string to CryptoJS format
    const encryptedData = crypto_js.enc.Base64.parse(encryptedBase64);
    // Decrypt the request body using AES decryption
    const decrypted = crypto_js.AES.decrypt({
        ciphertext: encryptedData
    }, decryption_key, {
        iv: decryption_iv,
        padding: crypto_js.pad.Pkcs7,
        mode: crypto_js.mode.CBC
    });
    // Convert the decrypted data to a string and parse it as JSON
    const decryptedBody = decrypted.toString(crypto_js.enc.Utf8);
    return decryptedBody;
}
/* harmony default export */ const decryption = (decryptData);

;// CONCATENATED MODULE: ./src/apiHandler/errorHandler.js
const errorCode = {
    400: {
        code: 400,
        message: "Bad Request"
    },
    401: {
        code: 401,
        message: "Unauthorized"
    },
    402: {
        "code": 402,
        "message": "Payment Required"
    },
    403: {
        code: 403,
        message: "Forbidden"
    },
    404: {
        code: 404,
        message: "Not Found"
    },
    405: {
        code: 405,
        message: "Method Not Allowed"
    },
    406: {
        code: 406,
        message: "Not Acceptable"
    },
    407: {
        code: 407,
        message: "Proxy Authentication Required"
    },
    408: {
        code: 408,
        message: "Request Timeout"
    },
    409: {
        code: 409,
        message: "Conflict"
    },
    410: {
        code: 410,
        message: "Gone"
    },
    411: {
        code: 411,
        message: "Length Required"
    },
    412: {
        code: 412,
        message: "Precondition Failed"
    },
    413: {
        code: 413,
        message: "Request Entity Too Large"
    },
    414: {
        code: 414,
        message: "Request-URI Too Long"
    },
    415: {
        code: 415,
        message: "Unsupported Media Type"
    },
    416: {
        code: 416,
        message: "Requested Range Not Satisfiable"
    },
    417: {
        code: 417,
        message: "Expectation Failed"
    },
    418: {
        code: 418,
        message: "I'm a teapot"
    },
    420: {
        code: 420,
        message: "Enhance Your Calm"
    },
    422: {
        code: 422,
        message: "Unprocessable Entity"
    },
    423: {
        code: 423,
        message: "Locked"
    },
    424: {
        code: 424,
        message: "Failed Dependency"
    },
    425: {
        code: 425,
        message: "Reserved for WebDAV"
    },
    426: {
        code: 426,
        message: "Upgrade Required"
    },
    428: {
        code: 428,
        message: "Precondition Required"
    },
    429: {
        code: 429,
        message: "Too Many Requests"
    },
    431: {
        code: 431,
        message: "Request Header Fields Too Large"
    },
    444: {
        code: 444,
        message: "No Response"
    },
    449: {
        code: 449,
        message: "Retry With"
    },
    450: {
        code: 450,
        message: "Blocked by Windows Parental Controls"
    },
    451: {
        code: 451,
        message: "Unavailable For Legal Reasons"
    },
    499: {
        code: 499,
        message: "Client Closed Request"
    },
    500: {
        code: 500,
        message: "Internal Server Error"
    },
    503: {
        code: 503,
        message: "Service Unavailable"
    }
};

// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(9322);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
;// CONCATENATED MODULE: ./src/apiHandler/axiosInstance.js





const axiosInstance_encryption = process.env.REACT_APP_PUBLIC_ENCRYPTION || "FALSE";
const baseURL = process.env.REACT_APP_PUBLIC_APIPOINT || "https://marpapi.techanalyticaltd.com";
const axiosInstance_caxios = lib_axios/* default */.Z.create({
    baseURL: baseURL
});
axiosInstance_caxios.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    if (axiosInstance_encryption === "TRUE") {
        if (config.method === "put" || config.method === "PUT") {
            config.data = {
                data: config.data
            };
        } else {
            config.data = {
                data: encryption(config.data)
            };
        }
    }
    // else {
    //   console.log("config.data", config.data)
    //   config.data = {data: config.data };
    //   console.log("config.data 2", config.data)
    // }
    return config;
}, (error)=>{
    // Handle request errors here, if needed
    return Promise.reject(error);
});
// Add a response interceptor
axiosInstance_caxios.interceptors.response.use((response)=>{
    if (axiosInstance_encryption === "TRUE") {
        response.data.encoded = JSON.parse(decryption(response.data.encoded));
    } else {
        response.data.encoded = response.data.encoded;
    }
    return response.data.encoded;
}, (error)=>{
    //! YOU CAN DIRECTLY HANDLE ERRORS HERE!!!
    // handleCommonErrors(error.response.data.encoded);
    // console.log("axios error", error.response.data.encoded.errMsg)
    // const navigate = useNavigate();
    sweetalert2_all_default().fire({
        icon: "error",
        title: "Error...",
        text: `${error.response.data.encoded.errMsg}`
    }).then((res)=>{
        if (res.isConfirmed) {
        // window.location.reload()
        // navigate("/")
        }
    });
    return error.response.data.encoded;
});
/* harmony default export */ const axiosInstance = (axiosInstance_caxios);

;// CONCATENATED MODULE: ./src/apiHandler/customApiHandler.js



const getRequestHandler = async (url)=>{
    let responseData = await caxios.get(url);
    return responseData;
};
const postRequestHandler = async (url, bodyData)=>{
    let responseData = await axiosInstance.post(url, {
        ...bodyData
    });
    return responseData;
};
const patchRequestHandler = async ()=>{};
const putRequestHandler = async (formData)=>{
    const accessToken = localStorage.getItem("accessToken");
    const headers = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data"
    };
    let responseData;
    await axios.put(`${process.env.REACT_APP_PUBLIC_APIPOINT}/user/profile/uploadpicture`, formData, {
        headers
    }).then((response)=>{
        responseData = response.data.encoded;
    }).catch((error)=>{
        responseData = error.response.data.encoded;
    });
    return responseData;
};
const deleteRequestHandler = async (url)=>{
    let responseData = await caxios.delete(url);
    return responseData;
};
const loginHandler = async (url, phoneNumber, password)=>{
    let responseData = await postRequestHandler(url, {
        authorization: "application:secret",
        grant_type: "password",
        phoneNumber: phoneNumber,
        password: password
    });
    if (responseData.success) {
        localStorage.setItem("accessToken", responseData.data.accessToken);
        localStorage.setItem("accessTokenExpiresAt", responseData.data.accessTokenExpiresAt);
        localStorage.setItem("refreshToken", responseData.data.refreshToken);
        localStorage.setItem("refreshTokenExpiresAt", responseData.data.refreshTokenExpiresAt);
        localStorage.setItem("user", responseData.data.user);
        localStorage.setItem("createrAt", responseData.data.createrAt);
    }
    return responseData;
};
const logoutHandler = async (url)=>{
    let responseData = await postRequestHandler(url, {
        data: ""
    });
    if (responseData.success) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("accessTokenExpiresAt");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("refreshTokenExpiresAt");
        localStorage.removeItem("user");
        localStorage.removeItem("createrAt");
    }
    return responseData;
};
//SAMPLE REQUEST WITH AUTHORIZATION TOKEN
const authGetRequestHandler = async (url)=>{
    caxios.defaults.headers.common["Authorization"] = // "Bearer fc95e87e0a205c5a77ba8b7b753b91b09e53da13";
    `Bearer ${localStorage.getItem("accessToken")}`;
    let responseData = await caxios.get(url);
    return responseData;
};


/***/ }),

/***/ 7227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(7647);
var layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/Components/Navbar/Page.js

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/istiakshamimshishir/Desktop/tal-projects/madrasa-next/src/Components/Navbar/Page.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Page = (__default__);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.js
var react_fontawesome = __webpack_require__(5927);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/index.mjs
var free_brands_svg_icons = __webpack_require__(7863);
;// CONCATENATED MODULE: ./src/Components/Footer/Footer.js




function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "bg-gray-800 text-white py-4 bottom-0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container text-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-evenly",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Affiliates"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Privacy Policy"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "CCPA"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Terms & Conditions"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Sitemap"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Blog"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Contact Us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Press"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-6 mb-6 flex justify-evenly",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "p-3",
                                href: "https://www.facebook.com",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                    icon: free_brands_svg_icons/* faFacebook */.neY,
                                    height: "2rem"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "p-3",
                                href: "https://www.youtube.com",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                    icon: free_brands_svg_icons/* faYoutube */.opf,
                                    height: "2rem"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "p-3",
                                href: "https://www.twitter.com",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome.FontAwesomeIcon, {
                                    icon: free_brands_svg_icons/* faTwitter */.mdU,
                                    height: "2rem"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "\xa9 ",
                            new Date().getFullYear(),
                            " Your Company. All rights reserved."
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/Components/HeaderBanner/HeaderBanner.js


function HeaderBanner() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-[#013622] p-8",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "https://darululoomhathazari.com/media/img/head.png",
                alt: ""
            })
        })
    });
}
/* harmony default export */ const HeaderBanner_HeaderBanner = (HeaderBanner);

;// CONCATENATED MODULE: ./src/app/layout.js






const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    // const navMenu= ["Home", "About", "Services", "Contact"]
    const navMenu = [
        {
            "name": "প্রচ্ছদ",
            "link": "/"
        },
        {
            "name": "জামিয়া পরিচিতি",
            "link": "/about"
        },
        {
            "name": "ফি প্রদান",
            "link": "/payment"
        },
        {
            "name": "যোগাযোগ",
            "link": "/contact"
        },
        {
            "name": "লগ ইন",
            "link": "/login"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderBanner_HeaderBanner, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Page, {
                    navMenu: navMenu
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;