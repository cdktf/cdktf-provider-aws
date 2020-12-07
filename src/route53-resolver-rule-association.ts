// https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53ResolverRuleAssociationConfig extends cdktf.TerraformMetaArguments {
  readonly name?: string;
  readonly resolverRuleId: string;
  readonly vpcId: string;
  /** timeouts block */
  readonly timeouts?: Route53ResolverRuleAssociationTimeouts;
}
export interface Route53ResolverRuleAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function route53ResolverRuleAssociationTimeoutsToTerraform(struct?: Route53ResolverRuleAssociationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class Route53ResolverRuleAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Route53ResolverRuleAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_resolver_rule_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resolverRuleId = config.resolverRuleId;
    this._vpcId = config.vpcId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // resolver_rule_id - computed: false, optional: false, required: true
  private _resolverRuleId: string;
  public get resolverRuleId() {
    return this.getStringAttribute('resolver_rule_id');
  }
  public set resolverRuleId(value: string) {
    this._resolverRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverRuleIdInput() {
    return this._resolverRuleId
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: Route53ResolverRuleAssociationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: Route53ResolverRuleAssociationTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      resolver_rule_id: cdktf.stringToTerraform(this._resolverRuleId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: route53ResolverRuleAssociationTimeoutsToTerraform(this._timeouts),
    };
  }
}
