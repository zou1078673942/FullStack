import React from 'react'
import {withRouter} from 'next/router'
import Link from 'next/link'

export default withRouter(({router}) => {
    // console.log(router)
    return (
        <>
            {router.query.name}
            <Link href='/'><a>back</a></Link>
        </>
    )
})