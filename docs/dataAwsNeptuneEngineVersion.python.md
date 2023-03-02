# `dataAwsNeptuneEngineVersion` Submodule <a name="`dataAwsNeptuneEngineVersion` Submodule" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNeptuneEngineVersion <a name="DataAwsNeptuneEngineVersion" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version aws_neptune_engine_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_neptune_engine_version

dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine: str = None,
  id: str = None,
  parameter_group_family: str = None,
  preferred_versions: typing.List[str] = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#engine DataAwsNeptuneEngineVersion#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#id DataAwsNeptuneEngineVersion#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.parameterGroupFamily">parameter_group_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#parameter_group_family DataAwsNeptuneEngineVersion#parameter_group_family}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.preferredVersions">preferred_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#preferred_versions DataAwsNeptuneEngineVersion#preferred_versions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#version DataAwsNeptuneEngineVersion#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#engine DataAwsNeptuneEngineVersion#engine}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#id DataAwsNeptuneEngineVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter_group_family`<sup>Optional</sup> <a name="parameter_group_family" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.parameterGroupFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#parameter_group_family DataAwsNeptuneEngineVersion#parameter_group_family}.

---

##### `preferred_versions`<sup>Optional</sup> <a name="preferred_versions" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.preferredVersions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#preferred_versions DataAwsNeptuneEngineVersion#preferred_versions}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#version DataAwsNeptuneEngineVersion#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetParameterGroupFamily">reset_parameter_group_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredVersions">reset_preferred_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_engine` <a name="reset_engine" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameter_group_family` <a name="reset_parameter_group_family" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetParameterGroupFamily"></a>

```python
def reset_parameter_group_family() -> None
```

##### `reset_preferred_versions` <a name="reset_preferred_versions" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredVersions"></a>

```python
def reset_preferred_versions() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_neptune_engine_version

dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_neptune_engine_version

dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_neptune_engine_version

dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engineDescription">engine_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.exportableLogTypes">exportable_log_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportedTimezones">supported_timezones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsLogExportsToCloudwatch">supports_log_exports_to_cloudwatch</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsReadReplica">supports_read_replica</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validUpgradeTargets">valid_upgrade_targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionDescription">version_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.parameterGroupFamilyInput">parameter_group_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredVersionsInput">preferred_versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.parameterGroupFamily">parameter_group_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredVersions">preferred_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `engine_description`<sup>Required</sup> <a name="engine_description" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engineDescription"></a>

```python
engine_description: str
```

- *Type:* str

---

##### `exportable_log_types`<sup>Required</sup> <a name="exportable_log_types" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.exportableLogTypes"></a>

```python
exportable_log_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_timezones`<sup>Required</sup> <a name="supported_timezones" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportedTimezones"></a>

```python
supported_timezones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supports_log_exports_to_cloudwatch`<sup>Required</sup> <a name="supports_log_exports_to_cloudwatch" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsLogExportsToCloudwatch"></a>

```python
supports_log_exports_to_cloudwatch: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `supports_read_replica`<sup>Required</sup> <a name="supports_read_replica" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsReadReplica"></a>

```python
supports_read_replica: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `valid_upgrade_targets`<sup>Required</sup> <a name="valid_upgrade_targets" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validUpgradeTargets"></a>

```python
valid_upgrade_targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version_description`<sup>Required</sup> <a name="version_description" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parameter_group_family_input`<sup>Optional</sup> <a name="parameter_group_family_input" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.parameterGroupFamilyInput"></a>

```python
parameter_group_family_input: str
```

- *Type:* str

---

##### `preferred_versions_input`<sup>Optional</sup> <a name="preferred_versions_input" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredVersionsInput"></a>

```python
preferred_versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parameter_group_family`<sup>Required</sup> <a name="parameter_group_family" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.parameterGroupFamily"></a>

```python
parameter_group_family: str
```

- *Type:* str

---

##### `preferred_versions`<sup>Required</sup> <a name="preferred_versions" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredVersions"></a>

```python
preferred_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNeptuneEngineVersionConfig <a name="DataAwsNeptuneEngineVersionConfig" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_neptune_engine_version

dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine: str = None,
  id: str = None,
  parameter_group_family: str = None,
  preferred_versions: typing.List[str] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#engine DataAwsNeptuneEngineVersion#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#id DataAwsNeptuneEngineVersion#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.parameterGroupFamily">parameter_group_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#parameter_group_family DataAwsNeptuneEngineVersion#parameter_group_family}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredVersions">preferred_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#preferred_versions DataAwsNeptuneEngineVersion#preferred_versions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#version DataAwsNeptuneEngineVersion#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#engine DataAwsNeptuneEngineVersion#engine}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#id DataAwsNeptuneEngineVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter_group_family`<sup>Optional</sup> <a name="parameter_group_family" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.parameterGroupFamily"></a>

```python
parameter_group_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#parameter_group_family DataAwsNeptuneEngineVersion#parameter_group_family}.

---

##### `preferred_versions`<sup>Optional</sup> <a name="preferred_versions" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredVersions"></a>

```python
preferred_versions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#preferred_versions DataAwsNeptuneEngineVersion#preferred_versions}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_engine_version#version DataAwsNeptuneEngineVersion#version}.

---



