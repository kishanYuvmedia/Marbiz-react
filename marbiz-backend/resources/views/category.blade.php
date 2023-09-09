<x-app-layout>
    <div class="pagetitle">
        <h1>Add category</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active">Add category</li>
            </ol>
        </nav>
    </div>
    <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <span class="col-md-10"> Sub category list</span>
                           
                        </div>
                    </div>
                    <div class="card-body mt-3">
                        <form action="{{ url('insert-category') }}" method="POST">
                            @csrf
                        <div class="row g-3">
                            <div class="col-3">
                                <label for="inputNanme4" class="form-label">Master</label>
                                <select id="master" name="master" class="form-select" required>
                                    <option selected>Choose...</option>
                                    @foreach ($dataList as $item)
                                        <option value="{{ $item->value }}" {{$selected==$item->value?"selected":null}}>{{ $item->label }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-3">
                                <label for="inputNanme4" class="form-label">Category</label>
                                <select id="category" name="type" class="form-select" required>
                                    <option selected>Choose...</option>
                                    @foreach ($dataSubList as $item)
                                        <option value="{{ $item->value }}" >{{ $item->label }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-3">
                                <label for="inputNanme4" class="form-label">Label</label>
                                <input type="text" class="form-control" id="label" name="label" required />
                            </div>
                            <div class="col-3">
                                <label for="inputEmail4" class="form-label">Value</label>
                                <input type="text" name="value" class="form-control" id="value" required />
                            </div>
                            <div class="col-12">
                            <button type="submit" class="btn btn-success float-end">Add</button>
                        </div>
                        <hr/>
                        </div>
                    </form>
                        <table id="example" class="table table-sm" style="width:100%">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">label</th>
                                    <th scope="col">Value</th>
                                    <th scope="col">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($dataMasterList as $index => $item)
                                    <tr>
                                        <td scope="col">{{ $index + 1 }}</td>
                                        <td scope="col">{{ $item->type }}</td>
                                        <td scope="col">{{ $item->label }}</td>
                                        <td scope="col">{{ $item->value }}</td>
                                        <td scope="col">
                                            <a href="{{ url('delete-category', ['id' => $item->id]) }}"
                                                class="btn btn-sm btn-danger mr-2"><i class="fa fa-close"></i></a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <script>
        jQuery(document).ready(function($) {
            $("#master").on('change', function() {
                var level = $(this).val();
                if (level) {
                    window.location.href='/select-master-list/'+level
                }
            });
        });
    </script>
</x-app-layout>
