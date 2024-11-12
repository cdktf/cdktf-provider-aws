# `quicksightDashboard` Submodule <a name="`quicksightDashboard` Submodule" id="@cdktf/provider-aws.quicksightDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightDashboard <a name="QuicksightDashboard" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard aws_quicksight_dashboard}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboard(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dashboard_id: str,
  name: str,
  version_description: str,
  aws_account_id: str = None,
  dashboard_publish_options: QuicksightDashboardDashboardPublishOptions = None,
  definition: typing.Any = None,
  id: str = None,
  parameters: QuicksightDashboardParameters = None,
  permissions: typing.Union[IResolvable, typing.List[QuicksightDashboardPermissions]] = None,
  source_entity: QuicksightDashboardSourceEntity = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  theme_arn: str = None,
  timeouts: QuicksightDashboardTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.dashboardId">dashboard_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#dashboard_id QuicksightDashboard#dashboard_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.versionDescription">version_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#version_description QuicksightDashboard#version_description}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#aws_account_id QuicksightDashboard#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.dashboardPublishOptions">dashboard_publish_options</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a></code> | dashboard_publish_options block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.definition">definition</a></code> | <code>typing.Any</code> | definition block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#id QuicksightDashboard#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.permissions">permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>]]</code> | permissions block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.sourceEntity">source_entity</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a></code> | source_entity block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#tags QuicksightDashboard#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#tags_all QuicksightDashboard#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.themeArn">theme_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#theme_arn QuicksightDashboard#theme_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dashboard_id`<sup>Required</sup> <a name="dashboard_id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.dashboardId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#dashboard_id QuicksightDashboard#dashboard_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}.

---

##### `version_description`<sup>Required</sup> <a name="version_description" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.versionDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#version_description QuicksightDashboard#version_description}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#aws_account_id QuicksightDashboard#aws_account_id}.

---

##### `dashboard_publish_options`<sup>Optional</sup> <a name="dashboard_publish_options" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.dashboardPublishOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

dashboard_publish_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#dashboard_publish_options QuicksightDashboard#dashboard_publish_options}

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.definition"></a>

- *Type:* typing.Any

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#definition QuicksightDashboard#definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#id QuicksightDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.parameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#parameters QuicksightDashboard#parameters}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.permissions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>]]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#permissions QuicksightDashboard#permissions}

---

##### `source_entity`<sup>Optional</sup> <a name="source_entity" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.sourceEntity"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

source_entity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#source_entity QuicksightDashboard#source_entity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#tags QuicksightDashboard#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#tags_all QuicksightDashboard#tags_all}.

---

##### `theme_arn`<sup>Optional</sup> <a name="theme_arn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.themeArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#theme_arn QuicksightDashboard#theme_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#timeouts QuicksightDashboard#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions">put_dashboard_publish_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putPermissions">put_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putSourceEntity">put_source_entity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetDashboardPublishOptions">reset_dashboard_publish_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetDefinition">reset_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetSourceEntity">reset_source_entity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetThemeArn">reset_theme_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dashboard_publish_options` <a name="put_dashboard_publish_options" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions"></a>

```python
def put_dashboard_publish_options(
  ad_hoc_filtering_option: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption = None,
  data_point_drill_up_down_option: QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption = None,
  data_point_menu_label_option: QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption = None,
  data_point_tooltip_option: QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption = None,
  export_to_csv_option: QuicksightDashboardDashboardPublishOptionsExportToCsvOption = None,
  export_with_hidden_fields_option: QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption = None,
  sheet_controls_option: QuicksightDashboardDashboardPublishOptionsSheetControlsOption = None,
  sheet_layout_element_maximization_option: QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption = None,
  visual_axis_sort_option: QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption = None,
  visual_menu_option: QuicksightDashboardDashboardPublishOptionsVisualMenuOption = None
) -> None
```

###### `ad_hoc_filtering_option`<sup>Optional</sup> <a name="ad_hoc_filtering_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions.parameter.adHocFilteringOption"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

ad_hoc_filtering_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#ad_hoc_filtering_option QuicksightDashboard#ad_hoc_filtering_option}

---

###### `data_point_drill_up_down_option`<sup>Optional</sup> <a name="data_point_drill_up_down_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions.parameter.dataPointDrillUpDownOption"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a>

data_point_drill_up_down_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#data_point_drill_up_down_option QuicksightDashboard#data_point_drill_up_down_option}

---

###### `data_point_menu_label_option`<sup>Optional</sup> <a name="data_point_menu_label_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions.parameter.dataPointMenuLabelOption"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a>

data_point_menu_label_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#data_point_menu_label_option QuicksightDashboard#data_point_menu_label_option}

---

###### `data_point_tooltip_option`<sup>Optional</sup> <a name="data_point_tooltip_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions.parameter.dataPointTooltipOption"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a>

data_point_tooltip_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#data_point_tooltip_option QuicksightDashboard#data_point_tooltip_option}

---

###### `export_to_csv_option`<sup>Optional</sup> <a name="export_to_csv_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions.parameter.exportToCsvOption"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

export_to_csv_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#export_to_csv_option QuicksightDashboard#export_to_csv_option}

---

###### `export_with_hidden_fields_option`<sup>Optional</sup> <a name="export_with_hidden_fields_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions.parameter.exportWithHiddenFieldsOption"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a>

export_with_hidden_fields_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#export_with_hidden_fields_option QuicksightDashboard#export_with_hidden_fields_option}

---

###### `sheet_controls_option`<sup>Optional</sup> <a name="sheet_controls_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions.parameter.sheetControlsOption"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

sheet_controls_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#sheet_controls_option QuicksightDashboard#sheet_controls_option}

---

###### `sheet_layout_element_maximization_option`<sup>Optional</sup> <a name="sheet_layout_element_maximization_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions.parameter.sheetLayoutElementMaximizationOption"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a>

sheet_layout_element_maximization_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#sheet_layout_element_maximization_option QuicksightDashboard#sheet_layout_element_maximization_option}

---

###### `visual_axis_sort_option`<sup>Optional</sup> <a name="visual_axis_sort_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions.parameter.visualAxisSortOption"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a>

visual_axis_sort_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#visual_axis_sort_option QuicksightDashboard#visual_axis_sort_option}

---

###### `visual_menu_option`<sup>Optional</sup> <a name="visual_menu_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions.parameter.visualMenuOption"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a>

visual_menu_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#visual_menu_option QuicksightDashboard#visual_menu_option}

---

##### `put_parameters` <a name="put_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putParameters"></a>

