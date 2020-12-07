// https://www.terraform.io/docs/providers/aws/r/data_aws_vpc_endpoint_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsVpcEndpointServiceConfig extends cdktf.TerraformMetaArguments {
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

function dataAwsVpcEndpointServiceFilterToTerraform(struct?: DataAwsVpcEndpointServiceFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


// Resource

export class DataAwsVpcEndpointService extends cdktf.TerraformDataSource {

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

  // acceptance_required - computed: true, optional: false, required: false
  public get acceptanceRequired() {
    return this.getBooleanAttribute('acceptance_required');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // base_endpoint_dns_names - computed: true, optional: false, required: false
  public get baseEndpointDnsNames() {
    return this.getListAttribute('base_endpoint_dns_names');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manages_vpc_endpoints - computed: true, optional: false, required: false
  public get managesVpcEndpoints() {
    return this.getBooleanAttribute('manages_vpc_endpoints');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // private_dns_name - computed: true, optional: false, required: false
  public get privateDnsName() {
    return this.getStringAttribute('private_dns_name');
  }

  // service - computed: false, optional: true, required: false
  private _service?: string;
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string ) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string;
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // vpc_endpoint_policy_supported - computed: true, optional: false, required: false
  public get vpcEndpointPolicySupported() {
    return this.getBooleanAttribute('vpc_endpoint_policy_supported');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsVpcEndpointServiceFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsVpcEndpointServiceFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service: cdktf.stringToTerraform(this._service),
      service_name: cdktf.stringToTerraform(this._serviceName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsVpcEndpointServiceFilterToTerraform)(this._filter),
    };
  }
}
