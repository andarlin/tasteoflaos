
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const minusBtn2 = document.querySelector(".minus-btn2");
const plusBtn2 = document.querySelector(".plus-btn2");
const minusBtn3 = document.querySelector(".minus-btn3");
const plusBtn3 = document.querySelector(".plus-btn3");
const menu1Input = document.querySelector(".menu1-input");
const menu2Input = document.querySelector(".menu2-input");
const menu3Input = document.querySelector(".menu3-input");
const confirmScreen = document.querySelector(".confirm-screen");
const confirmScreen2 = document.querySelector(".confirm-screen2");
const confirmScreen3 = document.querySelector(".confirm-screen3");
const confirmBtn = document.querySelector(".confirm-btn");
const confirmBtn2 = document.querySelector(".confirm-btn2");
const confirmBtn3 = document.querySelector(".confirm-btn3");
const menuConfirmContainer = document.querySelector(".menu-confirm-container");
const menuTotal = document.querySelector(".menu-total");
// const orderConfirmTotalPrice = document.querySelector(".order-confirm-total-price");
const innerTotal = document.querySelector(".inner-total");
const sideDish1 = document.querySelector(".side-dish1");
const sideDish2 = document.querySelector(".side-dish2");
const sideDish3 = document.querySelector(".side-dish3");
const sideDish4 = document.querySelector(".side-dish4");
const sideDish5 = document.querySelector(".side-dish5");
const sideDish1Confirm = document.querySelector(".sideDish1-confirm");
const sideDish2Confirm = document.querySelector(".sideDish2-confirm");
const sideDish3Confirm = document.querySelector(".sideDish3-confirm");
const sideDish4Confirm = document.querySelector(".sideDish4-confirm"); 
const sideDish5Confirm = document.querySelector(".sideDish5-confirm");
const confirmOrderBtn = document.querySelector(".confirm-order-btn");
const thankYouBtn = document.querySelector(".thank-you-btn");
const confirmContainerThankYou = document.querySelector(".confirm-container-thank-you");
const modal = document.querySelector(".menu-modal");
const closeBtn = document.querySelector(".cancel-order-btn");
const confirmContainer1 = document.querySelector(".confirm-container1");
const menuSubmitContainer = document.querySelector(".menu-submit-container");
const menuSubmitBtn = document.querySelector(".menu-submit-btn");
const messageInput = document.querySelector(".message__input");
const orderConfirmTotalContainer = document.querySelector(".order-confirm-total-container");
const materialBtn = document.querySelectorAll(".materialBtn");





class Order {
  _menu1 = 0;
  _menu2 = 0;
  _menu3 = 0;
  _menu1Cost = 28;
  _menu2Cost = 16;
  _menu3Cost = 12;
  _sideDish1Cost = 0;
  _sideDish2Cost = 0;
  _sideDish3Cost = 0;
  _sideDish4Cost = 0;
  _sideDish5Cost = 0;

  constructor(){
    this.menuCount();
    this.menuConfirm();
    this.sideDishConfirm();
    this.modal();
    this.menuObjectFunction();
    this.marterialButton();
    this.emailjs();


  }


//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//1. Menu Count
  menuCount(){
    const minusFunction = (input ) => {
      if (input.value > 0) {
          input.value--;
      }
    }
    const plusFunction = (input) => {
      input.value++;
    }
    minusBtn.addEventListener("click", () => {
      minusFunction(menu1Input);
    }
      );
      plusBtn.addEventListener("click", () => {
          plusFunction(menu1Input);
          }
      );
      minusBtn2.addEventListener("click", () => {
          minusFunction(menu2Input);
          }
      );
      plusBtn2.addEventListener("click", () => {
          plusFunction(menu2Input);
          }
    
      );

      minusBtn3.addEventListener("click", () => {
        minusFunction(menu3Input);
        }
    );
      plusBtn3.addEventListener("click", () => {
          plusFunction(menu3Input);
      } 
      );

    }
    ////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    //2. Menu Confirm
    
