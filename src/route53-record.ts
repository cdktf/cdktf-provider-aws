// https://www.terraform.io/docs/providers/aws/r/route53_record.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Route53RecordConfig extends TerraformMetaArguments {
  readonly allowOverwrite?: boolean;
  readonly healthCheckId?: string;
  readonly multivalueAnswerRoutingPolicy?: boolean;
  readonly name: string;
  readonly records?: string[];
  readonly setIdentifier?: string;
  readonly ttl?: number;
  readonly type: string;
  readonly zoneId: string;
  /** alias block */
  readonly alias?: Route53RecordAlias[];
  /** failover_routing_policy block */
  readonly failoverRoutingPolicy?: Route53RecordFailoverRoutingPolicy[];
  /** geolocation_routing_policy block */
  readonly geolocationRoutingPolicy?: Route53RecordGeolocationRoutingPolicy[];
  /** latency_routing_policy block */
  readonly latencyRoutingPolicy?: Route53RecordLatencyRoutingPolicy[];
  /** weighted_routing_policy block */
  readonly weightedRoutingPolicy?: Route53RecordWeightedRoutingPolicy[];
}
export interface Route53RecordAlias {
  readonly evaluateTargetHealth: boolean;
  readonly name: string;
  readonly zoneId: string;
}
export interface Route53RecordFailoverRoutingPolicy {
  readonly type: string;
}
export interface Route53RecordGeolocationRoutingPolicy {
  readonly continent?: string;
  readonly country?: string;
  readonly subdivision?: string;
}
export interface Route53RecordLatencyRoutingPolicy {
  readonly region: string;
}
export interface Route53RecordWeightedRoutingPolicy {
  readonly weight: number;
}

// Resource

export class Route53Record extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _allowOverwrite?: boolean;
  public get allowOverwrite() {
    return this.getBooleanAttribute('allow_overwrite');
  }
  public set allowOverwrite(value: boolean) {
    this._allowOverwrite = value;
  }
  public resetAllowOverwrite() {
    this._allowOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverwriteInput() {
    return this._allowOverwrite
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
  public set healthCheckId(value: string ) {
    this._healthCheckId = value;
  }
  public resetHealthCheckId() {
    this._healthCheckId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIdInput() {
    return this._healthCheckId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multivalue_answer_routing_policy - computed: false, optional: true, required: false
  private _multivalueAnswerRoutingPolicy?: boolean;
  public get multivalueAnswerRoutingPolicy() {
    return this.getBooleanAttribute('multivalue_answer_routing_policy');
  }
  public set multivalueAnswerRoutingPolicy(value: boolean ) {
    this._multivalueAnswerRoutingPolicy = value;
  }
  public resetMultivalueAnswerRoutingPolicy() {
    this._multivalueAnswerRoutingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multivalueAnswerRoutingPolicyInput() {
    return this._multivalueAnswerRoutingPolicy
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // records - computed: false, optional: true, required: false
  private _records?: string[];
  public get records() {
    return this.getListAttribute('records');
  }
  public set records(value: string[] ) {
    this._records = value;
  }
  public resetRecords() {
    this._records = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordsInput() {
    return this._records
  }

  // set_identifier - computed: false, optional: true, required: false
  private _setIdentifier?: string;
  public get setIdentifier() {
    return this.getStringAttribute('set_identifier');
  }
  public set setIdentifier(value: string ) {
    this._setIdentifier = value;
  }
  public resetSetIdentifier() {
    this._setIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIdentifierInput() {
    return this._setIdentifier
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number;
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number ) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId: string;
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: Route53RecordAlias[];
  public get alias() {
    return this.interpolationForAttribute('alias') as any;
  }
  public set alias(value: Route53RecordAlias[] ) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias
  }

  // failover_routing_policy - computed: false, optional: true, required: false
  private _failoverRoutingPolicy?: Route53RecordFailoverRoutingPolicy[];
  public get failoverRoutingPolicy() {
    return this.interpolationForAttribute('failover_routing_policy') as any;
  }
  public set failoverRoutingPolicy(value: Route53RecordFailoverRoutingPolicy[] ) {
    this._failoverRoutingPolicy = value;
  }
  public resetFailoverRoutingPolicy() {
    this._failoverRoutingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverRoutingPolicyInput() {
    return this._failoverRoutingPolicy
  }

  // geolocation_routing_policy - computed: false, optional: true, required: false
  private _geolocationRoutingPolicy?: Route53RecordGeolocationRoutingPolicy[];
  public get geolocationRoutingPolicy() {
    return this.interpolationForAttribute('geolocation_routing_policy') as any;
  }
  public set geolocationRoutingPolicy(value: Route53RecordGeolocationRoutingPolicy[] ) {
    this._geolocationRoutingPolicy = value;
  }
  public resetGeolocationRoutingPolicy() {
    this._geolocationRoutingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocationRoutingPolicyInput() {
    return this._geolocationRoutingPolicy
  }

  // latency_routing_policy - computed: false, optional: true, required: false
  private _latencyRoutingPolicy?: Route53RecordLatencyRoutingPolicy[];
  public get latencyRoutingPolicy() {
    return this.interpolationForAttribute('latency_routing_policy') as any;
  }
  public set latencyRoutingPolicy(value: Route53RecordLatencyRoutingPolicy[] ) {
    this._latencyRoutingPolicy = value;
  }
  public resetLatencyRoutingPolicy() {
    this._latencyRoutingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyRoutingPolicyInput() {
    return this._latencyRoutingPolicy
  }

  // weighted_routing_policy - computed: false, optional: true, required: false
  private _weightedRoutingPolicy?: Route53RecordWeightedRoutingPolicy[];
  public get weightedRoutingPolicy() {
    return this.interpolationForAttribute('weighted_routing_policy') as any;
  }
  public set weightedRoutingPolicy(value: Route53RecordWeightedRoutingPolicy[] ) {
    this._weightedRoutingPolicy = value;
  }
  public resetWeightedRoutingPolicy() {
    this._weightedRoutingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedRoutingPolicyInput() {
    return this._weightedRoutingPolicy
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_overwrite: this._allowOverwrite,
      health_check_id: this._healthCheckId,
      multivalue_answer_routing_policy: this._multivalueAnswerRoutingPolicy,
      name: this._name,
      records: this._records,
      set_identifier: this._setIdentifier,
      ttl: this._ttl,
      type: this._type,
      zone_id: this._zoneId,
      alias: this._alias,
      failover_routing_policy: this._failoverRoutingPolicy,
      geolocation_routing_policy: this._geolocationRoutingPolicy,
      latency_routing_policy: this._latencyRoutingPolicy,
      weighted_routing_policy: this._weightedRoutingPolicy,
    };
  }
}
