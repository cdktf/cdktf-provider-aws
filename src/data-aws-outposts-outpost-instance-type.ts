// https://www.terraform.io/docs/providers/aws/r/data_aws_outposts_outpost_instance_type.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsOutpostsOutpostInstanceTypeConfig extends cdktf.TerraformMetaArguments {
  readonly arn: string;
  readonly instanceType?: string;
  readonly preferredInstanceTypes?: string[];
}

// Resource

export class DataAwsOutpostsOutpostInstanceType extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsOutpostsOutpostInstanceTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_outposts_outpost_instance_type',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._arn = config.arn;
    this._instanceType = config.instanceType;
    this._preferredInstanceTypes = config.preferredInstanceTypes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn: string;
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string;
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType
  }

  // preferred_instance_types - computed: false, optional: true, required: false
  private _preferredInstanceTypes?: string[];
  public get preferredInstanceTypes() {
    return this.getListAttribute('preferred_instance_types');
  }
  public set preferredInstanceTypes(value: string[] ) {
    this._preferredInstanceTypes = value;
  }
  public resetPreferredInstanceTypes() {
    this._preferredInstanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredInstanceTypesInput() {
    return this._preferredInstanceTypes
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      preferred_instance_types: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredInstanceTypes),
    };
  }
}
