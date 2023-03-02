# `dataAwsLambdaFunctionUrl` Submodule <a name="`dataAwsLambdaFunctionUrl` Submodule" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdaFunctionUrl <a name="DataAwsLambdaFunctionUrl" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url aws_lambda_function_url}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_function_url

dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_name: str,
  id: str = None,
  qualifier: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#function_name DataAwsLambdaFunctionUrl#function_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#id DataAwsLambdaFunctionUrl#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.qualifier">qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#qualifier DataAwsLambdaFunctionUrl#qualifier}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#function_name DataAwsLambdaFunctionUrl#function_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#id DataAwsLambdaFunctionUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.Initializer.parameter.qualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#qualifier DataAwsLambdaFunctionUrl#qualifier}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetQualifier">reset_qualifier</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_qualifier` <a name="reset_qualifier" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.resetQualifier"></a>

```python
def reset_qualifier() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_function_url

dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_function_url

dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_function_url

dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.authorizationType">authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList">DataAwsLambdaFunctionUrlCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionArn">function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionUrl">function_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.urlId">url_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.qualifierInput">qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.qualifier">qualifier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.cors"></a>

```python
cors: DataAwsLambdaFunctionUrlCorsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList">DataAwsLambdaFunctionUrlCorsList</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

---

##### `function_url`<sup>Required</sup> <a name="function_url" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionUrl"></a>

```python
function_url: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `url_id`<sup>Required</sup> <a name="url_id" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.urlId"></a>

```python
url_id: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `qualifier_input`<sup>Optional</sup> <a name="qualifier_input" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.qualifierInput"></a>

```python
qualifier_input: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdaFunctionUrlConfig <a name="DataAwsLambdaFunctionUrlConfig" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_function_url

dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_name: str,
  id: str = None,
  qualifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#function_name DataAwsLambdaFunctionUrl#function_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#id DataAwsLambdaFunctionUrl#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.qualifier">qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#qualifier DataAwsLambdaFunctionUrl#qualifier}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#function_name DataAwsLambdaFunctionUrl#function_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#id DataAwsLambdaFunctionUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlConfig.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function_url#qualifier DataAwsLambdaFunctionUrl#qualifier}.

---

### DataAwsLambdaFunctionUrlCors <a name="DataAwsLambdaFunctionUrlCors" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCors.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_function_url

dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCors()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLambdaFunctionUrlCorsList <a name="DataAwsLambdaFunctionUrlCorsList" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_function_url

dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLambdaFunctionUrlCorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsLambdaFunctionUrlCorsOutputReference <a name="DataAwsLambdaFunctionUrlCorsOutputReference" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_function_url

dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowCredentials">allow_credentials</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowHeaders">allow_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowMethods">allow_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowOrigins">allow_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCors">DataAwsLambdaFunctionUrlCors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_credentials`<sup>Required</sup> <a name="allow_credentials" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowCredentials"></a>

```python
allow_credentials: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `allow_headers`<sup>Required</sup> <a name="allow_headers" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowHeaders"></a>

```python
allow_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_methods`<sup>Required</sup> <a name="allow_methods" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowMethods"></a>

```python
allow_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_origins`<sup>Required</sup> <a name="allow_origins" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.allowOrigins"></a>

```python
allow_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expose_headers`<sup>Required</sup> <a name="expose_headers" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age`<sup>Required</sup> <a name="max_age" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsLambdaFunctionUrlCors
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLambdaFunctionUrl.DataAwsLambdaFunctionUrlCors">DataAwsLambdaFunctionUrlCors</a>

---