    menuConfirm(){
      confirmBtn.addEventListener("click", () => {
        this._menu1 = menu1Input.value;
        console.log(this._menu1);

        if(this._menu1.length > 0){

          const menu1CostConfirm = this._menu1Cost * this._menu1;
          console.log(menu1CostConfirm);
          
          const menu1TotalConfirm = `
          <div class="menu1-confirm">
          <div class="menu-image-container">
          <img src="images/larb4.jpg" class="menu-confirm-img" alt="menu">
          </div>
          <div class="menu1-name">Laos Special</div>
          <div class="menu1-total">  <strong>X</strong> &nbsp; <div class="menu1-count">${this._menu1}</div> </div>
          <div class="menu1-price"><div>=</div> &nbsp; $ ${menu1CostConfirm}</div>
          <div class="menu1-delete delete-box"><img src="images/trash.png" class="trash-img"></div>
      </div>
          `
          menuConfirmContainer.insertAdjacentHTML("beforeend", menu1TotalConfirm);

          this.totalOrderCost();
          this.deleteMenu();


          confirmBtn.classList.add("confirm-Active");
          confirmScreen.style.display = "block";



        }
      });

      confirmBtn2.addEventListener("click", () => {
        this._menu2 = menu2Input.value;
        console.log(this._menu2);

          if(this._menu2.length > 0){
            
            const menu2CostConfirm = this._menu2Cost * this._menu2;
            console.log(menu2CostConfirm);

            const menu2TotalConfirm = `
            <div class="menu2-confirm">
            <div class="menu-image-container">
            <img src="images/food6.jpg" class="menu-confirm-img" alt="menu">
            </div>
            <div class="menu2-name">Beef Noodle Soup Large</div>
            <div class="menu2-total">  <strong>X</strong> &nbsp; <div class="menu2-count">${this._menu2}</div> </div>
            <div class="menu2-price"><div>=</div> &nbsp; $ ${menu2CostConfirm}</div>
            <div class="menu2-delete delete-box"><img src="images/trash.png" class="trash-img"></div>
        </div>
            `
            menuConfirmContainer.insertAdjacentHTML("beforeend", menu2TotalConfirm);

            this.totalOrderCost();
            this.deleteMenu();

            confirmBtn2.classList.add("confirm-Active");
            confirmScreen2.style.display = "block";

          }
      });

      confirmBtn3.addEventListener("click", () => {
        this._menu3 = menu3Input.value;
        console.log(this._menu3);

          if(this._menu3.length > 0){
              
              const menu3CostConfirm = this._menu3Cost * this._menu3;
              console.log(menu3CostConfirm);
  
              const menu3TotalConfirm = `
              <div class="menu3-confirm">
              <div class="menu-image-container">
              <img src="images/food6.jpg" class="menu-confirm-img" alt="menu">
              </div>
              <div class="menu3-name">Beef Noodle Soup Small</div>
              <div class="menu3-total">  <strong>X</strong> &nbsp; <div class="menu3-count">${this._menu3}</div> </div>
              <div class="menu3-price"><div>=</div> &nbsp; $ ${menu3CostConfirm}</div>
              <div class="menu3-delete delete-box"><img src="images/trash.png" class="trash-img"></div>
          </div>
              `
              menuConfirmContainer.insertAdjacentHTML("beforeend", menu3TotalConfirm);
              
              this.totalOrderCost();
              this.deleteMenu();

              confirmBtn3.classList.add("confirm-Active");
              confirmScreen3.style.display = "block";


          }
      });

    }
    ////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    //3. Side Dish Confirm
    sideDishConfirm(){

      sideDish1.addEventListener("click", () => {
        sideDish1Confirm.classList.toggle("sideDish-Active");

        if(sideDish1Confirm.classList.contains("sideDish-Active")){
          this._sideDish1Cost = 10;
          this.totalOrderCost();
        }else{
          this._sideDish1Cost = 0;
          this.totalOrderCost();
        }
      });

      sideDish2.addEventListener("click", () => {
        sideDish2Confirm.classList.toggle("sideDish-Active");

        if(sideDish2Confirm.classList.contains("sideDish-Active")){
          this._sideDish2Cost = 4;
          this.totalOrderCost();
        }else{
          this._sideDish2Cost = 0;
          this.totalOrderCost();
        }
      });

      sideDish3.addEventListener("click", () => {
        sideDish3Confirm.classList.toggle("sideDish-Active");

        if(sideDish3Confirm.classList.contains("sideDish-Active")){
          this._sideDish3Cost = 4;
          this.totalOrderCost();
        }else{
          this._sideDish3Cost = 0;
          this.totalOrderCost();
        }
      });

      sideDish4.addEventListener("click", () => {
        sideDish4Confirm.classList.toggle("sideDish-Active");

        if(sideDish4Confirm.classList.contains("sideDish-Active")){
          this._sideDish4Cost = 3;
          this.totalOrderCost();
        }else{
          this._sideDish4Cost = 0;
          this.totalOrderCost();
        }
      });

      sideDish5.addEventListener("click", () => {
        sideDish5Confirm.classList.toggle("sideDish-Active");

        if(sideDish5Confirm.classList.contains("sideDish-Active")){
          this._sideDish5Cost = 7;
          this.totalOrderCost();
        }else{
          this._sideDish5Cost = 0;
          this.totalOrderCost();
        }
      });

    }


