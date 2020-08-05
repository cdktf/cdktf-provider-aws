// https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html
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
      "load_balancer_name": {
        "type": "string",
        "required": true
      },
      "policy_name": {
        "type": "string",
        "required": true
      },
      "policy_type_name": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "policy_attribute": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "optional": true
            },
            "value": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LoadBalancerPolicyConfig extends TerraformMetaArguments {
  readonly loadBalancerName: string;
  readonly policyName: string;
  readonly policyTypeName: string;
  /** policy_attribute block */
  readonly policyAttribute?: LoadBalancerPolicyPolicyAttribute[];
}
export interface LoadBalancerPolicyPolicyAttribute {
  readonly name?: string;
  readonly value?: string;
}

// Resource

export class LoadBalancerPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoadBalancerPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_load_balancer_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._loadBalancerName = config.loadBalancerName;
    this._policyName = config.policyName;
    this._policyTypeName = config.policyTypeName;
    this._policyAttribute = config.policyAttribute;
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

  // load_balancer_name - computed: false, optional: false, required: true
  private _loadBalancerName: string;
  public get loadBalancerName() {
    return this._loadBalancerName;
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName: string;
  public get policyName() {
    return this._policyName;
  }
  public set policyName(value: string) {
    this._policyName = value;
  }

  // policy_type_name - computed: false, optional: false, required: true
  private _policyTypeName: string;
  public get policyTypeName() {
    return this._policyTypeName;
  }
  public set policyTypeName(value: string) {
    this._policyTypeName = value;
  }

  // policy_attribute - computed: false, optional: true, required: false
  private _policyAttribute?: LoadBalancerPolicyPolicyAttribute[];
  public get policyAttribute() {
    return this._policyAttribute;
  }
  public set policyAttribute(value: LoadBalancerPolicyPolicyAttribute[] | undefined) {
    this._policyAttribute = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      load_balancer_name: this._loadBalancerName,
      policy_name: this._policyName,
      policy_type_name: this._policyTypeName,
      policy_attribute: this._policyAttribute,
    };
  }
}
