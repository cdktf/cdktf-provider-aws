# `dataAwsLambdaInvocation` Submodule <a name="`dataAwsLambdaInvocation` Submodule" id="@cdktf/provider-aws.dataAwsLambdaInvocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdaInvocation <a name="DataAwsLambdaInvocation" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation aws_lambda_invocation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_invocation

dataAwsLambdaInvocation.DataAwsLambdaInvocation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_name: str,
  input: str,
  id: str = None,
  qualifier: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#function_name DataAwsLambdaInvocation#function_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.input">input</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#input DataAwsLambdaInvocation#input}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#id DataAwsLambdaInvocation#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.qualifier">qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#qualifier DataAwsLambdaInvocation#qualifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#function_name DataAwsLambdaInvocation#function_name}.

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.input"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#input DataAwsLambdaInvocation#input}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#id DataAwsLambdaInvocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.qualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#qualifier DataAwsLambdaInvocation#qualifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#region DataAwsLambdaInvocation#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.resetQualifier">reset_qualifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_qualifier` <a name="reset_qualifier" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.resetQualifier"></a>

```python
def reset_qualifier() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsLambdaInvocation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_invocation

dataAwsLambdaInvocation.DataAwsLambdaInvocation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_invocation

dataAwsLambdaInvocation.DataAwsLambdaInvocation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_invocation

dataAwsLambdaInvocation.DataAwsLambdaInvocation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_invocation

dataAwsLambdaInvocation.DataAwsLambdaInvocation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsLambdaInvocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsLambdaInvocation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsLambdaInvocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsLambdaInvocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.inputInput">input_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.qualifierInput">qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.qualifier">qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.inputInput"></a>

```python
input_input: str
```

- *Type:* str

---

##### `qualifier_input`<sup>Optional</sup> <a name="qualifier_input" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.qualifierInput"></a>

```python
qualifier_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdaInvocationConfig <a name="DataAwsLambdaInvocationConfig" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lambda_invocation

dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_name: str,
  input: str,
  id: str = None,
  qualifier: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#function_name DataAwsLambdaInvocation#function_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.input">input</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#input DataAwsLambdaInvocation#input}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#id DataAwsLambdaInvocation#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.qualifier">qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#qualifier DataAwsLambdaInvocation#qualifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#function_name DataAwsLambdaInvocation#function_name}.

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.input"></a>

```python
input: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#input DataAwsLambdaInvocation#input}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#id DataAwsLambdaInvocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#qualifier DataAwsLambdaInvocation#qualifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsLambdaInvocation.DataAwsLambdaInvocationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/lambda_invocation#region DataAwsLambdaInvocation#region}

---



