'use client';

import { WebAppProvider, MainButton, BackButton } from '@vkruglikov/react-telegram-web-app';

<main>
    <WebAppProvider
        options={{
            smoothButtonsTransition: true,
        }}
    >
        <MainButton  />
        <BackButton  />
    </WebAppProvider>
</main>