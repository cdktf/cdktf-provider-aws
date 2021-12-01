// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface DataAwsVpcEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#service_name DataAwsVpcEndpoint#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#state DataAwsVpcEndpoint#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#tags DataAwsVpcEndpoint#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#vpc_id DataAwsVpcEndpoint#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#filter DataAwsVpcEndpoint#filter}
  */
  readonly filter?: DataAwsVpcEndpointFilter[];
}
export class DataAwsVpcEndpointDnsEntry extends cdktf.ComplexComputedList {

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
}
export interface DataAwsVpcEndpointFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#name DataAwsVpcEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#values DataAwsVpcEndpoint#values}
  */
  readonly values: string[];
}

export function dataAwsVpcEndpointFilterToTerraform(struct?: DataAwsVpcEndpointFilter): any {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html aws_vpc_endpoint}
*/
export class DataAwsVpcEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_vpc_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html aws_vpc_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsVpcEndpointConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsVpcEndpointConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._serviceName = config.serviceName;
    this._state = config.state;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cidr_blocks - computed: true, optional: false, required: false
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }

  // dns_entry - computed: true, optional: false, required: false
  public dnsEntry(index: string) {
    return new DataAwsVpcEndpointDnsEntry(this, 'dns_entry', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_interface_ids - computed: true, optional: false, required: false
  public get networkInterfaceIds() {
    return this.getListAttribute('network_interface_ids');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // prefix_list_id - computed: true, optional: false, required: false
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }

  // private_dns_enabled - computed: true, optional: false, required: false
  public get privateDnsEnabled() {
    return this.getBooleanAttribute('private_dns_enabled') as any;
  }

  // requester_managed - computed: true, optional: false, required: false
  public get requesterManaged() {
    return this.getBooleanAttribute('requester_managed') as any;
  }

  // route_table_ids - computed: true, optional: false, required: false
  public get routeTableIds() {
    return this.getListAttribute('route_table_ids');
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
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

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
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

  // vpc_endpoint_type - computed: true, optional: false, required: false
  public get vpcEndpointType() {
    return this.getStringAttribute('vpc_endpoint_type');
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsVpcEndpointFilter[]; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsVpcEndpointFilter[]) {
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
      service_name: cdktf.stringToTerraform(this._serviceName),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      filter: cdktf.listMapper(dataAwsVpcEndpointFilterToTerraform)(this._filter),
    };
  }
}
