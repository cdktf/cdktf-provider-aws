// https://www.terraform.io/docs/providers/aws/r/emr_studio
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrStudioConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#auth_mode EmrStudio#auth_mode}
  */
  readonly authMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#default_s3_location EmrStudio#default_s3_location}
  */
  readonly defaultS3Location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#description EmrStudio#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#engine_security_group_id EmrStudio#engine_security_group_id}
  */
  readonly engineSecurityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#id EmrStudio#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#idp_auth_url EmrStudio#idp_auth_url}
  */
  readonly idpAuthUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#idp_relay_state_parameter_name EmrStudio#idp_relay_state_parameter_name}
  */
  readonly idpRelayStateParameterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#name EmrStudio#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#service_role EmrStudio#service_role}
  */
  readonly serviceRole: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#subnet_ids EmrStudio#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#tags EmrStudio#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#tags_all EmrStudio#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#user_role EmrStudio#user_role}
  */
  readonly userRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#vpc_id EmrStudio#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio#workspace_security_group_id EmrStudio#workspace_security_group_id}
  */
  readonly workspaceSecurityGroupId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_studio aws_emr_studio}
*/
export class EmrStudio extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_emr_studio";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_studio aws_emr_studio} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrStudioConfig
  */
  public constructor(scope: Construct, id: string, config: EmrStudioConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emr_studio',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._authMode = config.authMode;
    this._defaultS3Location = config.defaultS3Location;
    this._description = config.description;
    this._engineSecurityGroupId = config.engineSecurityGroupId;
    this._id = config.id;
    this._idpAuthUrl = config.idpAuthUrl;
    this._idpRelayStateParameterName = config.idpRelayStateParameterName;
    this._name = config.name;
    this._serviceRole = config.serviceRole;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._userRole = config.userRole;
    this._vpcId = config.vpcId;
    this._workspaceSecurityGroupId = config.workspaceSecurityGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auth_mode - computed: false, optional: false, required: true
  private _authMode?: string; 
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode;
  }

  // default_s3_location - computed: false, optional: false, required: true
  private _defaultS3Location?: string; 
  public get defaultS3Location() {
    return this.getStringAttribute('default_s3_location');
  }
  public set defaultS3Location(value: string) {
    this._defaultS3Location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultS3LocationInput() {
    return this._defaultS3Location;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // engine_security_group_id - computed: false, optional: false, required: true
  private _engineSecurityGroupId?: string; 
  public get engineSecurityGroupId() {
    return this.getStringAttribute('engine_security_group_id');
  }
  public set engineSecurityGroupId(value: string) {
    this._engineSecurityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineSecurityGroupIdInput() {
    return this._engineSecurityGroupId;
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

  // idp_auth_url - computed: false, optional: true, required: false
  private _idpAuthUrl?: string; 
  public get idpAuthUrl() {
    return this.getStringAttribute('idp_auth_url');
  }
  public set idpAuthUrl(value: string) {
    this._idpAuthUrl = value;
  }
  public resetIdpAuthUrl() {
    this._idpAuthUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpAuthUrlInput() {
    return this._idpAuthUrl;
  }

  // idp_relay_state_parameter_name - computed: false, optional: true, required: false
  private _idpRelayStateParameterName?: string; 
  public get idpRelayStateParameterName() {
    return this.getStringAttribute('idp_relay_state_parameter_name');
  }
  public set idpRelayStateParameterName(value: string) {
    this._idpRelayStateParameterName = value;
  }
  public resetIdpRelayStateParameterName() {
    this._idpRelayStateParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpRelayStateParameterNameInput() {
    return this._idpRelayStateParameterName;
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

  // service_role - computed: false, optional: false, required: true
  private _serviceRole?: string; 
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleInput() {
    return this._serviceRole;
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_role - computed: false, optional: true, required: false
  private _userRole?: string; 
  public get userRole() {
    return this.getStringAttribute('user_role');
  }
  public set userRole(value: string) {
    this._userRole = value;
  }
  public resetUserRole() {
    this._userRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRoleInput() {
    return this._userRole;
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

  // workspace_security_group_id - computed: false, optional: false, required: true
  private _workspaceSecurityGroupId?: string; 
  public get workspaceSecurityGroupId() {
    return this.getStringAttribute('workspace_security_group_id');
  }
  public set workspaceSecurityGroupId(value: string) {
    this._workspaceSecurityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceSecurityGroupIdInput() {
    return this._workspaceSecurityGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_mode: cdktf.stringToTerraform(this._authMode),
      default_s3_location: cdktf.stringToTerraform(this._defaultS3Location),
      description: cdktf.stringToTerraform(this._description),
      engine_security_group_id: cdktf.stringToTerraform(this._engineSecurityGroupId),
      id: cdktf.stringToTerraform(this._id),
      idp_auth_url: cdktf.stringToTerraform(this._idpAuthUrl),
      idp_relay_state_parameter_name: cdktf.stringToTerraform(this._idpRelayStateParameterName),
      name: cdktf.stringToTerraform(this._name),
      service_role: cdktf.stringToTerraform(this._serviceRole),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      user_role: cdktf.stringToTerraform(this._userRole),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      workspace_security_group_id: cdktf.stringToTerraform(this._workspaceSecurityGroupId),
    };
  }
}
