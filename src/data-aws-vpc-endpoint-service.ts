// https://www.terraform.io/docs/providers/aws/r/data_aws_vpc_endpoint_service.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "acceptance_required": {
        "type": "bool",
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
      "owner": {
        "type": "string",
        "computed": true
      },
      "private_dns_name": {
        "type": "string",
        "computed": true
      },
      "service": {
        "type": "string",
        "optional": true
      },
      "service_id": {
        "type": "string",
        "computed": true
      },
      "service_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "service_type": {
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
      },
      "vpc_endpoint_policy_supported": {
        "type": "bool",
        "computed": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsVpcEndpointServiceConfig extends TerraformMetaArguments {
  readonly service?: string;
  readonly serviceName?: string;
  readonly tags?: { [key: string]: string };
  /** filter block */
  readonly filter?: DataAwsVpcEndpointServiceFilter[];
}
export interface DataAwsVpcEndpointServiceFilter {
  readonly name: string;
  readonly values: string[];
}

// Resource

export class DataAwsVpcEndpointService extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsVpcEndpointServiceConfig = {}) {
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
    this._service = config.service;
    this._serviceName = config.serviceName;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acceptance_required - computed: true, optional: false, required: true
  public get acceptanceRequired() {
    return this.getBooleanAttribute('acceptance_required');
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

  // owner - computed: true, optional: false, required: true
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // private_dns_name - computed: true, optional: false, required: true
  public get privateDnsName() {
    return this.getStringAttribute('private_dns_name');
  }

  // service - computed: false, optional: true, required: false
  private _service?: string;
  public get service() {
    return this._service;
  }
  public set service(value: string | undefined) {
    this._service = value;
  }

  // service_id - computed: true, optional: false, required: true
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string;
  public get serviceName() {
    return this._serviceName ?? this.getStringAttribute('service_name');
  }
  public set serviceName(value: string | undefined) {
    this._serviceName = value;
  }

  // service_type - computed: true, optional: false, required: true
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // vpc_endpoint_policy_supported - computed: true, optional: false, required: true
  public get vpcEndpointPolicySupported() {
    return this.getBooleanAttribute('vpc_endpoint_policy_supported');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsVpcEndpointServiceFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsVpcEndpointServiceFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      service: this._service,
      service_name: this._serviceName,
      tags: this._tags,
      filter: this._filter,
    };
  }
}
