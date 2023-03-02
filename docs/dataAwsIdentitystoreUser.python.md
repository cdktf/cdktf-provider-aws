# `dataAwsIdentitystoreUser` Submodule <a name="`dataAwsIdentitystoreUser` Submodule" id="@cdktf/provider-aws.dataAwsIdentitystoreUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIdentitystoreUser <a name="DataAwsIdentitystoreUser" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user aws_identitystore_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUser(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  identity_store_id: str,
  alternate_identifier: DataAwsIdentitystoreUserAlternateIdentifier = None,
  filter: DataAwsIdentitystoreUserFilter = None,
  id: str = None,
  user_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.identityStoreId">identity_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#identity_store_id DataAwsIdentitystoreUser#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.alternateIdentifier">alternate_identifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a></code> | alternate_identifier block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#user_id DataAwsIdentitystoreUser#user_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.identityStoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#identity_store_id DataAwsIdentitystoreUser#identity_store_id}.

---

##### `alternate_identifier`<sup>Optional</sup> <a name="alternate_identifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.alternateIdentifier"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a>

alternate_identifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#alternate_identifier DataAwsIdentitystoreUser#alternate_identifier}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#filter DataAwsIdentitystoreUser#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.Initializer.parameter.userId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#user_id DataAwsIdentitystoreUser#user_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putAlternateIdentifier">put_alternate_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetAlternateIdentifier">reset_alternate_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_alternate_identifier` <a name="put_alternate_identifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putAlternateIdentifier"></a>

```python
def put_alternate_identifier(
  external_id: DataAwsIdentitystoreUserAlternateIdentifierExternalId = None,
  unique_attribute: DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute = None
) -> None
```

###### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putAlternateIdentifier.parameter.externalId"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a>

external_id block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#external_id DataAwsIdentitystoreUser#external_id}

---

###### `unique_attribute`<sup>Optional</sup> <a name="unique_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putAlternateIdentifier.parameter.uniqueAttribute"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a>

unique_attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#unique_attribute DataAwsIdentitystoreUser#unique_attribute}

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putFilter"></a>

```python
def put_filter(
  attribute_path: str,
  attribute_value: str
) -> None
```

###### `attribute_path`<sup>Required</sup> <a name="attribute_path" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putFilter.parameter.attributePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}.

---

###### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.putFilter.parameter.attributeValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}.

---

##### `reset_alternate_identifier` <a name="reset_alternate_identifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetAlternateIdentifier"></a>

```python
def reset_alternate_identifier() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.resetUserId"></a>

```python
def reset_user_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.addresses">addresses</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList">DataAwsIdentitystoreUserAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.alternateIdentifier">alternate_identifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference">DataAwsIdentitystoreUserAlternateIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.emails">emails</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList">DataAwsIdentitystoreUserEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.externalIds">external_ids</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList">DataAwsIdentitystoreUserExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference">DataAwsIdentitystoreUserFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.name">name</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList">DataAwsIdentitystoreUserNameList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.nickname">nickname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.phoneNumbers">phone_numbers</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList">DataAwsIdentitystoreUserPhoneNumbersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.profileUrl">profile_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userType">user_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.alternateIdentifierInput">alternate_identifier_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.identityStoreIdInput">identity_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.identityStoreId">identity_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.addresses"></a>

```python
addresses: DataAwsIdentitystoreUserAddressesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList">DataAwsIdentitystoreUserAddressesList</a>

---

##### `alternate_identifier`<sup>Required</sup> <a name="alternate_identifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.alternateIdentifier"></a>

```python
alternate_identifier: DataAwsIdentitystoreUserAlternateIdentifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference">DataAwsIdentitystoreUserAlternateIdentifierOutputReference</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.emails"></a>

```python
emails: DataAwsIdentitystoreUserEmailsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList">DataAwsIdentitystoreUserEmailsList</a>

---

##### `external_ids`<sup>Required</sup> <a name="external_ids" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.externalIds"></a>

```python
external_ids: DataAwsIdentitystoreUserExternalIdsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList">DataAwsIdentitystoreUserExternalIdsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.filter"></a>

