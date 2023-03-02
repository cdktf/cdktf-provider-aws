# `workspacesDirectory` Submodule <a name="`workspacesDirectory` Submodule" id="@cdktf/provider-aws.workspacesDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesDirectory <a name="WorkspacesDirectory" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory aws_workspaces_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_directory

workspacesDirectory.WorkspacesDirectory(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  directory_id: str,
  id: str = None,
  ip_group_ids: typing.List[str] = None,
  self_service_permissions: WorkspacesDirectorySelfServicePermissions = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  workspace_access_properties: WorkspacesDirectoryWorkspaceAccessProperties = None,
  workspace_creation_properties: WorkspacesDirectoryWorkspaceCreationProperties = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#directory_id WorkspacesDirectory#directory_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#id WorkspacesDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.ipGroupIds">ip_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.selfServicePermissions">self_service_permissions</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a></code> | self_service_permissions block. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags WorkspacesDirectory#tags}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags_all WorkspacesDirectory#tags_all}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceAccessProperties">workspace_access_properties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | workspace_access_properties block. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceCreationProperties">workspace_creation_properties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | workspace_creation_properties block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#directory_id WorkspacesDirectory#directory_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#id WorkspacesDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_group_ids`<sup>Optional</sup> <a name="ip_group_ids" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.ipGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}.

---

##### `self_service_permissions`<sup>Optional</sup> <a name="self_service_permissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.selfServicePermissions"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

self_service_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#self_service_permissions WorkspacesDirectory#self_service_permissions}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags WorkspacesDirectory#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags_all WorkspacesDirectory#tags_all}.

---

##### `workspace_access_properties`<sup>Optional</sup> <a name="workspace_access_properties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceAccessProperties"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

workspace_access_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#workspace_access_properties WorkspacesDirectory#workspace_access_properties}

---

##### `workspace_creation_properties`<sup>Optional</sup> <a name="workspace_creation_properties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.workspaceCreationProperties"></a>

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

workspace_creation_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions">put_self_service_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties">put_workspace_access_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties">put_workspace_creation_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds">reset_ip_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSelfServicePermissions">reset_self_service_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties">reset_workspace_access_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties">reset_workspace_creation_properties</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_self_service_permissions` <a name="put_self_service_permissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions"></a>

```python
def put_self_service_permissions(
  change_compute_type: typing.Union[bool, IResolvable] = None,
  increase_volume_size: typing.Union[bool, IResolvable] = None,
  rebuild_workspace: typing.Union[bool, IResolvable] = None,
  restart_workspace: typing.Union[bool, IResolvable] = None,
  switch_running_mode: typing.Union[bool, IResolvable] = None
) -> None
```

###### `change_compute_type`<sup>Optional</sup> <a name="change_compute_type" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions.parameter.changeComputeType"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}.

---

###### `increase_volume_size`<sup>Optional</sup> <a name="increase_volume_size" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions.parameter.increaseVolumeSize"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}.

---

###### `rebuild_workspace`<sup>Optional</sup> <a name="rebuild_workspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions.parameter.rebuildWorkspace"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}.

---

###### `restart_workspace`<sup>Optional</sup> <a name="restart_workspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions.parameter.restartWorkspace"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}.

---

###### `switch_running_mode`<sup>Optional</sup> <a name="switch_running_mode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions.parameter.switchRunningMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}.

---

##### `put_workspace_access_properties` <a name="put_workspace_access_properties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties"></a>

```python
def put_workspace_access_properties(
  device_type_android: str = None,
  device_type_chromeos: str = None,
  device_type_ios: str = None,
  device_type_linux: str = None,
  device_type_osx: str = None,
  device_type_web: str = None,
  device_type_windows: str = None,
  device_type_zeroclient: str = None
) -> None
```

###### `device_type_android`<sup>Optional</sup> <a name="device_type_android" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.deviceTypeAndroid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}.

---

###### `device_type_chromeos`<sup>Optional</sup> <a name="device_type_chromeos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.deviceTypeChromeos"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_chromeos WorkspacesDirectory#device_type_chromeos}.

---

###### `device_type_ios`<sup>Optional</sup> <a name="device_type_ios" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.deviceTypeIos"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}.

---

###### `device_type_linux`<sup>Optional</sup> <a name="device_type_linux" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.deviceTypeLinux"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}.

---

###### `device_type_osx`<sup>Optional</sup> <a name="device_type_osx" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.deviceTypeOsx"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}.

---

###### `device_type_web`<sup>Optional</sup> <a name="device_type_web" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.deviceTypeWeb"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}.

---

###### `device_type_windows`<sup>Optional</sup> <a name="device_type_windows" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.deviceTypeWindows"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}.

---

###### `device_type_zeroclient`<sup>Optional</sup> <a name="device_type_zeroclient" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.deviceTypeZeroclient"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}.

---

##### `put_workspace_creation_properties` <a name="put_workspace_creation_properties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties"></a>

```python
def put_workspace_creation_properties(
  custom_security_group_id: str = None,
  default_ou: str = None,
  enable_internet_access: typing.Union[bool, IResolvable] = None,
  enable_maintenance_mode: typing.Union[bool, IResolvable] = None,
  user_enabled_as_local_administrator: typing.Union[bool, IResolvable] = None
) -> None
```

###### `custom_security_group_id`<sup>Optional</sup> <a name="custom_security_group_id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.customSecurityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}.

---

###### `default_ou`<sup>Optional</sup> <a name="default_ou" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.defaultOu"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#default_ou WorkspacesDirectory#default_ou}.

---

###### `enable_internet_access`<sup>Optional</sup> <a name="enable_internet_access" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.enableInternetAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}.

---

###### `enable_maintenance_mode`<sup>Optional</sup> <a name="enable_maintenance_mode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.enableMaintenanceMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}.

---

###### `user_enabled_as_local_administrator`<sup>Optional</sup> <a name="user_enabled_as_local_administrator" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.userEnabledAsLocalAdministrator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_group_ids` <a name="reset_ip_group_ids" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds"></a>

```python
def reset_ip_group_ids() -> None
```

##### `reset_self_service_permissions` <a name="reset_self_service_permissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSelfServicePermissions"></a>

```python
def reset_self_service_permissions() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_workspace_access_properties` <a name="reset_workspace_access_properties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties"></a>

```python
def reset_workspace_access_properties() -> None
```

##### `reset_workspace_creation_properties` <a name="reset_workspace_creation_properties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties"></a>

```python
def reset_workspace_creation_properties() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_directory

workspacesDirectory.WorkspacesDirectory.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_directory

workspacesDirectory.WorkspacesDirectory.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_directory

workspacesDirectory.WorkspacesDirectory.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.customerUserName">customer_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryName">directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryType">directory_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses">dns_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.iamRoleId">iam_role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.registrationCode">registration_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissions">self_service_permissions</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference">WorkspacesDirectorySelfServicePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties">workspace_access_properties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties">workspace_creation_properties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId">workspace_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput">ip_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissionsInput">self_service_permissions_input</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput">workspace_access_properties_input</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput">workspace_creation_properties_input</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds">ip_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `customer_user_name`<sup>Required</sup> <a name="customer_user_name" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.customerUserName"></a>

```python
customer_user_name: str
```

- *Type:* str

---

##### `directory_name`<sup>Required</sup> <a name="directory_name" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryName"></a>

```python
directory_name: str
```

- *Type:* str

---

##### `directory_type`<sup>Required</sup> <a name="directory_type" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryType"></a>

```python
directory_type: str
```

- *Type:* str

---

##### `dns_ip_addresses`<sup>Required</sup> <a name="dns_ip_addresses" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses"></a>

```python
dns_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `iam_role_id`<sup>Required</sup> <a name="iam_role_id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.iamRoleId"></a>

```python
iam_role_id: str
```

- *Type:* str

---

##### `registration_code`<sup>Required</sup> <a name="registration_code" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.registrationCode"></a>

```python
registration_code: str
```

- *Type:* str

---

##### `self_service_permissions`<sup>Required</sup> <a name="self_service_permissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissions"></a>

```python
self_service_permissions: WorkspacesDirectorySelfServicePermissionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference">WorkspacesDirectorySelfServicePermissionsOutputReference</a>

---

##### `workspace_access_properties`<sup>Required</sup> <a name="workspace_access_properties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties"></a>

```python
workspace_access_properties: WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a>

---

##### `workspace_creation_properties`<sup>Required</sup> <a name="workspace_creation_properties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties"></a>

```python
workspace_creation_properties: WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a>

---

##### `workspace_security_group_id`<sup>Required</sup> <a name="workspace_security_group_id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId"></a>

```python
workspace_security_group_id: str
```

- *Type:* str

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_group_ids_input`<sup>Optional</sup> <a name="ip_group_ids_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput"></a>

```python
ip_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_service_permissions_input`<sup>Optional</sup> <a name="self_service_permissions_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissionsInput"></a>

```python
self_service_permissions_input: WorkspacesDirectorySelfServicePermissions
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workspace_access_properties_input`<sup>Optional</sup> <a name="workspace_access_properties_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput"></a>

```python
workspace_access_properties_input: WorkspacesDirectoryWorkspaceAccessProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---

##### `workspace_creation_properties_input`<sup>Optional</sup> <a name="workspace_creation_properties_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput"></a>

```python
workspace_creation_properties_input: WorkspacesDirectoryWorkspaceCreationProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_group_ids`<sup>Required</sup> <a name="ip_group_ids" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds"></a>

```python
ip_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectory.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesDirectoryConfig <a name="WorkspacesDirectoryConfig" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_directory

workspacesDirectory.WorkspacesDirectoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  directory_id: str,
  id: str = None,
  ip_group_ids: typing.List[str] = None,
  self_service_permissions: WorkspacesDirectorySelfServicePermissions = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  workspace_access_properties: WorkspacesDirectoryWorkspaceAccessProperties = None,
  workspace_creation_properties: WorkspacesDirectoryWorkspaceCreationProperties = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#directory_id WorkspacesDirectory#directory_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#id WorkspacesDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds">ip_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.selfServicePermissions">self_service_permissions</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a></code> | self_service_permissions block. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags WorkspacesDirectory#tags}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags_all WorkspacesDirectory#tags_all}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties">workspace_access_properties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | workspace_access_properties block. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties">workspace_creation_properties</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | workspace_creation_properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#directory_id WorkspacesDirectory#directory_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#id WorkspacesDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_group_ids`<sup>Optional</sup> <a name="ip_group_ids" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds"></a>

```python
ip_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}.

---

##### `self_service_permissions`<sup>Optional</sup> <a name="self_service_permissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.selfServicePermissions"></a>

```python
self_service_permissions: WorkspacesDirectorySelfServicePermissions
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

self_service_permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#self_service_permissions WorkspacesDirectory#self_service_permissions}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags WorkspacesDirectory#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#tags_all WorkspacesDirectory#tags_all}.

---

##### `workspace_access_properties`<sup>Optional</sup> <a name="workspace_access_properties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties"></a>

```python
workspace_access_properties: WorkspacesDirectoryWorkspaceAccessProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

workspace_access_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#workspace_access_properties WorkspacesDirectory#workspace_access_properties}

---

##### `workspace_creation_properties`<sup>Optional</sup> <a name="workspace_creation_properties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties"></a>

```python
workspace_creation_properties: WorkspacesDirectoryWorkspaceCreationProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

workspace_creation_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}

