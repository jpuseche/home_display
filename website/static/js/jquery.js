$(window).on( "scroll", function(){
    if ($(window).scrollTop() === 0) {
        $(".header").removeClass("bg-white");
        $(".header").removeClass("shadow-sm");
        $("#wynwoodHouse").addClass("text-white");
        $("#changeLanguage").addClass("text-white");
        $("#wynwoodHouse").removeClass("text-black");
        $("#changeLanguage").removeClass("text-black");
        $(".main-logo").addClass("white-logo");
    } else {
        $(".header").addClass("bg-white", 100);
        $(".header").addClass("shadow-sm", 100);
        $("#wynwoodHouse").removeClass("text-white");
        $("#changeLanguage").removeClass("text-white");
        $("#wynwoodHouse").addClass("text-black");
        $("#changeLanguage").addClass("text-black");
        $(".main-logo").removeClass("white-logo");
    }
});

const params = new URLSearchParams(document.location.search);

if (params.get("lang") === "es") {
    // This query is to change change the href of the button in charge of changing the language 
    $("#changeLanguage").prop("href", "/");

    // hero
    $("#wynwoodHouse").html("Casa Wynwood");

    // hero
    $("#heroTitle").html("EXPERIENCIA HOGAR, CALIDAD HOTEL");
    $("#heroSubtitle").html("LOS MEJORES HOGARES EN ESPAÑA");

    // search bar
    $(".destination-label").html("DESTINO");
    $(".check-in-label").html("LLEGADA - SALIDA");
    $(".guests-label").html("HUÉSPEDES");
    $(".search-button").html("BUSCAR");
    $(".search-button").html("BUSCAR");
    $(".check-in-input").prop("placeholder", "añada fechas");
    $(".guests-input").prop("placeholder", "2 Huéspedes");

    // highlighted properties
    $(".properties-title").html("PROPIEDADES DESTACADAS");

    // why spain?
    $("#whySpain").html("¿Por qué España?");
    $("#whySpainContent").html(`Viajar a España es una aventura enriquecedora que promete un tapiz de experiencias. 
    Desde las vibrantes calles de Barcelona hasta los callejones históricos de Toledo, cada rincón revela una nueva 
    faceta de su rica cultura. Deléitese con la cocina de renombre mundial, desde sabrosas tapas hasta una deliciosa 
    paella, y saboree los sabores de este paraíso gastronómico. Explora maravillas arquitectónicas como la Sagrada 
    Familia y la Alhambra, maravillándote con sus intrincados diseños y su rica historia. Relájese en playas bañadas 
    por el sol o camine por paisajes impresionantes. Ya sea que busque arte, historia, gastronomía o belleza natural, 
    España ofrece un viaje inolvidable lleno de calidez, pasión y descubrimiento.`);

    // contact us
    $(".contact-us-title").html("ALQUILERES A LARGO PLAZO");
    $("#contactUsSubtitle").html("CONTAMOS CON TARIFAS ESPECIALES PARA ESTADÍAS LARGAS");
    $(".contact-us-button").html("CONTÁCTANOS");

    // footer
    $("#bookings").html("Reservas");

    $("#services").html("Servicios");
    $("#servicesFirst").html("Grupos & Largas Estadías");
    $("#servicesSecond").html("Eventos & Producciones");

    $("#us").html("Nosotros");
    $("#usFirst").html("¿Quienes Somos?");
    $("#usSecond").html("Blog & Noticias");
    $("#usThird").html("Casa Wynwood");
    $("#usFourth").html("Trabaja con Nosotros");

    $("#ownersAndInvestors").html("Propietarios & Inversionistas");
    $("#ownersAndInvestorsSecond").html("Propietarios");

    $("#benefits").html("Beneficios");
    $("#benefitsFirst").html("Guías");

    $("#destinations").html("Destinos");

    $("#termsAndConditions").html("Términos & Condiciones");
    $("#termsAndConditionsFirst").html("Términos de Servicio");
    $("#termsAndConditionsSecond").html("Políticas de privacidad");
    $("#termsAndConditionsThird").html("Políticas de cancelación");

    $("#contactUs").html("Contáctanos");
    $("#contactUsFirst").html("Contáctanos");

    $("#getTheApp").html("Descarga gratis nuestra App");
}