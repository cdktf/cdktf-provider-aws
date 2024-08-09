# `dataAwsFsxOntapStorageVirtualMachine` Submodule <a name="`dataAwsFsxOntapStorageVirtualMachine` Submodule" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsFsxOntapStorageVirtualMachine <a name="DataAwsFsxOntapStorageVirtualMachine" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_storage_virtual_machine aws_fsx_ontap_storage_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsFsxOntapStorageVirtualMachineFilter]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter">DataAwsFsxOntapStorageVirtualMachineFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_storage_virtual_machine#id DataAwsFsxOntapStorageVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_storage_virtual_machine#tags DataAwsFsxOntapStorageVirtualMachine#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter">DataAwsFsxOntapStorageVirtualMachineFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_storage_virtual_machine#filter DataAwsFsxOntapStorageVirtualMachine#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_storage_virtual_machine#id DataAwsFsxOntapStorageVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_storage_virtual_machine#tags DataAwsFsxOntapStorageVirtualMachine#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsFsxOntapStorageVirtualMachineFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter">DataAwsFsxOntapStorageVirtualMachineFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsFsxOntapStorageVirtualMachine resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsFsxOntapStorageVirtualMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsFsxOntapStorageVirtualMachine to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsFsxOntapStorageVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_storage_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsFsxOntapStorageVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.activeDirectoryConfiguration">active_directory_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList">DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList">DataAwsFsxOntapStorageVirtualMachineEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList">DataAwsFsxOntapStorageVirtualMachineFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.lifecycleStatus">lifecycle_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.lifecycleTransitionReason">lifecycle_transition_reason</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList">DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.subtype">subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter">DataAwsFsxOntapStorageVirtualMachineFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `active_directory_configuration`<sup>Required</sup> <a name="active_directory_configuration" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.activeDirectoryConfiguration"></a>

```python
active_directory_configuration: DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList">DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.endpoints"></a>

```python
endpoints: DataAwsFsxOntapStorageVirtualMachineEndpointsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList">DataAwsFsxOntapStorageVirtualMachineEndpointsList</a>

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.filter"></a>

```python
filter: DataAwsFsxOntapStorageVirtualMachineFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList">DataAwsFsxOntapStorageVirtualMachineFilterList</a>

---

##### `lifecycle_status`<sup>Required</sup> <a name="lifecycle_status" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.lifecycleStatus"></a>

```python
lifecycle_status: str
```

- *Type:* str

---

##### `lifecycle_transition_reason`<sup>Required</sup> <a name="lifecycle_transition_reason" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.lifecycleTransitionReason"></a>

```python
lifecycle_transition_reason: DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList">DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.subtype"></a>

```python
subtype: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsFsxOntapStorageVirtualMachineFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter">DataAwsFsxOntapStorageVirtualMachineFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration <a name="DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration()
```


### DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration <a name="DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration()
```


### DataAwsFsxOntapStorageVirtualMachineConfig <a name="DataAwsFsxOntapStorageVirtualMachineConfig" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsFsxOntapStorageVirtualMachineFilter]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter">DataAwsFsxOntapStorageVirtualMachineFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_storage_virtual_machine#id DataAwsFsxOntapStorageVirtualMachine#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_storage_virtual_machine#tags DataAwsFsxOntapStorageVirtualMachine#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsFsxOntapStorageVirtualMachineFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter">DataAwsFsxOntapStorageVirtualMachineFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_storage_virtual_machine#filter DataAwsFsxOntapStorageVirtualMachine#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_storage_virtual_machine#id DataAwsFsxOntapStorageVirtualMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_storage_virtual_machine#tags DataAwsFsxOntapStorageVirtualMachine#tags}.

---

### DataAwsFsxOntapStorageVirtualMachineEndpoints <a name="DataAwsFsxOntapStorageVirtualMachineEndpoints" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpoints()
```


### DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi()
```


### DataAwsFsxOntapStorageVirtualMachineEndpointsManagement <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsManagement" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagement.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagement()
```


### DataAwsFsxOntapStorageVirtualMachineEndpointsNfs <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsNfs" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfs()
```


### DataAwsFsxOntapStorageVirtualMachineEndpointsSmb <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsSmb" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmb.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmb()
```


