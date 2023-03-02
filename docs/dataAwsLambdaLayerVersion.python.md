# `dataAwsLambdaLayerVersion` Submodule <a name="`dataAwsLambdaLayerVersion` Submodule" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdaLayerVersion <a name="DataAwsLambdaLayerVersion" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version aws_lambda_layer_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_layer_version

dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  layer_name: str,
  compatible_architecture: str = None,
  compatible_runtime: str = None,
  id: str = None,
  version: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.layerName">layer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#layer_name DataAwsLambdaLayerVersion#layer_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.compatibleArchitecture">compatible_architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.compatibleRuntime">compatible_runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#id DataAwsLambdaLayerVersion#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#version DataAwsLambdaLayerVersion#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `layer_name`<sup>Required</sup> <a name="layer_name" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.layerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#layer_name DataAwsLambdaLayerVersion#layer_name}.

---

##### `compatible_architecture`<sup>Optional</sup> <a name="compatible_architecture" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.compatibleArchitecture"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}.

---

##### `compatible_runtime`<sup>Optional</sup> <a name="compatible_runtime" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.compatibleRuntime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#id DataAwsLambdaLayerVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.version"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#version DataAwsLambdaLayerVersion#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleArchitecture">reset_compatible_architecture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleRuntime">reset_compatible_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_compatible_architecture` <a name="reset_compatible_architecture" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleArchitecture"></a>

```python
def reset_compatible_architecture() -> None
```

##### `reset_compatible_runtime` <a name="reset_compatible_runtime" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleRuntime"></a>

```python
def reset_compatible_runtime() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_layer_version

dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_layer_version

dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_layer_version

dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectures">compatible_architectures</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimes">compatible_runtimes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerArn">layer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.licenseInfo">license_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingJobArn">signing_job_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingProfileVersionArn">signing_profile_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeHash">source_code_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeSize">source_code_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectureInput">compatible_architecture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimeInput">compatible_runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerNameInput">layer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitecture">compatible_architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntime">compatible_runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerName">layer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `compatible_architectures`<sup>Required</sup> <a name="compatible_architectures" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectures"></a>

```python
compatible_architectures: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compatible_runtimes`<sup>Required</sup> <a name="compatible_runtimes" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimes"></a>

```python
compatible_runtimes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `layer_arn`<sup>Required</sup> <a name="layer_arn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerArn"></a>

```python
layer_arn: str
```

- *Type:* str

---

##### `license_info`<sup>Required</sup> <a name="license_info" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.licenseInfo"></a>

```python
license_info: str
```

- *Type:* str

---

##### `signing_job_arn`<sup>Required</sup> <a name="signing_job_arn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingJobArn"></a>

```python
signing_job_arn: str
```

- *Type:* str

---

##### `signing_profile_version_arn`<sup>Required</sup> <a name="signing_profile_version_arn" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingProfileVersionArn"></a>

```python
signing_profile_version_arn: str
```

- *Type:* str

---

##### `source_code_hash`<sup>Required</sup> <a name="source_code_hash" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeHash"></a>

```python
source_code_hash: str
```

- *Type:* str

---

##### `source_code_size`<sup>Required</sup> <a name="source_code_size" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeSize"></a>

```python
source_code_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compatible_architecture_input`<sup>Optional</sup> <a name="compatible_architecture_input" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectureInput"></a>

```python
compatible_architecture_input: str
```

- *Type:* str

---

##### `compatible_runtime_input`<sup>Optional</sup> <a name="compatible_runtime_input" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimeInput"></a>

```python
compatible_runtime_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `layer_name_input`<sup>Optional</sup> <a name="layer_name_input" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerNameInput"></a>

```python
layer_name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compatible_architecture`<sup>Required</sup> <a name="compatible_architecture" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitecture"></a>

```python
compatible_architecture: str
```

- *Type:* str

---

##### `compatible_runtime`<sup>Required</sup> <a name="compatible_runtime" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntime"></a>

```python
compatible_runtime: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `layer_name`<sup>Required</sup> <a name="layer_name" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerName"></a>

```python
layer_name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdaLayerVersionConfig <a name="DataAwsLambdaLayerVersionConfig" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_layer_version

dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  layer_name: str,
  compatible_architecture: str = None,
  compatible_runtime: str = None,
  id: str = None,
  version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.layerName">layer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#layer_name DataAwsLambdaLayerVersion#layer_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleArchitecture">compatible_architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleRuntime">compatible_runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#id DataAwsLambdaLayerVersion#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#version DataAwsLambdaLayerVersion#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `layer_name`<sup>Required</sup> <a name="layer_name" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.layerName"></a>

```python
layer_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#layer_name DataAwsLambdaLayerVersion#layer_name}.

---

##### `compatible_architecture`<sup>Optional</sup> <a name="compatible_architecture" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleArchitecture"></a>

```python
compatible_architecture: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}.

---

##### `compatible_runtime`<sup>Optional</sup> <a name="compatible_runtime" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleRuntime"></a>

```python
compatible_runtime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#id DataAwsLambdaLayerVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version#version DataAwsLambdaLayerVersion#version}.

---



