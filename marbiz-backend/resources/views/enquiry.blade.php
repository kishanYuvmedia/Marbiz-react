<x-app-layout>
    <div class="pagetitle">
        <h1>All Enquiry</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active">All Enquiry</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->
    <section class="section">
        <div class="row">
            <div class="col-lg-12">

                <div class="card">
                    <div class="card-header">
                        All Enquiry
                    </div>
                    <div class="card-body mt-4">
                        <!-- Table with stripped rows -->
                        <table id="example" class="table table-sm" style="width:100%">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Mobile No.</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($data as $index=> $item)
                                <tr>
                                    <td scope="col">{{$index}}</td>
                                    <td scope="col">{{$item->created_at}}</td>
                                    <td scope="col"><a href="#" data-bs-toggle="modal" data-bs-target="#disablebackdrop">{{$item->fullname}}</a></td>
                                    <td scope="col">{{$item->mobilenumber}}</td>
                                    <td scope="col"><a href="mailto:{{$item->email}}">{{$item->email}}</td>
                                    <td scope="col">{{$item->subject}}</td>
                                    <td><span class="badge bg-{{ $item->status=='Pending'?'warning text-dark':'success'}}">{{ $item->status}}</span></td>
                                    <td scope="col">
                                        <a href="#" class="btn btn-sm btn-danger">Delete</a>
                                        <a href="#" class="btn btn-sm btn-success">Final</a>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                        <!-- End Table with stripped rows -->

                    </div>
                </div>

            </div>
        </div>
    </section>
    <div class="modal fade" id="disablebackdrop" tabindex="-1" data-bs-backdrop="false">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">View Lead</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <table style="width:100%;">
                <tr>
                    <th>Full Name</th>
                    <td>Kishan</td>
                </tr>
                <tr>
                    <th>Mobile Number</th>
                    <td>1963636636</td>
                </tr>
                <tr>
                    <th>Email Address</th>
                    <td>Kishan@gmail.com</td>
                </tr>
                <tr>
                    <th>Subject</th>
                    <td>Business Vedio</td>
                </tr>
                <tr>
                    <th>budgets</th>
                    <td>1200/-</td>
                </tr>
                <tr>
                    <th>Last Remark</th>
                    <td>Dance</td>
                </tr>
                <tr>
                    <th>Remark</th>
                    <td><textarea class="form-control" rows="2"></textarea></td>
                </tr>
                <tr>
                    <th class="text-primary">Select Listed Person<hr/></th>
                    <td>
                        <tr>
                            <th>Full Name</th>
                            <td>Kishan</td>
                        </tr>
                        <tr>
                            <th>Mobile Number</th>
                            <td>1963636636</td>
                        </tr>
                        <tr>
                            <th>Email Address</th>
                            <td>Kishan@gmail.com</td>
                        </tr>
                        <tr>
                            <th>Category(Subcategory)</th>
                            <td>Business Vedio</td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>1200/-</td>
                        </tr>
                        <tr>
                            <th>Profile</th>
                            <td>  <img src="./assets/img/card.jpg" name="viewImage" style="height:150px;width:120px;" id="viewImage" class="form-control">
                            </td>
                        </tr>
                    </td>
                </tr>
              </table>
              </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div><!-- End Disabled Backdrop Modal-->

</x-app-layout>