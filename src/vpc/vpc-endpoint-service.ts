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
export interface VpcEndpointServicePrivateDnsNameConfiguration {
}

export function vpcEndpointServicePrivateDnsNameConfigurationToTerraform(struct?: VpcEndpointServicePrivateDnsNameConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class VpcEndpointServicePrivateDnsNameConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VpcEndpointServicePrivateDnsNameConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcEndpointServicePrivateDnsNameConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class VpcEndpointServicePrivateDnsNameConfigurationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): VpcEndpointServicePrivateDnsNameConfigurationOutputReference {
    return new VpcEndpointServicePrivateDnsNameConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service aws_vpc_endpoint_service}
*/
export class VpcEndpointService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_endpoint_service";

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
        providerName: 'aws',
        providerVersion: '4.13.0',
        providerVersionConstraint: '~> 4.0'
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
  private _privateDnsNameConfiguration = new VpcEndpointServicePrivateDnsNameConfigurationList(this, "private_dns_name_configuration", false);
  public get privateDnsNameConfiguration() {
    return this._privateDnsNameConfiguration;
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
