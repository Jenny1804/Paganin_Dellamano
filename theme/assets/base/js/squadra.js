function newPortiere(num_maglia, immagine, player_name, player_position, partite, minuti, inviolata, concessi, duelli, lanci, ammonizioni, espulsioni, pass) {
    pass2 = pass + "%";
    var html_code = `
        <div class="col-sm-12">
            <div class="player-info-corporate player-info-other-team">
                <div class="player-info-figure">
                    <div class="block-number"><span>${num_maglia}</span></div>
                    <div class="player-img"><img
                            srcset="${immagine}" alt="" width="368" height="300">
                    </div>
                    <div class="team-logo-img"><img
                            src="../../assets/base/img/team/sfondoG.png" alt=""
                            width="368" height="300">
                    </div>
                </div>
                <div class="player-info-main">
                    <h4 class="player-info-title">${player_name}</h4>
                    <p class="player-info-subtitle">${player_position}</p>
                    <hr>
                    <div class="player-info-table">
                        <div class="table-custom-wrap">
                            <table class="table-custom">
                                <tbody>
                                    <tr>
                                        <th>Partite giocate</th>
                                        <th>${partite}</th>
                                        <th>Minuti giocati</th>
                                        <th>${minuti}</th>
                                    </tr>
                                    <tr>
                                        <td>Porta inviolata</td>
                                        <td>${inviolata}</td>
                                        <td>Gol concessi</td>
                                        <td>${concessi}</td>
                                    </tr>
                                    <tr>
                                        <td>Duelli vinti</td>
                                        <td>${duelli}</td>
                                        <td>Lanci riusciti</td>
                                        <td>${lanci}</td>
                                    </tr>
                                    <tr>
                                        <td>Ammonizioni</td>
                                        <td>${ammonizioni}</td>
                                        <td>Espulsioni</td>
                                        <td>${espulsioni}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr>
                    <div class="player-info-progress">
                        <article class="progress-linear progress-bar-modern animated">
                            <div class="progress-header">
                                <p>Precisione passaggi</p>
                            </div>
                            <div class="progress-bar-linear-wrap">
                                <div class="progress-bar-linear"
                                    style="width: ${pass2};">
                                </div>
                            </div><span class="progress-value">${pass}</span>
                        </article>
                    </div>
                </div>
            </div>
        </div>
`;
    return html_code;
}

function newDifCent(num_maglia, immagine, player_name, player_position, partite, minuti, recuperati, contrasti, duelli, lanci, assist, passaggi, ammonizioni, espulsioni, pass, tir) {
    pass2 = pass + "%";
    tir2 = tir + "%";
    var html_code = `
        <div class="col-sm-12">
            <div class="player-info-corporate player-info-other-team">
                <div class="player-info-figure">
                    <div class="block-number"><span>${num_maglia}</span></div>
                    <div class="player-img"><img
                            srcset="${immagine}" alt="" width="368" height="300">
                    </div>
                    <div class="team-logo-img"><img
                            src="../../assets/base/img/team/sfondoG.png" alt=""
                            width="368" height="300">
                    </div>
                </div>
                <div class="player-info-main">
                    <h4 class="player-info-title">${player_name}</h4>
                    <p class="player-info-subtitle">${player_position}</p>
                    <hr>
                    <div class="player-info-table">
                        <div class="table-custom-wrap">
                            <table class="table-custom">
                                <tbody>
                                    <tr>
                                        <th>Partite giocate</th>
                                        <th>${partite}</th>
                                        <th>Minuti giocati</th>
                                        <th>${minuti}</th>
                                    </tr>
                                    <tr>
                                        <td>Palloni recuperati</td>
                                        <td>${recuperati}</td>
                                        <td>Contrasti</td>
                                        <td>${contrasti}</td>
                                    </tr>
                                    <tr>
                                        <td>Duelli vinti</td>
                                        <td>${duelli}</td>
                                        <td>Lanci riusciti</td>
                                        <td>${lanci}</td>
                                    </tr>
                                    <tr>
                                        <td>Assist</td>
                                        <td>${assist}</td>
                                        <td>Passaggi</td>
                                        <td>${passaggi}</td>
                                    </tr>
                                    <tr>
                                        <td>Ammonizioni</td>
                                        <td>${ammonizioni}</td>
                                        <td>Espulsioni</td>
                                        <td>${espulsioni}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr>
                    <div class="player-info-progress">
                        <article class="progress-linear progress-bar-modern animated">
                            <div class="progress-header">
                                <p>Precisione passaggi</p>
                            </div>
                            <div class="progress-bar-linear-wrap">
                                <div class="progress-bar-linear"
                                    style= "width: ${pass2};">
                                </div>
                            </div><span class="progress-value">${pass}</span>
                        </article>
                        <article class="progress-linear progress-bar-modern animated">
                            <div class="progress-header">
                                <p>Precisione tiri</p>
                            </div>
                            <div class="progress-bar-linear-wrap">
                                <div class="progress-bar-linear"
                                    style= "width: ${tir2};">
                                </div>
                            </div><span class="progress-value">${tir}</span>
                        </article>
                    </div>
                </div>
            </div>
        </div>
`;
    return html_code;
}

