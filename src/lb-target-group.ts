// https://www.terraform.io/docs/providers/aws/r/lb_target_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbTargetGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#deregistration_delay LbTargetGroup#deregistration_delay}
  */
  readonly deregistrationDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#lambda_multi_value_headers_enabled LbTargetGroup#lambda_multi_value_headers_enabled}
  */
  readonly lambdaMultiValueHeadersEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#load_balancing_algorithm_type LbTargetGroup#load_balancing_algorithm_type}
  */
  readonly loadBalancingAlgorithmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#name LbTargetGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#name_prefix LbTargetGroup#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#port LbTargetGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#preserve_client_ip LbTargetGroup#preserve_client_ip}
  */
  readonly preserveClientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#protocol LbTargetGroup#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#protocol_version LbTargetGroup#protocol_version}
  */
  readonly protocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#proxy_protocol_v2 LbTargetGroup#proxy_protocol_v2}
  */
  readonly proxyProtocolV2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#slow_start LbTargetGroup#slow_start}
  */
  readonly slowStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#tags LbTargetGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#tags_all LbTargetGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#target_type LbTargetGroup#target_type}
  */
  readonly targetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#vpc_id LbTargetGroup#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * health_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#health_check LbTargetGroup#health_check}
  */
  readonly healthCheck?: LbTargetGroupHealthCheck[];
  /**
  * stickiness block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#stickiness LbTargetGroup#stickiness}
  */
  readonly stickiness?: LbTargetGroupStickiness[];
}
export interface LbTargetGroupHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#enabled LbTargetGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#healthy_threshold LbTargetGroup#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#interval LbTargetGroup#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#matcher LbTargetGroup#matcher}
  */
  readonly matcher?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#path LbTargetGroup#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#port LbTargetGroup#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#protocol LbTargetGroup#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#timeout LbTargetGroup#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#unhealthy_threshold LbTargetGroup#unhealthy_threshold}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#cookie_duration LbTargetGroup#cookie_duration}
  */
  readonly cookieDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#cookie_name LbTargetGroup#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#enabled LbTargetGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#type LbTargetGroup#type}
  */
  readonly type: string;
}

function lbTargetGroupStickinessToTerraform(struct?: LbTargetGroupStickiness): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cookie_duration: cdktf.numberToTerraform(struct!.cookieDuration),
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html aws_lb_target_group}
*/
export class LbTargetGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lb_target_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html aws_lb_target_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbTargetGroupConfig = {}
  */
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
    this._preserveClientIp = config.preserveClientIp;
    this._protocol = config.protocol;
    this._protocolVersion = config.protocolVersion;
    this._proxyProtocolV2 = config.proxyProtocolV2;
    this._slowStart = config.slowStart;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
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
  private _deregistrationDelay?: string;
  public get deregistrationDelay() {
    return this.getStringAttribute('deregistration_delay');
  }
  public set deregistrationDelay(value: string ) {
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
  private _lambdaMultiValueHeadersEnabled?: boolean | cdktf.IResolvable;
  public get lambdaMultiValueHeadersEnabled() {
    return this.getBooleanAttribute('lambda_multi_value_headers_enabled');
  }
  public set lambdaMultiValueHeadersEnabled(value: boolean | cdktf.IResolvable ) {
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

  // preserve_client_ip - computed: true, optional: true, required: false
  private _preserveClientIp?: string;
  public get preserveClientIp() {
    return this.getStringAttribute('preserve_client_ip');
  }
  public set preserveClientIp(value: string) {
    this._preserveClientIp = value;
  }
  public resetPreserveClientIp() {
    this._preserveClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveClientIpInput() {
    return this._preserveClientIp
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

  // protocol_version - computed: true, optional: true, required: false
  private _protocolVersion?: string;
  public get protocolVersion() {
    return this.getStringAttribute('protocol_version');
  }
  public set protocolVersion(value: string) {
    this._protocolVersion = value;
  }
  public resetProtocolVersion() {
    this._protocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVersionInput() {
    return this._protocolVersion
  }

  // proxy_protocol_v2 - computed: false, optional: true, required: false
  private _proxyProtocolV2?: boolean | cdktf.IResolvable;
  public get proxyProtocolV2() {
    return this.getBooleanAttribute('proxy_protocol_v2');
  }
  public set proxyProtocolV2(value: boolean | cdktf.IResolvable ) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
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
      deregistration_delay: cdktf.stringToTerraform(this._deregistrationDelay),
      lambda_multi_value_headers_enabled: cdktf.booleanToTerraform(this._lambdaMultiValueHeadersEnabled),
      load_balancing_algorithm_type: cdktf.stringToTerraform(this._loadBalancingAlgorithmType),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      port: cdktf.numberToTerraform(this._port),
      preserve_client_ip: cdktf.stringToTerraform(this._preserveClientIp),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_version: cdktf.stringToTerraform(this._protocolVersion),
      proxy_protocol_v2: cdktf.booleanToTerraform(this._proxyProtocolV2),
      slow_start: cdktf.numberToTerraform(this._slowStart),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      target_type: cdktf.stringToTerraform(this._targetType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      health_check: cdktf.listMapper(lbTargetGroupHealthCheckToTerraform)(this._healthCheck),
      stickiness: cdktf.listMapper(lbTargetGroupStickinessToTerraform)(this._stickiness),
    };
  }
}