### DataAwsFsxOntapStorageVirtualMachineFilter <a name="DataAwsFsxOntapStorageVirtualMachineFilter" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_storage_virtual_machine#name DataAwsFsxOntapStorageVirtualMachine#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_storage_virtual_machine#values DataAwsFsxOntapStorageVirtualMachine#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_storage_virtual_machine#name DataAwsFsxOntapStorageVirtualMachine#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/data-sources/fsx_ontap_storage_virtual_machine#values DataAwsFsxOntapStorageVirtualMachine#values}.

---

### DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason <a name="DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList <a name="DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netbiosName">netbios_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfiguration">self_managed_active_directory_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList">DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration">DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `netbios_name`<sup>Required</sup> <a name="netbios_name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netbiosName"></a>

```python
netbios_name: str
```

- *Type:* str

---

##### `self_managed_active_directory_configuration`<sup>Required</sup> <a name="self_managed_active_directory_configuration" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfiguration"></a>

```python
self_managed_active_directory_configuration: DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList">DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration">DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfiguration</a>

---


### DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList <a name="DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIps">dns_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroup">file_system_administrators_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName">organizational_unit_distinguished_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_ips`<sup>Required</sup> <a name="dns_ips" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIps"></a>

```python
dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `file_system_administrators_group`<sup>Required</sup> <a name="file_system_administrators_group" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroup"></a>

```python
file_system_administrators_group: str
```

- *Type:* str

---

##### `organizational_unit_distinguished_name`<sup>Required</sup> <a name="organizational_unit_distinguished_name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName"></a>

```python
organizational_unit_distinguished_name: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">DataAwsFsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi">DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi">DataAwsFsxOntapStorageVirtualMachineEndpointsIscsi</a>

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsList <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagement">DataAwsFsxOntapStorageVirtualMachineEndpointsManagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsFsxOntapStorageVirtualMachineEndpointsManagement
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagement">DataAwsFsxOntapStorageVirtualMachineEndpointsManagement</a>

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfs">DataAwsFsxOntapStorageVirtualMachineEndpointsNfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsFsxOntapStorageVirtualMachineEndpointsNfs
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfs">DataAwsFsxOntapStorageVirtualMachineEndpointsNfs</a>

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.iscsi">iscsi</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList">DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.management">management</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList">DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList">DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.smb">smb</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList">DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpoints">DataAwsFsxOntapStorageVirtualMachineEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iscsi`<sup>Required</sup> <a name="iscsi" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.iscsi"></a>

```python
iscsi: DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList">DataAwsFsxOntapStorageVirtualMachineEndpointsIscsiList</a>

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.management"></a>

```python
management: DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList">DataAwsFsxOntapStorageVirtualMachineEndpointsManagementList</a>

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.nfs"></a>

```python
nfs: DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList">DataAwsFsxOntapStorageVirtualMachineEndpointsNfsList</a>

---

##### `smb`<sup>Required</sup> <a name="smb" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.smb"></a>

```python
smb: DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList">DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsFsxOntapStorageVirtualMachineEndpoints
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpoints">DataAwsFsxOntapStorageVirtualMachineEndpoints</a>

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmb">DataAwsFsxOntapStorageVirtualMachineEndpointsSmb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmbOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsFsxOntapStorageVirtualMachineEndpointsSmb
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineEndpointsSmb">DataAwsFsxOntapStorageVirtualMachineEndpointsSmb</a>

---


### DataAwsFsxOntapStorageVirtualMachineFilterList <a name="DataAwsFsxOntapStorageVirtualMachineFilterList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsFsxOntapStorageVirtualMachineFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter">DataAwsFsxOntapStorageVirtualMachineFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsFsxOntapStorageVirtualMachineFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter">DataAwsFsxOntapStorageVirtualMachineFilter</a>]]

---


### DataAwsFsxOntapStorageVirtualMachineFilterOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineFilterOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter">DataAwsFsxOntapStorageVirtualMachineFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsFsxOntapStorageVirtualMachineFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineFilter">DataAwsFsxOntapStorageVirtualMachineFilter</a>]

---


### DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList <a name="DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference <a name="DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_ontap_storage_virtual_machine

dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason">DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReasonOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxOntapStorageVirtualMachine.DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason">DataAwsFsxOntapStorageVirtualMachineLifecycleTransitionReason</a>

---



