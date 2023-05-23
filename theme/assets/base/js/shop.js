function compra(NOME) {
    // Visualizza il popup di conferma per l'ordine
    Swal.fire({
        title: "Conferma ordine",
        text: "Vuoi confermare l'ordine di " + NOME + "?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Conferma",
        cancelButtonText: "Annulla"
    }).then((result) => {
        if (result.isConfirmed) {
            // Aggiorna la quantità del prodotto nel database
            $.ajax({
                url: '../../assets/base/php/update_quantita.php',
                method: 'POST',
                data: { NOME: NOME },
                success: function(response) {
                    // Conferma l'ordine all'utente
                    Swal.fire({
                        title: "Ordine avvenuto con successo!",
                        icon: "success"
                    });
                },
                error: function(xhr, status, error) {
                    console.error('Errore nella chiamata AJAX:', error);
                }
            });
        }
    });
}


$(document).ready(function() {
    // Funzione per generare il codice HTML dei prodotti
    function listaProdotti(prodotti, kitC) {
        var html_code = '';
    
        for (var i = 0; i < prodotti.length; i++) {
            var prodotto = prodotti[i];
            var img = prodotto.img;
            var nome = prodotto.nome;
            var prezzo = prodotto.prezzo;
            var quantita = prodotto.quantita;
            var kit = prodotto.abbigliamento;
            var verifica = (kitC === "KIT") ? "si" : "no";
    
            if (kit === verifica) {
                if (quantita > 0) {
                    html_code += `
                        <div class="col-md-3 col-sm-6 c-margin-b-20">
                            <div class="c-content-product-2 c-bg-white c-border">
                                <div class="c-content-overlay">
                                    <div class="c-overlay-wrapper">
                                        <div class="c-overlay-content">
                                            <a class="btn btn-md c-btn-grey-1 c-btn-uppercase c-btn-bold c-btn-border-1x c-btn-square btn-compra" data-prodotto-id="${i}" onclick="compra('${nome}')">Compra</a>
                                        </div>
                                    </div>
                                    <div class="c-bg-img-center c-overlay-object" data-height="height"
                                        style="height: 230px; background-image: url(../../assets/base/img/shop/${img});">
                                    </div>
                                </div>
                                <div class="c-info">
                                    <p class="c-title c-font-16 c-font-slim">${nome}</p>
                                    <p class="c-price c-font-14 c-font-slim">€${prezzo} &nbsp;
                                        <span class="c-font-14 c-font-line-through c-font-red">€600</span>
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    `;
                } else {
                    html_code += `
                        <div class="col-md-3 col-sm-6 c-margin-b-20">
                            <div class="c-content-product-2 c-bg-white c-border">
                                <div class="c-content-overlay">
                                    <div class="c-label c-bg-red c-font-uppercase c-font-white c-font-13 c-font-bold">Sale</div>
                                    <div class="c-overlay-wrapper">
                                        <div class="c-overlay-content">
                                            <span class="c-out-of-stock2">Prodotto esaurito</span>
                                        </div>
                                    </div>
                                    <div class="c-bg-img-center c-overlay-object" data-height="height"
                                        style="height: 230px; background-image: url(../../assets/base/img/shop/${img});">
                                    </div>
                                </div>
                                <div class="c-info">
                                    <p class="c-title c-font-16 c-font-slim">${nome}</p>
                                    <p class="c-price c-font-14 c-font-slim">€${prezzo} &nbsp;
                                        <span class="c-font-14 c-font-line-through c-font-red">€600</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    `;
                }
            }
        }
    
        return html_code;
    }

    function prodottoE(prodotti) {
        var html_code = '';
    
        for (var i = 0; i < prodotti.length; i++) {
            var prodotto = prodotti[i];
            var nome = prodotto.nome;
            var prezzo = prodotto.prezzo;
            var descrizione = prodotto.descrizione;
    
            if (nome === "MAGLIA MILAN GARA X 4TH AUTHENTIC 2022/23") {
                html_code += `
                <div class="c-wrapper c-bg-red" style="height: 550px;">
                    <div class="c-content c-border c-border-padding c-border-padding-right">
                        <h3 class="c-title c-font-25 c-font-white c-font-uppercase c-font-bold">${nome}</h3>
                        <p class="c-description c-font-17 c-font-white">${descrizione}</p>
                        <p class="c-price c-font-55 c-font-white c-font-thin">€${prezzo}</p>
                        <a class="btn btn-lg c-btn-white c-font-uppercase c-btn-square c-btn-border-1x" data-prodotto-id="${i}" onclick="compra('${nome}')">COMPRA</a>
                    </div>
                </div>
                `;
            }
        }
    
        return html_code;
    }

    // Funzione per effettuare la chiamata AJAX e popolare l'HTML dei prodotti
    function ajaxShop(containerId, kitC) {
        $.ajax({
            url: '../../assets/base/php/datiShop.php',
            method: 'GET',
            success: function(response) {
                var prodotti;

                try {
                    prodotti = JSON.parse(response);
                } catch (error) {
                    console.error('Errore nel parsing del JSON:', error);
                    return;
                }

                var html = listaProdotti(prodotti, kitC);
                $("#" + containerId).html(html);
                var html = prodottoE(prodotti);
                $("#PE").html(html);
            },
            error: function(xhr, status, error) {
                console.error('Errore nella chiamata AJAX:', error);
            }
        });
    }

    // Chiamata iniziale alla funzione ajaxShop()
    ajaxShop("KIT", "KIT");
    ajaxShop("GAD", "GAD");
});
