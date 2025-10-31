function copyLink(id) {
  const input = document.getElementById(id);
  input.select();
  input.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(input.value);
  alert("Affiliate link copied!");
}

function copyRef() {
  const input = document.getElementById("refLink");
  input.select();
  navigator.clipboard.writeText(input.value);
  alert("Referral link copied!");
}
