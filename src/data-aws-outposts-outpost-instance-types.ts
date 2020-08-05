// https://www.terraform.io/docs/providers/aws/r/data_aws_outposts_outpost_instance_types.html
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
      "instance_types": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsOutpostsOutpostInstanceTypesConfig extends TerraformMetaArguments {
  readonly arn: string;
}

// Resource

export class DataAwsOutpostsOutpostInstanceTypes extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsOutpostsOutpostInstanceTypesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_outposts_outpost_instance_types',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._arn = config.arn;
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

  // instance_types - computed: true, optional: false, required: true
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: this._arn,
    };
  }
}
