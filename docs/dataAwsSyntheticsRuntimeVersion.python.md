# `dataAwsSyntheticsRuntimeVersion` Submodule <a name="`dataAwsSyntheticsRuntimeVersion` Submodule" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSyntheticsRuntimeVersion <a name="DataAwsSyntheticsRuntimeVersion" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_version aws_synthetics_runtime_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_synthetics_runtime_version

dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  prefix: str,
  latest: typing.Union[bool, IResolvable] = None,
  region: str = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_version#prefix DataAwsSyntheticsRuntimeVersion#prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.latest">latest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_version#latest DataAwsSyntheticsRuntimeVersion#latest}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_version#version DataAwsSyntheticsRuntimeVersion#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_version#prefix DataAwsSyntheticsRuntimeVersion#prefix}.

---

##### `latest`<sup>Optional</sup> <a name="latest" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.latest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_version#latest DataAwsSyntheticsRuntimeVersion#latest}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_version#region DataAwsSyntheticsRuntimeVersion#region}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_version#version DataAwsSyntheticsRuntimeVersion#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetLatest">reset_latest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_latest` <a name="reset_latest" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetLatest"></a>

```python
def reset_latest() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsSyntheticsRuntimeVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_synthetics_runtime_version

dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_synthetics_runtime_version

dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_synthetics_runtime_version

dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_synthetics_runtime_version

dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsSyntheticsRuntimeVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsSyntheticsRuntimeVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsSyntheticsRuntimeVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSyntheticsRuntimeVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.deprecationDate">deprecation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.releaseDate">release_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.versionName">version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.latestInput">latest_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.latest">latest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `deprecation_date`<sup>Required</sup> <a name="deprecation_date" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.deprecationDate"></a>

```python
deprecation_date: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `release_date`<sup>Required</sup> <a name="release_date" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.releaseDate"></a>

```python
release_date: str
```

- *Type:* str

---

##### `version_name`<sup>Required</sup> <a name="version_name" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.versionName"></a>

```python
version_name: str
```

- *Type:* str

---

##### `latest_input`<sup>Optional</sup> <a name="latest_input" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.latestInput"></a>

```python
latest_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `latest`<sup>Required</sup> <a name="latest" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.latest"></a>

```python
latest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSyntheticsRuntimeVersionConfig <a name="DataAwsSyntheticsRuntimeVersionConfig" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_synthetics_runtime_version

dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  prefix: str,
  latest: typing.Union[bool, IResolvable] = None,
  region: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_version#prefix DataAwsSyntheticsRuntimeVersion#prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.latest">latest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_version#latest DataAwsSyntheticsRuntimeVersion#latest}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_version#version DataAwsSyntheticsRuntimeVersion#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_version#prefix DataAwsSyntheticsRuntimeVersion#prefix}.

---

##### `latest`<sup>Optional</sup> <a name="latest" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.latest"></a>

```python
latest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_version#latest DataAwsSyntheticsRuntimeVersion#latest}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_version#region DataAwsSyntheticsRuntimeVersion#region}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dataAwsSyntheticsRuntimeVersion.DataAwsSyntheticsRuntimeVersionConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/data-sources/synthetics_runtime_version#version DataAwsSyntheticsRuntimeVersion#version}.

---



