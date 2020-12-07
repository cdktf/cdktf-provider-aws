// https://www.terraform.io/docs/providers/aws/r/data_aws_route53_resolver_rules.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRoute53ResolverRulesConfig extends cdktf.TerraformMetaArguments {
  readonly ownerId?: string;
  readonly resolverEndpointId?: string;
  readonly ruleType?: string;
  readonly shareStatus?: string;
}

// Resource

export class DataAwsRoute53ResolverRules extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
  public set ownerId(value: string ) {
    this._ownerId = value;
  }
  public resetOwnerId() {
    this._ownerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId
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

  // resolver_rule_ids - computed: true, optional: false, required: false
  public get resolverRuleIds() {
    return this.getListAttribute('resolver_rule_ids');
  }

  // rule_type - computed: false, optional: true, required: false
  private _ruleType?: string;
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string ) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType
  }

  // share_status - computed: false, optional: true, required: false
  private _shareStatus?: string;
  public get shareStatus() {
    return this.getStringAttribute('share_status');
  }
  public set shareStatus(value: string ) {
    this._shareStatus = value;
  }
  public resetShareStatus() {
    this._shareStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareStatusInput() {
    return this._shareStatus
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
