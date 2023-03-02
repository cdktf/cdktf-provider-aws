# `dataAwsEfsFileSystem` Submodule <a name="`dataAwsEfsFileSystem` Submodule" id="@cdktf/provider-aws.dataAwsEfsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEfsFileSystem <a name="DataAwsEfsFileSystem" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system aws_efs_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_efs_file_system

dataAwsEfsFileSystem.DataAwsEfsFileSystem(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  creation_token: str = None,
  file_system_id: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.creationToken">creation_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#creation_token DataAwsEfsFileSystem#creation_token}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#file_system_id DataAwsEfsFileSystem#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#id DataAwsEfsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#tags DataAwsEfsFileSystem#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_token`<sup>Optional</sup> <a name="creation_token" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.creationToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#creation_token DataAwsEfsFileSystem#creation_token}.

---

##### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.fileSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#file_system_id DataAwsEfsFileSystem#file_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#id DataAwsEfsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#tags DataAwsEfsFileSystem#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetCreationToken">reset_creation_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetFileSystemId">reset_file_system_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_creation_token` <a name="reset_creation_token" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetCreationToken"></a>

```python
def reset_creation_token() -> None
```

##### `reset_file_system_id` <a name="reset_file_system_id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetFileSystemId"></a>

```python
def reset_file_system_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_efs_file_system

dataAwsEfsFileSystem.DataAwsEfsFileSystem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_efs_file_system

dataAwsEfsFileSystem.DataAwsEfsFileSystem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_efs_file_system

dataAwsEfsFileSystem.DataAwsEfsFileSystem.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.availabilityZoneName">availability_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.encrypted">encrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.lifecyclePolicy">lifecycle_policy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList">DataAwsEfsFileSystemLifecyclePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.performanceMode">performance_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.provisionedThroughputInMibps">provisioned_throughput_in_mibps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.sizeInBytes">size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.throughputMode">throughput_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.creationTokenInput">creation_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.creationToken">creation_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `availability_zone_name`<sup>Required</sup> <a name="availability_zone_name" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.availabilityZoneName"></a>

```python
availability_zone_name: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.encrypted"></a>

```python
encrypted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `lifecycle_policy`<sup>Required</sup> <a name="lifecycle_policy" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.lifecyclePolicy"></a>

```python
lifecycle_policy: DataAwsEfsFileSystemLifecyclePolicyList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList">DataAwsEfsFileSystemLifecyclePolicyList</a>

---

##### `performance_mode`<sup>Required</sup> <a name="performance_mode" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.performanceMode"></a>

```python
performance_mode: str
```

- *Type:* str

---

##### `provisioned_throughput_in_mibps`<sup>Required</sup> <a name="provisioned_throughput_in_mibps" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.provisionedThroughputInMibps"></a>

```python
provisioned_throughput_in_mibps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_in_bytes`<sup>Required</sup> <a name="size_in_bytes" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.sizeInBytes"></a>

```python
size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_mode`<sup>Required</sup> <a name="throughput_mode" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.throughputMode"></a>

```python
throughput_mode: str
```

- *Type:* str

---

##### `creation_token_input`<sup>Optional</sup> <a name="creation_token_input" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.creationTokenInput"></a>

```python
creation_token_input: str
```

- *Type:* str

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `creation_token`<sup>Required</sup> <a name="creation_token" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.creationToken"></a>

```python
creation_token: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEfsFileSystemConfig <a name="DataAwsEfsFileSystemConfig" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_efs_file_system

dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  creation_token: str = None,
  file_system_id: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.creationToken">creation_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#creation_token DataAwsEfsFileSystem#creation_token}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#file_system_id DataAwsEfsFileSystem#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#id DataAwsEfsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#tags DataAwsEfsFileSystem#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_token`<sup>Optional</sup> <a name="creation_token" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.creationToken"></a>

```python
creation_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#creation_token DataAwsEfsFileSystem#creation_token}.

---

##### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#file_system_id DataAwsEfsFileSystem#file_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#id DataAwsEfsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_file_system#tags DataAwsEfsFileSystem#tags}.

---

### DataAwsEfsFileSystemLifecyclePolicy <a name="DataAwsEfsFileSystemLifecyclePolicy" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_efs_file_system

dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicy()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEfsFileSystemLifecyclePolicyList <a name="DataAwsEfsFileSystemLifecyclePolicyList" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_efs_file_system

dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEfsFileSystemLifecyclePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEfsFileSystemLifecyclePolicyOutputReference <a name="DataAwsEfsFileSystemLifecyclePolicyOutputReference" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_efs_file_system

dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.transitionToIa">transition_to_ia</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClass">transition_to_primary_storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicy">DataAwsEfsFileSystemLifecyclePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transition_to_ia`<sup>Required</sup> <a name="transition_to_ia" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.transitionToIa"></a>

```python
transition_to_ia: str
```

- *Type:* str

---

##### `transition_to_primary_storage_class`<sup>Required</sup> <a name="transition_to_primary_storage_class" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.transitionToPrimaryStorageClass"></a>

```python
transition_to_primary_storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEfsFileSystemLifecyclePolicy
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEfsFileSystem.DataAwsEfsFileSystemLifecyclePolicy">DataAwsEfsFileSystemLifecyclePolicy</a>

---



