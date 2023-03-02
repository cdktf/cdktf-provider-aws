# `workspacesWorkspace` Submodule <a name="`workspacesWorkspace` Submodule" id="@cdktf/provider-aws.workspacesWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesWorkspace <a name="WorkspacesWorkspace" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace aws_workspaces_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_workspace

workspacesWorkspace.WorkspacesWorkspace(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bundle_id: str,
  directory_id: str,
  user_name: str,
  id: str = None,
  root_volume_encryption_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: WorkspacesWorkspaceTimeouts = None,
  user_volume_encryption_enabled: typing.Union[bool, IResolvable] = None,
  volume_encryption_key: str = None,
  workspace_properties: WorkspacesWorkspaceWorkspaceProperties = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.bundleId">bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#bundle_id WorkspacesWorkspace#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#directory_id WorkspacesWorkspace#directory_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_name WorkspacesWorkspace#user_name}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#id WorkspacesWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.rootVolumeEncryptionEnabled">root_volume_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags WorkspacesWorkspace#tags}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags_all WorkspacesWorkspace#tags_all}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.userVolumeEncryptionEnabled">user_volume_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.volumeEncryptionKey">volume_encryption_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.workspaceProperties">workspace_properties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a></code> | workspace_properties block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.bundleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#bundle_id WorkspacesWorkspace#bundle_id}.

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#directory_id WorkspacesWorkspace#directory_id}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_name WorkspacesWorkspace#user_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#id WorkspacesWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `root_volume_encryption_enabled`<sup>Optional</sup> <a name="root_volume_encryption_enabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.rootVolumeEncryptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags WorkspacesWorkspace#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags_all WorkspacesWorkspace#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#timeouts WorkspacesWorkspace#timeouts}

---

##### `user_volume_encryption_enabled`<sup>Optional</sup> <a name="user_volume_encryption_enabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.userVolumeEncryptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}.

---

##### `volume_encryption_key`<sup>Optional</sup> <a name="volume_encryption_key" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.volumeEncryptionKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}.

---

##### `workspace_properties`<sup>Optional</sup> <a name="workspace_properties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.Initializer.parameter.workspaceProperties"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a>

workspace_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#workspace_properties WorkspacesWorkspace#workspace_properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putWorkspaceProperties">put_workspace_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetRootVolumeEncryptionEnabled">reset_root_volume_encryption_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetUserVolumeEncryptionEnabled">reset_user_volume_encryption_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetVolumeEncryptionKey">reset_volume_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetWorkspaceProperties">reset_workspace_properties</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#create WorkspacesWorkspace#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#delete WorkspacesWorkspace#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#update WorkspacesWorkspace#update}.

---

##### `put_workspace_properties` <a name="put_workspace_properties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putWorkspaceProperties"></a>

```python
def put_workspace_properties(
  compute_type_name: str = None,
  root_volume_size_gib: typing.Union[int, float] = None,
  running_mode: str = None,
  running_mode_auto_stop_timeout_in_minutes: typing.Union[int, float] = None,
  user_volume_size_gib: typing.Union[int, float] = None
) -> None
```

###### `compute_type_name`<sup>Optional</sup> <a name="compute_type_name" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putWorkspaceProperties.parameter.computeTypeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#compute_type_name WorkspacesWorkspace#compute_type_name}.

---

###### `root_volume_size_gib`<sup>Optional</sup> <a name="root_volume_size_gib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putWorkspaceProperties.parameter.rootVolumeSizeGib"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_size_gib WorkspacesWorkspace#root_volume_size_gib}.

---

###### `running_mode`<sup>Optional</sup> <a name="running_mode" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putWorkspaceProperties.parameter.runningMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode WorkspacesWorkspace#running_mode}.

---

###### `running_mode_auto_stop_timeout_in_minutes`<sup>Optional</sup> <a name="running_mode_auto_stop_timeout_in_minutes" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putWorkspaceProperties.parameter.runningModeAutoStopTimeoutInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode_auto_stop_timeout_in_minutes WorkspacesWorkspace#running_mode_auto_stop_timeout_in_minutes}.

---

###### `user_volume_size_gib`<sup>Optional</sup> <a name="user_volume_size_gib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.putWorkspaceProperties.parameter.userVolumeSizeGib"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_size_gib WorkspacesWorkspace#user_volume_size_gib}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_root_volume_encryption_enabled` <a name="reset_root_volume_encryption_enabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetRootVolumeEncryptionEnabled"></a>

```python
def reset_root_volume_encryption_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_volume_encryption_enabled` <a name="reset_user_volume_encryption_enabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetUserVolumeEncryptionEnabled"></a>

```python
def reset_user_volume_encryption_enabled() -> None
```

##### `reset_volume_encryption_key` <a name="reset_volume_encryption_key" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetVolumeEncryptionKey"></a>

```python
def reset_volume_encryption_key() -> None
```

##### `reset_workspace_properties` <a name="reset_workspace_properties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.resetWorkspaceProperties"></a>

```python
def reset_workspace_properties() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_workspace

workspacesWorkspace.WorkspacesWorkspace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_workspace

workspacesWorkspace.WorkspacesWorkspace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_workspace

workspacesWorkspace.WorkspacesWorkspace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.computerName">computer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference">WorkspacesWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.workspaceProperties">workspace_properties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference">WorkspacesWorkspaceWorkspacePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.bundleIdInput">bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.rootVolumeEncryptionEnabledInput">root_volume_encryption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userVolumeEncryptionEnabledInput">user_volume_encryption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.volumeEncryptionKeyInput">volume_encryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.workspacePropertiesInput">workspace_properties_input</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.bundleId">bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.rootVolumeEncryptionEnabled">root_volume_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userVolumeEncryptionEnabled">user_volume_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.volumeEncryptionKey">volume_encryption_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `computer_name`<sup>Required</sup> <a name="computer_name" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.computerName"></a>

```python
computer_name: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.timeouts"></a>

```python
timeouts: WorkspacesWorkspaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference">WorkspacesWorkspaceTimeoutsOutputReference</a>

---

##### `workspace_properties`<sup>Required</sup> <a name="workspace_properties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.workspaceProperties"></a>

```python
workspace_properties: WorkspacesWorkspaceWorkspacePropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference">WorkspacesWorkspaceWorkspacePropertiesOutputReference</a>

---

##### `bundle_id_input`<sup>Optional</sup> <a name="bundle_id_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.bundleIdInput"></a>

```python
bundle_id_input: str
```

- *Type:* str

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `root_volume_encryption_enabled_input`<sup>Optional</sup> <a name="root_volume_encryption_enabled_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.rootVolumeEncryptionEnabledInput"></a>

```python
root_volume_encryption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[WorkspacesWorkspaceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a>, cdktf.IResolvable]

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `user_volume_encryption_enabled_input`<sup>Optional</sup> <a name="user_volume_encryption_enabled_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userVolumeEncryptionEnabledInput"></a>

```python
user_volume_encryption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_encryption_key_input`<sup>Optional</sup> <a name="volume_encryption_key_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.volumeEncryptionKeyInput"></a>

```python
volume_encryption_key_input: str
```

- *Type:* str

---

##### `workspace_properties_input`<sup>Optional</sup> <a name="workspace_properties_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.workspacePropertiesInput"></a>

```python
workspace_properties_input: WorkspacesWorkspaceWorkspaceProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a>

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `root_volume_encryption_enabled`<sup>Required</sup> <a name="root_volume_encryption_enabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.rootVolumeEncryptionEnabled"></a>

```python
root_volume_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `user_volume_encryption_enabled`<sup>Required</sup> <a name="user_volume_encryption_enabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.userVolumeEncryptionEnabled"></a>

```python
user_volume_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_encryption_key`<sup>Required</sup> <a name="volume_encryption_key" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.volumeEncryptionKey"></a>

```python
volume_encryption_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesWorkspaceConfig <a name="WorkspacesWorkspaceConfig" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_workspace

workspacesWorkspace.WorkspacesWorkspaceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bundle_id: str,
  directory_id: str,
  user_name: str,
  id: str = None,
  root_volume_encryption_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: WorkspacesWorkspaceTimeouts = None,
  user_volume_encryption_enabled: typing.Union[bool, IResolvable] = None,
  volume_encryption_key: str = None,
  workspace_properties: WorkspacesWorkspaceWorkspaceProperties = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.bundleId">bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#bundle_id WorkspacesWorkspace#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#directory_id WorkspacesWorkspace#directory_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_name WorkspacesWorkspace#user_name}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#id WorkspacesWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.rootVolumeEncryptionEnabled">root_volume_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags WorkspacesWorkspace#tags}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags_all WorkspacesWorkspace#tags_all}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.userVolumeEncryptionEnabled">user_volume_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.volumeEncryptionKey">volume_encryption_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.workspaceProperties">workspace_properties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a></code> | workspace_properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#bundle_id WorkspacesWorkspace#bundle_id}.

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#directory_id WorkspacesWorkspace#directory_id}.

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_name WorkspacesWorkspace#user_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#id WorkspacesWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `root_volume_encryption_enabled`<sup>Optional</sup> <a name="root_volume_encryption_enabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.rootVolumeEncryptionEnabled"></a>

```python
root_volume_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags WorkspacesWorkspace#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#tags_all WorkspacesWorkspace#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.timeouts"></a>

```python
timeouts: WorkspacesWorkspaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#timeouts WorkspacesWorkspace#timeouts}

---

##### `user_volume_encryption_enabled`<sup>Optional</sup> <a name="user_volume_encryption_enabled" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.userVolumeEncryptionEnabled"></a>

```python
user_volume_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}.

---

##### `volume_encryption_key`<sup>Optional</sup> <a name="volume_encryption_key" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.volumeEncryptionKey"></a>

```python
volume_encryption_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}.

