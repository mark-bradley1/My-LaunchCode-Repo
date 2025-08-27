let userProfile = ['Mark', '38', true, {city: 'St. Louis'}, ['golfing', 'woodworking']];
console.log(userProfile[0]);
console.log(userProfile[4][1]);

userProfile[1] = 39;
userProfile[4].push('hockey');
console.log(userProfile);