// https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrafanaWorkspaceSamlConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#admin_role_values GrafanaWorkspaceSamlConfiguration#admin_role_values}
  */
  readonly adminRoleValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#allowed_organizations GrafanaWorkspaceSamlConfiguration#allowed_organizations}
  */
  readonly allowedOrganizations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#editor_role_values GrafanaWorkspaceSamlConfiguration#editor_role_values}
  */
  readonly editorRoleValues: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#email_assertion GrafanaWorkspaceSamlConfiguration#email_assertion}
  */
  readonly emailAssertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#groups_assertion GrafanaWorkspaceSamlConfiguration#groups_assertion}
  */
  readonly groupsAssertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#id GrafanaWorkspaceSamlConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_url GrafanaWorkspaceSamlConfiguration#idp_metadata_url}
  */
  readonly idpMetadataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_xml GrafanaWorkspaceSamlConfiguration#idp_metadata_xml}
  */
  readonly idpMetadataXml?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_assertion GrafanaWorkspaceSamlConfiguration#login_assertion}
  */
  readonly loginAssertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_validity_duration GrafanaWorkspaceSamlConfiguration#login_validity_duration}
  */
  readonly loginValidityDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#name_assertion GrafanaWorkspaceSamlConfiguration#name_assertion}
  */
  readonly nameAssertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#org_assertion GrafanaWorkspaceSamlConfiguration#org_assertion}
  */
  readonly orgAssertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#role_assertion GrafanaWorkspaceSamlConfiguration#role_assertion}
  */
  readonly roleAssertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#workspace_id GrafanaWorkspaceSamlConfiguration#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#timeouts GrafanaWorkspaceSamlConfiguration#timeouts}
  */
  readonly timeouts?: GrafanaWorkspaceSamlConfigurationTimeouts;
}
export interface GrafanaWorkspaceSamlConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#create GrafanaWorkspaceSamlConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#delete GrafanaWorkspaceSamlConfiguration#delete}
  */
  readonly delete?: string;
}