```python
def put_parameters(
  date_time_parameters: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersDateTimeParameters]] = None,
  decimal_parameters: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersDecimalParameters]] = None,
  integer_parameters: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersIntegerParameters]] = None,
  string_parameters: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersStringParameters]] = None
) -> None
```

###### `date_time_parameters`<sup>Optional</sup> <a name="date_time_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putParameters.parameter.dateTimeParameters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>]]

date_time_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#date_time_parameters QuicksightDashboard#date_time_parameters}

---

###### `decimal_parameters`<sup>Optional</sup> <a name="decimal_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putParameters.parameter.decimalParameters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>]]

decimal_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#decimal_parameters QuicksightDashboard#decimal_parameters}

---

###### `integer_parameters`<sup>Optional</sup> <a name="integer_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putParameters.parameter.integerParameters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>]]

integer_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#integer_parameters QuicksightDashboard#integer_parameters}

---

###### `string_parameters`<sup>Optional</sup> <a name="string_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putParameters.parameter.stringParameters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>]]

string_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#string_parameters QuicksightDashboard#string_parameters}

---

##### `put_permissions` <a name="put_permissions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putPermissions"></a>

```python
def put_permissions(
  value: typing.Union[IResolvable, typing.List[QuicksightDashboardPermissions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putPermissions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>]]

---

##### `put_source_entity` <a name="put_source_entity" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putSourceEntity"></a>

```python
def put_source_entity(
  source_template: QuicksightDashboardSourceEntitySourceTemplate = None
) -> None
```

###### `source_template`<sup>Optional</sup> <a name="source_template" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putSourceEntity.parameter.sourceTemplate"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

source_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#source_template QuicksightDashboard#source_template}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#create QuicksightDashboard#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#delete QuicksightDashboard#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#update QuicksightDashboard#update}.

---

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_dashboard_publish_options` <a name="reset_dashboard_publish_options" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetDashboardPublishOptions"></a>

```python
def reset_dashboard_publish_options() -> None
```

##### `reset_definition` <a name="reset_definition" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetDefinition"></a>

```python
def reset_definition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_source_entity` <a name="reset_source_entity" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetSourceEntity"></a>

```python
def reset_source_entity() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_theme_arn` <a name="reset_theme_arn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetThemeArn"></a>

```python
def reset_theme_arn() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a QuicksightDashboard resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboard.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboard.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboard.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboard.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a QuicksightDashboard resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QuicksightDashboard to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QuicksightDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptions">dashboard_publish_options</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference">QuicksightDashboardDashboardPublishOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.definitionInput">definition_input</a></code> | <code>typing.Any</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lastPublishedTime">last_published_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference">QuicksightDashboardParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList">QuicksightDashboardPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntity">source_entity</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference">QuicksightDashboardSourceEntityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntityArn">source_entity_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference">QuicksightDashboardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionNumber">version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardIdInput">dashboard_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptionsInput">dashboard_publish_options_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.parametersInput">parameters_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.permissionsInput">permissions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntityInput">source_entity_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.themeArnInput">theme_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionDescriptionInput">version_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardId">dashboard_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.definition">definition</a></code> | <code>typing.Any</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.themeArn">theme_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionDescription">version_description</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `dashboard_publish_options`<sup>Required</sup> <a name="dashboard_publish_options" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptions"></a>

```python
dashboard_publish_options: QuicksightDashboardDashboardPublishOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference">QuicksightDashboardDashboardPublishOptionsOutputReference</a>

---

##### `definition_input`<sup>Required</sup> <a name="definition_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.definitionInput"></a>

```python
definition_input: typing.Any
```

- *Type:* typing.Any

---

##### `last_published_time`<sup>Required</sup> <a name="last_published_time" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lastPublishedTime"></a>

```python
last_published_time: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.parameters"></a>

```python
parameters: QuicksightDashboardParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference">QuicksightDashboardParametersOutputReference</a>

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.permissions"></a>

```python
permissions: QuicksightDashboardPermissionsList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList">QuicksightDashboardPermissionsList</a>

---

##### `source_entity`<sup>Required</sup> <a name="source_entity" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntity"></a>

```python
source_entity: QuicksightDashboardSourceEntityOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference">QuicksightDashboardSourceEntityOutputReference</a>

---

##### `source_entity_arn`<sup>Required</sup> <a name="source_entity_arn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntityArn"></a>

```python
source_entity_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.timeouts"></a>

```python
timeouts: QuicksightDashboardTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference">QuicksightDashboardTimeoutsOutputReference</a>

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionNumber"></a>

```python
version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `dashboard_id_input`<sup>Optional</sup> <a name="dashboard_id_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardIdInput"></a>

```python
dashboard_id_input: str
```

- *Type:* str

---

##### `dashboard_publish_options_input`<sup>Optional</sup> <a name="dashboard_publish_options_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptionsInput"></a>

```python
dashboard_publish_options_input: QuicksightDashboardDashboardPublishOptions
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.parametersInput"></a>

```python
parameters_input: QuicksightDashboardParameters
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.permissionsInput"></a>

```python
permissions_input: typing.Union[IResolvable, typing.List[QuicksightDashboardPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>]]

---

##### `source_entity_input`<sup>Optional</sup> <a name="source_entity_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.sourceEntityInput"></a>

```python
source_entity_input: QuicksightDashboardSourceEntity
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `theme_arn_input`<sup>Optional</sup> <a name="theme_arn_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.themeArnInput"></a>

```python
theme_arn_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, QuicksightDashboardTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a>]

---

##### `version_description_input`<sup>Optional</sup> <a name="version_description_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionDescriptionInput"></a>

```python
version_description_input: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `dashboard_id`<sup>Required</sup> <a name="dashboard_id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.dashboardId"></a>

```python
dashboard_id: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.definition"></a>

```python
definition: typing.Any
```

- *Type:* typing.Any

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `theme_arn`<sup>Required</sup> <a name="theme_arn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.themeArn"></a>

```python
theme_arn: str
```

- *Type:* str

---

##### `version_description`<sup>Required</sup> <a name="version_description" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboard.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightDashboardConfig <a name="QuicksightDashboardConfig" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dashboard_id: str,
  name: str,
  version_description: str,
  aws_account_id: str = None,
  dashboard_publish_options: QuicksightDashboardDashboardPublishOptions = None,
  definition: typing.Any = None,
  id: str = None,
  parameters: QuicksightDashboardParameters = None,
  permissions: typing.Union[IResolvable, typing.List[QuicksightDashboardPermissions]] = None,
  source_entity: QuicksightDashboardSourceEntity = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  theme_arn: str = None,
  timeouts: QuicksightDashboardTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dashboardId">dashboard_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#dashboard_id QuicksightDashboard#dashboard_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.versionDescription">version_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#version_description QuicksightDashboard#version_description}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#aws_account_id QuicksightDashboard#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dashboardPublishOptions">dashboard_publish_options</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a></code> | dashboard_publish_options block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.definition">definition</a></code> | <code>typing.Any</code> | definition block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#id QuicksightDashboard#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a></code> | parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.permissions">permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>]]</code> | permissions block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.sourceEntity">source_entity</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a></code> | source_entity block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#tags QuicksightDashboard#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#tags_all QuicksightDashboard#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.themeArn">theme_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#theme_arn QuicksightDashboard#theme_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dashboard_id`<sup>Required</sup> <a name="dashboard_id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dashboardId"></a>

