
const main_body = document.body
const config = { attributes: false, childList: true, subtree: true };

const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        if(typeof(mutation.addedNodes) !== "undefined" && mutation.addedNodes.length > 0) {
            var element_containing_follow_checkbox = Array.from(mutation.addedNodes).find(obj => {
                return obj.innerHTML !== undefined && obj.innerHTML.includes("follow-company-checkbox")
              })
            if (element_containing_follow_checkbox !== undefined) {
                let follow_company_checkbox = document.querySelector("#follow-company-checkbox")
                if(follow_company_checkbox != null) {
                    follow_company_checkbox.checked = false
                }
            }
        }
      } 
    }
  };
  
  // Create an observer instance and start observing...
  const observer = new MutationObserver(callback);
  observer.observe(main_body, config);
