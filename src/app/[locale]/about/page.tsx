import {createTranslation} from '@/utils/localization/server';
import {LocaleTypes} from "@/utils/localization/settings";

export default async function Home ({params: {locale}}: {
    params: { locale: LocaleTypes}
})  {
    // Make sure to use the correct namespace here.
    const {t} = await createTranslation(locale, 'about');

    return (
        <div className="test-container">
            <h1>{t('aboutThisPage')}</h1>
        </div>
    );
};