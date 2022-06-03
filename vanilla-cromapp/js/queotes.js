const quotes = [
  {
    quote: '상대방이 생각없이 내뱉는 말에 격분하지 마라. 불쾌 하더라도 그말의 속뜻을 읽으려고 노력하라.',
    author: '...',
  },
  {
    quote: '세월은 피부에 주름을 만들지만, 사라진 열정은 영혼에 주름을 만든다.',
    author: '...',
  },
  {
    quote: '인생은 흘러가는 것이 아니라, 체워지는 것디다. 우리는 하루하루를 보내는 것이 아니라, 내가 가진 무엇으로 채워 가는 것이다.',
    author: '...',
  },
  {
    quote: '장벽이 서 있는 것은 나를 가로 막기 위함이 아니라, 그것은 우리가 얼마나 간절히 원하는지 보여줄 기회를 주기 위해 거기 서 있는 것이다.',
    author: '...',
  },
  {
    quote: '자신에 대해 긍정적은 생각을 하는 방법은 긍정적인 행동을 하는 것이다. 사람은 생각한 대로 살지 않으면 사는대로 생각한다.',
    author: '...',
  },
  {
    quote: '노력에서 오는 고통이 실패의 고통보다 견디기 훨씬 쉽다. 노력은 실패의 고통을 조금씩 미리 가져오는 것이다.',
    author: '...',
  },
  {
    quote: '대추나무에 상처를 내면 그해 대추가 더 많이 열린다. 조개 속 상처가 바로 진주이고, 많이 밟힌 길이 좋은 길이 된다. 모두가 상처의 힘이다. 실패도 스펙이다.',
    author: '안영옥',
  },
  {
    quote: '사라지는 시간은 우리 책임이다.',
    author: '...',
  },

];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const randNum = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[randNum].quote;
author.innerText = quotes[randNum].author;