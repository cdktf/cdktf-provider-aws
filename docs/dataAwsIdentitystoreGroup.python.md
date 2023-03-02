# `dataAwsIdentitystoreGroup` Submodule <a name="`dataAwsIdentitystoreGroup` Submodule" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIdentitystoreGroup <a name="DataAwsIdentitystoreGroup" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group aws_identitystore_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_group

dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup(
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
  alternate_identifier: DataAwsIdentitystoreGroupAlternateIdentifier = None,
  filter: DataAwsIdentitystoreGroupFilter = None,
  group_id: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.identityStoreId">identity_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#identity_store_id DataAwsIdentitystoreGroup#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.alternateIdentifier">alternate_identifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a></code> | alternate_identifier block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#group_id DataAwsIdentitystoreGroup#group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.identityStoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#identity_store_id DataAwsIdentitystoreGroup#identity_store_id}.

---

##### `alternate_identifier`<sup>Optional</sup> <a name="alternate_identifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.alternateIdentifier"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a>

alternate_identifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#alternate_identifier DataAwsIdentitystoreGroup#alternate_identifier}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#filter DataAwsIdentitystoreGroup#filter}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.groupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#group_id DataAwsIdentitystoreGroup#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putAlternateIdentifier">put_alternate_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetAlternateIdentifier">reset_alternate_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_alternate_identifier` <a name="put_alternate_identifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putAlternateIdentifier"></a>

```python
def put_alternate_identifier(
  external_id: DataAwsIdentitystoreGroupAlternateIdentifierExternalId = None,
  unique_attribute: DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute = None
) -> None
```

###### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putAlternateIdentifier.parameter.externalId"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a>

external_id block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#external_id DataAwsIdentitystoreGroup#external_id}

---

###### `unique_attribute`<sup>Optional</sup> <a name="unique_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putAlternateIdentifier.parameter.uniqueAttribute"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a>

unique_attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#unique_attribute DataAwsIdentitystoreGroup#unique_attribute}

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putFilter"></a>

```python
def put_filter(
  attribute_path: str,
  attribute_value: str
) -> None
```

###### `attribute_path`<sup>Required</sup> <a name="attribute_path" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putFilter.parameter.attributePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}.

---

###### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.putFilter.parameter.attributeValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}.

---

##### `reset_alternate_identifier` <a name="reset_alternate_identifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetAlternateIdentifier"></a>

```python
def reset_alternate_identifier() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_group

dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_group

dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_group

dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.alternateIdentifier">alternate_identifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.externalIds">external_ids</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList">DataAwsIdentitystoreGroupExternalIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference">DataAwsIdentitystoreGroupFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.alternateIdentifierInput">alternate_identifier_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.identityStoreIdInput">identity_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.identityStoreId">identity_store_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `alternate_identifier`<sup>Required</sup> <a name="alternate_identifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.alternateIdentifier"></a>

```python
alternate_identifier: DataAwsIdentitystoreGroupAlternateIdentifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_ids`<sup>Required</sup> <a name="external_ids" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.externalIds"></a>

```python
external_ids: DataAwsIdentitystoreGroupExternalIdsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList">DataAwsIdentitystoreGroupExternalIdsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.filter"></a>

```python
filter: DataAwsIdentitystoreGroupFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference">DataAwsIdentitystoreGroupFilterOutputReference</a>

---

##### `alternate_identifier_input`<sup>Optional</sup> <a name="alternate_identifier_input" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.alternateIdentifierInput"></a>

```python
alternate_identifier_input: DataAwsIdentitystoreGroupAlternateIdentifier
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.filterInput"></a>

```python
filter_input: DataAwsIdentitystoreGroupFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a>

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `identity_store_id_input`<sup>Optional</sup> <a name="identity_store_id_input" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.identityStoreIdInput"></a>

```python
identity_store_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.identityStoreId"></a>

```python
identity_store_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIdentitystoreGroupAlternateIdentifier <a name="DataAwsIdentitystoreGroupAlternateIdentifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_group

dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier(
  external_id: DataAwsIdentitystoreGroupAlternateIdentifierExternalId = None,
  unique_attribute: DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.property.externalId">external_id</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a></code> | external_id block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.property.uniqueAttribute">unique_attribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a></code> | unique_attribute block. |

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.property.externalId"></a>

```python
external_id: DataAwsIdentitystoreGroupAlternateIdentifierExternalId
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a>

external_id block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#external_id DataAwsIdentitystoreGroup#external_id}

---

##### `unique_attribute`<sup>Optional</sup> <a name="unique_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier.property.uniqueAttribute"></a>

```python
unique_attribute: DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a>

unique_attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#unique_attribute DataAwsIdentitystoreGroup#unique_attribute}

---

### DataAwsIdentitystoreGroupAlternateIdentifierExternalId <a name="DataAwsIdentitystoreGroupAlternateIdentifierExternalId" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_group

dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId(
  id: str,
  issuer: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#issuer DataAwsIdentitystoreGroup#issuer}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#issuer DataAwsIdentitystoreGroup#issuer}.

---

### DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute <a name="DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_group

dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute(
  attribute_path: str,
  attribute_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.property.attributePath">attribute_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.property.attributeValue">attribute_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}. |

---

##### `attribute_path`<sup>Required</sup> <a name="attribute_path" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.property.attributePath"></a>

```python
attribute_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}.

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}.

---

### DataAwsIdentitystoreGroupConfig <a name="DataAwsIdentitystoreGroupConfig" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_group

dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  identity_store_id: str,
  alternate_identifier: DataAwsIdentitystoreGroupAlternateIdentifier = None,
  filter: DataAwsIdentitystoreGroupFilter = None,
  group_id: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.identityStoreId">identity_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#identity_store_id DataAwsIdentitystoreGroup#identity_store_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.alternateIdentifier">alternate_identifier</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a></code> | alternate_identifier block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.groupId">group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#group_id DataAwsIdentitystoreGroup#group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity_store_id`<sup>Required</sup> <a name="identity_store_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.identityStoreId"></a>

