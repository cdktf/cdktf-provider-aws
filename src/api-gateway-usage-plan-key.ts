// https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "key_id": {
        "type": "string",
        "required": true
      },
      "key_type": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "usage_plan_id": {
        "type": "string",
        "required": true
      },
      "value": {
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

export interface ApiGatewayUsagePlanKeyConfig extends TerraformMetaArguments {
  readonly keyId: string;
  readonly keyType: string;
  readonly usagePlanId: string;
}

// Resource

export class ApiGatewayUsagePlanKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayUsagePlanKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_usage_plan_key',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyId = config.keyId;
    this._keyType = config.keyType;
    this._usagePlanId = config.usagePlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId: string;
  public get keyId() {
    return this._keyId;
  }
  public set keyId(value: string) {
    this._keyId = value;
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType: string;
  public get keyType() {
    return this._keyType;
  }
  public set keyType(value: string) {
    this._keyType = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // usage_plan_id - computed: false, optional: false, required: true
  private _usagePlanId: string;
  public get usagePlanId() {
    return this._usagePlanId;
  }
  public set usagePlanId(value: string) {
    this._usagePlanId = value;
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      key_id: this._keyId,
      key_type: this._keyType,
      usage_plan_id: this._usagePlanId,
    };
  }
}
