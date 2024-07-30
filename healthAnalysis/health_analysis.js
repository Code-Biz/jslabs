const addPatientBtn = document.getElementById('addPatient');
const report = document.getElementById("report");
const searchBtn = document.getElementById('searchBtn');
const patientsArray=[];

function addPatient(){
    const name = document.getElementById("name").value;
    const gender= document.querySelector('input[name="gender"]:checked').value;
    const age = document.getElementById('age').value;
    const condition = document.getElementById("condition").value;


    
    if(name && gender && age && condition){
        patientsArray.push({name, gender, age, condition});
        resetForm();
        generateReport();
    }
    
}

 function resetForm() {
          document.getElementById("name").value = "";
          document.querySelector('input[name="gender"]:checked').checked = false;
          document.getElementById("age").value = "";
          document.getElementById("condition").value = "";
            //the value in above code line can be set to the values predefined in the html code of this input tag
        }

function generateReport(){
    const numPatients=patientsArray.length;
    const conditionsCount={
        Diabetes: 0,
        Thyroid:0,
        //using string form for high blood pressure because of space in between.
        "High Blood Pressure":0,
    };

    const genderConditionsCount={
        Male: {
            Diabetes: 0,
            Thyroid:0,
            "High Blood Pressure":0,},
        Female:{
            Diabetes: 0,
            Thyroid:0,
            "High Blood Pressure":0,},
    };


    for(const patient of patientsArray){
        conditionsCount[patient.condition]++;
        genderConditionsCount[patient.gender][patient.condition]++;
    }

    report.innerHTML=`Number of Patients: ${numPatients}<br><br>`;
    report.innerHTML+=`Conditions Breakdown:<br>`;
   
    //maybe for-of is used to iterate through element of an array and for-in is used to iterate through the elements of objects
    for(const condition in conditionsCount){
        report.innerHTML+=`${condition}: ${conditionsCount[condition]}<br>`;
    }

    report.innerHTML+=`<br>Gender-Based Conditions:<br>`;
    for(const gender in genderConditionsCount){
        report.innerHTML+=`${gender}: <br>`;
        
        for(condition in genderConditionsCount[gender]){
            report.innerHTML+=`&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`};
    }
}

addPatientBtn.addEventListener('click', addPatient);

function searchCondition(){
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv=document.getElementById('result');
    resultDiv.innerHTML="";

    fetch('health_analysis.json').then(response=>response.json()).then(data=>{
        const condition = data.conditions.find(anitemwhose=>anitemwhose.name.toLowerCase()===input);

        if(condition){
            const symptoms= condition.symptoms.join(', ');
            const prevention= condition.prevention.join(', ');
            const treatment= condition.treatment;

            resultDiv.innerHTML+=`<h1>${condition.name}</h1><br>
                                    <img src="${condition.imagesrc}" alt="hjh">`;
                                
            resultDiv.innerHTML+=`<p><strong>Symptoms: </strong> ${symptoms} </p>
            <p><strong>Prevention: </strong>${prevention}</p>
            <p><strong>Symptoms: </strong>${treatment}</p><br>`;
            
        }

        else{
            resultDiv.innerHTML="Condition Not Found!";
        }
    }).catch(error=>{console.error('Error: ', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
    });

}

searchBtn.addEventListener('click', searchCondition);