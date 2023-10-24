const selectPlan = (planNumber) => {
  const plan1Element = document.querySelector(`#plan1`);
  const plan2Element = document.querySelector(`#plan2`);
  const plan3Element = document.querySelector(`#plan3`);
  plan1Element.classList.remove('plan--selected');
  plan2Element.classList.remove('plan--selected');
  plan3Element.classList.remove('plan--selected');
  const planElement = document.querySelector(`#plan${planNumber}`);
  planElement.classList.add('plan--selected');
};

selectPlan(1);
selectPlan(2);
selectPlan(3);
selectPlan(2);
