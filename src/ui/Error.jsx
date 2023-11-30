function Error({ children }) {
    return (
        <section className='p-2 m-auto my-4 bg-red-700 rounded-lg w-fit'>
            <h1 className="text-center text-gray-200">{children}</h1>
        </section>
    )
}

export default Error
