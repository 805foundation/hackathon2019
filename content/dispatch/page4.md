---
title: "Home"
date: 2018-10-03T16:43:47-07:00
draft: false

description:
---
<div class="container">
 <form name="contact" method="POST" data-netlify="true">
      <p class="pt-3">
        <input
          class="p-2 btn-block"
          placeholder="Name"
          type="text"
          name="name"
        />
      </p>
      <p>
        <input
          class="p-2 btn-block"
          placeholder="Location"
          type="email"
          name="email"
        />
      </p>
      <p>
        <input
          class="p-2 btn-block"
          placeholder="Physical Appearance"
          type="email"
          name="email"
        />
      </p>
      <p>
        <input
          class="p-2 btn-block"
          placeholder="Injury Description"
          type="email"
          name="email"
        />
      </p>
      <p>
        <!-- <input
          class="p-2 btn-block"
          placeholder="Subject"
          type="text"
          name="subject"
        /> -->
        <div class="form-group">
            <select class="form-control btn-block p-2" type="text" name="subject">
              <option value="null">Severity</option>
              <option value="Moderate">Moderate</option>
              <option value="Urgent">Urgent</option>
              <option value="Life Threatening">Life Threatening</option>
            </select>
          </div>
      </p>
      <p>
        <textarea
          class="p-2 btn-block"
          placeholder="Additional Notes"
          name="message"
        ></textarea>
      </p>
    </form>
    </div>
<div class="container">
    <div class="row py-3">
    </div>
    <div class="row py-3">
        <div class="col-6">
            <a class="btn btn-lg btn-block btn-primary text-white">
                Refresh
            </a>
        </div>
        <div class="col-6">
            <a href="/dispatch/page5" class="btn btn-lg btn-block btn-primary text-white">
                Notifications 1
            </a>
        </div>
    </div>
    <div class="row py-3">
        <a href="https:://" class="btn btn-lg btn-block btn-primary text-white">
            Submit
        </a>
    </div>
</div>