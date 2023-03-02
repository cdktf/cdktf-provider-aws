# `networkmanagerVpcAttachment` Submodule <a name="`networkmanagerVpcAttachment` Submodule" id="@cdktf/provider-aws.networkmanagerVpcAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerVpcAttachment <a name="NetworkmanagerVpcAttachment" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment aws_networkmanager_vpc_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  core_network_id: str,
  subnet_arns: typing.List[str],
  vpc_arn: str,
  id: str = None,
  options: NetworkmanagerVpcAttachmentOptions = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: NetworkmanagerVpcAttachmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.coreNetworkId">core_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#core_network_id NetworkmanagerVpcAttachment#core_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.subnetArns">subnet_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#subnet_arns NetworkmanagerVpcAttachment#subnet_arns}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.vpcArn">vpc_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#vpc_arn NetworkmanagerVpcAttachment#vpc_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#id NetworkmanagerVpcAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#tags_all NetworkmanagerVpcAttachment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.coreNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#core_network_id NetworkmanagerVpcAttachment#core_network_id}.

---

##### `subnet_arns`<sup>Required</sup> <a name="subnet_arns" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.subnetArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#subnet_arns NetworkmanagerVpcAttachment#subnet_arns}.

---

##### `vpc_arn`<sup>Required</sup> <a name="vpc_arn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.vpcArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#vpc_arn NetworkmanagerVpcAttachment#vpc_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#id NetworkmanagerVpcAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#options NetworkmanagerVpcAttachment#options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#tags_all NetworkmanagerVpcAttachment#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#timeouts NetworkmanagerVpcAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_options` <a name="put_options" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions"></a>

```python
def put_options(
  appliance_mode_support: typing.Union[bool, IResolvable] = None,
  ipv6_support: typing.Union[bool, IResolvable] = None
) -> None
```

###### `appliance_mode_support`<sup>Optional</sup> <a name="appliance_mode_support" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions.parameter.applianceModeSupport"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#appliance_mode_support NetworkmanagerVpcAttachment#appliance_mode_support}.

---

###### `ipv6_support`<sup>Optional</sup> <a name="ipv6_support" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions.parameter.ipv6Support"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#ipv6_support NetworkmanagerVpcAttachment#ipv6_support}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#create NetworkmanagerVpcAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#delete NetworkmanagerVpcAttachment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#update NetworkmanagerVpcAttachment#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentPolicyRuleNumber">attachment_policy_rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentType">attachment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.edgeLocation">edge_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference">NetworkmanagerVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.ownerAccountId">owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.segmentName">segment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference">NetworkmanagerVpcAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkIdInput">core_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.optionsInput">options_input</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArnsInput">subnet_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArnInput">vpc_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArns">subnet_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArn">vpc_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `attachment_policy_rule_number`<sup>Required</sup> <a name="attachment_policy_rule_number" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentPolicyRuleNumber"></a>

```python
attachment_policy_rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

---

##### `edge_location`<sup>Required</sup> <a name="edge_location" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.edgeLocation"></a>

```python
edge_location: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.options"></a>

```python
options: NetworkmanagerVpcAttachmentOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference">NetworkmanagerVpcAttachmentOptionsOutputReference</a>

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.ownerAccountId"></a>

```python
owner_account_id: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `segment_name`<sup>Required</sup> <a name="segment_name" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.segmentName"></a>

```python
segment_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.timeouts"></a>

```python
timeouts: NetworkmanagerVpcAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference">NetworkmanagerVpcAttachmentTimeoutsOutputReference</a>

---

##### `core_network_id_input`<sup>Optional</sup> <a name="core_network_id_input" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkIdInput"></a>

```python
core_network_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.optionsInput"></a>

```python
options_input: NetworkmanagerVpcAttachmentOptions
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

---

##### `subnet_arns_input`<sup>Optional</sup> <a name="subnet_arns_input" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArnsInput"></a>

```python
subnet_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[NetworkmanagerVpcAttachmentTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a>, cdktf.IResolvable]

---

##### `vpc_arn_input`<sup>Optional</sup> <a name="vpc_arn_input" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArnInput"></a>

```python
vpc_arn_input: str
```

- *Type:* str

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subnet_arns`<sup>Required</sup> <a name="subnet_arns" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArns"></a>

```python
subnet_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_arn`<sup>Required</sup> <a name="vpc_arn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArn"></a>