```python
filter: DataAwsIdentitystoreUserFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference">DataAwsIdentitystoreUserFilterOutputReference</a>

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.name"></a>

```python
name: DataAwsIdentitystoreUserNameList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList">DataAwsIdentitystoreUserNameList</a>

---

##### `nickname`<sup>Required</sup> <a name="nickname" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.nickname"></a>

```python
nickname: str
```

- *Type:* str

---

##### `phone_numbers`<sup>Required</sup> <a name="phone_numbers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.phoneNumbers"></a>

```python
phone_numbers: DataAwsIdentitystoreUserPhoneNumbersList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList">DataAwsIdentitystoreUserPhoneNumbersList</a>

---

##### `preferred_language`<sup>Required</sup> <a name="preferred_language" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

---

##### `profile_url`<sup>Required</sup> <a name="profile_url" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.profileUrl"></a>

```python
profile_url: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `user_type`<sup>Required</sup> <a name="user_type" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userType"></a>

```python
user_type: str
```

- *Type:* str

---

##### `alternate_identifier_input`<sup>Optional</sup> <a name="alternate_identifier_input" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.alternateIdentifierInput"></a>

```python
alternate_identifier_input: DataAwsIdentitystoreUserAlternateIdentifier
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.filterInput"></a>

```python
filter_input: DataAwsIdentitystoreUserFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a>

---

##### `identity_store_id_input`<sup>Optional</sup> <a name="identity_store_id_input" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.identityStoreIdInput"></a>

```python
identity_store_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.identityStoreId"></a>

```python
identity_store_id: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIdentitystoreUserAddresses <a name="DataAwsIdentitystoreUserAddresses" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses()
```


### DataAwsIdentitystoreUserAlternateIdentifier <a name="DataAwsIdentitystoreUserAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier(
  external_id: DataAwsIdentitystoreUserAlternateIdentifierExternalId = None,
  unique_attribute: DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.property.externalId">external_id</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a></code> | external_id block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.property.uniqueAttribute">unique_attribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a></code> | unique_attribute block. |

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.property.externalId"></a>

```python
external_id: DataAwsIdentitystoreUserAlternateIdentifierExternalId
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a>

external_id block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#external_id DataAwsIdentitystoreUser#external_id}

---

##### `unique_attribute`<sup>Optional</sup> <a name="unique_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier.property.uniqueAttribute"></a>

```python
unique_attribute: DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a>

unique_attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#unique_attribute DataAwsIdentitystoreUser#unique_attribute}

---

### DataAwsIdentitystoreUserAlternateIdentifierExternalId <a name="DataAwsIdentitystoreUserAlternateIdentifierExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId(
  id: str,
  issuer: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#issuer DataAwsIdentitystoreUser#issuer}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#issuer DataAwsIdentitystoreUser#issuer}.

---

### DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute <a name="DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute(
  attribute_path: str,
  attribute_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.property.attributePath">attribute_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.property.attributeValue">attribute_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}. |

---

##### `attribute_path`<sup>Required</sup> <a name="attribute_path" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.property.attributePath"></a>

```python
attribute_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}.

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}.

---

### DataAwsIdentitystoreUserConfig <a name="DataAwsIdentitystoreUserConfig" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  identity_store_id: str,
  alternate_identifier: DataAwsIdentitystoreUserAlternateIdentifier = None,
  filter: DataAwsIdentitystoreUserFilter = None,
  id: str = None,
  user_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.identityStoreId">identity_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#identity_store_id DataAwsIdentitystoreUser#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.alternateIdentifier">alternate_identifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a></code> | alternate_identifier block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#user_id DataAwsIdentitystoreUser#user_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.identityStoreId"></a>

```python
identity_store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#identity_store_id DataAwsIdentitystoreUser#identity_store_id}.

---

##### `alternate_identifier`<sup>Optional</sup> <a name="alternate_identifier" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.alternateIdentifier"></a>

```python
alternate_identifier: DataAwsIdentitystoreUserAlternateIdentifier
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a>

alternate_identifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#alternate_identifier DataAwsIdentitystoreUser#alternate_identifier}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.filter"></a>

