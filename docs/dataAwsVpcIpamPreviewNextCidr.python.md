# `dataAwsVpcIpamPreviewNextCidr` Submodule <a name="`dataAwsVpcIpamPreviewNextCidr` Submodule" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcIpamPreviewNextCidr <a name="DataAwsVpcIpamPreviewNextCidr" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr aws_vpc_ipam_preview_next_cidr}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_preview_next_cidr

dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipam_pool_id: str,
  disallowed_cidrs: typing.List[str] = None,
  id: str = None,
  netmask_length: typing.Union[int, float] = None,
  timeouts: DataAwsVpcIpamPreviewNextCidrTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#ipam_pool_id DataAwsVpcIpamPreviewNextCidr#ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.disallowedCidrs">disallowed_cidrs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#disallowed_cidrs DataAwsVpcIpamPreviewNextCidr#disallowed_cidrs}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#id DataAwsVpcIpamPreviewNextCidr#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.netmaskLength">netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#netmask_length DataAwsVpcIpamPreviewNextCidr#netmask_length}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.ipamPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#ipam_pool_id DataAwsVpcIpamPreviewNextCidr#ipam_pool_id}.

---

##### `disallowed_cidrs`<sup>Optional</sup> <a name="disallowed_cidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.disallowedCidrs"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#disallowed_cidrs DataAwsVpcIpamPreviewNextCidr#disallowed_cidrs}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#id DataAwsVpcIpamPreviewNextCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `netmask_length`<sup>Optional</sup> <a name="netmask_length" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.netmaskLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#netmask_length DataAwsVpcIpamPreviewNextCidr#netmask_length}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#timeouts DataAwsVpcIpamPreviewNextCidr#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetDisallowedCidrs">reset_disallowed_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetNetmaskLength">reset_netmask_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#read DataAwsVpcIpamPreviewNextCidr#read}.

---

##### `reset_disallowed_cidrs` <a name="reset_disallowed_cidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetDisallowedCidrs"></a>

```python
def reset_disallowed_cidrs() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_netmask_length` <a name="reset_netmask_length" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetNetmaskLength"></a>

```python
def reset_netmask_length() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_preview_next_cidr

dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_preview_next_cidr

dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_preview_next_cidr

dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference">DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.disallowedCidrsInput">disallowed_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.ipamPoolIdInput">ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.netmaskLengthInput">netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.disallowedCidrs">disallowed_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.netmaskLength">netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.timeouts"></a>

```python
timeouts: DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference">DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference</a>

---

##### `disallowed_cidrs_input`<sup>Optional</sup> <a name="disallowed_cidrs_input" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.disallowedCidrsInput"></a>

```python
disallowed_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipam_pool_id_input`<sup>Optional</sup> <a name="ipam_pool_id_input" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.ipamPoolIdInput"></a>

```python
ipam_pool_id_input: str
```

- *Type:* str

---

##### `netmask_length_input`<sup>Optional</sup> <a name="netmask_length_input" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.netmaskLengthInput"></a>

```python
netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsVpcIpamPreviewNextCidrTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a>, cdktf.IResolvable]

---

##### `disallowed_cidrs`<sup>Required</sup> <a name="disallowed_cidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.disallowedCidrs"></a>

```python
disallowed_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.ipamPoolId"></a>

```python
ipam_pool_id: str
```

- *Type:* str

---

##### `netmask_length`<sup>Required</sup> <a name="netmask_length" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.netmaskLength"></a>

```python
netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidr.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcIpamPreviewNextCidrConfig <a name="DataAwsVpcIpamPreviewNextCidrConfig" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_preview_next_cidr

dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipam_pool_id: str,
  disallowed_cidrs: typing.List[str] = None,
  id: str = None,
  netmask_length: typing.Union[int, float] = None,
  timeouts: DataAwsVpcIpamPreviewNextCidrTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#ipam_pool_id DataAwsVpcIpamPreviewNextCidr#ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.disallowedCidrs">disallowed_cidrs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#disallowed_cidrs DataAwsVpcIpamPreviewNextCidr#disallowed_cidrs}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#id DataAwsVpcIpamPreviewNextCidr#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.netmaskLength">netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#netmask_length DataAwsVpcIpamPreviewNextCidr#netmask_length}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.ipamPoolId"></a>

```python
ipam_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#ipam_pool_id DataAwsVpcIpamPreviewNextCidr#ipam_pool_id}.

---

##### `disallowed_cidrs`<sup>Optional</sup> <a name="disallowed_cidrs" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.disallowedCidrs"></a>

```python
disallowed_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#disallowed_cidrs DataAwsVpcIpamPreviewNextCidr#disallowed_cidrs}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#id DataAwsVpcIpamPreviewNextCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `netmask_length`<sup>Optional</sup> <a name="netmask_length" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.netmaskLength"></a>

```python
netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#netmask_length DataAwsVpcIpamPreviewNextCidr#netmask_length}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrConfig.property.timeouts"></a>

```python
timeouts: DataAwsVpcIpamPreviewNextCidrTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#timeouts DataAwsVpcIpamPreviewNextCidr#timeouts}

---

### DataAwsVpcIpamPreviewNextCidrTimeouts <a name="DataAwsVpcIpamPreviewNextCidrTimeouts" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_preview_next_cidr

dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#read DataAwsVpcIpamPreviewNextCidr#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_preview_next_cidr#read DataAwsVpcIpamPreviewNextCidr#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference <a name="DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_preview_next_cidr

dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsVpcIpamPreviewNextCidrTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPreviewNextCidr.DataAwsVpcIpamPreviewNextCidrTimeouts">DataAwsVpcIpamPreviewNextCidrTimeouts</a>, cdktf.IResolvable]

---



