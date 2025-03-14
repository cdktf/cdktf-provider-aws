# `lakeformationDataLakeSettings` Submodule <a name="`lakeformationDataLakeSettings` Submodule" id="@cdktf/provider-aws.lakeformationDataLakeSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationDataLakeSettings <a name="LakeformationDataLakeSettings" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_lake_settings

lakeformationDataLakeSettings.LakeformationDataLakeSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admins: typing.List[str] = None,
  allow_external_data_filtering: typing.Union[bool, IResolvable] = None,
  allow_full_table_external_data_access: typing.Union[bool, IResolvable] = None,
  authorized_session_tag_value_list: typing.List[str] = None,
  catalog_id: str = None,
  create_database_default_permissions: typing.Union[IResolvable, typing.List[LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions]] = None,
  create_table_default_permissions: typing.Union[IResolvable, typing.List[LakeformationDataLakeSettingsCreateTableDefaultPermissions]] = None,
  external_data_filtering_allow_list: typing.List[str] = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  read_only_admins: typing.List[str] = None,
  trusted_resource_owners: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.admins">admins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#admins LakeformationDataLakeSettings#admins}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.allowExternalDataFiltering">allow_external_data_filtering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#allow_external_data_filtering LakeformationDataLakeSettings#allow_external_data_filtering}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.allowFullTableExternalDataAccess">allow_full_table_external_data_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#allow_full_table_external_data_access LakeformationDataLakeSettings#allow_full_table_external_data_access}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.authorizedSessionTagValueList">authorized_session_tag_value_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#authorized_session_tag_value_list LakeformationDataLakeSettings#authorized_session_tag_value_list}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#catalog_id LakeformationDataLakeSettings#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.createDatabaseDefaultPermissions">create_database_default_permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>]]</code> | create_database_default_permissions block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.createTableDefaultPermissions">create_table_default_permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>]]</code> | create_table_default_permissions block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.externalDataFilteringAllowList">external_data_filtering_allow_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#external_data_filtering_allow_list LakeformationDataLakeSettings#external_data_filtering_allow_list}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#id LakeformationDataLakeSettings#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#parameters LakeformationDataLakeSettings#parameters}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.readOnlyAdmins">read_only_admins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#read_only_admins LakeformationDataLakeSettings#read_only_admins}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.trustedResourceOwners">trusted_resource_owners</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admins`<sup>Optional</sup> <a name="admins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.admins"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#admins LakeformationDataLakeSettings#admins}.

---

##### `allow_external_data_filtering`<sup>Optional</sup> <a name="allow_external_data_filtering" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.allowExternalDataFiltering"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#allow_external_data_filtering LakeformationDataLakeSettings#allow_external_data_filtering}.

---

##### `allow_full_table_external_data_access`<sup>Optional</sup> <a name="allow_full_table_external_data_access" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.allowFullTableExternalDataAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#allow_full_table_external_data_access LakeformationDataLakeSettings#allow_full_table_external_data_access}.

---

##### `authorized_session_tag_value_list`<sup>Optional</sup> <a name="authorized_session_tag_value_list" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.authorizedSessionTagValueList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#authorized_session_tag_value_list LakeformationDataLakeSettings#authorized_session_tag_value_list}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#catalog_id LakeformationDataLakeSettings#catalog_id}.

---

##### `create_database_default_permissions`<sup>Optional</sup> <a name="create_database_default_permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.createDatabaseDefaultPermissions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>]]

create_database_default_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#create_database_default_permissions LakeformationDataLakeSettings#create_database_default_permissions}

---

##### `create_table_default_permissions`<sup>Optional</sup> <a name="create_table_default_permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.createTableDefaultPermissions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>]]

create_table_default_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#create_table_default_permissions LakeformationDataLakeSettings#create_table_default_permissions}

---

##### `external_data_filtering_allow_list`<sup>Optional</sup> <a name="external_data_filtering_allow_list" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.externalDataFilteringAllowList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#external_data_filtering_allow_list LakeformationDataLakeSettings#external_data_filtering_allow_list}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#id LakeformationDataLakeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#parameters LakeformationDataLakeSettings#parameters}.

---

##### `read_only_admins`<sup>Optional</sup> <a name="read_only_admins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.readOnlyAdmins"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#read_only_admins LakeformationDataLakeSettings#read_only_admins}.

---

