// https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorklinkFleetConfig extends cdktf.TerraformMetaArguments {
  readonly auditStreamArn?: string;
  readonly deviceCaCertificate?: string;
  readonly displayName?: string;
  readonly name: string;
  readonly optimizeForEndUserLocation?: boolean;
  /** identity_provider block */
  readonly identityProvider?: WorklinkFleetIdentityProvider[];
  /** network block */
  readonly network?: WorklinkFleetNetwork[];
}
export interface WorklinkFleetIdentityProvider {
  readonly samlMetadata: string;
  readonly type: string;
}

function worklinkFleetIdentityProviderToTerraform(struct?: WorklinkFleetIdentityProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    saml_metadata: cdktf.stringToTerraform(struct!.samlMetadata),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface WorklinkFleetNetwork {
  readonly securityGroupIds: string[];
  readonly subnetIds: string[];
  readonly vpcId: string;
}

function worklinkFleetNetworkToTerraform(struct?: WorklinkFleetNetwork): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


// Resource

export class WorklinkFleet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WorklinkFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_worklink_fleet',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._auditStreamArn = config.auditStreamArn;
    this._deviceCaCertificate = config.deviceCaCertificate;
    this._displayName = config.displayName;
    this._name = config.name;
    this._optimizeForEndUserLocation = config.optimizeForEndUserLocation;
    this._identityProvider = config.identityProvider;
    this._network = config.network;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // audit_stream_arn - computed: false, optional: true, required: false
  private _auditStreamArn?: string;
  public get auditStreamArn() {
    return this.getStringAttribute('audit_stream_arn');
  }
  public set auditStreamArn(value: string ) {
    this._auditStreamArn = value;
  }
  public resetAuditStreamArn() {
    this._auditStreamArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditStreamArnInput() {
    return this._auditStreamArn
  }

  // company_code - computed: true, optional: false, required: false
  public get companyCode() {
    return this.getStringAttribute('company_code');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // device_ca_certificate - computed: false, optional: true, required: false
  private _deviceCaCertificate?: string;
  public get deviceCaCertificate() {
    return this.getStringAttribute('device_ca_certificate');
  }
  public set deviceCaCertificate(value: string ) {
    this._deviceCaCertificate = value;
  }
  public resetDeviceCaCertificate() {
    this._deviceCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceCaCertificateInput() {
    return this._deviceCaCertificate
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
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

  // optimize_for_end_user_location - computed: false, optional: true, required: false
  private _optimizeForEndUserLocation?: boolean;
  public get optimizeForEndUserLocation() {
    return this.getBooleanAttribute('optimize_for_end_user_location');
  }
  public set optimizeForEndUserLocation(value: boolean ) {
    this._optimizeForEndUserLocation = value;
  }
  public resetOptimizeForEndUserLocation() {
    this._optimizeForEndUserLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizeForEndUserLocationInput() {
    return this._optimizeForEndUserLocation
  }

  // identity_provider - computed: false, optional: true, required: false
  private _identityProvider?: WorklinkFleetIdentityProvider[];
  public get identityProvider() {
    return this.interpolationForAttribute('identity_provider') as any;
  }
  public set identityProvider(value: WorklinkFleetIdentityProvider[] ) {
    this._identityProvider = value;
  }
  public resetIdentityProvider() {
    this._identityProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderInput() {
    return this._identityProvider
  }

  // network - computed: false, optional: true, required: false
  private _network?: WorklinkFleetNetwork[];
  public get network() {
    return this.interpolationForAttribute('network') as any;
  }
  public set network(value: WorklinkFleetNetwork[] ) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_stream_arn: cdktf.stringToTerraform(this._auditStreamArn),
      device_ca_certificate: cdktf.stringToTerraform(this._deviceCaCertificate),
      display_name: cdktf.stringToTerraform(this._displayName),
      name: cdktf.stringToTerraform(this._name),
      optimize_for_end_user_location: cdktf.booleanToTerraform(this._optimizeForEndUserLocation),
      identity_provider: cdktf.listMapper(worklinkFleetIdentityProviderToTerraform)(this._identityProvider),
      network: cdktf.listMapper(worklinkFleetNetworkToTerraform)(this._network),
    };
  }
}
