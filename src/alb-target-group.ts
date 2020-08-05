// https://www.terraform.io/docs/providers/aws/r/alb_target_group.html
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
      "arn_suffix": {
        "type": "string",
        "computed": true
      },
      "deregistration_delay": {
        "type": "number",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "lambda_multi_value_headers_enabled": {
        "type": "bool",
        "optional": true
      },
      "load_balancing_algorithm_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name_prefix": {
        "type": "string",
        "optional": true
      },
      "port": {
        "type": "number",
        "optional": true
      },
      "protocol": {
        "type": "string",
        "optional": true
      },
      "proxy_protocol_v2": {
        "type": "bool",
        "optional": true
      },
      "slow_start": {
        "type": "number",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "target_type": {
        "type": "string",
        "optional": true
      },
      "vpc_id": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "health_check": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "enabled": {
              "type": "bool",
              "optional": true
            },
            "healthy_threshold": {
              "type": "number",
              "optional": true
            },
            "interval": {
              "type": "number",
              "optional": true
            },
            "matcher": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "path": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "port": {
              "type": "string",
              "optional": true
            },
            "protocol": {
              "type": "string",
              "optional": true
            },
            "timeout": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "unhealthy_threshold": {
              "type": "number",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "stickiness": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "cookie_duration": {
              "type": "number",
              "optional": true
            },
            "enabled": {
              "type": "bool",
              "optional": true
            },
            "type": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AlbTargetGroupConfig extends TerraformMetaArguments {
  readonly deregistrationDelay?: number;
  readonly lambdaMultiValueHeadersEnabled?: boolean;
  readonly loadBalancingAlgorithmType?: string;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly port?: number;
  readonly protocol?: string;
  readonly proxyProtocolV2?: boolean;
  readonly slowStart?: number;
  readonly tags?: { [key: string]: string };
  readonly targetType?: string;
  readonly vpcId?: string;
  /** health_check block */
  readonly healthCheck?: AlbTargetGroupHealthCheck[];
  /** stickiness block */
  readonly stickiness?: AlbTargetGroupStickiness[];
}
export interface AlbTargetGroupHealthCheck {
  readonly enabled?: boolean;
  readonly healthyThreshold?: number;
  readonly interval?: number;
  readonly matcher?: string;
  readonly path?: string;
  readonly port?: string;
  readonly protocol?: string;
  readonly timeout?: number;
  readonly unhealthyThreshold?: number;
}
export interface AlbTargetGroupStickiness {
  readonly cookieDuration?: number;
  readonly enabled?: boolean;
  readonly type: string;
}

// Resource

export class AlbTargetGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AlbTargetGroupConfig = {}) {
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
    this._deregistrationDelay = config.deregistrationDelay;
    this._lambdaMultiValueHeadersEnabled = config.lambdaMultiValueHeadersEnabled;
    this._loadBalancingAlgorithmType = config.loadBalancingAlgorithmType;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._port = config.port;
    this._protocol = config.protocol;
    this._proxyProtocolV2 = config.proxyProtocolV2;
    this._slowStart = config.slowStart;
    this._tags = config.tags;
    this._targetType = config.targetType;
    this._vpcId = config.vpcId;
    this._healthCheck = config.healthCheck;
    this._stickiness = config.stickiness;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // arn_suffix - computed: true, optional: false, required: true
  public get arnSuffix() {
    return this.getStringAttribute('arn_suffix');
  }

  // deregistration_delay - computed: false, optional: true, required: false
  private _deregistrationDelay?: number;
  public get deregistrationDelay() {
    return this._deregistrationDelay;
  }
  public set deregistrationDelay(value: number | undefined) {
    this._deregistrationDelay = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lambda_multi_value_headers_enabled - computed: false, optional: true, required: false
  private _lambdaMultiValueHeadersEnabled?: boolean;
  public get lambdaMultiValueHeadersEnabled() {
    return this._lambdaMultiValueHeadersEnabled;
  }
  public set lambdaMultiValueHeadersEnabled(value: boolean | undefined) {
    this._lambdaMultiValueHeadersEnabled = value;
  }

  // load_balancing_algorithm_type - computed: true, optional: true, required: false
  private _loadBalancingAlgorithmType?: string;
  public get loadBalancingAlgorithmType() {
    return this._loadBalancingAlgorithmType ?? this.getStringAttribute('load_balancing_algorithm_type');
  }
  public set loadBalancingAlgorithmType(value: string | undefined) {
    this._loadBalancingAlgorithmType = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix;
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string;
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string | undefined) {
    this._protocol = value;
  }

  // proxy_protocol_v2 - computed: false, optional: true, required: false
  private _proxyProtocolV2?: boolean;
  public get proxyProtocolV2() {
    return this._proxyProtocolV2;
  }
  public set proxyProtocolV2(value: boolean | undefined) {
    this._proxyProtocolV2 = value;
  }

  // slow_start - computed: false, optional: true, required: false
  private _slowStart?: number;
  public get slowStart() {
    return this._slowStart;
  }
  public set slowStart(value: number | undefined) {
    this._slowStart = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string;
  public get targetType() {
    return this._targetType;
  }
  public set targetType(value: string | undefined) {
    this._targetType = value;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this._vpcId;
  }
  public set vpcId(value: string | undefined) {
    this._vpcId = value;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: AlbTargetGroupHealthCheck[];
  public get healthCheck() {
    return this._healthCheck;
  }
  public set healthCheck(value: AlbTargetGroupHealthCheck[] | undefined) {
    this._healthCheck = value;
  }

  // stickiness - computed: false, optional: true, required: false
  private _stickiness?: AlbTargetGroupStickiness[];
  public get stickiness() {
    return this._stickiness;
  }
  public set stickiness(value: AlbTargetGroupStickiness[] | undefined) {
    this._stickiness = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      deregistration_delay: this._deregistrationDelay,
      lambda_multi_value_headers_enabled: this._lambdaMultiValueHeadersEnabled,
      load_balancing_algorithm_type: this._loadBalancingAlgorithmType,
      name: this._name,
      name_prefix: this._namePrefix,
      port: this._port,
      protocol: this._protocol,
      proxy_protocol_v2: this._proxyProtocolV2,
      slow_start: this._slowStart,
      tags: this._tags,
      target_type: this._targetType,
      vpc_id: this._vpcId,
      health_check: this._healthCheck,
      stickiness: this._stickiness,
    };
  }
}