```python
filter: DataAwsIdentitystoreUserFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#filter DataAwsIdentitystoreUser#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#user_id DataAwsIdentitystoreUser#user_id}.

---

### DataAwsIdentitystoreUserEmails <a name="DataAwsIdentitystoreUserEmails" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails()
```


### DataAwsIdentitystoreUserExternalIds <a name="DataAwsIdentitystoreUserExternalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds()
```


### DataAwsIdentitystoreUserFilter <a name="DataAwsIdentitystoreUserFilter" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter(
  attribute_path: str,
  attribute_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.property.attributePath">attribute_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.property.attributeValue">attribute_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}. |

---

##### `attribute_path`<sup>Required</sup> <a name="attribute_path" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.property.attributePath"></a>

```python
attribute_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}.

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}.

---

### DataAwsIdentitystoreUserName <a name="DataAwsIdentitystoreUserName" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName()
```


### DataAwsIdentitystoreUserPhoneNumbers <a name="DataAwsIdentitystoreUserPhoneNumbers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsIdentitystoreUserAddressesList <a name="DataAwsIdentitystoreUserAddressesList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsIdentitystoreUserAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsIdentitystoreUserAddressesOutputReference <a name="DataAwsIdentitystoreUserAddressesOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.formatted">formatted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.primary">primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.streetAddress">street_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses">DataAwsIdentitystoreUserAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.formatted"></a>

```python
formatted: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.primary"></a>

```python
primary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `street_address`<sup>Required</sup> <a name="street_address" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddressesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIdentitystoreUserAddresses
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAddresses">DataAwsIdentitystoreUserAddresses</a>

---


### DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference <a name="DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIdentitystoreUserAlternateIdentifierExternalId
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a>

---


### DataAwsIdentitystoreUserAlternateIdentifierOutputReference <a name="DataAwsIdentitystoreUserAlternateIdentifierOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putExternalId">put_external_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putUniqueAttribute">put_unique_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resetUniqueAttribute">reset_unique_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_external_id` <a name="put_external_id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putExternalId"></a>

```python
def put_external_id(
  id: str,
  issuer: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putExternalId.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#id DataAwsIdentitystoreUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putExternalId.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#issuer DataAwsIdentitystoreUser#issuer}.

---

##### `put_unique_attribute` <a name="put_unique_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putUniqueAttribute"></a>

```python
def put_unique_attribute(
  attribute_path: str,
  attribute_value: str
) -> None
```

###### `attribute_path`<sup>Required</sup> <a name="attribute_path" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putUniqueAttribute.parameter.attributePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_path DataAwsIdentitystoreUser#attribute_path}.

---

###### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.putUniqueAttribute.parameter.attributeValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user#attribute_value DataAwsIdentitystoreUser#attribute_value}.

---

##### `reset_external_id` <a name="reset_external_id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_unique_attribute` <a name="reset_unique_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.resetUniqueAttribute"></a>

```python
def reset_unique_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.externalId">external_id</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference">DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.uniqueAttribute">unique_attribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.externalIdInput">external_id_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.uniqueAttributeInput">unique_attribute_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.externalId"></a>

```python
external_id: DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference">DataAwsIdentitystoreUserAlternateIdentifierExternalIdOutputReference</a>

---

##### `unique_attribute`<sup>Required</sup> <a name="unique_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.uniqueAttribute"></a>

```python
unique_attribute: DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference</a>

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.externalIdInput"></a>

```python
external_id_input: DataAwsIdentitystoreUserAlternateIdentifierExternalId
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierExternalId">DataAwsIdentitystoreUserAlternateIdentifierExternalId</a>

---

##### `unique_attribute_input`<sup>Optional</sup> <a name="unique_attribute_input" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.uniqueAttributeInput"></a>

```python
unique_attribute_input: DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIdentitystoreUserAlternateIdentifier
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifier">DataAwsIdentitystoreUserAlternateIdentifier</a>

---


### DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference <a name="DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributePathInput">attribute_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributeValueInput">attribute_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributePath">attribute_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_path_input`<sup>Optional</sup> <a name="attribute_path_input" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributePathInput"></a>