---

##### `workspace_properties`<sup>Optional</sup> <a name="workspace_properties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceConfig.property.workspaceProperties"></a>

```python
workspace_properties: WorkspacesWorkspaceWorkspaceProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a>

workspace_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#workspace_properties WorkspacesWorkspace#workspace_properties}

---

### WorkspacesWorkspaceTimeouts <a name="WorkspacesWorkspaceTimeouts" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_workspace

workspacesWorkspace.WorkspacesWorkspaceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#create WorkspacesWorkspace#create}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#delete WorkspacesWorkspace#delete}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#update WorkspacesWorkspace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#create WorkspacesWorkspace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#delete WorkspacesWorkspace#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#update WorkspacesWorkspace#update}.

---

### WorkspacesWorkspaceWorkspaceProperties <a name="WorkspacesWorkspaceWorkspaceProperties" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_workspace

workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties(
  compute_type_name: str = None,
  root_volume_size_gib: typing.Union[int, float] = None,
  running_mode: str = None,
  running_mode_auto_stop_timeout_in_minutes: typing.Union[int, float] = None,
  user_volume_size_gib: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.computeTypeName">compute_type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#compute_type_name WorkspacesWorkspace#compute_type_name}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.rootVolumeSizeGib">root_volume_size_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_size_gib WorkspacesWorkspace#root_volume_size_gib}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.runningMode">running_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode WorkspacesWorkspace#running_mode}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.runningModeAutoStopTimeoutInMinutes">running_mode_auto_stop_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode_auto_stop_timeout_in_minutes WorkspacesWorkspace#running_mode_auto_stop_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.userVolumeSizeGib">user_volume_size_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_size_gib WorkspacesWorkspace#user_volume_size_gib}. |

---

##### `compute_type_name`<sup>Optional</sup> <a name="compute_type_name" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.computeTypeName"></a>

```python
compute_type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#compute_type_name WorkspacesWorkspace#compute_type_name}.

