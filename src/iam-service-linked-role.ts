// https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html
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
      "aws_service_name": {
        "type": "string",
        "required": true
      },
      "create_date": {
        "type": "string",
        "computed": true
      },
      "custom_suffix": {
        "type": "string",
        "optional": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "path": {
        "type": "string",
        "computed": true
      },
      "unique_id": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IamServiceLinkedRoleConfig extends TerraformMetaArguments {
  readonly awsServiceName: string;
  readonly customSuffix?: string;
  readonly description?: string;
}

// Resource

export class IamServiceLinkedRole extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IamServiceLinkedRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_service_linked_role',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._awsServiceName = config.awsServiceName;
    this._customSuffix = config.customSuffix;
    this._description = config.description;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_service_name - computed: false, optional: false, required: true
  private _awsServiceName: string;
  public get awsServiceName() {
    return this._awsServiceName;
  }
  public set awsServiceName(value: string) {
    this._awsServiceName = value;
  }

  // create_date - computed: true, optional: false, required: true
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // custom_suffix - computed: false, optional: true, required: false
  private _customSuffix?: string;
  public get customSuffix() {
    return this._customSuffix;
  }
  public set customSuffix(value: string | undefined) {
    this._customSuffix = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // unique_id - computed: true, optional: false, required: true
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_service_name: this._awsServiceName,
      custom_suffix: this._customSuffix,
      description: this._description,
    };
  }
}
