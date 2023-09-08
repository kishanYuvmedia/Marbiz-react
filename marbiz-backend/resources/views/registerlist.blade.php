<x-app-layout>
    <div class="pagetitle">
        <h1>All List</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active">All List</li>
            </ol>
        </nav>
    </div><!-- End Page Title -->
    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        All List
                    </div>
                    <div class="card-body mt-4">
                        <!-- Table with stripped rows -->
                        <table id="example" class="table table-sm" style="width:100%">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Img.</th>
                                    <th>Name</th>
                                    <th>Category(Sub Category)</th>
                                    <th>Contact Number</th>
                                    <th>Status</th>
                                    <th>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($dataList as $index=> $item)
                                <tr>
                                    <td>{{$index+1}}</td>
                                    <td><img style="height:50px;width:35px;border-radius:5px;border: 1px solid #000;" src="images/{{$item->profileImage==""?'userimage.png':$item->profileImage}}"/></td>
                                    <td>{{ $item->name}}</td>
                                    <td>{{ $item->subCategory}}<strong style='color:#4f4d4d'> ({{ $item->category}})</strong></td>
                                    <td>{{ $item->contactNumber}}</td>
                                    <td><span class="badge bg-{{ $item->status=="Active"?'success':'danger'}}">{{ $item->status}}</span></td>
                                    <td>
                                        <a class="btn btn-sm btn-success"><i class="fa fa-eye"></i></a>
                                        <a class="btn btn-sm btn-primary"><i class="fa fa-edit"></i></a>
                                        <a class="btn btn-sm btn-warning"><i class="fa fa-image"></i></a>
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
</x-app-layout>
