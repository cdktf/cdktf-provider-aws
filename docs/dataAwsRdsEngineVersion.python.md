# `dataAwsRdsEngineVersion` Submodule <a name="`dataAwsRdsEngineVersion` Submodule" id="@cdktf/provider-aws.dataAwsRdsEngineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsEngineVersion <a name="DataAwsRdsEngineVersion" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version aws_rds_engine_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_engine_version

dataAwsRdsEngineVersion.DataAwsRdsEngineVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine: str,
  default_only: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsRdsEngineVersionFilter]] = None,
  id: str = None,
  include_all: typing.Union[bool, IResolvable] = None,
  parameter_group_family: str = None,
  preferred_versions: typing.List[str] = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#engine DataAwsRdsEngineVersion#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.defaultOnly">default_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#default_only DataAwsRdsEngineVersion#default_only}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#id DataAwsRdsEngineVersion#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.includeAll">include_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#include_all DataAwsRdsEngineVersion#include_all}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.parameterGroupFamily">parameter_group_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#parameter_group_family DataAwsRdsEngineVersion#parameter_group_family}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.preferredVersions">preferred_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#preferred_versions DataAwsRdsEngineVersion#preferred_versions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#version DataAwsRdsEngineVersion#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#engine DataAwsRdsEngineVersion#engine}.

---

##### `default_only`<sup>Optional</sup> <a name="default_only" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.defaultOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#default_only DataAwsRdsEngineVersion#default_only}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#filter DataAwsRdsEngineVersion#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#id DataAwsRdsEngineVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_all`<sup>Optional</sup> <a name="include_all" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.includeAll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#include_all DataAwsRdsEngineVersion#include_all}.

---

##### `parameter_group_family`<sup>Optional</sup> <a name="parameter_group_family" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.parameterGroupFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#parameter_group_family DataAwsRdsEngineVersion#parameter_group_family}.

---

##### `preferred_versions`<sup>Optional</sup> <a name="preferred_versions" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.preferredVersions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#preferred_versions DataAwsRdsEngineVersion#preferred_versions}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#version DataAwsRdsEngineVersion#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetDefaultOnly">reset_default_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetIncludeAll">reset_include_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetParameterGroupFamily">reset_parameter_group_family</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetPreferredVersions">reset_preferred_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsRdsEngineVersionFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>]]

---

##### `reset_default_only` <a name="reset_default_only" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetDefaultOnly"></a>

```python
def reset_default_only() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_all` <a name="reset_include_all" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetIncludeAll"></a>

```python
def reset_include_all() -> None
```

##### `reset_parameter_group_family` <a name="reset_parameter_group_family" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetParameterGroupFamily"></a>

```python
def reset_parameter_group_family() -> None
```

##### `reset_preferred_versions` <a name="reset_preferred_versions" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetPreferredVersions"></a>

```python
def reset_preferred_versions() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_engine_version

dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_engine_version

dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_engine_version

dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultCharacterSet">default_character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engineDescription">engine_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.exportableLogTypes">exportable_log_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList">DataAwsRdsEngineVersionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedCharacterSets">supported_character_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedFeatureNames">supported_feature_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedModes">supported_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedTimezones">supported_timezones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsGlobalDatabases">supports_global_databases</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsLogExportsToCloudwatch">supports_log_exports_to_cloudwatch</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsParallelQuery">supports_parallel_query</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsReadReplica">supports_read_replica</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.validUpgradeTargets">valid_upgrade_targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.versionDescription">version_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultOnlyInput">default_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.includeAllInput">include_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.parameterGroupFamilyInput">parameter_group_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.preferredVersionsInput">preferred_versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultOnly">default_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.includeAll">include_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.parameterGroupFamily">parameter_group_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.preferredVersions">preferred_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `default_character_set`<sup>Required</sup> <a name="default_character_set" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultCharacterSet"></a>

```python
default_character_set: str
```

- *Type:* str

---

##### `engine_description`<sup>Required</sup> <a name="engine_description" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engineDescription"></a>

```python
engine_description: str
```

- *Type:* str

---

##### `exportable_log_types`<sup>Required</sup> <a name="exportable_log_types" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.exportableLogTypes"></a>

```python
exportable_log_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.filter"></a>

```python
filter: DataAwsRdsEngineVersionFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList">DataAwsRdsEngineVersionFilterList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `supported_character_sets`<sup>Required</sup> <a name="supported_character_sets" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedCharacterSets"></a>

```python
supported_character_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_feature_names`<sup>Required</sup> <a name="supported_feature_names" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedFeatureNames"></a>

```python
supported_feature_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_modes`<sup>Required</sup> <a name="supported_modes" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedModes"></a>

```python
supported_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_timezones`<sup>Required</sup> <a name="supported_timezones" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportedTimezones"></a>

```python
supported_timezones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supports_global_databases`<sup>Required</sup> <a name="supports_global_databases" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsGlobalDatabases"></a>

```python
supports_global_databases: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `supports_log_exports_to_cloudwatch`<sup>Required</sup> <a name="supports_log_exports_to_cloudwatch" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsLogExportsToCloudwatch"></a>

