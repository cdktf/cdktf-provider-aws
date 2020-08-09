// https://www.terraform.io/docs/providers/aws/r/data_aws_cloudformation_stack.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "capabilities": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "disable_rollback": {
        "type": "bool",
        "computed": true
      },
      "iam_role_arn": {
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
      "notification_arns": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "outputs": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "parameters": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "template_body": {
        "type": "string",
        "computed": true
      },
      "timeout_in_minutes": {
        "type": "number",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataAwsCloudformationStackConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class DataAwsCloudformationStack extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsCloudformationStackConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudformation_stack',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: true, optional: false, required: true
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable_rollback - computed: true, optional: false, required: true
  public get disableRollback() {
    return this.getBooleanAttribute('disable_rollback');
  }

  // iam_role_arn - computed: true, optional: false, required: true
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
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

  // notification_arns - computed: true, optional: false, required: true
  public get notificationArns() {
    return this.getListAttribute('notification_arns');
  }

  // outputs - computed: true, optional: false, required: true
  public outputs(key: string): string {
    return new StringMap(this, 'outputs').lookup(key);
  }

  // parameters - computed: true, optional: false, required: true
  public parameters(key: string): string {
    return new StringMap(this, 'parameters').lookup(key);
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // template_body - computed: true, optional: false, required: true
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }

  // timeout_in_minutes - computed: true, optional: false, required: true
  public get timeoutInMinutes() {
    return this.getNumberAttribute('timeout_in_minutes');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      tags: this._tags,
    };
  }
}
