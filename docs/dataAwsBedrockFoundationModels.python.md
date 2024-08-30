# `dataAwsBedrockFoundationModels` Submodule <a name="`dataAwsBedrockFoundationModels` Submodule" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBedrockFoundationModels <a name="DataAwsBedrockFoundationModels" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models aws_bedrock_foundation_models}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrock_foundation_models

dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  by_customization_type: str = None,
  by_inference_type: str = None,
  by_output_modality: str = None,
  by_provider: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.byCustomizationType">by_customization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models#by_customization_type DataAwsBedrockFoundationModels#by_customization_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.byInferenceType">by_inference_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models#by_inference_type DataAwsBedrockFoundationModels#by_inference_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.byOutputModality">by_output_modality</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models#by_output_modality DataAwsBedrockFoundationModels#by_output_modality}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.byProvider">by_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models#by_provider DataAwsBedrockFoundationModels#by_provider}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `by_customization_type`<sup>Optional</sup> <a name="by_customization_type" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.byCustomizationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models#by_customization_type DataAwsBedrockFoundationModels#by_customization_type}.

---

##### `by_inference_type`<sup>Optional</sup> <a name="by_inference_type" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.byInferenceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models#by_inference_type DataAwsBedrockFoundationModels#by_inference_type}.

---

##### `by_output_modality`<sup>Optional</sup> <a name="by_output_modality" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.byOutputModality"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models#by_output_modality DataAwsBedrockFoundationModels#by_output_modality}.

---

##### `by_provider`<sup>Optional</sup> <a name="by_provider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.Initializer.parameter.byProvider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models#by_provider DataAwsBedrockFoundationModels#by_provider}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByCustomizationType">reset_by_customization_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByInferenceType">reset_by_inference_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByOutputModality">reset_by_output_modality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByProvider">reset_by_provider</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_by_customization_type` <a name="reset_by_customization_type" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByCustomizationType"></a>

```python
def reset_by_customization_type() -> None
```

##### `reset_by_inference_type` <a name="reset_by_inference_type" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByInferenceType"></a>

```python
def reset_by_inference_type() -> None
```

##### `reset_by_output_modality` <a name="reset_by_output_modality" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByOutputModality"></a>

```python
def reset_by_output_modality() -> None
```

##### `reset_by_provider` <a name="reset_by_provider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.resetByProvider"></a>

```python
def reset_by_provider() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsBedrockFoundationModels resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrock_foundation_models

dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrock_foundation_models

dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrock_foundation_models

dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrock_foundation_models

dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsBedrockFoundationModels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsBedrockFoundationModels to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsBedrockFoundationModels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBedrockFoundationModels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.modelSummaries">model_summaries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList">DataAwsBedrockFoundationModelsModelSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byCustomizationTypeInput">by_customization_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byInferenceTypeInput">by_inference_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byOutputModalityInput">by_output_modality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byProviderInput">by_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byCustomizationType">by_customization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byInferenceType">by_inference_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byOutputModality">by_output_modality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byProvider">by_provider</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `model_summaries`<sup>Required</sup> <a name="model_summaries" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.modelSummaries"></a>

```python
model_summaries: DataAwsBedrockFoundationModelsModelSummariesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList">DataAwsBedrockFoundationModelsModelSummariesList</a>

---

##### `by_customization_type_input`<sup>Optional</sup> <a name="by_customization_type_input" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byCustomizationTypeInput"></a>

```python
by_customization_type_input: str
```

- *Type:* str

---

##### `by_inference_type_input`<sup>Optional</sup> <a name="by_inference_type_input" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byInferenceTypeInput"></a>

```python
by_inference_type_input: str
```

- *Type:* str

---

##### `by_output_modality_input`<sup>Optional</sup> <a name="by_output_modality_input" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byOutputModalityInput"></a>

```python
by_output_modality_input: str
```

- *Type:* str

---

##### `by_provider_input`<sup>Optional</sup> <a name="by_provider_input" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byProviderInput"></a>

```python
by_provider_input: str
```

- *Type:* str

---