```python
dashboard_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#dashboard_id QuicksightDashboard#dashboard_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}.

---

##### `version_description`<sup>Required</sup> <a name="version_description" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#version_description QuicksightDashboard#version_description}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#aws_account_id QuicksightDashboard#aws_account_id}.

---

##### `dashboard_publish_options`<sup>Optional</sup> <a name="dashboard_publish_options" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.dashboardPublishOptions"></a>

```python
dashboard_publish_options: QuicksightDashboardDashboardPublishOptions
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

dashboard_publish_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#dashboard_publish_options QuicksightDashboard#dashboard_publish_options}

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.definition"></a>

```python
definition: typing.Any
```

- *Type:* typing.Any

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#definition QuicksightDashboard#definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#id QuicksightDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.parameters"></a>

```python
parameters: QuicksightDashboardParameters
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#parameters QuicksightDashboard#parameters}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.permissions"></a>

```python
permissions: typing.Union[IResolvable, typing.List[QuicksightDashboardPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>]]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#permissions QuicksightDashboard#permissions}

---

##### `source_entity`<sup>Optional</sup> <a name="source_entity" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.sourceEntity"></a>

```python
source_entity: QuicksightDashboardSourceEntity
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

source_entity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#source_entity QuicksightDashboard#source_entity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#tags QuicksightDashboard#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#tags_all QuicksightDashboard#tags_all}.

---

##### `theme_arn`<sup>Optional</sup> <a name="theme_arn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.themeArn"></a>

```python
theme_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#theme_arn QuicksightDashboard#theme_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardConfig.property.timeouts"></a>

```python
timeouts: QuicksightDashboardTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#timeouts QuicksightDashboard#timeouts}

---

### QuicksightDashboardDashboardPublishOptions <a name="QuicksightDashboardDashboardPublishOptions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptions(
  ad_hoc_filtering_option: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption = None,
  data_point_drill_up_down_option: QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption = None,
  data_point_menu_label_option: QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption = None,
  data_point_tooltip_option: QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption = None,
  export_to_csv_option: QuicksightDashboardDashboardPublishOptionsExportToCsvOption = None,
  export_with_hidden_fields_option: QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption = None,
  sheet_controls_option: QuicksightDashboardDashboardPublishOptionsSheetControlsOption = None,
  sheet_layout_element_maximization_option: QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption = None,
  visual_axis_sort_option: QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption = None,
  visual_menu_option: QuicksightDashboardDashboardPublishOptionsVisualMenuOption = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.adHocFilteringOption">ad_hoc_filtering_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a></code> | ad_hoc_filtering_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointDrillUpDownOption">data_point_drill_up_down_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a></code> | data_point_drill_up_down_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointMenuLabelOption">data_point_menu_label_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a></code> | data_point_menu_label_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointTooltipOption">data_point_tooltip_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a></code> | data_point_tooltip_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.exportToCsvOption">export_to_csv_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a></code> | export_to_csv_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.exportWithHiddenFieldsOption">export_with_hidden_fields_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a></code> | export_with_hidden_fields_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.sheetControlsOption">sheet_controls_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a></code> | sheet_controls_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.sheetLayoutElementMaximizationOption">sheet_layout_element_maximization_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a></code> | sheet_layout_element_maximization_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.visualAxisSortOption">visual_axis_sort_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a></code> | visual_axis_sort_option block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.visualMenuOption">visual_menu_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a></code> | visual_menu_option block. |

---

##### `ad_hoc_filtering_option`<sup>Optional</sup> <a name="ad_hoc_filtering_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.adHocFilteringOption"></a>

```python
ad_hoc_filtering_option: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

ad_hoc_filtering_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#ad_hoc_filtering_option QuicksightDashboard#ad_hoc_filtering_option}

---

##### `data_point_drill_up_down_option`<sup>Optional</sup> <a name="data_point_drill_up_down_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointDrillUpDownOption"></a>

```python
data_point_drill_up_down_option: QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a>

data_point_drill_up_down_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#data_point_drill_up_down_option QuicksightDashboard#data_point_drill_up_down_option}

---

##### `data_point_menu_label_option`<sup>Optional</sup> <a name="data_point_menu_label_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointMenuLabelOption"></a>

```python
data_point_menu_label_option: QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a>

data_point_menu_label_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#data_point_menu_label_option QuicksightDashboard#data_point_menu_label_option}

---

##### `data_point_tooltip_option`<sup>Optional</sup> <a name="data_point_tooltip_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.dataPointTooltipOption"></a>

```python
data_point_tooltip_option: QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a>

data_point_tooltip_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#data_point_tooltip_option QuicksightDashboard#data_point_tooltip_option}

---

##### `export_to_csv_option`<sup>Optional</sup> <a name="export_to_csv_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.exportToCsvOption"></a>

```python
export_to_csv_option: QuicksightDashboardDashboardPublishOptionsExportToCsvOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

export_to_csv_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#export_to_csv_option QuicksightDashboard#export_to_csv_option}

---

##### `export_with_hidden_fields_option`<sup>Optional</sup> <a name="export_with_hidden_fields_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.exportWithHiddenFieldsOption"></a>

```python
export_with_hidden_fields_option: QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a>

export_with_hidden_fields_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#export_with_hidden_fields_option QuicksightDashboard#export_with_hidden_fields_option}

---

##### `sheet_controls_option`<sup>Optional</sup> <a name="sheet_controls_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.sheetControlsOption"></a>

```python
sheet_controls_option: QuicksightDashboardDashboardPublishOptionsSheetControlsOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

sheet_controls_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#sheet_controls_option QuicksightDashboard#sheet_controls_option}

---

##### `sheet_layout_element_maximization_option`<sup>Optional</sup> <a name="sheet_layout_element_maximization_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.sheetLayoutElementMaximizationOption"></a>

```python
sheet_layout_element_maximization_option: QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a>

sheet_layout_element_maximization_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#sheet_layout_element_maximization_option QuicksightDashboard#sheet_layout_element_maximization_option}

---

##### `visual_axis_sort_option`<sup>Optional</sup> <a name="visual_axis_sort_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.visualAxisSortOption"></a>

```python
visual_axis_sort_option: QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a>

