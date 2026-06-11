document.querySelectorAll('details').forEach(d => {
  d.addEventListener('toggle', () => {
    if (d.open) {
      document.querySelectorAll('details[open]').forEach(outro => {
        if (outro !== d) outro.removeAttribute('open');
      });
    }
  });
});