---

##### `root_volume_size_gib`<sup>Optional</sup> <a name="root_volume_size_gib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.rootVolumeSizeGib"></a>

```python
root_volume_size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#root_volume_size_gib WorkspacesWorkspace#root_volume_size_gib}.

---

##### `running_mode`<sup>Optional</sup> <a name="running_mode" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.runningMode"></a>

```python
running_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode WorkspacesWorkspace#running_mode}.

---

##### `running_mode_auto_stop_timeout_in_minutes`<sup>Optional</sup> <a name="running_mode_auto_stop_timeout_in_minutes" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.runningModeAutoStopTimeoutInMinutes"></a>

```python
running_mode_auto_stop_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#running_mode_auto_stop_timeout_in_minutes WorkspacesWorkspace#running_mode_auto_stop_timeout_in_minutes}.

---

##### `user_volume_size_gib`<sup>Optional</sup> <a name="user_volume_size_gib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties.property.userVolumeSizeGib"></a>

```python
user_volume_size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace#user_volume_size_gib WorkspacesWorkspace#user_volume_size_gib}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesWorkspaceTimeoutsOutputReference <a name="WorkspacesWorkspaceTimeoutsOutputReference" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_workspace

workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WorkspacesWorkspaceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceTimeouts">WorkspacesWorkspaceTimeouts</a>, cdktf.IResolvable]

