# `ec2ClientVpnNetworkAssociation` Submodule <a name="`ec2ClientVpnNetworkAssociation` Submodule" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ClientVpnNetworkAssociation <a name="Ec2ClientVpnNetworkAssociation" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association aws_ec2_client_vpn_network_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_client_vpn_network_association

ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_vpn_endpoint_id: str,
  subnet_id: str,
  id: str = None,
  timeouts: Ec2ClientVpnNetworkAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.clientVpnEndpointId">client_vpn_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#client_vpn_endpoint_id Ec2ClientVpnNetworkAssociation#client_vpn_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#subnet_id Ec2ClientVpnNetworkAssociation#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#id Ec2ClientVpnNetworkAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts">Ec2ClientVpnNetworkAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_vpn_endpoint_id`<sup>Required</sup> <a name="client_vpn_endpoint_id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.clientVpnEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#client_vpn_endpoint_id Ec2ClientVpnNetworkAssociation#client_vpn_endpoint_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#subnet_id Ec2ClientVpnNetworkAssociation#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#id Ec2ClientVpnNetworkAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts">Ec2ClientVpnNetworkAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#timeouts Ec2ClientVpnNetworkAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#create Ec2ClientVpnNetworkAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#delete Ec2ClientVpnNetworkAssociation#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Ec2ClientVpnNetworkAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ec2_client_vpn_network_association

ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ec2_client_vpn_network_association

ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ec2_client_vpn_network_association

ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import ec2_client_vpn_network_association

ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Ec2ClientVpnNetworkAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2ClientVpnNetworkAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2ClientVpnNetworkAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Ec2ClientVpnNetworkAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference">Ec2ClientVpnNetworkAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.clientVpnEndpointIdInput">client_vpn_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts">Ec2ClientVpnNetworkAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.clientVpnEndpointId">client_vpn_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.timeouts"></a>

```python
timeouts: Ec2ClientVpnNetworkAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference">Ec2ClientVpnNetworkAssociationTimeoutsOutputReference</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `client_vpn_endpoint_id_input`<sup>Optional</sup> <a name="client_vpn_endpoint_id_input" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.clientVpnEndpointIdInput"></a>

```python
client_vpn_endpoint_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, Ec2ClientVpnNetworkAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts">Ec2ClientVpnNetworkAssociationTimeouts</a>]

---

##### `client_vpn_endpoint_id`<sup>Required</sup> <a name="client_vpn_endpoint_id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.clientVpnEndpointId"></a>

```python
client_vpn_endpoint_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ClientVpnNetworkAssociationConfig <a name="Ec2ClientVpnNetworkAssociationConfig" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_client_vpn_network_association

ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_vpn_endpoint_id: str,
  subnet_id: str,
  id: str = None,
  timeouts: Ec2ClientVpnNetworkAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.clientVpnEndpointId">client_vpn_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#client_vpn_endpoint_id Ec2ClientVpnNetworkAssociation#client_vpn_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#subnet_id Ec2ClientVpnNetworkAssociation#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#id Ec2ClientVpnNetworkAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts">Ec2ClientVpnNetworkAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_vpn_endpoint_id`<sup>Required</sup> <a name="client_vpn_endpoint_id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.clientVpnEndpointId"></a>

```python
client_vpn_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#client_vpn_endpoint_id Ec2ClientVpnNetworkAssociation#client_vpn_endpoint_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#subnet_id Ec2ClientVpnNetworkAssociation#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#id Ec2ClientVpnNetworkAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.timeouts"></a>

```python
timeouts: Ec2ClientVpnNetworkAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts">Ec2ClientVpnNetworkAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#timeouts Ec2ClientVpnNetworkAssociation#timeouts}

---

### Ec2ClientVpnNetworkAssociationTimeouts <a name="Ec2ClientVpnNetworkAssociationTimeouts" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_client_vpn_network_association

ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#create Ec2ClientVpnNetworkAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#delete Ec2ClientVpnNetworkAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#create Ec2ClientVpnNetworkAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/resources/ec2_client_vpn_network_association#delete Ec2ClientVpnNetworkAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ClientVpnNetworkAssociationTimeoutsOutputReference <a name="Ec2ClientVpnNetworkAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_client_vpn_network_association

ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts">Ec2ClientVpnNetworkAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Ec2ClientVpnNetworkAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationTimeouts">Ec2ClientVpnNetworkAssociationTimeouts</a>]

---



