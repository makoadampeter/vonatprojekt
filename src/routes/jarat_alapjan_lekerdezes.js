

module.exports = function (app, mysql){
    
    app.post('/jarat_megallok', function(request, response){

        const { jarat_id } = request.body;

        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'doadmin',
            password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
            database: 'vonat',
            port: 25060
        });
        let localdb = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'vonat',
            multipleStatements: true
        });

        localdb.connect(function(err) {
			if (err) throw err;
		});


        localdb.query(`
        SELECT * FROM line_stops WHERE line = ?;`, 
        [jarat_id], (error, data) => {
            if (error) {
                alert(error);
            }
            else{response.send(data);
            localdb.end();}
        });

    });
    app.post('/jarat_megallo_ido', function(request, response){

        const { stop_id } = request.body;

        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'doadmin',
            password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
            database: 'vonat',
            port: 25060
        });
        let localdb = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'vonat',
            multipleStatements: true
        });

        localdb.connect(function(err) {
			if (err) throw err;
		});


        localdb.query(`
        SELECT arrival FROM arriving WHERE line_stop_id = ?;`, 
        [stop_id], (error, data) => {
            if (error) {
                alert(error);
            }
            else{response.send(data);
            localdb.end();}
        });

    });
    app.post('/jarat_id_from_name', function(request, response) {
        const { jarat_nev } = request.body;
        
        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'doadmin',
            password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
            database: 'vonat',
            port: 25060
        });
        let localdb = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'vonat',
        });
    
        localdb.connect(function(err) {
            if (err) throw err;
            
            localdb.query("SELECT * FROM line_names WHERE name LIKE ?", [`%${jarat_nev}%`], (error, data) => {
                if (error) {
                    alert(error);
                }
                else{response.send(data);
                localdb.end();}
            });
        });
    });
    app.post('/stop_name_from_id', function(request, response) {
        const { stopIDfrom } = request.body;
        
        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'doadmin',
            password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
            database: 'vonat',
            port: 25060
        });
        let localdb = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'vonat',
        });
    
        localdb.connect(function(err) {
            if (err) throw err;
            
            localdb.query("SELECT * FROM stops WHERE id LIKE ?", [`%${stopIDfrom}%`], (error, data) => {
                if (error) {
                    alert(error);
                }
                else{response.send(data);
                localdb.end();}
            });
        });
    });
    app.post('/jarat_alapjan_lekerdezes', function(request, response, next){

        const { JaratID} = request.body;

        let db = mysql.createConnection({
            host: 'vonat-do-user-14988675-0.c.db.ondigitalocean.com',
            user: 'doadmin',
            password: 'AVNS_qw2rI_fp_NOn4kq1u9-',
            database: 'vonat',
            port: 25060
        });
        let localdb = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'vonat',
        });
        console.log(JaratID);
        localdb.connect();
        localdb.query(`SELECT stops.name AS megallo,
        arriving.arrival AS ido FROM stops
        LEFT OUTER JOIN line_stops ON  line_stops.stop  = stops.id
        LEFT OUTER JOIN line_names ON line_names.id = line_stops.line 
        INNER JOIN arriving ON line_stops.id = arriving.line_stop_id
        WHERE line_names.name = ?`,
        [JaratID], (error, data) => {
            if(error || data.length === 0){
                response.send(error);
                localdb.end();
                next();
                return;
            }
            let return_value = [];

            for (let i = 0; i < data.length; i++) {
                for (let h = 0; h < 24; h++) {
                    return_value.push({
                        "ido": (h < 10 ? '0' : '') + h + ":" + (data[i].ido < 10 ? '0' : '') + data[i].ido,
                        "megallo": data[i].megallo
                    });
                }
            }
            response.send(return_value);
            localdb.end();
            next();

        });

    });


}