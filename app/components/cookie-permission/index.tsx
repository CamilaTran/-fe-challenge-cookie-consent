"use client";
import Button from "../button";

interface CookiePermissionProps {
    onDeclineAll: () => void
    onAcceptAll: () => void
    onCustomCookie: () => void
}

const CookiePermission = ({ onDeclineAll, onAcceptAll, onCustomCookie }: CookiePermissionProps) => {
    return (
        <div className="sticky top-full left-0 bg-white z-50 w-full">
            <div className="lg:px-0 md:py-6 md:px-8 py-4 px-4 lg:max-w-[1216px] mx-auto">
                <span className="font-semibold text-base">We use cookies</span>
                <p className="text-sm text-neutral-600 mt-1">
                    We use cookies to enhance your browsing experience and improve our website &apos; s performance.
                    By continuing to use this site, you consent to the use of cookies. To learn more about how we use cookies and your options, please read our
                    {" "}<a className="text-indigo-700 underline" href="#">cookie policy</a>.
                </p>
                <div className="flex md:flex-row flex-col justify-between items-center mt-6 gap-2 self-stretch">
                    <Button content="Decline all" styling="tertiary" className="w-full md:w-auto" onClick={onDeclineAll} />
                    <div className="flex md:flex-row flex-col md:gap-4 gap-2 self-stretch">
                        <Button content="Allow cookies" styling="primary" onClick={onAcceptAll} />
                        <Button content="Manage cookies" styling="secondary" onClick={onCustomCookie} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CookiePermission;