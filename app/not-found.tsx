'use client'

import BasicSection from '@/components/atoms/BasicSection'
import Link from 'next/link'

export default function NotFound() {
    return (
        <BasicSection>
            <div>
                <h2>Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/">Return Home</Link>
            </div>
        </BasicSection>
    )
}