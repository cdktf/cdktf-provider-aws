// https://www.terraform.io/docs/providers/aws/r/data_aws_outposts_outpost_instance_type.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "preferred_instance_types": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsOutpostsOutpostInstanceTypeConfig extends TerraformMetaArguments {
  readonly arn: string;
  readonly instanceType?: string;
  readonly preferredInstanceTypes?: string[];
}

// Resource

export class DataAwsOutpostsOutpostInstanceType extends TerraformDataSource {

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
    return this._arn;
  }
  public set arn(value: string) {
    this._arn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string;
  public get instanceType() {
    return this._instanceType ?? this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string | undefined) {
    this._instanceType = value;
  }

  // preferred_instance_types - computed: false, optional: true, required: false
  private _preferredInstanceTypes?: string[];
  public get preferredInstanceTypes() {
    return this._preferredInstanceTypes;
  }
  public set preferredInstanceTypes(value: string[] | undefined) {
    this._preferredInstanceTypes = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: this._arn,
      instance_type: this._instanceType,
      preferred_instance_types: this._preferredInstanceTypes,
    };
  }
}