##### `by_customization_type`<sup>Required</sup> <a name="by_customization_type" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byCustomizationType"></a>

```python
by_customization_type: str
```

- *Type:* str

---

##### `by_inference_type`<sup>Required</sup> <a name="by_inference_type" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byInferenceType"></a>

```python
by_inference_type: str
```

- *Type:* str

---

##### `by_output_modality`<sup>Required</sup> <a name="by_output_modality" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byOutputModality"></a>

```python
by_output_modality: str
```

- *Type:* str

---

##### `by_provider`<sup>Required</sup> <a name="by_provider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.byProvider"></a>

```python
by_provider: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModels.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBedrockFoundationModelsConfig <a name="DataAwsBedrockFoundationModelsConfig" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrock_foundation_models

dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  by_customization_type: str = None,
  by_inference_type: str = None,
  by_output_modality: str = None,
  by_provider: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byCustomizationType">by_customization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models#by_customization_type DataAwsBedrockFoundationModels#by_customization_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byInferenceType">by_inference_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models#by_inference_type DataAwsBedrockFoundationModels#by_inference_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byOutputModality">by_output_modality</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models#by_output_modality DataAwsBedrockFoundationModels#by_output_modality}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byProvider">by_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models#by_provider DataAwsBedrockFoundationModels#by_provider}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `by_customization_type`<sup>Optional</sup> <a name="by_customization_type" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byCustomizationType"></a>

```python
by_customization_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models#by_customization_type DataAwsBedrockFoundationModels#by_customization_type}.

---

##### `by_inference_type`<sup>Optional</sup> <a name="by_inference_type" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byInferenceType"></a>

```python
by_inference_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models#by_inference_type DataAwsBedrockFoundationModels#by_inference_type}.

---

##### `by_output_modality`<sup>Optional</sup> <a name="by_output_modality" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byOutputModality"></a>

```python
by_output_modality: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models#by_output_modality DataAwsBedrockFoundationModels#by_output_modality}.

---

##### `by_provider`<sup>Optional</sup> <a name="by_provider" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsConfig.property.byProvider"></a>

```python
by_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.65.0/docs/data-sources/bedrock_foundation_models#by_provider DataAwsBedrockFoundationModels#by_provider}.

---

### DataAwsBedrockFoundationModelsModelSummaries <a name="DataAwsBedrockFoundationModelsModelSummaries" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrock_foundation_models

dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBedrockFoundationModelsModelSummariesList <a name="DataAwsBedrockFoundationModelsModelSummariesList" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrock_foundation_models

dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsBedrockFoundationModelsModelSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsBedrockFoundationModelsModelSummariesOutputReference <a name="DataAwsBedrockFoundationModelsModelSummariesOutputReference" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrock_foundation_models

dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.customizationsSupported">customizations_supported</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.inferenceTypesSupported">inference_types_supported</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.inputModalities">input_modalities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelArn">model_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.outputModalities">output_modalities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.responseStreamingSupported">response_streaming_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries">DataAwsBedrockFoundationModelsModelSummaries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customizations_supported`<sup>Required</sup> <a name="customizations_supported" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.customizationsSupported"></a>

```python
customizations_supported: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inference_types_supported`<sup>Required</sup> <a name="inference_types_supported" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.inferenceTypesSupported"></a>

```python
inference_types_supported: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `input_modalities`<sup>Required</sup> <a name="input_modalities" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.inputModalities"></a>

```python
input_modalities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `model_arn`<sup>Required</sup> <a name="model_arn" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelArn"></a>

```python
model_arn: str
```

- *Type:* str

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `output_modalities`<sup>Required</sup> <a name="output_modalities" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.outputModalities"></a>

```python
output_modalities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `response_streaming_supported`<sup>Required</sup> <a name="response_streaming_supported" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.responseStreamingSupported"></a>

```python
response_streaming_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummariesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsBedrockFoundationModelsModelSummaries
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockFoundationModels.DataAwsBedrockFoundationModelsModelSummaries">DataAwsBedrockFoundationModelsModelSummaries</a>

---



