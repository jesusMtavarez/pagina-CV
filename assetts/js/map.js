document.addEventListener("DOMContentLoaded", (Event) => {

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d835.8973027393846!2d9.147443832942068!3d45.19494624683537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47872654bfe80179%3A0xf1faca954ee1880a!2sNeM%20S.r.l.!5e0!3m2!1sit!2sit!4v1701495732833!5m2!1sit!2sit" ></iframe>
`;
    }, 500);
       
}) 
   
 