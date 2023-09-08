<x-app-layout>
    <div class="pagetitle">
        <h1>Add List</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active">Add List</li>
          </ol>
        </nav>
      </div><!-- End Page Title -->
      <section class="section">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Add List</h5>
              </div>
              <div class="row g-3">
                <div class="col-12">
              @if ($message = Session::get('success'))
              <div class="alert alert-success alert-dismissible fade show" role="alert">
                {{$message}}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              @endif
                </div>
              </div>
              <form  method="POST" action="{{ url('insert-register') }}" enctype="multipart/form-data">
                @csrf
              <div class="card-body mt-3">
                <!-- Vertical Form -->
             <div class="row g-3">
                  <div class="col-4">
                    <label for="inputNanme4" class="form-label">Category<strong class="textRed m-lg-1">*</strong></label>
                    <select id="category" name="category" class="form-select" required>
                      <option selected>Choose...</option>
                      @foreach ($dataList as $item)
                      <option value="{{$item->value}}" {{$selected==$item->value?"selected":null}}>{{$item->label}}</option>
                      @endforeach
                    </select>
                  </div>
                  <div class="col-4">
                    <input type="text" value="{{ Auth::user()->id }}" name="userlogin" style="display: none" />
                    <label for="inputNanme4" class="form-label">Sub Category<strong
                        class="textRed m-lg-1">*</strong></label>
                    <select id="subCategory" name="subCategory" class="form-select" required>
                      <option selected>Choose...</option>
                      @foreach ($dataSubList as $item)
                      <option value="{{$item->value}}">{{$item->label}}</option>
                      @endforeach
                    </select>
                  </div>
                  <div class="col-4">
                    <label for="inputNanme4" class="form-label">Name<strong class="textRed m-lg-1">*</strong></label>
                    <input type="text" class="form-control" id="name" name="name" required>
                  </div>
                  <div class="col-4">
                    <label for="inputNanme4" class="form-label">Contact Number<strong
                        class="textRed m-lg-1">*</strong></label>
                    <input type="text" class="form-control" id="contactNumber" name="contactNumber" required>
                  </div>
                  <div class="col-4">
                    <label for="inputNanme4" class="form-label">WhatsApp Number<strong
                        class="textRed m-lg-1">*</strong></label>
                    <input type="text" class="form-control" id="whatsappno" name="whatsappno" required>
                  </div>
                  <div class="col-4">
                    <label for="inputNanme4" class="form-label">Email<strong
                        class="textRed m-lg-1">*</strong></label>
                    <input type="email" class="form-control" id="emailAddress" name="emailAddress" required>
                  </div>
                  <div class="col-4">
                    <label for="inputNanme4" class="form-label">Location</label>
                    <input type="text" class="form-control" id="location" name="location">
                  </div>
                  <div class="col-4">
                    <label for="inputNanme4" class="form-label">State</label>
                        <input type="text" class="form-control" id="state" name="state">
                  </div>
                  <div class="col-4">
                    <label for="inputNanme4" class="form-label">City</label>
                        <input type="text" class="form-control" id="city" name="city">
                  </div>
                  <div class="col-4">
                    <label for="inputNanme4" class="form-label">Tags<strong
                        class="textRed m-lg-1">*</strong></label>
                    <textarea name="tags" class="form-control" id="tags" required></textarea>
                  </div>
                  <div class="col-4">
                    <label for="inputNanme4" class="form-label">Bio<strong
                        class="textRed m-lg-1">*</strong></label>
                    <textarea name="bio" class="form-control" id="bio" ></textarea>
                  </div>
                  <div class="col-4">
                    <label for="inputNanme4" class="form-label">Remark Requirment</label>
                    <textarea name="remark" class="form-control" id="remark"></textarea>
                  </div>
                  <div class="col-12">
                    <label for="inputNanme4" class="form-label">About<strong
                        class="textRed m-lg-1">*</strong></label>
                    <textarea name="about" class="form-control" id="about"  rows="5" required></textarea>
                  </div>
                  
                  <div class="col-4">
                    <label for="inputNanme4" class="form-label">Price<strong
                        class="textRed m-lg-1">*</strong></label>
                        <input type="text" class="form-control" id="price" name="price" required>
                  </div>
                  <div class="col-4">
                    <label for="inputNanme4" class="form-label">Date of birth<strong
                        class="textRed m-lg-1">*</strong></label>
                        <input type="date" class="form-control" id="dob" name="dob">
                  </div>
                  <div class="col-4">
                    <label for="inputNanme4" class="form-label">Profile Image (150X300)<strong
                        class="textRed m-lg-1">*</strong></label>
                      <input type="file" name="image" class="form-control">
                  </div>
                 
                </div>
              </div>
              <div class="card-footer">
                <button class="btn btn-success float-end m-1" data-bs-toggle="modal" data-bs-target="#disablebackdrop" name="submit" id="submit" type="submit" >Submit</button>
              </div>
          </form>
          </div>
        </div>
      </section>
      <script>
        jQuery(document).ready(function($) {
            $("#category").on('change', function() {
                var level = $(this).val();
                if (level) {
                    window.location.href='/select-register-list/'+level
                }
            });
        });
    </script>
</x-app-layout>