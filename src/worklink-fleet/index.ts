// https://www.terraform.io/docs/providers/aws/r/worklink_fleet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorklinkFleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#audit_stream_arn WorklinkFleet#audit_stream_arn}
  */
  readonly auditStreamArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#device_ca_certificate WorklinkFleet#device_ca_certificate}
  */
  readonly deviceCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#display_name WorklinkFleet#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#id WorklinkFleet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#name WorklinkFleet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}
  */
  readonly optimizeForEndUserLocation?: boolean | cdktf.IResolvable;
  /**
  * identity_provider block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#identity_provider WorklinkFleet#identity_provider}
  */
  readonly identityProvider?: WorklinkFleetIdentityProvider;
  /**
  * network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#network WorklinkFleet#network}
  */
  readonly network?: WorklinkFleetNetwork;
}
export interface WorklinkFleetIdentityProvider {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#saml_metadata WorklinkFleet#saml_metadata}
  */
  readonly samlMetadata: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#type WorklinkFleet#type}
  */
  readonly type: string;
}

export function worklinkFleetIdentityProviderToTerraform(struct?: WorklinkFleetIdentityProviderOutputReference | WorklinkFleetIdentityProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    saml_metadata: cdktf.stringToTerraform(struct!.samlMetadata),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class WorklinkFleetIdentityProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorklinkFleetIdentityProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samlMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlMetadata = this._samlMetadata;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorklinkFleetIdentityProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._samlMetadata = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._samlMetadata = value.samlMetadata;
      this._type = value.type;
    }
  }

  // saml_metadata - computed: false, optional: false, required: true
  private _samlMetadata?: string; 
  public get samlMetadata() {
    return this.getStringAttribute('saml_metadata');
  }
  public set samlMetadata(value: string) {
    this._samlMetadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlMetadataInput() {
    return this._samlMetadata;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface WorklinkFleetNetwork {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#security_group_ids WorklinkFleet#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#subnet_ids WorklinkFleet#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet#vpc_id WorklinkFleet#vpc_id}
  */
  readonly vpcId: string;
}

export function worklinkFleetNetworkToTerraform(struct?: WorklinkFleetNetworkOutputReference | WorklinkFleetNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}

export class WorklinkFleetNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorklinkFleetNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorklinkFleetNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._vpcId = value.vpcId;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet aws_worklink_fleet}
*/
export class WorklinkFleet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_worklink_fleet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet aws_worklink_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorklinkFleetConfig
  */
  public constructor(scope: Construct, id: string, config: WorklinkFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_worklink_fleet',
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
    this._auditStreamArn = config.auditStreamArn;
    this._deviceCaCertificate = config.deviceCaCertificate;
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._optimizeForEndUserLocation = config.optimizeForEndUserLocation;
    this._identityProvider.internalValue = config.identityProvider;
    this._network.internalValue = config.network;
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
  public set auditStreamArn(value: string) {
    this._auditStreamArn = value;
  }
  public resetAuditStreamArn() {
    this._auditStreamArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditStreamArnInput() {
    return this._auditStreamArn;
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
  public set deviceCaCertificate(value: string) {
    this._deviceCaCertificate = value;
  }
  public resetDeviceCaCertificate() {
    this._deviceCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceCaCertificateInput() {
    return this._deviceCaCertificate;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // optimize_for_end_user_location - computed: false, optional: true, required: false
  private _optimizeForEndUserLocation?: boolean | cdktf.IResolvable; 
  public get optimizeForEndUserLocation() {
    return this.getBooleanAttribute('optimize_for_end_user_location');
  }
  public set optimizeForEndUserLocation(value: boolean | cdktf.IResolvable) {
    this._optimizeForEndUserLocation = value;
  }
  public resetOptimizeForEndUserLocation() {
    this._optimizeForEndUserLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizeForEndUserLocationInput() {
    return this._optimizeForEndUserLocation;
  }

  // identity_provider - computed: false, optional: true, required: false
  private _identityProvider = new WorklinkFleetIdentityProviderOutputReference(this, "identity_provider");
  public get identityProvider() {
    return this._identityProvider;
  }
  public putIdentityProvider(value: WorklinkFleetIdentityProvider) {
    this._identityProvider.internalValue = value;
  }
  public resetIdentityProvider() {
    this._identityProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderInput() {
    return this._identityProvider.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new WorklinkFleetNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: WorklinkFleetNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_stream_arn: cdktf.stringToTerraform(this._auditStreamArn),
      device_ca_certificate: cdktf.stringToTerraform(this._deviceCaCertificate),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      optimize_for_end_user_location: cdktf.booleanToTerraform(this._optimizeForEndUserLocation),
      identity_provider: worklinkFleetIdentityProviderToTerraform(this._identityProvider.internalValue),
      network: worklinkFleetNetworkToTerraform(this._network.internalValue),
    };
  }
}