---

### WorkspacesDirectorySelfServicePermissions <a name="WorkspacesDirectorySelfServicePermissions" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_directory

workspacesDirectory.WorkspacesDirectorySelfServicePermissions(
  change_compute_type: typing.Union[bool, IResolvable] = None,
  increase_volume_size: typing.Union[bool, IResolvable] = None,
  rebuild_workspace: typing.Union[bool, IResolvable] = None,
  restart_workspace: typing.Union[bool, IResolvable] = None,
  switch_running_mode: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.changeComputeType">change_compute_type</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.increaseVolumeSize">increase_volume_size</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.rebuildWorkspace">rebuild_workspace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.restartWorkspace">restart_workspace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.switchRunningMode">switch_running_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}. |

---

##### `change_compute_type`<sup>Optional</sup> <a name="change_compute_type" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.changeComputeType"></a>

```python
change_compute_type: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}.

---

##### `increase_volume_size`<sup>Optional</sup> <a name="increase_volume_size" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.increaseVolumeSize"></a>

```python
increase_volume_size: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}.

---

##### `rebuild_workspace`<sup>Optional</sup> <a name="rebuild_workspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.rebuildWorkspace"></a>

```python
rebuild_workspace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}.

---

##### `restart_workspace`<sup>Optional</sup> <a name="restart_workspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.restartWorkspace"></a>

```python
restart_workspace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}.

