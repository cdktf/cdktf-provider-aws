// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Route 53
*/
export interface DataAwsRoute53ResolverRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html#owner_id DataAwsRoute53ResolverRules#owner_id}
  */
  readonly ownerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}
  */
  readonly resolverEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html#rule_type DataAwsRoute53ResolverRules#rule_type}
  */
  readonly ruleType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html#share_status DataAwsRoute53ResolverRules#share_status}
  */
  readonly shareStatus?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html aws_route53_resolver_rules}
*/
export class DataAwsRoute53ResolverRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_route53_resolver_rules";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules.html aws_route53_resolver_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRoute53ResolverRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsRoute53ResolverRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_resolver_rules',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ownerId = config.ownerId;
    this._resolverEndpointId = config.resolverEndpointId;
    this._ruleType = config.ruleType;
    this._shareStatus = config.shareStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner_id - computed: false, optional: true, required: false
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  public resetOwnerId() {
    this._ownerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // resolver_endpoint_id - computed: false, optional: true, required: false
  private _resolverEndpointId?: string; 
  public get resolverEndpointId() {
    return this.getStringAttribute('resolver_endpoint_id');
  }
  public set resolverEndpointId(value: string) {
    this._resolverEndpointId = value;
  }
  public resetResolverEndpointId() {
    this._resolverEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverEndpointIdInput() {
    return this._resolverEndpointId;
  }

  // resolver_rule_ids - computed: true, optional: false, required: false
  public get resolverRuleIds() {
    return this.getListAttribute('resolver_rule_ids');
  }

  // rule_type - computed: false, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // share_status - computed: false, optional: true, required: false
  private _shareStatus?: string; 
  public get shareStatus() {
    return this.getStringAttribute('share_status');
  }
  public set shareStatus(value: string) {
    this._shareStatus = value;
  }
  public resetShareStatus() {
    this._shareStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareStatusInput() {
    return this._shareStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      owner_id: cdktf.stringToTerraform(this._ownerId),
      resolver_endpoint_id: cdktf.stringToTerraform(this._resolverEndpointId),
      rule_type: cdktf.stringToTerraform(this._ruleType),
      share_status: cdktf.stringToTerraform(this._shareStatus),
    };
  }
}
