// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface DataAwsVpcEndpointServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#service DataAwsVpcEndpointService#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#service_name DataAwsVpcEndpointService#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#service_type DataAwsVpcEndpointService#service_type}
  */
  readonly serviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#tags DataAwsVpcEndpointService#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#filter DataAwsVpcEndpointService#filter}
  */
  readonly filter?: DataAwsVpcEndpointServiceFilter[];
}
export interface DataAwsVpcEndpointServiceFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#name DataAwsVpcEndpointService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#values DataAwsVpcEndpointService#values}
  */
  readonly values: string[];
}

export function dataAwsVpcEndpointServiceFilterToTerraform(struct?: DataAwsVpcEndpointServiceFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html aws_vpc_endpoint_service}
*/
export class DataAwsVpcEndpointService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_vpc_endpoint_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html aws_vpc_endpoint_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsVpcEndpointServiceConfig = {}
  */
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
    this._serviceType = config.serviceType;
    this._tags = config.tags;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acceptance_required - computed: true, optional: false, required: false
  public get acceptanceRequired() {
    return this.getBooleanAttribute('acceptance_required') as any;
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
    return this.getBooleanAttribute('manages_vpc_endpoints') as any;
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
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
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
    return this._serviceName;
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_endpoint_policy_supported - computed: true, optional: false, required: false
  public get vpcEndpointPolicySupported() {
    return this.getBooleanAttribute('vpc_endpoint_policy_supported') as any;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsVpcEndpointServiceFilter[]; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsVpcEndpointServiceFilter[]) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service: cdktf.stringToTerraform(this._service),
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_type: cdktf.stringToTerraform(this._serviceType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      filter: cdktf.listMapper(dataAwsVpcEndpointServiceFilterToTerraform)(this._filter),
    };
  }
}
