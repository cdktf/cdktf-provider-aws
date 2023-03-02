# `dataAwsKmsSecrets` Submodule <a name="`dataAwsKmsSecrets` Submodule" id="@cdktf/provider-aws.dataAwsKmsSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKmsSecrets <a name="DataAwsKmsSecrets" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets aws_kms_secrets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_secrets

dataAwsKmsSecrets.DataAwsKmsSecrets(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  secret: typing.Union[IResolvable, typing.List[DataAwsKmsSecretsSecret]],
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.secret">secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>]]</code> | secret block. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#id DataAwsKmsSecrets#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.secret"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>]]

secret block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#secret DataAwsKmsSecrets#secret}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#id DataAwsKmsSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_secret` <a name="put_secret" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.putSecret"></a>

```python
def put_secret(
  value: typing.Union[IResolvable, typing.List[DataAwsKmsSecretsSecret]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.putSecret.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_secrets

dataAwsKmsSecrets.DataAwsKmsSecrets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_secrets

dataAwsKmsSecrets.DataAwsKmsSecrets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_secrets

dataAwsKmsSecrets.DataAwsKmsSecrets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.plaintext">plaintext</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList">DataAwsKmsSecretsSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.secretInput">secret_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.plaintext"></a>

```python
plaintext: StringMap
```

- *Type:* cdktf.StringMap

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.secret"></a>

```python
secret: DataAwsKmsSecretsSecretList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList">DataAwsKmsSecretsSecretList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.secretInput"></a>

```python
secret_input: typing.Union[IResolvable, typing.List[DataAwsKmsSecretsSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecrets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKmsSecretsConfig <a name="DataAwsKmsSecretsConfig" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_secrets

dataAwsKmsSecrets.DataAwsKmsSecretsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  secret: typing.Union[IResolvable, typing.List[DataAwsKmsSecretsSecret]],
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.secret">secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>]]</code> | secret block. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#id DataAwsKmsSecrets#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.secret"></a>

```python
secret: typing.Union[IResolvable, typing.List[DataAwsKmsSecretsSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>]]

secret block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#secret DataAwsKmsSecrets#secret}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#id DataAwsKmsSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsKmsSecretsSecret <a name="DataAwsKmsSecretsSecret" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_secrets

dataAwsKmsSecrets.DataAwsKmsSecretsSecret(
  name: str,
  payload: str,
  context: typing.Mapping[str] = None,
  encryption_algorithm: str = None,
  grant_tokens: typing.List[str] = None,
  key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#name DataAwsKmsSecrets#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.payload">payload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#payload DataAwsKmsSecrets#payload}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.context">context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#context DataAwsKmsSecrets#context}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#encryption_algorithm DataAwsKmsSecrets#encryption_algorithm}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.grantTokens">grant_tokens</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#grant_tokens DataAwsKmsSecrets#grant_tokens}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#key_id DataAwsKmsSecrets#key_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#name DataAwsKmsSecrets#name}.

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.payload"></a>

```python
payload: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#payload DataAwsKmsSecrets#payload}.

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.context"></a>

```python
context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#context DataAwsKmsSecrets#context}.

---

##### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#encryption_algorithm DataAwsKmsSecrets#encryption_algorithm}.

---

##### `grant_tokens`<sup>Optional</sup> <a name="grant_tokens" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.grantTokens"></a>

```python
grant_tokens: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#grant_tokens DataAwsKmsSecrets#grant_tokens}.

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets#key_id DataAwsKmsSecrets#key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsKmsSecretsSecretList <a name="DataAwsKmsSecretsSecretList" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_secrets

dataAwsKmsSecrets.DataAwsKmsSecretsSecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsKmsSecretsSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsKmsSecretsSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>]]

---


### DataAwsKmsSecretsSecretOutputReference <a name="DataAwsKmsSecretsSecretOutputReference" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_secrets

dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resetContext">reset_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resetEncryptionAlgorithm">reset_encryption_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resetGrantTokens">reset_grant_tokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resetKeyId">reset_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_context` <a name="reset_context" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resetContext"></a>

```python
def reset_context() -> None
```

##### `reset_encryption_algorithm` <a name="reset_encryption_algorithm" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resetEncryptionAlgorithm"></a>

```python
def reset_encryption_algorithm() -> None
```

##### `reset_grant_tokens` <a name="reset_grant_tokens" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resetGrantTokens"></a>

```python
def reset_grant_tokens() -> None
```

##### `reset_key_id` <a name="reset_key_id" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.resetKeyId"></a>

```python
def reset_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.contextInput">context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithmInput">encryption_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.grantTokensInput">grant_tokens_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.payloadInput">payload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.context">context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.grantTokens">grant_tokens</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.payload">payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.contextInput"></a>

```python
context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `encryption_algorithm_input`<sup>Optional</sup> <a name="encryption_algorithm_input" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithmInput"></a>

```python
encryption_algorithm_input: str
```

- *Type:* str

---

##### `grant_tokens_input`<sup>Optional</sup> <a name="grant_tokens_input" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.grantTokensInput"></a>

```python
grant_tokens_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.payloadInput"></a>

```python
payload_input: str
```

- *Type:* str

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.context"></a>

```python
context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

---

##### `grant_tokens`<sup>Required</sup> <a name="grant_tokens" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.grantTokens"></a>

```python
grant_tokens: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.payload"></a>

```python
payload: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecretOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsKmsSecretsSecret, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsKmsSecrets.DataAwsKmsSecretsSecret">DataAwsKmsSecretsSecret</a>, cdktf.IResolvable]

---



