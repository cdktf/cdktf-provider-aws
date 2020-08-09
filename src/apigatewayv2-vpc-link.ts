// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_vpc_link.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "security_group_ids": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "subnet_ids": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Apigatewayv2VpcLinkConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly securityGroupIds: string[];
  readonly subnetIds: string[];
  readonly tags?: { [key: string]: string };
}

// Resource

export class Apigatewayv2VpcLink extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Apigatewayv2VpcLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_vpc_link',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._securityGroupIds = config.securityGroupIds;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
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

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds: string[];
  public get securityGroupIds() {
    return this._securityGroupIds;
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds: string[];
  public get subnetIds() {
    return this._subnetIds;
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      security_group_ids: this._securityGroupIds,
      subnet_ids: this._subnetIds,
      tags: this._tags,
    };
  }
}
