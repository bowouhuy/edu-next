'use client'


import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode } from 'react'

interface Props {
    children?: ReactNode
}

export default function Providers({ children }: Props) {
    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

// import { SessionProvider } from "next-auth/react"
// import React, { ReactNode} from "react"


// interface Props {
//     children: ReactNode;
// }

// function Providers({ children }: Props) {
//     return <SessionProvider>{children}</SessionProvider>
// }

// export default Providers;
