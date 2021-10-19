// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WorkLink
*/
export namespace WorkLink {
  export interface WorklinkFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#audit_stream_arn WorklinkFleet#audit_stream_arn}
    */
    readonly auditStreamArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#device_ca_certificate WorklinkFleet#device_ca_certificate}
    */
    readonly deviceCaCertificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#display_name WorklinkFleet#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#name WorklinkFleet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}
    */
    readonly optimizeForEndUserLocation?: boolean | cdktf.IResolvable;
    /**
    * identity_provider block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#identity_provider WorklinkFleet#identity_provider}
    */
    readonly identityProvider?: WorklinkFleetIdentityProvider;
    /**
    * network block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#network WorklinkFleet#network}
    */
    readonly network?: WorklinkFleetNetwork;
  }
  export interface WorklinkFleetIdentityProvider {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#saml_metadata WorklinkFleet#saml_metadata}
    */
    readonly samlMetadata: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#type WorklinkFleet#type}
    */
    readonly type: string;
  }

  function worklinkFleetIdentityProviderToTerraform(struct?: WorklinkFleetIdentityProviderOutputReference | WorklinkFleetIdentityProvider): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      saml_metadata: cdktf.stringToTerraform(struct!.samlMetadata),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class WorklinkFleetIdentityProviderOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._samlMetadata
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
      return this._type
    }
  }
  export interface WorklinkFleetNetwork {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#security_group_ids WorklinkFleet#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#subnet_ids WorklinkFleet#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#vpc_id WorklinkFleet#vpc_id}
    */
    readonly vpcId: string;
  }

  function worklinkFleetNetworkToTerraform(struct?: WorklinkFleetNetworkOutputReference | WorklinkFleetNetwork): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
      vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    }
  }

  export class WorklinkFleetNetworkOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // security_group_ids - computed: false, optional: false, required: true
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
      this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds?: string[]; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
      this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
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
      return this._vpcId
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html aws_worklink_fleet}
  */
  export class WorklinkFleet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_worklink_fleet";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html aws_worklink_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorklinkFleetConfig
    */
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
    private _auditStreamArn?: string | undefined; 
    public get auditStreamArn() {
      return this.getStringAttribute('audit_stream_arn');
    }
    public set auditStreamArn(value: string | undefined) {
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
    private _deviceCaCertificate?: string | undefined; 
    public get deviceCaCertificate() {
      return this.getStringAttribute('device_ca_certificate');
    }
    public set deviceCaCertificate(value: string | undefined) {
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
    private _displayName?: string | undefined; 
    public get displayName() {
      return this.getStringAttribute('display_name');
    }
    public set displayName(value: string | undefined) {
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
    private _name?: string; 
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
    private _optimizeForEndUserLocation?: boolean | cdktf.IResolvable | undefined; 
    public get optimizeForEndUserLocation() {
      return this.getBooleanAttribute('optimize_for_end_user_location') as any;
    }
    public set optimizeForEndUserLocation(value: boolean | cdktf.IResolvable | undefined) {
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
    private _identityProvider?: WorklinkFleetIdentityProvider | undefined; 
    private __identityProviderOutput = new WorklinkFleetIdentityProviderOutputReference(this as any, "identity_provider", true);
    public get identityProvider() {
      return this.__identityProviderOutput;
    }
    public putIdentityProvider(value: WorklinkFleetIdentityProvider | undefined) {
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
    private _network?: WorklinkFleetNetwork | undefined; 
    private __networkOutput = new WorklinkFleetNetworkOutputReference(this as any, "network", true);
    public get network() {
      return this.__networkOutput;
    }
    public putNetwork(value: WorklinkFleetNetwork | undefined) {
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
        identity_provider: worklinkFleetIdentityProviderToTerraform(this._identityProvider),
        network: worklinkFleetNetworkToTerraform(this._network),
      };
    }
  }
  export interface WorklinkWebsiteCertificateAuthorityAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association.html#certificate WorklinkWebsiteCertificateAuthorityAssociation#certificate}
    */
    readonly certificate: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association.html#display_name WorklinkWebsiteCertificateAuthorityAssociation#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association.html#fleet_arn WorklinkWebsiteCertificateAuthorityAssociation#fleet_arn}
    */
    readonly fleetArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association.html aws_worklink_website_certificate_authority_association}
  */
  export class WorklinkWebsiteCertificateAuthorityAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_worklink_website_certificate_authority_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association.html aws_worklink_website_certificate_authority_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorklinkWebsiteCertificateAuthorityAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: WorklinkWebsiteCertificateAuthorityAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_worklink_website_certificate_authority_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._certificate = config.certificate;
      this._displayName = config.displayName;
      this._fleetArn = config.fleetArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // certificate - computed: false, optional: false, required: true
    private _certificate?: string; 
    public get certificate() {
      return this.getStringAttribute('certificate');
    }
    public set certificate(value: string) {
      this._certificate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateInput() {
      return this._certificate
    }

    // display_name - computed: false, optional: true, required: false
    private _displayName?: string | undefined; 
    public get displayName() {
      return this.getStringAttribute('display_name');
    }
    public set displayName(value: string | undefined) {
      this._displayName = value;
    }
    public resetDisplayName() {
      this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
      return this._displayName
    }

    // fleet_arn - computed: false, optional: false, required: true
    private _fleetArn?: string; 
    public get fleetArn() {
      return this.getStringAttribute('fleet_arn');
    }
    public set fleetArn(value: string) {
      this._fleetArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fleetArnInput() {
      return this._fleetArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // website_ca_id - computed: true, optional: false, required: false
    public get websiteCaId() {
      return this.getStringAttribute('website_ca_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        certificate: cdktf.stringToTerraform(this._certificate),
        display_name: cdktf.stringToTerraform(this._displayName),
        fleet_arn: cdktf.stringToTerraform(this._fleetArn),
      };
    }
  }
}
