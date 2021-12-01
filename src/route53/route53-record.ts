// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Route 53
*/
export interface Route53RecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#allow_overwrite Route53Record#allow_overwrite}
  */
  readonly allowOverwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#health_check_id Route53Record#health_check_id}
  */
  readonly healthCheckId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}
  */
  readonly multivalueAnswerRoutingPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#name Route53Record#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#records Route53Record#records}
  */
  readonly records?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#set_identifier Route53Record#set_identifier}
  */
  readonly setIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#ttl Route53Record#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#type Route53Record#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#zone_id Route53Record#zone_id}
  */
  readonly zoneId: string;
  /**
  * alias block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#alias Route53Record#alias}
  */
  readonly alias?: Route53RecordAlias[];
  /**
  * failover_routing_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#failover_routing_policy Route53Record#failover_routing_policy}
  */
  readonly failoverRoutingPolicy?: Route53RecordFailoverRoutingPolicy[];
  /**
  * geolocation_routing_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#geolocation_routing_policy Route53Record#geolocation_routing_policy}
  */
  readonly geolocationRoutingPolicy?: Route53RecordGeolocationRoutingPolicy[];
  /**
  * latency_routing_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#latency_routing_policy Route53Record#latency_routing_policy}
  */
  readonly latencyRoutingPolicy?: Route53RecordLatencyRoutingPolicy[];
  /**
  * weighted_routing_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#weighted_routing_policy Route53Record#weighted_routing_policy}
  */
  readonly weightedRoutingPolicy?: Route53RecordWeightedRoutingPolicy[];
}
export interface Route53RecordAlias {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#evaluate_target_health Route53Record#evaluate_target_health}
  */
  readonly evaluateTargetHealth: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#name Route53Record#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#zone_id Route53Record#zone_id}
  */
  readonly zoneId: string;
}

export function route53RecordAliasToTerraform(struct?: Route53RecordAlias): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluate_target_health: cdktf.booleanToTerraform(struct!.evaluateTargetHealth),
    name: cdktf.stringToTerraform(struct!.name),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}

export interface Route53RecordFailoverRoutingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#type Route53Record#type}
  */
  readonly type: string;
}

export function route53RecordFailoverRoutingPolicyToTerraform(struct?: Route53RecordFailoverRoutingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Route53RecordGeolocationRoutingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#continent Route53Record#continent}
  */
  readonly continent?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#country Route53Record#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#subdivision Route53Record#subdivision}
  */
  readonly subdivision?: string;
}

export function route53RecordGeolocationRoutingPolicyToTerraform(struct?: Route53RecordGeolocationRoutingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continent: cdktf.stringToTerraform(struct!.continent),
    country: cdktf.stringToTerraform(struct!.country),
    subdivision: cdktf.stringToTerraform(struct!.subdivision),
  }
}

export interface Route53RecordLatencyRoutingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#region Route53Record#region}
  */
  readonly region: string;
}

export function route53RecordLatencyRoutingPolicyToTerraform(struct?: Route53RecordLatencyRoutingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export interface Route53RecordWeightedRoutingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html#weight Route53Record#weight}
  */
  readonly weight: number;
}