```python
vpc_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerVpcAttachmentConfig <a name="NetworkmanagerVpcAttachmentConfig" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  core_network_id: str,
  subnet_arns: typing.List[str],
  vpc_arn: str,
  id: str = None,
  options: NetworkmanagerVpcAttachmentOptions = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: NetworkmanagerVpcAttachmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#core_network_id NetworkmanagerVpcAttachment#core_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.subnetArns">subnet_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#subnet_arns NetworkmanagerVpcAttachment#subnet_arns}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.vpcArn">vpc_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#vpc_arn NetworkmanagerVpcAttachment#vpc_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#id NetworkmanagerVpcAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#tags_all NetworkmanagerVpcAttachment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#core_network_id NetworkmanagerVpcAttachment#core_network_id}.

---

##### `subnet_arns`<sup>Required</sup> <a name="subnet_arns" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.subnetArns"></a>

```python
subnet_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#subnet_arns NetworkmanagerVpcAttachment#subnet_arns}.

---

##### `vpc_arn`<sup>Required</sup> <a name="vpc_arn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.vpcArn"></a>

```python
vpc_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#vpc_arn NetworkmanagerVpcAttachment#vpc_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#id NetworkmanagerVpcAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.options"></a>

```python
options: NetworkmanagerVpcAttachmentOptions
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#options NetworkmanagerVpcAttachment#options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#tags_all NetworkmanagerVpcAttachment#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.timeouts"></a>

```python
timeouts: NetworkmanagerVpcAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#timeouts NetworkmanagerVpcAttachment#timeouts}

---

### NetworkmanagerVpcAttachmentOptions <a name="NetworkmanagerVpcAttachmentOptions" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions(
  appliance_mode_support: typing.Union[bool, IResolvable] = None,
  ipv6_support: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.applianceModeSupport">appliance_mode_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#appliance_mode_support NetworkmanagerVpcAttachment#appliance_mode_support}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.ipv6Support">ipv6_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#ipv6_support NetworkmanagerVpcAttachment#ipv6_support}. |

---

##### `appliance_mode_support`<sup>Optional</sup> <a name="appliance_mode_support" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.applianceModeSupport"></a>

```python
appliance_mode_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#appliance_mode_support NetworkmanagerVpcAttachment#appliance_mode_support}.

---

##### `ipv6_support`<sup>Optional</sup> <a name="ipv6_support" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.ipv6Support"></a>

```python
ipv6_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#ipv6_support NetworkmanagerVpcAttachment#ipv6_support}.

---

### NetworkmanagerVpcAttachmentTimeouts <a name="NetworkmanagerVpcAttachmentTimeouts" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#create NetworkmanagerVpcAttachment#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#delete NetworkmanagerVpcAttachment#delete}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#update NetworkmanagerVpcAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#create NetworkmanagerVpcAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#delete NetworkmanagerVpcAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_vpc_attachment#update NetworkmanagerVpcAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerVpcAttachmentOptionsOutputReference <a name="NetworkmanagerVpcAttachmentOptionsOutputReference" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetApplianceModeSupport">reset_appliance_mode_support</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetIpv6Support">reset_ipv6_support</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_appliance_mode_support` <a name="reset_appliance_mode_support" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetApplianceModeSupport"></a>

```python
def reset_appliance_mode_support() -> None
```

##### `reset_ipv6_support` <a name="reset_ipv6_support" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetIpv6Support"></a>

```python
def reset_ipv6_support() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupportInput">appliance_mode_support_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6SupportInput">ipv6_support_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupport">appliance_mode_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6Support">ipv6_support</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `appliance_mode_support_input`<sup>Optional</sup> <a name="appliance_mode_support_input" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupportInput"></a>

```python
appliance_mode_support_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipv6_support_input`<sup>Optional</sup> <a name="ipv6_support_input" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6SupportInput"></a>

```python
ipv6_support_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `appliance_mode_support`<sup>Required</sup> <a name="appliance_mode_support" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupport"></a>

```python
appliance_mode_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ipv6_support`<sup>Required</sup> <a name="ipv6_support" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6Support"></a>

```python
ipv6_support: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkmanagerVpcAttachmentOptions
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

---


### NetworkmanagerVpcAttachmentTimeoutsOutputReference <a name="NetworkmanagerVpcAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_vpc_attachment

networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NetworkmanagerVpcAttachmentTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTimeouts">NetworkmanagerVpcAttachmentTimeouts</a>, cdktf.IResolvable]

---



