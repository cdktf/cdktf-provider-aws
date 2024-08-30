# `quicksightTheme` Submodule <a name="`quicksightTheme` Submodule" id="@cdktf/provider-aws.quicksightTheme"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightTheme <a name="QuicksightTheme" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme aws_quicksight_theme}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightTheme(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_theme_id: str,
  name: str,
  theme_id: str,
  aws_account_id: str = None,
  configuration: QuicksightThemeConfiguration = None,
  id: str = None,
  permissions: typing.Union[IResolvable, typing.List[QuicksightThemePermissions]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: QuicksightThemeTimeouts = None,
  version_description: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.baseThemeId">base_theme_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#base_theme_id QuicksightTheme#base_theme_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#name QuicksightTheme#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.themeId">theme_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#theme_id QuicksightTheme#theme_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#aws_account_id QuicksightTheme#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#id QuicksightTheme#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.permissions">permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]]</code> | permissions block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#tags QuicksightTheme#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#tags_all QuicksightTheme#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts">QuicksightThemeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.versionDescription">version_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#version_description QuicksightTheme#version_description}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_theme_id`<sup>Required</sup> <a name="base_theme_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.baseThemeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#base_theme_id QuicksightTheme#base_theme_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#name QuicksightTheme#name}.

---

##### `theme_id`<sup>Required</sup> <a name="theme_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.themeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#theme_id QuicksightTheme#theme_id}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#aws_account_id QuicksightTheme#aws_account_id}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#configuration QuicksightTheme#configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#id QuicksightTheme#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.permissions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#permissions QuicksightTheme#permissions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#tags QuicksightTheme#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#tags_all QuicksightTheme#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts">QuicksightThemeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#timeouts QuicksightTheme#timeouts}

---

##### `version_description`<sup>Optional</sup> <a name="version_description" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.Initializer.parameter.versionDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#version_description QuicksightTheme#version_description}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putPermissions">put_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetVersionDescription">reset_version_description</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putConfiguration"></a>

```python
def put_configuration(
  data_color_palette: QuicksightThemeConfigurationDataColorPalette = None,
  sheet: QuicksightThemeConfigurationSheet = None,
  typography: QuicksightThemeConfigurationTypography = None,
  ui_color_palette: QuicksightThemeConfigurationUiColorPalette = None
) -> None
```

###### `data_color_palette`<sup>Optional</sup> <a name="data_color_palette" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putConfiguration.parameter.dataColorPalette"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a>

data_color_palette block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#data_color_palette QuicksightTheme#data_color_palette}

---

###### `sheet`<sup>Optional</sup> <a name="sheet" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putConfiguration.parameter.sheet"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a>

sheet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#sheet QuicksightTheme#sheet}

---

###### `typography`<sup>Optional</sup> <a name="typography" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putConfiguration.parameter.typography"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a>

typography block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#typography QuicksightTheme#typography}

---

###### `ui_color_palette`<sup>Optional</sup> <a name="ui_color_palette" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putConfiguration.parameter.uiColorPalette"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a>

ui_color_palette block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#ui_color_palette QuicksightTheme#ui_color_palette}

---

##### `put_permissions` <a name="put_permissions" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putPermissions"></a>

```python
def put_permissions(
  value: typing.Union[IResolvable, typing.List[QuicksightThemePermissions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putPermissions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#create QuicksightTheme#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#delete QuicksightTheme#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#update QuicksightTheme#update}.

---

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version_description` <a name="reset_version_description" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.resetVersionDescription"></a>

```python
def reset_version_description() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a QuicksightTheme resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightTheme.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightTheme.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightTheme.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightTheme.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a QuicksightTheme resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QuicksightTheme to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QuicksightTheme that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightTheme to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference">QuicksightThemeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList">QuicksightThemePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference">QuicksightThemeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.versionNumber">version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.baseThemeIdInput">base_theme_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.configurationInput">configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.permissionsInput">permissions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.themeIdInput">theme_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts">QuicksightThemeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.versionDescriptionInput">version_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.baseThemeId">base_theme_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.themeId">theme_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.versionDescription">version_description</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.configuration"></a>

```python
configuration: QuicksightThemeConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference">QuicksightThemeConfigurationOutputReference</a>

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.permissions"></a>

```python
permissions: QuicksightThemePermissionsList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList">QuicksightThemePermissionsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.timeouts"></a>

```python
timeouts: QuicksightThemeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference">QuicksightThemeTimeoutsOutputReference</a>

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.versionNumber"></a>

```python
version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `base_theme_id_input`<sup>Optional</sup> <a name="base_theme_id_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.baseThemeIdInput"></a>

```python
base_theme_id_input: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.configurationInput"></a>

```python
configuration_input: QuicksightThemeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.permissionsInput"></a>

```python
permissions_input: typing.Union[IResolvable, typing.List[QuicksightThemePermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `theme_id_input`<sup>Optional</sup> <a name="theme_id_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.themeIdInput"></a>

```python
theme_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, QuicksightThemeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts">QuicksightThemeTimeouts</a>]

---

##### `version_description_input`<sup>Optional</sup> <a name="version_description_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.versionDescriptionInput"></a>

```python
version_description_input: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `base_theme_id`<sup>Required</sup> <a name="base_theme_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.baseThemeId"></a>

```python
base_theme_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `theme_id`<sup>Required</sup> <a name="theme_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.themeId"></a>

```python
theme_id: str
```

- *Type:* str

---

##### `version_description`<sup>Required</sup> <a name="version_description" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightTheme.QuicksightTheme.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightThemeConfig <a name="QuicksightThemeConfig" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_theme_id: str,
  name: str,
  theme_id: str,
  aws_account_id: str = None,
  configuration: QuicksightThemeConfiguration = None,
  id: str = None,
  permissions: typing.Union[IResolvable, typing.List[QuicksightThemePermissions]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: QuicksightThemeTimeouts = None,
  version_description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.baseThemeId">base_theme_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#base_theme_id QuicksightTheme#base_theme_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#name QuicksightTheme#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.themeId">theme_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#theme_id QuicksightTheme#theme_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#aws_account_id QuicksightTheme#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#id QuicksightTheme#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.permissions">permissions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]]</code> | permissions block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#tags QuicksightTheme#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#tags_all QuicksightTheme#tags_all}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts">QuicksightThemeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.versionDescription">version_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#version_description QuicksightTheme#version_description}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_theme_id`<sup>Required</sup> <a name="base_theme_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.baseThemeId"></a>

```python
base_theme_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#base_theme_id QuicksightTheme#base_theme_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#name QuicksightTheme#name}.

---

##### `theme_id`<sup>Required</sup> <a name="theme_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.themeId"></a>

```python
theme_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#theme_id QuicksightTheme#theme_id}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#aws_account_id QuicksightTheme#aws_account_id}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.configuration"></a>

```python
configuration: QuicksightThemeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#configuration QuicksightTheme#configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#id QuicksightTheme#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.permissions"></a>

```python
permissions: typing.Union[IResolvable, typing.List[QuicksightThemePermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#permissions QuicksightTheme#permissions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#tags QuicksightTheme#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#tags_all QuicksightTheme#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.timeouts"></a>

```python
timeouts: QuicksightThemeTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts">QuicksightThemeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#timeouts QuicksightTheme#timeouts}

---

##### `version_description`<sup>Optional</sup> <a name="version_description" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfig.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#version_description QuicksightTheme#version_description}.

---

### QuicksightThemeConfiguration <a name="QuicksightThemeConfiguration" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfiguration(
  data_color_palette: QuicksightThemeConfigurationDataColorPalette = None,
  sheet: QuicksightThemeConfigurationSheet = None,
  typography: QuicksightThemeConfigurationTypography = None,
  ui_color_palette: QuicksightThemeConfigurationUiColorPalette = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.property.dataColorPalette">data_color_palette</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a></code> | data_color_palette block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.property.sheet">sheet</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a></code> | sheet block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.property.typography">typography</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a></code> | typography block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.property.uiColorPalette">ui_color_palette</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a></code> | ui_color_palette block. |

---

##### `data_color_palette`<sup>Optional</sup> <a name="data_color_palette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.property.dataColorPalette"></a>

```python
data_color_palette: QuicksightThemeConfigurationDataColorPalette
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a>

data_color_palette block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#data_color_palette QuicksightTheme#data_color_palette}

---

##### `sheet`<sup>Optional</sup> <a name="sheet" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.property.sheet"></a>

```python
sheet: QuicksightThemeConfigurationSheet
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a>

sheet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#sheet QuicksightTheme#sheet}

---

##### `typography`<sup>Optional</sup> <a name="typography" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.property.typography"></a>

```python
typography: QuicksightThemeConfigurationTypography
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a>

typography block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#typography QuicksightTheme#typography}

---

##### `ui_color_palette`<sup>Optional</sup> <a name="ui_color_palette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration.property.uiColorPalette"></a>

```python
ui_color_palette: QuicksightThemeConfigurationUiColorPalette
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a>

ui_color_palette block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#ui_color_palette QuicksightTheme#ui_color_palette}

---

### QuicksightThemeConfigurationDataColorPalette <a name="QuicksightThemeConfigurationDataColorPalette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationDataColorPalette(
  colors: typing.List[str] = None,
  empty_fill_color: str = None,
  min_max_gradient: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.colors">colors</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#colors QuicksightTheme#colors}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.emptyFillColor">empty_fill_color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#empty_fill_color QuicksightTheme#empty_fill_color}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.minMaxGradient">min_max_gradient</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#min_max_gradient QuicksightTheme#min_max_gradient}. |

---

##### `colors`<sup>Optional</sup> <a name="colors" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.colors"></a>

```python
colors: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#colors QuicksightTheme#colors}.

---

##### `empty_fill_color`<sup>Optional</sup> <a name="empty_fill_color" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.emptyFillColor"></a>

```python
empty_fill_color: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#empty_fill_color QuicksightTheme#empty_fill_color}.

---

##### `min_max_gradient`<sup>Optional</sup> <a name="min_max_gradient" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette.property.minMaxGradient"></a>

```python
min_max_gradient: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#min_max_gradient QuicksightTheme#min_max_gradient}.

---

### QuicksightThemeConfigurationSheet <a name="QuicksightThemeConfigurationSheet" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheet(
  tile: QuicksightThemeConfigurationSheetTile = None,
  tile_layout: QuicksightThemeConfigurationSheetTileLayout = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet.property.tile">tile</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a></code> | tile block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet.property.tileLayout">tile_layout</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a></code> | tile_layout block. |

---

##### `tile`<sup>Optional</sup> <a name="tile" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet.property.tile"></a>

```python
tile: QuicksightThemeConfigurationSheetTile
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a>

tile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#tile QuicksightTheme#tile}

---

##### `tile_layout`<sup>Optional</sup> <a name="tile_layout" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet.property.tileLayout"></a>

```python
tile_layout: QuicksightThemeConfigurationSheetTileLayout
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a>

tile_layout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#tile_layout QuicksightTheme#tile_layout}

---

### QuicksightThemeConfigurationSheetTile <a name="QuicksightThemeConfigurationSheetTile" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTile(
  border: QuicksightThemeConfigurationSheetTileBorder = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile.property.border">border</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a></code> | border block. |

---

##### `border`<sup>Optional</sup> <a name="border" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile.property.border"></a>

```python
border: QuicksightThemeConfigurationSheetTileBorder
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a>

border block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#border QuicksightTheme#border}

---

### QuicksightThemeConfigurationSheetTileBorder <a name="QuicksightThemeConfigurationSheetTileBorder" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileBorder(
  show: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder.property.show">show</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#show QuicksightTheme#show}. |

---

##### `show`<sup>Optional</sup> <a name="show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder.property.show"></a>

```python
show: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#show QuicksightTheme#show}.

---

### QuicksightThemeConfigurationSheetTileLayout <a name="QuicksightThemeConfigurationSheetTileLayout" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileLayout(
  gutter: QuicksightThemeConfigurationSheetTileLayoutGutter = None,
  margin: QuicksightThemeConfigurationSheetTileLayoutMargin = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.property.gutter">gutter</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a></code> | gutter block. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.property.margin">margin</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a></code> | margin block. |

---

##### `gutter`<sup>Optional</sup> <a name="gutter" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.property.gutter"></a>

```python
gutter: QuicksightThemeConfigurationSheetTileLayoutGutter
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a>

gutter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#gutter QuicksightTheme#gutter}

---

##### `margin`<sup>Optional</sup> <a name="margin" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout.property.margin"></a>

```python
margin: QuicksightThemeConfigurationSheetTileLayoutMargin
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a>

margin block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#margin QuicksightTheme#margin}

---

### QuicksightThemeConfigurationSheetTileLayoutGutter <a name="QuicksightThemeConfigurationSheetTileLayoutGutter" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter(
  show: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter.property.show">show</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#show QuicksightTheme#show}. |

---

##### `show`<sup>Optional</sup> <a name="show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter.property.show"></a>

```python
show: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#show QuicksightTheme#show}.

---

### QuicksightThemeConfigurationSheetTileLayoutMargin <a name="QuicksightThemeConfigurationSheetTileLayoutMargin" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin(
  show: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin.property.show">show</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#show QuicksightTheme#show}. |

---

##### `show`<sup>Optional</sup> <a name="show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin.property.show"></a>

```python
show: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#show QuicksightTheme#show}.

---

### QuicksightThemeConfigurationTypography <a name="QuicksightThemeConfigurationTypography" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationTypography(
  font_families: typing.Union[IResolvable, typing.List[QuicksightThemeConfigurationTypographyFontFamilies]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography.property.fontFamilies">font_families</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]]</code> | font_families block. |

---

##### `font_families`<sup>Optional</sup> <a name="font_families" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography.property.fontFamilies"></a>

```python
font_families: typing.Union[IResolvable, typing.List[QuicksightThemeConfigurationTypographyFontFamilies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]]

font_families block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#font_families QuicksightTheme#font_families}

---

### QuicksightThemeConfigurationTypographyFontFamilies <a name="QuicksightThemeConfigurationTypographyFontFamilies" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies(
  font_family: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies.property.fontFamily">font_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}. |

---

##### `font_family`<sup>Optional</sup> <a name="font_family" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies.property.fontFamily"></a>

```python
font_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#font_family QuicksightTheme#font_family}.

---

### QuicksightThemeConfigurationUiColorPalette <a name="QuicksightThemeConfigurationUiColorPalette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationUiColorPalette(
  accent: str = None,
  accent_foreground: str = None,
  danger: str = None,
  danger_foreground: str = None,
  dimension: str = None,
  dimension_foreground: str = None,
  measure: str = None,
  measure_foreground: str = None,
  primary_background: str = None,
  primary_foreground: str = None,
  secondary_background: str = None,
  secondary_foreground: str = None,
  success: str = None,
  success_foreground: str = None,
  warning: str = None,
  warning_foreground: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.accent">accent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#accent QuicksightTheme#accent}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.accentForeground">accent_foreground</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#accent_foreground QuicksightTheme#accent_foreground}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.danger">danger</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#danger QuicksightTheme#danger}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dangerForeground">danger_foreground</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#danger_foreground QuicksightTheme#danger_foreground}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dimension">dimension</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#dimension QuicksightTheme#dimension}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dimensionForeground">dimension_foreground</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#dimension_foreground QuicksightTheme#dimension_foreground}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.measure">measure</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#measure QuicksightTheme#measure}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.measureForeground">measure_foreground</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#measure_foreground QuicksightTheme#measure_foreground}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.primaryBackground">primary_background</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#primary_background QuicksightTheme#primary_background}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.primaryForeground">primary_foreground</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#primary_foreground QuicksightTheme#primary_foreground}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.secondaryBackground">secondary_background</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#secondary_background QuicksightTheme#secondary_background}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.secondaryForeground">secondary_foreground</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#secondary_foreground QuicksightTheme#secondary_foreground}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.success">success</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#success QuicksightTheme#success}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.successForeground">success_foreground</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#success_foreground QuicksightTheme#success_foreground}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.warning">warning</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#warning QuicksightTheme#warning}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.warningForeground">warning_foreground</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#warning_foreground QuicksightTheme#warning_foreground}. |

---

##### `accent`<sup>Optional</sup> <a name="accent" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.accent"></a>

```python
accent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#accent QuicksightTheme#accent}.

---

##### `accent_foreground`<sup>Optional</sup> <a name="accent_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.accentForeground"></a>

```python
accent_foreground: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#accent_foreground QuicksightTheme#accent_foreground}.

---

##### `danger`<sup>Optional</sup> <a name="danger" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.danger"></a>

```python
danger: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#danger QuicksightTheme#danger}.

---

##### `danger_foreground`<sup>Optional</sup> <a name="danger_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dangerForeground"></a>

```python
danger_foreground: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#danger_foreground QuicksightTheme#danger_foreground}.

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dimension"></a>

```python
dimension: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#dimension QuicksightTheme#dimension}.

---

##### `dimension_foreground`<sup>Optional</sup> <a name="dimension_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.dimensionForeground"></a>

```python
dimension_foreground: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#dimension_foreground QuicksightTheme#dimension_foreground}.

---

##### `measure`<sup>Optional</sup> <a name="measure" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.measure"></a>

```python
measure: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#measure QuicksightTheme#measure}.

---

##### `measure_foreground`<sup>Optional</sup> <a name="measure_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.measureForeground"></a>

```python
measure_foreground: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#measure_foreground QuicksightTheme#measure_foreground}.

---

##### `primary_background`<sup>Optional</sup> <a name="primary_background" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.primaryBackground"></a>

```python
primary_background: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#primary_background QuicksightTheme#primary_background}.

---

##### `primary_foreground`<sup>Optional</sup> <a name="primary_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.primaryForeground"></a>

```python
primary_foreground: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#primary_foreground QuicksightTheme#primary_foreground}.

---

##### `secondary_background`<sup>Optional</sup> <a name="secondary_background" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.secondaryBackground"></a>

```python
secondary_background: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#secondary_background QuicksightTheme#secondary_background}.

---

##### `secondary_foreground`<sup>Optional</sup> <a name="secondary_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.secondaryForeground"></a>

```python
secondary_foreground: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#secondary_foreground QuicksightTheme#secondary_foreground}.

---

##### `success`<sup>Optional</sup> <a name="success" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.success"></a>

```python
success: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#success QuicksightTheme#success}.

---

##### `success_foreground`<sup>Optional</sup> <a name="success_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.successForeground"></a>

```python
success_foreground: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#success_foreground QuicksightTheme#success_foreground}.

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.warning"></a>

```python
warning: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#warning QuicksightTheme#warning}.

---

##### `warning_foreground`<sup>Optional</sup> <a name="warning_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette.property.warningForeground"></a>

```python
warning_foreground: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#warning_foreground QuicksightTheme#warning_foreground}.

---

### QuicksightThemePermissions <a name="QuicksightThemePermissions" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemePermissions(
  actions: typing.List[str],
  principal: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions.property.actions">actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#actions QuicksightTheme#actions}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions.property.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#principal QuicksightTheme#principal}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#actions QuicksightTheme#actions}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions.property.principal"></a>

```python
principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#principal QuicksightTheme#principal}.

---

### QuicksightThemeTimeouts <a name="QuicksightThemeTimeouts" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#create QuicksightTheme#create}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#delete QuicksightTheme#delete}. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#update QuicksightTheme#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#create QuicksightTheme#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#delete QuicksightTheme#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#update QuicksightTheme#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightThemeConfigurationDataColorPaletteOutputReference <a name="QuicksightThemeConfigurationDataColorPaletteOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetColors">reset_colors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetEmptyFillColor">reset_empty_fill_color</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetMinMaxGradient">reset_min_max_gradient</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_colors` <a name="reset_colors" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetColors"></a>

```python
def reset_colors() -> None
```

##### `reset_empty_fill_color` <a name="reset_empty_fill_color" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetEmptyFillColor"></a>

```python
def reset_empty_fill_color() -> None
```

##### `reset_min_max_gradient` <a name="reset_min_max_gradient" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.resetMinMaxGradient"></a>

```python
def reset_min_max_gradient() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.colorsInput">colors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColorInput">empty_fill_color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradientInput">min_max_gradient_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.colors">colors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColor">empty_fill_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradient">min_max_gradient</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `colors_input`<sup>Optional</sup> <a name="colors_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.colorsInput"></a>

```python
colors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `empty_fill_color_input`<sup>Optional</sup> <a name="empty_fill_color_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColorInput"></a>

```python
empty_fill_color_input: str
```

- *Type:* str

---

##### `min_max_gradient_input`<sup>Optional</sup> <a name="min_max_gradient_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradientInput"></a>

```python
min_max_gradient_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `colors`<sup>Required</sup> <a name="colors" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.colors"></a>

```python
colors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `empty_fill_color`<sup>Required</sup> <a name="empty_fill_color" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColor"></a>

```python
empty_fill_color: str
```

- *Type:* str

---

##### `min_max_gradient`<sup>Required</sup> <a name="min_max_gradient" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradient"></a>

```python
min_max_gradient: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeConfigurationDataColorPalette
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a>

---


### QuicksightThemeConfigurationOutputReference <a name="QuicksightThemeConfigurationOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putDataColorPalette">put_data_color_palette</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putSheet">put_sheet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putTypography">put_typography</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette">put_ui_color_palette</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetDataColorPalette">reset_data_color_palette</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetSheet">reset_sheet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetTypography">reset_typography</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetUiColorPalette">reset_ui_color_palette</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_color_palette` <a name="put_data_color_palette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putDataColorPalette"></a>

```python
def put_data_color_palette(
  colors: typing.List[str] = None,
  empty_fill_color: str = None,
  min_max_gradient: typing.List[str] = None
) -> None
```

###### `colors`<sup>Optional</sup> <a name="colors" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putDataColorPalette.parameter.colors"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#colors QuicksightTheme#colors}.

---

###### `empty_fill_color`<sup>Optional</sup> <a name="empty_fill_color" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putDataColorPalette.parameter.emptyFillColor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#empty_fill_color QuicksightTheme#empty_fill_color}.

---

###### `min_max_gradient`<sup>Optional</sup> <a name="min_max_gradient" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putDataColorPalette.parameter.minMaxGradient"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#min_max_gradient QuicksightTheme#min_max_gradient}.

---

##### `put_sheet` <a name="put_sheet" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putSheet"></a>

```python
def put_sheet(
  tile: QuicksightThemeConfigurationSheetTile = None,
  tile_layout: QuicksightThemeConfigurationSheetTileLayout = None
) -> None
```

###### `tile`<sup>Optional</sup> <a name="tile" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putSheet.parameter.tile"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a>

tile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#tile QuicksightTheme#tile}

---

###### `tile_layout`<sup>Optional</sup> <a name="tile_layout" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putSheet.parameter.tileLayout"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a>

tile_layout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#tile_layout QuicksightTheme#tile_layout}

---

##### `put_typography` <a name="put_typography" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putTypography"></a>

```python
def put_typography(
  font_families: typing.Union[IResolvable, typing.List[QuicksightThemeConfigurationTypographyFontFamilies]] = None
) -> None
```

###### `font_families`<sup>Optional</sup> <a name="font_families" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putTypography.parameter.fontFamilies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]]

font_families block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#font_families QuicksightTheme#font_families}

---

##### `put_ui_color_palette` <a name="put_ui_color_palette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette"></a>

```python
def put_ui_color_palette(
  accent: str = None,
  accent_foreground: str = None,
  danger: str = None,
  danger_foreground: str = None,
  dimension: str = None,
  dimension_foreground: str = None,
  measure: str = None,
  measure_foreground: str = None,
  primary_background: str = None,
  primary_foreground: str = None,
  secondary_background: str = None,
  secondary_foreground: str = None,
  success: str = None,
  success_foreground: str = None,
  warning: str = None,
  warning_foreground: str = None
) -> None
```

###### `accent`<sup>Optional</sup> <a name="accent" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.accent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#accent QuicksightTheme#accent}.

---

###### `accent_foreground`<sup>Optional</sup> <a name="accent_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.accentForeground"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#accent_foreground QuicksightTheme#accent_foreground}.

---

###### `danger`<sup>Optional</sup> <a name="danger" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.danger"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#danger QuicksightTheme#danger}.

---

###### `danger_foreground`<sup>Optional</sup> <a name="danger_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.dangerForeground"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#danger_foreground QuicksightTheme#danger_foreground}.

---

###### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.dimension"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#dimension QuicksightTheme#dimension}.

---

###### `dimension_foreground`<sup>Optional</sup> <a name="dimension_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.dimensionForeground"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#dimension_foreground QuicksightTheme#dimension_foreground}.

---

###### `measure`<sup>Optional</sup> <a name="measure" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.measure"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#measure QuicksightTheme#measure}.

---

###### `measure_foreground`<sup>Optional</sup> <a name="measure_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.measureForeground"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#measure_foreground QuicksightTheme#measure_foreground}.

---

###### `primary_background`<sup>Optional</sup> <a name="primary_background" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.primaryBackground"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#primary_background QuicksightTheme#primary_background}.

---

###### `primary_foreground`<sup>Optional</sup> <a name="primary_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.primaryForeground"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#primary_foreground QuicksightTheme#primary_foreground}.

---

###### `secondary_background`<sup>Optional</sup> <a name="secondary_background" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.secondaryBackground"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#secondary_background QuicksightTheme#secondary_background}.

---

###### `secondary_foreground`<sup>Optional</sup> <a name="secondary_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.secondaryForeground"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#secondary_foreground QuicksightTheme#secondary_foreground}.

---

###### `success`<sup>Optional</sup> <a name="success" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.success"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#success QuicksightTheme#success}.

---

###### `success_foreground`<sup>Optional</sup> <a name="success_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.successForeground"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#success_foreground QuicksightTheme#success_foreground}.

---

###### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.warning"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#warning QuicksightTheme#warning}.

---

###### `warning_foreground`<sup>Optional</sup> <a name="warning_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.putUiColorPalette.parameter.warningForeground"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#warning_foreground QuicksightTheme#warning_foreground}.

---

##### `reset_data_color_palette` <a name="reset_data_color_palette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetDataColorPalette"></a>

```python
def reset_data_color_palette() -> None
```

##### `reset_sheet` <a name="reset_sheet" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetSheet"></a>

```python
def reset_sheet() -> None
```

##### `reset_typography` <a name="reset_typography" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetTypography"></a>

```python
def reset_typography() -> None
```

##### `reset_ui_color_palette` <a name="reset_ui_color_palette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.resetUiColorPalette"></a>

```python
def reset_ui_color_palette() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.dataColorPalette">data_color_palette</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference">QuicksightThemeConfigurationDataColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.sheet">sheet</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference">QuicksightThemeConfigurationSheetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference">QuicksightThemeConfigurationTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.uiColorPalette">ui_color_palette</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference">QuicksightThemeConfigurationUiColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.dataColorPaletteInput">data_color_palette_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.sheetInput">sheet_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.typographyInput">typography_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.uiColorPaletteInput">ui_color_palette_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_color_palette`<sup>Required</sup> <a name="data_color_palette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.dataColorPalette"></a>

```python
data_color_palette: QuicksightThemeConfigurationDataColorPaletteOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPaletteOutputReference">QuicksightThemeConfigurationDataColorPaletteOutputReference</a>

---

##### `sheet`<sup>Required</sup> <a name="sheet" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.sheet"></a>

```python
sheet: QuicksightThemeConfigurationSheetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference">QuicksightThemeConfigurationSheetOutputReference</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.typography"></a>

```python
typography: QuicksightThemeConfigurationTypographyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference">QuicksightThemeConfigurationTypographyOutputReference</a>

---

##### `ui_color_palette`<sup>Required</sup> <a name="ui_color_palette" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.uiColorPalette"></a>

```python
ui_color_palette: QuicksightThemeConfigurationUiColorPaletteOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference">QuicksightThemeConfigurationUiColorPaletteOutputReference</a>

---

##### `data_color_palette_input`<sup>Optional</sup> <a name="data_color_palette_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.dataColorPaletteInput"></a>

```python
data_color_palette_input: QuicksightThemeConfigurationDataColorPalette
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationDataColorPalette">QuicksightThemeConfigurationDataColorPalette</a>

---

##### `sheet_input`<sup>Optional</sup> <a name="sheet_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.sheetInput"></a>

```python
sheet_input: QuicksightThemeConfigurationSheet
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a>

---

##### `typography_input`<sup>Optional</sup> <a name="typography_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.typographyInput"></a>

```python
typography_input: QuicksightThemeConfigurationTypography
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a>

---

##### `ui_color_palette_input`<sup>Optional</sup> <a name="ui_color_palette_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.uiColorPaletteInput"></a>

```python
ui_color_palette_input: QuicksightThemeConfigurationUiColorPalette
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfiguration">QuicksightThemeConfiguration</a>

---


### QuicksightThemeConfigurationSheetOutputReference <a name="QuicksightThemeConfigurationSheetOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTile">put_tile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTileLayout">put_tile_layout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resetTile">reset_tile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resetTileLayout">reset_tile_layout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tile` <a name="put_tile" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTile"></a>

```python
def put_tile(
  border: QuicksightThemeConfigurationSheetTileBorder = None
) -> None
```

###### `border`<sup>Optional</sup> <a name="border" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTile.parameter.border"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a>

border block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#border QuicksightTheme#border}

---

##### `put_tile_layout` <a name="put_tile_layout" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTileLayout"></a>

```python
def put_tile_layout(
  gutter: QuicksightThemeConfigurationSheetTileLayoutGutter = None,
  margin: QuicksightThemeConfigurationSheetTileLayoutMargin = None
) -> None
```

###### `gutter`<sup>Optional</sup> <a name="gutter" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTileLayout.parameter.gutter"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a>

gutter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#gutter QuicksightTheme#gutter}

---

###### `margin`<sup>Optional</sup> <a name="margin" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.putTileLayout.parameter.margin"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a>

margin block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#margin QuicksightTheme#margin}

---

##### `reset_tile` <a name="reset_tile" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resetTile"></a>

```python
def reset_tile() -> None
```

##### `reset_tile_layout` <a name="reset_tile_layout" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.resetTileLayout"></a>

```python
def reset_tile_layout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tile">tile</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference">QuicksightThemeConfigurationSheetTileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileLayout">tile_layout</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference">QuicksightThemeConfigurationSheetTileLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileInput">tile_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileLayoutInput">tile_layout_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tile`<sup>Required</sup> <a name="tile" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tile"></a>

```python
tile: QuicksightThemeConfigurationSheetTileOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference">QuicksightThemeConfigurationSheetTileOutputReference</a>

---

##### `tile_layout`<sup>Required</sup> <a name="tile_layout" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileLayout"></a>

```python
tile_layout: QuicksightThemeConfigurationSheetTileLayoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference">QuicksightThemeConfigurationSheetTileLayoutOutputReference</a>

---

##### `tile_input`<sup>Optional</sup> <a name="tile_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileInput"></a>

```python
tile_input: QuicksightThemeConfigurationSheetTile
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a>

---

##### `tile_layout_input`<sup>Optional</sup> <a name="tile_layout_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.tileLayoutInput"></a>

```python
tile_layout_input: QuicksightThemeConfigurationSheetTileLayout
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeConfigurationSheet
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheet">QuicksightThemeConfigurationSheet</a>

---


### QuicksightThemeConfigurationSheetTileBorderOutputReference <a name="QuicksightThemeConfigurationSheetTileBorderOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resetShow">reset_show</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_show` <a name="reset_show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.resetShow"></a>

```python
def reset_show() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.showInput">show_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.show">show</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show_input`<sup>Optional</sup> <a name="show_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.showInput"></a>

```python
show_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.show"></a>

```python
show: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeConfigurationSheetTileBorder
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a>

---


### QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference <a name="QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resetShow">reset_show</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_show` <a name="reset_show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resetShow"></a>

```python
def reset_show() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.showInput">show_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.show">show</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show_input`<sup>Optional</sup> <a name="show_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.showInput"></a>

```python
show_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.show"></a>

```python
show: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeConfigurationSheetTileLayoutGutter
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a>

---


### QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference <a name="QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resetShow">reset_show</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_show` <a name="reset_show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resetShow"></a>

```python
def reset_show() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.showInput">show_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.show">show</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show_input`<sup>Optional</sup> <a name="show_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.showInput"></a>

```python
show_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.show"></a>

```python
show: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeConfigurationSheetTileLayoutMargin
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a>

---


### QuicksightThemeConfigurationSheetTileLayoutOutputReference <a name="QuicksightThemeConfigurationSheetTileLayoutOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putGutter">put_gutter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putMargin">put_margin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resetGutter">reset_gutter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resetMargin">reset_margin</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gutter` <a name="put_gutter" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putGutter"></a>

```python
def put_gutter(
  show: typing.Union[bool, IResolvable] = None
) -> None
```

###### `show`<sup>Optional</sup> <a name="show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putGutter.parameter.show"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#show QuicksightTheme#show}.

---

##### `put_margin` <a name="put_margin" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putMargin"></a>

```python
def put_margin(
  show: typing.Union[bool, IResolvable] = None
) -> None
```

###### `show`<sup>Optional</sup> <a name="show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.putMargin.parameter.show"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#show QuicksightTheme#show}.

---

##### `reset_gutter` <a name="reset_gutter" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resetGutter"></a>

```python
def reset_gutter() -> None
```

##### `reset_margin` <a name="reset_margin" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.resetMargin"></a>

```python
def reset_margin() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutter">gutter</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference">QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.margin">margin</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference">QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutterInput">gutter_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.marginInput">margin_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gutter`<sup>Required</sup> <a name="gutter" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutter"></a>

```python
gutter: QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference">QuicksightThemeConfigurationSheetTileLayoutGutterOutputReference</a>

---

##### `margin`<sup>Required</sup> <a name="margin" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.margin"></a>

```python
margin: QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference">QuicksightThemeConfigurationSheetTileLayoutMarginOutputReference</a>

---

##### `gutter_input`<sup>Optional</sup> <a name="gutter_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutterInput"></a>

```python
gutter_input: QuicksightThemeConfigurationSheetTileLayoutGutter
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutGutter">QuicksightThemeConfigurationSheetTileLayoutGutter</a>

---

##### `margin_input`<sup>Optional</sup> <a name="margin_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.marginInput"></a>

```python
margin_input: QuicksightThemeConfigurationSheetTileLayoutMargin
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutMargin">QuicksightThemeConfigurationSheetTileLayoutMargin</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayoutOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeConfigurationSheetTileLayout
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileLayout">QuicksightThemeConfigurationSheetTileLayout</a>

---


### QuicksightThemeConfigurationSheetTileOutputReference <a name="QuicksightThemeConfigurationSheetTileOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.putBorder">put_border</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resetBorder">reset_border</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_border` <a name="put_border" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.putBorder"></a>

```python
def put_border(
  show: typing.Union[bool, IResolvable] = None
) -> None
```

###### `show`<sup>Optional</sup> <a name="show" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.putBorder.parameter.show"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/resources/quicksight_theme#show QuicksightTheme#show}.

---

##### `reset_border` <a name="reset_border" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.resetBorder"></a>

```python
def reset_border() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.border">border</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference">QuicksightThemeConfigurationSheetTileBorderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.borderInput">border_input</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `border`<sup>Required</sup> <a name="border" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.border"></a>

```python
border: QuicksightThemeConfigurationSheetTileBorderOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorderOutputReference">QuicksightThemeConfigurationSheetTileBorderOutputReference</a>

---

##### `border_input`<sup>Optional</sup> <a name="border_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.borderInput"></a>

```python
border_input: QuicksightThemeConfigurationSheetTileBorder
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileBorder">QuicksightThemeConfigurationSheetTileBorder</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTileOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeConfigurationSheetTile
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationSheetTile">QuicksightThemeConfigurationSheetTile</a>

---


### QuicksightThemeConfigurationTypographyFontFamiliesList <a name="QuicksightThemeConfigurationTypographyFontFamiliesList" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightThemeConfigurationTypographyFontFamiliesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[QuicksightThemeConfigurationTypographyFontFamilies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]]

---


### QuicksightThemeConfigurationTypographyFontFamiliesOutputReference <a name="QuicksightThemeConfigurationTypographyFontFamiliesOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resetFontFamily">reset_font_family</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_font_family` <a name="reset_font_family" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resetFontFamily"></a>

```python
def reset_font_family() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamilyInput">font_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamily">font_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `font_family_input`<sup>Optional</sup> <a name="font_family_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamilyInput"></a>

```python
font_family_input: str
```

- *Type:* str

---

##### `font_family`<sup>Required</sup> <a name="font_family" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamily"></a>

```python
font_family: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QuicksightThemeConfigurationTypographyFontFamilies]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]

---


### QuicksightThemeConfigurationTypographyOutputReference <a name="QuicksightThemeConfigurationTypographyOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.putFontFamilies">put_font_families</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resetFontFamilies">reset_font_families</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_font_families` <a name="put_font_families" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.putFontFamilies"></a>

```python
def put_font_families(
  value: typing.Union[IResolvable, typing.List[QuicksightThemeConfigurationTypographyFontFamilies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.putFontFamilies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]]

---

##### `reset_font_families` <a name="reset_font_families" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.resetFontFamilies"></a>

```python
def reset_font_families() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fontFamilies">font_families</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList">QuicksightThemeConfigurationTypographyFontFamiliesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fontFamiliesInput">font_families_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `font_families`<sup>Required</sup> <a name="font_families" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fontFamilies"></a>

```python
font_families: QuicksightThemeConfigurationTypographyFontFamiliesList
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamiliesList">QuicksightThemeConfigurationTypographyFontFamiliesList</a>

---

##### `font_families_input`<sup>Optional</sup> <a name="font_families_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.fontFamiliesInput"></a>

```python
font_families_input: typing.Union[IResolvable, typing.List[QuicksightThemeConfigurationTypographyFontFamilies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyFontFamilies">QuicksightThemeConfigurationTypographyFontFamilies</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypographyOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeConfigurationTypography
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationTypography">QuicksightThemeConfigurationTypography</a>

---


### QuicksightThemeConfigurationUiColorPaletteOutputReference <a name="QuicksightThemeConfigurationUiColorPaletteOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetAccent">reset_accent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetAccentForeground">reset_accent_foreground</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDanger">reset_danger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDangerForeground">reset_danger_foreground</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDimensionForeground">reset_dimension_foreground</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetMeasure">reset_measure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetMeasureForeground">reset_measure_foreground</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetPrimaryBackground">reset_primary_background</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetPrimaryForeground">reset_primary_foreground</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSecondaryBackground">reset_secondary_background</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSecondaryForeground">reset_secondary_foreground</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSuccess">reset_success</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSuccessForeground">reset_success_foreground</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetWarning">reset_warning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetWarningForeground">reset_warning_foreground</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accent` <a name="reset_accent" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetAccent"></a>

```python
def reset_accent() -> None
```

##### `reset_accent_foreground` <a name="reset_accent_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetAccentForeground"></a>

```python
def reset_accent_foreground() -> None
```

##### `reset_danger` <a name="reset_danger" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDanger"></a>

```python
def reset_danger() -> None
```

##### `reset_danger_foreground` <a name="reset_danger_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDangerForeground"></a>

```python
def reset_danger_foreground() -> None
```

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_dimension_foreground` <a name="reset_dimension_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetDimensionForeground"></a>

```python
def reset_dimension_foreground() -> None
```

##### `reset_measure` <a name="reset_measure" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetMeasure"></a>

```python
def reset_measure() -> None
```

##### `reset_measure_foreground` <a name="reset_measure_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetMeasureForeground"></a>

```python
def reset_measure_foreground() -> None
```

##### `reset_primary_background` <a name="reset_primary_background" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetPrimaryBackground"></a>

```python
def reset_primary_background() -> None
```

##### `reset_primary_foreground` <a name="reset_primary_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetPrimaryForeground"></a>

```python
def reset_primary_foreground() -> None
```

##### `reset_secondary_background` <a name="reset_secondary_background" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSecondaryBackground"></a>

```python
def reset_secondary_background() -> None
```

##### `reset_secondary_foreground` <a name="reset_secondary_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSecondaryForeground"></a>

```python
def reset_secondary_foreground() -> None
```

##### `reset_success` <a name="reset_success" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSuccess"></a>

```python
def reset_success() -> None
```

##### `reset_success_foreground` <a name="reset_success_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetSuccessForeground"></a>

```python
def reset_success_foreground() -> None
```

##### `reset_warning` <a name="reset_warning" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetWarning"></a>

```python
def reset_warning() -> None
```

##### `reset_warning_foreground` <a name="reset_warning_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.resetWarningForeground"></a>

```python
def reset_warning_foreground() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForegroundInput">accent_foreground_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentInput">accent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForegroundInput">danger_foreground_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerInput">danger_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForegroundInput">dimension_foreground_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionInput">dimension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForegroundInput">measure_foreground_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureInput">measure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackgroundInput">primary_background_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForegroundInput">primary_foreground_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackgroundInput">secondary_background_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForegroundInput">secondary_foreground_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForegroundInput">success_foreground_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successInput">success_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForegroundInput">warning_foreground_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningInput">warning_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accent">accent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForeground">accent_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.danger">danger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForeground">danger_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimension">dimension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForeground">dimension_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measure">measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForeground">measure_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackground">primary_background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForeground">primary_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackground">secondary_background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForeground">secondary_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.success">success</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForeground">success_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warning">warning</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForeground">warning_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accent_foreground_input`<sup>Optional</sup> <a name="accent_foreground_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForegroundInput"></a>

```python
accent_foreground_input: str
```

- *Type:* str

---

##### `accent_input`<sup>Optional</sup> <a name="accent_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentInput"></a>

```python
accent_input: str
```

- *Type:* str

---

##### `danger_foreground_input`<sup>Optional</sup> <a name="danger_foreground_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForegroundInput"></a>

```python
danger_foreground_input: str
```

- *Type:* str

---

##### `danger_input`<sup>Optional</sup> <a name="danger_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerInput"></a>

```python
danger_input: str
```

- *Type:* str

---

##### `dimension_foreground_input`<sup>Optional</sup> <a name="dimension_foreground_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForegroundInput"></a>

```python
dimension_foreground_input: str
```

- *Type:* str

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionInput"></a>

```python
dimension_input: str
```

- *Type:* str

---

##### `measure_foreground_input`<sup>Optional</sup> <a name="measure_foreground_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForegroundInput"></a>

```python
measure_foreground_input: str
```

- *Type:* str

---

##### `measure_input`<sup>Optional</sup> <a name="measure_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureInput"></a>

```python
measure_input: str
```

- *Type:* str

---

##### `primary_background_input`<sup>Optional</sup> <a name="primary_background_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackgroundInput"></a>

```python
primary_background_input: str
```

- *Type:* str

---

##### `primary_foreground_input`<sup>Optional</sup> <a name="primary_foreground_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForegroundInput"></a>

```python
primary_foreground_input: str
```

- *Type:* str

---

##### `secondary_background_input`<sup>Optional</sup> <a name="secondary_background_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackgroundInput"></a>

```python
secondary_background_input: str
```

- *Type:* str

---

##### `secondary_foreground_input`<sup>Optional</sup> <a name="secondary_foreground_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForegroundInput"></a>

```python
secondary_foreground_input: str
```

- *Type:* str

---

##### `success_foreground_input`<sup>Optional</sup> <a name="success_foreground_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForegroundInput"></a>

```python
success_foreground_input: str
```

- *Type:* str

---

##### `success_input`<sup>Optional</sup> <a name="success_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successInput"></a>

```python
success_input: str
```

- *Type:* str

---

##### `warning_foreground_input`<sup>Optional</sup> <a name="warning_foreground_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForegroundInput"></a>

```python
warning_foreground_input: str
```

- *Type:* str

---

##### `warning_input`<sup>Optional</sup> <a name="warning_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningInput"></a>

```python
warning_input: str
```

- *Type:* str

---

##### `accent`<sup>Required</sup> <a name="accent" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accent"></a>

```python
accent: str
```

- *Type:* str

---

##### `accent_foreground`<sup>Required</sup> <a name="accent_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForeground"></a>

```python
accent_foreground: str
```

- *Type:* str

---

##### `danger`<sup>Required</sup> <a name="danger" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.danger"></a>

```python
danger: str
```

- *Type:* str

---

##### `danger_foreground`<sup>Required</sup> <a name="danger_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForeground"></a>

```python
danger_foreground: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimension"></a>

```python
dimension: str
```

- *Type:* str

---

##### `dimension_foreground`<sup>Required</sup> <a name="dimension_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForeground"></a>

```python
dimension_foreground: str
```

- *Type:* str

---

##### `measure`<sup>Required</sup> <a name="measure" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measure"></a>

```python
measure: str
```

- *Type:* str

---

##### `measure_foreground`<sup>Required</sup> <a name="measure_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForeground"></a>

```python
measure_foreground: str
```

- *Type:* str

---

##### `primary_background`<sup>Required</sup> <a name="primary_background" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackground"></a>

```python
primary_background: str
```

- *Type:* str

---

##### `primary_foreground`<sup>Required</sup> <a name="primary_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForeground"></a>

```python
primary_foreground: str
```

- *Type:* str

---

##### `secondary_background`<sup>Required</sup> <a name="secondary_background" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackground"></a>

```python
secondary_background: str
```

- *Type:* str

---

##### `secondary_foreground`<sup>Required</sup> <a name="secondary_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForeground"></a>

```python
secondary_foreground: str
```

- *Type:* str

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.success"></a>

```python
success: str
```

- *Type:* str

---

##### `success_foreground`<sup>Required</sup> <a name="success_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForeground"></a>

```python
success_foreground: str
```

- *Type:* str

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warning"></a>

```python
warning: str
```

- *Type:* str

---

##### `warning_foreground`<sup>Required</sup> <a name="warning_foreground" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForeground"></a>

```python
warning_foreground: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPaletteOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightThemeConfigurationUiColorPalette
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeConfigurationUiColorPalette">QuicksightThemeConfigurationUiColorPalette</a>

---


### QuicksightThemePermissionsList <a name="QuicksightThemePermissionsList" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemePermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightThemePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[QuicksightThemePermissions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]]

---


### QuicksightThemePermissionsOutputReference <a name="QuicksightThemePermissionsOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemePermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QuicksightThemePermissions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemePermissions">QuicksightThemePermissions</a>]

---


### QuicksightThemeTimeoutsOutputReference <a name="QuicksightThemeTimeoutsOutputReference" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_theme

quicksightTheme.QuicksightThemeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts">QuicksightThemeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QuicksightThemeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightTheme.QuicksightThemeTimeouts">QuicksightThemeTimeouts</a>]

---



