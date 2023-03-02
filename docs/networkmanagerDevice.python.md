# `networkmanagerDevice` Submodule <a name="`networkmanagerDevice` Submodule" id="@cdktf/provider-aws.networkmanagerDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerDevice <a name="NetworkmanagerDevice" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device aws_networkmanager_device}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_device

networkmanagerDevice.NetworkmanagerDevice(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  global_network_id: str,
  aws_location: NetworkmanagerDeviceAwsLocation = None,
  description: str = None,
  id: str = None,
  location: NetworkmanagerDeviceLocation = None,
  model: str = None,
  serial_number: str = None,
  site_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: NetworkmanagerDeviceTimeouts = None,
  type: str = None,
  vendor: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.globalNetworkId">global_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#global_network_id NetworkmanagerDevice#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.awsLocation">aws_location</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a></code> | aws_location block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#description NetworkmanagerDevice#description}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#id NetworkmanagerDevice#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.location">location</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a></code> | location block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.model">model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#model NetworkmanagerDevice#model}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.serialNumber">serial_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#serial_number NetworkmanagerDevice#serial_number}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.siteId">site_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#site_id NetworkmanagerDevice#site_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#tags NetworkmanagerDevice#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#tags_all NetworkmanagerDevice#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts">NetworkmanagerDeviceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#type NetworkmanagerDevice#type}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.vendor">vendor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#vendor NetworkmanagerDevice#vendor}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.globalNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#global_network_id NetworkmanagerDevice#global_network_id}.

---

##### `aws_location`<sup>Optional</sup> <a name="aws_location" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.awsLocation"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a>

aws_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#aws_location NetworkmanagerDevice#aws_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#description NetworkmanagerDevice#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#id NetworkmanagerDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.location"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a>

location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#location NetworkmanagerDevice#location}

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.model"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#model NetworkmanagerDevice#model}.

---

##### `serial_number`<sup>Optional</sup> <a name="serial_number" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.serialNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#serial_number NetworkmanagerDevice#serial_number}.

---

##### `site_id`<sup>Optional</sup> <a name="site_id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.siteId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#site_id NetworkmanagerDevice#site_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#tags NetworkmanagerDevice#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#tags_all NetworkmanagerDevice#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts">NetworkmanagerDeviceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#timeouts NetworkmanagerDevice#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#type NetworkmanagerDevice#type}.

---

##### `vendor`<sup>Optional</sup> <a name="vendor" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.Initializer.parameter.vendor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#vendor NetworkmanagerDevice#vendor}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putAwsLocation">put_aws_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putLocation">put_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetAwsLocation">reset_aws_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetSerialNumber">reset_serial_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetSiteId">reset_site_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetVendor">reset_vendor</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_aws_location` <a name="put_aws_location" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putAwsLocation"></a>

```python
def put_aws_location(
  subnet_arn: str = None,
  zone: str = None
) -> None
```

###### `subnet_arn`<sup>Optional</sup> <a name="subnet_arn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putAwsLocation.parameter.subnetArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#subnet_arn NetworkmanagerDevice#subnet_arn}.

---

###### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putAwsLocation.parameter.zone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#zone NetworkmanagerDevice#zone}.

---

##### `put_location` <a name="put_location" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putLocation"></a>

```python
def put_location(
  address: str = None,
  latitude: str = None,
  longitude: str = None
) -> None
```

###### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putLocation.parameter.address"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#address NetworkmanagerDevice#address}.

---

###### `latitude`<sup>Optional</sup> <a name="latitude" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putLocation.parameter.latitude"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#latitude NetworkmanagerDevice#latitude}.

---

###### `longitude`<sup>Optional</sup> <a name="longitude" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putLocation.parameter.longitude"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#longitude NetworkmanagerDevice#longitude}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#create NetworkmanagerDevice#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#delete NetworkmanagerDevice#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#update NetworkmanagerDevice#update}.

---

##### `reset_aws_location` <a name="reset_aws_location" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetAwsLocation"></a>

```python
def reset_aws_location() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_model` <a name="reset_model" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_serial_number` <a name="reset_serial_number" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetSerialNumber"></a>

```python
def reset_serial_number() -> None
```

##### `reset_site_id` <a name="reset_site_id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetSiteId"></a>

```python
def reset_site_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_vendor` <a name="reset_vendor" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.resetVendor"></a>

```python
def reset_vendor() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_device

networkmanagerDevice.NetworkmanagerDevice.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_device

networkmanagerDevice.NetworkmanagerDevice.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_device

networkmanagerDevice.NetworkmanagerDevice.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.awsLocation">aws_location</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference">NetworkmanagerDeviceAwsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.location">location</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference">NetworkmanagerDeviceLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference">NetworkmanagerDeviceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.awsLocationInput">aws_location_input</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.globalNetworkIdInput">global_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.locationInput">location_input</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.serialNumberInput">serial_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.siteIdInput">site_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts">NetworkmanagerDeviceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.vendorInput">vendor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.globalNetworkId">global_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.siteId">site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.vendor">vendor</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `aws_location`<sup>Required</sup> <a name="aws_location" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.awsLocation"></a>

```python
aws_location: NetworkmanagerDeviceAwsLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference">NetworkmanagerDeviceAwsLocationOutputReference</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.location"></a>

```python
location: NetworkmanagerDeviceLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference">NetworkmanagerDeviceLocationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.timeouts"></a>

```python
timeouts: NetworkmanagerDeviceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference">NetworkmanagerDeviceTimeoutsOutputReference</a>

---

##### `aws_location_input`<sup>Optional</sup> <a name="aws_location_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.awsLocationInput"></a>

```python
aws_location_input: NetworkmanagerDeviceAwsLocation
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `global_network_id_input`<sup>Optional</sup> <a name="global_network_id_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.globalNetworkIdInput"></a>

```python
global_network_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.locationInput"></a>

```python
location_input: NetworkmanagerDeviceLocation
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a>

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `serial_number_input`<sup>Optional</sup> <a name="serial_number_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.serialNumberInput"></a>

```python
serial_number_input: str
```

- *Type:* str

---

##### `site_id_input`<sup>Optional</sup> <a name="site_id_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.siteIdInput"></a>

```python
site_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[NetworkmanagerDeviceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts">NetworkmanagerDeviceTimeouts</a>, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vendor_input`<sup>Optional</sup> <a name="vendor_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.vendorInput"></a>

```python
vendor_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.globalNetworkId"></a>

```python
global_network_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDevice.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerDeviceAwsLocation <a name="NetworkmanagerDeviceAwsLocation" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_device

networkmanagerDevice.NetworkmanagerDeviceAwsLocation(
  subnet_arn: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation.property.subnetArn">subnet_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#subnet_arn NetworkmanagerDevice#subnet_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation.property.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#zone NetworkmanagerDevice#zone}. |

---

##### `subnet_arn`<sup>Optional</sup> <a name="subnet_arn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation.property.subnetArn"></a>

```python
subnet_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#subnet_arn NetworkmanagerDevice#subnet_arn}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation.property.zone"></a>

```python
zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#zone NetworkmanagerDevice#zone}.

---

### NetworkmanagerDeviceConfig <a name="NetworkmanagerDeviceConfig" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_device

networkmanagerDevice.NetworkmanagerDeviceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  global_network_id: str,
  aws_location: NetworkmanagerDeviceAwsLocation = None,
  description: str = None,
  id: str = None,
  location: NetworkmanagerDeviceLocation = None,
  model: str = None,
  serial_number: str = None,
  site_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: NetworkmanagerDeviceTimeouts = None,
  type: str = None,
  vendor: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.globalNetworkId">global_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#global_network_id NetworkmanagerDevice#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.awsLocation">aws_location</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a></code> | aws_location block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#description NetworkmanagerDevice#description}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#id NetworkmanagerDevice#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.location">location</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a></code> | location block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.model">model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#model NetworkmanagerDevice#model}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.serialNumber">serial_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#serial_number NetworkmanagerDevice#serial_number}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.siteId">site_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#site_id NetworkmanagerDevice#site_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#tags NetworkmanagerDevice#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#tags_all NetworkmanagerDevice#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts">NetworkmanagerDeviceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#type NetworkmanagerDevice#type}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.vendor">vendor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#vendor NetworkmanagerDevice#vendor}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.globalNetworkId"></a>

```python
global_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#global_network_id NetworkmanagerDevice#global_network_id}.

---

##### `aws_location`<sup>Optional</sup> <a name="aws_location" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.awsLocation"></a>

```python
aws_location: NetworkmanagerDeviceAwsLocation
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a>

aws_location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#aws_location NetworkmanagerDevice#aws_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#description NetworkmanagerDevice#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#id NetworkmanagerDevice#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.location"></a>

```python
location: NetworkmanagerDeviceLocation
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a>

location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#location NetworkmanagerDevice#location}

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.model"></a>

```python
model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#model NetworkmanagerDevice#model}.

---

##### `serial_number`<sup>Optional</sup> <a name="serial_number" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#serial_number NetworkmanagerDevice#serial_number}.

---

##### `site_id`<sup>Optional</sup> <a name="site_id" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#site_id NetworkmanagerDevice#site_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#tags NetworkmanagerDevice#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#tags_all NetworkmanagerDevice#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.timeouts"></a>

```python
timeouts: NetworkmanagerDeviceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts">NetworkmanagerDeviceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#timeouts NetworkmanagerDevice#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#type NetworkmanagerDevice#type}.

---

##### `vendor`<sup>Optional</sup> <a name="vendor" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceConfig.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#vendor NetworkmanagerDevice#vendor}.

---

### NetworkmanagerDeviceLocation <a name="NetworkmanagerDeviceLocation" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_device

networkmanagerDevice.NetworkmanagerDeviceLocation(
  address: str = None,
  latitude: str = None,
  longitude: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#address NetworkmanagerDevice#address}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation.property.latitude">latitude</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#latitude NetworkmanagerDevice#latitude}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation.property.longitude">longitude</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#longitude NetworkmanagerDevice#longitude}. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#address NetworkmanagerDevice#address}.

---

##### `latitude`<sup>Optional</sup> <a name="latitude" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation.property.latitude"></a>

```python
latitude: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#latitude NetworkmanagerDevice#latitude}.

---

##### `longitude`<sup>Optional</sup> <a name="longitude" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation.property.longitude"></a>

```python
longitude: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#longitude NetworkmanagerDevice#longitude}.

---

### NetworkmanagerDeviceTimeouts <a name="NetworkmanagerDeviceTimeouts" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_device

networkmanagerDevice.NetworkmanagerDeviceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#create NetworkmanagerDevice#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#delete NetworkmanagerDevice#delete}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#update NetworkmanagerDevice#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#create NetworkmanagerDevice#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#delete NetworkmanagerDevice#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_device#update NetworkmanagerDevice#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerDeviceAwsLocationOutputReference <a name="NetworkmanagerDeviceAwsLocationOutputReference" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_device

networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resetSubnetArn">reset_subnet_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resetZone">reset_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subnet_arn` <a name="reset_subnet_arn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resetSubnetArn"></a>

```python
def reset_subnet_arn() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.resetZone"></a>

```python
def reset_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.subnetArnInput">subnet_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.subnetArn">subnet_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_arn_input`<sup>Optional</sup> <a name="subnet_arn_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.subnetArnInput"></a>

```python
subnet_arn_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `subnet_arn`<sup>Required</sup> <a name="subnet_arn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.subnetArn"></a>

```python
subnet_arn: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocationOutputReference.property.internalValue"></a>

```python
internal_value: NetworkmanagerDeviceAwsLocation
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceAwsLocation">NetworkmanagerDeviceAwsLocation</a>

---


### NetworkmanagerDeviceLocationOutputReference <a name="NetworkmanagerDeviceLocationOutputReference" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_device

networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetLatitude">reset_latitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetLongitude">reset_longitude</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_latitude` <a name="reset_latitude" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetLatitude"></a>

```python
def reset_latitude() -> None
```

##### `reset_longitude` <a name="reset_longitude" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.resetLongitude"></a>

```python
def reset_longitude() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.latitudeInput">latitude_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.longitudeInput">longitude_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.latitude">latitude</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.longitude">longitude</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `latitude_input`<sup>Optional</sup> <a name="latitude_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.latitudeInput"></a>

```python
latitude_input: str
```

- *Type:* str

---

##### `longitude_input`<sup>Optional</sup> <a name="longitude_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.longitudeInput"></a>

```python
longitude_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.latitude"></a>

```python
latitude: str
```

- *Type:* str

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.longitude"></a>

```python
longitude: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocationOutputReference.property.internalValue"></a>

```python
internal_value: NetworkmanagerDeviceLocation
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceLocation">NetworkmanagerDeviceLocation</a>

---


### NetworkmanagerDeviceTimeoutsOutputReference <a name="NetworkmanagerDeviceTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_device

networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts">NetworkmanagerDeviceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NetworkmanagerDeviceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerDevice.NetworkmanagerDeviceTimeouts">NetworkmanagerDeviceTimeouts</a>, cdktf.IResolvable]

---