visual_axis_sort_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#visual_axis_sort_option QuicksightDashboard#visual_axis_sort_option}

---

##### `visual_menu_option`<sup>Optional</sup> <a name="visual_menu_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.visualMenuOption"></a>

```python
visual_menu_option: QuicksightDashboardDashboardPublishOptionsVisualMenuOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a>

visual_menu_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#visual_menu_option QuicksightDashboard#visual_menu_option}

---

### QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption <a name="QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption(
  availability_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption.property.availabilityStatus">availability_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption <a name="QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption(
  availability_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption.property.availabilityStatus">availability_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption <a name="QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption(
  availability_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption.property.availabilityStatus">availability_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption <a name="QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption(
  availability_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption.property.availabilityStatus">availability_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsExportToCsvOption <a name="QuicksightDashboardDashboardPublishOptionsExportToCsvOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption(
  availability_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption.property.availabilityStatus">availability_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption <a name="QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption(
  availability_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption.property.availabilityStatus">availability_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsSheetControlsOption <a name="QuicksightDashboardDashboardPublishOptionsSheetControlsOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption(
  visibility_state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption.property.visibilityState">visibility_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#visibility_state QuicksightDashboard#visibility_state}. |

---

##### `visibility_state`<sup>Optional</sup> <a name="visibility_state" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption.property.visibilityState"></a>

```python
visibility_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#visibility_state QuicksightDashboard#visibility_state}.

---

### QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption <a name="QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption(
  availability_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption.property.availabilityStatus">availability_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption <a name="QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption(
  availability_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption.property.availabilityStatus">availability_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsVisualMenuOption <a name="QuicksightDashboardDashboardPublishOptionsVisualMenuOption" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption(
  availability_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption.property.availabilityStatus">availability_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardParameters <a name="QuicksightDashboardParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardParameters(
  date_time_parameters: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersDateTimeParameters]] = None,
  decimal_parameters: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersDecimalParameters]] = None,
  integer_parameters: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersIntegerParameters]] = None,
  string_parameters: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersStringParameters]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.dateTimeParameters">date_time_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>]]</code> | date_time_parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.decimalParameters">decimal_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>]]</code> | decimal_parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.integerParameters">integer_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>]]</code> | integer_parameters block. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.stringParameters">string_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>]]</code> | string_parameters block. |

---

##### `date_time_parameters`<sup>Optional</sup> <a name="date_time_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.dateTimeParameters"></a>

```python
date_time_parameters: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersDateTimeParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>]]

date_time_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#date_time_parameters QuicksightDashboard#date_time_parameters}

---

##### `decimal_parameters`<sup>Optional</sup> <a name="decimal_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.decimalParameters"></a>

```python
decimal_parameters: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersDecimalParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>]]

decimal_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#decimal_parameters QuicksightDashboard#decimal_parameters}

---

##### `integer_parameters`<sup>Optional</sup> <a name="integer_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.integerParameters"></a>

```python
integer_parameters: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersIntegerParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>]]

integer_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#integer_parameters QuicksightDashboard#integer_parameters}

---

##### `string_parameters`<sup>Optional</sup> <a name="string_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters.property.stringParameters"></a>

```python
string_parameters: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersStringParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>]]

string_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#string_parameters QuicksightDashboard#string_parameters}

---

### QuicksightDashboardParametersDateTimeParameters <a name="QuicksightDashboardParametersDateTimeParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardParametersDateTimeParameters(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}.

---

### QuicksightDashboardParametersDecimalParameters <a name="QuicksightDashboardParametersDecimalParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardParametersDecimalParameters(
  name: str,
  values: typing.List[typing.Union[int, float]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}.

---

### QuicksightDashboardParametersIntegerParameters <a name="QuicksightDashboardParametersIntegerParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardParametersIntegerParameters(
  name: str,
  values: typing.List[typing.Union[int, float]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}.

---

### QuicksightDashboardParametersStringParameters <a name="QuicksightDashboardParametersStringParameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardParametersStringParameters(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}.

---

### QuicksightDashboardPermissions <a name="QuicksightDashboardPermissions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardPermissions(
  actions: typing.List[str],
  principal: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions.property.actions">actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#actions QuicksightDashboard#actions}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions.property.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#principal QuicksightDashboard#principal}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#actions QuicksightDashboard#actions}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions.property.principal"></a>

```python
principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#principal QuicksightDashboard#principal}.

---

### QuicksightDashboardSourceEntity <a name="QuicksightDashboardSourceEntity" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardSourceEntity(
  source_template: QuicksightDashboardSourceEntitySourceTemplate = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity.property.sourceTemplate">source_template</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a></code> | source_template block. |

---

##### `source_template`<sup>Optional</sup> <a name="source_template" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity.property.sourceTemplate"></a>

```python
source_template: QuicksightDashboardSourceEntitySourceTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

source_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#source_template QuicksightDashboard#source_template}

---

