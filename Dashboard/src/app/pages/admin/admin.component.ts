import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private fb: FormBuilder) { }

  users: any;
  myRegform: any;
  myDataUploadform: any;
  adduser: boolean;
  newuser: any;
  adddata: boolean;
  uploaderror: any;
  datafile: any;
  metadatafile: any;
  metadone: boolean;
  replacedata = true;
  geojsonfile: any;
  geouploadinfo: any;
  areafeatures: any;
  uploadres: string;
  dataintend: string;
  datacheck = [];
  areavalues: any;
  currentuser: any;
  allmetadata: any;
  uploadarea: string;
  uploadareaid: string;
  topicoptions = ['ordering', 'subgroups', 'demography', 'outcomes']
  typeoptions = ['level', 'levelid', 'group', 'rate', 'number']
  ngOnInit(): void {
    this.currentuser = this.auth.getUserDetails();
    this.updateuserlist();
    this.resetall();
    this.buildForm();
    this.allmetadata = this.api.getmetadata("metadata");
    let currentmetadata = this.api.filterArray(this.allmetadata, 'type', 'level')[0];

    setTimeout(() => { this.areavalues = this.api.filterArray(this.api.getmetadata("sortdata"), 'varname', currentmetadata["varname"])[0]['values']; }, 0);

  }

  //File upload function
  changeListener(event) {
    let files = event.target.files;
    let file = files[0];
    let reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      this.datafile = reader.result;
      let varnames = this.datafile.split('\n').map(data => data.split(','))[0];
      let newmetadata = [];
      let index = 0;
      for (let varname of varnames) {
        index = index + 1;
        let topush = { 'varname': varname, 'topic': "", 'description': "", "allforlevel": '', public: false }
        if (index == 1) {
          topush["topic"] = "ordering";
          topush["type"] = "level";
        }
        if (index == 2) {
          topush["topic"] = "ordering";
          topush["type"] = "levelid";
        }
        if (index > 2) {
          topush["type"] = "rate";
          topush["topic"] = "outcomes";
        }


        newmetadata.push(topush);

      }
      this.metadone = false;
      setTimeout(() => {
        this.metadatafile = newmetadata;
        this.checkmetadata();
      }, 0); // fixes https://blog.angular-university.io/angular-debugging/

    };


  }

  changeListenerGEOJSON(event) {
    let files = event.target.files;
    let file = files[0];
    let reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      setTimeout(() => {
        this.geojsonfile = JSON.parse(reader.result.toString());
        setTimeout(() => {
          this.areafeatures = Object.keys(this.geojsonfile['features'][0]['properties']);
        }, 0);
      }, 0); // fixes https://blog.angular-university.io/angular-debugging/

    };


  }


  csvToArray(text) {
    let p = '', row = [''], ret = [row], i = 0, r = 0, s = !0, l;
    for (l of text) {
      if ('"' === l) {
        if (s && l === p) row[i] += l;
        s = !s;
      } else if (',' === l && s) l = row[++i] = '';
      else if ('\n' === l && s) {
        if ('\r' === p) row[i] = row[i].slice(0, -1);
        row = ret[++r] = [l = '']; i = 0;
      } else row[i] += l;
      p = l;
    }
    return ret;
  };


  getrefvalues(value) {
    let data = this.datafile.split(/\r|\n|\r/);
    let dataarray = [];
    let index = this.api.getValues(this.metadatafile, "varname").indexOf(value);
    let i = 0;
    for (let row of data) {
      let topush = this.csvToArray(row)[0][index]
      if (i > 0 && dataarray.indexOf(topush) < 0) { dataarray.push(topush) }
      i = i + 1;
    }

    return dataarray;
  }

  updateuser(user, key, value) {
    this.api.updateuser(user, key, value).subscribe(
      data => { this.updateuserlist() });
  }

  deletuser(user) {
    this.api.deleteuser(user).subscribe(
      data => { this.updateuserlist() });
  }

  updateuserlist() {
    this.api.getTypeRequest('users').subscribe(data => { this.users = data; })
  }

  buildForm() {

    this.myRegform = this.fb.group(
      {
        anrede: ["", [
          Validators.required,
          Validators.minLength(1)]],
        password: ["", [Validators.minLength(12)]],
        firstname: ["", [
          Validators.required,
          Validators.minLength(2)]],
        lastname: ["", [
          Validators.required,
          Validators.minLength(2)]],
        email: ["", [Validators.required, Validators.email]]
      }
    );
    this.myRegform.patchValue({ "password": this.rndpwd() });

  };

  buildDataUploadForm() {

    
    if (this.dataintend == 'geodataupload') {
      this.myDataUploadform = new FormData();
      this.geouploadinfo = {
        'client_id': this.api.REST_API_SERVER_CLIENTID,
        'levelnamevar': this.api.filterArray(this.allmetadata, "type", "level")[0]['varname'],
        'levelname': this.uploadarea,
        'levelidvar': this.api.filterArray(this.allmetadata, "type", "levelid")[0]['varname'],
        'levelidname': this.uploadareaid
      }
      this.myDataUploadform.append('geodata', new Blob([JSON.stringify(this.geojsonfile)], { type: 'application/geo+json' }));
      this.myDataUploadform.append('geodatainfo', JSON.stringify(this.geouploadinfo));      
    }

    if (this.dataintend == 'dataupload') {
      this.myDataUploadform = new FormData();
      this.myDataUploadform.append('data', new Blob([this.datafile], { type: 'text/csv' }));
      this.myDataUploadform.append('metadata', this.arrayToCsv(this.metadatafile));
    }
  }


  uploadnewdata() {
    this.buildDataUploadForm();
    this.uploadres = "pending";
    this.uploaderror = null;
    if (this.dataintend == 'dataupload') {
      this.api.postTypeRequest('upload_data/?replacedata=' + this.replacedata, this.myDataUploadform).subscribe(data => {
        this.uploadres = "success";
        setTimeout(() => {
          this.resetall();
        }, 1500);
      },
        error => {
          this.uploadres = "error";
          this.uploaderror = error.error;
        })
    }
    if (this.dataintend == 'geodataupload') {
      this.api.postTypeRequest('upload_geodata/', this.myDataUploadform).subscribe(data => {
        this.uploadres = "success";
        setTimeout(() => {
          this.resetall();
        }, 1500);
      },
        error => {
          this.uploadres = "error";
          this.uploaderror = error.error.detail;
        })
      
    }

  }

  checkmetadata() {
    let err = []
    let test1counter = 0;
    let test2 = true;
    let test3 = true;
    let test4 = true;
    let test5 = true;
    for (let item of this.metadatafile) {

      if (item.topic == "ordering" && ['levelid', 'level'].indexOf(item.type) >= 0) { test1counter = test1counter + 1; }
      if (item.topic == "subgroups" && item.type !== 'group') { item.type = 'group'; }
      if (item.topic == "outcomes" && ['rate', 'number'].indexOf(item.type) > 0) { test3 = false; }
      if (item.topic == "demography" && ['rate', 'number'].indexOf(item.type) > 0) { test4 = false; }
    }
    if (test1counter !== 2) {
      err.push("Level, and levelid missing or not labelled as topic.")
    }
    if (!test2) {
      err.push("Subgroups not typed correctly")
    }
    if (!test3) {
      err.push("Outcomes not typed correctly")
    }
    if (!test4) {
      err.push("Demography not typed correctly")
    }
    let test5data = this.api.filterArray(this.metadatafile, 'topic', 'ordering').concat(this.api.filterArray(this.metadatafile, 'topic', 'subgroups'))
    test5 = this.api.getValues(this.api.filterArray(test5data, 'allforlevel', ''), 'allforlevel').length == 0;

    if (!test5) {
      err.push("Reference Levels not specified")
    }


    this.datacheck = err;

  }

  addusernow() {
    let toadd = this.myRegform.value;
    this.api.postTypeRequest("newuser", toadd).subscribe(
      data => {
        this.adduser = false;
        this.updateuserlist();
      }
    );


  }

  chpwd(user, pwd) {
    this.api.changeuserpwd(user, pwd).subscribe(data => { this.updateuserlist() })
  }

  rndpwd() {
    return Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8);
  }

  copy(item) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

  resetall() {
    this.adddata = !this.adddata;
    this.datafile = null;
    this.metadone = null;
    this.metadatafile = null;
    this.uploadres = null;
    this.datacheck = [];
    this.adduser = false;
    this.adddata = false;
    this.datafile = null;
    this.metadatafile = null;
    this.geojsonfile = null;
    this.uploadarea = null;
    this.geouploadinfo = null;
    this.uploadareaid = null;

  }

  arrayToCsv(rows: object[]) {
    if (!rows) {
      return;
    }
    if (rows && !rows.length) {
      rows = [rows];
    }
    const separator = ',';
    const keys = Object.keys(rows[0]);
    const csvContent =
      keys.join(separator) +
      '\n' +
      rows.map(row => {
        return keys.map(k => {
          let cell = row[k] === null || row[k] === undefined ? '' : row[k];
          cell = cell instanceof Date
            ? cell.toLocaleString()
            : cell.toString().replace(/"/g, '""');
          if (cell.search(/("|,|\n)/g) >= 0) {
            cell = `"${cell}"`;
          }
          return cell;
        }).join(separator);
      }).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    return blob;
  }

}
