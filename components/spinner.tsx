const LoadingSpinner = ({show}: {show:boolean}) => {
    return show && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center h-full z-[999] bg-background opacity-50">
            <svg
            className="animate-spin h-12 w-12 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            >
            <circle
                className="opacity-20"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M12 2a10 10 0 00-10 10h4a6 6 0 016-6V2z"
            ></path>
        </svg>
        </div>
    )
}

export default LoadingSpinner