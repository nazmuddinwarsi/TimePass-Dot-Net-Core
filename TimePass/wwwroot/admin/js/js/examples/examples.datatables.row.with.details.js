/*
Name: 			Tables / Advanced - Examples
Written by: 	Okler Themes - (http://www.Rohatas Transport.in)
Theme Version: 	3.0.0
*/

(function($) {

	'use strict';

	var datatableInit = function() {
	    var $table = $('#grd1');

		// format function for row details
		var fnFormatDetails = function( datatable, tr ) {
			var data = datatable.fnGetData( tr );

			return [
				'<table class="table mb-0">',
					'<tr class="b-top-0">',
						'<td><label class="mb-0">Name:</label></td>',
						'<td>' + data[10] + ' </td>',
                        '<td><label class="mb-0">Mobile:</label></td>',
						'<td>' + data[11] + ' </td>',
					'</tr>',
					 '<tr class="b-top-0">',
						'<td><label class="mb-0">Equiry Date:</label></td>',
						'<td>' + data[12] + ' </td>',
                        '<td><label class="mb-0">Status:</label></td>',
						'<td>' + data[13] + ' </td>',
					'</tr>',
                     '<tr class="b-top-0">',
						'<td><label class="mb-0">Edit:</label></td>',
						'<td>' + data[14] + ' </td>',
                        '<td><label class="mb-0">Schedule:</label></td>',
						'<td>' + data[15] + ' </td>',
                         '<td><label class="mb-0">Assign:</label></td>',
						'<td>' + data[16] + ' </td>',
					'</tr>',
				'</table>'
			].join('');
		};

		// insert the expand/collapse column
		var th = document.createElement( 'th' );
		var td = document.createElement( 'td' );
		td.innerHTML = '<i data-toggle class="far fa-plus-square text-primary h5 m-0" style="cursor: pointer;"></i>';
		td.className = "text-center";

		$table
			.find( 'thead tr' ).each(function() {
				this.insertBefore( th, this.childNodes[0] );
			});

		$table
			.find( 'tbody tr' ).each(function() {
				this.insertBefore(  td.cloneNode( true ), this.childNodes[0] );
			});

		// initialize
		var datatable = $table.dataTable({
			dom: '<"row"<"col-lg-6"l><"col-lg-6"f>><"table-responsive"t>p',
			aoColumnDefs: [{
				bSortable: false,
				aTargets: [ 0 ]
			}],
			aaSorting: [
				[1, 'asc']
			]
		});

		// add a listener
		$table.on('click', 'i[data-toggle]', function() {
			var $this = $(this),
				tr = $(this).closest( 'tr' ).get(0);

			if ( datatable.fnIsOpen(tr) ) {
				$this.removeClass( 'fa-minus-square' ).addClass( 'fa-plus-square' );
				datatable.fnClose( tr );
			} else {
				$this.removeClass( 'fa-plus-square' ).addClass( 'fa-minus-square' );
				datatable.fnOpen( tr, fnFormatDetails( datatable, tr), 'details' );
			}
		});
	};

	$(function() {
		datatableInit();
	});

}).apply(this, [jQuery]);