---


### WorkspacesWorkspaceWorkspacePropertiesOutputReference <a name="WorkspacesWorkspaceWorkspacePropertiesOutputReference" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_workspace

workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetComputeTypeName">reset_compute_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRootVolumeSizeGib">reset_root_volume_size_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRunningMode">reset_running_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRunningModeAutoStopTimeoutInMinutes">reset_running_mode_auto_stop_timeout_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetUserVolumeSizeGib">reset_user_volume_size_gib</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compute_type_name` <a name="reset_compute_type_name" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetComputeTypeName"></a>

```python
def reset_compute_type_name() -> None
```

##### `reset_root_volume_size_gib` <a name="reset_root_volume_size_gib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRootVolumeSizeGib"></a>

```python
def reset_root_volume_size_gib() -> None
```

##### `reset_running_mode` <a name="reset_running_mode" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRunningMode"></a>

```python
def reset_running_mode() -> None
```

##### `reset_running_mode_auto_stop_timeout_in_minutes` <a name="reset_running_mode_auto_stop_timeout_in_minutes" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetRunningModeAutoStopTimeoutInMinutes"></a>

```python
def reset_running_mode_auto_stop_timeout_in_minutes() -> None
```

##### `reset_user_volume_size_gib` <a name="reset_user_volume_size_gib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.resetUserVolumeSizeGib"></a>

```python
def reset_user_volume_size_gib() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeNameInput">compute_type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGibInput">root_volume_size_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutesInput">running_mode_auto_stop_timeout_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeInput">running_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGibInput">user_volume_size_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeName">compute_type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGib">root_volume_size_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningMode">running_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutes">running_mode_auto_stop_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGib">user_volume_size_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_type_name_input`<sup>Optional</sup> <a name="compute_type_name_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeNameInput"></a>

```python
compute_type_name_input: str
```

- *Type:* str

---

##### `root_volume_size_gib_input`<sup>Optional</sup> <a name="root_volume_size_gib_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGibInput"></a>

```python
root_volume_size_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `running_mode_auto_stop_timeout_in_minutes_input`<sup>Optional</sup> <a name="running_mode_auto_stop_timeout_in_minutes_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutesInput"></a>

```python
running_mode_auto_stop_timeout_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `running_mode_input`<sup>Optional</sup> <a name="running_mode_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeInput"></a>

```python
running_mode_input: str
```

- *Type:* str

---

##### `user_volume_size_gib_input`<sup>Optional</sup> <a name="user_volume_size_gib_input" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGibInput"></a>

```python
user_volume_size_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_type_name`<sup>Required</sup> <a name="compute_type_name" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeName"></a>

```python
compute_type_name: str
```

- *Type:* str

---

##### `root_volume_size_gib`<sup>Required</sup> <a name="root_volume_size_gib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGib"></a>

```python
root_volume_size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `running_mode`<sup>Required</sup> <a name="running_mode" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningMode"></a>

```python
running_mode: str
```

- *Type:* str

---

##### `running_mode_auto_stop_timeout_in_minutes`<sup>Required</sup> <a name="running_mode_auto_stop_timeout_in_minutes" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutes"></a>

```python
running_mode_auto_stop_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_volume_size_gib`<sup>Required</sup> <a name="user_volume_size_gib" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGib"></a>

```python
user_volume_size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspacePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: WorkspacesWorkspaceWorkspaceProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesWorkspace.WorkspacesWorkspaceWorkspaceProperties">WorkspacesWorkspaceWorkspaceProperties</a>

---



