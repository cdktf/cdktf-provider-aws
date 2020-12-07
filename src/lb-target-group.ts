// https://www.terraform.io/docs/providers/aws/r/lb_target_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbTargetGroupConfig extends cdktf.TerraformMetaArguments {
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
  readonly healthCheck?: LbTargetGroupHealthCheck[];
  /** stickiness block */
  readonly stickiness?: LbTargetGroupStickiness[];
}
export interface LbTargetGroupHealthCheck {
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

function lbTargetGroupHealthCheckToTerraform(struct?: LbTargetGroupHealthCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval: cdktf.numberToTerraform(struct!.interval),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}

export interface LbTargetGroupStickiness {
  readonly cookieDuration?: number;
  readonly enabled?: boolean;
  readonly type: string;
}

function lbTargetGroupStickinessToTerraform(struct?: LbTargetGroupStickiness): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cookie_duration: cdktf.numberToTerraform(struct!.cookieDuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


// Resource

export class LbTargetGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LbTargetGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_lb_target_group',
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
  private _healthCheck?: LbTargetGroupHealthCheck[];
  public get healthCheck() {
    return this.interpolationForAttribute('health_check') as any;
  }
  public set healthCheck(value: LbTargetGroupHealthCheck[] ) {
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
  private _stickiness?: LbTargetGroupStickiness[];
  public get stickiness() {
    return this.interpolationForAttribute('stickiness') as any;
  }
  public set stickiness(value: LbTargetGroupStickiness[] ) {
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
      deregistration_delay: cdktf.numberToTerraform(this._deregistrationDelay),
      lambda_multi_value_headers_enabled: cdktf.booleanToTerraform(this._lambdaMultiValueHeadersEnabled),
      load_balancing_algorithm_type: cdktf.stringToTerraform(this._loadBalancingAlgorithmType),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      proxy_protocol_v2: cdktf.booleanToTerraform(this._proxyProtocolV2),
      slow_start: cdktf.numberToTerraform(this._slowStart),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      target_type: cdktf.stringToTerraform(this._targetType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      health_check: cdktf.listMapper(lbTargetGroupHealthCheckToTerraform)(this._healthCheck),
      stickiness: cdktf.listMapper(lbTargetGroupStickinessToTerraform)(this._stickiness),
    };
  }
}