### QuicksightDashboardSourceEntitySourceTemplate <a name="QuicksightDashboardSourceEntitySourceTemplate" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate(
  arn: str,
  data_set_references: typing.Union[IResolvable, typing.List[QuicksightDashboardSourceEntitySourceTemplateDataSetReferences]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#arn QuicksightDashboard#arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.dataSetReferences">data_set_references</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>]]</code> | data_set_references block. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#arn QuicksightDashboard#arn}.

---

##### `data_set_references`<sup>Required</sup> <a name="data_set_references" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.dataSetReferences"></a>

```python
data_set_references: typing.Union[IResolvable, typing.List[QuicksightDashboardSourceEntitySourceTemplateDataSetReferences]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>]]

data_set_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#data_set_references QuicksightDashboard#data_set_references}

---

### QuicksightDashboardSourceEntitySourceTemplateDataSetReferences <a name="QuicksightDashboardSourceEntitySourceTemplateDataSetReferences" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences(
  data_set_arn: str,
  data_set_placeholder: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetArn">data_set_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#data_set_arn QuicksightDashboard#data_set_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder">data_set_placeholder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#data_set_placeholder QuicksightDashboard#data_set_placeholder}. |

---

##### `data_set_arn`<sup>Required</sup> <a name="data_set_arn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetArn"></a>

```python
data_set_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#data_set_arn QuicksightDashboard#data_set_arn}.

---

##### `data_set_placeholder`<sup>Required</sup> <a name="data_set_placeholder" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder"></a>

```python
data_set_placeholder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#data_set_placeholder QuicksightDashboard#data_set_placeholder}.

---

### QuicksightDashboardTimeouts <a name="QuicksightDashboardTimeouts" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#create QuicksightDashboard#create}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#delete QuicksightDashboard#delete}. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#update QuicksightDashboard#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#create QuicksightDashboard#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#delete QuicksightDashboard#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#update QuicksightDashboard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resetAvailabilityStatus">reset_availability_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_status` <a name="reset_availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resetAvailabilityStatus"></a>

```python
def reset_availability_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatusInput">availability_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatus">availability_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_status_input`<sup>Optional</sup> <a name="availability_status_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatusInput"></a>

```python
availability_status_input: str
```

- *Type:* str

---

##### `availability_status`<sup>Required</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

---


### QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.resetAvailabilityStatus">reset_availability_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_status` <a name="reset_availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.resetAvailabilityStatus"></a>

```python
def reset_availability_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.availabilityStatusInput">availability_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.availabilityStatus">availability_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_status_input`<sup>Optional</sup> <a name="availability_status_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.availabilityStatusInput"></a>

```python
availability_status_input: str
```

- *Type:* str

---

##### `availability_status`<sup>Required</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a>

---


### QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.resetAvailabilityStatus">reset_availability_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_status` <a name="reset_availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.resetAvailabilityStatus"></a>

```python
def reset_availability_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.availabilityStatusInput">availability_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.availabilityStatus">availability_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_status_input`<sup>Optional</sup> <a name="availability_status_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.availabilityStatusInput"></a>

```python
availability_status_input: str
```

- *Type:* str

---

##### `availability_status`<sup>Required</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a>

---


### QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.resetAvailabilityStatus">reset_availability_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_status` <a name="reset_availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.resetAvailabilityStatus"></a>

```python
def reset_availability_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.availabilityStatusInput">availability_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.availabilityStatus">availability_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_status_input`<sup>Optional</sup> <a name="availability_status_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.availabilityStatusInput"></a>

```python
availability_status_input: str
```

- *Type:* str

---

##### `availability_status`<sup>Required</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a>

---


### QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resetAvailabilityStatus">reset_availability_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_status` <a name="reset_availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resetAvailabilityStatus"></a>

```python
def reset_availability_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatusInput">availability_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatus">availability_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_status_input`<sup>Optional</sup> <a name="availability_status_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatusInput"></a>

```python
availability_status_input: str
```

- *Type:* str

---

##### `availability_status`<sup>Required</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDashboardDashboardPublishOptionsExportToCsvOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

---


### QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.resetAvailabilityStatus">reset_availability_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_status` <a name="reset_availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.resetAvailabilityStatus"></a>

```python
def reset_availability_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.availabilityStatusInput">availability_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.availabilityStatus">availability_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_status_input`<sup>Optional</sup> <a name="availability_status_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.availabilityStatusInput"></a>

```python
availability_status_input: str
```

- *Type:* str

---

##### `availability_status`<sup>Required</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a>

---


### QuicksightDashboardDashboardPublishOptionsOutputReference <a name="QuicksightDashboardDashboardPublishOptionsOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putAdHocFilteringOption">put_ad_hoc_filtering_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointDrillUpDownOption">put_data_point_drill_up_down_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointMenuLabelOption">put_data_point_menu_label_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointTooltipOption">put_data_point_tooltip_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportToCsvOption">put_export_to_csv_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportWithHiddenFieldsOption">put_export_with_hidden_fields_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetControlsOption">put_sheet_controls_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetLayoutElementMaximizationOption">put_sheet_layout_element_maximization_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualAxisSortOption">put_visual_axis_sort_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualMenuOption">put_visual_menu_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetAdHocFilteringOption">reset_ad_hoc_filtering_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointDrillUpDownOption">reset_data_point_drill_up_down_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointMenuLabelOption">reset_data_point_menu_label_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointTooltipOption">reset_data_point_tooltip_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetExportToCsvOption">reset_export_to_csv_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetExportWithHiddenFieldsOption">reset_export_with_hidden_fields_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetSheetControlsOption">reset_sheet_controls_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetSheetLayoutElementMaximizationOption">reset_sheet_layout_element_maximization_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetVisualAxisSortOption">reset_visual_axis_sort_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetVisualMenuOption">reset_visual_menu_option</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ad_hoc_filtering_option` <a name="put_ad_hoc_filtering_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putAdHocFilteringOption"></a>

```python
def put_ad_hoc_filtering_option(
  availability_status: str = None
) -> None
```

###### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putAdHocFilteringOption.parameter.availabilityStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

##### `put_data_point_drill_up_down_option` <a name="put_data_point_drill_up_down_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointDrillUpDownOption"></a>

```python
def put_data_point_drill_up_down_option(
  availability_status: str = None
) -> None
```

###### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointDrillUpDownOption.parameter.availabilityStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

##### `put_data_point_menu_label_option` <a name="put_data_point_menu_label_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointMenuLabelOption"></a>

```python
def put_data_point_menu_label_option(
  availability_status: str = None
) -> None
```

###### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointMenuLabelOption.parameter.availabilityStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

##### `put_data_point_tooltip_option` <a name="put_data_point_tooltip_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointTooltipOption"></a>

```python
def put_data_point_tooltip_option(
  availability_status: str = None
) -> None
```

###### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putDataPointTooltipOption.parameter.availabilityStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

##### `put_export_to_csv_option` <a name="put_export_to_csv_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportToCsvOption"></a>

```python
def put_export_to_csv_option(
  availability_status: str = None
) -> None
```

###### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportToCsvOption.parameter.availabilityStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

##### `put_export_with_hidden_fields_option` <a name="put_export_with_hidden_fields_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportWithHiddenFieldsOption"></a>

```python
def put_export_with_hidden_fields_option(
  availability_status: str = None
) -> None
```

###### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportWithHiddenFieldsOption.parameter.availabilityStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

##### `put_sheet_controls_option` <a name="put_sheet_controls_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetControlsOption"></a>

```python
def put_sheet_controls_option(
  visibility_state: str = None
) -> None
```

###### `visibility_state`<sup>Optional</sup> <a name="visibility_state" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetControlsOption.parameter.visibilityState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#visibility_state QuicksightDashboard#visibility_state}.

---

##### `put_sheet_layout_element_maximization_option` <a name="put_sheet_layout_element_maximization_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetLayoutElementMaximizationOption"></a>

```python
def put_sheet_layout_element_maximization_option(
  availability_status: str = None
) -> None
```

###### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetLayoutElementMaximizationOption.parameter.availabilityStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

##### `put_visual_axis_sort_option` <a name="put_visual_axis_sort_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualAxisSortOption"></a>

```python
def put_visual_axis_sort_option(
  availability_status: str = None
) -> None
```

###### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualAxisSortOption.parameter.availabilityStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

##### `put_visual_menu_option` <a name="put_visual_menu_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualMenuOption"></a>

```python
def put_visual_menu_option(
  availability_status: str = None
) -> None
```

###### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putVisualMenuOption.parameter.availabilityStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

##### `reset_ad_hoc_filtering_option` <a name="reset_ad_hoc_filtering_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetAdHocFilteringOption"></a>

```python
def reset_ad_hoc_filtering_option() -> None
```

##### `reset_data_point_drill_up_down_option` <a name="reset_data_point_drill_up_down_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointDrillUpDownOption"></a>

```python
def reset_data_point_drill_up_down_option() -> None
```

##### `reset_data_point_menu_label_option` <a name="reset_data_point_menu_label_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointMenuLabelOption"></a>

```python
def reset_data_point_menu_label_option() -> None
```

##### `reset_data_point_tooltip_option` <a name="reset_data_point_tooltip_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetDataPointTooltipOption"></a>

```python
def reset_data_point_tooltip_option() -> None
```

##### `reset_export_to_csv_option` <a name="reset_export_to_csv_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetExportToCsvOption"></a>

```python
def reset_export_to_csv_option() -> None
```

##### `reset_export_with_hidden_fields_option` <a name="reset_export_with_hidden_fields_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetExportWithHiddenFieldsOption"></a>

```python
def reset_export_with_hidden_fields_option() -> None
```

##### `reset_sheet_controls_option` <a name="reset_sheet_controls_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetSheetControlsOption"></a>

```python
def reset_sheet_controls_option() -> None
```

##### `reset_sheet_layout_element_maximization_option` <a name="reset_sheet_layout_element_maximization_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetSheetLayoutElementMaximizationOption"></a>

```python
def reset_sheet_layout_element_maximization_option() -> None
```

##### `reset_visual_axis_sort_option` <a name="reset_visual_axis_sort_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetVisualAxisSortOption"></a>

```python
def reset_visual_axis_sort_option() -> None
```

##### `reset_visual_menu_option` <a name="reset_visual_menu_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetVisualMenuOption"></a>

```python
def reset_visual_menu_option() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOption">ad_hoc_filtering_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointDrillUpDownOption">data_point_drill_up_down_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointMenuLabelOption">data_point_menu_label_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointTooltipOption">data_point_tooltip_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOption">export_to_csv_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference">QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportWithHiddenFieldsOption">export_with_hidden_fields_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOption">sheet_controls_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference">QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetLayoutElementMaximizationOption">sheet_layout_element_maximization_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualAxisSortOption">visual_axis_sort_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualMenuOption">visual_menu_option</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference">QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOptionInput">ad_hoc_filtering_option_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointDrillUpDownOptionInput">data_point_drill_up_down_option_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointMenuLabelOptionInput">data_point_menu_label_option_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointTooltipOptionInput">data_point_tooltip_option_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOptionInput">export_to_csv_option_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportWithHiddenFieldsOptionInput">export_with_hidden_fields_option_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOptionInput">sheet_controls_option_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetLayoutElementMaximizationOptionInput">sheet_layout_element_maximization_option_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualAxisSortOptionInput">visual_axis_sort_option_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualMenuOptionInput">visual_menu_option_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad_hoc_filtering_option`<sup>Required</sup> <a name="ad_hoc_filtering_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOption"></a>

```python
ad_hoc_filtering_option: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference</a>

---

##### `data_point_drill_up_down_option`<sup>Required</sup> <a name="data_point_drill_up_down_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointDrillUpDownOption"></a>

```python
data_point_drill_up_down_option: QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOptionOutputReference</a>

---

##### `data_point_menu_label_option`<sup>Required</sup> <a name="data_point_menu_label_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointMenuLabelOption"></a>

```python
data_point_menu_label_option: QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOptionOutputReference</a>

---

##### `data_point_tooltip_option`<sup>Required</sup> <a name="data_point_tooltip_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointTooltipOption"></a>

```python
data_point_tooltip_option: QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOptionOutputReference</a>

---

##### `export_to_csv_option`<sup>Required</sup> <a name="export_to_csv_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOption"></a>

```python
export_to_csv_option: QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference">QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference</a>

---

##### `export_with_hidden_fields_option`<sup>Required</sup> <a name="export_with_hidden_fields_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportWithHiddenFieldsOption"></a>

```python
export_with_hidden_fields_option: QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOptionOutputReference</a>

---

##### `sheet_controls_option`<sup>Required</sup> <a name="sheet_controls_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOption"></a>

```python
sheet_controls_option: QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference">QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference</a>

---

##### `sheet_layout_element_maximization_option`<sup>Required</sup> <a name="sheet_layout_element_maximization_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetLayoutElementMaximizationOption"></a>

```python
sheet_layout_element_maximization_option: QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference</a>

---

##### `visual_axis_sort_option`<sup>Required</sup> <a name="visual_axis_sort_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualAxisSortOption"></a>

```python
visual_axis_sort_option: QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference</a>

---

##### `visual_menu_option`<sup>Required</sup> <a name="visual_menu_option" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualMenuOption"></a>

```python
visual_menu_option: QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference">QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference</a>

---

##### `ad_hoc_filtering_option_input`<sup>Optional</sup> <a name="ad_hoc_filtering_option_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOptionInput"></a>

```python
ad_hoc_filtering_option_input: QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

---

##### `data_point_drill_up_down_option_input`<sup>Optional</sup> <a name="data_point_drill_up_down_option_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointDrillUpDownOptionInput"></a>

```python
data_point_drill_up_down_option_input: QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption">QuicksightDashboardDashboardPublishOptionsDataPointDrillUpDownOption</a>

---

##### `data_point_menu_label_option_input`<sup>Optional</sup> <a name="data_point_menu_label_option_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointMenuLabelOptionInput"></a>

```python
data_point_menu_label_option_input: QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption">QuicksightDashboardDashboardPublishOptionsDataPointMenuLabelOption</a>

---

##### `data_point_tooltip_option_input`<sup>Optional</sup> <a name="data_point_tooltip_option_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.dataPointTooltipOptionInput"></a>

```python
data_point_tooltip_option_input: QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption">QuicksightDashboardDashboardPublishOptionsDataPointTooltipOption</a>

---

##### `export_to_csv_option_input`<sup>Optional</sup> <a name="export_to_csv_option_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOptionInput"></a>

```python
export_to_csv_option_input: QuicksightDashboardDashboardPublishOptionsExportToCsvOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

---

##### `export_with_hidden_fields_option_input`<sup>Optional</sup> <a name="export_with_hidden_fields_option_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportWithHiddenFieldsOptionInput"></a>

```python
export_with_hidden_fields_option_input: QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption">QuicksightDashboardDashboardPublishOptionsExportWithHiddenFieldsOption</a>

---

##### `sheet_controls_option_input`<sup>Optional</sup> <a name="sheet_controls_option_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOptionInput"></a>

```python
sheet_controls_option_input: QuicksightDashboardDashboardPublishOptionsSheetControlsOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

---

##### `sheet_layout_element_maximization_option_input`<sup>Optional</sup> <a name="sheet_layout_element_maximization_option_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetLayoutElementMaximizationOptionInput"></a>

```python
sheet_layout_element_maximization_option_input: QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a>

---

##### `visual_axis_sort_option_input`<sup>Optional</sup> <a name="visual_axis_sort_option_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualAxisSortOptionInput"></a>

```python
visual_axis_sort_option_input: QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a>

---

##### `visual_menu_option_input`<sup>Optional</sup> <a name="visual_menu_option_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.visualMenuOptionInput"></a>

```python
visual_menu_option_input: QuicksightDashboardDashboardPublishOptionsVisualMenuOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDashboardDashboardPublishOptions
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

---


### QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resetVisibilityState">reset_visibility_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_visibility_state` <a name="reset_visibility_state" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resetVisibilityState"></a>

```python
def reset_visibility_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityStateInput">visibility_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityState">visibility_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `visibility_state_input`<sup>Optional</sup> <a name="visibility_state_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityStateInput"></a>

```python
visibility_state_input: str
```

- *Type:* str

---

##### `visibility_state`<sup>Required</sup> <a name="visibility_state" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityState"></a>

```python
visibility_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDashboardDashboardPublishOptionsSheetControlsOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

---


### QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.resetAvailabilityStatus">reset_availability_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_status` <a name="reset_availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.resetAvailabilityStatus"></a>

```python
def reset_availability_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.availabilityStatusInput">availability_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.availabilityStatus">availability_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_status_input`<sup>Optional</sup> <a name="availability_status_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.availabilityStatusInput"></a>

```python
availability_status_input: str
```

- *Type:* str

---

##### `availability_status`<sup>Required</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOptionOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption">QuicksightDashboardDashboardPublishOptionsSheetLayoutElementMaximizationOption</a>

---


### QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.resetAvailabilityStatus">reset_availability_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_status` <a name="reset_availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.resetAvailabilityStatus"></a>

```python
def reset_availability_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.availabilityStatusInput">availability_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.availabilityStatus">availability_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_status_input`<sup>Optional</sup> <a name="availability_status_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.availabilityStatusInput"></a>

```python
availability_status_input: str
```

- *Type:* str

---

##### `availability_status`<sup>Required</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOptionOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption">QuicksightDashboardDashboardPublishOptionsVisualAxisSortOption</a>

---


### QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.resetAvailabilityStatus">reset_availability_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_status` <a name="reset_availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.resetAvailabilityStatus"></a>

```python
def reset_availability_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.availabilityStatusInput">availability_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.availabilityStatus">availability_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_status_input`<sup>Optional</sup> <a name="availability_status_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.availabilityStatusInput"></a>

```python
availability_status_input: str
```

- *Type:* str

---

##### `availability_status`<sup>Required</sup> <a name="availability_status" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOptionOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDashboardDashboardPublishOptionsVisualMenuOption
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsVisualMenuOption">QuicksightDashboardDashboardPublishOptionsVisualMenuOption</a>

---


### QuicksightDashboardParametersDateTimeParametersList <a name="QuicksightDashboardParametersDateTimeParametersList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDashboardParametersDateTimeParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersDateTimeParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>]]

---


### QuicksightDashboardParametersDateTimeParametersOutputReference <a name="QuicksightDashboardParametersDateTimeParametersOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QuicksightDashboardParametersDateTimeParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>]

---


### QuicksightDashboardParametersDecimalParametersList <a name="QuicksightDashboardParametersDecimalParametersList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardParametersDecimalParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDashboardParametersDecimalParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersDecimalParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>]]

---


### QuicksightDashboardParametersDecimalParametersOutputReference <a name="QuicksightDashboardParametersDecimalParametersOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QuicksightDashboardParametersDecimalParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>]

---


### QuicksightDashboardParametersIntegerParametersList <a name="QuicksightDashboardParametersIntegerParametersList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardParametersIntegerParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDashboardParametersIntegerParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersIntegerParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>]]

---


### QuicksightDashboardParametersIntegerParametersOutputReference <a name="QuicksightDashboardParametersIntegerParametersOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QuicksightDashboardParametersIntegerParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>]

---


### QuicksightDashboardParametersOutputReference <a name="QuicksightDashboardParametersOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDateTimeParameters">put_date_time_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDecimalParameters">put_decimal_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putIntegerParameters">put_integer_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putStringParameters">put_string_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDateTimeParameters">reset_date_time_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDecimalParameters">reset_decimal_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetIntegerParameters">reset_integer_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetStringParameters">reset_string_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_date_time_parameters` <a name="put_date_time_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDateTimeParameters"></a>

```python
def put_date_time_parameters(
  value: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersDateTimeParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDateTimeParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>]]

---

##### `put_decimal_parameters` <a name="put_decimal_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDecimalParameters"></a>

```python
def put_decimal_parameters(
  value: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersDecimalParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDecimalParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>]]

