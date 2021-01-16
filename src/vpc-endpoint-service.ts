// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface VpcEndpointServiceConfig extends TerraformMetaArguments {
  readonly acceptanceRequired: boolean;
  readonly allowedPrincipals?: string[];
  readonly gatewayLoadBalancerArns?: string[];
  readonly networkLoadBalancerArns?: string[];
  readonly privateDnsName?: string;
  readonly tags?: { [key: string]: string };
}
export class VpcEndpointServicePrivateDnsNameConfiguration extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
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
    this._gatewayLoadBalancerArns = config.gatewayLoadBalancerArns;
    this._networkLoadBalancerArns = config.networkLoadBalancerArns;
    this._privateDnsName = config.privateDnsName;
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

  // gateway_load_balancer_arns - computed: false, optional: true, required: false
  private _gatewayLoadBalancerArns?: string[];
  public get gatewayLoadBalancerArns() {
    return this._gatewayLoadBalancerArns;
  }
  public set gatewayLoadBalancerArns(value: string[] | undefined) {
    this._gatewayLoadBalancerArns = value;
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

  // network_load_balancer_arns - computed: false, optional: true, required: false
  private _networkLoadBalancerArns?: string[];
  public get networkLoadBalancerArns() {
    return this._networkLoadBalancerArns;
  }
  public set networkLoadBalancerArns(value: string[] | undefined) {
    this._networkLoadBalancerArns = value;
  }

  // private_dns_name - computed: true, optional: true, required: false
  private _privateDnsName?: string;
  public get privateDnsName() {
    return this._privateDnsName ?? this.getStringAttribute('private_dns_name');
  }
  public set privateDnsName(value: string | undefined) {
    this._privateDnsName = value;
  }

  // private_dns_name_configuration - computed: true, optional: false, required: true
  public privateDnsNameConfiguration(index: string) {
    return new VpcEndpointServicePrivateDnsNameConfiguration(this, 'private_dns_name_configuration', index);
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

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acceptance_required: this._acceptanceRequired,
      allowed_principals: this._allowedPrincipals,
      gateway_load_balancer_arns: this._gatewayLoadBalancerArns,
      network_load_balancer_arns: this._networkLoadBalancerArns,
      private_dns_name: this._privateDnsName,
      tags: this._tags,
    };
  }
}