    ////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    //4. delete menu
    deleteMenu(){

      menuConfirmContainer.addEventListener("click", (e) => {
        const clicked = e.target.closest(".menu1-delete");

        if(!clicked) return;


        if(clicked){
          clicked.parentElement.remove();

          //clear input
          menu1Input.value = 0;
          this._menu1 = 0;
        }

        //clear menuTotal
        this.totalOrderCost();

        //remove confirm-Active class from confirmBtn
        confirmBtn.classList.remove("confirm-Active");
        confirmScreen.style.display = "none";
        

      });

      menuConfirmContainer.addEventListener("click", (e) => {
        const clicked = e.target.closest(".menu2-delete");

        if(!clicked) return;
          clicked.parentElement.remove();

          //clear input
          menu2Input.value = 0;
          this._menu2 = 0;

          //clear menuTotal
          this.totalOrderCost();

          //remove confirm-Active class from confirmBtn
          confirmBtn2.classList.remove("confirm-Active");
          confirmScreen2.style.display = "none";
      });

      menuConfirmContainer.addEventListener("click", (e) => {
        const clicked = e.target.closest(".menu3-delete");

        if(!clicked) return;
          clicked.parentElement.remove();

          //clear input
          menu3Input.value = 0;
          this._menu3 = 0;

          //clear menuTotal
          this.totalOrderCost();

          //remove confirm-Active class from confirmBtn
          confirmBtn3.classList.remove("confirm-Active");
          confirmScreen3.style.display = "none";
      });
      
    }
    
    ////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    //5. total order cost