##### `trusted_resource_owners`<sup>Optional</sup> <a name="trusted_resource_owners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.Initializer.parameter.trustedResourceOwners"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateDatabaseDefaultPermissions">put_create_database_default_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateTableDefaultPermissions">put_create_table_default_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAdmins">reset_admins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAllowExternalDataFiltering">reset_allow_external_data_filtering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAllowFullTableExternalDataAccess">reset_allow_full_table_external_data_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAuthorizedSessionTagValueList">reset_authorized_session_tag_value_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCreateDatabaseDefaultPermissions">reset_create_database_default_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCreateTableDefaultPermissions">reset_create_table_default_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetExternalDataFilteringAllowList">reset_external_data_filtering_allow_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetReadOnlyAdmins">reset_read_only_admins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetTrustedResourceOwners">reset_trusted_resource_owners</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_create_database_default_permissions` <a name="put_create_database_default_permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateDatabaseDefaultPermissions"></a>

```python
def put_create_database_default_permissions(
  value: typing.Union[IResolvable, typing.List[LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateDatabaseDefaultPermissions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>]]

---

##### `put_create_table_default_permissions` <a name="put_create_table_default_permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateTableDefaultPermissions"></a>

```python
def put_create_table_default_permissions(
  value: typing.Union[IResolvable, typing.List[LakeformationDataLakeSettingsCreateTableDefaultPermissions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.putCreateTableDefaultPermissions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>]]

---

##### `reset_admins` <a name="reset_admins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAdmins"></a>

```python
def reset_admins() -> None
```

##### `reset_allow_external_data_filtering` <a name="reset_allow_external_data_filtering" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAllowExternalDataFiltering"></a>

```python
def reset_allow_external_data_filtering() -> None
```

##### `reset_allow_full_table_external_data_access` <a name="reset_allow_full_table_external_data_access" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAllowFullTableExternalDataAccess"></a>

```python
def reset_allow_full_table_external_data_access() -> None
```

##### `reset_authorized_session_tag_value_list` <a name="reset_authorized_session_tag_value_list" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetAuthorizedSessionTagValueList"></a>

```python
def reset_authorized_session_tag_value_list() -> None
```

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_create_database_default_permissions` <a name="reset_create_database_default_permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCreateDatabaseDefaultPermissions"></a>

```python
def reset_create_database_default_permissions() -> None
```

##### `reset_create_table_default_permissions` <a name="reset_create_table_default_permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetCreateTableDefaultPermissions"></a>

```python
def reset_create_table_default_permissions() -> None
```

##### `reset_external_data_filtering_allow_list` <a name="reset_external_data_filtering_allow_list" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetExternalDataFilteringAllowList"></a>

```python
def reset_external_data_filtering_allow_list() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_read_only_admins` <a name="reset_read_only_admins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetReadOnlyAdmins"></a>

```python
def reset_read_only_admins() -> None
```

##### `reset_trusted_resource_owners` <a name="reset_trusted_resource_owners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.resetTrustedResourceOwners"></a>

```python
def reset_trusted_resource_owners() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LakeformationDataLakeSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_lake_settings

lakeformationDataLakeSettings.LakeformationDataLakeSettings.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_lake_settings

lakeformationDataLakeSettings.LakeformationDataLakeSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_lake_settings

lakeformationDataLakeSettings.LakeformationDataLakeSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_lake_settings

lakeformationDataLakeSettings.LakeformationDataLakeSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LakeformationDataLakeSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LakeformationDataLakeSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LakeformationDataLakeSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LakeformationDataLakeSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createDatabaseDefaultPermissions">create_database_default_permissions</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createTableDefaultPermissions">create_table_default_permissions</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList">LakeformationDataLakeSettingsCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.adminsInput">admins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.allowExternalDataFilteringInput">allow_external_data_filtering_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.allowFullTableExternalDataAccessInput">allow_full_table_external_data_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.authorizedSessionTagValueListInput">authorized_session_tag_value_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createDatabaseDefaultPermissionsInput">create_database_default_permissions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createTableDefaultPermissionsInput">create_table_default_permissions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.externalDataFilteringAllowListInput">external_data_filtering_allow_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.readOnlyAdminsInput">read_only_admins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.trustedResourceOwnersInput">trusted_resource_owners_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.admins">admins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.allowExternalDataFiltering">allow_external_data_filtering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.allowFullTableExternalDataAccess">allow_full_table_external_data_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.authorizedSessionTagValueList">authorized_session_tag_value_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.externalDataFilteringAllowList">external_data_filtering_allow_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.readOnlyAdmins">read_only_admins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.trustedResourceOwners">trusted_resource_owners</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_database_default_permissions`<sup>Required</sup> <a name="create_database_default_permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createDatabaseDefaultPermissions"></a>

```python
create_database_default_permissions: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList</a>

---

##### `create_table_default_permissions`<sup>Required</sup> <a name="create_table_default_permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createTableDefaultPermissions"></a>

```python
create_table_default_permissions: LakeformationDataLakeSettingsCreateTableDefaultPermissionsList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList">LakeformationDataLakeSettingsCreateTableDefaultPermissionsList</a>

---

##### `admins_input`<sup>Optional</sup> <a name="admins_input" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.adminsInput"></a>

```python
admins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_external_data_filtering_input`<sup>Optional</sup> <a name="allow_external_data_filtering_input" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.allowExternalDataFilteringInput"></a>

```python
allow_external_data_filtering_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_full_table_external_data_access_input`<sup>Optional</sup> <a name="allow_full_table_external_data_access_input" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.allowFullTableExternalDataAccessInput"></a>

```python
allow_full_table_external_data_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authorized_session_tag_value_list_input`<sup>Optional</sup> <a name="authorized_session_tag_value_list_input" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.authorizedSessionTagValueListInput"></a>

```python
authorized_session_tag_value_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `create_database_default_permissions_input`<sup>Optional</sup> <a name="create_database_default_permissions_input" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createDatabaseDefaultPermissionsInput"></a>

```python
create_database_default_permissions_input: typing.Union[IResolvable, typing.List[LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>]]

---

##### `create_table_default_permissions_input`<sup>Optional</sup> <a name="create_table_default_permissions_input" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.createTableDefaultPermissionsInput"></a>

```python
create_table_default_permissions_input: typing.Union[IResolvable, typing.List[LakeformationDataLakeSettingsCreateTableDefaultPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>]]

---

##### `external_data_filtering_allow_list_input`<sup>Optional</sup> <a name="external_data_filtering_allow_list_input" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.externalDataFilteringAllowListInput"></a>

```python
external_data_filtering_allow_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `read_only_admins_input`<sup>Optional</sup> <a name="read_only_admins_input" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.readOnlyAdminsInput"></a>

```python
read_only_admins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trusted_resource_owners_input`<sup>Optional</sup> <a name="trusted_resource_owners_input" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.trustedResourceOwnersInput"></a>

```python
trusted_resource_owners_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `admins`<sup>Required</sup> <a name="admins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.admins"></a>

```python
admins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_external_data_filtering`<sup>Required</sup> <a name="allow_external_data_filtering" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.allowExternalDataFiltering"></a>

```python
allow_external_data_filtering: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_full_table_external_data_access`<sup>Required</sup> <a name="allow_full_table_external_data_access" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.allowFullTableExternalDataAccess"></a>

```python
allow_full_table_external_data_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authorized_session_tag_value_list`<sup>Required</sup> <a name="authorized_session_tag_value_list" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.authorizedSessionTagValueList"></a>

```python
authorized_session_tag_value_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `external_data_filtering_allow_list`<sup>Required</sup> <a name="external_data_filtering_allow_list" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.externalDataFilteringAllowList"></a>

```python
external_data_filtering_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `read_only_admins`<sup>Required</sup> <a name="read_only_admins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.readOnlyAdmins"></a>

```python
read_only_admins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trusted_resource_owners`<sup>Required</sup> <a name="trusted_resource_owners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.trustedResourceOwners"></a>

```python
trusted_resource_owners: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationDataLakeSettingsConfig <a name="LakeformationDataLakeSettingsConfig" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_lake_settings

lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  admins: typing.List[str] = None,
  allow_external_data_filtering: typing.Union[bool, IResolvable] = None,
  allow_full_table_external_data_access: typing.Union[bool, IResolvable] = None,
  authorized_session_tag_value_list: typing.List[str] = None,
  catalog_id: str = None,
  create_database_default_permissions: typing.Union[IResolvable, typing.List[LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions]] = None,
  create_table_default_permissions: typing.Union[IResolvable, typing.List[LakeformationDataLakeSettingsCreateTableDefaultPermissions]] = None,
  external_data_filtering_allow_list: typing.List[str] = None,
  id: str = None,
  parameters: typing.Mapping[str] = None,
  read_only_admins: typing.List[str] = None,
  trusted_resource_owners: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.admins">admins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#admins LakeformationDataLakeSettings#admins}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.allowExternalDataFiltering">allow_external_data_filtering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#allow_external_data_filtering LakeformationDataLakeSettings#allow_external_data_filtering}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.allowFullTableExternalDataAccess">allow_full_table_external_data_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#allow_full_table_external_data_access LakeformationDataLakeSettings#allow_full_table_external_data_access}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.authorizedSessionTagValueList">authorized_session_tag_value_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#authorized_session_tag_value_list LakeformationDataLakeSettings#authorized_session_tag_value_list}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#catalog_id LakeformationDataLakeSettings#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.createDatabaseDefaultPermissions">create_database_default_permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>]]</code> | create_database_default_permissions block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.createTableDefaultPermissions">create_table_default_permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>]]</code> | create_table_default_permissions block. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.externalDataFilteringAllowList">external_data_filtering_allow_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#external_data_filtering_allow_list LakeformationDataLakeSettings#external_data_filtering_allow_list}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#id LakeformationDataLakeSettings#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#parameters LakeformationDataLakeSettings#parameters}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.readOnlyAdmins">read_only_admins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#read_only_admins LakeformationDataLakeSettings#read_only_admins}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.trustedResourceOwners">trusted_resource_owners</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admins`<sup>Optional</sup> <a name="admins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.admins"></a>

```python
admins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#admins LakeformationDataLakeSettings#admins}.

---

##### `allow_external_data_filtering`<sup>Optional</sup> <a name="allow_external_data_filtering" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.allowExternalDataFiltering"></a>

```python
allow_external_data_filtering: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#allow_external_data_filtering LakeformationDataLakeSettings#allow_external_data_filtering}.

---

##### `allow_full_table_external_data_access`<sup>Optional</sup> <a name="allow_full_table_external_data_access" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.allowFullTableExternalDataAccess"></a>

```python
allow_full_table_external_data_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#allow_full_table_external_data_access LakeformationDataLakeSettings#allow_full_table_external_data_access}.

---

##### `authorized_session_tag_value_list`<sup>Optional</sup> <a name="authorized_session_tag_value_list" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.authorizedSessionTagValueList"></a>

```python
authorized_session_tag_value_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#authorized_session_tag_value_list LakeformationDataLakeSettings#authorized_session_tag_value_list}.

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#catalog_id LakeformationDataLakeSettings#catalog_id}.

---

##### `create_database_default_permissions`<sup>Optional</sup> <a name="create_database_default_permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.createDatabaseDefaultPermissions"></a>

```python
create_database_default_permissions: typing.Union[IResolvable, typing.List[LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>]]

create_database_default_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#create_database_default_permissions LakeformationDataLakeSettings#create_database_default_permissions}

---

##### `create_table_default_permissions`<sup>Optional</sup> <a name="create_table_default_permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.createTableDefaultPermissions"></a>

```python
create_table_default_permissions: typing.Union[IResolvable, typing.List[LakeformationDataLakeSettingsCreateTableDefaultPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>]]

create_table_default_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#create_table_default_permissions LakeformationDataLakeSettings#create_table_default_permissions}

---

##### `external_data_filtering_allow_list`<sup>Optional</sup> <a name="external_data_filtering_allow_list" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.externalDataFilteringAllowList"></a>

```python
external_data_filtering_allow_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#external_data_filtering_allow_list LakeformationDataLakeSettings#external_data_filtering_allow_list}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#id LakeformationDataLakeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#parameters LakeformationDataLakeSettings#parameters}.

---

##### `read_only_admins`<sup>Optional</sup> <a name="read_only_admins" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.readOnlyAdmins"></a>

```python
read_only_admins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#read_only_admins LakeformationDataLakeSettings#read_only_admins}.

---

##### `trusted_resource_owners`<sup>Optional</sup> <a name="trusted_resource_owners" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsConfig.property.trustedResourceOwners"></a>

```python
trusted_resource_owners: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}.

---

### LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions <a name="LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_lake_settings

lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions(
  permissions: typing.List[str] = None,
  principal: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.property.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.property.principal"></a>

```python
principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}.

---

### LakeformationDataLakeSettingsCreateTableDefaultPermissions <a name="LakeformationDataLakeSettingsCreateTableDefaultPermissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_lake_settings

lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions(
  permissions: typing.List[str] = None,
  principal: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.property.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#permissions LakeformationDataLakeSettings#permissions}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions.property.principal"></a>

```python
principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.91.0/docs/resources/lakeformation_data_lake_settings#principal LakeformationDataLakeSettings#principal}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList <a name="LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_lake_settings

lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>]]

---


### LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference <a name="LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_lake_settings

lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_principal` <a name="reset_principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>]

---


### LakeformationDataLakeSettingsCreateTableDefaultPermissionsList <a name="LakeformationDataLakeSettingsCreateTableDefaultPermissionsList" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_lake_settings

lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LakeformationDataLakeSettingsCreateTableDefaultPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>]]

---


### LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference <a name="LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lakeformation_data_lake_settings

lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_principal` <a name="reset_principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LakeformationDataLakeSettingsCreateTableDefaultPermissions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.lakeformationDataLakeSettings.LakeformationDataLakeSettingsCreateTableDefaultPermissions">LakeformationDataLakeSettingsCreateTableDefaultPermissions</a>]

---



