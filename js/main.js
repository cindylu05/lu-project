$(document).ready(() => {
  $('#city').on('mouseenter', () => {
    $('#city').attr('src', 'images/image5.jpg');
  }).on('mouseleave', () => {
    $('#city').attr('src', 'images/image1.jpg');
  });

  $('#temple').on('mouseenter', () => {
    $('#temple').attr('src', 'images/image7.jpg');
  }).on('mouseleave', () => {
    $('#temple').attr('src', 'images/image3.jpg');
  });

  $('#culture').on('mouseenter', () => {
    $('#culture').attr('src', 'images/image8.jpg');
  }).on('mouseleave', () => {
    $('#culture').attr('src', 'images/image2.jpg');
  });

  $('#food').on('mouseenter', () => {
    $('#food').attr('src', 'images/image6.jpg');
  }).on('mouseleave', () => {
    $('#food').attr('src', 'images/image4.jpg');
  });
});
