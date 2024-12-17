function skillsMember() {}
skillsMember.prototype = new skills();
skillsMember.prototype.constructor = skillsMember;

skillsMember.prototype.getSkills = function() {
    var skills = this.skills;
    console.log('skills:', skills);
}
skillsMember.prototype.addSkill = function(skill) {
    this.skills.push(skill);
}
skillsMember.prototype.removeSkill = function(skill) {
    var index = this.skills.indexOf(skill);
    if (index > -1) {
        this.skills.splice(index, 1);
    } else {
        console.log('skill not found');
    }
}