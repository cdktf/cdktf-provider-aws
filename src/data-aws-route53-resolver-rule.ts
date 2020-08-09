// https://www.terraform.io/docs/providers/aws/r/data_aws_route53_resolver_rule.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "domain_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "owner_id": {
        "type": "string",
        "computed": true
      },
      "resolver_endpoint_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "resolver_rule_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "rule_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "share_status": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsRoute53ResolverRuleConfig extends TerraformMetaArguments {
  readonly domainName?: string;
  readonly name?: string;
  readonly resolverEndpointId?: string;
  readonly resolverRuleId?: string;
  readonly ruleType?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class DataAwsRoute53ResolverRule extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsRoute53ResolverRuleConfig = {}) {
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
    this._resolverRuleId = config.resolverRuleId;
    this._ruleType = config.ruleType;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string;
  public get domainName() {
    return this._domainName ?? this.getStringAttribute('domain_name');
  }
  public set domainName(value: string | undefined) {
    this._domainName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // resolver_endpoint_id - computed: true, optional: true, required: false
  private _resolverEndpointId?: string;
  public get resolverEndpointId() {
    return this._resolverEndpointId ?? this.getStringAttribute('resolver_endpoint_id');
  }
  public set resolverEndpointId(value: string | undefined) {
    this._resolverEndpointId = value;
  }

  // resolver_rule_id - computed: true, optional: true, required: false
  private _resolverRuleId?: string;
  public get resolverRuleId() {
    return this._resolverRuleId ?? this.getStringAttribute('resolver_rule_id');
  }
  public set resolverRuleId(value: string | undefined) {
    this._resolverRuleId = value;
  }

  // rule_type - computed: true, optional: true, required: false
  private _ruleType?: string;
  public get ruleType() {
    return this._ruleType ?? this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string | undefined) {
    this._ruleType = value;
  }

  // share_status - computed: true, optional: false, required: true
  public get shareStatus() {
    return this.getStringAttribute('share_status');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: this._domainName,
      name: this._name,
      resolver_endpoint_id: this._resolverEndpointId,
      resolver_rule_id: this._resolverRuleId,
      rule_type: this._ruleType,
      tags: this._tags,
    };
  }
}
