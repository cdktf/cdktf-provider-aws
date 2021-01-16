// https://www.terraform.io/docs/providers/aws/r/data_aws_instances.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsInstancesConfig extends cdktf.TerraformMetaArguments {
  readonly instanceStateNames?: string[];
  readonly instanceTags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsInstancesFilter[];
}
export interface DataAwsInstancesFilter {
  readonly name: string;
  readonly values: string[];
}

function dataAwsInstancesFilterToTerraform(struct?: DataAwsInstancesFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsInstances extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_instances',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instanceStateNames = config.instanceStateNames;
    this._instanceTags = config.instanceTags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // instance_state_names - computed: false, optional: true, required: false
  private _instanceStateNames?: string[];
  public get instanceStateNames() {
    return this.getListAttribute('instance_state_names');
  }
  public set instanceStateNames(value: string[] ) {
    this._instanceStateNames = value;
  }
  public resetInstanceStateNames() {
    this._instanceStateNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStateNamesInput() {
    return this._instanceStateNames
  }

  // instance_tags - computed: true, optional: true, required: false
  private _instanceTags?: { [key: string]: string }
  public get instanceTags(): { [key: string]: string } {
    return this.interpolationForAttribute('instance_tags') as any; // Getting the computed value is not yet implemented
  }
  public set instanceTags(value: { [key: string]: string }) {
    this._instanceTags = value;
  }
  public resetInstanceTags() {
    this._instanceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTagsInput() {
    return this._instanceTags
  }

  // private_ips - computed: true, optional: false, required: false
  public get privateIps() {
    return this.getListAttribute('private_ips');
  }

  // public_ips - computed: true, optional: false, required: false
  public get publicIps() {
    return this.getListAttribute('public_ips');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsInstancesFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsInstancesFilter[] ) {
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
      instance_state_names: cdktf.listMapper(cdktf.stringToTerraform)(this._instanceStateNames),
      instance_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._instanceTags),
      filter: cdktf.listMapper(dataAwsInstancesFilterToTerraform)(this._filter),
    };
  }
}
