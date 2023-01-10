function matchFullName([text]){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g     // \b --> word boundary

    let matches = text.match(pattern);
    console.log(matches.join(' '));
}
matchFullName(['ivan ivanov, Ivan Ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov, Test Testov'])