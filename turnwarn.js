/*This is turnwarn.js https://github.com/brueckmann/Tiny_Conjoint_Helpers_for_Qualtrics/tree/main/turnwarn.js*/

Qualtrics.SurveyEngine.addOnload(function()
{
	let lang = "${e://Field/Q_Language}";
    let turnWarn = document.getElementById('turnWarn');

    if (lang === "DE") {
        turnWarn.innerHTML = "<strong>BITTE DREHEN </strong> Sie Ihr Gerät ins <strong>QUERFORMAT</strong> um diese Frage zu beantworten!";
    } else if (lang === "IT") {
        turnWarn.innerHTML = "<strong>PER FAVORE, RUOTA </strong> il tuo dispositivo all’orientamento <strong>ORIZZONTALE</strong> per vedere questa domanda!";
    } else if (lang === "FR") {
        turnWarn.innerHTML = "<strong>VEUILLEZ TOURNER</strong> votre appareil en orientation <strong>PAYSAGE</strong> pour voir cette question !";
    } else {
        turnWarn.innerHTML = "<strong>PLEASE TURN</strong> your device to <strong>LANDSCAPE</strong> mode to view this question!";
    }
	});

Qualtrics.SurveyEngine.addOnReady(function()
{
		/*Place your JavaScript here to run when the page is unloaded*/
 	
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});