---

##### `switch_running_mode`<sup>Optional</sup> <a name="switch_running_mode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.switchRunningMode"></a>

```python
switch_running_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}.

---

### WorkspacesDirectoryWorkspaceAccessProperties <a name="WorkspacesDirectoryWorkspaceAccessProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_directory

workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties(
  device_type_android: str = None,
  device_type_chromeos: str = None,
  device_type_ios: str = None,
  device_type_linux: str = None,
  device_type_osx: str = None,
  device_type_web: str = None,
  device_type_windows: str = None,
  device_type_zeroclient: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid">device_type_android</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeos">device_type_chromeos</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_chromeos WorkspacesDirectory#device_type_chromeos}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos">device_type_ios</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux">device_type_linux</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx">device_type_osx</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb">device_type_web</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows">device_type_windows</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroclient">device_type_zeroclient</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}. |

---

##### `device_type_android`<sup>Optional</sup> <a name="device_type_android" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid"></a>

```python
device_type_android: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}.

---

##### `device_type_chromeos`<sup>Optional</sup> <a name="device_type_chromeos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeos"></a>

```python
device_type_chromeos: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_chromeos WorkspacesDirectory#device_type_chromeos}.

---

##### `device_type_ios`<sup>Optional</sup> <a name="device_type_ios" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos"></a>

```python
device_type_ios: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}.