export function grafanaWorkspaceSamlConfigurationTimeoutsToTerraform(struct?: GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference | GrafanaWorkspaceSamlConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrafanaWorkspaceSamlConfigurationTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaWorkspaceSamlConfigurationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration aws_grafana_workspace_saml_configuration}
*/
export class GrafanaWorkspaceSamlConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_grafana_workspace_saml_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration aws_grafana_workspace_saml_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrafanaWorkspaceSamlConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: GrafanaWorkspaceSamlConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_grafana_workspace_saml_configuration',
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
    this._adminRoleValues = config.adminRoleValues;
    this._allowedOrganizations = config.allowedOrganizations;
    this._editorRoleValues = config.editorRoleValues;
    this._emailAssertion = config.emailAssertion;
    this._groupsAssertion = config.groupsAssertion;
    this._id = config.id;
    this._idpMetadataUrl = config.idpMetadataUrl;
    this._idpMetadataXml = config.idpMetadataXml;
    this._loginAssertion = config.loginAssertion;
    this._loginValidityDuration = config.loginValidityDuration;
    this._nameAssertion = config.nameAssertion;
    this._orgAssertion = config.orgAssertion;
    this._roleAssertion = config.roleAssertion;
    this._workspaceId = config.workspaceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_role_values - computed: false, optional: true, required: false
  private _adminRoleValues?: string[]; 
  public get adminRoleValues() {
    return this.getListAttribute('admin_role_values');
  }
  public set adminRoleValues(value: string[]) {
    this._adminRoleValues = value;
  }
  public resetAdminRoleValues() {
    this._adminRoleValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminRoleValuesInput() {
    return this._adminRoleValues;
  }

  // allowed_organizations - computed: false, optional: true, required: false
  private _allowedOrganizations?: string[]; 
  public get allowedOrganizations() {
    return this.getListAttribute('allowed_organizations');
  }
  public set allowedOrganizations(value: string[]) {
    this._allowedOrganizations = value;
  }
  public resetAllowedOrganizations() {
    this._allowedOrganizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOrganizationsInput() {
    return this._allowedOrganizations;
  }

  // editor_role_values - computed: false, optional: false, required: true
  private _editorRoleValues?: string[]; 
  public get editorRoleValues() {
    return this.getListAttribute('editor_role_values');
  }
  public set editorRoleValues(value: string[]) {
    this._editorRoleValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get editorRoleValuesInput() {
    return this._editorRoleValues;
  }

  // email_assertion - computed: true, optional: true, required: false
  private _emailAssertion?: string; 
  public get emailAssertion() {
    return this.getStringAttribute('email_assertion');
  }
  public set emailAssertion(value: string) {
    this._emailAssertion = value;
  }
  public resetEmailAssertion() {
    this._emailAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAssertionInput() {
    return this._emailAssertion;
  }

  // groups_assertion - computed: false, optional: true, required: false
  private _groupsAssertion?: string; 
  public get groupsAssertion() {
    return this.getStringAttribute('groups_assertion');
  }
  public set groupsAssertion(value: string) {
    this._groupsAssertion = value;
  }
  public resetGroupsAssertion() {
    this._groupsAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsAssertionInput() {
    return this._groupsAssertion;
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

  // idp_metadata_url - computed: false, optional: true, required: false
  private _idpMetadataUrl?: string; 
  public get idpMetadataUrl() {
    return this.getStringAttribute('idp_metadata_url');
  }
  public set idpMetadataUrl(value: string) {
    this._idpMetadataUrl = value;
  }
  public resetIdpMetadataUrl() {
    this._idpMetadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataUrlInput() {
    return this._idpMetadataUrl;
  }

  // idp_metadata_xml - computed: false, optional: true, required: false
  private _idpMetadataXml?: string; 
  public get idpMetadataXml() {
    return this.getStringAttribute('idp_metadata_xml');
  }
  public set idpMetadataXml(value: string) {
    this._idpMetadataXml = value;
  }
  public resetIdpMetadataXml() {
    this._idpMetadataXml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataXmlInput() {
    return this._idpMetadataXml;
  }

  // login_assertion - computed: true, optional: true, required: false
  private _loginAssertion?: string; 
  public get loginAssertion() {
    return this.getStringAttribute('login_assertion');
  }
  public set loginAssertion(value: string) {
    this._loginAssertion = value;
  }
  public resetLoginAssertion() {
    this._loginAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAssertionInput() {
    return this._loginAssertion;
  }

  // login_validity_duration - computed: true, optional: true, required: false
  private _loginValidityDuration?: number; 
  public get loginValidityDuration() {
    return this.getNumberAttribute('login_validity_duration');
  }
  public set loginValidityDuration(value: number) {
    this._loginValidityDuration = value;
  }
  public resetLoginValidityDuration() {
    this._loginValidityDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginValidityDurationInput() {
    return this._loginValidityDuration;
  }

  // name_assertion - computed: true, optional: true, required: false
  private _nameAssertion?: string; 
  public get nameAssertion() {
    return this.getStringAttribute('name_assertion');
  }
  public set nameAssertion(value: string) {
    this._nameAssertion = value;
  }
  public resetNameAssertion() {
    this._nameAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAssertionInput() {
    return this._nameAssertion;
  }

  // org_assertion - computed: false, optional: true, required: false
  private _orgAssertion?: string; 
  public get orgAssertion() {
    return this.getStringAttribute('org_assertion');
  }
  public set orgAssertion(value: string) {
    this._orgAssertion = value;
  }
  public resetOrgAssertion() {
    this._orgAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgAssertionInput() {
    return this._orgAssertion;
  }

  // role_assertion - computed: false, optional: true, required: false
  private _roleAssertion?: string; 
  public get roleAssertion() {
    return this.getStringAttribute('role_assertion');
  }
  public set roleAssertion(value: string) {
    this._roleAssertion = value;
  }
  public resetRoleAssertion() {
    this._roleAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleAssertionInput() {
    return this._roleAssertion;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GrafanaWorkspaceSamlConfigurationTimeouts) {
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
      admin_role_values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._adminRoleValues),
      allowed_organizations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOrganizations),
      editor_role_values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._editorRoleValues),
      email_assertion: cdktf.stringToTerraform(this._emailAssertion),
      groups_assertion: cdktf.stringToTerraform(this._groupsAssertion),
      id: cdktf.stringToTerraform(this._id),
      idp_metadata_url: cdktf.stringToTerraform(this._idpMetadataUrl),
      idp_metadata_xml: cdktf.stringToTerraform(this._idpMetadataXml),
      login_assertion: cdktf.stringToTerraform(this._loginAssertion),
      login_validity_duration: cdktf.numberToTerraform(this._loginValidityDuration),
      name_assertion: cdktf.stringToTerraform(this._nameAssertion),
      org_assertion: cdktf.stringToTerraform(this._orgAssertion),
      role_assertion: cdktf.stringToTerraform(this._roleAssertion),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      timeouts: grafanaWorkspaceSamlConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