export function route53RecordWeightedRoutingPolicyToTerraform(struct?: Route53RecordWeightedRoutingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html aws_route53_record}
*/
export class Route53Record extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_route53_record";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_record.html aws_route53_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53RecordConfig
  */
  public constructor(scope: Construct, id: string, config: Route53RecordConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_record',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowOverwrite = config.allowOverwrite;
    this._healthCheckId = config.healthCheckId;
    this._multivalueAnswerRoutingPolicy = config.multivalueAnswerRoutingPolicy;
    this._name = config.name;
    this._records = config.records;
    this._setIdentifier = config.setIdentifier;
    this._ttl = config.ttl;
    this._type = config.type;
    this._zoneId = config.zoneId;
    this._alias = config.alias;
    this._failoverRoutingPolicy = config.failoverRoutingPolicy;
    this._geolocationRoutingPolicy = config.geolocationRoutingPolicy;
    this._latencyRoutingPolicy = config.latencyRoutingPolicy;
    this._weightedRoutingPolicy = config.weightedRoutingPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_overwrite - computed: true, optional: true, required: false
  private _allowOverwrite?: boolean | cdktf.IResolvable; 
  public get allowOverwrite() {
    return this.getBooleanAttribute('allow_overwrite') as any;
  }
  public set allowOverwrite(value: boolean | cdktf.IResolvable) {
    this._allowOverwrite = value;
  }
  public resetAllowOverwrite() {
    this._allowOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverwriteInput() {
    return this._allowOverwrite;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // health_check_id - computed: false, optional: true, required: false
  private _healthCheckId?: string; 
  public get healthCheckId() {
    return this.getStringAttribute('health_check_id');
  }
  public set healthCheckId(value: string) {
    this._healthCheckId = value;
  }
  public resetHealthCheckId() {
    this._healthCheckId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIdInput() {
    return this._healthCheckId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multivalue_answer_routing_policy - computed: false, optional: true, required: false
  private _multivalueAnswerRoutingPolicy?: boolean | cdktf.IResolvable; 
  public get multivalueAnswerRoutingPolicy() {
    return this.getBooleanAttribute('multivalue_answer_routing_policy') as any;
  }
  public set multivalueAnswerRoutingPolicy(value: boolean | cdktf.IResolvable) {
    this._multivalueAnswerRoutingPolicy = value;
  }
  public resetMultivalueAnswerRoutingPolicy() {
    this._multivalueAnswerRoutingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multivalueAnswerRoutingPolicyInput() {
    return this._multivalueAnswerRoutingPolicy;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // records - computed: false, optional: true, required: false
  private _records?: string[]; 
  public get records() {
    return this.getListAttribute('records');
  }
  public set records(value: string[]) {
    this._records = value;
  }
  public resetRecords() {
    this._records = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordsInput() {
    return this._records;
  }

  // set_identifier - computed: false, optional: true, required: false
  private _setIdentifier?: string; 
  public get setIdentifier() {
    return this.getStringAttribute('set_identifier');
  }
  public set setIdentifier(value: string) {
    this._setIdentifier = value;
  }
  public resetSetIdentifier() {
    this._setIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIdentifierInput() {
    return this._setIdentifier;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: Route53RecordAlias[]; 
  public get alias() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('alias') as any;
  }
  public set alias(value: Route53RecordAlias[]) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // failover_routing_policy - computed: false, optional: true, required: false
  private _failoverRoutingPolicy?: Route53RecordFailoverRoutingPolicy[]; 
  public get failoverRoutingPolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('failover_routing_policy') as any;
  }
  public set failoverRoutingPolicy(value: Route53RecordFailoverRoutingPolicy[]) {
    this._failoverRoutingPolicy = value;
  }
  public resetFailoverRoutingPolicy() {
    this._failoverRoutingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverRoutingPolicyInput() {
    return this._failoverRoutingPolicy;
  }

  // geolocation_routing_policy - computed: false, optional: true, required: false
  private _geolocationRoutingPolicy?: Route53RecordGeolocationRoutingPolicy[]; 
  public get geolocationRoutingPolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('geolocation_routing_policy') as any;
  }
  public set geolocationRoutingPolicy(value: Route53RecordGeolocationRoutingPolicy[]) {
    this._geolocationRoutingPolicy = value;
  }
  public resetGeolocationRoutingPolicy() {
    this._geolocationRoutingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocationRoutingPolicyInput() {
    return this._geolocationRoutingPolicy;
  }

  // latency_routing_policy - computed: false, optional: true, required: false
  private _latencyRoutingPolicy?: Route53RecordLatencyRoutingPolicy[]; 
  public get latencyRoutingPolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('latency_routing_policy') as any;
  }
  public set latencyRoutingPolicy(value: Route53RecordLatencyRoutingPolicy[]) {
    this._latencyRoutingPolicy = value;
  }
  public resetLatencyRoutingPolicy() {
    this._latencyRoutingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyRoutingPolicyInput() {
    return this._latencyRoutingPolicy;
  }

  // weighted_routing_policy - computed: false, optional: true, required: false
  private _weightedRoutingPolicy?: Route53RecordWeightedRoutingPolicy[]; 
  public get weightedRoutingPolicy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('weighted_routing_policy') as any;
  }
  public set weightedRoutingPolicy(value: Route53RecordWeightedRoutingPolicy[]) {
    this._weightedRoutingPolicy = value;
  }
  public resetWeightedRoutingPolicy() {
    this._weightedRoutingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedRoutingPolicyInput() {
    return this._weightedRoutingPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_overwrite: cdktf.booleanToTerraform(this._allowOverwrite),
      health_check_id: cdktf.stringToTerraform(this._healthCheckId),
      multivalue_answer_routing_policy: cdktf.booleanToTerraform(this._multivalueAnswerRoutingPolicy),
      name: cdktf.stringToTerraform(this._name),
      records: cdktf.listMapper(cdktf.stringToTerraform)(this._records),
      set_identifier: cdktf.stringToTerraform(this._setIdentifier),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      alias: cdktf.listMapper(route53RecordAliasToTerraform)(this._alias),
      failover_routing_policy: cdktf.listMapper(route53RecordFailoverRoutingPolicyToTerraform)(this._failoverRoutingPolicy),
      geolocation_routing_policy: cdktf.listMapper(route53RecordGeolocationRoutingPolicyToTerraform)(this._geolocationRoutingPolicy),
      latency_routing_policy: cdktf.listMapper(route53RecordLatencyRoutingPolicyToTerraform)(this._latencyRoutingPolicy),
      weighted_routing_policy: cdktf.listMapper(route53RecordWeightedRoutingPolicyToTerraform)(this._weightedRoutingPolicy),
    };
  }
}