---

##### `device_type_linux`<sup>Optional</sup> <a name="device_type_linux" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux"></a>

```python
device_type_linux: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}.

---

##### `device_type_osx`<sup>Optional</sup> <a name="device_type_osx" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx"></a>

```python
device_type_osx: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}.

---

##### `device_type_web`<sup>Optional</sup> <a name="device_type_web" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb"></a>

```python
device_type_web: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}.

---

##### `device_type_windows`<sup>Optional</sup> <a name="device_type_windows" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows"></a>

```python
device_type_windows: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}.

---

##### `device_type_zeroclient`<sup>Optional</sup> <a name="device_type_zeroclient" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroclient"></a>

```python
device_type_zeroclient: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}.

---

### WorkspacesDirectoryWorkspaceCreationProperties <a name="WorkspacesDirectoryWorkspaceCreationProperties" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_directory

workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties(
  custom_security_group_id: str = None,
  default_ou: str = None,
  enable_internet_access: typing.Union[bool, IResolvable] = None,
  enable_maintenance_mode: typing.Union[bool, IResolvable] = None,
  user_enabled_as_local_administrator: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId">custom_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu">default_ou</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#default_ou WorkspacesDirectory#default_ou}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess">enable_internet_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode">enable_maintenance_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator">user_enabled_as_local_administrator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}. |

---

##### `custom_security_group_id`<sup>Optional</sup> <a name="custom_security_group_id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId"></a>

```python
custom_security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}.

---

##### `default_ou`<sup>Optional</sup> <a name="default_ou" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu"></a>

```python
default_ou: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#default_ou WorkspacesDirectory#default_ou}.

---

##### `enable_internet_access`<sup>Optional</sup> <a name="enable_internet_access" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess"></a>

```python
enable_internet_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}.

---

##### `enable_maintenance_mode`<sup>Optional</sup> <a name="enable_maintenance_mode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode"></a>

```python
enable_maintenance_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}.

---

##### `user_enabled_as_local_administrator`<sup>Optional</sup> <a name="user_enabled_as_local_administrator" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator"></a>

```python
user_enabled_as_local_administrator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesDirectorySelfServicePermissionsOutputReference <a name="WorkspacesDirectorySelfServicePermissionsOutputReference" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_directory

workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetChangeComputeType">reset_change_compute_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetIncreaseVolumeSize">reset_increase_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRebuildWorkspace">reset_rebuild_workspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRestartWorkspace">reset_restart_workspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetSwitchRunningMode">reset_switch_running_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_change_compute_type` <a name="reset_change_compute_type" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetChangeComputeType"></a>

```python
def reset_change_compute_type() -> None
```

##### `reset_increase_volume_size` <a name="reset_increase_volume_size" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetIncreaseVolumeSize"></a>

```python
def reset_increase_volume_size() -> None
```

##### `reset_rebuild_workspace` <a name="reset_rebuild_workspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRebuildWorkspace"></a>

```python
def reset_rebuild_workspace() -> None
```

##### `reset_restart_workspace` <a name="reset_restart_workspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRestartWorkspace"></a>

```python
def reset_restart_workspace() -> None
```

##### `reset_switch_running_mode` <a name="reset_switch_running_mode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetSwitchRunningMode"></a>

