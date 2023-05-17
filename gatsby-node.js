exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;
    
    if (!page.context.locale) {
        const language = page.context.i18n.language
        const locale = language === 'en' ? 'en-US' : language;
        deletePage(page);
        createPage({
            ...page,
            context: {
                ...page.context,
                locale,
            }
        })
        console.log(locale)
    }
}