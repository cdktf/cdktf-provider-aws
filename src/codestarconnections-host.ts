// https://www.terraform.io/docs/providers/aws/r/codestarconnections_host.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodestarconnectionsHostConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly providerEndpoint: string;
  readonly providerType: string;
  /** vpc_configuration block */
  readonly vpcConfiguration?: CodestarconnectionsHostVpcConfiguration[];
}
export interface CodestarconnectionsHostVpcConfiguration {
  readonly securityGroupIds: string[];
  readonly subnetIds: string[];
  readonly tlsCertificate?: string;
  readonly vpcId: string;
}

function codestarconnectionsHostVpcConfigurationToTerraform(struct?: CodestarconnectionsHostVpcConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    tls_certificate: cdktf.stringToTerraform(struct!.tlsCertificate),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


// Resource

export class CodestarconnectionsHost extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodestarconnectionsHostConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codestarconnections_host',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._providerEndpoint = config.providerEndpoint;
    this._providerType = config.providerType;
    this._vpcConfiguration = config.vpcConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // provider_endpoint - computed: false, optional: false, required: true
  private _providerEndpoint: string;
  public get providerEndpoint() {
    return this.getStringAttribute('provider_endpoint');
  }
  public set providerEndpoint(value: string) {
    this._providerEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerEndpointInput() {
    return this._providerEndpoint
  }

  // provider_type - computed: false, optional: false, required: true
  private _providerType: string;
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_configuration - computed: false, optional: true, required: false
  private _vpcConfiguration?: CodestarconnectionsHostVpcConfiguration[];
  public get vpcConfiguration() {
    return this.interpolationForAttribute('vpc_configuration') as any;
  }
  public set vpcConfiguration(value: CodestarconnectionsHostVpcConfiguration[] ) {
    this._vpcConfiguration = value;
  }
  public resetVpcConfiguration() {
    this._vpcConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      provider_endpoint: cdktf.stringToTerraform(this._providerEndpoint),
      provider_type: cdktf.stringToTerraform(this._providerType),
      vpc_configuration: cdktf.listMapper(codestarconnectionsHostVpcConfigurationToTerraform)(this._vpcConfiguration),
    };
  }
}
