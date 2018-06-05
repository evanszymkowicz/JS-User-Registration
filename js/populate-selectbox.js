(function () {
  var type = document.getElementById('equipmentType');
  var model = document.getElementById('model');
  var cameras = {
    bolex: 'Bolex Paillard H8',
    yashica: 'Yashica 30',
    pathescape: 'pathescape Super-8 Relax',
    cannon: 'Cannon Rebel XTi',
  };
  var projectors = {
    kodak: 'Kodak Instamatic M55',
    bolex: 'Bolex Sound 715',
    eumig: 'Eumig Mark S',
    sankyo: 'Sankyo Dualux',
  };

  //After user selects the type
  addEvent(type, 'change', function () {
    if (this.value === 'chose') {
      model.innerHTML = '<option>Please select a type!</option>';
      return;
    }

    var models = getModels(this.value);

    var options = '<option>Please choose a model </option>';
    for (var key in models) {
      options += '<option value"' + key + '">' + models[key] + '</option>';
    }

    //Options containing a quote should be escaped
    model.innerHTML = options;
  });

  function getModels(equipmentType) {
    if (equipmentType === 'cameras') {
      return cameras;
    } else if (equipmentType === 'projectors') {
      return projectors;
    }
  }
}());
