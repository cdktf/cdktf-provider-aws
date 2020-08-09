// https://www.terraform.io/docs/providers/aws/r/data_aws_iam_group.html
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
      "group_id": {
        "type": "string",
        "computed": true
      },
      "group_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "path": {
        "type": "string",
        "computed": true
      },
      "users": {
        "type": [
          "list",
          [
            "object",
            {
              "arn": "string",
              "path": "string",
              "user_id": "string",
              "user_name": "string"
            }
          ]
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsIamGroupConfig extends TerraformMetaArguments {
  readonly groupName: string;
}
export class DataAwsIamGroupUsers extends ComplexComputedList {

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // user_id - computed: true, optional: false, required: true
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_name - computed: true, optional: false, required: true
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

// Resource

export class DataAwsIamGroup extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsIamGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._groupName = config.groupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // group_id - computed: true, optional: false, required: true
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName: string;
  public get groupName() {
    return this._groupName;
  }
  public set groupName(value: string) {
    this._groupName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // users - computed: true, optional: false, required: true
  public users(index: string) {
    return new DataAwsIamGroupUsers(this, 'users', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      group_name: this._groupName,
    };
  }
}
