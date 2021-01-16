// https://www.terraform.io/docs/providers/aws/r/data_aws_ami_ids.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsAmiIdsConfig extends cdktf.TerraformMetaArguments {
  readonly executableUsers?: string[];
  readonly nameRegex?: string;
  readonly owners: string[];
  readonly sortAscending?: boolean;
  /** filter block */
  readonly filter?: DataAwsAmiIdsFilter[];
}
export interface DataAwsAmiIdsFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsAmiIdsFilterToTerraform(struct?: DataAwsAmiIdsFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsAmiIds extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsAmiIdsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ami_ids',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._executableUsers = config.executableUsers;
    this._nameRegex = config.nameRegex;
    this._owners = config.owners;
    this._sortAscending = config.sortAscending;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // executable_users - computed: false, optional: true, required: false
  private _executableUsers?: string[];
  public get executableUsers() {
    return this.getListAttribute('executable_users');
  }
  public set executableUsers(value: string[] ) {
    this._executableUsers = value;
  }
  public resetExecutableUsers() {
    this._executableUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executableUsersInput() {
    return this._executableUsers
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string;
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string ) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex
  }

  // owners - computed: false, optional: false, required: true
  private _owners: string[];
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners
  }

  // sort_ascending - computed: false, optional: true, required: false
  private _sortAscending?: boolean;
  public get sortAscending() {
    return this.getBooleanAttribute('sort_ascending');
  }
  public set sortAscending(value: boolean ) {
    this._sortAscending = value;
  }
  public resetSortAscending() {
    this._sortAscending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortAscendingInput() {
    return this._sortAscending
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsAmiIdsFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsAmiIdsFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      executable_users: cdktf.listMapper(cdktf.stringToTerraform)(this._executableUsers),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      owners: cdktf.listMapper(cdktf.stringToTerraform)(this._owners),
      sort_ascending: cdktf.booleanToTerraform(this._sortAscending),
      filter: cdktf.listMapper(dataAwsAmiIdsFilterToTerraform)(this._filter),
    };
  }
}
