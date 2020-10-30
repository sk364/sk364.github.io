(function() {
  $('document').ready(function() {
    const query = window.location.href.split('?');
    const queryParams = query.length > 1 ? query[1].split('&') : [];
    const params = queryParams.reduce((prev, cur) => {
      const [key, value] = cur.split('=');
      return { ...prev, [key]: value };
    }, {});

    const video = $('video');
    const source = document.createElement('source');
    const imgLink = params['src'] ? params['src'].split('.')[0] : "part1";
    const image = $('img');
    image[0].src = `media/${imgLink}.png`;
    image.hide();

    if (params['src']) {
      source.setAttribute('src', `media/${params['src']}`);
      video.append(source);
      video[0].play(); // --autoplay-policy=no-user-gesture-required
    } else {
      source.setAttribute('src', `media/part1.mp4`);
      video.append(source);
    }

    video[0].onended = function() {
      video.hide();
      image.show();
    }
  });

  $('#leftChoice').on("click", function() {
    const btn = $('#leftChoice');
    const link = btn.data()['link'];
    const href = `${window.location.pathname}?src=${link}`;

    window.location.href = href;
  });

  $('#rightChoice').on("click", function() {
    const btn = $('#rightChoice');
    const link = btn.data()['link'];
    const href = `${window.location.pathname}?src=${link}`;

    window.location.href = href;
  });
})();
