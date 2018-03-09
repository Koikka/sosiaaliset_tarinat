var Observable = require('FuseJS/Observable');
var Storage = require("FuseJS/Storage");
// var FileSystem = require("FuseJS/FileSystem");

var SAVENAME = "localStorage.json";
// var camera = require('FuseJS/Camera');
var age = Observable();
var age_field = Observable();
var names = Observable();
var image_done = Observable();
var show_image = Observable();
var can_be_done = Observable();
var change_color = Observable();
var is_added = Observable();
var default_items_color = Observable();
var position_at_grid = Observable();
var save_visible = Observable(false);
// can_be_done = false;
var counter = 0;
var test_images = Observable();
var show_help_text = Observable(true);
// var items = Observable(
//     { position_at_grid: Observable(), id: "def_id_0", name: Observable("Jake"), age: "1", age_field: Observable(), image_done: Observable(), show_image: Observable(), img: "Assets/done.png", can_be_done: Observable() },
//     { position_at_grid: Observable(), id: "def_id_1", name: Observable("Julie"), age: "22", age_field: Observable(), image_done: Observable(), show_image: Observable(), img: "Assets/done.png", can_be_done: Observable() },
//     { position_at_grid: Observable(), id: "def_id_2", name: Observable("Jerard"), age: "666", age_field: Observable(), image_done: Observable(), show_image: Observable(), img: "Assets/done.png", can_be_done: Observable() }
// );
var items = Observable();
var image_path = Observable();
var image_name = Observable();
var default_items = Observable(
    /*{ position_at_grid: Observable(), id: "id_0", position: 0, default_items_color: Observable("#AED6F1"), name: Observable("name 1"), img: "http://i0.wp.com/www.samk.fi/wp-content/themes/suunta/images/SAMK-logo.png", is_added: Observable() },
    { position_at_grid: Observable(), id: "id_1", position: 1, default_items_color: Observable("#AED6F1"), name: Observable("name 2"), img: "http://i0.wp.com/www.samk.fi/wp-content/themes/suunta/images/SAMK-logo.png", is_added: Observable() },
    { position_at_grid: Observable(), id: "id_2", position: 2, default_items_color: Observable("#AED6F1"), name: Observable("name 3"), img: "http://i0.wp.com/www.samk.fi/wp-content/themes/suunta/images/SAMK-logo.png", is_added: Observable() },
    { position_at_grid: Observable(), id: "id_3", position: 3, default_items_color: Observable("#AED6F1"), name: Observable("name 4"), img: "http://i0.wp.com/www.samk.fi/wp-content/themes/suunta/images/SAMK-logo.png", is_added: Observable() },
    { position_at_grid: Observable(), id: "id_4", position: 4, default_items_color: Observable("#AED6F1"), name: Observable("name 5"), img: "http://i0.wp.com/www.samk.fi/wp-content/themes/suunta/images/SAMK-logo.png", is_added: Observable() },
    { position_at_grid: Observable(), id: "id_5", position: 5, default_items_color: Observable("#AED6F1"), name: Observable("name 6"), img: "http://i0.wp.com/www.samk.fi/wp-content/themes/suunta/images/SAMK-logo.png", is_added: Observable() },
    { position_at_grid: Observable(), id: "id_6", position: 6, default_items_color: Observable("#AED6F1"), name: Observable("name 7"), img: "http://i0.wp.com/www.samk.fi/wp-content/themes/suunta/images/SAMK-logo.png", is_added: Observable() },
    { position_at_grid: Observable(), id: "id_7", position: 7, default_items_color: Observable("#AED6F1"), name: Observable("name 8"), img: "http://i0.wp.com/www.samk.fi/wp-content/themes/suunta/images/SAMK-logo.png", is_added: Observable() },
    { position_at_grid: Observable(), id: "id_8", position: 8, default_items_color: Observable("#AED6F1"), name: Observable("name 9"), img: "http://i0.wp.com/www.samk.fi/wp-content/themes/suunta/images/SAMK-logo.png", is_added: Observable() }*/
    { position_at_grid: Observable(), id: "id_0", position: 0, default_items_color: Observable("#AED6F1"), name: Observable("Auto"), img: "Assets/images/auto.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_1", position: 1, default_items_color: Observable("#AED6F1"), name: Observable("Heitellä palloa"), img: "Assets/images/heitella_palloa.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_2", position: 2, default_items_color: Observable("#AED6F1"), name: Observable("Jalkapallo"), img: "Assets/images/jalkapallo.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_3", position: 3, default_items_color: Observable("#AED6F1"), name: Observable("Jumppa"), img: "Assets/images/jumppa.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_4", position: 4, default_items_color: Observable("#AED6F1"), name: Observable("Jumppapallo"), img: "Assets/images/jumppapallo.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_5", position: 5, default_items_color: Observable("#AED6F1"), name: Observable("Juoda"), img: "Assets/images/juoda.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_6", position: 6, default_items_color: Observable("#AED6F1"), name: Observable("Keinua"), img: "Assets/images/keinua.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_7", position: 7, default_items_color: Observable("#AED6F1"), name: Observable("Kertoa"), img: "Assets/images/kertoa.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_8", position: 8, default_items_color: Observable("#AED6F1"), name: Observable("Kirjoittaa"), img: "Assets/images/kirjoittaa.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_9", position: 9, default_items_color: Observable("#AED6F1"), name: Observable("Kynätehtavä"), img: "Assets/images/kynatehtava.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_10", position: 10, default_items_color: Observable("#AED6F1"), name: Observable("Lautapeli"), img: "Assets/images/lautapeli.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_11", position: 11, default_items_color: Observable("#AED6F1"), name: Observable("Lego"), img: "Assets/images/lego.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_12", position: 12, default_items_color: Observable("#AED6F1"), name: Observable("Muistipeli"), img: "Assets/images/muistipeli.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_13", position: 13, default_items_color: Observable("#AED6F1"), name: Observable("Muutos"), img: "Assets/images/muutos.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_14", position: 14, default_items_color: Observable("#AED6F1"), name: Observable("Nukkeleikki"), img: "Assets/images/nukkeleikki.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_15", position: 15, default_items_color: Observable("#AED6F1"), name: Observable("Palikat"), img: "Assets/images/palikat.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_16", position: 16, default_items_color: Observable("#AED6F1"), name: Observable("Palkinto"), img: "Assets/images/palkinto.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_17", position: 17, default_items_color: Observable("#AED6F1"), name: Observable("Pallo"), img: "Assets/images/pallo.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_18", position: 18, default_items_color: Observable("#AED6F1"), name: Observable("Pallohieronta"), img: "Assets/images/pallohieronta.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_19", position: 19, default_items_color: Observable("#AED6F1"), name: Observable("Pallomeri"), img: "Assets/images/pallomeri.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_20", position: 20, default_items_color: Observable("#AED6F1"), name: Observable("Pallopelit"), img: "Assets/images/pallopelit.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_21", position: 21, default_items_color: Observable("#AED6F1"), name: Observable("Peli"), img: "Assets/images/peli.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_22", position: 22, default_items_color: Observable("#AED6F1"), name: Observable("Pihaleikki"), img: "Assets/images/pihaleikki.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_23", position: 23, default_items_color: Observable("#AED6F1"), name: Observable("Piirtää"), img: "Assets/images/piirtaa.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_24", position: 24, default_items_color: Observable("#AED6F1"), name: Observable("Pilli"), img: "Assets/images/pilli.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_25", position: 25, default_items_color: Observable("#AED6F1"), name: Observable("Puhaltaa saippuakuplia"), img: "Assets/images/puhaltaa_saippuakuplia.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_26", position: 26, default_items_color: Observable("#AED6F1"), name: Observable("Puhaltaa"), img: "Assets/images/puhaltaa.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_27", position: 27, default_items_color: Observable("#AED6F1"), name: Observable("Pukea"), img: "Assets/images/pukea.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_28", position: 28, default_items_color: Observable("#AED6F1"), name: Observable("Pyykkipojat"), img: "Assets/images/pyykkipojat.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_29", position: 29, default_items_color: Observable("#AED6F1"), name: Observable("Saippuakuplat"), img: "Assets/images/saippuakuplat.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_30", position: 30, default_items_color: Observable("#AED6F1"), name: Observable("Syödä"), img: "Assets/images/syoda.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_31", position: 31, default_items_color: Observable("#AED6F1"), name: Observable("Tehtäväpaperi"), img: "Assets/images/tehtavapaperi.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_32", position: 32, default_items_color: Observable("#AED6F1"), name: Observable("Värittää"), img: "Assets/images/varittaa.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_33", position: 33, default_items_color: Observable("#AED6F1"), name: Observable("Vessahätä"), img: "Assets/images/vessahata.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_34", position: 34, default_items_color: Observable("#AED6F1"), name: Observable("Vuorotellen"), img: "Assets/images/vuorotellen.png", is_added: Observable(), change_color: Observable(false) },
    { position_at_grid: Observable(), id: "id_35", position: 35, default_items_color: Observable("#AED6F1"), name: Observable("Yllätys"), img: "Assets/images/yllatys.png", is_added: Observable(), change_color: Observable(false) }
);
// Function in test - Sortable
function Item(id, name) {
    this.id = id;
    this.name = name;
    this.selected = Observable(false);
}
// When in home screen item is clicked
function clicked(arg) {
    console.log("Age: " + arg.data.age);
    console.log(JSON.stringify(arg));
    for (var i = 0; i < items.length; i++) {
        if (arg.data.name == items.getAt(i).name) {
            // Handle text data
            // console.log(items.getAt(i).age);
            // console.log(items.getAt(i).name.value);
            items.getAt(i).age_field.value = items.getAt(i).age;
            if (i > 1) {
                items.getAt(0).can_be_done.value = false;
            }
            // Handle overlay img
            if (items.getAt(i).show_image.value == true && items.getAt(i).can_be_done.value == true) {
                items.getAt(i).show_image.value = false;
                // DETERMINE STEPS WHERE IMAGE CAN BE SHOWN OR HIDDEN
                if (i+1<items.length) {
                    items.getAt(i+1).can_be_done.value = false;
                }
                if ((i-1)>=0) {
                    items.getAt(i-1).can_be_done.value = true;
                }
            } else {
                if (i == 0 && counter == 0 || items.getAt(i).can_be_done.value == true) {
                    items.getAt(i).show_image.value = true;
                    // DETERMINE STEPS WHERE IMAGE CAN BE SHOWN OR HIDDEN
                    if (i+1<items.length) {
                        items.getAt(i+1).can_be_done.value = true;
                    }
                    if ((i-1)>=0) {
                        items.getAt(i-1).can_be_done.value = false;
                    }
                }

            }
        } else {
            items.getAt(i).age_field.value = "";
            // items.getAt(i).image_done.value = "";
        }
    }
    counter++;
}
// Check json function
function check_json() {
    for (var i = 0; i < items.length; i++) {
        // console.log(counter+": "+items.getAt(i).name.value +" - "+ i +" - "+ items.getAt(i).can_be_done.value);
        console.log(JSON.stringify(items.getAt(i)));
    }

    // Camera.takePicture(500, 500).then(function(file) {
    //     // var picture = new Parse.Object("Picture");
    //     // picture.set("name", file.name);
    //     // var parseFile = new Parse.File(file.name, file);
    //     // picture.set("file", parseFile);
    //     // return picture.save();
    // }).then(function(picture) {
    //     // export.items.add({ name: picture.get('name'), url: picture.get('file').url() });
    // }).catch(function(e) {
    //     console.log("Error: " + e);
    // });
}
// Adding new item (handle admin and home side)
function add_image_to_home(arg) {
    // console.log(JSON.stringify(arg.data));
    if (arg.data.change_color.value) {
        arg.data.change_color.value = false;
        // arg.data.default_items_color.value = "#AED6F1";
        // console.log(default_items.getAt(arg.data.position).id);
        remove_item(default_items.getAt(arg.data.position).id);
        arg.data.position_at_grid.value = "";
        for (var i = 0; i < items.length; i++) {
            for (var j = 0; j < default_items.length; j++) {
                // console.log(default_items.getAt(j).id);
                if (items.getAt(i).id == default_items.getAt(j).id) {
                    default_items.getAt(j).position_at_grid.value = i+1;
                }
            }
        }
    } else {
        arg.data.change_color.value = true;
        // console.log(default_items.getAt(arg.data.position).id);
        // arg.data.default_items_color.value = "#00ca4d";
        add_item(default_items.getAt(arg.data.position).id);
        // console.log(JSON.stringify(arg));
        for (var i = 0; i < items.length; i++) {
            for (var j = 0; j < default_items.length; j++) {
                // console.log(default_items.getAt(j).id);
                if (items.getAt(i).id == default_items.getAt(j).id) {
                    default_items.getAt(j).position_at_grid.value = i+1;
                }
            }
        }
        // console.log(default_items.getAt(arg.data.position).name.value);
    }
    if (items.length > 0) {
        show_help_text.value = false;
    } else {
        show_help_text.value = true;
    }
}
// Handle camera
function open_camera() {
    var camera = require('FuseJS/Camera');
    camera.takePicture(640,640).then(function(photo) {
        var imgPath = "";
        var ImageTools = require("FuseJS/ImageTools");
        var options = {
            mode: ImageTools.IGNORE_ASPECT,
            desiredWidth: 640, //The desired width in pixels
            desiredHeight: 640, //The desired height in pixels
            performInPlace: true // Boolean value determining whether the existing image will replaced
        };
        imgPath = photo.path;
        ImageTools.resize(photo, options)
            .then(function(newImage) {
                console.log("Path of resized image is " + newImage.path);
                // saveMessage(newImage.path);
                imgPath = newImage.path;
                save_visible.value = true;
                console.log(save_visible.value);
                image_path.value = newImage.path;
                //saveMessage(newImage.path);
            });
        // saveMessage(imgPath);
        //Do things with image here
        //console.log(JSON.stringify(photo));
        // saveMessage(photo.path);
        /*photo.save()
            .then(function(filePath) {
                console.log("Photo saved to: " + filePath);
                saveMessage(filePath.path);
                //photo.release();
            })
            .catch(function(error) {
                console.log("Failed to save photo: " + error);
                photo.release();
            });*/
    }).catch(function(error) {
        //Something went wrong, see error for details
        console.log("Failed to capture photo: " + error);
    });
}
// Clear all values from grid
function clear_values() {
    for (var i = 0; i < items.length; i++) {
        // items.getAt(i).position_at_grid.value = "";
        items.getAt(i).show_image.value = false;
        if (i == 0) {
            items.getAt(i).can_be_done.value = true;
        } else {
            items.getAt(i).can_be_done.value = false;
        }
    }
    counter = 0;
    for (var i = items.length - 1; i >= 0; i--) {
        items.remove(items.getAt(i));
    }
    for (var i = default_items.length - 1; i >= 0; i--) {
        default_items.getAt(i).change_color.value = false;
        default_items.getAt(i).position_at_grid.value = "";
    }
    if (items.length > 0) {
        show_help_text.value = false;
    } else {
        show_help_text.value = true;
    }
}
// adding item to home items json
function add_item(id) {
    for (var i = 0; i < default_items.length; i++) {
        if (default_items.getAt(i).id == id) {
            var elem = { "display_img": default_items.getAt(i).img, "position_at_grid": Observable(), "id": default_items.getAt(i).id, "name": Observable(default_items.getAt(i).name.value), "age": 0, "age_field": Observable(), "image_done": Observable(), "show_image": Observable(), "img": "Assets/done.png", "can_be_done": Observable(false), "change_color": Observable(false) };
            items.add(elem);
        }
    }
    // saveMessage();
    // var elem = { "name": Observable(default_items.getAt(arg.data.position).name.value), "age": 0, age_field: Observable(), image_done: Observable(), show_image: Observable(), img: "Assets/done.png", can_be_done: Observable() };
    // items.add(elem);
}
// remove item from home items json
function remove_item(id) {
    var removed = false;
    for (var i = 0; i < items.length; i++) {
        // console.log(items.getAt(i).id +" == "+ id);
        if (items.getAt(i).id == id) {
            // console.log(JSON.stringify(items.getAt(i)));
            items.remove(items.getAt(i));
            removed = true;
            break;
            // items.getAt(i);
            // items.getAt(i).remove();
        }
    }
    if (removed) {
        for (var i = 0; i < items.length; i++) {
            // items.getAt(i).position_at_grid.value = "";
            items.getAt(i).show_image.value = false;
            if (i == 0) {
                items.getAt(i).can_be_done.value = true;
            } else {
                items.getAt(i).can_be_done.value = false;
            }
        }
        counter = 0;
    }
}
// old add item
function addItem() {
    var elem = { "name": Observable("Antti"), "age": 5555, age_field: Observable(), image_done: Observable(), show_image: Observable(), img: "Assets/done.png", can_be_done: Observable(false) };
    items.add(elem);
    console.log(items.length);
}
function empty_memory() {
    Storage.write(SAVENAME, "");
}
function saveMessage(filePath, name) {
    var object = [];
    Storage.read(SAVENAME).then(function(content) {
        object = JSON.parse(content);
        console.log("has content: "+content);
        object.push({"img": filePath, "name": name, "unique": "unique"});
    }, function(error) {
        console.log("some error while reading data");
    });
    console.log("---------------------------------");
    //default_items.value = default_items.value;
    for (var i = 0; i < default_items.length; i++) {
        console.log(default_items.getAt(i).unique);
        if (default_items.getAt(i).unique === "unique") {
            default_items.removeAt(i);
        }
    }
    console.log("---------------------------------");
    setTimeout(function() {
        if (object.length == 0) {
            console.log("Empty object");
            object.push({"img": filePath, "name": name, "unique": "unique"});
        }
        object = JSON.stringify(object);
        console.log("Save object: "+object);
        Storage.write(SAVENAME, object);

        var last_item = 0;
        for (var i = 0; i < default_items.length; i++) {
            last_item = i;
        }
        last_item++;
        console.log("content: "+object);
        object = JSON.parse(object);
        for (var i = 0; i < object.length; i++) {
            var elem = { position_at_grid: Observable(), id: "id_"+last_item, position: last_item, default_items_color: Observable("#AED6F1"), name: Observable(object[i].name), img: object[i].img, is_added: Observable(), change_color: Observable(false), "unique": "unique" };
            default_items.add(elem);
            last_item++;
        }
    }, 500);
    image_name.value = "";
}
function image_saved() {
    save_visible.value = false;
    console.log(image_path.value);
    console.log(image_name.value);
    saveMessage(image_path.value, image_name.value);
    // TODO SAVE VALUES
}
function image_ignored() {
    save_visible.value = false;
    // TODO SAVE VALUES
}
Storage.read(SAVENAME).then(function(content) {
    // test_images.value = JSON.parse(content);
    //test_images.value = content;
    var last_item = 0;
    for (var i = 0; i < default_items.length; i++) {
        // if (default_items.getAt(i).id == id) {
        //     var elem = { "display_img": content, "position_at_grid": Observable(1), "id": 1, "name": Observable("temp"), "age": 0, "age_field": Observable(), "image_done": Observable(), "show_image": Observable(), "img": "Assets/done.png", "can_be_done": Observable(false), "change_color": Observable(false) };
        //     items.add(elem);
        // }
        last_item = i;
    }
    last_item++;
    console.log("content: "+content);
    content = JSON.parse(content);
    for (var i = 0; i < content.length; i++) {
        var elem = { position_at_grid: Observable(), id: "id_"+last_item, position: last_item, default_items_color: Observable("#AED6F1"), name: Observable(content[i].name), img: content[i].img, is_added: Observable(), change_color: Observable(false), "unique": "unique" };
        default_items.add(elem);
        // content[i]
        last_item++;
    }
    // welcomeText.value = "Stored data: "  + data.message;
}, function(error) {
    //For now, let's expect the error to be because of the file not being found.
    // welcomeText.value = "There is currently no local data stored";
    console.log(SAVENAME);
    console.log("some error while reading data: "+error);
});
module.exports = {
    age: age,
    age_field: age_field,
    clicked: clicked,
    check_json: check_json,
    items: items,
    addItem: addItem,
    names: names,
    image_done: image_done,
    show_image: show_image,
    can_be_done: can_be_done,
    change_color: change_color,
    open_camera: open_camera,
    default_items: default_items,
    is_added: is_added,
    add_image_to_home: add_image_to_home,
    default_items_color: default_items_color,
    position_at_grid: position_at_grid,
    test_images: test_images,
    show_help_text: show_help_text,
    clear_values: clear_values,
    save_visible: save_visible,
    image_saved: image_saved,
    image_ignored: image_ignored,
    image_path: image_path,
    image_name: image_name,
    empty_memory: empty_memory
};