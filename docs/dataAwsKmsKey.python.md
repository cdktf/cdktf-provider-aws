# `dataAwsKmsKey` Submodule <a name="`dataAwsKmsKey` Submodule" id="@cdktf/provider-aws.dataAwsKmsKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKmsKey <a name="DataAwsKmsKey" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_key aws_kms_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_key

dataAwsKmsKey.DataAwsKmsKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_id: str,
  grant_tokens: typing.List[str] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#key_id DataAwsKmsKey#key_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.grantTokens">grant_tokens</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#grant_tokens DataAwsKmsKey#grant_tokens}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#id DataAwsKmsKey#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.keyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#key_id DataAwsKmsKey#key_id}.

---

##### `grant_tokens`<sup>Optional</sup> <a name="grant_tokens" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.grantTokens"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#grant_tokens DataAwsKmsKey#grant_tokens}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#id DataAwsKmsKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetGrantTokens">reset_grant_tokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_grant_tokens` <a name="reset_grant_tokens" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetGrantTokens"></a>

```python
def reset_grant_tokens() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_key

dataAwsKmsKey.DataAwsKmsKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_key

dataAwsKmsKey.DataAwsKmsKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_key

dataAwsKmsKey.DataAwsKmsKey.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.customerMasterKeySpec">customer_master_key_spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.deletionDate">deletion_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.expirationModel">expiration_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyManager">key_manager</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyState">key_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyUsage">key_usage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.multiRegion">multi_region</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.multiRegionConfiguration">multi_region_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList">DataAwsKmsKeyMultiRegionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.validTo">valid_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.grantTokensInput">grant_tokens_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.grantTokens">grant_tokens</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `customer_master_key_spec`<sup>Required</sup> <a name="customer_master_key_spec" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.customerMasterKeySpec"></a>

```python
customer_master_key_spec: str
```

- *Type:* str

---

##### `deletion_date`<sup>Required</sup> <a name="deletion_date" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.deletionDate"></a>

```python
deletion_date: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `expiration_model`<sup>Required</sup> <a name="expiration_model" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.expirationModel"></a>

```python
expiration_model: str
```

- *Type:* str

---

##### `key_manager`<sup>Required</sup> <a name="key_manager" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyManager"></a>

```python
key_manager: str
```

- *Type:* str

---

##### `key_state`<sup>Required</sup> <a name="key_state" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyState"></a>

```python
key_state: str
```

- *Type:* str

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyUsage"></a>

```python
key_usage: str
```

- *Type:* str

---

##### `multi_region`<sup>Required</sup> <a name="multi_region" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.multiRegion"></a>

```python
multi_region: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `multi_region_configuration`<sup>Required</sup> <a name="multi_region_configuration" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.multiRegionConfiguration"></a>

```python
multi_region_configuration: DataAwsKmsKeyMultiRegionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList">DataAwsKmsKeyMultiRegionConfigurationList</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `valid_to`<sup>Required</sup> <a name="valid_to" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.validTo"></a>

```python
valid_to: str
```

- *Type:* str

---

##### `grant_tokens_input`<sup>Optional</sup> <a name="grant_tokens_input" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.grantTokensInput"></a>

```python
grant_tokens_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `grant_tokens`<sup>Required</sup> <a name="grant_tokens" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.grantTokens"></a>

```python
grant_tokens: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKmsKeyConfig <a name="DataAwsKmsKeyConfig" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_key

dataAwsKmsKey.DataAwsKmsKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  key_id: str,
  grant_tokens: typing.List[str] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#key_id DataAwsKmsKey#key_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.grantTokens">grant_tokens</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#grant_tokens DataAwsKmsKey#grant_tokens}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#id DataAwsKmsKey#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#key_id DataAwsKmsKey#key_id}.

---

##### `grant_tokens`<sup>Optional</sup> <a name="grant_tokens" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.grantTokens"></a>

```python
grant_tokens: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#grant_tokens DataAwsKmsKey#grant_tokens}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key#id DataAwsKmsKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsKmsKeyMultiRegionConfiguration <a name="DataAwsKmsKeyMultiRegionConfiguration" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_key

dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfiguration()
```


### DataAwsKmsKeyMultiRegionConfigurationPrimaryKey <a name="DataAwsKmsKeyMultiRegionConfigurationPrimaryKey" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_key

dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey()
```


### DataAwsKmsKeyMultiRegionConfigurationReplicaKeys <a name="DataAwsKmsKeyMultiRegionConfigurationReplicaKeys" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_key

dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsKmsKeyMultiRegionConfigurationList <a name="DataAwsKmsKeyMultiRegionConfigurationList" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_key

dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsKmsKeyMultiRegionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsKmsKeyMultiRegionConfigurationOutputReference <a name="DataAwsKmsKeyMultiRegionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_key

dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.multiRegionKeyType">multi_region_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.primaryKey">primary_key</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList">DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.replicaKeys">replica_keys</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList">DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfiguration">DataAwsKmsKeyMultiRegionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multi_region_key_type`<sup>Required</sup> <a name="multi_region_key_type" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.multiRegionKeyType"></a>

```python
multi_region_key_type: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.primaryKey"></a>

```python
primary_key: DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList">DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList</a>

---

##### `replica_keys`<sup>Required</sup> <a name="replica_keys" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.replicaKeys"></a>

```python
replica_keys: DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList">DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsKmsKeyMultiRegionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfiguration">DataAwsKmsKeyMultiRegionConfiguration</a>

---


### DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList <a name="DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_key

dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference <a name="DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_key

dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey">DataAwsKmsKeyMultiRegionConfigurationPrimaryKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsKmsKeyMultiRegionConfigurationPrimaryKey
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationPrimaryKey">DataAwsKmsKeyMultiRegionConfigurationPrimaryKey</a>

---


### DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList <a name="DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_key

dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference <a name="DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kms_key

dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys">DataAwsKmsKeyMultiRegionConfigurationReplicaKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsKmsKeyMultiRegionConfigurationReplicaKeys
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKmsKey.DataAwsKmsKeyMultiRegionConfigurationReplicaKeys">DataAwsKmsKeyMultiRegionConfigurationReplicaKeys</a>

---



