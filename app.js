let data = {
    california : {
        a:{
            company: "Sift",
            location: "San Francisco",
            logo: "/img/icons/sift.jpg"
        },
        b:{
            company: "SigOpt",
            location: "San Francisco",
            logo: "/img/icons/sigopt.jpg"
        },
        c:{
            company: "Quadric",
            location: "Silicon Valley",
            logo: "/img/icons/quadric.jpg"
        }
    },
    Texas:{
        company: "Mythic",
        location: "Austin",
        logo: "/img/icons/mythic.jpg"
    },
    Michigan:{
        company: "Clinc",
        location: "Ann Arbor",
        logo: "/img/icons/clinc.jpg"
    },
    'North Carolina': {
        company: "AI Patent Law",
        location: "Charlotte",
        logo: "/img/icons/AI-Patent-Law.jpg"
    },
    'District Of Columbia': {
        company: "Expel",
        location: "Washington",
        logo: "/img/icons/expel.jpg"
    }
}


let details = (val) => {
    if(val==='california') {
    
        //a
        document.querySelector('.eachA1').innerHTML = data[val].a.company;
        document.querySelector('.eachA2').innerHTML = data[val].a.location;
        document.querySelector('.eachA3').innerHTML = val;
        
        document.querySelector('.logoimgA').setAttribute('src', data[val].a.logo);

        //b
        document.querySelector('.eachB1').innerHTML = data[val].b.company;
        document.querySelector('.eachB2').innerHTML = data[val].b.location;
        document.querySelector('.eachB3').innerHTML = val;
        
        document.querySelector('.logoimgB').setAttribute('src', data[val].b.logo);
        
        //c
        document.querySelector('.eachC1').innerHTML = data[val].c.company;
        document.querySelector('.eachC2').innerHTML = data[val].c.location;
        document.querySelector('.eachC3').innerHTML = val;
        
        document.querySelector('.logoimgC').setAttribute('src', data[val].c.logo);

    } else {
        document.querySelector('.each1').innerHTML = data[val].company;
        document.querySelector('.each2').innerHTML = data[val].location;
        document.querySelector('.each3').innerHTML = val;
    
        //logo
        document.querySelector('.logoimg').setAttribute('src', data[val].logo);
    }
}


let log = (e, val) => {
    if (val === 'california'){
        let popup = document.querySelector('.move');
        popup.style.left=e.clientX+'px';
        popup.style.top=e.clientY+'px';
        document.querySelector('.hideCarlifornia').style.display="block";
        document.getElementById("californiah").style.display="none";
        details(val);
    }else {
        let popup = document.getElementById('californiah');
        popup.style.left=e.clientX+'px';
        popup.style.top=e.clientY+'px';
        popup.style.display="block"
        document.querySelector('.hideCarlifornia').style.display="none";
        details(val);
        
    }
}


function stopTracking(){
    document.getElementById("californiah").style.display="none";
    document.querySelector('.hideCarlifornia').style.display="none";
}