```python
identity_store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#identity_store_id DataAwsIdentitystoreGroup#identity_store_id}.

---

##### `alternate_identifier`<sup>Optional</sup> <a name="alternate_identifier" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.alternateIdentifier"></a>

```python
alternate_identifier: DataAwsIdentitystoreGroupAlternateIdentifier
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a>

alternate_identifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#alternate_identifier DataAwsIdentitystoreGroup#alternate_identifier}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.filter"></a>

```python
filter: DataAwsIdentitystoreGroupFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#filter DataAwsIdentitystoreGroup#filter}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#group_id DataAwsIdentitystoreGroup#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsIdentitystoreGroupExternalIds <a name="DataAwsIdentitystoreGroupExternalIds" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIds.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_group

dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIds()
```


### DataAwsIdentitystoreGroupFilter <a name="DataAwsIdentitystoreGroupFilter" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_group

dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter(
  attribute_path: str,
  attribute_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter.property.attributePath">attribute_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter.property.attributeValue">attribute_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}. |

---

##### `attribute_path`<sup>Required</sup> <a name="attribute_path" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter.property.attributePath"></a>

```python
attribute_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}.

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference <a name="DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_group

dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIdentitystoreGroupAlternateIdentifierExternalId
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a>

---


### DataAwsIdentitystoreGroupAlternateIdentifierOutputReference <a name="DataAwsIdentitystoreGroupAlternateIdentifierOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_group

dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putExternalId">put_external_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putUniqueAttribute">put_unique_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resetUniqueAttribute">reset_unique_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_external_id` <a name="put_external_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putExternalId"></a>

```python
def put_external_id(
  id: str,
  issuer: str
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putExternalId.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#id DataAwsIdentitystoreGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putExternalId.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#issuer DataAwsIdentitystoreGroup#issuer}.

---

##### `put_unique_attribute` <a name="put_unique_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putUniqueAttribute"></a>

```python
def put_unique_attribute(
  attribute_path: str,
  attribute_value: str
) -> None
```

###### `attribute_path`<sup>Required</sup> <a name="attribute_path" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putUniqueAttribute.parameter.attributePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_path DataAwsIdentitystoreGroup#attribute_path}.

---

###### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.putUniqueAttribute.parameter.attributeValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group#attribute_value DataAwsIdentitystoreGroup#attribute_value}.

---

##### `reset_external_id` <a name="reset_external_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_unique_attribute` <a name="reset_unique_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.resetUniqueAttribute"></a>

```python
def reset_unique_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.externalId">external_id</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.uniqueAttribute">unique_attribute</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.externalIdInput">external_id_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.uniqueAttributeInput">unique_attribute_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.externalId"></a>

```python
external_id: DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierExternalIdOutputReference</a>

---

##### `unique_attribute`<sup>Required</sup> <a name="unique_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.uniqueAttribute"></a>

```python
unique_attribute: DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference</a>

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.externalIdInput"></a>

```python
external_id_input: DataAwsIdentitystoreGroupAlternateIdentifierExternalId
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierExternalId">DataAwsIdentitystoreGroupAlternateIdentifierExternalId</a>

---

##### `unique_attribute_input`<sup>Optional</sup> <a name="unique_attribute_input" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.uniqueAttributeInput"></a>

```python
unique_attribute_input: DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIdentitystoreGroupAlternateIdentifier
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifier">DataAwsIdentitystoreGroupAlternateIdentifier</a>

---


### DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference <a name="DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_group

dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributePathInput">attribute_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributeValueInput">attribute_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributePath">attribute_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_path_input`<sup>Optional</sup> <a name="attribute_path_input" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributePathInput"></a>

```python
attribute_path_input: str
```

- *Type:* str

---

##### `attribute_value_input`<sup>Optional</sup> <a name="attribute_value_input" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributeValueInput"></a>

```python
attribute_value_input: str
```

- *Type:* str

---

##### `attribute_path`<sup>Required</sup> <a name="attribute_path" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributePath"></a>

```python
attribute_path: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttributeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute">DataAwsIdentitystoreGroupAlternateIdentifierUniqueAttribute</a>

---


### DataAwsIdentitystoreGroupExternalIdsList <a name="DataAwsIdentitystoreGroupExternalIdsList" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_group

dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsIdentitystoreGroupExternalIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsIdentitystoreGroupExternalIdsOutputReference <a name="DataAwsIdentitystoreGroupExternalIdsOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_group

dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIds">DataAwsIdentitystoreGroupExternalIds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIdsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIdentitystoreGroupExternalIds
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupExternalIds">DataAwsIdentitystoreGroupExternalIds</a>

---


### DataAwsIdentitystoreGroupFilterOutputReference <a name="DataAwsIdentitystoreGroupFilterOutputReference" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_identitystore_group

dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributePathInput">attribute_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributeValueInput">attribute_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributePath">attribute_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_path_input`<sup>Optional</sup> <a name="attribute_path_input" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributePathInput"></a>

```python
attribute_path_input: str
```

- *Type:* str

---

##### `attribute_value_input`<sup>Optional</sup> <a name="attribute_value_input" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributeValueInput"></a>

```python
attribute_value_input: str
```

- *Type:* str

---

##### `attribute_path`<sup>Required</sup> <a name="attribute_path" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributePath"></a>

```python
attribute_path: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsIdentitystoreGroupFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIdentitystoreGroup.DataAwsIdentitystoreGroupFilter">DataAwsIdentitystoreGroupFilter</a>

---



