document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const tooltip = document.querySelector('.tooltip');
  let currentTooltip = null;

  container.addEventListener('click', (event) => {
    const target = event.target.closest('.has-tooltip');

    if (!target) return;

    event.preventDefault();

    const tooltipText = target.getAttribute('title');
    const position = target.dataset.position || 'top';

    // If clicking the same tooltip, just toggle it
    if (currentTooltip === target) {
      tooltip.classList.toggle('tooltip_active');
      if (!tooltip.classList.contains('tooltip_active')) {
        currentTooltip = null;
      }
      return;
    }

    // Set new tooltip content and show it
    tooltip.textContent = tooltipText;
    tooltip.classList.add('tooltip_active');
    currentTooltip = target;

    const targetRect = target.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    let left, top;

    switch (position) {
      case 'bottom':
        left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
        top = targetRect.bottom + 5;
        break;
      case 'left':
        left = targetRect.left - tooltipRect.width - 5;
        top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
        break;
      case 'right':
        left = targetRect.right + 5;
        top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
        break;
      case 'top':
      default:
        left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
        top = targetRect.top - tooltipRect.height - 5;
        break;
    }

    left = Math.max(5, Math.min(left, window.innerWidth - tooltipRect.width - 5));
    top = Math.max(5, Math.min(top, window.innerHeight - tooltipRect.height - 5));

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  });
});