---

##### `put_integer_parameters` <a name="put_integer_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putIntegerParameters"></a>

```python
def put_integer_parameters(
  value: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersIntegerParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putIntegerParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>]]

---

##### `put_string_parameters` <a name="put_string_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putStringParameters"></a>

```python
def put_string_parameters(
  value: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersStringParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.putStringParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>]]

---

##### `reset_date_time_parameters` <a name="reset_date_time_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDateTimeParameters"></a>

```python
def reset_date_time_parameters() -> None
```

##### `reset_decimal_parameters` <a name="reset_decimal_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDecimalParameters"></a>

```python
def reset_decimal_parameters() -> None
```

##### `reset_integer_parameters` <a name="reset_integer_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetIntegerParameters"></a>

```python
def reset_integer_parameters() -> None
```

##### `reset_string_parameters` <a name="reset_string_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetStringParameters"></a>

```python
def reset_string_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParameters">date_time_parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList">QuicksightDashboardParametersDateTimeParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParameters">decimal_parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList">QuicksightDashboardParametersDecimalParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParameters">integer_parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList">QuicksightDashboardParametersIntegerParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParameters">string_parameters</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList">QuicksightDashboardParametersStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParametersInput">date_time_parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParametersInput">decimal_parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParametersInput">integer_parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParametersInput">string_parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_time_parameters`<sup>Required</sup> <a name="date_time_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParameters"></a>

