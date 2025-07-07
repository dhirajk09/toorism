   
document.addEventListener("DOMContentLoaded", function () {
  const cardModalMap = {
    baidyanathdhamCard : "baidyanathdhamModal",
    JagannthCard: "JagannthModal",
    JharnababaCard: "JharnababaModal",
    bhoothnaathCard:"bhoothnaathModal",
    luguburuCard:"luguburuModal",
    naulakhaCard:"naulakhaModal",
    hariharCard:"hariharModal",
    deoriCard:"deoriModal",
    chhinmastikaCard:"chhinmastikaModal",
    jaydaCard:"jaydaCardModal",
    jagannathCard:"jagannathModal",
    rankiniCard:"rankiniModal",
    rajrappaCard:"rajrappaModal",
    basukinathCard:"basukinathModal",
    suryaCard:"suryaCardModal" ,
    ayyappaCard:"ayyappaModal",
    bibhutibhushanCard:"bibhutibhushanModal",
    faashiCard:"faashiModal",
    chaletCard:"chaletModal",
    palamuCard:"palamuModal",
    maansinghCard:"maansinghModal",
    megalithsCard:"megalithsModal",
    tanginathCard:"tanginathModal",
    navratangarhCard:"navratangarhModal",
    khandoliCard:"khandoliModal",
    parasnathCard:"parasnathModal",
    netarhatCard:"netarhatModal",
    hundruCard:"hundruModal",
    sanskritiCard:"sanskritiModal",
    jamshedpurCard:"jamshedpurModal",
    tribalCard:"tribalModal",
    jainCard:"jainModal",
    ranchiCard:"ranchiModal",
    stateCard:"stateModal",

  };

  Object.keys(cardModalMap).forEach(cardId => {
    const card = document.getElementById(cardId);
    const modalId = cardModalMap[cardId];
    const modalElement = document.getElementById(modalId);

    if (card && modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      card.addEventListener("click", () => modal.show());
    }
  });
});

