import { QRCodeCanvas } from 'qrcode.react';
import Error from '../ui/Error';
import { useRef } from 'react';

function GeneratedQRCode({ content }) {
    const canvasRef = useRef();
    if(!content) return <Error>Oops! You didn't enter a link!</Error>;
    if(!content.startsWith('https') && !content.startsWith('www') || content.length < 12) return <Error>A error has occured, please enter a valid link.</Error>

    function handleDownload() {
        console.log(canvasRef)
        const qrCode = canvasRef.current.children[0];
        const qrCodeToPNG = qrCode.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.download = "QRGenPlus-qrcode";
        downloadLink.href = `${qrCodeToPNG}`;
        downloadLink.click();
    }
    
    return <section className='flex items-center justify-center gap-4 p-8 -z-10'>
        <figure>
            <picture ref={canvasRef}>
                <QRCodeCanvas
                        value={content}
                        size={150}
                        bgColor={"#ffffff"}
                        fgColor={"#000000"}
                        level={"L"}
                        includeMargin={false}
                        imageSettings={{
                            excavate: true,
                        }}
                />
            </picture>
        </figure>
        <div className='p-4 w-52 text-clip'>
            <p className='text-xl font-light text-left text-textColor'>🥳 Great news, Your link is ready. Support us on</p>
            <a
            className='block text-xl font-light text-left underline text-textColor'
            target='_blank' rel='noreferrer noopener' href='https://github.com/notlambo'>
                Github!
            </a>
            <button
            className='p-2 text-lg duration-300 rounded-lg bg-accent text-secondaryTextColor font-extralight active:bg-primary hover:cursor-pointer'
            onClick={handleDownload}
            >
                Download Now
            </button>
        </div>
    </section>
}

export default GeneratedQRCode;