```python
date_time_parameters: QuicksightDashboardParametersDateTimeParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList">QuicksightDashboardParametersDateTimeParametersList</a>

---

##### `decimal_parameters`<sup>Required</sup> <a name="decimal_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParameters"></a>

```python
decimal_parameters: QuicksightDashboardParametersDecimalParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList">QuicksightDashboardParametersDecimalParametersList</a>

---

##### `integer_parameters`<sup>Required</sup> <a name="integer_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParameters"></a>

```python
integer_parameters: QuicksightDashboardParametersIntegerParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList">QuicksightDashboardParametersIntegerParametersList</a>

---

##### `string_parameters`<sup>Required</sup> <a name="string_parameters" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParameters"></a>

```python
string_parameters: QuicksightDashboardParametersStringParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList">QuicksightDashboardParametersStringParametersList</a>

---

##### `date_time_parameters_input`<sup>Optional</sup> <a name="date_time_parameters_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParametersInput"></a>

```python
date_time_parameters_input: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersDateTimeParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters">QuicksightDashboardParametersDateTimeParameters</a>]]

---

##### `decimal_parameters_input`<sup>Optional</sup> <a name="decimal_parameters_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParametersInput"></a>

```python
decimal_parameters_input: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersDecimalParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersDecimalParameters">QuicksightDashboardParametersDecimalParameters</a>]]

