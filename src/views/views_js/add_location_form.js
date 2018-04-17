// Initialize Firebase
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};
firebase.initializeApp(config);

//reference messages  collectiom
var messagesRef = firebase.database().ref("forms").child("location");

//Listen for form submit
document.getElementById('add_location_form').addEventListener('submit_location_form', submitForm);

//SubmitForm

function submitForm(e) {
    e.preventDefault();

    //get Values
    var locationName = getInputVal('locationName');
    var locationAddress = getInputVal('locationAddress');
    var locationZip = getInputVal('locationZip');
    var locationCity = getInputVal('locationCity');
    var emailLocation = getInputVal('emailLocation');
    var locationContactPerson = getInputVal('locationContactPerson');
    var locationPhoneContact = getInputVal('locationPhoneContact');
    var locationOtherInfo = getInputVal('locationOtherInfo');


    var locationCategory = getInputVal('locationCategory');

    //Save message

    saveMessage(firstName, lastName, ageModel, phoneModel, genderModel, emailModel, agencyModels, agencyModelsPersonContact, cityModel, addressModel, zipcodeModel, countryModel, addressModel2, heighttName, chesttName, waistModel, hipModel, tshirtModel, jacketlModel, pantsModels, shoeModel);

}

//function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

//save Fiunciton

function saveMessage(locationName, locationAddress, locationZip, locationCity, emailLocation, locationContactPerson, locationPhoneContact, locationOtherInfo, locationCategory) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({

        //contact Info
        locationName: locationName,
        locationAddress: locationAddress,
        locationZip: locationZip,
        locationCity: locationCity,
        emailLocation: emailLocation,
        locationContactPerson: locationContactPerson,
        locationPhoneContact: locationPhoneContact,
        agencyModelsPersonContact: agencyModelsPersonContact,

        //, more contac
        locationOtherInfo: locationOtherInfo,
        locationCategory: locationCategory



    });
};




$(document).ready(function(){
    // Basic
    $('.dropify').dropify();

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove:  'Supprimer',
            error:   'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('.dropify-event').dropify();

    drEvent.on('dropify.beforeClear', function(event, element){
        return confirm("Do you really want to delete \"" + element.filename + "\" ?");
    });

    drEvent.on('dropify.afterClear', function(event, element){
        alert('File deleted');
    });
});
