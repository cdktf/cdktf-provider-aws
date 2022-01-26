// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface VpcEndpointServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#acceptance_required VpcEndpointService#acceptance_required}
  */
  readonly acceptanceRequired: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#allowed_principals VpcEndpointService#allowed_principals}
  */
  readonly allowedPrincipals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#gateway_load_balancer_arns VpcEndpointService#gateway_load_balancer_arns}
  */
  readonly gatewayLoadBalancerArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#network_load_balancer_arns VpcEndpointService#network_load_balancer_arns}
  */
  readonly networkLoadBalancerArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#private_dns_name VpcEndpointService#private_dns_name}
  */
  readonly privateDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#tags VpcEndpointService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#tags_all VpcEndpointService#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}
export class VpcEndpointServicePrivateDnsNameConfiguration extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service aws_vpc_endpoint_service}
*/
export class VpcEndpointService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_vpc_endpoint_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service aws_vpc_endpoint_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcEndpointServiceConfig
  */
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
    this._gatewayLoadBalancerArns = config.gatewayLoadBalancerArns;
    this._networkLoadBalancerArns = config.networkLoadBalancerArns;
    this._privateDnsName = config.privateDnsName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acceptance_required - computed: false, optional: false, required: true
  private _acceptanceRequired?: boolean | cdktf.IResolvable; 
  public get acceptanceRequired() {
    return this.getBooleanAttribute('acceptance_required');
  }
  public set acceptanceRequired(value: boolean | cdktf.IResolvable) {
    this._acceptanceRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptanceRequiredInput() {
    return this._acceptanceRequired;
  }

  // allowed_principals - computed: true, optional: true, required: false
  private _allowedPrincipals?: string[]; 
  public get allowedPrincipals() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_principals'));
  }
  public set allowedPrincipals(value: string[]) {
    this._allowedPrincipals = value;
  }
  public resetAllowedPrincipals() {
    this._allowedPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPrincipalsInput() {
    return this._allowedPrincipals;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }

  // base_endpoint_dns_names - computed: true, optional: false, required: false
  public get baseEndpointDnsNames() {
    return cdktf.Fn.tolist(this.getListAttribute('base_endpoint_dns_names'));
  }

  // gateway_load_balancer_arns - computed: false, optional: true, required: false
  private _gatewayLoadBalancerArns?: string[]; 
  public get gatewayLoadBalancerArns() {
    return cdktf.Fn.tolist(this.getListAttribute('gateway_load_balancer_arns'));
  }
  public set gatewayLoadBalancerArns(value: string[]) {
    this._gatewayLoadBalancerArns = value;
  }
  public resetGatewayLoadBalancerArns() {
    this._gatewayLoadBalancerArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayLoadBalancerArnsInput() {
    return this._gatewayLoadBalancerArns;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manages_vpc_endpoints - computed: true, optional: false, required: false
  public get managesVpcEndpoints() {
    return this.getBooleanAttribute('manages_vpc_endpoints');
  }

  // network_load_balancer_arns - computed: false, optional: true, required: false
  private _networkLoadBalancerArns?: string[]; 
  public get networkLoadBalancerArns() {
    return cdktf.Fn.tolist(this.getListAttribute('network_load_balancer_arns'));
  }
  public set networkLoadBalancerArns(value: string[]) {
    this._networkLoadBalancerArns = value;
  }
  public resetNetworkLoadBalancerArns() {
    this._networkLoadBalancerArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkLoadBalancerArnsInput() {
    return this._networkLoadBalancerArns;
  }

  // private_dns_name - computed: true, optional: true, required: false
  private _privateDnsName?: string; 
  public get privateDnsName() {
    return this.getStringAttribute('private_dns_name');
  }
  public set privateDnsName(value: string) {
    this._privateDnsName = value;
  }
  public resetPrivateDnsName() {
    this._privateDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsNameInput() {
    return this._privateDnsName;
  }

  // private_dns_name_configuration - computed: true, optional: false, required: false
  public privateDnsNameConfiguration(index: string) {
    return new VpcEndpointServicePrivateDnsNameConfiguration(this, 'private_dns_name_configuration', index, false);
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acceptance_required: cdktf.booleanToTerraform(this._acceptanceRequired),
      allowed_principals: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedPrincipals),
      gateway_load_balancer_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._gatewayLoadBalancerArns),
      network_load_balancer_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._networkLoadBalancerArns),
      private_dns_name: cdktf.stringToTerraform(this._privateDnsName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }
}
