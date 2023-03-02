# `ec2ManagedPrefixList` Submodule <a name="`ec2ManagedPrefixList` Submodule" id="@cdktf/provider-aws.ec2ManagedPrefixList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ManagedPrefixList <a name="Ec2ManagedPrefixList" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list aws_ec2_managed_prefix_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_managed_prefix_list

ec2ManagedPrefixList.Ec2ManagedPrefixList(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_family: str,
  max_entries: typing.Union[int, float],
  name: str,
  entry: typing.Union[IResolvable, typing.List[Ec2ManagedPrefixListEntry]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.addressFamily">address_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#address_family Ec2ManagedPrefixList#address_family}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.maxEntries">max_entries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#max_entries Ec2ManagedPrefixList#max_entries}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#name Ec2ManagedPrefixList#name}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.entry">entry</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>]]</code> | entry block. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#id Ec2ManagedPrefixList#id}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#tags Ec2ManagedPrefixList#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#tags_all Ec2ManagedPrefixList#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.addressFamily"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#address_family Ec2ManagedPrefixList#address_family}.

---

##### `max_entries`<sup>Required</sup> <a name="max_entries" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.maxEntries"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#max_entries Ec2ManagedPrefixList#max_entries}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#name Ec2ManagedPrefixList#name}.

---

##### `entry`<sup>Optional</sup> <a name="entry" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.entry"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>]]

entry block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#entry Ec2ManagedPrefixList#entry}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#id Ec2ManagedPrefixList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#tags Ec2ManagedPrefixList#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#tags_all Ec2ManagedPrefixList#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.putEntry">put_entry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetEntry">reset_entry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_entry` <a name="put_entry" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.putEntry"></a>

```python
def put_entry(
  value: typing.Union[IResolvable, typing.List[Ec2ManagedPrefixListEntry]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.putEntry.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>]]

---

##### `reset_entry` <a name="reset_entry" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetEntry"></a>

```python
def reset_entry() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ec2_managed_prefix_list

ec2ManagedPrefixList.Ec2ManagedPrefixList.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ec2_managed_prefix_list

ec2ManagedPrefixList.Ec2ManagedPrefixList.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ec2_managed_prefix_list

ec2ManagedPrefixList.Ec2ManagedPrefixList.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.entry">entry</a></code> | <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList">Ec2ManagedPrefixListEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.addressFamilyInput">address_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.entryInput">entry_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.maxEntriesInput">max_entries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.addressFamily">address_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.maxEntries">max_entries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.entry"></a>

```python
entry: Ec2ManagedPrefixListEntryList
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList">Ec2ManagedPrefixListEntryList</a>

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address_family_input`<sup>Optional</sup> <a name="address_family_input" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.addressFamilyInput"></a>

```python
address_family_input: str
```

- *Type:* str

---

##### `entry_input`<sup>Optional</sup> <a name="entry_input" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.entryInput"></a>

```python
entry_input: typing.Union[IResolvable, typing.List[Ec2ManagedPrefixListEntry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_entries_input`<sup>Optional</sup> <a name="max_entries_input" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.maxEntriesInput"></a>

```python
max_entries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_entries`<sup>Required</sup> <a name="max_entries" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.maxEntries"></a>

```python
max_entries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixList.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ManagedPrefixListConfig <a name="Ec2ManagedPrefixListConfig" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_managed_prefix_list

ec2ManagedPrefixList.Ec2ManagedPrefixListConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_family: str,
  max_entries: typing.Union[int, float],
  name: str,
  entry: typing.Union[IResolvable, typing.List[Ec2ManagedPrefixListEntry]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.addressFamily">address_family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#address_family Ec2ManagedPrefixList#address_family}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.maxEntries">max_entries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#max_entries Ec2ManagedPrefixList#max_entries}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#name Ec2ManagedPrefixList#name}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.entry">entry</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>]]</code> | entry block. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#id Ec2ManagedPrefixList#id}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#tags Ec2ManagedPrefixList#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#tags_all Ec2ManagedPrefixList#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#address_family Ec2ManagedPrefixList#address_family}.

---

##### `max_entries`<sup>Required</sup> <a name="max_entries" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.maxEntries"></a>

```python
max_entries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#max_entries Ec2ManagedPrefixList#max_entries}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#name Ec2ManagedPrefixList#name}.

---

##### `entry`<sup>Optional</sup> <a name="entry" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.entry"></a>

```python
entry: typing.Union[IResolvable, typing.List[Ec2ManagedPrefixListEntry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>]]

entry block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#entry Ec2ManagedPrefixList#entry}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#id Ec2ManagedPrefixList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#tags Ec2ManagedPrefixList#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#tags_all Ec2ManagedPrefixList#tags_all}.

---

### Ec2ManagedPrefixListEntry <a name="Ec2ManagedPrefixListEntry" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_managed_prefix_list

ec2ManagedPrefixList.Ec2ManagedPrefixListEntry(
  cidr: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#cidr Ec2ManagedPrefixList#cidr}. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#description Ec2ManagedPrefixList#description}. |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#cidr Ec2ManagedPrefixList#cidr}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list#description Ec2ManagedPrefixList#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ManagedPrefixListEntryList <a name="Ec2ManagedPrefixListEntryList" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_managed_prefix_list

ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2ManagedPrefixListEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Ec2ManagedPrefixListEntry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>]]

---


### Ec2ManagedPrefixListEntryOutputReference <a name="Ec2ManagedPrefixListEntryOutputReference" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_managed_prefix_list

ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Ec2ManagedPrefixListEntry, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ec2ManagedPrefixList.Ec2ManagedPrefixListEntry">Ec2ManagedPrefixListEntry</a>, cdktf.IResolvable]

---



