function AbrirFrame() {
      const frame = document.getElementById("ubi");
      frame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799152727!2d-74.25987368715893!3d40.69767006791861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250baf18b18f3%3A0x8e1f91e9f5dbca69!2sNew%20York%2C%20EE.%20UU.!5e0!3m2!1ses!2smx!4v1694443314448!5m2!1ses!2smx";
      frame.style.display = "block";
    }

    // --- Calendario ---
    const daysEl = document.getElementById('days');
    const titleEl = document.getElementById('cal-title');
    const subEl = document.getElementById('cal-sub');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let current = new Date();

    function renderCalendar(date) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const lastDate = new Date(year, month + 1, 0).getDate();
      const monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
      titleEl.textContent = `${monthNames[month]} ${year}`;
      subEl.textContent = `Hoy: ${new Date().toLocaleDateString()}`;
      daysEl.innerHTML = '';
      for(let i=0;i<firstDay;i++){
        const blank = document.createElement('div');
        blank.className = 'day other';
        daysEl.appendChild(blank);
      }
      for(let d=1; d<=lastDate; d++){
        const cell = document.createElement('button');
        cell.className = 'day';
        cell.type = 'button';
        cell.textContent = d;
        const today = new Date();
        if(d === today.getDate() && month === today.getMonth() && year === today.getFullYear()){
          cell.classList.add('today');
        }
        cell.addEventListener('click', ()=>{
          document.querySelectorAll('.day').forEach(x=>x.classList.remove('selected'));
          cell.classList.add('selected');
          subEl.textContent = `Has seleccionado: ${d} ${monthNames[month]} ${year}`;
        });
        daysEl.appendChild(cell);
      }
    }

    prevBtn.addEventListener('click', ()=>{ current = new Date(current.getFullYear(), current.getMonth()-1, 1); renderCalendar(current); });
    nextBtn.addEventListener('click', ()=>{ current = new Date(current.getFullYear(), current.getMonth()+1, 1); renderCalendar(current); });
    renderCalendar(current);

    // --- Cronometro ---
    const fechaFinal = new Date("2025-10-14T00:30:00").getTime();

  const timer = setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaFinal - ahora;

    if (diferencia <= 0) {
      document.getElementById("time").textContent = "¡Tiempo finalizado!";
      clearInterval(timer);
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("time").textContent =
      `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }, 1000);
