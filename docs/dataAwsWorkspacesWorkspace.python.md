# `dataAwsWorkspacesWorkspace` Submodule <a name="`dataAwsWorkspacesWorkspace` Submodule" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsWorkspacesWorkspace <a name="DataAwsWorkspacesWorkspace" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace aws_workspaces_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_workspaces_workspace

dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  directory_id: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  user_name: str = None,
  workspace_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#directory_id DataAwsWorkspacesWorkspace#directory_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#id DataAwsWorkspacesWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#tags DataAwsWorkspacesWorkspace#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#user_name DataAwsWorkspacesWorkspace#user_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#workspace_id DataAwsWorkspacesWorkspace#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `directory_id`<sup>Optional</sup> <a name="directory_id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#directory_id DataAwsWorkspacesWorkspace#directory_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#id DataAwsWorkspacesWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#tags DataAwsWorkspacesWorkspace#tags}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#user_name DataAwsWorkspacesWorkspace#user_name}.

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#workspace_id DataAwsWorkspacesWorkspace#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetDirectoryId">reset_directory_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetUserName">reset_user_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_directory_id` <a name="reset_directory_id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetDirectoryId"></a>

```python
def reset_directory_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetUserName"></a>

```python
def reset_user_name() -> None
```

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_workspaces_workspace

dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_workspaces_workspace

dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_workspaces_workspace

dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.bundleId">bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.computerName">computer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.rootVolumeEncryptionEnabled">root_volume_encryption_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userVolumeEncryptionEnabled">user_volume_encryption_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.volumeEncryptionKey">volume_encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceProperties">workspace_properties</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList">DataAwsWorkspacesWorkspaceWorkspacePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

---

##### `computer_name`<sup>Required</sup> <a name="computer_name" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.computerName"></a>

```python
computer_name: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `root_volume_encryption_enabled`<sup>Required</sup> <a name="root_volume_encryption_enabled" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.rootVolumeEncryptionEnabled"></a>

```python
root_volume_encryption_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `user_volume_encryption_enabled`<sup>Required</sup> <a name="user_volume_encryption_enabled" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userVolumeEncryptionEnabled"></a>

```python
user_volume_encryption_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `volume_encryption_key`<sup>Required</sup> <a name="volume_encryption_key" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.volumeEncryptionKey"></a>

```python
volume_encryption_key: str
```

- *Type:* str

---

##### `workspace_properties`<sup>Required</sup> <a name="workspace_properties" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceProperties"></a>

```python
workspace_properties: DataAwsWorkspacesWorkspaceWorkspacePropertiesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList">DataAwsWorkspacesWorkspaceWorkspacePropertiesList</a>

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsWorkspacesWorkspaceConfig <a name="DataAwsWorkspacesWorkspaceConfig" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_workspaces_workspace

dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  directory_id: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  user_name: str = None,
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#directory_id DataAwsWorkspacesWorkspace#directory_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#id DataAwsWorkspacesWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#tags DataAwsWorkspacesWorkspace#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#user_name DataAwsWorkspacesWorkspace#user_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#workspace_id DataAwsWorkspacesWorkspace#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `directory_id`<sup>Optional</sup> <a name="directory_id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#directory_id DataAwsWorkspacesWorkspace#directory_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#id DataAwsWorkspacesWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#tags DataAwsWorkspacesWorkspace#tags}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#user_name DataAwsWorkspacesWorkspace#user_name}.

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace#workspace_id DataAwsWorkspacesWorkspace#workspace_id}.

---

### DataAwsWorkspacesWorkspaceWorkspaceProperties <a name="DataAwsWorkspacesWorkspaceWorkspaceProperties" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_workspaces_workspace

dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsWorkspacesWorkspaceWorkspacePropertiesList <a name="DataAwsWorkspacesWorkspaceWorkspacePropertiesList" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_workspaces_workspace

dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference <a name="DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_workspaces_workspace

dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeName">compute_type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGib">root_volume_size_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningMode">running_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutes">running_mode_auto_stop_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGib">user_volume_size_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties">DataAwsWorkspacesWorkspaceWorkspaceProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_type_name`<sup>Required</sup> <a name="compute_type_name" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeName"></a>

```python
compute_type_name: str
```

- *Type:* str

---

##### `root_volume_size_gib`<sup>Required</sup> <a name="root_volume_size_gib" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGib"></a>

```python
root_volume_size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `running_mode`<sup>Required</sup> <a name="running_mode" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningMode"></a>

```python
running_mode: str
```

- *Type:* str

---

##### `running_mode_auto_stop_timeout_in_minutes`<sup>Required</sup> <a name="running_mode_auto_stop_timeout_in_minutes" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutes"></a>

```python
running_mode_auto_stop_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_volume_size_gib`<sup>Required</sup> <a name="user_volume_size_gib" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGib"></a>

```python
user_volume_size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsWorkspacesWorkspaceWorkspaceProperties
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties">DataAwsWorkspacesWorkspaceWorkspaceProperties</a>

---



