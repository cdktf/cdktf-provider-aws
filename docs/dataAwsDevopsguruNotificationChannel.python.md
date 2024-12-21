# `dataAwsDevopsguruNotificationChannel` Submodule <a name="`dataAwsDevopsguruNotificationChannel` Submodule" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDevopsguruNotificationChannel <a name="DataAwsDevopsguruNotificationChannel" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/devopsguru_notification_channel aws_devopsguru_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_notification_channel

dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str,
  filters: typing.Union[IResolvable, typing.List[DataAwsDevopsguruNotificationChannelFilters]] = None,
  sns: typing.Union[IResolvable, typing.List[DataAwsDevopsguruNotificationChannelSns]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/devopsguru_notification_channel#id DataAwsDevopsguruNotificationChannel#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.filters">filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>]]</code> | filters block. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.sns">sns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>]]</code> | sns block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/devopsguru_notification_channel#id DataAwsDevopsguruNotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.filters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>]]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/devopsguru_notification_channel#filters DataAwsDevopsguruNotificationChannel#filters}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.Initializer.parameter.sns"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>]]

sns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/devopsguru_notification_channel#sns DataAwsDevopsguruNotificationChannel#sns}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.putSns">put_sns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.resetSns">reset_sns</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filters` <a name="put_filters" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.putFilters"></a>

```python
def put_filters(
  value: typing.Union[IResolvable, typing.List[DataAwsDevopsguruNotificationChannelFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.putFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>]]

---

##### `put_sns` <a name="put_sns" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.putSns"></a>

```python
def put_sns(
  value: typing.Union[IResolvable, typing.List[DataAwsDevopsguruNotificationChannelSns]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.putSns.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>]]

---

##### `reset_filters` <a name="reset_filters" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_sns` <a name="reset_sns" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.resetSns"></a>

```python
def reset_sns() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsDevopsguruNotificationChannel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_notification_channel

dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_notification_channel

dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_notification_channel

dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_notification_channel

dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsDevopsguruNotificationChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsDevopsguruNotificationChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsDevopsguruNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/devopsguru_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsDevopsguruNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList">DataAwsDevopsguruNotificationChannelFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.sns">sns</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList">DataAwsDevopsguruNotificationChannelSnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.filtersInput">filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.snsInput">sns_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.filters"></a>

```python
filters: DataAwsDevopsguruNotificationChannelFiltersList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList">DataAwsDevopsguruNotificationChannelFiltersList</a>

---

##### `sns`<sup>Required</sup> <a name="sns" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.sns"></a>

```python
sns: DataAwsDevopsguruNotificationChannelSnsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList">DataAwsDevopsguruNotificationChannelSnsList</a>

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.filtersInput"></a>

```python
filters_input: typing.Union[IResolvable, typing.List[DataAwsDevopsguruNotificationChannelFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `sns_input`<sup>Optional</sup> <a name="sns_input" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.snsInput"></a>

```python
sns_input: typing.Union[IResolvable, typing.List[DataAwsDevopsguruNotificationChannelSns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDevopsguruNotificationChannelConfig <a name="DataAwsDevopsguruNotificationChannelConfig" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_notification_channel

dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str,
  filters: typing.Union[IResolvable, typing.List[DataAwsDevopsguruNotificationChannelFilters]] = None,
  sns: typing.Union[IResolvable, typing.List[DataAwsDevopsguruNotificationChannelSns]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/devopsguru_notification_channel#id DataAwsDevopsguruNotificationChannel#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.filters">filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>]]</code> | filters block. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.sns">sns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>]]</code> | sns block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/devopsguru_notification_channel#id DataAwsDevopsguruNotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.filters"></a>

```python
filters: typing.Union[IResolvable, typing.List[DataAwsDevopsguruNotificationChannelFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>]]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/devopsguru_notification_channel#filters DataAwsDevopsguruNotificationChannel#filters}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelConfig.property.sns"></a>

```python
sns: typing.Union[IResolvable, typing.List[DataAwsDevopsguruNotificationChannelSns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>]]

sns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/devopsguru_notification_channel#sns DataAwsDevopsguruNotificationChannel#sns}

---

### DataAwsDevopsguruNotificationChannelFilters <a name="DataAwsDevopsguruNotificationChannelFilters" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_notification_channel

dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters()
```


### DataAwsDevopsguruNotificationChannelSns <a name="DataAwsDevopsguruNotificationChannelSns" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_notification_channel

dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsDevopsguruNotificationChannelFiltersList <a name="DataAwsDevopsguruNotificationChannelFiltersList" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_notification_channel

dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsDevopsguruNotificationChannelFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsDevopsguruNotificationChannelFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>]]

---


### DataAwsDevopsguruNotificationChannelFiltersOutputReference <a name="DataAwsDevopsguruNotificationChannelFiltersOutputReference" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_notification_channel

dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.messageTypes">message_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.severities">severities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_types`<sup>Required</sup> <a name="message_types" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.messageTypes"></a>

```python
message_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `severities`<sup>Required</sup> <a name="severities" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.severities"></a>

```python
severities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsDevopsguruNotificationChannelFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelFilters">DataAwsDevopsguruNotificationChannelFilters</a>]

---


### DataAwsDevopsguruNotificationChannelSnsList <a name="DataAwsDevopsguruNotificationChannelSnsList" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_notification_channel

dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsDevopsguruNotificationChannelSnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsDevopsguruNotificationChannelSns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>]]

---


### DataAwsDevopsguruNotificationChannelSnsOutputReference <a name="DataAwsDevopsguruNotificationChannelSnsOutputReference" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_notification_channel

dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.property.topicArn">topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topic_arn`<sup>Required</sup> <a name="topic_arn" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.property.topicArn"></a>

```python
topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSnsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsDevopsguruNotificationChannelSns]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsDevopsguruNotificationChannel.DataAwsDevopsguruNotificationChannelSns">DataAwsDevopsguruNotificationChannelSns</a>]

---



