import Error from 'next/error'

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const errorCode = res.ok ? false : res.status

    return {
        props: { errorCode }
    }
}

const ErrorPage = (props: { errorCode: number | false }) => {
    return (
        <>
            {props.errorCode ? (
                <Error statusCode={props.errorCode} />
            ) : (
                <div>AN UNEXPECTED ERROR HAS OCCURRED</div>
            )}
        </>
    )
}

export default ErrorPage
