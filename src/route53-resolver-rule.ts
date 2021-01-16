// https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53ResolverRuleConfig extends cdktf.TerraformMetaArguments {
  readonly domainName: string;
  readonly name?: string;
  readonly resolverEndpointId?: string;
  readonly ruleType: string;
  readonly tags?: { [key: string]: string };
  /** target_ip block */
  readonly targetIp?: Route53ResolverRuleTargetIp[];
  /** timeouts block */
  readonly timeouts?: Route53ResolverRuleTimeouts;
}
export interface Route53ResolverRuleTargetIp {
  readonly ip: string;
  readonly port?: number;
}

function route53ResolverRuleTargetIpToTerraform(struct?: Route53ResolverRuleTargetIp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface Route53ResolverRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function route53ResolverRuleTimeoutsToTerraform(struct?: Route53ResolverRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Route53ResolverRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Route53ResolverRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_resolver_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domainName = config.domainName;
    this._name = config.name;
    this._resolverEndpointId = config.resolverEndpointId;
    this._ruleType = config.ruleType;
    this._tags = config.tags;
    this._targetIp = config.targetIp;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // resolver_endpoint_id - computed: false, optional: true, required: false
  private _resolverEndpointId?: string;
  public get resolverEndpointId() {
    return this.getStringAttribute('resolver_endpoint_id');
  }
  public set resolverEndpointId(value: string ) {
    this._resolverEndpointId = value;
  }
  public resetResolverEndpointId() {
    this._resolverEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverEndpointIdInput() {
    return this._resolverEndpointId
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType: string;
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType
  }

  // share_status - computed: true, optional: false, required: false
  public get shareStatus() {
    return this.getStringAttribute('share_status');
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

  // target_ip - computed: false, optional: true, required: false
  private _targetIp?: Route53ResolverRuleTargetIp[];
  public get targetIp() {
    return this.interpolationForAttribute('target_ip') as any;
  }
  public set targetIp(value: Route53ResolverRuleTargetIp[] ) {
    this._targetIp = value;
  }
  public resetTargetIp() {
    this._targetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIpInput() {
    return this._targetIp
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: Route53ResolverRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: Route53ResolverRuleTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      name: cdktf.stringToTerraform(this._name),
      resolver_endpoint_id: cdktf.stringToTerraform(this._resolverEndpointId),
      rule_type: cdktf.stringToTerraform(this._ruleType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      target_ip: cdktf.listMapper(route53ResolverRuleTargetIpToTerraform)(this._targetIp),
      timeouts: route53ResolverRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
