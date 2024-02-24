'use client';

import {usePathname, useParams} from 'next/navigation';
import Link from 'next/link';
import ChangeLocale from './ChangeLocale';
import {useTranslation} from '@/utils/localization/client';
import type {LocaleTypes} from '@/utils/localization/settings';

export default function Header() {
    const pathName = usePathname();
    const locale = useParams()?.locale as LocaleTypes;
    const {t} = useTranslation(locale, 'common');

    return (
        <header className="test-header">
            <nav className="test-nav">
                <Link
                    href={`/${locale}`}
                    className={
                        pathName === `/${locale}` || pathName === '/'
                            ? 'selected' : ''
                    }
                >
                    {t('home')}
                </Link>
                <Link
                    href={`/${locale}/about`}
                    className={
                        pathName === `/${locale}/about` || pathName === '/about'
                            ? 'selected' : ''
                    }
                >
                    {t('about')}
                </Link>
            </nav>
            <ChangeLocale />
        </header>
    );
};