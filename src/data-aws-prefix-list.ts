// https://www.terraform.io/docs/providers/aws/r/data_aws_prefix_list.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsPrefixListConfig extends cdktf.TerraformMetaArguments {
  readonly name?: string;
  readonly prefixListId?: string;
  /** filter block */
  readonly filter?: DataAwsPrefixListFilter[];
}
export interface DataAwsPrefixListFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsPrefixListFilterToTerraform(struct?: DataAwsPrefixListFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsPrefixList extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsPrefixListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_prefix_list',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._prefixListId = config.prefixListId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_blocks - computed: true, optional: false, required: false
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // prefix_list_id - computed: false, optional: true, required: false
  private _prefixListId?: string;
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }
  public set prefixListId(value: string ) {
    this._prefixListId = value;
  }
  public resetPrefixListId() {
    this._prefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdInput() {
    return this._prefixListId
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsPrefixListFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsPrefixListFilter[] ) {
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
      name: cdktf.stringToTerraform(this._name),
      prefix_list_id: cdktf.stringToTerraform(this._prefixListId),
      filter: cdktf.listMapper(dataAwsPrefixListFilterToTerraform)(this._filter),
    };
  }
}
