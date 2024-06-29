# `vpcEndpointServicePrivateDnsVerification` Submodule <a name="`vpcEndpointServicePrivateDnsVerification` Submodule" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcEndpointServicePrivateDnsVerification <a name="VpcEndpointServicePrivateDnsVerification" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/vpc_endpoint_service_private_dns_verification aws_vpc_endpoint_service_private_dns_verification}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint_service_private_dns_verification

vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_id: str,
  timeouts: VpcEndpointServicePrivateDnsVerificationTimeouts = None,
  wait_for_verification: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/vpc_endpoint_service_private_dns_verification#service_id VpcEndpointServicePrivateDnsVerification#service_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts">VpcEndpointServicePrivateDnsVerificationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.waitForVerification">wait_for_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/vpc_endpoint_service_private_dns_verification#wait_for_verification VpcEndpointServicePrivateDnsVerification#wait_for_verification}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.serviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/vpc_endpoint_service_private_dns_verification#service_id VpcEndpointServicePrivateDnsVerification#service_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts">VpcEndpointServicePrivateDnsVerificationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/vpc_endpoint_service_private_dns_verification#timeouts VpcEndpointServicePrivateDnsVerification#timeouts}

---

##### `wait_for_verification`<sup>Optional</sup> <a name="wait_for_verification" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.Initializer.parameter.waitForVerification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/vpc_endpoint_service_private_dns_verification#wait_for_verification VpcEndpointServicePrivateDnsVerification#wait_for_verification}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.resetWaitForVerification">reset_wait_for_verification</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/vpc_endpoint_service_private_dns_verification#create VpcEndpointServicePrivateDnsVerification#create}

---

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wait_for_verification` <a name="reset_wait_for_verification" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.resetWaitForVerification"></a>

```python
def reset_wait_for_verification() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VpcEndpointServicePrivateDnsVerification resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint_service_private_dns_verification

vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint_service_private_dns_verification

vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint_service_private_dns_verification

vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint_service_private_dns_verification

vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VpcEndpointServicePrivateDnsVerification resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VpcEndpointServicePrivateDnsVerification to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VpcEndpointServicePrivateDnsVerification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/vpc_endpoint_service_private_dns_verification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcEndpointServicePrivateDnsVerification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference">VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts">VpcEndpointServicePrivateDnsVerificationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.waitForVerificationInput">wait_for_verification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.waitForVerification">wait_for_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.timeouts"></a>

```python
timeouts: VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference">VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference</a>

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VpcEndpointServicePrivateDnsVerificationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts">VpcEndpointServicePrivateDnsVerificationTimeouts</a>]

---

##### `wait_for_verification_input`<sup>Optional</sup> <a name="wait_for_verification_input" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.waitForVerificationInput"></a>

```python
wait_for_verification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `wait_for_verification`<sup>Required</sup> <a name="wait_for_verification" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.waitForVerification"></a>

```python
wait_for_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerification.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcEndpointServicePrivateDnsVerificationConfig <a name="VpcEndpointServicePrivateDnsVerificationConfig" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint_service_private_dns_verification

vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_id: str,
  timeouts: VpcEndpointServicePrivateDnsVerificationTimeouts = None,
  wait_for_verification: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.serviceId">service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/vpc_endpoint_service_private_dns_verification#service_id VpcEndpointServicePrivateDnsVerification#service_id}. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts">VpcEndpointServicePrivateDnsVerificationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.waitForVerification">wait_for_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/vpc_endpoint_service_private_dns_verification#wait_for_verification VpcEndpointServicePrivateDnsVerification#wait_for_verification}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/vpc_endpoint_service_private_dns_verification#service_id VpcEndpointServicePrivateDnsVerification#service_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.timeouts"></a>

```python
timeouts: VpcEndpointServicePrivateDnsVerificationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts">VpcEndpointServicePrivateDnsVerificationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/vpc_endpoint_service_private_dns_verification#timeouts VpcEndpointServicePrivateDnsVerification#timeouts}

---

##### `wait_for_verification`<sup>Optional</sup> <a name="wait_for_verification" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationConfig.property.waitForVerification"></a>

```python
wait_for_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/vpc_endpoint_service_private_dns_verification#wait_for_verification VpcEndpointServicePrivateDnsVerification#wait_for_verification}.

---

### VpcEndpointServicePrivateDnsVerificationTimeouts <a name="VpcEndpointServicePrivateDnsVerificationTimeouts" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint_service_private_dns_verification

vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.1/docs/resources/vpc_endpoint_service_private_dns_verification#create VpcEndpointServicePrivateDnsVerification#create}

---

## Classes <a name="Classes" id="Classes"></a>

### VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference <a name="VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_endpoint_service_private_dns_verification

vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts">VpcEndpointServicePrivateDnsVerificationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpcEndpointServicePrivateDnsVerificationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.vpcEndpointServicePrivateDnsVerification.VpcEndpointServicePrivateDnsVerificationTimeouts">VpcEndpointServicePrivateDnsVerificationTimeouts</a>]

---



