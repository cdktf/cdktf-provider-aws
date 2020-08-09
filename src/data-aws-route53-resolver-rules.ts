// https://www.terraform.io/docs/providers/aws/r/data_aws_route53_resolver_rules.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "owner_id": {
        "type": "string",
        "optional": true
      },
      "resolver_endpoint_id": {
        "type": "string",
        "optional": true
      },
      "resolver_rule_ids": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "rule_type": {
        "type": "string",
        "optional": true
      },
      "share_status": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsRoute53ResolverRulesConfig extends TerraformMetaArguments {
  readonly ownerId?: string;
  readonly resolverEndpointId?: string;
  readonly ruleType?: string;
  readonly shareStatus?: string;
}

// Resource

export class DataAwsRoute53ResolverRules extends TerraformDataSource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // owner_id - computed: false, optional: true, required: false
  private _ownerId?: string;
  public get ownerId() {
    return this._ownerId;
  }
  public set ownerId(value: string | undefined) {
    this._ownerId = value;
  }

  // resolver_endpoint_id - computed: false, optional: true, required: false
  private _resolverEndpointId?: string;
  public get resolverEndpointId() {
    return this._resolverEndpointId;
  }
  public set resolverEndpointId(value: string | undefined) {
    this._resolverEndpointId = value;
  }

  // resolver_rule_ids - computed: true, optional: false, required: true
  public get resolverRuleIds() {
    return this.getListAttribute('resolver_rule_ids');
  }

  // rule_type - computed: false, optional: true, required: false
  private _ruleType?: string;
  public get ruleType() {
    return this._ruleType;
  }
  public set ruleType(value: string | undefined) {
    this._ruleType = value;
  }

  // share_status - computed: false, optional: true, required: false
  private _shareStatus?: string;
  public get shareStatus() {
    return this._shareStatus;
  }
  public set shareStatus(value: string | undefined) {
    this._shareStatus = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      owner_id: this._ownerId,
      resolver_endpoint_id: this._resolverEndpointId,
      rule_type: this._ruleType,
      share_status: this._shareStatus,
    };
  }
}
