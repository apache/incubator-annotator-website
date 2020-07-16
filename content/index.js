// Uses the PonyMail API to gather remote list of recent messages
const recent_messages_url = 'https://lists.apache.org/api/stats.lua?list=dev&domain=annotator.apache.org';
const display_count = 10;

let a = document.createElement('a');
a.className = 'item';
a.rel = 'external';

const $recent = document.getElementById('recent-mailings');

fetch(recent_messages_url)
  .then(r => r.json())
  .then((msgs) => {
    if ('emails' in msgs && msgs.emails.length > 0) {
      msgs.emails.reverse();
      for (let i = 0; i < display_count; i++) {
        let _a = a.cloneNode(a);
        _a.href = 'https://lists.apache.org/thread.html/' + msgs.emails[i].id;
        _a.textContent = msgs.emails[i].subject;
        $recent.append(_a);
      }
    }
  });
