// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AppStream
*/
export interface AppstreamStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#description AppstreamStack#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#display_name AppstreamStack#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#embed_host_domains AppstreamStack#embed_host_domains}
  */
  readonly embedHostDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#feedback_url AppstreamStack#feedback_url}
  */
  readonly feedbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#name AppstreamStack#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#redirect_url AppstreamStack#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#tags AppstreamStack#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#tags_all AppstreamStack#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * access_endpoints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#access_endpoints AppstreamStack#access_endpoints}
  */
  readonly accessEndpoints?: AppstreamStackAccessEndpoints[] | cdktf.IResolvable;
  /**
  * application_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#application_settings AppstreamStack#application_settings}
  */
  readonly applicationSettings?: AppstreamStackApplicationSettings;
  /**
  * storage_connectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#storage_connectors AppstreamStack#storage_connectors}
  */
  readonly storageConnectors?: AppstreamStackStorageConnectors[] | cdktf.IResolvable;
  /**
  * user_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#user_settings AppstreamStack#user_settings}
  */
  readonly userSettings?: AppstreamStackUserSettings[] | cdktf.IResolvable;
}
export interface AppstreamStackAccessEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#endpoint_type AppstreamStack#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#vpce_id AppstreamStack#vpce_id}
  */
  readonly vpceId?: string;
}

export function appstreamStackAccessEndpointsToTerraform(struct?: AppstreamStackAccessEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_type: cdktf.stringToTerraform(struct!.endpointType),
    vpce_id: cdktf.stringToTerraform(struct!.vpceId),
  }
}

export interface AppstreamStackApplicationSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#enabled AppstreamStack#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#settings_group AppstreamStack#settings_group}
  */
  readonly settingsGroup?: string;
}

export function appstreamStackApplicationSettingsToTerraform(struct?: AppstreamStackApplicationSettingsOutputReference | AppstreamStackApplicationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    settings_group: cdktf.stringToTerraform(struct!.settingsGroup),
  }
}

export class AppstreamStackApplicationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppstreamStackApplicationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._settingsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsGroup = this._settingsGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppstreamStackApplicationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._settingsGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._settingsGroup = value.settingsGroup;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // settings_group - computed: false, optional: true, required: false
  private _settingsGroup?: string; 
  public get settingsGroup() {
    return this.getStringAttribute('settings_group');
  }
  public set settingsGroup(value: string) {
    this._settingsGroup = value;
  }
  public resetSettingsGroup() {
    this._settingsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsGroupInput() {
    return this._settingsGroup;
  }
}
export interface AppstreamStackStorageConnectors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#connector_type AppstreamStack#connector_type}
  */
  readonly connectorType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#domains AppstreamStack#domains}
  */
  readonly domains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#resource_identifier AppstreamStack#resource_identifier}
  */
  readonly resourceIdentifier?: string;
}

export function appstreamStackStorageConnectorsToTerraform(struct?: AppstreamStackStorageConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_type: cdktf.stringToTerraform(struct!.connectorType),
    domains: cdktf.listMapper(cdktf.stringToTerraform)(struct!.domains),
    resource_identifier: cdktf.stringToTerraform(struct!.resourceIdentifier),
  }
}

export interface AppstreamStackUserSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#action AppstreamStack#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack#permission AppstreamStack#permission}
  */
  readonly permission: string;
}

export function appstreamStackUserSettingsToTerraform(struct?: AppstreamStackUserSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack aws_appstream_stack}
*/
export class AppstreamStack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appstream_stack";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack aws_appstream_stack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppstreamStackConfig
  */
  public constructor(scope: Construct, id: string, config: AppstreamStackConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appstream_stack',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._embedHostDomains = config.embedHostDomains;
    this._feedbackUrl = config.feedbackUrl;
    this._name = config.name;
    this._redirectUrl = config.redirectUrl;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._accessEndpoints = config.accessEndpoints;
    this._applicationSettings.internalValue = config.applicationSettings;
    this._storageConnectors = config.storageConnectors;
    this._userSettings = config.userSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
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

  // embed_host_domains - computed: true, optional: true, required: false
  private _embedHostDomains?: string[]; 
  public get embedHostDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('embed_host_domains'));
  }
  public set embedHostDomains(value: string[]) {
    this._embedHostDomains = value;
  }
  public resetEmbedHostDomains() {
    this._embedHostDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embedHostDomainsInput() {
    return this._embedHostDomains;
  }

  // feedback_url - computed: true, optional: true, required: false
  private _feedbackUrl?: string; 
  public get feedbackUrl() {
    return this.getStringAttribute('feedback_url');
  }
  public set feedbackUrl(value: string) {
    this._feedbackUrl = value;
  }
  public resetFeedbackUrl() {
    this._feedbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedbackUrlInput() {
    return this._feedbackUrl;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // redirect_url - computed: true, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
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

  // access_endpoints - computed: false, optional: true, required: false
  private _accessEndpoints?: AppstreamStackAccessEndpoints[] | cdktf.IResolvable; 
  public get accessEndpoints() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('access_endpoints')));
  }
  public set accessEndpoints(value: AppstreamStackAccessEndpoints[] | cdktf.IResolvable) {
    this._accessEndpoints = value;
  }
  public resetAccessEndpoints() {
    this._accessEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessEndpointsInput() {
    return this._accessEndpoints;
  }

  // application_settings - computed: false, optional: true, required: false
  private _applicationSettings = new AppstreamStackApplicationSettingsOutputReference(this, "application_settings", true);
  public get applicationSettings() {
    return this._applicationSettings;
  }
  public putApplicationSettings(value: AppstreamStackApplicationSettings) {
    this._applicationSettings.internalValue = value;
  }
  public resetApplicationSettings() {
    this._applicationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSettingsInput() {
    return this._applicationSettings.internalValue;
  }

  // storage_connectors - computed: false, optional: true, required: false
  private _storageConnectors?: AppstreamStackStorageConnectors[] | cdktf.IResolvable; 
  public get storageConnectors() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('storage_connectors')));
  }
  public set storageConnectors(value: AppstreamStackStorageConnectors[] | cdktf.IResolvable) {
    this._storageConnectors = value;
  }
  public resetStorageConnectors() {
    this._storageConnectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConnectorsInput() {
    return this._storageConnectors;
  }

  // user_settings - computed: false, optional: true, required: false
  private _userSettings?: AppstreamStackUserSettings[] | cdktf.IResolvable; 
  public get userSettings() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('user_settings')));
  }
  public set userSettings(value: AppstreamStackUserSettings[] | cdktf.IResolvable) {
    this._userSettings = value;
  }
  public resetUserSettings() {
    this._userSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSettingsInput() {
    return this._userSettings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      embed_host_domains: cdktf.listMapper(cdktf.stringToTerraform)(this._embedHostDomains),
      feedback_url: cdktf.stringToTerraform(this._feedbackUrl),
      name: cdktf.stringToTerraform(this._name),
      redirect_url: cdktf.stringToTerraform(this._redirectUrl),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      access_endpoints: cdktf.listMapper(appstreamStackAccessEndpointsToTerraform)(this._accessEndpoints),
      application_settings: appstreamStackApplicationSettingsToTerraform(this._applicationSettings.internalValue),
      storage_connectors: cdktf.listMapper(appstreamStackStorageConnectorsToTerraform)(this._storageConnectors),
      user_settings: cdktf.listMapper(appstreamStackUserSettingsToTerraform)(this._userSettings),
    };
  }
}
