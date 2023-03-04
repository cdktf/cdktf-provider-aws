// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#id VpcEndpointService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#network_load_balancer_arns VpcEndpointService#network_load_balancer_arns}
  */
  readonly networkLoadBalancerArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#private_dns_name VpcEndpointService#private_dns_name}
  */
  readonly privateDnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#supported_ip_address_types VpcEndpointService#supported_ip_address_types}
  */
  readonly supportedIpAddressTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#tags VpcEndpointService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#tags_all VpcEndpointService#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#timeouts VpcEndpointService#timeouts}
  */
  readonly timeouts?: VpcEndpointServiceTimeouts;
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
export interface VpcEndpointServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#create VpcEndpointService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#delete VpcEndpointService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service#update VpcEndpointService#update}
  */
  readonly update?: string;
}

export function vpcEndpointServiceTimeoutsToTerraform(struct?: VpcEndpointServiceTimeoutsOutputReference | VpcEndpointServiceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class VpcEndpointServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcEndpointServiceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcEndpointServiceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
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
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptanceRequired = config.acceptanceRequired;
    this._allowedPrincipals = config.allowedPrincipals;
    this._gatewayLoadBalancerArns = config.gatewayLoadBalancerArns;
    this._id = config.id;
    this._networkLoadBalancerArns = config.networkLoadBalancerArns;
    this._privateDnsName = config.privateDnsName;
    this._supportedIpAddressTypes = config.supportedIpAddressTypes;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeouts.internalValue = config.timeouts;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // supported_ip_address_types - computed: true, optional: true, required: false
  private _supportedIpAddressTypes?: string[]; 
  public get supportedIpAddressTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_ip_address_types'));
  }
  public set supportedIpAddressTypes(value: string[]) {
    this._supportedIpAddressTypes = value;
  }
  public resetSupportedIpAddressTypes() {
    this._supportedIpAddressTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedIpAddressTypesInput() {
    return this._supportedIpAddressTypes;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcEndpointServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcEndpointServiceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acceptance_required: cdktf.booleanToTerraform(this._acceptanceRequired),
      allowed_principals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedPrincipals),
      gateway_load_balancer_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gatewayLoadBalancerArns),
      id: cdktf.stringToTerraform(this._id),
      network_load_balancer_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkLoadBalancerArns),
      private_dns_name: cdktf.stringToTerraform(this._privateDnsName),
      supported_ip_address_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedIpAddressTypes),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      timeouts: vpcEndpointServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
