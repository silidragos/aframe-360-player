document.querySelector('a-scene').addEventListener('enter-vr', function() {
    document.getElementById('rig').setAttribute('position', '0 -1.6 0');
});
document.querySelector('a-scene').addEventListener('exit-vr', function() {
    document.getElementById('rig').setAttribute('position', '0 0 0');
});
