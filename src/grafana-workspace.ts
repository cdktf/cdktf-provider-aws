// https://www.terraform.io/docs/providers/aws/r/grafana_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrafanaWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#account_access_type GrafanaWorkspace#account_access_type}
  */
  readonly accountAccessType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#authentication_providers GrafanaWorkspace#authentication_providers}
  */
  readonly authenticationProviders: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#data_sources GrafanaWorkspace#data_sources}
  */
  readonly dataSources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#description GrafanaWorkspace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#name GrafanaWorkspace#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#notification_destinations GrafanaWorkspace#notification_destinations}
  */
  readonly notificationDestinations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#organization_role_name GrafanaWorkspace#organization_role_name}
  */
  readonly organizationRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#organizational_units GrafanaWorkspace#organizational_units}
  */
  readonly organizationalUnits?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#permission_type GrafanaWorkspace#permission_type}
  */
  readonly permissionType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#role_arn GrafanaWorkspace#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#stack_set_name GrafanaWorkspace#stack_set_name}
  */
  readonly stackSetName?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#timeouts GrafanaWorkspace#timeouts}
  */
  readonly timeouts?: GrafanaWorkspaceTimeouts;
}
export interface GrafanaWorkspaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#create GrafanaWorkspace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace#update GrafanaWorkspace#update}
  */
  readonly update?: string;
}

export function grafanaWorkspaceTimeoutsToTerraform(struct?: GrafanaWorkspaceTimeoutsOutputReference | GrafanaWorkspaceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class GrafanaWorkspaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): GrafanaWorkspaceTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaWorkspaceTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace aws_grafana_workspace}
*/
export class GrafanaWorkspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_grafana_workspace";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace aws_grafana_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrafanaWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: GrafanaWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_grafana_workspace',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountAccessType = config.accountAccessType;
    this._authenticationProviders = config.authenticationProviders;
    this._dataSources = config.dataSources;
    this._description = config.description;
    this._name = config.name;
    this._notificationDestinations = config.notificationDestinations;
    this._organizationRoleName = config.organizationRoleName;
    this._organizationalUnits = config.organizationalUnits;
    this._permissionType = config.permissionType;
    this._roleArn = config.roleArn;
    this._stackSetName = config.stackSetName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_access_type - computed: false, optional: false, required: true
  private _accountAccessType?: string; 
  public get accountAccessType() {
    return this.getStringAttribute('account_access_type');
  }
  public set accountAccessType(value: string) {
    this._accountAccessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAccessTypeInput() {
    return this._accountAccessType;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authentication_providers - computed: false, optional: false, required: true
  private _authenticationProviders?: string[]; 
  public get authenticationProviders() {
    return this.getListAttribute('authentication_providers');
  }
  public set authenticationProviders(value: string[]) {
    this._authenticationProviders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProvidersInput() {
    return this._authenticationProviders;
  }

  // data_sources - computed: false, optional: true, required: false
  private _dataSources?: string[]; 
  public get dataSources() {
    return this.getListAttribute('data_sources');
  }
  public set dataSources(value: string[]) {
    this._dataSources = value;
  }
  public resetDataSources() {
    this._dataSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcesInput() {
    return this._dataSources;
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

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // grafana_version - computed: true, optional: false, required: false
  public get grafanaVersion() {
    return this.getStringAttribute('grafana_version');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notification_destinations - computed: false, optional: true, required: false
  private _notificationDestinations?: string[]; 
  public get notificationDestinations() {
    return this.getListAttribute('notification_destinations');
  }
  public set notificationDestinations(value: string[]) {
    this._notificationDestinations = value;
  }
  public resetNotificationDestinations() {
    this._notificationDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationDestinationsInput() {
    return this._notificationDestinations;
  }

  // organization_role_name - computed: false, optional: true, required: false
  private _organizationRoleName?: string; 
  public get organizationRoleName() {
    return this.getStringAttribute('organization_role_name');
  }
  public set organizationRoleName(value: string) {
    this._organizationRoleName = value;
  }
  public resetOrganizationRoleName() {
    this._organizationRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationRoleNameInput() {
    return this._organizationRoleName;
  }

  // organizational_units - computed: false, optional: true, required: false
  private _organizationalUnits?: string[]; 
  public get organizationalUnits() {
    return this.getListAttribute('organizational_units');
  }
  public set organizationalUnits(value: string[]) {
    this._organizationalUnits = value;
  }
  public resetOrganizationalUnits() {
    this._organizationalUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitsInput() {
    return this._organizationalUnits;
  }

  // permission_type - computed: false, optional: false, required: true
  private _permissionType?: string; 
  public get permissionType() {
    return this.getStringAttribute('permission_type');
  }
  public set permissionType(value: string) {
    this._permissionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionTypeInput() {
    return this._permissionType;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // saml_configuration_status - computed: true, optional: false, required: false
  public get samlConfigurationStatus() {
    return this.getStringAttribute('saml_configuration_status');
  }

  // stack_set_name - computed: false, optional: true, required: false
  private _stackSetName?: string; 
  public get stackSetName() {
    return this.getStringAttribute('stack_set_name');
  }
  public set stackSetName(value: string) {
    this._stackSetName = value;
  }
  public resetStackSetName() {
    this._stackSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackSetNameInput() {
    return this._stackSetName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GrafanaWorkspaceTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GrafanaWorkspaceTimeouts) {
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
      account_access_type: cdktf.stringToTerraform(this._accountAccessType),
      authentication_providers: cdktf.listMapper(cdktf.stringToTerraform)(this._authenticationProviders),
      data_sources: cdktf.listMapper(cdktf.stringToTerraform)(this._dataSources),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      notification_destinations: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationDestinations),
      organization_role_name: cdktf.stringToTerraform(this._organizationRoleName),
      organizational_units: cdktf.listMapper(cdktf.stringToTerraform)(this._organizationalUnits),
      permission_type: cdktf.stringToTerraform(this._permissionType),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      stack_set_name: cdktf.stringToTerraform(this._stackSetName),
      timeouts: grafanaWorkspaceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