```python
supports_log_exports_to_cloudwatch: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `supports_parallel_query`<sup>Required</sup> <a name="supports_parallel_query" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsParallelQuery"></a>

```python
supports_parallel_query: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `supports_read_replica`<sup>Required</sup> <a name="supports_read_replica" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.supportsReadReplica"></a>

```python
supports_read_replica: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `valid_upgrade_targets`<sup>Required</sup> <a name="valid_upgrade_targets" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.validUpgradeTargets"></a>

```python
valid_upgrade_targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version_description`<sup>Required</sup> <a name="version_description" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

---

##### `default_only_input`<sup>Optional</sup> <a name="default_only_input" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultOnlyInput"></a>

```python
default_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsRdsEngineVersionFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_all_input`<sup>Optional</sup> <a name="include_all_input" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.includeAllInput"></a>

```python
include_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `parameter_group_family_input`<sup>Optional</sup> <a name="parameter_group_family_input" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.parameterGroupFamilyInput"></a>

```python
parameter_group_family_input: str
```

- *Type:* str

---

##### `preferred_versions_input`<sup>Optional</sup> <a name="preferred_versions_input" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.preferredVersionsInput"></a>

```python
preferred_versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `default_only`<sup>Required</sup> <a name="default_only" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.defaultOnly"></a>

```python
default_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_all`<sup>Required</sup> <a name="include_all" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.includeAll"></a>

```python
include_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `parameter_group_family`<sup>Required</sup> <a name="parameter_group_family" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.parameterGroupFamily"></a>

```python
parameter_group_family: str
```

- *Type:* str

---

##### `preferred_versions`<sup>Required</sup> <a name="preferred_versions" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.preferredVersions"></a>

```python
preferred_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsEngineVersionConfig <a name="DataAwsRdsEngineVersionConfig" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_engine_version

dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine: str,
  default_only: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsRdsEngineVersionFilter]] = None,
  id: str = None,
  include_all: typing.Union[bool, IResolvable] = None,
  parameter_group_family: str = None,
  preferred_versions: typing.List[str] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#engine DataAwsRdsEngineVersion#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.defaultOnly">default_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#default_only DataAwsRdsEngineVersion#default_only}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#id DataAwsRdsEngineVersion#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.includeAll">include_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#include_all DataAwsRdsEngineVersion#include_all}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.parameterGroupFamily">parameter_group_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#parameter_group_family DataAwsRdsEngineVersion#parameter_group_family}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.preferredVersions">preferred_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#preferred_versions DataAwsRdsEngineVersion#preferred_versions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#version DataAwsRdsEngineVersion#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#engine DataAwsRdsEngineVersion#engine}.

---

##### `default_only`<sup>Optional</sup> <a name="default_only" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.defaultOnly"></a>

```python
default_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#default_only DataAwsRdsEngineVersion#default_only}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsRdsEngineVersionFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#filter DataAwsRdsEngineVersion#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#id DataAwsRdsEngineVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_all`<sup>Optional</sup> <a name="include_all" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.includeAll"></a>

```python
include_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#include_all DataAwsRdsEngineVersion#include_all}.

---

##### `parameter_group_family`<sup>Optional</sup> <a name="parameter_group_family" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.parameterGroupFamily"></a>

```python
parameter_group_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#parameter_group_family DataAwsRdsEngineVersion#parameter_group_family}.

---

##### `preferred_versions`<sup>Optional</sup> <a name="preferred_versions" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.preferredVersions"></a>

```python
preferred_versions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#preferred_versions DataAwsRdsEngineVersion#preferred_versions}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#version DataAwsRdsEngineVersion#version}.

---

### DataAwsRdsEngineVersionFilter <a name="DataAwsRdsEngineVersionFilter" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_engine_version

dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#name DataAwsRdsEngineVersion#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#values DataAwsRdsEngineVersion#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#name DataAwsRdsEngineVersion#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_engine_version#values DataAwsRdsEngineVersion#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsRdsEngineVersionFilterList <a name="DataAwsRdsEngineVersionFilterList" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_engine_version

dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsRdsEngineVersionFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsRdsEngineVersionFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>]]

---


### DataAwsRdsEngineVersionFilterOutputReference <a name="DataAwsRdsEngineVersionFilterOutputReference" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_rds_engine_version

dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsRdsEngineVersionFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsRdsEngineVersion.DataAwsRdsEngineVersionFilter">DataAwsRdsEngineVersionFilter</a>, cdktf.IResolvable]

---



