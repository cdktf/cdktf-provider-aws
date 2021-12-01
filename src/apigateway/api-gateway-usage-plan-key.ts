// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* API Gateway
*/
export interface ApiGatewayUsagePlanKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html#key_id ApiGatewayUsagePlanKey#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html#key_type ApiGatewayUsagePlanKey#key_type}
  */
  readonly keyType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html#usage_plan_id ApiGatewayUsagePlanKey#usage_plan_id}
  */
  readonly usagePlanId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html aws_api_gateway_usage_plan_key}
*/
export class ApiGatewayUsagePlanKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_api_gateway_usage_plan_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html aws_api_gateway_usage_plan_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayUsagePlanKeyConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // usage_plan_id - computed: false, optional: false, required: true
  private _usagePlanId?: string; 
  public get usagePlanId() {
    return this.getStringAttribute('usage_plan_id');
  }
  public set usagePlanId(value: string) {
    this._usagePlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usagePlanIdInput() {
    return this._usagePlanId;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_id: cdktf.stringToTerraform(this._keyId),
      key_type: cdktf.stringToTerraform(this._keyType),
      usage_plan_id: cdktf.stringToTerraform(this._usagePlanId),
    };
  }
}
