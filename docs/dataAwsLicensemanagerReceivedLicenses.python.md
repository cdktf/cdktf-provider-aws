# `dataAwsLicensemanagerReceivedLicenses` Submodule <a name="`dataAwsLicensemanagerReceivedLicenses` Submodule" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLicensemanagerReceivedLicenses <a name="DataAwsLicensemanagerReceivedLicenses" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/licensemanager_received_licenses aws_licensemanager_received_licenses}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_licensemanager_received_licenses

dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsLicensemanagerReceivedLicensesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/licensemanager_received_licenses#id DataAwsLicensemanagerReceivedLicenses#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/licensemanager_received_licenses#filter DataAwsLicensemanagerReceivedLicenses#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/licensemanager_received_licenses#id DataAwsLicensemanagerReceivedLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsLicensemanagerReceivedLicensesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsLicensemanagerReceivedLicenses resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_licensemanager_received_licenses

dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_licensemanager_received_licenses

dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_licensemanager_received_licenses

dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_licensemanager_received_licenses

dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsLicensemanagerReceivedLicenses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsLicensemanagerReceivedLicenses to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsLicensemanagerReceivedLicenses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/licensemanager_received_licenses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsLicensemanagerReceivedLicenses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.arns">arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList">DataAwsLicensemanagerReceivedLicensesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arns`<sup>Required</sup> <a name="arns" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.arns"></a>

```python
arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.filter"></a>

```python
filter: DataAwsLicensemanagerReceivedLicensesFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList">DataAwsLicensemanagerReceivedLicensesFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsLicensemanagerReceivedLicensesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicenses.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLicensemanagerReceivedLicensesConfig <a name="DataAwsLicensemanagerReceivedLicensesConfig" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_licensemanager_received_licenses

dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsLicensemanagerReceivedLicensesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/licensemanager_received_licenses#id DataAwsLicensemanagerReceivedLicenses#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsLicensemanagerReceivedLicensesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/licensemanager_received_licenses#filter DataAwsLicensemanagerReceivedLicenses#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/licensemanager_received_licenses#id DataAwsLicensemanagerReceivedLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsLicensemanagerReceivedLicensesFilter <a name="DataAwsLicensemanagerReceivedLicensesFilter" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_licensemanager_received_licenses

dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/licensemanager_received_licenses#name DataAwsLicensemanagerReceivedLicenses#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/licensemanager_received_licenses#values DataAwsLicensemanagerReceivedLicenses#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/licensemanager_received_licenses#name DataAwsLicensemanagerReceivedLicenses#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/licensemanager_received_licenses#values DataAwsLicensemanagerReceivedLicenses#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsLicensemanagerReceivedLicensesFilterList <a name="DataAwsLicensemanagerReceivedLicensesFilterList" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_licensemanager_received_licenses

dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLicensemanagerReceivedLicensesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsLicensemanagerReceivedLicensesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>]]

---


### DataAwsLicensemanagerReceivedLicensesFilterOutputReference <a name="DataAwsLicensemanagerReceivedLicensesFilterOutputReference" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_licensemanager_received_licenses

dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsLicensemanagerReceivedLicensesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsLicensemanagerReceivedLicenses.DataAwsLicensemanagerReceivedLicensesFilter">DataAwsLicensemanagerReceivedLicensesFilter</a>]

---



