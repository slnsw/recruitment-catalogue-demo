'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
    return (
        <div>
            <img src="https://www.sl.nsw.gov.au/themes/custom/slnsw_d10/logo.000.svg" loading="lazy" />
            <h1>Catalogue</h1>
            {usePathname !== '/' && (
                <p>go home <Link href="/">click here</Link></p>
            )}
            </div>
    );
}


export default Header