function newAttaccante(num_maglia, immagine, player_name, player_position, partite, minuti, duelli, lanci, gol, tiri, assist, passaggi, ammonizioni, espulsioni, pass, tir) {
    pass2 = pass + "%";
    tir2 = tir + "%";
    var html_code = `
        <div class="col-sm-12">
            <div class="player-info-corporate player-info-other-team">
                <div class="player-info-figure">
                    <div class="block-number"><span>${num_maglia}</span></div>
                    <div class="player-img"><img
                            srcset="${immagine}" alt="" width="368" height="300">
                    </div>
                    <div class="team-logo-img"><img
                            src="../../assets/base/img/team/sfondoG.png" alt=""
                            width="368" height="300">
                    </div>
                </div>
                <div class="player-info-main">
                    <h4 class="player-info-title">${player_name}</h4>
                    <p class="player-info-subtitle">${player_position}</p>
                    <hr>
                    <div class="player-info-table">
                        <div class="table-custom-wrap">
                            <table class="table-custom">
                                <tbody>
                                    <tr>
                                        <th>Partite giocate</th>
                                        <th>${partite}</th>
                                        <th>Minuti giocati</th>
                                        <th>${minuti}</th>
                                    </tr>
                                    <tr>
                                        <td>Duelli vinti</td>
                                        <td>${duelli}</td>
                                        <td>Lanci riusciti</td>
                                        <td>${lanci}</td>
                                    </tr>
                                    <tr>
                                        <td>Gol</td>
                                        <td>${gol}</td>
                                        <td>Tiri</td>
                                        <td>${tiri}</td>
                                    </tr>
                                    <tr>
                                        <td>Assist</td>
                                        <td>${assist}</td>
                                        <td>Passaggi</td>
                                        <td>${passaggi}</td>
                                    </tr>
                                    <tr>
                                        <td>Ammonizioni</td>
                                        <td>${ammonizioni}</td>
                                        <td>Espulsioni</td>
                                        <td>${espulsioni}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr>
                    <div class="player-info-progress">
                        <article class="progress-linear progress-bar-modern animated">
                            <div class="progress-header">
                                <p>Precisione passaggi</p>
                            </div>
                            <div class="progress-bar-linear-wrap">
                                <div class="progress-bar-linear"
                                    style= "width: ${pass2};">
                                </div>
                            </div><span class="progress-value">${pass}</span>
                        </article>
                        <article class="progress-linear progress-bar-modern animated">
                            <div class="progress-header">
                                <p>Precisione tiri</p>
                            </div>
                            <div class="progress-bar-linear-wrap">
                                <div class="progress-bar-linear"
                                    style= "width: ${tir2};">
                                </div>
                            </div><span class="progress-value">${tir}</span>
                        </article>
                    </div>
                </div>
            </div>
        </div>
`;
    return html_code;
}

function newAllenatore(immagine, name, nascita, nazionalita, all_dal, milan_dal, descrizione) {
    var html_code = `
        <div class="col-sm-12">
            <div class="player-info-corporate player-info-other-team">
                <div class="player-info-figure">
                    <div class="player-img"><img
                            srcset="${immagine}" alt="" width="368" height="300">
                    </div>
                    <div class="team-logo-img"><img
                            src="../../assets/base/img/team/sfondoG.png" alt=""
                            width="368" height="300">
                    </div>
                </div>
                <div class="player-info-main">
                    <h4 class="player-info-title">${name}</h4>
                    <p class="player-info-subtitle">Allenatore</p>
                    <hr>
                    <div class="player-info-table">
                        <div class="table-custom-wrap">
                            <table class="table-custom">
                                <tbody>
                                    <tr>
                                        <th>Data di nascita:</th>
                                        <th>${nascita}</th>
                                    </tr>
                                    <tr>
                                        <td>Nazionalità:</td>
                                        <td>${nazionalita}</td>
                                    </tr>
                                    <tr>
                                        <td>Allenatore dal:</td>
                                        <td>${all_dal}</td>
                                    </tr>
                                    <tr>
                                        <td>Al milan dal:</td>
                                        <td>${milan_dal}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr>
                    <div class="player-info-progress">
                        <article class="progress-linear progress-bar-modern animated">
                            </div>
                                <p>${descrizione}</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
`;
    return html_code;
}