```python
def reset_switch_running_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeTypeInput">change_compute_type_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSizeInput">increase_volume_size_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspaceInput">rebuild_workspace_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspaceInput">restart_workspace_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningModeInput">switch_running_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeType">change_compute_type</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSize">increase_volume_size</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspace">rebuild_workspace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspace">restart_workspace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningMode">switch_running_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_compute_type_input`<sup>Optional</sup> <a name="change_compute_type_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeTypeInput"></a>

```python
change_compute_type_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `increase_volume_size_input`<sup>Optional</sup> <a name="increase_volume_size_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSizeInput"></a>

```python
increase_volume_size_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rebuild_workspace_input`<sup>Optional</sup> <a name="rebuild_workspace_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspaceInput"></a>

```python
rebuild_workspace_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restart_workspace_input`<sup>Optional</sup> <a name="restart_workspace_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspaceInput"></a>

```python
restart_workspace_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `switch_running_mode_input`<sup>Optional</sup> <a name="switch_running_mode_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningModeInput"></a>

```python
switch_running_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `change_compute_type`<sup>Required</sup> <a name="change_compute_type" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeType"></a>

```python
change_compute_type: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `increase_volume_size`<sup>Required</sup> <a name="increase_volume_size" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSize"></a>

```python
increase_volume_size: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rebuild_workspace`<sup>Required</sup> <a name="rebuild_workspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspace"></a>

```python
rebuild_workspace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restart_workspace`<sup>Required</sup> <a name="restart_workspace" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspace"></a>

```python
restart_workspace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `switch_running_mode`<sup>Required</sup> <a name="switch_running_mode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningMode"></a>

```python
switch_running_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.internalValue"></a>

```python
internal_value: WorkspacesDirectorySelfServicePermissions
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_directory

workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid">reset_device_type_android</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeos">reset_device_type_chromeos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos">reset_device_type_ios</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux">reset_device_type_linux</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx">reset_device_type_osx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb">reset_device_type_web</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows">reset_device_type_windows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroclient">reset_device_type_zeroclient</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_device_type_android` <a name="reset_device_type_android" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid"></a>

```python
def reset_device_type_android() -> None
```

##### `reset_device_type_chromeos` <a name="reset_device_type_chromeos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeos"></a>

```python
def reset_device_type_chromeos() -> None
```

##### `reset_device_type_ios` <a name="reset_device_type_ios" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos"></a>

```python
def reset_device_type_ios() -> None
```

##### `reset_device_type_linux` <a name="reset_device_type_linux" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux"></a>

```python
def reset_device_type_linux() -> None
```

##### `reset_device_type_osx` <a name="reset_device_type_osx" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx"></a>

```python
def reset_device_type_osx() -> None
```

##### `reset_device_type_web` <a name="reset_device_type_web" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb"></a>

```python
def reset_device_type_web() -> None
```

##### `reset_device_type_windows` <a name="reset_device_type_windows" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows"></a>

```python
def reset_device_type_windows() -> None
```

##### `reset_device_type_zeroclient` <a name="reset_device_type_zeroclient" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroclient"></a>

```python
def reset_device_type_zeroclient() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput">device_type_android_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeosInput">device_type_chromeos_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput">device_type_ios_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput">device_type_linux_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput">device_type_osx_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput">device_type_web_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput">device_type_windows_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclientInput">device_type_zeroclient_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid">device_type_android</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeos">device_type_chromeos</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos">device_type_ios</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux">device_type_linux</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx">device_type_osx</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb">device_type_web</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows">device_type_windows</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclient">device_type_zeroclient</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_type_android_input`<sup>Optional</sup> <a name="device_type_android_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput"></a>

```python
device_type_android_input: str
```

- *Type:* str

---

##### `device_type_chromeos_input`<sup>Optional</sup> <a name="device_type_chromeos_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeosInput"></a>

```python
device_type_chromeos_input: str
```

- *Type:* str

---

##### `device_type_ios_input`<sup>Optional</sup> <a name="device_type_ios_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput"></a>

```python
device_type_ios_input: str
```

- *Type:* str

---

##### `device_type_linux_input`<sup>Optional</sup> <a name="device_type_linux_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput"></a>

```python
device_type_linux_input: str
```

- *Type:* str

---

##### `device_type_osx_input`<sup>Optional</sup> <a name="device_type_osx_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput"></a>

```python
device_type_osx_input: str
```

- *Type:* str

---

##### `device_type_web_input`<sup>Optional</sup> <a name="device_type_web_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput"></a>

```python
device_type_web_input: str
```

- *Type:* str

---

