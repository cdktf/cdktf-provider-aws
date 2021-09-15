// https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53ResolverRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#domain_name Route53ResolverRule#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#name Route53ResolverRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#resolver_endpoint_id Route53ResolverRule#resolver_endpoint_id}
  */
  readonly resolverEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#rule_type Route53ResolverRule#rule_type}
  */
  readonly ruleType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#tags Route53ResolverRule#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#tags_all Route53ResolverRule#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * target_ip block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#target_ip Route53ResolverRule#target_ip}
  */
  readonly targetIp?: Route53ResolverRuleTargetIp[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#timeouts Route53ResolverRule#timeouts}
  */
  readonly timeouts?: Route53ResolverRuleTimeouts;
}
export interface Route53ResolverRuleTargetIp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#ip Route53ResolverRule#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#port Route53ResolverRule#port}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#create Route53ResolverRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#delete Route53ResolverRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#update Route53ResolverRule#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html aws_route53_resolver_rule}
*/
export class Route53ResolverRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_route53_resolver_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html aws_route53_resolver_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53ResolverRuleConfig
  */
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
    this._tagsAll = config.tagsAll;
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      target_ip: cdktf.listMapper(route53ResolverRuleTargetIpToTerraform)(this._targetIp),
      timeouts: route53ResolverRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
