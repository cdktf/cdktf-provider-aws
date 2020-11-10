// https://www.terraform.io/docs/providers/aws/r/alb_target_group.html
// generated from terraform resource schema

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // arn_suffix - computed: true, optional: false, required: false
  public get arnSuffix() {
    return this.getStringAttribute('arn_suffix');
  }

  // deregistration_delay - computed: false, optional: true, required: false
  private _deregistrationDelay?: number;
  public get deregistrationDelay() {
    return this.getNumberAttribute('deregistration_delay');
  }
  public set deregistrationDelay(value: number ) {
    this._deregistrationDelay = value;
  }
  public resetDeregistrationDelay() {
    this._deregistrationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deregistrationDelayInput() {
    return this._deregistrationDelay
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lambda_multi_value_headers_enabled - computed: false, optional: true, required: false
  private _lambdaMultiValueHeadersEnabled?: boolean;
  public get lambdaMultiValueHeadersEnabled() {
    return this.getBooleanAttribute('lambda_multi_value_headers_enabled');
  }
  public set lambdaMultiValueHeadersEnabled(value: boolean ) {
    this._lambdaMultiValueHeadersEnabled = value;
  }
  public resetLambdaMultiValueHeadersEnabled() {
    this._lambdaMultiValueHeadersEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaMultiValueHeadersEnabledInput() {
    return this._lambdaMultiValueHeadersEnabled
  }

  // load_balancing_algorithm_type - computed: true, optional: true, required: false
  private _loadBalancingAlgorithmType?: string;
  public get loadBalancingAlgorithmType() {
    return this.getStringAttribute('load_balancing_algorithm_type');
  }
  public set loadBalancingAlgorithmType(value: string) {
    this._loadBalancingAlgorithmType = value;
  }
  public resetLoadBalancingAlgorithmType() {
    this._loadBalancingAlgorithmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingAlgorithmTypeInput() {
    return this._loadBalancingAlgorithmType
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string ) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number ) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string;
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string ) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // proxy_protocol_v2 - computed: false, optional: true, required: false
  private _proxyProtocolV2?: boolean;
  public get proxyProtocolV2() {
    return this.getBooleanAttribute('proxy_protocol_v2');
  }
  public set proxyProtocolV2(value: boolean ) {
    this._proxyProtocolV2 = value;
  }
  public resetProxyProtocolV2() {
    this._proxyProtocolV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolV2Input() {
    return this._proxyProtocolV2
  }

  // slow_start - computed: false, optional: true, required: false
  private _slowStart?: number;
  public get slowStart() {
    return this.getNumberAttribute('slow_start');
  }
  public set slowStart(value: number ) {
    this._slowStart = value;
  }
  public resetSlowStart() {
    this._slowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowStartInput() {
    return this._slowStart
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string;
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string ) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string ) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: AlbTargetGroupHealthCheck[];
  public get healthCheck() {
    return this.interpolationForAttribute('health_check') as any;
  }
  public set healthCheck(value: AlbTargetGroupHealthCheck[] ) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck
  }

  // stickiness - computed: false, optional: true, required: false
  private _stickiness?: AlbTargetGroupStickiness[];
  public get stickiness() {
    return this.interpolationForAttribute('stickiness') as any;
  }
  public set stickiness(value: AlbTargetGroupStickiness[] ) {
    this._stickiness = value;
  }
  public resetStickiness() {
    this._stickiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickinessInput() {
    return this._stickiness
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
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
