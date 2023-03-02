# `dxHostedPublicVirtualInterfaceAccepter` Submodule <a name="`dxHostedPublicVirtualInterfaceAccepter` Submodule" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxHostedPublicVirtualInterfaceAccepter <a name="DxHostedPublicVirtualInterfaceAccepter" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter aws_dx_hosted_public_virtual_interface_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_public_virtual_interface_accepter

dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  virtual_interface_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DxHostedPublicVirtualInterfaceAccepterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.virtualInterfaceId">virtual_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#virtual_interface_id DxHostedPublicVirtualInterfaceAccepter#virtual_interface_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#id DxHostedPublicVirtualInterfaceAccepter#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#tags DxHostedPublicVirtualInterfaceAccepter#tags}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#tags_all DxHostedPublicVirtualInterfaceAccepter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `virtual_interface_id`<sup>Required</sup> <a name="virtual_interface_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.virtualInterfaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#virtual_interface_id DxHostedPublicVirtualInterfaceAccepter#virtual_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#id DxHostedPublicVirtualInterfaceAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#tags DxHostedPublicVirtualInterfaceAccepter#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#tags_all DxHostedPublicVirtualInterfaceAccepter#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#timeouts DxHostedPublicVirtualInterfaceAccepter#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#create DxHostedPublicVirtualInterfaceAccepter#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#delete DxHostedPublicVirtualInterfaceAccepter#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_public_virtual_interface_accepter

dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_public_virtual_interface_accepter

dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_public_virtual_interface_accepter

dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.virtualInterfaceIdInput">virtual_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.virtualInterfaceId">virtual_interface_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.timeouts"></a>

```python
timeouts: DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DxHostedPublicVirtualInterfaceAccepterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a>, cdktf.IResolvable]

---

##### `virtual_interface_id_input`<sup>Optional</sup> <a name="virtual_interface_id_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.virtualInterfaceIdInput"></a>

```python
virtual_interface_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_interface_id`<sup>Required</sup> <a name="virtual_interface_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.virtualInterfaceId"></a>

```python
virtual_interface_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DxHostedPublicVirtualInterfaceAccepterConfig <a name="DxHostedPublicVirtualInterfaceAccepterConfig" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_public_virtual_interface_accepter

dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  virtual_interface_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DxHostedPublicVirtualInterfaceAccepterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.virtualInterfaceId">virtual_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#virtual_interface_id DxHostedPublicVirtualInterfaceAccepter#virtual_interface_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#id DxHostedPublicVirtualInterfaceAccepter#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#tags DxHostedPublicVirtualInterfaceAccepter#tags}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#tags_all DxHostedPublicVirtualInterfaceAccepter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `virtual_interface_id`<sup>Required</sup> <a name="virtual_interface_id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.virtualInterfaceId"></a>

```python
virtual_interface_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#virtual_interface_id DxHostedPublicVirtualInterfaceAccepter#virtual_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#id DxHostedPublicVirtualInterfaceAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#tags DxHostedPublicVirtualInterfaceAccepter#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#tags_all DxHostedPublicVirtualInterfaceAccepter#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterConfig.property.timeouts"></a>

```python
timeouts: DxHostedPublicVirtualInterfaceAccepterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#timeouts DxHostedPublicVirtualInterfaceAccepter#timeouts}

---

### DxHostedPublicVirtualInterfaceAccepterTimeouts <a name="DxHostedPublicVirtualInterfaceAccepterTimeouts" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_public_virtual_interface_accepter

dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#create DxHostedPublicVirtualInterfaceAccepter#create}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#delete DxHostedPublicVirtualInterfaceAccepter#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#create DxHostedPublicVirtualInterfaceAccepter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter#delete DxHostedPublicVirtualInterfaceAccepter#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference <a name="DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dx_hosted_public_virtual_interface_accepter

dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DxHostedPublicVirtualInterfaceAccepterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dxHostedPublicVirtualInterfaceAccepter.DxHostedPublicVirtualInterfaceAccepterTimeouts">DxHostedPublicVirtualInterfaceAccepterTimeouts</a>, cdktf.IResolvable]

---



