# `dataAwsCognitoUserPoolClient` Submodule <a name="`dataAwsCognitoUserPoolClient` Submodule" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCognitoUserPoolClient <a name="DataAwsCognitoUserPoolClient" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client aws_cognito_user_pool_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_user_pool_client

dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_id: str,
  user_pool_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#client_id DataAwsCognitoUserPoolClient#client_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#user_pool_id DataAwsCognitoUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#id DataAwsCognitoUserPoolClient#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#client_id DataAwsCognitoUserPoolClient#client_id}.

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.userPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#user_pool_id DataAwsCognitoUserPoolClient#user_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#id DataAwsCognitoUserPoolClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_user_pool_client

dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_user_pool_client

dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_user_pool_client

dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.accessTokenValidity">access_token_validity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthFlows">allowed_oauth_flows</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthFlowsUserPoolClient">allowed_oauth_flows_user_pool_client</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthScopes">allowed_oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.analyticsConfiguration">analytics_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList">DataAwsCognitoUserPoolClientAnalyticsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.callbackUrls">callback_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.defaultRedirectUri">default_redirect_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.enablePropagateAdditionalUserContextData">enable_propagate_additional_user_context_data</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.enableTokenRevocation">enable_token_revocation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.explicitAuthFlows">explicit_auth_flows</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.generateSecret">generate_secret</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.idTokenValidity">id_token_validity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.logoutUrls">logout_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.preventUserExistenceErrors">prevent_user_existence_errors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.readAttributes">read_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.refreshTokenValidity">refresh_token_validity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.supportedIdentityProviders">supported_identity_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.tokenValidityUnits">token_validity_units</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList">DataAwsCognitoUserPoolClientTokenValidityUnitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.writeAttributes">write_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_token_validity`<sup>Required</sup> <a name="access_token_validity" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.accessTokenValidity"></a>

```python
access_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_oauth_flows`<sup>Required</sup> <a name="allowed_oauth_flows" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthFlows"></a>

```python
allowed_oauth_flows: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_oauth_flows_user_pool_client`<sup>Required</sup> <a name="allowed_oauth_flows_user_pool_client" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthFlowsUserPoolClient"></a>

```python
allowed_oauth_flows_user_pool_client: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `allowed_oauth_scopes`<sup>Required</sup> <a name="allowed_oauth_scopes" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.allowedOauthScopes"></a>

```python
allowed_oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `analytics_configuration`<sup>Required</sup> <a name="analytics_configuration" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.analyticsConfiguration"></a>

```python
analytics_configuration: DataAwsCognitoUserPoolClientAnalyticsConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList">DataAwsCognitoUserPoolClientAnalyticsConfigurationList</a>

---

##### `callback_urls`<sup>Required</sup> <a name="callback_urls" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.callbackUrls"></a>

```python
callback_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `default_redirect_uri`<sup>Required</sup> <a name="default_redirect_uri" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.defaultRedirectUri"></a>

```python
default_redirect_uri: str
```

- *Type:* str

---

##### `enable_propagate_additional_user_context_data`<sup>Required</sup> <a name="enable_propagate_additional_user_context_data" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.enablePropagateAdditionalUserContextData"></a>

```python
enable_propagate_additional_user_context_data: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_token_revocation`<sup>Required</sup> <a name="enable_token_revocation" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.enableTokenRevocation"></a>

```python
enable_token_revocation: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `explicit_auth_flows`<sup>Required</sup> <a name="explicit_auth_flows" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.explicitAuthFlows"></a>

```python
explicit_auth_flows: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `generate_secret`<sup>Required</sup> <a name="generate_secret" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.generateSecret"></a>

```python
generate_secret: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id_token_validity`<sup>Required</sup> <a name="id_token_validity" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.idTokenValidity"></a>

```python
id_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `logout_urls`<sup>Required</sup> <a name="logout_urls" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.logoutUrls"></a>

```python
logout_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `prevent_user_existence_errors`<sup>Required</sup> <a name="prevent_user_existence_errors" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.preventUserExistenceErrors"></a>

```python
prevent_user_existence_errors: str
```

- *Type:* str

---

##### `read_attributes`<sup>Required</sup> <a name="read_attributes" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.readAttributes"></a>

```python
read_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `refresh_token_validity`<sup>Required</sup> <a name="refresh_token_validity" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.refreshTokenValidity"></a>

```python
refresh_token_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `supported_identity_providers`<sup>Required</sup> <a name="supported_identity_providers" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.supportedIdentityProviders"></a>

```python
supported_identity_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_validity_units`<sup>Required</sup> <a name="token_validity_units" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.tokenValidityUnits"></a>

```python
token_validity_units: DataAwsCognitoUserPoolClientTokenValidityUnitsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList">DataAwsCognitoUserPoolClientTokenValidityUnitsList</a>

---

##### `write_attributes`<sup>Required</sup> <a name="write_attributes" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.writeAttributes"></a>

```python
write_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClient.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCognitoUserPoolClientAnalyticsConfiguration <a name="DataAwsCognitoUserPoolClientAnalyticsConfiguration" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_user_pool_client

dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfiguration()
```


### DataAwsCognitoUserPoolClientConfig <a name="DataAwsCognitoUserPoolClientConfig" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_user_pool_client

dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_id: str,
  user_pool_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#client_id DataAwsCognitoUserPoolClient#client_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#user_pool_id DataAwsCognitoUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#id DataAwsCognitoUserPoolClient#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#client_id DataAwsCognitoUserPoolClient#client_id}.

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#user_pool_id DataAwsCognitoUserPoolClient#user_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pool_client#id DataAwsCognitoUserPoolClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsCognitoUserPoolClientTokenValidityUnits <a name="DataAwsCognitoUserPoolClientTokenValidityUnits" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnits.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_user_pool_client

dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnits()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCognitoUserPoolClientAnalyticsConfigurationList <a name="DataAwsCognitoUserPoolClientAnalyticsConfigurationList" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_user_pool_client

dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference <a name="DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_user_pool_client

dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn">application_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared">user_data_shared</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfiguration">DataAwsCognitoUserPoolClientAnalyticsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_arn`<sup>Required</sup> <a name="application_arn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn"></a>

```python
application_arn: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `user_data_shared`<sup>Required</sup> <a name="user_data_shared" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared"></a>

```python
user_data_shared: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCognitoUserPoolClientAnalyticsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientAnalyticsConfiguration">DataAwsCognitoUserPoolClientAnalyticsConfiguration</a>

---


### DataAwsCognitoUserPoolClientTokenValidityUnitsList <a name="DataAwsCognitoUserPoolClientTokenValidityUnitsList" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_user_pool_client

dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference <a name="DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cognito_user_pool_client

dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken">id_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken">refresh_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnits">DataAwsCognitoUserPoolClientTokenValidityUnits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `id_token`<sup>Required</sup> <a name="id_token" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken"></a>

```python
id_token: str
```

- *Type:* str

---

##### `refresh_token`<sup>Required</sup> <a name="refresh_token" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken"></a>

```python
refresh_token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCognitoUserPoolClientTokenValidityUnits
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCognitoUserPoolClient.DataAwsCognitoUserPoolClientTokenValidityUnits">DataAwsCognitoUserPoolClientTokenValidityUnits</a>

---



