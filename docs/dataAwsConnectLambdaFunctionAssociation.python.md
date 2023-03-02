# `dataAwsConnectLambdaFunctionAssociation` Submodule <a name="`dataAwsConnectLambdaFunctionAssociation` Submodule" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectLambdaFunctionAssociation <a name="DataAwsConnectLambdaFunctionAssociation" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_lambda_function_association aws_connect_lambda_function_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_lambda_function_association

dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_arn: str,
  instance_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.functionArn">function_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_lambda_function_association#function_arn DataAwsConnectLambdaFunctionAssociation#function_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_lambda_function_association#instance_id DataAwsConnectLambdaFunctionAssociation#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_lambda_function_association#id DataAwsConnectLambdaFunctionAssociation#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.functionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_lambda_function_association#function_arn DataAwsConnectLambdaFunctionAssociation#function_arn}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_lambda_function_association#instance_id DataAwsConnectLambdaFunctionAssociation#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_lambda_function_association#id DataAwsConnectLambdaFunctionAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_lambda_function_association

dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_lambda_function_association

dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_lambda_function_association

dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.functionArnInput">function_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.functionArn">function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `function_arn_input`<sup>Optional</sup> <a name="function_arn_input" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.functionArnInput"></a>

```python
function_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectLambdaFunctionAssociationConfig <a name="DataAwsConnectLambdaFunctionAssociationConfig" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_connect_lambda_function_association

dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_arn: str,
  instance_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.functionArn">function_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_lambda_function_association#function_arn DataAwsConnectLambdaFunctionAssociation#function_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_lambda_function_association#instance_id DataAwsConnectLambdaFunctionAssociation#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_lambda_function_association#id DataAwsConnectLambdaFunctionAssociation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_lambda_function_association#function_arn DataAwsConnectLambdaFunctionAssociation#function_arn}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_lambda_function_association#instance_id DataAwsConnectLambdaFunctionAssociation#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_lambda_function_association#id DataAwsConnectLambdaFunctionAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



