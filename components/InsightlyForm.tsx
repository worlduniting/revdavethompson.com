/*
        InsightlyForm Component
*/


export default function InsightlyForm() {
    return (
      <form
        name="insightly_web_to_lead"
        action="https://crm.na1.insightly.com/WebToLead/Create"
        method="post"
      >
        <div class="row mb-4">
          <div class="col-md-5">
            <label for="insightly_industry" class="form-label">
              Reason For Contact *
            </label>
            <select
              class="form-select"
              aria-label="Default select reason"
              required
            >
              <option selected>(please select one)</option>
              <option value="1">Speaking</option>
              <option value="2">Consulting</option>
              <option value="3">Confidentiality</option>
            </select>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-md-5 mb-3">
            <input
              type="hidden"
              name="formId"
              value="ySErMBBgL8ZKlRsXYqDaZg=="
            />
            <label for="insightly_firstName" class="form-label">
              First Name *
            </label>
            <input
              id="insightly_firstName"
              class="form-control"
              name="FirstName"
              type="text"
              required
            />
          </div>
          <div class="col-md-7 mb-3">
            <label for="insightly_lastName" class="form-label">
              Last Name *
            </label>
            <input
              id="insightly_lastName"
              class="form-control"
              name="LastName"
              type="text"
              required
            />
          </div>
          <div class="mb-3">
            <label for="insightly_organization" class="form-label">
              Organization
            </label>
            <input
              id="insightly_organization"
              class="form-control"
              name="OrganizationName"
              type="text"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email *
            </label>
            <input
              id="insightly_Email"
              class="form-control"
              name="email"
              type="text"
              required
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">
              Phone
            </label>
            <input
              id="insightly_Phone"
              class="form-control"
              name="phone"
              type="text"
              placeholder="(xxx)xxx-xxxx"
            />
          </div>
          <div class="mb-3">
            <label for="insightly_title" class="form-label">
              Title{" "}
            </label>
            <input
              id="insightly_Title"
              class="form-control"
              name="Title"
              type="text"
            />
          </div>
          <div class="mb-4">
            <label for="Description" class="form-label">
              Description *{" "}
            </label>
            <textarea
              class="form-control"
              id="insightly_Description"
              name="Description"
              rows="3"
              required
            ></textarea>
          </div>
        </div>

        <input
          type="hidden"
          class="form-control"
          id="insightly_ResponsibleUser"
          name="ResponsibleUser"
          value="184235"
        />
        <input
          type="hidden"
          id="insightly_LeadSource"
          name="LeadSource"
          value="393245"
        />
        <button
          type="submit"
          class="btn btn-primary mb-3 text-white bg-primary"
          value="Submit"
        >
          Send Your Message
        </button>
      </form>
    );
}