(function () {
    const translations = {
        es: {
            'language.label': 'Seleccionar idioma',
            'nav.home': 'Inicio',
            'nav.about': 'Nosotros',
            'nav.about.company': 'Empresa',
            'nav.about.strategy': 'Estrategia',
            'nav.about.quality': 'Calidad',
            'nav.socialResponsibility': 'Responsabilidad Social',
            'nav.products': 'Productos',
            'nav.news': 'Noticias',
            'nav.contact': 'Contacto',
            'top.location': 'Pilas de Cangel',
            'hero.slide1.subtitle': 'Compromiso & Dedicación',
            'hero.slide1.text': 'Dan como resultado productos de la mejor calidad',
            'hero.slide1.button': 'Conozca más',
            'hero.slide2.text': 'Procesos seguros, alimentos saludables',
            'hero.slide2.button': 'Contáctenos',
            'identity.title': 'SOMOS TIERRA AZUL 1981 S.A',
            'identity.subtitle': 'MELONES DE COSTA RICA',
            'cards.quality.title': 'Calidad',
            'cards.quality.text': 'Garantizamos fruta uniforme y fresca en cada cosecha.',
            'cards.sustainable.title': 'Agricultura Sostenible',
            'cards.sustainable.text': 'Adoptamos prácticas responsables que protegen el suelo y el agua.',
            'cards.social.title': 'Responsabilidad Social',
            'cards.social.text': 'Impulsamos iniciativas comunitarias que generan bienestar y oportunidades.',
            'cards.more': 'Ver más',
            'video.title': 'Ver video',
            'video.subtitle': 'TIERRA AZUL 1981 S.A',
            'video.description': 'Nuestra actividad se ubica en Dulce Nombre, Nicoya, Guanacaste, localizado en el área de la Península de Nicoya, las principales tres actividades agrícolas son la ganadería que es una actividad anual, el cultivo del arroz secano, y la más importante actividad de la zona es la producción de melón para la exportación.',
            'products.title': 'Nuestros productos',
            'products.subtitle': 'TIERRA AZUL 1981 S.A',
            'products.description': 'Tenemos productos de alta calidad para satisfacer una creciente demanda de alimentos a una población cada día más exigente. Los altos estándares de calidad en todos nuestros procesos nos han dado como resultado melones y sandías seguros y beneficiosos para los consumidores.',
            'products.melon': 'Melón',
            'products.watermelon': 'Sandía',
            'interest.title': 'Información de interés',
            'interest.subtitle': 'Redes sociales y contactos',
            'interest.whatsapp': 'WhatsApp',
            'interest.youtube': 'YouTube',
            'interest.facebook': 'Facebook',
            'interest.contact': 'Contactar personal',
            'footer.description': 'En Tierra Azul 1981 S.A. cultivamos con pasión melones y sandías que llevan el sabor y la frescura de Costa Rica al mundo.',
            'footer.followUs': 'Síguenos',
            'footer.contactTitle': 'Dirección',
            'footer.address': 'Ubicación: De la Plaza Deporte, Pilas de Cangel 200 metros',
            'footer.phone': 'Teléfono: 4500-2389',
            'footer.email': 'Correo: waju@grupopenca.com',
            'footer.copyright': 'Copyright &copy; <a href="#">Tierra Azul 1981 S.A.</a> Todos los derechos reservados.',
            'footer.design': 'Diseñado por <a href="https://htmlcodex.com">HTML Codex</a>'
        },
        en: {
            'language.label': 'Select language',
            'nav.home': 'Home',
            'nav.about': 'About Us',
            'nav.about.company': 'Company',
            'nav.about.strategy': 'Strategy',
            'nav.about.quality': 'Quality',
            'nav.socialResponsibility': 'Social Responsibility',
            'nav.products': 'Products',
            'nav.news': 'News',
            'nav.contact': 'Contact',
            'top.location': 'Pilas de Cangel',
            'hero.slide1.subtitle': 'Commitment & Dedication',
            'hero.slide1.text': 'Result in products of the highest quality',
            'hero.slide1.button': 'Learn more',
            'hero.slide2.text': 'Safe processes, healthy food',
            'hero.slide2.button': 'Contact us',
            'identity.title': 'WE ARE TIERRA AZUL 1981 S.A',
            'identity.subtitle': 'MELONS FROM COSTA RICA',
            'cards.quality.title': 'Quality',
            'cards.quality.text': 'We deliver consistent, fresh fruit in every harvest.',
            'cards.sustainable.title': 'Sustainable Agriculture',
            'cards.sustainable.text': 'We embrace responsible practices that protect soil and water.',
            'cards.social.title': 'Social Responsibility',
            'cards.social.text': 'We foster community initiatives that create well-being and opportunity.',
            'cards.more': 'See more',
            'video.title': 'Watch video',
            'video.subtitle': 'TIERRA AZUL 1981 S.A',
            'video.description': 'We are located in Dulce Nombre, Nicoya, Guanacaste, in the Nicoya Peninsula. Our main agricultural activities include year-round livestock, dryland rice cultivation, and the region’s most important endeavor: growing melons for export.',
            'products.title': 'Our products',
            'products.subtitle': 'TIERRA AZUL 1981 S.A',
            'products.description': 'We offer premium products to meet the growing demand for nutritious food. Our strict quality standards ensure that every melon and watermelon is safe and beneficial for consumers.',
            'products.melon': 'Melon',
            'products.watermelon': 'Watermelon',
            'interest.title': 'Information of interest',
            'interest.subtitle': 'Social media and contacts',
            'interest.whatsapp': 'WhatsApp',
            'interest.youtube': 'YouTube',
            'interest.facebook': 'Facebook',
            'interest.contact': 'Contact our team',
            'footer.description': 'At Tierra Azul 1981 S.A. we passionately grow melons and watermelons that share the flavor and freshness of Costa Rica with the world.',
            'footer.followUs': 'Follow us',
            'footer.contactTitle': 'Address',
            'footer.address': 'Location: 200 meters from Plaza Deporte, Pilas de Cangel',
            'footer.phone': 'Phone: 4500-2389',
            'footer.email': 'Email: waju@grupopenca.com',
            'footer.copyright': 'Copyright &copy; <a href="#">Tierra Azul 1981 S.A.</a> All rights reserved.',
            'footer.design': 'Designed by <a href="https://htmlcodex.com">HTML Codex</a>'
        }
    };

    const storage = {
        get(key) {
            try {
                return window.localStorage.getItem(key);
            } catch (error) {
                return null;
            }
        },
        set(key, value) {
            try {
                window.localStorage.setItem(key, value);
            } catch (error) {
                // Ignore storage errors (e.g. private browsing)
            }
        }
    };

    const applyLanguage = (lang) => {
        const availableLang = translations[lang] ? lang : 'es';
        const dictionary = translations[availableLang];
        document.documentElement.setAttribute('lang', availableLang);

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.getAttribute('data-i18n');
            const translation = dictionary[key];
            if (!translation) {
                return;
            }

            const target = element.getAttribute('data-i18n-target');
            if (target === 'html') {
                element.innerHTML = translation;
            } else if (target && target !== 'text') {
                element.setAttribute(target, translation);
            } else {
                element.textContent = translation;
            }
        });
    };

    document.addEventListener('DOMContentLoaded', () => {
        const select = document.getElementById('languageSwitcher');
        const storedLanguage = storage.get('preferredLanguage');
        const initialLanguage = translations[storedLanguage] ? storedLanguage : 'es';

        if (select) {
            select.value = initialLanguage;
            select.addEventListener('change', (event) => {
                const chosenLanguage = event.target.value;
                storage.set('preferredLanguage', chosenLanguage);
                applyLanguage(chosenLanguage);
            });
        }

        applyLanguage(initialLanguage);
    });
})();
