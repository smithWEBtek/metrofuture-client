
original
            <select class="chosen-select" id="desktop-menu">
              <option value="#">View all projects</option>
              <% _.each(data, function(option) { %>
              <% if(option.type == "municipality" && option.attributes.projects.length > 0) { %>
              <option value="municipalities/<%= option.attributes.geojson.id %>"><%= option.attributes.name %></option>
              <% } else if(option.type == "subregion"){ %>
              <option value="subregions/<%= option.id %>"><%= option.attributes.name %></option>
              <% } %>
              <% }); %>
            </select>

alt

            <select class="chosen-select" id="desktop-menu">
              <option value="#">View all projects</option>
              <% _.each(data, function(option) { %>

              <% _.each(option.data, function(muni) { %>
              <option value="municipalities/<%= muni.attributes.geojson.id %>"><%= muni.attributes.name %></option>

              <% _.each(option.splice(0, option.length-1), function(subregion) { %>

              <option value="subregions/<%= subregion.id %>"><%= subregion.name %></option>
              <% }); %>
              <% })
              <% }); %>
            </select>




new
            <select class="chosen-select" id="desktop-menu">
              <option value="#">Choose Municipality or Subregion</option>


              <% _.each(data.splice(1, data.length-1), function(subregion) { %>
              <% if(subregion.type == "subregion") { %>
              <option value="subregions/<%= subregion.attributes.id %>"><%= subregion.attributes.name %>
              </option>
              <% } %>
              <% }); %>

              <option value="#">Municipalities</option>
              <% _.each(data[0].data, function(muni) { %>
              <% if(muni.type == "municipality" && muni.attributes.projects.length > 0) { %>
              <option value="municipalities/<%= muni.attributes.geojson.id %>"><%= muni.attributes.name %></option>
              <% } %>
              <% }); %>
            </select>

another
            <select class="chosen-select" id="desktop-menu">
              <option value="#">Subregions & Municipalities</option>

              <% _.each(data.splice(1, data.length-1), function(subregion) { %>
              <% if(subregion.type == "subregion") { %>
              <option value="subregions/<%= subregion.attributes.id %>"><%= subregion.attributes.name %>
              </option>
              <% } %>
              <% }); %>

              <% _.each(data[0].data, function(muni) { %>
              <% if(muni.type == "municipality" && muni.attributes.projects.length > 0) { %>
              <option value="municipalities/<%= muni.attributes.geojson.id %>"><%= muni.attributes.name %></option>
              <% } %>
              <% }); %>
            </select>