---

##### `integer_parameters_input`<sup>Optional</sup> <a name="integer_parameters_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParametersInput"></a>

```python
integer_parameters_input: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersIntegerParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersIntegerParameters">QuicksightDashboardParametersIntegerParameters</a>]]

---

##### `string_parameters_input`<sup>Optional</sup> <a name="string_parameters_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParametersInput"></a>

```python
string_parameters_input: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersStringParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDashboardParameters
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

---


### QuicksightDashboardParametersStringParametersList <a name="QuicksightDashboardParametersStringParametersList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardParametersStringParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDashboardParametersStringParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[QuicksightDashboardParametersStringParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>]]

---


### QuicksightDashboardParametersStringParametersOutputReference <a name="QuicksightDashboardParametersStringParametersOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QuicksightDashboardParametersStringParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardParametersStringParameters">QuicksightDashboardParametersStringParameters</a>]

---


### QuicksightDashboardPermissionsList <a name="QuicksightDashboardPermissionsList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDashboardPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[QuicksightDashboardPermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>]]

---


### QuicksightDashboardPermissionsOutputReference <a name="QuicksightDashboardPermissionsOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QuicksightDashboardPermissions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardPermissions">QuicksightDashboardPermissions</a>]

---


### QuicksightDashboardSourceEntityOutputReference <a name="QuicksightDashboardSourceEntityOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardSourceEntityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.putSourceTemplate">put_source_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resetSourceTemplate">reset_source_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_template` <a name="put_source_template" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.putSourceTemplate"></a>

```python
def put_source_template(
  arn: str,
  data_set_references: typing.Union[IResolvable, typing.List[QuicksightDashboardSourceEntitySourceTemplateDataSetReferences]]
) -> None
```

###### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.putSourceTemplate.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#arn QuicksightDashboard#arn}.

---

###### `data_set_references`<sup>Required</sup> <a name="data_set_references" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.putSourceTemplate.parameter.dataSetReferences"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>]]

data_set_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/quicksight_dashboard#data_set_references QuicksightDashboard#data_set_references}

---

##### `reset_source_template` <a name="reset_source_template" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resetSourceTemplate"></a>

```python
def reset_source_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplate">source_template</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference">QuicksightDashboardSourceEntitySourceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplateInput">source_template_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_template`<sup>Required</sup> <a name="source_template" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplate"></a>

```python
source_template: QuicksightDashboardSourceEntitySourceTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference">QuicksightDashboardSourceEntitySourceTemplateOutputReference</a>

---

##### `source_template_input`<sup>Optional</sup> <a name="source_template_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplateInput"></a>

```python
source_template_input: QuicksightDashboardSourceEntitySourceTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDashboardSourceEntity
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

---


### QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList <a name="QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[QuicksightDashboardSourceEntitySourceTemplateDataSetReferences]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>]]

---


### QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference <a name="QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput">data_set_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput">data_set_placeholder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn">data_set_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder">data_set_placeholder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_set_arn_input`<sup>Optional</sup> <a name="data_set_arn_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput"></a>

```python
data_set_arn_input: str
```

- *Type:* str

---

##### `data_set_placeholder_input`<sup>Optional</sup> <a name="data_set_placeholder_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput"></a>

```python
data_set_placeholder_input: str
```

- *Type:* str

---

##### `data_set_arn`<sup>Required</sup> <a name="data_set_arn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn"></a>

```python
data_set_arn: str
```

- *Type:* str

---

##### `data_set_placeholder`<sup>Required</sup> <a name="data_set_placeholder" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder"></a>

```python
data_set_placeholder: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QuicksightDashboardSourceEntitySourceTemplateDataSetReferences]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>]

---


### QuicksightDashboardSourceEntitySourceTemplateOutputReference <a name="QuicksightDashboardSourceEntitySourceTemplateOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.putDataSetReferences">put_data_set_references</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_set_references` <a name="put_data_set_references" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.putDataSetReferences"></a>

```python
def put_data_set_references(
  value: typing.Union[IResolvable, typing.List[QuicksightDashboardSourceEntitySourceTemplateDataSetReferences]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.putDataSetReferences.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferences">data_set_references</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList">QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput">data_set_references_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_set_references`<sup>Required</sup> <a name="data_set_references" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferences"></a>

```python
data_set_references: QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList">QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `data_set_references_input`<sup>Optional</sup> <a name="data_set_references_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput"></a>

```python
data_set_references_input: typing.Union[IResolvable, typing.List[QuicksightDashboardSourceEntitySourceTemplateDataSetReferences]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences">QuicksightDashboardSourceEntitySourceTemplateDataSetReferences</a>]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightDashboardSourceEntitySourceTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

---


### QuicksightDashboardTimeoutsOutputReference <a name="QuicksightDashboardTimeoutsOutputReference" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_dashboard

quicksightDashboard.QuicksightDashboardTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QuicksightDashboardTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightDashboard.QuicksightDashboardTimeouts">QuicksightDashboardTimeouts</a>]

---



