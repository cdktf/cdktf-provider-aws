# `dataAwsPollyVoices` Submodule <a name="`dataAwsPollyVoices` Submodule" id="@cdktf/provider-aws.dataAwsPollyVoices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsPollyVoices <a name="DataAwsPollyVoices" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/polly_voices aws_polly_voices}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_polly_voices

dataAwsPollyVoices.DataAwsPollyVoices(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine: str = None,
  include_additional_language_codes: typing.Union[bool, IResolvable] = None,
  language_code: str = None,
  voices: typing.Union[IResolvable, typing.List[DataAwsPollyVoicesVoices]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/polly_voices#engine DataAwsPollyVoices#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.includeAdditionalLanguageCodes">include_additional_language_codes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/polly_voices#include_additional_language_codes DataAwsPollyVoices#include_additional_language_codes}. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.languageCode">language_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/polly_voices#language_code DataAwsPollyVoices#language_code}. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.voices">voices</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>]]</code> | voices block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/polly_voices#engine DataAwsPollyVoices#engine}.

---

##### `include_additional_language_codes`<sup>Optional</sup> <a name="include_additional_language_codes" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.includeAdditionalLanguageCodes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/polly_voices#include_additional_language_codes DataAwsPollyVoices#include_additional_language_codes}.

---

##### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.languageCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/polly_voices#language_code DataAwsPollyVoices#language_code}.

---

##### `voices`<sup>Optional</sup> <a name="voices" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.Initializer.parameter.voices"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>]]

voices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/polly_voices#voices DataAwsPollyVoices#voices}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.putVoices">put_voices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetEngine">reset_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetIncludeAdditionalLanguageCodes">reset_include_additional_language_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetLanguageCode">reset_language_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetVoices">reset_voices</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_voices` <a name="put_voices" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.putVoices"></a>

```python
def put_voices(
  value: typing.Union[IResolvable, typing.List[DataAwsPollyVoicesVoices]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.putVoices.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>]]

---

##### `reset_engine` <a name="reset_engine" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetEngine"></a>

```python
def reset_engine() -> None
```

##### `reset_include_additional_language_codes` <a name="reset_include_additional_language_codes" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetIncludeAdditionalLanguageCodes"></a>

```python
def reset_include_additional_language_codes() -> None
```

##### `reset_language_code` <a name="reset_language_code" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetLanguageCode"></a>

```python
def reset_language_code() -> None
```

##### `reset_voices` <a name="reset_voices" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.resetVoices"></a>

```python
def reset_voices() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsPollyVoices resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_polly_voices

dataAwsPollyVoices.DataAwsPollyVoices.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_polly_voices

dataAwsPollyVoices.DataAwsPollyVoices.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_polly_voices

dataAwsPollyVoices.DataAwsPollyVoices.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_polly_voices

dataAwsPollyVoices.DataAwsPollyVoices.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsPollyVoices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsPollyVoices to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsPollyVoices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/polly_voices#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsPollyVoices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.voices">voices</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList">DataAwsPollyVoicesVoicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.includeAdditionalLanguageCodesInput">include_additional_language_codes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.voicesInput">voices_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.includeAdditionalLanguageCodes">include_additional_language_codes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `voices`<sup>Required</sup> <a name="voices" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.voices"></a>

```python
voices: DataAwsPollyVoicesVoicesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList">DataAwsPollyVoicesVoicesList</a>

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `include_additional_language_codes_input`<sup>Optional</sup> <a name="include_additional_language_codes_input" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.includeAdditionalLanguageCodesInput"></a>

```python
include_additional_language_codes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `voices_input`<sup>Optional</sup> <a name="voices_input" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.voicesInput"></a>

```python
voices_input: typing.Union[IResolvable, typing.List[DataAwsPollyVoicesVoices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>]]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `include_additional_language_codes`<sup>Required</sup> <a name="include_additional_language_codes" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.includeAdditionalLanguageCodes"></a>

```python
include_additional_language_codes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoices.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsPollyVoicesConfig <a name="DataAwsPollyVoicesConfig" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_polly_voices

dataAwsPollyVoices.DataAwsPollyVoicesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine: str = None,
  include_additional_language_codes: typing.Union[bool, IResolvable] = None,
  language_code: str = None,
  voices: typing.Union[IResolvable, typing.List[DataAwsPollyVoicesVoices]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/polly_voices#engine DataAwsPollyVoices#engine}. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.includeAdditionalLanguageCodes">include_additional_language_codes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/polly_voices#include_additional_language_codes DataAwsPollyVoices#include_additional_language_codes}. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.languageCode">language_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/polly_voices#language_code DataAwsPollyVoices#language_code}. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.voices">voices</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>]]</code> | voices block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/polly_voices#engine DataAwsPollyVoices#engine}.

---

##### `include_additional_language_codes`<sup>Optional</sup> <a name="include_additional_language_codes" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.includeAdditionalLanguageCodes"></a>

```python
include_additional_language_codes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/polly_voices#include_additional_language_codes DataAwsPollyVoices#include_additional_language_codes}.

---

##### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/polly_voices#language_code DataAwsPollyVoices#language_code}.

---

##### `voices`<sup>Optional</sup> <a name="voices" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesConfig.property.voices"></a>

```python
voices: typing.Union[IResolvable, typing.List[DataAwsPollyVoicesVoices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>]]

voices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.44.0/docs/data-sources/polly_voices#voices DataAwsPollyVoices#voices}

---

### DataAwsPollyVoicesVoices <a name="DataAwsPollyVoicesVoices" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_polly_voices

dataAwsPollyVoices.DataAwsPollyVoicesVoices()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsPollyVoicesVoicesList <a name="DataAwsPollyVoicesVoicesList" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_polly_voices

dataAwsPollyVoices.DataAwsPollyVoicesVoicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsPollyVoicesVoicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsPollyVoicesVoices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>]]

---


### DataAwsPollyVoicesVoicesOutputReference <a name="DataAwsPollyVoicesVoicesOutputReference" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_polly_voices

dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.additionalLanguageCodes">additional_language_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.gender">gender</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.languageName">language_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.supportedEngines">supported_engines</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_language_codes`<sup>Required</sup> <a name="additional_language_codes" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.additionalLanguageCodes"></a>

```python
additional_language_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gender`<sup>Required</sup> <a name="gender" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.gender"></a>

```python
gender: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `language_name`<sup>Required</sup> <a name="language_name" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.languageName"></a>

```python
language_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `supported_engines`<sup>Required</sup> <a name="supported_engines" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.supportedEngines"></a>

```python
supported_engines: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoicesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsPollyVoicesVoices]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsPollyVoices.DataAwsPollyVoicesVoices">DataAwsPollyVoicesVoices</a>]

---



