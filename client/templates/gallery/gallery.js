Template.gallery.helpers({
  getPictures: function() {
    return Pictures.find({}, {
      sort: {
        createdAt: -1
      }
    });
  },
  getRecentPictures: function(count) {
    return Pictures.find({}, {
      sort: {
        createdAt: -1
      },
      limit: count
    });
  },
  getPictureCount: function() {
    return Pictures.find().count();
  }
});



// http://meteorpad.com/pad/WEoyj82x6uC4XPZv5/Rows
// Template.gallery.helpers({
//   myArray: function () {
//     var res = [];
//     for (var i = 0; i < 17; i++) {
//       res.push('Row '+i);
//     }
//     return res;
//   },
//
//   arrayToRows: function (array) {
//     var rows = [];
//     var row = [];
//     array.forEach(function (el, index) {
//       if (index % 4 === 0) {
//         rows.push(row);
//         row = [];
//       }
//       row.push(el)
//     });
//     rows.splice(0,1);
//     console.log(rows);
//     return rows;
//   }
// });

// * {
//   -moz-box-sizing: border-box;
//   box-sizing: border-box;
// }
//
// body {
//   font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
//   font-size: 16px;
//   font-weight: normal;
//   margin: 3em 0;
//   padding: 0;
// }
//
// .row:nth-child(odd) {
//   background-color: #ccc;
