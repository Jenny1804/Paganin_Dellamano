class PrelevaDati {
    constructor() {
      // qui è possibile inizializzare le proprietà della classe
      this.titoli = [];
      this.descrizioni = [];
      this.pezzi = [];
      this.img = [];
      this.prezzi = [];
  
      // esegue la chiamata AJAX per recuperare i dati dal server
      this.caricaDati();
    }
  
    caricaDati() {
      // salva il riferimento all'istanza corrente della classe
      let self = this;
  
      // esegue la chiamata AJAX per recuperare i dati dal server
      $.ajax({
        url: 'shop.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
          // memorizza i dati prelevati nelle proprietà della classe
          self.titoli = data.titoli;
          self.descrizioni = data.descrizioni;
          self.pezzi = data.pezzi;
          self.img = data.img;
          self.prezzi = data.prezzi;
  
          // qui è possibile eseguire altre operazioni sulla base dei dati recuperati
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus, errorThrown);
        }
      });
    }
  
    // qui è possibile definire altre funzioni o metodi della classe che utilizzano i dati prelevati
  }