# `dataAwsLambdaCodeSigningConfig` Submodule <a name="`dataAwsLambdaCodeSigningConfig` Submodule" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdaCodeSigningConfig <a name="DataAwsLambdaCodeSigningConfig" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config aws_lambda_code_signing_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_code_signing_config

dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config#arn DataAwsLambdaCodeSigningConfig#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config#id DataAwsLambdaCodeSigningConfig#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config#arn DataAwsLambdaCodeSigningConfig#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config#id DataAwsLambdaCodeSigningConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_code_signing_config

dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_code_signing_config

dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_code_signing_config

dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.allowedPublishers">allowed_publishers</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList">DataAwsLambdaCodeSigningConfigAllowedPublishersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.configId">config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList">DataAwsLambdaCodeSigningConfigPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `allowed_publishers`<sup>Required</sup> <a name="allowed_publishers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.allowedPublishers"></a>

```python
allowed_publishers: DataAwsLambdaCodeSigningConfigAllowedPublishersList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList">DataAwsLambdaCodeSigningConfigAllowedPublishersList</a>

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.configId"></a>

```python
config_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.policies"></a>

```python
policies: DataAwsLambdaCodeSigningConfigPoliciesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList">DataAwsLambdaCodeSigningConfigPoliciesList</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdaCodeSigningConfigAllowedPublishers <a name="DataAwsLambdaCodeSigningConfigAllowedPublishers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_code_signing_config

dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers()
```


### DataAwsLambdaCodeSigningConfigConfig <a name="DataAwsLambdaCodeSigningConfigConfig" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_code_signing_config

dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config#arn DataAwsLambdaCodeSigningConfig#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config#id DataAwsLambdaCodeSigningConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config#arn DataAwsLambdaCodeSigningConfig#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config#id DataAwsLambdaCodeSigningConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsLambdaCodeSigningConfigPolicies <a name="DataAwsLambdaCodeSigningConfigPolicies" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_code_signing_config

dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLambdaCodeSigningConfigAllowedPublishersList <a name="DataAwsLambdaCodeSigningConfigAllowedPublishersList" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_code_signing_config

dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference <a name="DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_code_signing_config

dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns">signing_profile_version_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers">DataAwsLambdaCodeSigningConfigAllowedPublishers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `signing_profile_version_arns`<sup>Required</sup> <a name="signing_profile_version_arns" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns"></a>

```python
signing_profile_version_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsLambdaCodeSigningConfigAllowedPublishers
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigAllowedPublishers">DataAwsLambdaCodeSigningConfigAllowedPublishers</a>

---


### DataAwsLambdaCodeSigningConfigPoliciesList <a name="DataAwsLambdaCodeSigningConfigPoliciesList" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_code_signing_config

dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLambdaCodeSigningConfigPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsLambdaCodeSigningConfigPoliciesOutputReference <a name="DataAwsLambdaCodeSigningConfigPoliciesOutputReference" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_code_signing_config

dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeployment">untrusted_artifact_on_deployment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies">DataAwsLambdaCodeSigningConfigPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `untrusted_artifact_on_deployment`<sup>Required</sup> <a name="untrusted_artifact_on_deployment" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeployment"></a>

```python
untrusted_artifact_on_deployment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsLambdaCodeSigningConfigPolicies
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaCodeSigningConfig.DataAwsLambdaCodeSigningConfigPolicies">DataAwsLambdaCodeSigningConfigPolicies</a>

---



