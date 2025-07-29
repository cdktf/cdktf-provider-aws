# `vpcIpamPreviewNextCidr` Submodule <a name="`vpcIpamPreviewNextCidr` Submodule" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamPreviewNextCidr <a name="VpcIpamPreviewNextCidr" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr aws_vpc_ipam_preview_next_cidr}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_preview_next_cidr

vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipam_pool_id: str,
  disallowed_cidrs: typing.List[str] = None,
  id: str = None,
  netmask_length: typing.Union[int, float] = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#ipam_pool_id VpcIpamPreviewNextCidr#ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.disallowedCidrs">disallowed_cidrs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#disallowed_cidrs VpcIpamPreviewNextCidr#disallowed_cidrs}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#id VpcIpamPreviewNextCidr#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.netmaskLength">netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#netmask_length VpcIpamPreviewNextCidr#netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.ipamPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#ipam_pool_id VpcIpamPreviewNextCidr#ipam_pool_id}.

---

##### `disallowed_cidrs`<sup>Optional</sup> <a name="disallowed_cidrs" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.disallowedCidrs"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#disallowed_cidrs VpcIpamPreviewNextCidr#disallowed_cidrs}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#id VpcIpamPreviewNextCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `netmask_length`<sup>Optional</sup> <a name="netmask_length" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.netmaskLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#netmask_length VpcIpamPreviewNextCidr#netmask_length}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#region VpcIpamPreviewNextCidr#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetDisallowedCidrs">reset_disallowed_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetNetmaskLength">reset_netmask_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_disallowed_cidrs` <a name="reset_disallowed_cidrs" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetDisallowedCidrs"></a>

```python
def reset_disallowed_cidrs() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_netmask_length` <a name="reset_netmask_length" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetNetmaskLength"></a>

```python
def reset_netmask_length() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VpcIpamPreviewNextCidr resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_preview_next_cidr

vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_preview_next_cidr

vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_preview_next_cidr

vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_preview_next_cidr

vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VpcIpamPreviewNextCidr resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VpcIpamPreviewNextCidr to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VpcIpamPreviewNextCidr that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcIpamPreviewNextCidr to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.disallowedCidrsInput">disallowed_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.ipamPoolIdInput">ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.netmaskLengthInput">netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.disallowedCidrs">disallowed_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.netmaskLength">netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `disallowed_cidrs_input`<sup>Optional</sup> <a name="disallowed_cidrs_input" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.disallowedCidrsInput"></a>

```python
disallowed_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipam_pool_id_input`<sup>Optional</sup> <a name="ipam_pool_id_input" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.ipamPoolIdInput"></a>

```python
ipam_pool_id_input: str
```

- *Type:* str

---

##### `netmask_length_input`<sup>Optional</sup> <a name="netmask_length_input" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.netmaskLengthInput"></a>

```python
netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `disallowed_cidrs`<sup>Required</sup> <a name="disallowed_cidrs" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.disallowedCidrs"></a>

```python
disallowed_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.ipamPoolId"></a>

```python
ipam_pool_id: str
```

- *Type:* str

---

##### `netmask_length`<sup>Required</sup> <a name="netmask_length" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.netmaskLength"></a>

```python
netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidr.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamPreviewNextCidrConfig <a name="VpcIpamPreviewNextCidrConfig" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_preview_next_cidr

vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipam_pool_id: str,
  disallowed_cidrs: typing.List[str] = None,
  id: str = None,
  netmask_length: typing.Union[int, float] = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#ipam_pool_id VpcIpamPreviewNextCidr#ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.disallowedCidrs">disallowed_cidrs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#disallowed_cidrs VpcIpamPreviewNextCidr#disallowed_cidrs}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#id VpcIpamPreviewNextCidr#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.netmaskLength">netmask_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#netmask_length VpcIpamPreviewNextCidr#netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.ipamPoolId"></a>

```python
ipam_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#ipam_pool_id VpcIpamPreviewNextCidr#ipam_pool_id}.

---

##### `disallowed_cidrs`<sup>Optional</sup> <a name="disallowed_cidrs" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.disallowedCidrs"></a>

```python
disallowed_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#disallowed_cidrs VpcIpamPreviewNextCidr#disallowed_cidrs}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#id VpcIpamPreviewNextCidr#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `netmask_length`<sup>Optional</sup> <a name="netmask_length" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.netmaskLength"></a>

```python
netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#netmask_length VpcIpamPreviewNextCidr#netmask_length}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.vpcIpamPreviewNextCidr.VpcIpamPreviewNextCidrConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/vpc_ipam_preview_next_cidr#region VpcIpamPreviewNextCidr#region}

---