    totalOrderCost(){
        
        const menu1TotalCost = this._menu1Cost * this._menu1;
        const menu2TotalCost = this._menu2Cost * this._menu2;
        const menu3TotalCost = this._menu3Cost * this._menu3;
        const sideDish1TotalCost = this._sideDish1Cost;
        const sideDish2TotalCost = this._sideDish2Cost;
        const sideDish3TotalCost = this._sideDish3Cost;
        const sideDish4TotalCost = this._sideDish4Cost;
        const sideDish5TotalCost = this._sideDish5Cost;

    const totalCost = menu1TotalCost + menu2TotalCost + menu3TotalCost + sideDish1TotalCost + sideDish2TotalCost + sideDish3TotalCost + sideDish4TotalCost + sideDish5TotalCost;
        
        menuTotal.textContent = totalCost;
        // orderConfirmTotalPrice.textContent = totalCost;
        innerTotal.textContent = `Total = $ ${totalCost}`;

    }
    ////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////
    //6. bootstrap modal
    modal(){
      menuSubmitBtn.addEventListener("click", () => {
        modal.classList.add("open-modal");
      });

      closeBtn.addEventListener("click", () => {
        modal.classList.remove("open-modal");
      });

      confirmOrderBtn.addEventListener("click", () => {
        confirmContainer1.classList.add("hidden");
        confirmContainerThankYou.classList.remove("hidden");
      });

    }
    ////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////
    //7. menu object function
    menuObjectFunction(){

      menuSubmitContainer.addEventListener("click", e => {
        e.preventDefault();
        const clicked = e.target.closest(".menu-submit-btn");

        if(!clicked) return;

        //get values from input
        const menu1Count = menu1Input.value;
        const menu2Count = menu2Input.value;
        const menu3Count = menu3Input.value;
        const sideDish1Count = sideDish1.value;
        const sideDish2Count = sideDish2.value;
        const sideDish3Count = sideDish3.value;
        const sideDish4Count = sideDish4.value;
        const sideDish5Count = sideDish5.value;


      // create an object to store the menu items
      const menuObject = {
        laosSpecial: {
          name: "Laos Special",
          price: 28,
          count: menu1Count,
        },
        beefNoodleSoupLarge: {
          name: "Beef Noodle Soup Large",
          price: 16,
          count: menu2Count,
        },
        beefNoodleSoupSmall: {
          name: "Beef Noodle Soup Small",
          price: 12,
          count: menu3Count,
        },
        sideDish1: {
          name: "Larb",
          price: 10,
          count: sideDish1Count,
        },
        sideDish2: {
          name: "Khao niao",
          price: 4,
          count: sideDish2Count,
        },
        sideDish3: {
          name: "Tam som",
          price: 4,
          count: sideDish3Count,
        },
        sideDish4: {
          name: "Jaew",
          price: 3,
          count: sideDish4Count,
        },
        sideDish5: {
          name: "Sien Savanh",
          price: 7,
          count: sideDish5Count,
        },
      };



      const customerMessage = `
      ${menuObject.laosSpecial.name} x ${menuObject.laosSpecial.count} <br> 
      ${menuObject.beefNoodleSoupLarge.name} x ${menuObject.beefNoodleSoupLarge.count} <br> 
      ${menuObject.beefNoodleSoupSmall.name} x ${menuObject.beefNoodleSoupSmall.count} <br> 
      ${menuObject.sideDish1.name} x ${menuObject.sideDish1.count} <br> 
      ${menuObject.sideDish2.name} x ${menuObject.sideDish2.count} <br> 
      ${menuObject.sideDish3.name} x ${menuObject.sideDish3.count} <br> 
      ${menuObject.sideDish4.name} x ${menuObject.sideDish4.count} <br> 
      ${menuObject.sideDish5.name} x ${menuObject.sideDish5.count} <br>
      Total = $ ${menuTotal.textContent}
      `
      console.log(customerMessage); 

      messageInput.value = customerMessage;

      orderConfirmTotalContainer.insertAdjacentHTML("beforeend", customerMessage);
  
    });
  }
  ////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  //8. material button
  marterialButton(){
    materialBtn.forEach(btn => {
      btn.addEventListener("click", (e) => {

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        console.log(x, y);

        let ripples = document.createElement("span");
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
        this.appendChild(ripples);

        setTimeout(() => {
          ripples.remove();
        }, 1000);
    
      });
    });
  }
  ////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  //9. emailjs
  emailjs(){

    window.onload = function() {
        
      document.getElementById('takeOutForm').addEventListener('submit', function(event) {
          event.preventDefault();
          // generate a five digit number for the contact_number variable
          this.contact_number.value = Math.random() * 100000 | 0;
          // these IDs from the previous steps
          emailjs.sendForm("service_1nen55o","template_3h3c89a", '#takeOutForm')
          .then(function() {
              console.log('SUCCESS!');
              alert("Your order has been sent. Thank you!");
              }, function(error) {
                  console.log('FAILED...', error);
              });
      });
    }

  }













}
  const order = new Order();