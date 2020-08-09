// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "acceptance_required": {
        "type": "bool",
        "required": true
      },
      "allowed_principals": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "availability_zones": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "base_endpoint_dns_names": {
        "type": [
          "set",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "manages_vpc_endpoints": {
        "type": "bool",
        "computed": true
      },
      "network_load_balancer_arns": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "private_dns_name": {
        "type": "string",
        "computed": true
      },
      "service_name": {
        "type": "string",
        "computed": true
      },
      "service_type": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VpcEndpointServiceConfig extends TerraformMetaArguments {
  readonly acceptanceRequired: boolean;
  readonly allowedPrincipals?: string[];
  readonly networkLoadBalancerArns: string[];
  readonly tags?: { [key: string]: string };
}

// Resource

export class VpcEndpointService extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpcEndpointServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_endpoint_service',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acceptanceRequired = config.acceptanceRequired;
    this._allowedPrincipals = config.allowedPrincipals;
    this._networkLoadBalancerArns = config.networkLoadBalancerArns;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acceptance_required - computed: false, optional: false, required: true
  private _acceptanceRequired: boolean;
  public get acceptanceRequired() {
    return this._acceptanceRequired;
  }
  public set acceptanceRequired(value: boolean) {
    this._acceptanceRequired = value;
  }

  // allowed_principals - computed: true, optional: true, required: false
  private _allowedPrincipals?: string[];
  public get allowedPrincipals() {
    return this._allowedPrincipals ?? this.getListAttribute('allowed_principals');
  }
  public set allowedPrincipals(value: string[] | undefined) {
    this._allowedPrincipals = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: false, required: true
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // base_endpoint_dns_names - computed: true, optional: false, required: true
  public get baseEndpointDnsNames() {
    return this.getListAttribute('base_endpoint_dns_names');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // manages_vpc_endpoints - computed: true, optional: false, required: true
  public get managesVpcEndpoints() {
    return this.getBooleanAttribute('manages_vpc_endpoints');
  }

  // network_load_balancer_arns - computed: false, optional: false, required: true
  private _networkLoadBalancerArns: string[];
  public get networkLoadBalancerArns() {
    return this._networkLoadBalancerArns;
  }
  public set networkLoadBalancerArns(value: string[]) {
    this._networkLoadBalancerArns = value;
  }

  // private_dns_name - computed: true, optional: false, required: true
  public get privateDnsName() {
    return this.getStringAttribute('private_dns_name');
  }

  // service_name - computed: true, optional: false, required: true
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_type - computed: true, optional: false, required: true
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      acceptance_required: this._acceptanceRequired,
      allowed_principals: this._allowedPrincipals,
      network_load_balancer_arns: this._networkLoadBalancerArns,
      tags: this._tags,
    };
  }
}
