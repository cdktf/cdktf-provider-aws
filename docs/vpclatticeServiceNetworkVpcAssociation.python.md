# `vpclatticeServiceNetworkVpcAssociation` Submodule <a name="`vpclatticeServiceNetworkVpcAssociation` Submodule" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeServiceNetworkVpcAssociation <a name="VpclatticeServiceNetworkVpcAssociation" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association aws_vpclattice_service_network_vpc_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_service_network_vpc_association

vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_network_identifier: str,
  vpc_identifier: str,
  id: str = None,
  security_group_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VpclatticeServiceNetworkVpcAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.serviceNetworkIdentifier">service_network_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#service_network_identifier VpclatticeServiceNetworkVpcAssociation#service_network_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.vpcIdentifier">vpc_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#vpc_identifier VpclatticeServiceNetworkVpcAssociation#vpc_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#id VpclatticeServiceNetworkVpcAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#security_group_ids VpclatticeServiceNetworkVpcAssociation#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#tags VpclatticeServiceNetworkVpcAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#tags_all VpclatticeServiceNetworkVpcAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts">VpclatticeServiceNetworkVpcAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_network_identifier`<sup>Required</sup> <a name="service_network_identifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.serviceNetworkIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#service_network_identifier VpclatticeServiceNetworkVpcAssociation#service_network_identifier}.

---

##### `vpc_identifier`<sup>Required</sup> <a name="vpc_identifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.vpcIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#vpc_identifier VpclatticeServiceNetworkVpcAssociation#vpc_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#id VpclatticeServiceNetworkVpcAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#security_group_ids VpclatticeServiceNetworkVpcAssociation#security_group_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#tags VpclatticeServiceNetworkVpcAssociation#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#tags_all VpclatticeServiceNetworkVpcAssociation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts">VpclatticeServiceNetworkVpcAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#timeouts VpclatticeServiceNetworkVpcAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#create VpclatticeServiceNetworkVpcAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#delete VpclatticeServiceNetworkVpcAssociation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#update VpclatticeServiceNetworkVpcAssociation#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VpclatticeServiceNetworkVpcAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_service_network_vpc_association

vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_service_network_vpc_association

vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_service_network_vpc_association

vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_service_network_vpc_association

vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VpclatticeServiceNetworkVpcAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VpclatticeServiceNetworkVpcAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VpclatticeServiceNetworkVpcAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpclatticeServiceNetworkVpcAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference">VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkIdentifierInput">service_network_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts">VpclatticeServiceNetworkVpcAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.vpcIdentifierInput">vpc_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkIdentifier">service_network_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.vpcIdentifier">vpc_identifier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.timeouts"></a>

```python
timeouts: VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference">VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_network_identifier_input`<sup>Optional</sup> <a name="service_network_identifier_input" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkIdentifierInput"></a>

```python
service_network_identifier_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VpclatticeServiceNetworkVpcAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts">VpclatticeServiceNetworkVpcAssociationTimeouts</a>]

---

##### `vpc_identifier_input`<sup>Optional</sup> <a name="vpc_identifier_input" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.vpcIdentifierInput"></a>

```python
vpc_identifier_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_network_identifier`<sup>Required</sup> <a name="service_network_identifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkIdentifier"></a>

```python
service_network_identifier: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_identifier`<sup>Required</sup> <a name="vpc_identifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.vpcIdentifier"></a>

```python
vpc_identifier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeServiceNetworkVpcAssociationConfig <a name="VpclatticeServiceNetworkVpcAssociationConfig" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_service_network_vpc_association

vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_network_identifier: str,
  vpc_identifier: str,
  id: str = None,
  security_group_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VpclatticeServiceNetworkVpcAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.serviceNetworkIdentifier">service_network_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#service_network_identifier VpclatticeServiceNetworkVpcAssociation#service_network_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.vpcIdentifier">vpc_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#vpc_identifier VpclatticeServiceNetworkVpcAssociation#vpc_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#id VpclatticeServiceNetworkVpcAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#security_group_ids VpclatticeServiceNetworkVpcAssociation#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#tags VpclatticeServiceNetworkVpcAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#tags_all VpclatticeServiceNetworkVpcAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts">VpclatticeServiceNetworkVpcAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_network_identifier`<sup>Required</sup> <a name="service_network_identifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.serviceNetworkIdentifier"></a>

```python
service_network_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#service_network_identifier VpclatticeServiceNetworkVpcAssociation#service_network_identifier}.

---

##### `vpc_identifier`<sup>Required</sup> <a name="vpc_identifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.vpcIdentifier"></a>

```python
vpc_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#vpc_identifier VpclatticeServiceNetworkVpcAssociation#vpc_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#id VpclatticeServiceNetworkVpcAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#security_group_ids VpclatticeServiceNetworkVpcAssociation#security_group_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#tags VpclatticeServiceNetworkVpcAssociation#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#tags_all VpclatticeServiceNetworkVpcAssociation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.timeouts"></a>

```python
timeouts: VpclatticeServiceNetworkVpcAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts">VpclatticeServiceNetworkVpcAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#timeouts VpclatticeServiceNetworkVpcAssociation#timeouts}

---

### VpclatticeServiceNetworkVpcAssociationTimeouts <a name="VpclatticeServiceNetworkVpcAssociationTimeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_service_network_vpc_association

vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#create VpclatticeServiceNetworkVpcAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#delete VpclatticeServiceNetworkVpcAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#update VpclatticeServiceNetworkVpcAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#create VpclatticeServiceNetworkVpcAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#delete VpclatticeServiceNetworkVpcAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/vpclattice_service_network_vpc_association#update VpclatticeServiceNetworkVpcAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference <a name="VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpclattice_service_network_vpc_association

vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts">VpclatticeServiceNetworkVpcAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpclatticeServiceNetworkVpcAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTimeouts">VpclatticeServiceNetworkVpcAssociationTimeouts</a>]

---



