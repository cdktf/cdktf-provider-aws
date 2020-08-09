// https://www.terraform.io/docs/providers/aws/r/api_gateway_account.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cloudwatch_role_arn": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "throttle_settings": {
        "type": [
          "list",
          [
            "object",
            {
              "burst_limit": "number",
              "rate_limit": "number"
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
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface ApiGatewayAccountConfig extends TerraformMetaArguments {
  readonly cloudwatchRoleArn?: string;
}
export class ApiGatewayAccountThrottleSettings extends ComplexComputedList {

  // burst_limit - computed: true, optional: false, required: true
  public get burstLimit() {
    return this.getNumberAttribute('burst_limit');
  }

  // rate_limit - computed: true, optional: false, required: true
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
}

// Resource

export class ApiGatewayAccount extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_account',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cloudwatchRoleArn = config.cloudwatchRoleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloudwatch_role_arn - computed: false, optional: true, required: false
  private _cloudwatchRoleArn?: string;
  public get cloudwatchRoleArn() {
    return this._cloudwatchRoleArn;
  }
  public set cloudwatchRoleArn(value: string | undefined) {
    this._cloudwatchRoleArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // throttle_settings - computed: true, optional: false, required: true
  public throttleSettings(index: string) {
    return new ApiGatewayAccountThrottleSettings(this, 'throttle_settings', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cloudwatch_role_arn: this._cloudwatchRoleArn,
    };
  }
}
