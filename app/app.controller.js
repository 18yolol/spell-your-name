// Need charset UTF-8 to correctly run this file

(function () {
    'use strict';

    angular
        .module('spellName')
        .controller('AppController', AppController);

    AppController.$inject = ['NAME_LIST', '$timeout'];

    function AppController(NAME_LIST, $timeout) {
        var vm = this;

        vm.correctNameFormat = true;
        vm.readyToPlay = false;
        vm.rawInput = "";

        vm.splitedName = [];
        vm.audioLinks = [];

        vm.loadAudio = loadAudio;
        vm.playAudio = playAudio;

        function loadAudio() {

            vm.readyToPlay = false;
            vm.splitedName = [];
            vm.audioLinks = [];

            if (vm.rawInput == "") {
                vm.correctNameFormat = false;
                return false;
            } else {
                vm.correctNameFormat = true;
            }

            vm.splitedName = removeUnicode(vm.rawInput).split(/\s+/);

            if (vm.splitedName.some(invalidName)) {
                vm.correctNameFormat = false;
                return false;
            } else {
                vm.correctNameFormat = true;
            }

            vm.audioLinks = vm.splitedName.map(function(name){
                return NAME_LIST[name];
            });

            vm.readyToPlay = true;

            // Preload the audio to smooth the experience
            playAudio(0,0);
        }

        function playAudio(volume,waitTime) {
            let audio = document.getElementById('name-speak');
            let playButton = document.getElementById('play-button');
            playButton.disabled = true;
            vm.audioLinks.forEach(function(audioLink, index, array){
                $timeout(function(){
                    audio.src = audioLink;
                    audio.volume = volume;
                    audio.play()
                        .catch(function(){
                            console.log("failed");
                        });
                }, waitTime*index);
            });
            $timeout(function(){
                audio.pause();
                audio.currentTime = 0;
                audio.src ="";
                playButton.disabled = false;
            },waitTime*vm.audioLinks.length)
        }

        function invalidName(currentName, index, nameArray) {
            return !(currentName in NAME_LIST);
        }

        function removeUnicode(str) {
            str = str.toLowerCase();
            str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
            str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
            str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
            str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
            str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
            str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
            str = str.replace(/đ/g, "d");
            // Some system encode vietnamese combining accent as individual utf-8 characters
            str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
            str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
            return str;
        }
    }
})();
