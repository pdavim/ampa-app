   // Initialize Firebase
   var config = {
       apiKey: "",
       authDomain: ".firebaseapp.com",
       databaseURL: "https://.firebaseio.com",
       projectId: "",
       storageBucket: "",
       messagingSenderId: ""
   };
   firebase.initializeApp(config);

   //reference messages  collectiom
   var messagesRef = firebase.database().ref("forms").child("models");

   //Listen for form submit
   document.getElementById('model_form').addEventListener('submit', submitForm);

   //SubmitForm

   function submitForm(e) {
       e.preventDefault();

       //get Values
       var firstName = getInputVal('firstName');
       var lastName = getInputVal('lastName');
       var ageModel = getInputVal('ageModel');
       var phoneModel = getInputVal('phoneModel');
       var genderModel = getInputVal('genderModel');
       var emailModel = getInputVal('emailModel');
       var agencyModels = getInputVal('agencyModels');
       var agencyModelsPersonContact = getInputVal('agencyModelsPersonContact');


       var addressModel = getInputVal('addressModel');
       var cityModel = getInputVal('cityModel');
       var zipcodeModel = getInputVal('zipcodeModel');
       var countryModel = getInputVal('countryModel');
       var addressModel2 = getInputVal('addressModel2');

       var heighttName = getInputVal('heighttName');
       var chesttName = getInputVal('chesttName');
       var waistModel = getInputVal('waistModel');
       var hipModel = getInputVal('hipModel');
       var tshirtModel = getInputVal('tshirtModel');
       var jacketlModel = getInputVal('jacketlModel');
       var pantsModels = getInputVal('pantsModels');
       var shoeModel = getInputVal('shoeModel');

       //Save message

       saveMessage(firstName, lastName, ageModel, phoneModel, genderModel, emailModel, agencyModels, agencyModelsPersonContact, cityModel, addressModel, zipcodeModel, countryModel, addressModel2, heighttName, chesttName, waistModel, hipModel, tshirtModel, jacketlModel, pantsModels, shoeModel);

   }

   //function to get form values
   function getInputVal(id) {
       return document.getElementById(id).value;
   }

   //save Fiunciton

   function saveMessage(firstName, lastName, ageModel, phoneModel, genderModel, emailModel, agencyModels, agencyModelsPersonContact, cityModel, addressModel, zipcodeModel, countryModel, addressModel2, heighttName, chesttName, waistModel, hipModel, tshirtModel, jacketlModel, pantsModels, shoeModel) {
       var newMessageRef = messagesRef.push();
       newMessageRef.set({

           //contact Info
           firstName: firstName,
           lastName: lastName,
           ageModel: ageModel,
           genderModel: genderModel,
           phoneModel: phoneModel,
           emailModel: emailModel,
           agencyModels: agencyModels,
           agencyModelsPersonContact: agencyModelsPersonContact,

           //, more contac
           addressModel: addressModel,
           cityModel: cityModel,
           zipcodeModel: zipcodeModel,
           countryModel: countryModel,
           addressModel2: addressModel2,


           //Mesaures
           heighttName: heighttName,
           chesttName: chesttName,
           waistModel: waistModel,
           hipModel: hipModel,
           tshirtModel: tshirtModel,
           jacketlModel: jacketlModel,
           pantsModels: pantsModels,
           shoeModel: shoeModel
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
