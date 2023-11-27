
const selectCategory = (e, category) => {
    let options = document.querySelectorAll(".option");
    options.forEach((element) => {
      element.classList.remove("active");
    });
   
    e.target.classList.add("active");
   
  };


  
  const buttons = document.querySelectorAll('.option');
  const contentDiv = document.getElementById('content');
  
  for (const button of buttons) {
    button.addEventListener('click', () => {
      const option = button.getAttribute('data-option');
      updateContent(option);
    });
  }
  
  function updateContent(option) {
    if (option === 'discharge') {
      contentDiv.innerHTML = `
      <h1>Discharge or Rate of Flow in Water Resource Engineering</h1>

      <h2>Definition</h2>
  
      <p>In water resource engineering, discharge is the volumetric flow rate of water, typically measured in cubic meters per second (m³/s) or cubic feet per second (cfs). It represents the volume of water passing through a specific point in a river, channel, or conduit per unit time. Discharge is a crucial parameter for understanding and managing water resources.</p>
  
      <h2>Calculating Discharge</h2>
  
      <p>The most common method for calculating discharge is the area-velocity method. This method involves measuring the cross-sectional area of the river or channel and the average velocity of the water. The discharge is then calculated as the product of the cross-sectional area and the average velocity.</p>
  
      <p>The formula for calculating discharge is:</p>
  
      <p>Discharge (Q) = Area (A) × Velocity (V)</p>
  
      <p>Where:</p>
  
      <ul>
          <li>Q is the discharge in cubic meters per second (m³/s) or cubic feet per second (cfs)</li>
          <li>A is the cross-sectional area in square meters (m²) or square feet (ft²)</li>
          <li>V is the average velocity in meters per second (m/s) or feet per second (ft/s)</li>
      </ul>
  
      <h2>Practical Applications of Discharge</h2>
  
      <p>Discharge is a critical parameter for various applications in water resource engineering, including:</p>
  
      <ul>
          <li>Flood forecasting and management</li>
          <li>Designing hydraulic structures such as dams, bridges, and culverts</li>
          <li>Assessing water availability for irrigation, hydropower generation, and other purposes</li>
          <li>Evaluating water quality and pollution control</li>
          <li>Studying stream morphology and sediment transport</li>
      </ul>
  
      <h2>Explanation of Discharge</h2>
  
      <p>Discharge is a dynamic parameter that can vary significantly over time due to factors such as rainfall, snowmelt, and human activities. Understanding the patterns of discharge is essential for effective water management.</p>
  
      <p>Hydrologists often use hydrographs to visualize discharge patterns over time. A hydrograph is a graph that shows the variation of discharge versus time. Hydrographs can be used to identify periods of high and low flow, assess the impact of rainfall events, and track long-term trends in discharge.</p>
  
      <h2>Definition of Rate of Flow</h2>
  
      <p>The terms "discharge" and "rate of flow" are often used interchangeably in water resource engineering. However, there is a slight distinction between the two. Discharge is specifically defined as the volumetric flow rate, while the rate of flow can refer to both volumetric flow rate and mass flow rate.</p>
  
      <p>The mass flow rate of water is the mass of water passing through a specific point per unit time. It is typically measured in kilograms per second (kg/s) or pounds per second (lbs/s). The mass flow rate can be calculated from the discharge and the density of water.</p>
  
      <h2>Factors Affecting Discharge</h2>
  
      <p>Numerous factors can influence the discharge of a river, channel, or conduit. These factors can be broadly categorized into two groups:</p>
  
      <h3>Natural Factors</h3>
  
      <ul>
          <li>Rainfall and snowfall</li>
          <li>Snowmelt</li>
          <li>Evaporation and transpiration</li>
          <li>Infiltration and groundwater flow</li>
          <li>Channel characteristics such as geometry and topography</li>
      </ul>
  
      <h3>Human Factors</h3>
  
      <ul>
          <li>Water withdrawals for irrigation, domestic use, and industrial use</li>
          <li>Dam operations and reservoir releases</li>
          <li>Land use changes such as deforestation and urbanization</li>
      </ul>
  
      <p>Understanding the complex interplay of these factors is crucial for accurately predicting and managing</p>
      `;
    } else if (option === 'a') {
      contentDiv.innerHTML = `

      <h1>Runoff in Water Resource Engineering</h1>

      <img src="runoff.jpg" alt="Runoff Diagram" class="image-container">
  
      <h2>Definition</h2>
  
      <p>Runoff is the portion of precipitation that makes its way to streams, rivers, lakes, and oceans. It is the part of the water cycle that connects the land to the water bodies.</p>
  
      <h2>Principal Components of Runoff</h2>
  
      <p>
          Runoff is composed of three principal components:
  
          <ul>
              <li><strong>Surface runoff</strong> - This is the water that flows over the land surface after precipitation exceeds the infiltration capacity of the soil. Surface runoff is the most visible component of runoff and can cause erosion and flooding.</li>
  
              <li><strong>Subsurface runoff</strong> - This is the water that infiltrates the soil and then moves laterally through the soil layers. Subsurface runoff is slower than surface runoff and can contribute to base flow in streams.</li>
  
              <li><strong>Groundwater runoff</strong> - This is the water that infiltrates the soil and then moves vertically through the rock layers to the groundwater table. Groundwater runoff can contribute to base flow in streams and can also be a source of water for wells.</li>
          </ul>
  
          <p>The relative proportions of these three components depend on several factors, including the type of soil, the land use, and the intensity and duration of precipitation.</p>
      </p>
  
      <h2>Factors Affecting Runoff</h2>
  
      <p>Runoff is a complex process that is affected by a number of factors, including:</p>
  
      <ul>
          <li><strong>Precipitation</strong> - The amount, intensity, and duration of precipitation are the most important factors affecting runoff. More precipitation generally leads to more runoff.</li>
  
          <li><strong>Infiltration</strong> - Infiltration is the process by which water enters the soil. The infiltration capacity of the soil depends on the type of soil, the land use, and the moisture content of the soil. Higher infiltration rates reduce runoff.</li>
  
          <li><strong>Evapotranspiration</strong> - Evapotranspiration is the process by which water is transferred from the land surface to the atmosphere through evaporation and transpiration. Higher evapotranspiration rates reduce runoff.</li>
  
          <li><strong>Land use</strong> - Different types of land use have different infiltration and evapotranspiration rates, which can affect runoff. For example, forests generally have higher infiltration rates than urban areas.</li>
  
          <li><strong>Topography</strong> - The slope and shape of the land can affect runoff. Steeper slopes can cause water to flow more quickly, which can increase runoff.</li>
      </ul>
  
      <h2>Runoff Measurement and Estimation</h2>
  
      <p>Runoff is typically measured using stream gauges. Stream gauges measure the stage, or height, of the water in a stream. The discharge, or flow rate, of the stream can then be calculated using the stage-discharge relationship.</p>
  
      <p>Runoff can also be estimated using a variety of mathematical models. These models typically take into account the factors listed above to estimate runoff from a particular watershed.</p>
  
      <h2>Importance of Runoff</h2>
  
      <p>Runoff is an important component of the water cycle and is essential for a number of purposes, including:</p>
  
      <ul>
          <li><strong>Water supply</strong> - Runoff is a major source of water for drinking, irrigation, and industrial use.</li>
  
          <li><strong>Hydropower generation</strong> - Runoff is used to generate hydroelectric power.</li>
  
          <li><strong>Flood control</strong> - Runoff management is important for reducing flood damage.</li>
  
          <li><strong>Ecosystem health</strong> - Runoff can affect the health of aquatic ecosystems.</li> `;
    } else if (option === 'b') {
      contentDiv.innerHTML = ` <h1>3 Methods of Finding Discharge in Water Resource Engineering</h1>

      <p>Discharge, also known as volumetric flow rate, is a crucial parameter in water resource engineering, representing the volume of water passing through a specific point in a river, channel, or conduit per unit time. Measuring and estimating discharge accurately is essential for various water management applications, including flood forecasting, hydraulic design, water supply assessment, and pollution control.</p>
  
      <h2>Volumetric Method</h2>
  
      <p>The volumetric method, also known as the bucket and stopwatch method, is a simple and direct approach to measure discharge. This method involves collecting a known volume of water from the stream or channel over a specific time interval and then calculating the discharge based on the volume and time measurements.</p>
  
      <p>Formula:</p>
  
      <p class="formula">Q = V/t</p>
  
      <p>Where:</p>
  
      <ul>
          <li>Q is the discharge in cubic meters per second (m³/s) or cubic feet per second (cfs)</li>
          <li>V is the volume of water collected in cubic meters (m³) or cubic feet (ft³)</li>
          <li>t is the time interval in seconds (s)</li>
      </ul>
  
      <p>The volumetric method is most suitable for small streams and channels where the flow is relatively uniform. However, it is limited by the accuracy of volume and time measurements, which can be affected by human error or equipment limitations.</p>
  
      <h2>Slope-Area Method</h2>
  
      <p>The slope-area method, also known as the Manning's Equation method, is an indirect method for estimating discharge based on the slope and cross-sectional area of the stream or channel. This method utilizes principles of fluid mechanics to relate the flow velocity to the channel characteristics.</p>
      
      <h4>Methods of Finding Discharge</h4>
      
      <p>There are two main methods of finding the discharge of a stream or channel:</p>
      
    
          <h3><a href="numerical.html">Manning's Formula</a></h3>
     
      
      <p>Formula:</p>
      
      <p class="formula">  Q = AR^2/3S^(1/2)n</p>
      
      <p>Where:</p>
      
      <ul>
          <li>Q is the discharge in cubic meters per second (m³/s) or cubic feet per second (cfs)</li>
          <li>A is the cross-sectional area of the stream or channel in square meters (m²) or square feet (ft²)</li>
          <li>R is the hydraulic radius in meters (m) or feet (ft)</li>
          <li>S is the slope of the stream or channel</li>
          <li>n is the Manning's roughness coefficient, which depends on the channel material and surface conditions</li>
      </ul>
      
      <p>The slope-area method is widely used for estimating discharge in natural streams and channels, particularly for larger streams where direct measurement methods are impractical. It requires accurate measurements of the cross-sectional area and slope, along with an appropriate selection of the Manning's roughness coefficient.</p>
      
      <ul>
         
          <li>Chezy's Formula</li>
      </ul>
  
  
  <p>Chezy's formula is an empirical equation that relates the mean flow velocity in an open channel to the hydraulic radius, the slope of the energy grade line, and a dimensionless coefficient called the Chezy coefficient. It is expressed as:</p>
  
  <p class="formula">V = C√(RS)</p>
  
  <p>Where:</p>
  
  <ul>
    <li>V is the mean flow velocity in meters per second (m/s)</li>
    <li>C is the Chezy coefficient, a dimensionless empirical coefficient that depends on the channel material and surface conditions</li>
    <li>R is the hydraulic radius in meters (m), defined as the cross-sectional area of the flow divided by the wetted perimeter</li>
    <li>S is the slope of the energy grade line, defined as the change in elevation of the energy grade line per unit length of the channel</li>
  </ul>
  
  <p>Chezy's formula is widely used in open channel hydraulics to estimate the flow velocity and discharge of rivers, canals, and other open channels. It is particularly useful for situations where the channel geometry is irregular or the flow conditions are not fully developed.</p>
  
  <p>The Chezy coefficient (C) is an empirical parameter that must be determined experimentally or from tables of values based on the channel material and surface conditions. The value of C can vary significantly depending on the roughness of the channel bed and banks, the presence of vegetation or obstructions, and the degree of channel meandering.</p>
  
  <p>Once the Chezy coefficient is determined, the mean flow velocity can be calculated using Chezy's formula. The discharge (Q) of the channel can then be determined using the following equation:</p>
  
  <p class="formula">Q = AV</p>
  
  <p>Where:</p>
  
  <li>Q is the discharge in cubic meters per second (m³/s)</li>
  <li>A is the cross-sectional area of the flow in square meters (m²)</li>
  <li>V is the mean flow velocity in meters per second (m/s)</li>
  </p>
  
      <p>Manning's formula is an empirical equation that relates the discharge of a stream or channel to the slope, hydraulic radius, and Manning's roughness coefficient. Chezy's formula is a more theoretical equation that relates the discharge of a stream or channel to the slope, hydraulic radius, and a dimensionless coefficient called Chezy's coefficient.</p>
      
      <p>Both Manning's formula and Chezy's formula can be used to estimate the discharge of a stream or channel with reasonable accuracy. However, Manning's formula is more commonly used because it is simpler to apply and there are more readily available values for the Manning's roughness coefficient.</p>
       <h2>Velocity-Area Method</h2>
  
      <p>The velocity-area method is the most common method for measuring discharge in rivers and channels. This method involves measuring the cross-sectional area of the stream or channel and the average velocity of the water flowing through the cross-section.</p>
  
      <p>Formula:</p>
    
     <p class="formula">A= W1 (a1 + a2)/2 + W2 (a2 + a3)/2 W+(a3+a4)/2</p>
   
   

      <img src="velocity.jpg" alt=" Diagram" id="velocity" class="image-container">
  
      <p>Where:</p>
  
      <ul>
          <li>Q is the discharge in cubic meters per second (m³/s) or cubic feet per second (cfs)</li>
          <li>A is the cross-sectional area of the stream or channel in square meters (m²) or square feet (ft²)</li>
          <li>v is the average velocity of the water in meters per second (m/s) or feet per second (ft/s)</li>
      </ul>
      
      <p>The velocity-area method requires accurate measurements of both the cross-sectional area and the average velocity. The cross-sectional area can be measured using various techniques, such as soundings, echo sounders, or electronic surveying equipment. The average velocity can be measured using a variety of methods, including current meters, floats, or acoustic Doppler velocimeters (ADVs).</p>
      
      <p>The velocity-area method is the most accurate method for measuring discharge in rivers and channels, but it also requires more specialized equipment and expertise compared to the volumetric or slope-area methods.</p>
      
      <h2>Conclusion</h2>
      
      <p>The choice of method for measuring or estimating discharge depends on the specific circumstances, such as the size and type of water body, the accuracy requirements, and the availability of equipment and resources. The volumetric method is a simple and straightforward approach for small streams, while the slope-area method is suitable for estimating discharge in larger streams based on channel characteristics. The velocity-area method is the most accurate method for measuring discharge in rivers and channels, but it requires specialized equipment and expertise.</p>
      
      <p>Water resource engineers carefully consider these factors and select the most appropriate method to ensure accurate and reliable discharge measurements, which are essential for effective water management and
  
  
  
  
  
  
  
  
  
  
  
  
  `;
    } else if (option === 'c') {
      contentDiv.innerHTML = `
      <h1>Discharge over a Notch in Water Resource Engineering</h1>
        
      <p>In water resource engineering, notches are commonly used to measure or control the flow of water. A notch is a simple, open-channel structure with a vertical cut or opening in its side. When water flows over a notch, the discharge rate can be determined using theoretical formulas.</p>
  
      <h2>Types of Notches</h2>
  
      <p>There are two main types of notches: rectangular notches and triangular notches.</p>
  
      <h3>Rectangular Notches</h3>
  
      <p>A rectangular notch is a notch with a rectangular opening. The discharge over a rectangular notch is given by the formula:</p>
  
      <img src="rect.jpg" alt="formula "  id="rect"  class="image-container">
      <h3><a href="num2.html">Solve</a></h3>
      <p>Where:</p>
  
      <ul>
          <li>Q is the discharge in cubic meters per second (m³/s) or cubic feet per second (cfs)</li>
          <li>Cd is the discharge coefficient, which is a dimensionless number that depends on the notch geometry and the flow conditions</li>
          <li>b is the width of the notch in meters (m) or feet (ft)</li>
          <li>H is the head, or depth of water over the notch, in meters (m) or feet (ft)</li>
      </ul>
  
      <p>The discharge coefficient for rectangular notches is typically around 0.62.</p>
  
      <h3>Triangular Notches</h3>
  
      <p>A triangular notch is a notch with a triangular opening. The discharge over a triangular notch is given by the formula:</p>
  
      <img src="triangle.jpg" alt="formula " id="trai" class="image-container">
      <h3><a href="num3.html">Solve</a></h3>
      <p>Where:</p>
  
      <ul>
          <li>Q is the discharge in cubic meters per second (m³/s) or cubic feet per second (cfs)</li>
          <li>Cd is the discharge coefficient, which is a dimensionless number that depends on the notch geometry and the flow conditions</li>
          <li>b is the base width of the notch in meters (m) or feet (ft)</li>
          <li>H is the head, or depth of water over the notch, in meters (m) or feet (ft)</li>
      </ul>
  
      <p>The discharge coefficient for triangular notches is typically around 0.577.</p>
  
      <h2>Applications of Notches</h2>
  
      <p>Notches are used in a variety of applications in water resource engineering, including:</p>
  
      <ul>
          <li><strong>Flow measurement</strong> - Notches are used to measure the discharge of water in open channels, such as rivers, canals, and culverts.</li>
          <li><strong>Flow control</strong> - Notches can be used to control the flow of water in open channels, such as in irrigation systems and water supply systems.</li>
          <li><strong>Spillway protection</strong> - Notches can be used to protect dams and other hydraulic structures from overtopping by diverting excess water flow.</li>
      </ul>
  
      <h2>Conclusion</h2>
  
      <p>Notches are simple, reliable, and cost-effective devices for measuring and controlling the flow of water. The discharge formulas for rectangular and triangular notches provide a basis for accurate flow calculations in various water resource engineering applications.</p>
  








</div>
      `;
    } else if (option === 'team') {
      contentDiv.innerHTML = `
      <style>
      table {
          width: 80%;
          border-collapse: collapse;
          margin: 20px;
          margin: 0 auto;
      }

      th, td {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
      }

      th {
         
          color: white;
      }
  </style>
  <table border="2" cellspacing="0" cellpadding="5" class="main">
  <table>
  <thead style=" background-color: #4394ff;">
      <tr>
          <th>Number</th>
          <th>Name</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>1.</td>
          <td>Pramod Chandrakant Bhapse</td>
      </tr>
      <tr>
          <td>2.</td>
          <td>Rohini Vikasgir Gosavi</td>
      </tr>
      <tr>
          <td>3.</td>
          <td>Vrushali Vijay Wagh</td>
      </tr>
      <tr>
          <td>4.</td>
          <td>Tanmay Anil Chaudhari</td>
      </tr>
      <tr>
          <td>5.</td>
          <td>Harshad Kiran Ghuge</td>
      </tr>
      <tr>
          <td>6.</td>
          <td>Sanket Sandip Shinde</td>
      </tr>
  </tbody>
</table>

</table>

      `;
    } else {
      contentDiv.innerHTML = '';
    }  
  }
  