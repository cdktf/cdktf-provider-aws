// https://www.terraform.io/docs/providers/aws/r/data_aws_iam_instance_profile.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "create_date": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "path": {
        "type": "string",
        "computed": true
      },
      "role_arn": {
        "type": "string",
        "computed": true
      },
      "role_id": {
        "type": "string",
        "computed": true
      },
      "role_name": {
        "type": "string",
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

export interface DataAwsIamInstanceProfileConfig extends TerraformMetaArguments {
  readonly name: string;
}

// Resource

export class DataAwsIamInstanceProfile extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsIamInstanceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_instance_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // create_date - computed: true, optional: false, required: true
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // role_arn - computed: true, optional: false, required: true
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // role_id - computed: true, optional: false, required: true
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // role_name - computed: true, optional: false, required: true
  public get roleName() {
    return this.getStringAttribute('role_name');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
    };
  }
}
