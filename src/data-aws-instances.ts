// https://www.terraform.io/docs/providers/aws/d/instances.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#instance_state_names DataAwsInstances#instance_state_names}
  */
  readonly instanceStateNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#instance_tags DataAwsInstances#instance_tags}
  */
  readonly instanceTags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#filter DataAwsInstances#filter}
  */
  readonly filter?: DataAwsInstancesFilter[];
}
export interface DataAwsInstancesFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#name DataAwsInstances#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#values DataAwsInstances#values}
  */
  readonly values: string[];
}

function dataAwsInstancesFilterToTerraform(struct?: DataAwsInstancesFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/instances.html aws_instances}
*/
export class DataAwsInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_instances";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/instances.html aws_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsInstancesConfig = {}
  */
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
  private _instanceTags?: { [key: string]: string } | cdktf.IResolvable
  public get instanceTags(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('instance_tags') as any; // Getting the computed value is not yet implemented
  }
  public set instanceTags(value: { [key: string]: string } | cdktf.IResolvable) {
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
