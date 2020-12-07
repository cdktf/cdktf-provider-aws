// https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcEndpointServiceConfig extends cdktf.TerraformMetaArguments {
  readonly acceptanceRequired: boolean;
  readonly allowedPrincipals?: string[];
  readonly networkLoadBalancerArns: string[];
  readonly tags?: { [key: string]: string };
}

// Resource

export class VpcEndpointService extends cdktf.TerraformResource {

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
    return this.getBooleanAttribute('acceptance_required');
  }
  public set acceptanceRequired(value: boolean) {
    this._acceptanceRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptanceRequiredInput() {
    return this._acceptanceRequired
  }

  // allowed_principals - computed: true, optional: true, required: false
  private _allowedPrincipals?: string[];
  public get allowedPrincipals() {
    return this.getListAttribute('allowed_principals');
  }
  public set allowedPrincipals(value: string[]) {
    this._allowedPrincipals = value;
  }
  public resetAllowedPrincipals() {
    this._allowedPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPrincipalsInput() {
    return this._allowedPrincipals
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

  // network_load_balancer_arns - computed: false, optional: false, required: true
  private _networkLoadBalancerArns: string[];
  public get networkLoadBalancerArns() {
    return this.getListAttribute('network_load_balancer_arns');
  }
  public set networkLoadBalancerArns(value: string[]) {
    this._networkLoadBalancerArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkLoadBalancerArnsInput() {
    return this._networkLoadBalancerArns
  }

  // private_dns_name - computed: true, optional: false, required: false
  public get privateDnsName() {
    return this.getStringAttribute('private_dns_name');
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
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acceptance_required: cdktf.booleanToTerraform(this._acceptanceRequired),
      allowed_principals: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedPrincipals),
      network_load_balancer_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._networkLoadBalancerArns),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