##### `device_type_windows_input`<sup>Optional</sup> <a name="device_type_windows_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput"></a>

```python
device_type_windows_input: str
```

- *Type:* str

---

##### `device_type_zeroclient_input`<sup>Optional</sup> <a name="device_type_zeroclient_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclientInput"></a>

```python
device_type_zeroclient_input: str
```

- *Type:* str

---

##### `device_type_android`<sup>Required</sup> <a name="device_type_android" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid"></a>

```python
device_type_android: str
```

- *Type:* str

---

##### `device_type_chromeos`<sup>Required</sup> <a name="device_type_chromeos" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeos"></a>

```python
device_type_chromeos: str
```

- *Type:* str

---

##### `device_type_ios`<sup>Required</sup> <a name="device_type_ios" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos"></a>

```python
device_type_ios: str
```

- *Type:* str

---

##### `device_type_linux`<sup>Required</sup> <a name="device_type_linux" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux"></a>

```python
device_type_linux: str
```

- *Type:* str

---

##### `device_type_osx`<sup>Required</sup> <a name="device_type_osx" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx"></a>

```python
device_type_osx: str
```

- *Type:* str

---

##### `device_type_web`<sup>Required</sup> <a name="device_type_web" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb"></a>

```python
device_type_web: str
```

- *Type:* str

---

##### `device_type_windows`<sup>Required</sup> <a name="device_type_windows" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows"></a>

```python
device_type_windows: str
```

- *Type:* str

---

##### `device_type_zeroclient`<sup>Required</sup> <a name="device_type_zeroclient" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclient"></a>

```python
device_type_zeroclient: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: WorkspacesDirectoryWorkspaceAccessProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---


### WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspaces_directory

workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId">reset_custom_security_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu">reset_default_ou</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess">reset_enable_internet_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode">reset_enable_maintenance_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator">reset_user_enabled_as_local_administrator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_security_group_id` <a name="reset_custom_security_group_id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId"></a>

```python
def reset_custom_security_group_id() -> None
```

##### `reset_default_ou` <a name="reset_default_ou" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu"></a>

```python
def reset_default_ou() -> None
```

##### `reset_enable_internet_access` <a name="reset_enable_internet_access" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess"></a>

```python
def reset_enable_internet_access() -> None
```

##### `reset_enable_maintenance_mode` <a name="reset_enable_maintenance_mode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode"></a>

```python
def reset_enable_maintenance_mode() -> None
```

##### `reset_user_enabled_as_local_administrator` <a name="reset_user_enabled_as_local_administrator" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator"></a>

```python
def reset_user_enabled_as_local_administrator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput">custom_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput">default_ou_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput">enable_internet_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput">enable_maintenance_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput">user_enabled_as_local_administrator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId">custom_security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu">default_ou</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess">enable_internet_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode">enable_maintenance_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator">user_enabled_as_local_administrator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_security_group_id_input`<sup>Optional</sup> <a name="custom_security_group_id_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput"></a>

```python
custom_security_group_id_input: str
```

- *Type:* str

---

##### `default_ou_input`<sup>Optional</sup> <a name="default_ou_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput"></a>

```python
default_ou_input: str
```

- *Type:* str

---

##### `enable_internet_access_input`<sup>Optional</sup> <a name="enable_internet_access_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput"></a>

```python
enable_internet_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_maintenance_mode_input`<sup>Optional</sup> <a name="enable_maintenance_mode_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput"></a>

```python
enable_maintenance_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_enabled_as_local_administrator_input`<sup>Optional</sup> <a name="user_enabled_as_local_administrator_input" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput"></a>

```python
user_enabled_as_local_administrator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_security_group_id`<sup>Required</sup> <a name="custom_security_group_id" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId"></a>

```python
custom_security_group_id: str
```

- *Type:* str

---

##### `default_ou`<sup>Required</sup> <a name="default_ou" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu"></a>

```python
default_ou: str
```

- *Type:* str

---

##### `enable_internet_access`<sup>Required</sup> <a name="enable_internet_access" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess"></a>

```python
enable_internet_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_maintenance_mode`<sup>Required</sup> <a name="enable_maintenance_mode" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode"></a>

```python
enable_maintenance_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_enabled_as_local_administrator`<sup>Required</sup> <a name="user_enabled_as_local_administrator" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator"></a>

```python
user_enabled_as_local_administrator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: WorkspacesDirectoryWorkspaceCreationProperties
```

- *Type:* <a href="#@cdktf/provider-aws.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---



