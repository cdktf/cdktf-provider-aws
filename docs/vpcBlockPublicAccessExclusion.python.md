# `vpcBlockPublicAccessExclusion` Submodule <a name="`vpcBlockPublicAccessExclusion` Submodule" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcBlockPublicAccessExclusion <a name="VpcBlockPublicAccessExclusion" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion aws_vpc_block_public_access_exclusion}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_block_public_access_exclusion

vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  internet_gateway_exclusion_mode: str,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VpcBlockPublicAccessExclusionTimeouts = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.internetGatewayExclusionMode">internet_gateway_exclusion_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#internet_gateway_exclusion_mode VpcBlockPublicAccessExclusion#internet_gateway_exclusion_mode}. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#subnet_id VpcBlockPublicAccessExclusion#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#tags VpcBlockPublicAccessExclusion#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#vpc_id VpcBlockPublicAccessExclusion#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `internet_gateway_exclusion_mode`<sup>Required</sup> <a name="internet_gateway_exclusion_mode" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.internetGatewayExclusionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#internet_gateway_exclusion_mode VpcBlockPublicAccessExclusion#internet_gateway_exclusion_mode}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#subnet_id VpcBlockPublicAccessExclusion#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#tags VpcBlockPublicAccessExclusion#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#timeouts VpcBlockPublicAccessExclusion#timeouts}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#vpc_id VpcBlockPublicAccessExclusion#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#create VpcBlockPublicAccessExclusion#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#delete VpcBlockPublicAccessExclusion#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#update VpcBlockPublicAccessExclusion#update}

---

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VpcBlockPublicAccessExclusion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpc_block_public_access_exclusion

vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpc_block_public_access_exclusion

vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpc_block_public_access_exclusion

vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import vpc_block_public_access_exclusion

vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VpcBlockPublicAccessExclusion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VpcBlockPublicAccessExclusion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VpcBlockPublicAccessExclusion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcBlockPublicAccessExclusion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference">VpcBlockPublicAccessExclusionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.internetGatewayExclusionModeInput">internet_gateway_exclusion_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.internetGatewayExclusionMode">internet_gateway_exclusion_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.timeouts"></a>

```python
timeouts: VpcBlockPublicAccessExclusionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference">VpcBlockPublicAccessExclusionTimeoutsOutputReference</a>

---

##### `internet_gateway_exclusion_mode_input`<sup>Optional</sup> <a name="internet_gateway_exclusion_mode_input" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.internetGatewayExclusionModeInput"></a>

```python
internet_gateway_exclusion_mode_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VpcBlockPublicAccessExclusionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `internet_gateway_exclusion_mode`<sup>Required</sup> <a name="internet_gateway_exclusion_mode" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.internetGatewayExclusionMode"></a>

```python
internet_gateway_exclusion_mode: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcBlockPublicAccessExclusionConfig <a name="VpcBlockPublicAccessExclusionConfig" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_block_public_access_exclusion

vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  internet_gateway_exclusion_mode: str,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: VpcBlockPublicAccessExclusionTimeouts = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.internetGatewayExclusionMode">internet_gateway_exclusion_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#internet_gateway_exclusion_mode VpcBlockPublicAccessExclusion#internet_gateway_exclusion_mode}. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#subnet_id VpcBlockPublicAccessExclusion#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#tags VpcBlockPublicAccessExclusion#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#vpc_id VpcBlockPublicAccessExclusion#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `internet_gateway_exclusion_mode`<sup>Required</sup> <a name="internet_gateway_exclusion_mode" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.internetGatewayExclusionMode"></a>

```python
internet_gateway_exclusion_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#internet_gateway_exclusion_mode VpcBlockPublicAccessExclusion#internet_gateway_exclusion_mode}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#subnet_id VpcBlockPublicAccessExclusion#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#tags VpcBlockPublicAccessExclusion#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.timeouts"></a>

```python
timeouts: VpcBlockPublicAccessExclusionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#timeouts VpcBlockPublicAccessExclusion#timeouts}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#vpc_id VpcBlockPublicAccessExclusion#vpc_id}.

---

### VpcBlockPublicAccessExclusionTimeouts <a name="VpcBlockPublicAccessExclusionTimeouts" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_block_public_access_exclusion

vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#create VpcBlockPublicAccessExclusion#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#delete VpcBlockPublicAccessExclusion#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/vpc_block_public_access_exclusion#update VpcBlockPublicAccessExclusion#update}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcBlockPublicAccessExclusionTimeoutsOutputReference <a name="VpcBlockPublicAccessExclusionTimeoutsOutputReference" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_block_public_access_exclusion

vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpcBlockPublicAccessExclusionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcBlockPublicAccessExclusion.VpcBlockPublicAccessExclusionTimeouts">VpcBlockPublicAccessExclusionTimeouts</a>]

---