```python
attribute_path_input: str
```

- *Type:* str

---

##### `attribute_value_input`<sup>Optional</sup> <a name="attribute_value_input" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributeValueInput"></a>

```python
attribute_value_input: str
```

- *Type:* str

---

##### `attribute_path`<sup>Required</sup> <a name="attribute_path" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributePath"></a>

```python
attribute_path: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttributeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreUserAlternateIdentifierUniqueAttribute</a>

---


### DataAwsIdentitystoreUserEmailsList <a name="DataAwsIdentitystoreUserEmailsList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsIdentitystoreUserEmailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsIdentitystoreUserEmailsOutputReference <a name="DataAwsIdentitystoreUserEmailsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.primary">primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails">DataAwsIdentitystoreUserEmails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.primary"></a>

```python
primary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIdentitystoreUserEmails
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserEmails">DataAwsIdentitystoreUserEmails</a>

---


### DataAwsIdentitystoreUserExternalIdsList <a name="DataAwsIdentitystoreUserExternalIdsList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsIdentitystoreUserExternalIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsIdentitystoreUserExternalIdsOutputReference <a name="DataAwsIdentitystoreUserExternalIdsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds">DataAwsIdentitystoreUserExternalIds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIdsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIdentitystoreUserExternalIds
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserExternalIds">DataAwsIdentitystoreUserExternalIds</a>

---


### DataAwsIdentitystoreUserFilterOutputReference <a name="DataAwsIdentitystoreUserFilterOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributePathInput">attribute_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributeValueInput">attribute_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributePath">attribute_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_path_input`<sup>Optional</sup> <a name="attribute_path_input" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributePathInput"></a>

```python
attribute_path_input: str
```

- *Type:* str

---

##### `attribute_value_input`<sup>Optional</sup> <a name="attribute_value_input" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributeValueInput"></a>

```python
attribute_value_input: str
```

- *Type:* str

---

##### `attribute_path`<sup>Required</sup> <a name="attribute_path" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributePath"></a>

```python
attribute_path: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIdentitystoreUserFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserFilter">DataAwsIdentitystoreUserFilter</a>

---


### DataAwsIdentitystoreUserNameList <a name="DataAwsIdentitystoreUserNameList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsIdentitystoreUserNameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsIdentitystoreUserNameOutputReference <a name="DataAwsIdentitystoreUserNameOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.familyName">family_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.formatted">formatted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.honorificPrefix">honorific_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.honorificSuffix">honorific_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.middleName">middle_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName">DataAwsIdentitystoreUserName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `family_name`<sup>Required</sup> <a name="family_name" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.familyName"></a>

```python
family_name: str
```

- *Type:* str

---

##### `formatted`<sup>Required</sup> <a name="formatted" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.formatted"></a>

```python
formatted: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `honorific_prefix`<sup>Required</sup> <a name="honorific_prefix" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.honorificPrefix"></a>

```python
honorific_prefix: str
```

- *Type:* str

---

##### `honorific_suffix`<sup>Required</sup> <a name="honorific_suffix" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.honorificSuffix"></a>

```python
honorific_suffix: str
```

- *Type:* str

---

##### `middle_name`<sup>Required</sup> <a name="middle_name" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserNameOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIdentitystoreUserName
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserName">DataAwsIdentitystoreUserName</a>

---


### DataAwsIdentitystoreUserPhoneNumbersList <a name="DataAwsIdentitystoreUserPhoneNumbersList" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsIdentitystoreUserPhoneNumbersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsIdentitystoreUserPhoneNumbersOutputReference <a name="DataAwsIdentitystoreUserPhoneNumbersOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_user

dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.primary">primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers">DataAwsIdentitystoreUserPhoneNumbers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.primary"></a>

```python
primary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIdentitystoreUserPhoneNumbers
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreUser.DataAwsIdentitystoreUserPhoneNumbers">DataAwsIdentitystoreUserPhoneNumbers</a>

---



