// https://www.terraform.io/docs/providers/aws/r/data_aws_alb_target_group.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "arn_suffix": {
        "type": "string",
        "computed": true
      },
      "deregistration_delay": {
        "type": "number",
        "computed": true
      },
      "health_check": {
        "type": [
          "list",
          [
            "object",
            {
              "enabled": "bool",
              "healthy_threshold": "number",
              "interval": "number",
              "matcher": "string",
              "path": "string",
              "port": "string",
              "protocol": "string",
              "timeout": "number",
              "unhealthy_threshold": "number"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "lambda_multi_value_headers_enabled": {
        "type": "bool",
        "computed": true
      },
      "load_balancing_algorithm_type": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "port": {
        "type": "number",
        "computed": true
      },
      "protocol": {
        "type": "string",
        "computed": true
      },
      "proxy_protocol_v2": {
        "type": "bool",
        "computed": true
      },
      "slow_start": {
        "type": "number",
        "computed": true
      },
      "stickiness": {
        "type": [
          "list",
          [
            "object",
            {
              "cookie_duration": "number",
              "enabled": "bool",
              "type": "string"
            }
          ]
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
      "target_type": {
        "type": "string",
        "computed": true
      },
      "vpc_id": {
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsAlbTargetGroupConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsAlbTargetGroupHealthCheck extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // healthy_threshold - computed: true, optional: false, required: true
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }

  // interval - computed: true, optional: false, required: true
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // matcher - computed: true, optional: false, required: true
  public get matcher() {
    return this.getStringAttribute('matcher');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // timeout - computed: true, optional: false, required: true
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // unhealthy_threshold - computed: true, optional: false, required: true
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
}
export class DataAwsAlbTargetGroupStickiness extends ComplexComputedList {

  // cookie_duration - computed: true, optional: false, required: true
  public get cookieDuration() {
    return this.getNumberAttribute('cookie_duration');
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}

// Resource

export class DataAwsAlbTargetGroup extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsAlbTargetGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_alb_target_group',
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

  // arn - computed: true, optional: true, required: false
  private _arn?: string;
  public get arn() {
    return this._arn ?? this.getStringAttribute('arn');
  }
  public set arn(value: string | undefined) {
    this._arn = value;
  }

  // arn_suffix - computed: true, optional: false, required: true
  public get arnSuffix() {
    return this.getStringAttribute('arn_suffix');
  }

  // deregistration_delay - computed: true, optional: false, required: true
  public get deregistrationDelay() {
    return this.getNumberAttribute('deregistration_delay');
  }

  // health_check - computed: true, optional: false, required: true
  public healthCheck(index: string) {
    return new DataAwsAlbTargetGroupHealthCheck(this, 'health_check', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lambda_multi_value_headers_enabled - computed: true, optional: false, required: true
  public get lambdaMultiValueHeadersEnabled() {
    return this.getBooleanAttribute('lambda_multi_value_headers_enabled');
  }

  // load_balancing_algorithm_type - computed: true, optional: false, required: true
  public get loadBalancingAlgorithmType() {
    return this.getStringAttribute('load_balancing_algorithm_type');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // proxy_protocol_v2 - computed: true, optional: false, required: true
  public get proxyProtocolV2() {
    return this.getBooleanAttribute('proxy_protocol_v2');
  }

  // slow_start - computed: true, optional: false, required: true
  public get slowStart() {
    return this.getNumberAttribute('slow_start');
  }

  // stickiness - computed: true, optional: false, required: true
  public stickiness(index: string) {
    return new DataAwsAlbTargetGroupStickiness(this, 'stickiness', index);
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // target_type - computed: true, optional: false, required: true
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
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
