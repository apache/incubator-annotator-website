// Uses the PonyMail API to gather remote list of recent messages
const recent_messages_url = 'https://lists.apache.org/api/stats.lua?list=dev&domain=annotator.apache.org';

const Item = ({id, subject}) => `
<a class="item" rel="external" href="https://lists.apache.org/thread.html/${id}">${subject}</a>
`;

const $h = document.getElementById('recent-mailings');

fetch(recent_messages_url)
  .then(r => r.json())
  .then((msgs) => {
    if ('emails' in msgs && msgs.emails.length > 0) {
      for (let i = 0; i < 5; i++) {
        $h.insertAdjacentHTML('afterend', Item(msgs.emails[i]));
      }
    }
  });
